import { CustomWebComponent, UISize } from "@canyuegongzi/web-core";
interface Props {
    size?: UISize;
    label?: string;
    disabled?: boolean;
    checked?: boolean;
    value: string;
    name?: string;
    border?: boolean;
}
export default class WuRadio extends CustomWebComponent {
    static css: any;
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
    /**
     * 点击事件
     * @private
     */
    private clickHandler;
    installed(): void;
    render(props: Props): any;
}
export {};
