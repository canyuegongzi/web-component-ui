## 自定义 WebComponent 核心包

## 示例如下：

```
import { CustomWebComponent, h, CustomTag, extractClass, WebUiConfig, UISize } from "@canyuegongzi/web-core";
import * as css from './index.scss';

interface Props {
    size?: UISize
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
    plain?: boolean
    round?: boolean
    circle?: boolean
    loading?: boolean
    disabled?: boolean
    icon?: string
    nativeType?: 'button' | 'submit' | 'reset'
    text?: string
}
@CustomTag({ name: 'wu-button' })
export default class WuButton extends CustomWebComponent{
    static css = css.default ? css.default : css
    static defaultProps = {
        size: WebUiConfig.size,
        plain: false,
        round: false,
        circle: false,
        loading: false,
        disabled: false,
        nativeType: 'button'
    }

    static propTypes = {
        size: String,
        type: String,
        plain: Boolean,
        round: Boolean,
        circle: Boolean,
        loading: Boolean,
        disabled: Boolean,
        icon: String,
        nativeType: String,
        text: String,
    }
    constructor() {
        super();
    }

    public render(props: Props) {
        return (
            <button
                disabled={props.disabled}
                {...extractClass(props, 'wu-button', {
                    ['wu-button-' + props.type]: props.type,
                    ['wu-button-' + props.size]: props.size,
                    'is-plain': props.plain,
                    'is-round': props.round,
                    'is-circle': props.circle,
                    'is-disabled': props.disabled
                })}
                type={props.nativeType}
            >
                {props.loading && [
                    <svg
                        class="loading"
                        viewBox="0 0 1024 1024"
                        focusable="false"
                        data-icon="loading"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
                    </svg>,
                    ' ',
                ]}
                {props.text}
                <slot></slot>
            </button>
        );
    }
}
```
