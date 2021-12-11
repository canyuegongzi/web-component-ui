import { CustomWebComponent } from "@canyuegongzi/web-core";
export const css: any;
import WuRadio from "../Radio";
export default class WuRadioGroup extends CustomWebComponent {
    static css: typeof css | {
        readonly [key: string]: string;
    };
    static propTypes: {
        size: StringConstructor;
        disabled: BooleanConstructor;
        value: StringConstructor;
        name: StringConstructor;
    };
    static defaultProps: {
        size: string;
        disabled: boolean;
    };
    isChecked: boolean | undefined;
    private radioGroup;
    constructor();
    installed(): void;
    childRadioMounted(event: Event, ele: WuRadio, index: number): void;
    itemChange(event: Event, ele: WuRadio, index: number): void;
    groupChange(radio: WuRadio): void;
    uninstall(): void;
    render(): any;
}
