export default class WuIcon extends HTMLElement {
    private icon;
    private use;
    private d;
    static get observedAttributes(): string[];
    constructor();
    get view(): string | 1024;
    get name(): string;
    get path(): string;
    set name(value: string);
    set path(value: string);
    get size(): string;
    get color(): string;
    set size(value: string);
    set color(value: string);
    private connectedCallback;
    private attributeChangedCallback;
}
