import { CustomWebComponent, UISize } from "@canyuegongzi/web-core";
declare type InputType = 'textarea' | 'input';
interface Props {
    /**
     * 输入框值
     */
    value?: string;
    /**
     * 禁用
     */
    disabled?: boolean;
    /**
     * 类型
     */
    type?: InputType;
    /**
     * placeholder
     */
    placeholder?: string;
    /**
     * 是否存在清空
     */
    clearable?: boolean;
    /**
     * 规格
     */
    size?: UISize;
    /**
     * 末尾图标
     */
    suffixIcon?: string;
    /**
     * 前缀图标
     */
    prefixIcon?: string;
    /**
     * 最大长度
     */
    maxLength?: number;
    /**
     * 最小程度
     */
    minLength?: number;
    /**
     * 自动补齐
     */
    autoComplete?: string;
    /**
     * 块布局
     */
    block?: boolean;
    /**
     * 是否去空格
     */
    trim?: boolean;
    /**
     * 原生 --- name
     */
    name?: string;
    /**
     * 原生 --- form
     */
    form?: string;
    /**
     * 输入框行数，只对 type="textarea" 有效
     */
    rows?: number;
    /**
     * 鼠标进入
     * @param e
     */
    onMouseEnter: (e: Event) => void;
    /**
     * 鼠标离开
     * @param e
     */
    onMouseLeave: (e: Event) => void;
}
export default class WuInput extends CustomWebComponent {
    static css: any;
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
    /**
     * value get
     */
    onGetValue: () => string;
    /**
     * value set
     */
    onSetValue: (value: any) => void;
    /**
     * 输入框失去焦点
     * @param evt
     */
    handleBlur: (evt: any) => void;
    /**
     * 输入框聚焦
     * @param evt
     */
    handleFocus: (evt: any) => void;
    /**
     * 输入框输入值修改
     * @param evt
     */
    handleChange: (evt: any) => void;
    /**
     * 输入框输入事件
     * @param evt
     */
    handleInput: (evt: any) => void;
    /**
     * 聚焦
     */
    focus(): void;
    /**
     * 失去焦点
     */
    blur(): void;
    /**
     * 清除
     */
    clearInput: () => void;
    render(props: Props): any;
}
export {};
