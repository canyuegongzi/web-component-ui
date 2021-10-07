export default class WuInput extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>
        :host{
            box-sizing:border-box;
            display:inline-block;
        }
        </style>
        <div><input id="input" /><span>122233333</span></div>
        `;
        this.input = shadowRoot.getElementById('input');
    }
    static get observedAttributes() { return ['label', 'disabled', 'pattern', 'required', 'readonly', 'placeholder']; }
    connectedCallback() {
    }
    disconnectedCallback() {
        console.log('移除');
    }
}
if (!customElements.get('wu-input')) {
    customElements.define('wu-input', WuInput);
}
//# sourceMappingURL=index.js.map