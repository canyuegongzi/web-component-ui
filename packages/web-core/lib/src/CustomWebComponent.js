import { diff } from "./vNode/diff";
import { capitalize, cssToDom, hyphenate, isArray } from "./utils/utils";
export class CustomWebComponent extends HTMLElement {
    constructor() {
        super();
        this.computed = {};
        this.elementId = 0;
        this._customStyleElement = null;
        this._customStyleContent = null;
        this._willUpdate = false;
        this.props = Object.assign({}, this.constructor.defaultProps, this.props);
        this.computed = {};
        this.isInstalled = false;
    }
    connectedCallback() {
        const that = this;
        this.attrsToProps();
        let shadowRoot = this.initShadowRoot();
        shadowRoot = this.initCssStyle(shadowRoot);
        const rendered = this.render(this.props);
        this.rootNode = diff(null, rendered, null, this);
        if (that.css) {
            shadowRoot.appendChild(cssToDom(typeof that.css === 'function' ? that.css() : that.css));
        }
        if (this.props.css) {
            this._customStyleElement = cssToDom(this.props.css);
            this._customStyleContent = this.props.css;
            shadowRoot.appendChild(this._customStyleElement);
        }
        if (isArray(this.rootNode)) {
            this.rootNode.forEach(function (item) {
                shadowRoot.appendChild(item);
            });
        }
        else {
            this.rootNode && shadowRoot.appendChild(this.rootNode);
        }
        this.isInstalled = true;
    }
    disconnectedCallback() {
        this.uninstall();
        this.isInstalled = false;
    }
    removeAttribute(key) {
        super.removeAttribute(key);
        this.isInstalled && this.update();
    }
    setAttribute(key, val) {
        if (val && typeof val === 'object') {
            super.setAttribute(key, JSON.stringify(val));
        }
        else {
            super.setAttribute(key, val);
        }
        this.isInstalled && this.update();
    }
    attrsToProps(ignoreAttrs) {
        if (ignoreAttrs || (this.store && this.store.ignoreAttrs) || this.props.ignoreAttrs)
            return;
        const ele = this;
        ele.props['css'] = ele.getAttribute('css');
        const attrs = this.constructor.propTypes;
        console.log(attrs);
        if (!attrs)
            return;
        Object.keys(attrs).forEach((key) => {
            const type = attrs[key];
            const val = ele.getAttribute(hyphenate(key));
            if (val !== null) {
                switch (type) {
                    case String:
                        ele.props[key] = val;
                        break;
                    case Number:
                        ele.props[key] = Number(val);
                        break;
                    case Boolean:
                        if (val === 'false' || val === '0') {
                            ele.props[key] = false;
                        }
                        else {
                            ele.props[key] = true;
                        }
                        break;
                    case Array:
                    case Object:
                        ele.props[key] = JSON.parse(val.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g, '"$2":$4')
                            .replace(/'([\s\S]*?)'/g, '"$1"')
                            .replace(/,(\s*})/g, '$1'));
                        break;
                }
            }
            else {
                if (ele.constructor.defaultProps && ele.constructor.defaultProps.hasOwnProperty(key)) {
                    ele.props[key] = ele.constructor.defaultProps[key];
                }
                else {
                    ele.props[key] = null;
                }
            }
        });
        console.log(ele);
        console.log(ele.props);
    }
    initShadowRoot() {
        let shadowRoot;
        if (this.constructor.isLightDom) {
            shadowRoot = this;
        }
        else {
            if (!this.shadowRoot) {
                shadowRoot = this.attachShadow({ mode: 'open' });
            }
            else {
                shadowRoot = this.shadowRoot;
                let fc;
                while ((fc = shadowRoot.firstChild)) {
                    shadowRoot.removeChild(fc);
                }
            }
        }
        return shadowRoot;
    }
    initCssStyle(shadowRoot) {
        const elClass = this.constructor;
        if (elClass.elementStyles) {
            shadowRoot.adoptedStyleSheets = elClass.elementStyles;
        }
        else {
            const css = elClass.css;
            if (css) {
                if (typeof css === 'string') {
                    const styleSheet = new CSSStyleSheet();
                    styleSheet.replaceSync(css);
                    shadowRoot.adoptedStyleSheets = [styleSheet];
                }
                else if (Object.prototype.toString.call(css) === '[object Array]') {
                    const styleSheets = [];
                    css.forEach((styleSheet) => {
                        if (typeof styleSheet === 'string') {
                            const adoptedStyleSheet = new CSSStyleSheet();
                            adoptedStyleSheet.replaceSync(styleSheet);
                            styleSheets.push(adoptedStyleSheet);
                        }
                        else {
                            styleSheets.push(styleSheet);
                        }
                        shadowRoot.adoptedStyleSheets = styleSheets;
                    });
                }
                else {
                    shadowRoot.adoptedStyleSheets = [css];
                }
                elClass.elementStyles = shadowRoot.adoptedStyleSheets;
            }
        }
        return shadowRoot;
    }
    beforeUpdate() { }
    update(ignoreAttrs, updateSelf) {
        const that = this;
        this._willUpdate = true;
        this.beforeUpdate();
        this.beforeRender();
        if (this._customStyleContent != this.props.css) {
            this._customStyleContent = this.props.css;
            this._customStyleElement.textContent = this._customStyleContent;
        }
        this.attrsToProps(ignoreAttrs);
        const rendered = that.render(this.props, this.store);
        this.rendered();
        this.rootNode = diff(this.rootNode, rendered, this.constructor.isLightDom ? this : this.shadowRoot, this, updateSelf);
        this._willUpdate = false;
        this.updated();
    }
    forceUpdate() {
        this.update(true);
    }
    updateProps(obj) {
        Object.keys(obj).forEach(key => {
            this.props[key] = obj[key];
            if (this.prevProps) {
                this.prevProps[key] = obj[key];
            }
        });
        this.forceUpdate();
    }
    updateSelf(ignoreAttrs) {
        this.update(ignoreAttrs, true);
    }
    updated() { }
    beforeRender() { }
    rendered() { }
    receiveProps() { }
    pureRemoveAttribute(key) {
        super.removeAttribute(key);
    }
    pureSetAttribute(key, val) {
        super.setAttribute(key, val);
    }
    fire(name, data) {
        const handler = this.props[`on${capitalize(name)}`];
        if (handler) {
            handler(new CustomEvent(name, {
                detail: data
            }));
        }
        else {
            this.dispatchEvent(new CustomEvent(name, {
                detail: data
            }));
        }
    }
    uninstall() {
    }
}
//# sourceMappingURL=CustomWebComponent.js.map