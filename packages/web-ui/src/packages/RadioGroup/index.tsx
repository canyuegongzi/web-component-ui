import { CustomWebComponent, h, CustomTag, WebUiConfig, UISize } from "@canyuegongzi/web-core";
import * as css from './index.scss';
import WuRadio from "../Radio";

interface Props {
    size?: UISize;
    disabled?: boolean;
    value: string;
    name?: string;
}
@CustomTag({ name: 'wu-radio-group' })
export default class WuRadioGroup extends CustomWebComponent {
    static css = css.default ? css.default : css

    static propTypes = {
        size: String,
        disabled: Boolean,
        value: String,
        name: String,
    }

    static defaultProps = {
        size: WebUiConfig.size,
        disabled: false,
    }

    public isChecked: boolean | undefined;

    private radioGroup: NodeListOf<WuRadio> | any[] = []

    constructor() {
       super();
    }

    public installed() {
        this.radioGroup = this.querySelectorAll(`wu-radio[name='${this.props.name}']`) || [];
        if (this.radioGroup.length === 0) {
            this.radioGroup = this.querySelectorAll(`wu-radio-button[name='${this.props.name}']`) || [];
        }
        this.radioGroup.forEach((ele: WuRadio, index: number) => {
            ele.addEventListener('change', (event: Event) => {
                this.itemChange(event, ele, index);
            });
            // 子组件加载完毕后如果有value 手动触发更新组件
            ele.addEventListener('mounted', (event: Event) => {
               this.childRadioMounted(event, ele, index);
            });

        });

    }

    /**
     * 子元素加载完毕
     * @param event
     * @param ele
     * @param index
     */
    public childRadioMounted(event: Event, ele: WuRadio, index: number) {
        ele.updateProps({ size: this.props.size, disabled: this.props.disabled, name: this.props.name || '' });
        if (ele.props.value === this.props.value) {
            ele.updateProps({ checked: true });
        }
    }

    /**
     * 单选点击
     * @param event
     * @param ele
     * @param index
     */
    public itemChange(event: Event, ele: WuRadio, index: number) {
        if(this.props.disabled) return;
        this.radioGroup.forEach((item: WuRadio, currentIndex: number) => {
            item.updateProps({ checked: false });
            if (currentIndex === index) {
                item.updateProps({ checked: !item.props.checked });
                this.groupChange(item);
            }
        });
    }

    /**
     * group 组数据修改
     */
    public groupChange(radio: WuRadio) {
        this.fire('change', { value: radio.props.value });
    }

    /**
     * 组件卸载移除事件监听
     */
    public uninstall() {
        this.radioGroup.forEach((ele: WuRadio, index: number) => {
            ele.removeEventListener('change', (event: Event) => {
                this.itemChange(event, ele, index);
            });
            ele.removeEventListener('mounted', (event: Event) => {
                this.childRadioMounted(event, ele, index);
            });
        });
    }

    public render() {
        return (
            <div>
                <slot/>
            </div>
        );
    }
}

