;
(function () {
    if (window.Reflect === undefined ||
        window.customElements === undefined ||
        window.customElements.hasOwnProperty('polyfillWrapFlushCallback')) {
        return;
    }
    const BuiltInHTMLElement = HTMLElement;
    window.HTMLElement = function HTMLElement() {
        return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
    };
    HTMLElement.prototype = BuiltInHTMLElement.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();
export function cssToDom(css) {
    const node = document.createElement('style');
    node.textContent = css;
    return node;
}
export function camelCase(str) {
    return str.replace(/-(\w)/g, ($, $1) => {
        return $1.toUpperCase();
    });
}
export function Fragment(props) {
    return props.children;
}
export function extend(obj, props) {
    for (let i in props)
        obj[i] = props[i];
    return obj;
}
export function applyRef(ref, value) {
    if (ref != null) {
        if (typeof ref == 'function')
            ref(value);
        else
            ref.current = value;
    }
}
export const defer = typeof Promise == 'function'
    ? Promise.resolve().then.bind(Promise.resolve())
    : setTimeout;
export function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}
export function pathToArr(path) {
    if (typeof path !== 'string' || !path)
        return [];
    return path
        .replace(/]/g, '')
        .replace(/\[/g, '.')
        .split('.');
}
const hyphenateRE = /\B([A-Z])/g;
export function hyphenate(str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
}
export function capitalize(name) {
    return name
        .replace(/\-(\w)/g, function (all, letter) {
        return letter.toUpperCase();
    })
        .replace(/^\S/, (s) => s.toUpperCase());
}
export function getValByPath(path, current) {
    const arr = pathToArr(path);
    arr.forEach(prop => {
        current = current[prop];
    });
    return current;
}
export function removeItem(item, arr) {
    if (!arr)
        return;
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === item) {
            arr.splice(i, 1);
            break;
        }
    }
}
//# sourceMappingURL=utils.js.map