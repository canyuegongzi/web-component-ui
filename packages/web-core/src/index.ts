import { CustomWebComponent } from "./core/CustomWebComponent";
import { define } from "./core/define";
import { CustomTag } from "./core/CustomTag";
import { h } from "./vNode/h";
import { Fragment } from "./utils/utils";
import { classNames, extractClass } from "./class";
import { WebUiConfig } from "./webOptions";
// import { UISize } from './instance';
(h as any).f = Fragment ;
type UISize = 'medium' | 'small' | 'mini';
export {
    UISize,
    define,
    CustomWebComponent,
    CustomTag,
    WebUiConfig,
    h,
    classNames, extractClass
};
