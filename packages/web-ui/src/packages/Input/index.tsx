import { CustomWebComponent, h, CustomTag, UISize, extractClass } from "@canyuegongzi/web-core";
import * as css from './index.scss';

type InputType = 'textarea' | 'input';

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
@CustomTag({ name: 'wu-input' })
export default class WuInput extends CustomWebComponent {
    static css = css.default ? css.default : css

    static propTypes = {
        value: String,
        disabled: Boolean,
        type: String,
        placeholder: String,
        clearable: Boolean,
        trim: Boolean,
        size: String,
        suffixIcon: String,
        prefixIcon: String,
        maxLength: Number,
        minLength: Number,
        autoComplete: String,
        block: Boolean,
        name: String,
        form: String,
        rows: Number
    }

    static defaultProps = {
        value: '',
        type: 'text',
        autosize: false,
        rows: 2,
        trim: false,
        autoComplete: 'off',
        block: false
    }

    public $value: string | undefined;

    public tempTagName = '';

    public tempInputTagName = '';

    public valueLength = 0;

    constructor() {
        super();
    }

    install() {
        this.tempInputTagName = this.props.type === 'textarea' ? 'textarea' : 'input';
        this.$value = this.props.value;
        Object.defineProperty(this, 'value', {
            get: this.onGetValue,
            set: this.onSetValue
        });
    }

    /**
     * value get
     */
    public onGetValue = () => {
        return this.$value;
    }

    /**
     * value set
     */
    public onSetValue = (value) => {
        this.$value = value;
        this.props.value = value;
        this.setAttribute('value', value);
    }

    /**
     * 输入框失去焦点
     * @param evt
     */
    public handleBlur = (evt) => {
        if (this.props.onBlur) {
            this.props.onBlur(evt);
        } else {
            this.fire('blur', this.props.value);
        }
    }

    /**
     * 输入框聚焦
     * @param evt
     */
    public handleFocus = (evt) => {
        if (this.props.onFocus) {
            this.props.onFocus(evt);
        } else {
            this.fire('focus', this.props.value);
        }
    }

    /**
     * 输入框输入值修改
     * @param evt
     */
    public handleChange = (evt) => {
        this.$value = evt.target.value;
        this.props.value = evt.target.value;

        if (this.props.onChange) {
            this.props.onChange(evt);
        } else {
            this.fire('change', this.props.value);
        }
        console.log('change', evt);
    }

    /**
     * 输入框输入事件
     * @param evt
     */
    public handleInput = (evt) => {
        evt.stopPropagation();
        this.$value = evt.target.value;
        this.props.value = evt.target.value;

        if (this.props.onInput) {
            this.props.onInput(evt);
        } else {
            this.fire('input', this.props.value);
        }

        if (this.props.maxLength) {
            this.valueLength = evt.target.value.length;
            this.update();
        }
        console.log('input', evt);
    }

    /**
     * 聚焦
     */
    public focus() {
        // @ts-ignore
        this.shadowRoot.querySelector('input').focus();
    }

    /**
     * 失去焦点
     */
    public blur() {
        // @ts-ignore
        this.shadowRoot.querySelector('input').blur();
    }

    /**
     * 清除
     */
    public clearInput = () => {
        this.updateProps({
            value: ''
        });
        this.$value = '';
    }

    public render(props: Props) {
        const { type, size, suffixIcon, prefixIcon, autoComplete, onMouseEnter, onMouseLeave, trim, ...otherProps } = props;
        this.tempTagName = 'wu-icon-' + (suffixIcon || prefixIcon);
        this.tempInputTagName = type === 'textarea' ? 'textarea' : 'input';
        return (
            <div {
                     ...extractClass(props, 'wu-input',
                         {
                             [`wu-input--${size}`]: props.size,
                             'is-disabled': this.props.disabled,
                             'wu-input-suffix': suffixIcon,
                             'wu-input-prefix': prefixIcon,
                             'is-block': props.block
                         }
                     )
                 } onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>


                {(prefixIcon || suffixIcon) && <this.tempTagName
                    css={`svg{width: 1em }`}
                    {
                        ...extractClass(props, 'o-input__icon',
                            {
                                'is-prefix': prefixIcon,
                                'is-suffix': suffixIcon
                            }
                        )
                    }
                    // onClick={this.handleIconClick.bind(this)}
                />}

                <this.tempInputTagName  {...otherProps}
                                         type={type}
                                         className={`wu-${this.tempInputTagName}__inner`}
                                         autocomplete={autoComplete}
                                         maxLength={props.maxLength}
                                         onChange={this.handleChange}
                                         onFocus={this.handleFocus}
                                         onBlur={this.handleBlur}
                                         onInput={this.handleInput}
                />
                {props.clearable &&
                <svg onClick={this.clearInput} class="wu-icon-clear" fill="currentColor" width="1em" height="1em"
                     focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>}
                {props.maxLength && <span class="wu-input__count"><span class="wu-input__count-inner">
                {this.valueLength}/{props.maxLength}
                </span></span>}
            </div>
        );
    }
}

