import { IS_NON_DIMENSIONAL } from '../constants';
import { applyRef } from '../utils/utils';
import options from '../webOptions';
import { extension } from '../utils/extend';
export function createNode(nodeName, isSvg) {
    let node = isSvg
        ? document.createElementNS('http://www.w3.org/2000/svg', nodeName)
        : document.createElement(nodeName);
    node.normalizedNodeName = nodeName;
    return node;
}
export function removeNode(node) {
    let parentNode = node.parentNode;
    if (parentNode)
        parentNode.removeChild(node);
}
export function setAccessor(node, name, old, value, isSvg, component) {
    if (name === 'className')
        name = 'class';
    if (name[0] == 'o' && name[1] == '-') {
        if (extension[name]) {
            extension[name](node, value, component);
        }
    }
    else if (name === 'key') {
    }
    else if (name === 'ref') {
        applyRef(old, null);
        applyRef(value, node);
    }
    else if (name === 'class' && !isSvg) {
        node.className = value || '';
    }
    else if (name === 'style') {
        if (!value || typeof value === 'string' || typeof old === 'string') {
            node.style.cssText = value || '';
        }
        if (value && typeof value === 'object') {
            if (typeof old !== 'string') {
                for (let i in old)
                    if (!(i in value))
                        node.style[i] = '';
            }
            for (let i in value) {
                node.style[i] =
                    typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false
                        ? value[i] + 'px'
                        : value[i];
            }
        }
    }
    else if (name === 'dangerouslySetInnerHTML') {
        if (value)
            node.innerHTML = value.__html || '';
    }
    else if (name[0] == 'o' && name[1] == 'n') {
        bindEvent(node, name, value, old);
    }
    else if (node.nodeName === 'INPUT' && name === 'value') {
        node[name] = value == null ? '' : value;
    }
    else if (name !== 'list' &&
        name !== 'type' &&
        name !== 'css' &&
        !isSvg &&
        name in node &&
        value !== '') {
        try {
            node[name] = value == null ? '' : value;
        }
        catch (e) { }
        if ((value == null || value === false) && name != 'spellcheck')
            node.pureRemoveAttribute
                ? node.pureRemoveAttribute(name)
                : node.removeAttribute(name);
    }
    else {
        let ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));
        if (value == null || value === false) {
            if (ns)
                node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());
            else
                node.pureRemoveAttribute
                    ? node.pureRemoveAttribute(name)
                    : node.removeAttribute(name);
        }
        else if (typeof value !== 'function') {
            if (ns) {
                node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);
            }
            else {
                node.pureSetAttribute
                    ? node.pureSetAttribute(name, value)
                    : node.setAttribute(name, value);
            }
        }
    }
}
function eventProxy(e) {
    return this._listeners[e.type]((options.event && options.event(e)) || e);
}
function bindEvent(node, name, value, old) {
    let useCapture = name !== (name = name.replace(/Capture$/, ''));
    let nameLower = name.toLowerCase();
    name = (nameLower in node ? nameLower : name).slice(2);
    if (value) {
        if (!old) {
            node.addEventListener(name, eventProxy, useCapture);
        }
    }
    else {
        node.removeEventListener(name, eventProxy, useCapture);
    }
    ;
    (node._listeners || (node._listeners = {}))[name] = value;
}
//# sourceMappingURL=index.js.map