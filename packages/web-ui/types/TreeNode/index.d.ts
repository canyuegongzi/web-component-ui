import { CustomWebComponent, UISize } from "@canyuegongzi/web-core";
export const css: any;
export interface TreeNode {
    label: string;
    value: string;
    children?: TreeNode[];
    [key: string]: any;
}
interface Props {
    size?: UISize;
    disabled?: boolean;
    showCheckbox?: boolean;
    checked?: boolean;
    isCurrent?: boolean;
    treeNode: TreeNode;
}
export default class WuTreeNode extends CustomWebComponent {
    static css: typeof css | {
        readonly [key: string]: string;
    };
    static propTypes: {
        size: StringConstructor;
        disabled: BooleanConstructor;
        showCheckbox: BooleanConstructor;
        checked: BooleanConstructor;
        isCurrent: BooleanConstructor;
        treeNode: ObjectConstructor;
    };
    static defaultProps: {
        size: string;
        disabled: boolean;
        showCheckbox: boolean;
        checked: boolean;
        isCurrent: boolean;
        treeNode: null;
    };
    static observedAttrList: string[];
    observedAttrs: string[];
    isChecked: boolean | undefined;
    constructor();
    installed(): void;
    renderNodeContent(props: TreeNode): any;
    render(props: Props): any;
}
export {};
