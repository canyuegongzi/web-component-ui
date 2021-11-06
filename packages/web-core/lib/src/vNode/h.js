import options from '../webOptions';
import { Fragment } from '../utils/utils';
const stack = [];
export function h(nodeName, attributes) {
    let children = [], lastSimple, child, simple, i;
    for (i = arguments.length; i-- > 2;) {
        stack.push(arguments[i]);
    }
    if (attributes && attributes.children != null) {
        if (!stack.length)
            stack.push(attributes.children);
        delete attributes.children;
    }
    while (stack.length) {
        if ((child = stack.pop()) && child.pop !== undefined) {
            for (i = child.length; i--;)
                stack.push(child[i]);
        }
        else {
            if (typeof child === 'boolean')
                child = null;
            if ((simple = typeof nodeName !== 'function')) {
                if (child == null)
                    child = '';
                else if (typeof child === 'number')
                    child = String(child);
                else if (typeof child !== 'string')
                    simple = false;
            }
            if (simple && lastSimple) {
                children[children.length - 1] += child;
            }
            else if (children.length === 0) {
                children = [child];
            }
            else {
                children.push(child);
            }
            lastSimple = simple;
        }
    }
    if (nodeName === Fragment) {
        return children;
    }
    const p = {
        nodeName,
        children,
        attributes: attributes == null ? undefined : attributes,
        key: attributes == null ? undefined : attributes.key
    };
    if (options.vnode !== undefined)
        options.vnode(p);
    return p;
}
//# sourceMappingURL=h.js.map