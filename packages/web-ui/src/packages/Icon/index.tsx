import { CustomWebComponent, h, CustomTag } from "@canyuegongzi/web-core";
import * as css from './index.scss';

interface Props {
    name: string;
}
@CustomTag({ name: 'wu-icon' })
export default class WuIcon extends CustomWebComponent {
    static css = css.default ? css.default : css

    static propTypes = {
       name: String,
    }

    static defaultProps = {
        name: ''
    }

    constructor() {
        super();
    }

    public render(props: Props) {
        return (
           <i class={`wu-icon-${props.name}`} />
        );
    }
}

