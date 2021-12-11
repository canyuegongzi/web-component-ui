import { CustomWebComponent, UISize } from "@canyuegongzi/web-core";
export const css: any;
declare type InputType = 'textarea' | 'input';
interface Props {
    value?: string;
    disabled?: boolean;
    type?: InputType;
    placeholder?: string;
    clearable?: boolean;
    size?: UISize;
    suffixIcon?: string;
    prefixIcon?: string;
    maxLength?: number;
    minLength?: number;
    autoComplete?: string;
    block?: boolean;
    trim?: boolean;
    name?: string;
    form?: string;
    rows?: number;
    onMouseEnter: (e: Event) => void;
    onMouseLeave: (e: Event) => void;
}
export default class WuInput extends CustomWebComponent {
    static css: typeof css | {
        readonly [key: string]: string;
    };
    static propTypes: {
        value: StringConstructor;
        disabled: BooleanConstructor;
        type: StringConstructor;
        placeholder: StringConstructor;
        clearable: BooleanConstructor;
        trim: BooleanConstructor;
        size: StringConstructor;
        suffixIcon: StringConstructor;
        prefixIcon: StringConstructor;
        maxLength: NumberConstructor;
        minLength: NumberConstructor;
        autoComplete: StringConstructor;
        block: BooleanConstructor;
        name: StringConstructor;
        form: StringConstructor;
        rows: NumberConstructor;
    };
    static defaultProps: {
        value: string;
        type: string;
        autosize: boolean;
        rows: number;
        trim: boolean;
        autoComplete: string;
        block: boolean;
    };
    $value: string | undefined;
    tempTagName: string;
    tempInputTagName: string;
    valueLength: number;
    constructor();
    install(): void;
    onGetValue: () => string | undefined;
    onSetValue: (value: any) => void;
    handleBlur: (evt: any) => void;
    handleFocus: (evt: any) => void;
    handleChange: (evt: any) => void;
    handleInput: (evt: any) => void;
    focus(): void;
    blur(): void;
    clearInput: () => void;
    render(props: Props): any;
}
export {};
