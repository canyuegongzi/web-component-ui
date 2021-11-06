import { CustomWebComponent } from "./core/CustomWebComponent";
import { define } from "./core/define";
import { CustomTag } from "./core/CustomTag";
import { h } from "./vNode/h";
import { Fragment } from "./utils/utils";
import { classNames, extractClass } from "./class";

(h as any).f = Fragment ;

export {
    define,
    CustomWebComponent,
    CustomTag,
    h,
    classNames, extractClass
};
