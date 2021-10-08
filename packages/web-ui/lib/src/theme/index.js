import cssVars from 'css-vars-ponyfill';
import { baseColor, baseFontStyle, baseBorderStyle, buttonThemeStyle, aStyle } from "./common/var";
export const initTheme = (rootElement) => {
    const variables = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, baseColor), baseFontStyle), baseBorderStyle), buttonThemeStyle), aStyle);
    cssVars({
        shadowDOM: true,
        watch: true,
        variables: variables,
    });
};
//# sourceMappingURL=index.js.map