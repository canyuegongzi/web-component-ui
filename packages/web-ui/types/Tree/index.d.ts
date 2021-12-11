import { CustomWebComponent, UISize } from "@canyuegongzi/web-core";
import { TreeNode } from "../TreeNode";
import "../TreeNode";
export const css: any;
interface Props {
    size?: UISize;
    highlightCurrent: boolean;
    showCheckbox: boolean;
    data: TreeNode[];
}
export default class WuTree extends CustomWebComponent {
    static css: typeof css | {
        readonly [key: string]: string;
    };
    static propTypes: {
        size: StringConstructor;
        highlightCurrent: BooleanConstructor;
        showCheckbox: BooleanConstructor;
        data: ArrayConstructor;
    };
    static defaultProps: {
        size: string;
        highlightCurrent: boolean;
        showCheckbox: boolean;
        data: never[];
    };
    static observedAttrList: string[];
    isChecked: boolean | undefined;
    constructor();
    installed(): void;
    render(props: Props): any;
}
export {};
