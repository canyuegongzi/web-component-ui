import { h, extractClass, WebUiConfig, CustomTag, CustomWebComponent } from '@canyuegongzi/web-core';

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function debounce(fn, wait) {
    var timeout;
    return function () {
        timeout && clearTimeout(timeout);
        timeout = setTimeout(fn, wait);
    };
}

function extract(props, prop) {
    var _a;
    if (typeof prop === 'string') {
        if (props.hasOwnProperty(prop)) {
            return _a = {}, _a[prop] = props[prop], _a;
        }
    }
    else {
        var res_1 = {};
        prop.forEach(function (key) {
            if (props.hasOwnProperty(key)) {
                res_1[key] = props[key];
            }
        });
        return res_1;
    }
}


var css = `@charset "UTF-8";
/**********************系统级别配置*******************************/
/**********************基本颜色***************************/
/* Disable base
-------------------------- */
/* Transition
-------------------------- */
/* Color
-------------------------- */
/* 53a8ff */
/* 66b1ff */
/* 79bbff */
/* 8cc5ff */
/* a0cfff */
/* b3d8ff */
/* c6e2ff */
/* d9ecff */
/* ecf5ff */
/**********************基本边框***************************/
/**********************盒模型阴影*************************/
/**********************基本字体*************************/
/**********************Button***************************/
/**************************Radio****************************/
/* BEM support Func
 -------------------------- */
:host {
  display: inline-block;
}

.wu-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.wu-radio.is-border {
  padding: 12px 20px 0 10px;
  border-radius: 4px;
  border: 1px solid #C0C4CC;
  box-sizing: border-box;
  height: 40px;
}
.wu-radio.is-border.is-checked {
  border-color: #409EFF;
}
.wu-radio.is-border.is-disabled {
  cursor: not-allowed;
  border-color: #EBEEF5;
}
.wu-radio.is-border + .wu-radio.is-border {
  margin-left: 10px;
}

.wu-radio-medium.is-border {
  padding: 10px 20px 0 10px;
  border-radius: 4px;
  height: 36px;
}
.wu-radio-medium.is-border .wu-radio_label {
  font-size: 14px;
}
.wu-radio-medium.is-border .wu-radio_inner {
  height: 14px;
  width: 14px;
}

.wu-radio-small.is-border {
  padding: 8px 15px 0 10px;
  border-radius: 3px;
  height: 32px;
}
.wu-radio-small.is-border .wu-radio_label {
  font-size: 12px;
}
.wu-radio-small.is-border .wu-radio_inner {
  height: 12px;
  width: 12px;
}

.wu-radio-mini.is-border {
  padding: 6px 15px 0 10px;
  border-radius: 3px;
  height: 28px;
}
.wu-radio-mini.is-border .wu-radio_label {
  font-size: 12px;
}
.wu-radio-mini.is-border .wu-radio_inner {
  height: 12px;
  width: 12px;
}

.wu-radio:last-child {
  margin-right: 0;
}
.wu-radio .wu-radio_input {
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: middle;
}
.wu-radio .wu-radio_input.is-disabled .wu-radio_inner {
  background-color: #F5F7FA;
  border-color: #E4E7ED;
  cursor: not-allowed;
}
.wu-radio .wu-radio_input.is-disabled .wu-radio_inner::after {
  cursor: not-allowed;
  background-color: #F5F7FA;
}
.wu-radio .wu-radio_input.is-disabled .wu-radio_inner + .wu-radio_label {
  cursor: not-allowed;
}
.wu-radio .wu-radio_input.is-disabled.is-checked .wu-radio_inner {
  background-color: #F5F7FA;
  border-color: #E4E7ED;
}
.wu-radio .wu-radio_input.is-disabled.is-checked .wu-radio_inner::after {
  background-color: #C0C4CC;
}
.wu-radio .wu-radio_input.is-disabled + span.wu-radio_label {
  color: #C0C4CC;
  cursor: not-allowed;
}

.wu-radio .wu-radio_input.is-checked .wu-radio_inner {
  border-color: #409EFF;
  background: #409EFF;
}
.wu-radio .wu-radio_input.is-checked .wu-radio_inner::after {
  transform: translate(-50%, -50%) scale(1);
}
.wu-radio .wu-radio_input.is-checked + .wu-radio__label {
  color: #409EFF;
}

.wu-radio .wu-radio_input.is-focus .wu-radio_inner {
  border-color: #409EFF;
}

.wu-radio .wu-radio_inner {
  border: 1px solid #C0C4CC;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: #FFFFFF;
  position: relative;
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
}
.wu-radio .wu-radio_inner:hover {
  border-color: #409EFF;
}
.wu-radio .wu-radio_inner::after {
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: #FFFFFF;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.15s ease-in;
}

.wu-radio .wu-radio_original {
  opacity: 0;
  outline: none;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
}

.wu-radio:focus:not(.is-focus):not(:active):not(.is-disabled) {
  /*获得焦点时 样式提醒*/
}
.wu-radio:focus:not(.is-focus):not(:active):not(.is-disabled) .wu-radio_inner {
  box-shadow: 0 0 2px 2px #409EFF;
}
.wu-radio .wu-radio_label {
  font-size: 14px;
  padding-left: 10px;
}`


var WuRadio = (function (_super) {
    __extends(WuRadio, _super);
    function WuRadio() {
        var _this = _super.call(this) || this;
        _this.clickHandler = function () {
            if (_this.props.disabled)
                return;
            if (!_this.props.checked) {
                _this.updateProps({ checked: true });
                _this.fire('change', { value: true });
            }
            else {
                _this.updateProps({ checked: false });
                _this.fire('change', { value: false });
            }
        };
        return _this;
    }
    WuRadio.prototype.installed = function () {
        this.fire('mounted', { value: false });
    };
    WuRadio.prototype.render = function (props) {
        var _a;
        return (h("label", __assign({ role: "radio", tabindex: "0", onClick: debounce(this.clickHandler, 0) }, extractClass(props, 'wu-radio', (_a = {},
            _a['wu-radio-' + props.size] = props.size,
            _a['is-disabled'] = props.disabled,
            _a['is-border'] = props.border,
            _a['is-checked'] = props.checked,
            _a)), { "aria-checked": props.checked }),
            h("span", __assign({}, extractClass(props, 'wu-radio_input', {
                'is-disabled': props.disabled,
                'is-checked': props.checked
            })),
                h("span", { class: "wu-radio_inner" }),
                h("input", __assign({ type: "radio", "aria-hidden": "true" }, extract(props, ['checked', 'value', 'disabled']), { tabindex: "-1", class: "wu-radio_original" }))),
            h("span", { class: "wu-radio_label" },
                props.label,
                h("slot", null))));
    };
    WuRadio.css = undefined ? undefined : css;
    WuRadio.propTypes = {
        size: String,
        label: String,
        disabled: Boolean,
        checked: Boolean,
        value: String,
        name: String,
        border: Boolean
    };
    WuRadio.defaultProps = {
        size: WebUiConfig.size,
        disabled: false,
        checked: false,
        border: false,
        value: ''
    };
    WuRadio = __decorate([
        CustomTag({ name: 'wu-radio' })
    ], WuRadio);
    return WuRadio;
}(CustomWebComponent));

export { WuRadio as default };
