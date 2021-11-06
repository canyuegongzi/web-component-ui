import { CustomWebComponent } from "./CustomWebComponent";
import { define } from "./define";
import { CustomTag } from "./CustomTag";
import { h } from "./vNode/h";
import {Fragment} from "./utils/utils";

(h as any).f = Fragment ;

export {
    define,
    CustomWebComponent,
    CustomTag,
    h
}
