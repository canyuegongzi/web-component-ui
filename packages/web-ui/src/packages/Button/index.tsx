export default class WuButton extends HTMLElement {

    private input: HTMLElement | null;

    static get observedAttributes() { return ['label','disabled','pattern','required','readonly','placeholder'] }

    constructor() {
        super();
        const shadowRoot: ShadowRoot = this.attachShadow({ mode: 'open' });
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
                <input id="input" />
                <span>122233333</span>
            </div>
        `
        this.input = shadowRoot.getElementById('input');
    }

    connectedCallback() {
        console.log('初始化');
        // this.input = this.shadowRoot.getElementById('input');
    }

    disconnectedCallback() {
        console.log('移除');
    }

}

if(!customElements.get('wu-button')){
    customElements.define('wu-button', WuButton);
}
