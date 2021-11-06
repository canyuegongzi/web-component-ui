import options from "../webOptions";
export function isSameNodeType(node, vnode, hydrating) {
    if (typeof vnode === 'string' || typeof vnode === 'number') {
        return node.splitText !== undefined;
    }
    if (typeof vnode.nodeName === 'string') {
        return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
    }
    else if (typeof vnode.nodeName === 'function') {
        return options.mapping[node.nodeName.toLowerCase()] === vnode.nodeName;
    }
    return hydrating || node._componentConstructor === vnode.nodeName;
}
export function isNamedNode(node, nodeName) {
    return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}
//# sourceMappingURL=utils.js.map