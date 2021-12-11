function getGlobal() {
    return (self || window ||
        (function() {
            // @ts-ignore
            return this;
        })()
    );
}

export const WebUiConfig = {
    size: "mini",
};
export default {
    store: null,
    root: getGlobal(),
    mapping: {} as any
};
