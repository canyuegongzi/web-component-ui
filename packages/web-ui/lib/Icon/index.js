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

var SvgValue = require('./icon.svg');
var WuIcon = (function (_super) {
    __extends(WuIcon, _super);
    function WuIcon() {
        var _this = _super.call(this) || this;
        var shadowRoot = _this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = "\n        <style>\n        :host{\n            font-size:inherit;\n            display:inline-block;\n            transition:.3s;\n        }\n        .icon {\n            display:block;\n            width: 1em;\n            height: 1em;\n            margin: auto;\n            fill: currentColor;\n            overflow: hidden;\n            /*transition:inherit;*/\n        }\n        :host([spin]){\n            animation: rotate 1.4s linear infinite;\n        }\n        @keyframes rotate{\n            to{\n                transform: rotate(360deg);\n            }\n        }\n        </style>\n        <svg class=\"icon\" id=\"icon\" aria-hidden=\"true\" viewBox=\"0 0 " + _this.view + " " + _this.view + "\">\n            " + (_this.path ? '<path id="path"></path>' : '<use id="use"></use>') + "\n        </svg>\n        ";
        return _this;
    }
    Object.defineProperty(WuIcon, "observedAttributes", {
        get: function () { return ['name', 'size', 'color', 'path']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WuIcon.prototype, "view", {
        get: function () {
            return this.getAttribute('view') || 1024;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WuIcon.prototype, "name", {
        get: function () {
            return this.getAttribute('name') || '';
        },
        set: function (value) {
            this.setAttribute('name', value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WuIcon.prototype, "path", {
        get: function () {
            return this.getAttribute('path') || '';
        },
        set: function (value) {
            this.setAttribute('path', value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WuIcon.prototype, "size", {
        get: function () {
            return this.getAttribute('size') || '';
        },
        set: function (value) {
            this.setAttribute('size', value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WuIcon.prototype, "color", {
        get: function () {
            return this.getAttribute('color') || '';
        },
        set: function (value) {
            this.setAttribute('color', value);
        },
        enumerable: false,
        configurable: true
    });
    WuIcon.prototype.connectedCallback = function () {
        var _a;
        this.icon = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('icon');
        this.use = this.icon.querySelector('use');
        this.d = this.icon.querySelector('path');
        this.size && (this.size = this.size);
        this.color && (this.color = this.color);
        this.name && (this.name = this.name);
        this.path && (this.path = this.path);
    };
    WuIcon.prototype.attributeChangedCallback = function (name, oldValue, newValue) {
        if (name == 'name' && this.use) {
            this.use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', SvgValue + "#icon-" + newValue);
        }
        if (name == 'path' && this.d) {
            this.d.setAttribute("d", newValue);
        }
        if (name == 'color' && this.icon) {
            this.icon.style.color = newValue;
        }
        if (name == 'size' && this.icon) {
            this.icon.style.fontSize = newValue + 'px';
        }
    };
    return WuIcon;
}(HTMLElement));
if (!customElements.get('wu-icon')) {
    customElements.define('wu-icon', WuIcon);
}

export { WuIcon as default };
