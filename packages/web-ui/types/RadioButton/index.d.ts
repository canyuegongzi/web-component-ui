import { CustomWebComponent, UISize } from "@canyuegongzi/web-core";
export const css: any;
interface Props {
    size?: UISize;
    label?: string;
    disabled?: boolean;
    checked?: boolean;
    value: string;
    name?: string;
    border?: boolean;
}
export default class WuRadioButton extends CustomWebComponent {
    static css: typeof css | {
        readonly [key: string]: string;
    };
    static propTypes: {
        size: StringConstructor;
        label: StringConstructor;
        disabled: BooleanConstructor;
        checked: BooleanConstructor;
        value: StringConstructor;
        name: StringConstructor;
        border: BooleanConstructor;
    };
    static defaultProps: {
        size: string;
        disabled: boolean;
        checked: boolean;
        border: boolean;
        value: string;
    };
    isChecked: boolean | undefined;
    constructor();
    private clickHandler;
    installed(): void;
    render(props: Props): any;
}
export {};
