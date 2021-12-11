import { CustomWebComponent, UISize } from "@canyuegongzi/web-core";
export const css: any;
interface Props {
    size?: UISize;
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
    plain?: boolean;
    round?: boolean;
    circle?: boolean;
    loading?: boolean;
    disabled?: boolean;
    icon?: string;
    nativeType?: 'button' | 'submit' | 'reset';
    text?: string;
}
export default class WuButton extends CustomWebComponent {
    static css: typeof css | {
        readonly [key: string]: string;
    };
    static defaultProps: {
        size: string;
        plain: boolean;
        round: boolean;
        circle: boolean;
        loading: boolean;
        disabled: boolean;
        nativeType: string;
    };
    static propTypes: {
        size: StringConstructor;
        type: StringConstructor;
        plain: BooleanConstructor;
        round: BooleanConstructor;
        circle: BooleanConstructor;
        loading: BooleanConstructor;
        disabled: BooleanConstructor;
        icon: StringConstructor;
        nativeType: StringConstructor;
        text: StringConstructor;
    };
    constructor();
    render(props: Props): any;
}
export {};
