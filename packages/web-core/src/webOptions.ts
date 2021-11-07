function getGlobal() {
    if (typeof global !== 'object' || !global || global.Math !== Math || global.Array !== Array) {
        return (self || window || global ||
            (function() {
                // @ts-ignore
                return this;
            })()
        );
    }
    return global;
}

export const WebUiConfig = {
    size: "mini",
};
export default {
    store: null,
    root: getGlobal(),
    mapping: {} as any
};
