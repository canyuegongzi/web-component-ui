import { define } from "./define";

export interface CustomTagOptions {
    name: string;
}
function CustomTag(options: CustomTagOptions) {
    return function(target: any) {
        define(options.name, target);
    };
}

export { CustomTag };
