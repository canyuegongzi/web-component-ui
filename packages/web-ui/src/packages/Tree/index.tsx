import { CustomWebComponent, h, CustomTag, extractClass, WebUiConfig, UISize } from "@canyuegongzi/web-core";
import * as css from './index.scss';

interface Props {
    size?: UISize;
}
@CustomTag({ name: 'wu-tree' })
export default class WuTree extends CustomWebComponent {
    static css = css.default ? css.default : css

    static propTypes = {
        size: String,
    }

    static defaultProps = {
        size: WebUiConfig.size,
    }

    public isChecked: boolean | undefined;

    constructor() {
        super();
    }


    public installed() {

    }

    public render(props: Props) {
        return <div>树组件</div>;
    }
}

