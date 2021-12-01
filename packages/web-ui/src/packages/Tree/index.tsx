import { CustomWebComponent, h, CustomTag, extractClass, WebUiConfig, UISize } from "@canyuegongzi/web-core";
import { TreeNode } from "../TreeNode";
import "../TreeNode";
import * as css from './index.scss';

interface Props {
    size?: UISize;
    highlightCurrent: boolean
    showCheckbox: boolean,
    data: TreeNode[]
}
@CustomTag({ name: 'wu-tree' })
export default class WuTree extends CustomWebComponent {
    static css = css.default ? css.default : css

    static propTypes = {
        size: String,
        highlightCurrent: Boolean,
        showCheckbox: Boolean,
        data: Array
    }

    static defaultProps = {
        size: WebUiConfig.size,
        highlightCurrent: true,
        showCheckbox: false,
        data: []
    }

    static observedAttrList = [ "data" ];

    public isChecked: boolean | undefined;

    constructor() {
        super();
    }


    public installed() {

    }

    public render(props: Props) {
        console.log(props.data);
        return (
            <div {...extractClass(props, 'wu-tree', {
                ['wu-radio-' + props.size]: props.size,
                'wu-tree-highlight-current': props.highlightCurrent,
            })}>
                {
                    props.data.map(item => {
                        console.log(item);
                        return (
                            <wu-tree-node node={item } showCheckbox={props.showCheckbox} />
                        );
                    })

                }
            </div>
        );
    }
}

