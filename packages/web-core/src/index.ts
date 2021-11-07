import { CustomWebComponent } from "./core/CustomWebComponent";
import { define } from "./core/define";
import { CustomTag } from "./core/CustomTag";
import { h } from "./vNode/h";
import { Fragment } from "./utils/utils";
import { classNames, extractClass } from "./class";
import { WebUiConfig } from "./webOptions";
import { UISize } from './type';
(h as any).f = Fragment ;

export {
    UISize,
    define,
    CustomWebComponent,
    CustomTag,
    WebUiConfig,
    h,
    classNames, extractClass
};
