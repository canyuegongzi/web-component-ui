import { ATTR_KEY } from '../constants';
import { isSameNodeType, isNamedNode } from './utils';
import { createNode, setAccessor } from '../dom';
import { camelCase, isArray, Fragment } from '../utils/utils';
import { removeNode } from '../dom';
import options from '../webOptions';
export const mounts = [];
export let diffLevel = 0;
let isSvgMode = false;
let hydrating = false;
export function diff(dom, vnode, parent, component, updateSelf) {
    if (!dom && !vnode)
        return;
    let ret;
    if (!diffLevel++) {
        isSvgMode = parent != null && parent.ownerSVGElement !== undefined;
        hydrating = dom != null && !(ATTR_KEY in dom);
    }
    if (vnode && vnode.nodeName === Fragment) {
        vnode = vnode.children;
    }
    if (isArray(vnode)) {
        if (parent) {
            innerDiffNode(parent, vnode, hydrating, component, updateSelf);
        }
        else {
            ret = [];
            vnode.forEach((item, index) => {
                const ele = idiff(index === 0 ? dom : null, item, component, updateSelf);
                ret.push(ele);
            });
        }
    }
    else {
        if (isArray(dom)) {
            dom.forEach((one, index) => {
                if (index === 0) {
                    ret = idiff(one, vnode, component, updateSelf);
                }
                else {
                    recollectNodeTree(one, false);
                }
            });
        }
        else {
            ret = idiff(dom, vnode, component, updateSelf);
        }
        if (parent && ret.parentNode !== parent)
            parent.appendChild(ret);
    }
    if (!--diffLevel) {
        hydrating = false;
    }
    return ret;
}
function idiff(dom, vnode, component, updateSelf) {
    if (dom && vnode && dom.props) {
        dom.props.children = vnode.children;
    }
    let out = dom, prevSvgMode = isSvgMode;
    if (vnode == null || typeof vnode === 'boolean')
        vnode = '';
    if (typeof vnode === 'string' || typeof vnode === 'number') {
        if (dom &&
            dom.splitText !== undefined &&
            dom.parentNode &&
            (!dom._component || component)) {
            if (dom.nodeValue != vnode) {
                dom.nodeValue = vnode;
            }
        }
        else {
            out = document.createTextNode(vnode);
            if (dom) {
                if (dom.parentNode)
                    dom.parentNode.replaceChild(out, dom);
                recollectNodeTree(dom, true);
            }
        }
        out[ATTR_KEY] = true;
        return out;
    }
    let vnodeName = vnode.nodeName;
    if (typeof vnodeName === 'function') {
        for (const key in options.mapping) {
            if (options.mapping[key] === vnodeName) {
                vnodeName = key;
                vnode.nodeName = key;
                break;
            }
        }
    }
    isSvgMode =
        vnodeName === 'svg'
            ? true
            : vnodeName === 'foreignObject'
                ? false
                : isSvgMode;
    vnodeName = String(vnodeName);
    if (!dom || !isNamedNode(dom, vnodeName)) {
        out = createNode(vnodeName, isSvgMode);
        if (dom) {
            while (dom.firstChild)
                out.appendChild(dom.firstChild);
            if (dom.parentNode)
                dom.parentNode.replaceChild(out, dom);
            recollectNodeTree(dom, true);
        }
    }
    let fc = out.firstChild, props = out[ATTR_KEY], vchildren = vnode.children;
    if (props == null) {
        props = out[ATTR_KEY] = {};
        for (let a = out.attributes, i = a.length; i--;)
            props[a[i].name] = a[i].value;
    }
    if (!hydrating &&
        vchildren &&
        vchildren.length === 1 &&
        typeof vchildren[0] === 'string' &&
        fc != null &&
        fc.splitText !== undefined &&
        fc.nextSibling == null) {
        if (fc.nodeValue != vchildren[0]) {
            fc.nodeValue = vchildren[0];
        }
    }
    else if ((vchildren && vchildren.length) || fc != null) {
        if (!(out.constructor.is == 'WeElement' && out.constructor.noSlot)) {
            innerDiffNode(out, vchildren, hydrating || props.dangerouslySetInnerHTML != null, component, updateSelf);
        }
    }
    diffAttributes(out, vnode.attributes, props, component, updateSelf);
    if (out.props) {
        out.props.children = vnode.children;
    }
    isSvgMode = prevSvgMode;
    return out;
}
function innerDiffNode(dom, vchildren, isHydrating, component, updateSelf) {
    let originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren ? vchildren.length : 0, j, c, f, vchild, child;
    if (len !== 0) {
        for (let i = 0; i < len; i++) {
            const child = originalChildren[i], props = child[ATTR_KEY], key = vlen && props
                ? child._component
                    ? child._component.__key
                    : props.key
                : null;
            if (key != null) {
                keyedLen++;
                keyed[key] = child;
            }
            else if (props ||
                (child.splitText !== undefined
                    ? isHydrating
                        ? child.nodeValue.trim()
                        : true
                    : isHydrating)) {
                children[childrenLen++] = child;
            }
        }
    }
    if (vlen !== 0) {
        for (let i = 0; i < vlen; i++) {
            vchild = vchildren[i];
            child = null;
            if (vchild) {
                const key = vchild.key;
                if (key != null) {
                    if (keyedLen && keyed[key] !== undefined) {
                        child = keyed[key];
                        keyed[key] = undefined;
                        keyedLen--;
                    }
                }
                else if (!child && min < childrenLen) {
                    for (j = min; j < childrenLen; j++) {
                        if (children[j] !== undefined &&
                            isSameNodeType((c = children[j]), vchild, isHydrating)) {
                            child = c;
                            children[j] = undefined;
                            if (j === childrenLen - 1)
                                childrenLen--;
                            if (j === min)
                                min++;
                            break;
                        }
                    }
                }
            }
            child = idiff(child, vchild, component, updateSelf);
            f = originalChildren[i];
            if (child && child !== dom && child !== f) {
                if (f == null) {
                    dom.appendChild(child);
                }
                else if (child === f.nextSibling) {
                    removeNode(f);
                }
                else {
                    dom.insertBefore(child, f);
                }
            }
        }
    }
    if (keyedLen) {
        for (const i in keyed)
            if (keyed[i] !== undefined)
                recollectNodeTree(keyed[i], false);
    }
    while (min <= childrenLen) {
        if ((child = children[childrenLen--]) !== undefined)
            recollectNodeTree(child, false);
    }
}
export function recollectNodeTree(node, unmountOnly) {
    if (node[ATTR_KEY] != null && node[ATTR_KEY].ref) {
        if (typeof node[ATTR_KEY].ref === 'function') {
            node[ATTR_KEY].ref(null);
        }
        else if (node[ATTR_KEY].ref.current) {
            node[ATTR_KEY].ref.current = null;
        }
    }
    if (unmountOnly === false || node[ATTR_KEY] == null) {
        removeNode(node);
    }
    removeChildren(node);
}
export function removeChildren(node) {
    node = node.lastChild;
    while (node) {
        const next = node.previousSibling;
        recollectNodeTree(node, true);
        node = next;
    }
}
function diffAttributes(dom, attrs, old, component, updateSelf) {
    let name;
    const isWeElement = dom.update;
    let oldClone;
    if (dom.receiveProps) {
        oldClone = Object.assign({}, old);
    }
    for (name in old) {
        if (!(attrs && attrs[name] != null) && old[name] != null) {
            setAccessor(dom, name, old[name], (old[name] = undefined), isSvgMode, component);
            if (isWeElement) {
                delete dom.props[name];
            }
        }
    }
    for (name in attrs) {
        if (isWeElement && typeof attrs[name] === 'object' && name !== 'ref') {
            if (name === 'style') {
                setAccessor(dom, name, old[name], (old[name] = attrs[name]), isSvgMode, component);
            }
            const ccName = camelCase(name);
            dom.props[ccName] = old[ccName] = attrs[name];
        }
        else if (name !== 'children' &&
            (!(name in old) ||
                attrs[name] !==
                    (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
            setAccessor(dom, name, old[name], attrs[name], isSvgMode, component);
            if (dom.nodeName.indexOf('-') !== -1) {
                dom.props = dom.props || {};
                const ccName = camelCase(name);
                dom.props[ccName] = old[ccName] = attrs[name];
            }
            else {
                old[name] = attrs[name];
            }
        }
    }
    if (isWeElement && !updateSelf && dom.parentNode) {
        if (dom.receiveProps(dom.props, oldClone) !== false) {
            dom.update();
        }
    }
}
//# sourceMappingURL=diff.js.map