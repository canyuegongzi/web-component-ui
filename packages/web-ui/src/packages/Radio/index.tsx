import {CustomWebComponent, h} from "@canyuegongzi/web-core";
import * as css from './index.scss';

export default class WuRadio extends CustomWebComponent{
    static css = css.default ? css.default : css
    static defaultProps = {
        plain: false,
        round: false,
        circle: false,
        loading: false,
        disabled: false,
        autofocus: false,
        nativeType: 'button',
        block: false,
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
        autofocus: Boolean,
        nativeType: String,
        block: Boolean,
        text: String,
        options: Object
    }
    constructor() {
       super();
       console.log('Radio 初始化');
    }

    public render() {
        return (
            <div class="container">
                <div style={{color: 'red'}}>测试dom</div>
                <button/>
            </div>
        )
    }
}

if(!customElements.get('wu-radio')){
    customElements.define('wu-radio', WuRadio);
}
