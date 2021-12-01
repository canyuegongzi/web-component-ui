import { diff } from "../vNode/diff";
import { capitalize, cssToDom, hyphenate, isArray } from "../utils/utils";

export class CustomWebComponent  extends HTMLElement {

    static is = 'CustomWebComponent'

    public computed: any =  {};

    public isInstalled: boolean;

    public elementId = 0;

    public readonly props: any;

    public rootNode: any;

    public store: any;

    public _customStyleElement: HTMLStyleElement | any = null;

    public _customStyleContent: any = null;

    public _willUpdate = false;

    public prevProps: any;

    // public shadowRoot: any;

    static get observedAttributes() {
        return (this.constructor as any).observedAttrList || [];
    }
    constructor() {
        super();
        this.props = Object.assign({}, (this.constructor as any).defaultProps, this.props);
        this.computed = {};
        this.isInstalled = false;
    }

    /**
     * 属性变化
     */
    public attributeChangedCallback() {
        console.log('11111');
        this.update(true);
    }

    /***
     * 挂载自定义组件
     */
    public connectedCallback() {
        const that: any = this;
        this.attrsToProps();
        this.beforeInstall();
        this.install();
        this.afterInstall();
        let shadowRoot = this.initShadowRoot();
        shadowRoot = this.initCssStyle(shadowRoot);
        const rendered = (this as any).render(this.props);
        this.rootNode = diff(null, rendered, null, this);
        this.rendered();
        if (that.css) {
            shadowRoot.appendChild(cssToDom(typeof that.css === 'function' ? that.css() : that.css));
        }
        if (this.props.css) {
            this._customStyleElement = cssToDom(this.props.css);
            this._customStyleContent = this.props.css;
            shadowRoot.appendChild(this._customStyleElement);
        }
        if (isArray(this.rootNode)) {
            this.rootNode.forEach(function(item: HTMLElement) {
                shadowRoot.appendChild(item);
            });
        } else {
            this.rootNode && shadowRoot.appendChild(this.rootNode);
        }
        // this.shadowRoot = shadowRoot;
        this.installed();
        this.isInstalled = true;
    }

    /**
     * 组件销毁
     */
    public disconnectedCallback() {
        this.uninstall();
        this.isInstalled = false;
    }

    /**
     * 属性移除
     * @param key
     */
    public removeAttribute(key: string) {
        super.removeAttribute(key);
        //Avoid executing removeAttribute methods before connectedCallback
        this.isInstalled && this.update();
    }

    /**
     * 设置属性
     * @param key
     * @param val
     */
    public setAttribute(key: string, val: any) {
        if (val && typeof val === 'object') {
            super.setAttribute(key, JSON.stringify(val));
        } else {
            super.setAttribute(key, val);
        }
        //Avoid executing setAttribute methods before connectedCallback
        this.isInstalled && this.update();
    }

    /**
     * 组件属性转化
     * @param ignoreAttrs
     * @private
     */
    public attrsToProps(ignoreAttrs?: any[]) {
        if (ignoreAttrs || (this.store && this.store.ignoreAttrs) || this.props.ignoreAttrs) return;
        const ele: any = this;
        ele.props['css'] = ele.getAttribute('css');
        const attrs = (this.constructor as any).propTypes;
        if (!attrs) return;
        Object.keys(attrs).forEach((key: string) => {
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
                        } else {
                            ele.props[key] = true;
                        }
                        break;
                    case Array:
                    case Object:
                        ele.props[key] = JSON.parse(
                            val.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g, '"$2":$4')
                               .replace(/'([\s\S]*?)'/g, '"$1"')
                               .replace(/,(\s*})/g, '$1')
                        );
                        break;
                }
            } else {
                if (
                    ele.constructor.defaultProps && ele.constructor.defaultProps.hasOwnProperty(key)) {
                    ele.props[key] = ele.constructor.defaultProps[key];
                } else {
                    ele.props[key] = null;
                }
            }
        });
    }

    /**
     * 初始化影子dom
     * @private
     */
    public initShadowRoot() {
        let shadowRoot: ShadowRoot | any;
        if ((this.constructor as any).isLightDom) {
            shadowRoot = this;
        } else {
            if (!this.shadowRoot) {
                shadowRoot = this.attachShadow({ mode: 'open' });
            } else {
                shadowRoot = this.shadowRoot;
                let fc;
                while ((fc = shadowRoot.firstChild)) {
                    shadowRoot.removeChild(fc);
                }
            }
        }
        return shadowRoot;
    }

    /**
     * 初始化样式
     * @private
     */
    public initCssStyle(shadowRoot: ShadowRoot | any) {
        const elClass: any = this.constructor as any;
        if (elClass.elementStyles) {
            shadowRoot.adoptedStyleSheets = elClass.elementStyles;
        } else {
            const css = elClass.css;
            if (css) {
                if (typeof css === 'string') {
                    const styleSheet: CSSStyleSheet = new CSSStyleSheet();
                    // @ts-ignore
                    styleSheet.replaceSync(css);
                    shadowRoot.adoptedStyleSheets = [ styleSheet ];
                } else if (Object.prototype.toString.call(css) === '[object Array]') {
                    const styleSheets: CSSStyleSheet[] = [];
                    css.forEach((styleSheet: CSSStyleSheet) => {
                        if (typeof styleSheet === 'string') {
                            const adoptedStyleSheet = new CSSStyleSheet();
                            // @ts-ignore
                            adoptedStyleSheet.replaceSync(styleSheet);
                            styleSheets.push(adoptedStyleSheet);
                        } else {
                            styleSheets.push(styleSheet);
                        }
                        shadowRoot.adoptedStyleSheets = styleSheets;
                    });
                } else {
                    shadowRoot.adoptedStyleSheets = [ css ];
                }
                elClass.elementStyles = shadowRoot.adoptedStyleSheets;
            }
        }
        return shadowRoot;
    }

    /**
     * 组件属性更新前
     * @private
     */
    public beforeUpdate() {}

    /**
     * 组件更新
     * @param ignoreAttrs
     * @param updateSelf
     * @private
     */
    public update(ignoreAttrs?: any, updateSelf?: any) {
        const that: any = this;
        this._willUpdate = true;
        this.beforeUpdate();
        this.beforeRender();
        if (this._customStyleContent != this.props.css) {
            this._customStyleContent = this.props.css;
            this._customStyleElement.textContent = this._customStyleContent;
        }
        this.attrsToProps(ignoreAttrs);
        // 属性变化，重新执行render 渲染， 走diff，生成新的dom
        const rendered = that.render(this.props, this.store);
        this.rendered();
        this.rootNode = diff(
            this.rootNode,
            rendered,
            (this.constructor as any).isLightDom ? this : this.shadowRoot,
            this,
            updateSelf
        );
        this._willUpdate = false;
        this.updated();
    }

    /**
     * 强制更新
     * @private
     */
    public forceUpdate() {
        this.update(true);
    }

    /**
     * 更新props
     * @param obj
     * @private
     */
    public updateProps(obj: any) {
        Object.keys(obj).forEach(key => {
            this.props[key] = obj[key];
            if (this.prevProps) {
                this.prevProps[key] = obj[key];
            }
        });
        this.forceUpdate();
    }

    /**
     * 更新自己
     * @param ignoreAttrs
     * @private
     */
    public updateSelf(ignoreAttrs: any) {
        this.update(ignoreAttrs, true);
    }

    /**
     * 组件属性更新完成
     * @private
     */
    public updated() {}

    /**
     * 渲染前
     * @private
     */
    public beforeRender() {}

    /**
     * 渲染完成
     * @private
     */
    public rendered() {}

    /**
     * 属性接受
     * @private
     */
    public receiveProps() {}

    /**
     * 优化属性更新
     * @param key
     */
    public pureRemoveAttribute(key: string) {
        super.removeAttribute(key);
    }

    /**
     * 优化属性更新
     * @param key
     * @param val
     */
    public pureSetAttribute(key: string, val: string) {
        super.setAttribute(key, val);
    }

    /**
     * 事件代理
     * @param name
     * @param data
     * @private
     */
    public fire(name: string, data: any) {
        const handler = this.props[`on${capitalize(name)}`];
        if (handler) {
            handler(
                new CustomEvent(name, {
                    detail: data
                })
            );
        } else {
            this.dispatchEvent(
                new CustomEvent(name, {
                    detail: data
                })
            );
        }
    }

    /**
     * 组件卸载
     * @private
     */
    public uninstall() {

    }

    public beforeInstall() {

    }

    public install() {

    }

    public afterInstall() {

    }

    public installed() {

    }
}

