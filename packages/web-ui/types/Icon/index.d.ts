import { CustomWebComponent } from "@canyuegongzi/web-core";
export const css: any;
interface Props {
    name: string;
}
export default class WuIcon extends CustomWebComponent {
    static css: typeof css | {
        readonly [key: string]: string;
    };
    static propTypes: {
        name: StringConstructor;
    };
    static defaultProps: {
        name: string;
    };
    constructor();
    render(props: Props): any;
}
export {};
