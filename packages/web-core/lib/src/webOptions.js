function getGlobal() {
    if (typeof global !== 'object' || !global || global.Math !== Math || global.Array !== Array) {
        return (self || window || global ||
            (function () {
                return this;
            })());
    }
    return global;
}
export default {
    store: null,
    root: getGlobal(),
    mapping: {}
};
//# sourceMappingURL=webOptions.js.map