export default class WuTest extends HTMLElement {

    static get observedAttributes() {
        return ['label', 'disabled', 'pattern', 'required', 'readonly', 'placeholder']
    }

    constructor() {
        super();
        const shadowRoot: ShadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
            <style>
                :host{
                    box-sizing:border-box;
                    display:inline-block;
                }
                #inputContainer {
                    background: var(--color-success);
                }
            </style>
            <div class="input-container" id="inputContainer">
                <span>测试vvvvvvvvvvvvvvvvvvvdddd</span>
                <input id="input" />
            </div>
        `
    }

    connectedCallback() {
        console.log('初始化');
        // this.input = this.shadowRoot.getElementById('input');
    }

    disconnectedCallback() {
        console.log('移除');
    }

}

if(!customElements.get('wu-test')){
    customElements.define('wu-test', WuTest);
}
