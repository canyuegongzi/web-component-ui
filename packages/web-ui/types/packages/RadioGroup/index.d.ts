import { CustomWebComponent } from "@canyuegongzi/web-core";
import WuRadio from "../Radio";
export default class WuRadioGroup extends CustomWebComponent {
    static css: any;
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
    /**
     * 子元素加载完毕
     * @param event
     * @param ele
     * @param index
     */
    childRadioMounted(event: Event, ele: WuRadio, index: number): void;
    /**
     * 单选点击
     * @param event
     * @param ele
     * @param index
     */
    itemChange(event: Event, ele: WuRadio, index: number): void;
    /**
     * group 组数据修改
     */
    groupChange(radio: WuRadio): void;
    /**
     * 组件卸载移除事件监听
     */
    uninstall(): void;
    render(): any;
}
