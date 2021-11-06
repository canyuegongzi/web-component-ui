/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var WuButton = (function (_super) {
    __extends(WuButton, _super);
    function WuButton() {
        var _this = _super.call(this) || this;
        var shadowRoot = _this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = "\n            <style>\n                :host{\n                    box-sizing:border-box;\n                    display:inline-block;\n                }\n                #inputContainer {\n                    background: var(--color-success);\n                }\n            </style>\n            <div class=\"input-container\" id=\"inputContainer\">\n                <input id=\"input\" />\n                <span>122233333</span>\n            </div>\n        ";
        _this.input = shadowRoot.getElementById('input');
        return _this;
    }
    Object.defineProperty(WuButton, "observedAttributes", {
        get: function () { return ['label', 'disabled', 'pattern', 'required', 'readonly', 'placeholder']; },
        enumerable: false,
        configurable: true
    });
    WuButton.prototype.connectedCallback = function () {
        console.log('初始化');
    };
    WuButton.prototype.disconnectedCallback = function () {
        console.log('移除');
    };
    return WuButton;
}(HTMLElement));
if (!customElements.get('wu-button')) {
    customElements.define('wu-button', WuButton);
}

export { WuButton as default };
