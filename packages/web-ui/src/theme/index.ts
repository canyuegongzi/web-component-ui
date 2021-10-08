import cssVars from 'css-vars-ponyfill'
import {baseColor, baseFontStyle, baseBorderStyle, buttonThemeStyle, aStyle } from "./common/var";

export const initTheme = (rootElement?: any) => {
    const variables = {
            ...baseColor,
            ...baseFontStyle,
            ...baseBorderStyle,
            ...buttonThemeStyle,
            ...aStyle
    }
    cssVars({
        shadowDOM: true,
        watch: true, // 当添加，删除或修改其<link>或<style>元素的禁用或href属性时，ponyfill将自行调用
        variables: variables, // variables 自定义属性名/值对的集合
        //onlyLegacy: false, // false  默认将css变量编译为浏览器识别的css样式  true 当浏览器不支持css变量的时候将css变量编译为识别的css
    })
}
