import { CustomWebComponent, h, CustomTag, extractClass, WebUiConfig, UISize } from "@canyuegongzi/web-core";
import * as css from './index.scss';

export interface TreeNode {
    label: string;
    value: string;
    children?: TreeNode[];
    [key: string]: any
}

interface Props {
    size?: UISize;
    disabled?: boolean;
    showCheckbox?: boolean;
    checked?: boolean;
    isCurrent?: boolean;
    treeNode: TreeNode
}
@CustomTag({ name: 'wu-tree-node' })
export default class WuTreeNode extends CustomWebComponent {
    static css = css.default ? css.default : css

    static propTypes = {
        size: String,
        disabled: Boolean,
        showCheckbox: Boolean,
        checked: Boolean,
        isCurrent: Boolean,
        treeNode: Object
    }
    // 773133778903430

    static defaultProps = {
        size: WebUiConfig.size,
        disabled: false,
        showCheckbox: false,
        checked: false,
        isCurrent: false,
        treeNode: null
    }

    static observedAttrList = [ "node" ];
    public observedAttrs = [ "node" ];
    public isChecked: boolean | undefined;

    constructor() {
        super();
    }

    public installed() {
        console.log(this.props);
    }

    /**
     * 渲染单节点
     * @param props
     */
    public renderNodeContent(props: TreeNode) {
        return (
            <div class="wu-tree-node_label">
                {props?.label}
            </div>
        );
    }

    public render(props: Props) {
        return (
            <div {...extractClass(props, 'wu-tree-node', {
                ['wu-radio-' + props.size]: props.size,
                'is-disabled': props.disabled,
                'is-focusable': !props.disabled,
                'is-checked': props.checked,
                'is-current': props.isCurrent
            })}>
                <div>折叠</div>
                {this.renderNodeContent(props.treeNode)}
                <div class="el-tree-node_children">
                    {
                        props.treeNode?.children && props.treeNode.children.map(item => {
                            return (
                                <wu-tree-node {...props} node={{ ...item }} />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

