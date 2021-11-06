import { h, CustomWebComponent } from '@canyuegongzi/web-core';

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


var css = `.container {
  font-weight: bold;
}`


console.log(css);
var WuRadio = (function (_super) {
    __extends(WuRadio, _super);
    function WuRadio() {
        var _this = _super.call(this) || this;
        console.log('Radio 初始化');
        return _this;
    }
    WuRadio.prototype.render = function () {
        return (h("div", { class: "container" },
            h("div", { style: { color: 'red' } }, "\u6D4B\u8BD5dom"),
            h("button", null)));
    };
    WuRadio.css = undefined ? undefined : css;
    WuRadio.defaultProps = {
        plain: false,
        round: false,
        circle: false,
        loading: false,
        disabled: false,
        autofocus: false,
        nativeType: 'button',
        block: false,
    };
    WuRadio.propTypes = {
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
    };
    return WuRadio;
}(CustomWebComponent));
if (!customElements.get('wu-radio')) {
    customElements.define('wu-radio', WuRadio);
}

export { WuRadio as default };
