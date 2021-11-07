import { CustomWebComponent, h, CustomTag, extractClass, WebUiConfig, UISize } from "@canyuegongzi/web-core";
import { debounce, extract } from "../../utils";
import * as css from './index.scss';

interface Props {
    size?: UISize;
    label?: string;
    disabled?: boolean;
    checked?: boolean;
    value: string;
    name?: string;
    border?: boolean;
}
@CustomTag({ name: 'wu-radio-button' })
export default class WuRadioButton extends CustomWebComponent {
    static css = css.default ? css.default : css

    static propTypes = {
        size: String,
        label: String,
        disabled: Boolean,
        checked: Boolean,
        value: String,
        name: String,
        border: Boolean
    }

    static defaultProps = {
        size: WebUiConfig.size,
        disabled: false,
        checked: false,
        border: false,
        value: ''
    }

    public isChecked: boolean | undefined;

    constructor() {
       super();
    }

    /**
     * 点击事件
     * @private
     */
    private clickHandler = () => {
        if (this.props.disabled) return;
        if (!this.props.checked) {
            // this.group.forEach(item => item.updateProps({ checked: false }));
            this.updateProps({ checked: true });
            this.fire('change', { value: true });
        } else {
            // this.group.forEach(item => item.updateProps({ checked: false }));
            this.updateProps({ checked: false });
            this.fire('change', { value: false });
        }
    }


    public installed() {
        this.fire('mounted', {});
    }

    public render(props: Props) {
        return (
            <label role="radio" tabindex="0" onClick={debounce(this.clickHandler, 0)} {...extractClass(props, 'wu-radio-button', {
                ['wu-radio-button-' + props.size]: props.size,
                'is-disabled': props.disabled,
                'is-border': props.border,
                'is-checked': props.checked,
                'is-active': props.checked,
            })} aria-checked={props.checked}>
                <input type="radio" aria-hidden="true" {...extract(props, [ 'checked', 'value', 'disabled' ])} tabindex="-1" class="wu-radio-button_orig-radio" />
                <span class="wu-radio-button_inner">
                    {props.label}<slot/>
                </span>
            </label>
        );
    }
}

