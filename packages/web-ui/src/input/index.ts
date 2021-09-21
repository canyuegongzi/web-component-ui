export default class WuInput extends HTMLElement {

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
        </style>
        <div><input id="input" /><span>122233333</span></div>
        `
        this.input = shadowRoot.getElementById('input');
    }

    connectedCallback() {
        // this.input = this.shadowRoot.getElementById('input');
    }

    disconnectedCallback() {
        console.log('移除');
    }

}

if(!customElements.get('wu-input')){
    customElements.define('wu-input', WuInput);
}
