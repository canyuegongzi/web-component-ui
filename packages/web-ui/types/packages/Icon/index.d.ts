import { CustomWebComponent } from "@canyuegongzi/web-core";
interface Props {
    name: string;
}
export default class WuIcon extends CustomWebComponent {
    static css: any;
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
