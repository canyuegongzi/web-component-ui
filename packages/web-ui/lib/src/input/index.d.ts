export default class WuInput extends HTMLElement {
    private input;
    static get observedAttributes(): string[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
}
