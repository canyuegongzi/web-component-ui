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

var index$4 = "@charset \"UTF-8\";\n/**********************系统级别配置*******************************/\n/**********************基本颜色***************************/\n/* Disable base\n-------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/**********************基本边框***************************/\n/**********************盒模型阴影*************************/\n/**********************基本字体*************************/\n/**********************Button***************************/\n/**************************Radio****************************/\n/* BEM support Func\n -------------------------- */\n:host {\n  display: inline-block;\n}\n\n.wu-radio {\n  color: #606266;\n  font-weight: 500;\n  line-height: 1;\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  white-space: nowrap;\n  outline: none;\n  font-size: 14px;\n  margin-right: 30px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n.wu-radio.is-border {\n  padding: 12px 20px 0 10px;\n  border-radius: 4px;\n  border: 1px solid #C0C4CC;\n  box-sizing: border-box;\n  height: 40px;\n}\n.wu-radio.is-border.is-checked {\n  border-color: #409EFF;\n}\n.wu-radio.is-border.is-disabled {\n  cursor: not-allowed;\n  border-color: #EBEEF5;\n}\n.wu-radio.is-border + .wu-radio.is-border {\n  margin-left: 10px;\n}\n\n.wu-radio-medium.is-border {\n  padding: 10px 20px 0 10px;\n  border-radius: 4px;\n  height: 36px;\n}\n.wu-radio-medium.is-border .wu-radio_label {\n  font-size: 14px;\n}\n.wu-radio-medium.is-border .wu-radio_inner {\n  height: 14px;\n  width: 14px;\n}\n\n.wu-radio-small.is-border {\n  padding: 8px 15px 0 10px;\n  border-radius: 3px;\n  height: 32px;\n}\n.wu-radio-small.is-border .wu-radio_label {\n  font-size: 12px;\n}\n.wu-radio-small.is-border .wu-radio_inner {\n  height: 12px;\n  width: 12px;\n}\n\n.wu-radio-mini.is-border {\n  padding: 6px 15px 0 10px;\n  border-radius: 3px;\n  height: 28px;\n}\n.wu-radio-mini.is-border .wu-radio_label {\n  font-size: 12px;\n}\n.wu-radio-mini.is-border .wu-radio_inner {\n  height: 12px;\n  width: 12px;\n}\n\n.wu-radio:last-child {\n  margin-right: 0;\n}\n.wu-radio .wu-radio_input {\n  white-space: nowrap;\n  cursor: pointer;\n  outline: none;\n  display: inline-block;\n  line-height: 1;\n  position: relative;\n  vertical-align: middle;\n}\n.wu-radio .wu-radio_input.is-disabled .wu-radio_inner {\n  background-color: #F5F7FA;\n  border-color: #E4E7ED;\n  cursor: not-allowed;\n}\n.wu-radio .wu-radio_input.is-disabled .wu-radio_inner::after {\n  cursor: not-allowed;\n  background-color: #F5F7FA;\n}\n.wu-radio .wu-radio_input.is-disabled .wu-radio_inner + .wu-radio_label {\n  cursor: not-allowed;\n}\n.wu-radio .wu-radio_input.is-disabled.is-checked .wu-radio_inner {\n  background-color: #F5F7FA;\n  border-color: #E4E7ED;\n}\n.wu-radio .wu-radio_input.is-disabled.is-checked .wu-radio_inner::after {\n  background-color: #C0C4CC;\n}\n.wu-radio .wu-radio_input.is-disabled + span.wu-radio_label {\n  color: #C0C4CC;\n  cursor: not-allowed;\n}\n\n.wu-radio .wu-radio_input.is-checked .wu-radio_inner {\n  border-color: #409EFF;\n  background: #409EFF;\n}\n.wu-radio .wu-radio_input.is-checked .wu-radio_inner::after {\n  transform: translate(-50%, -50%) scale(1);\n}\n.wu-radio .wu-radio_input.is-checked + .wu-radio__label {\n  color: #409EFF;\n}\n\n.wu-radio .wu-radio_input.is-focus .wu-radio_inner {\n  border-color: #409EFF;\n}\n\n.wu-radio .wu-radio_inner {\n  border: 1px solid #C0C4CC;\n  border-radius: 100%;\n  width: 14px;\n  height: 14px;\n  background-color: #FFFFFF;\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  box-sizing: border-box;\n}\n.wu-radio .wu-radio_inner:hover {\n  border-color: #409EFF;\n}\n.wu-radio .wu-radio_inner::after {\n  width: 4px;\n  height: 4px;\n  border-radius: 100%;\n  background-color: #FFFFFF;\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: transform 0.15s ease-in;\n}\n\n.wu-radio .wu-radio_original {\n  opacity: 0;\n  outline: none;\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n}\n\n.wu-radio:focus:not(.is-focus):not(:active):not(.is-disabled) {\n  /*获得焦点时 样式提醒*/\n}\n.wu-radio:focus:not(.is-focus):not(:active):not(.is-disabled) .wu-radio_inner {\n  box-shadow: 0 0 2px 2px #409EFF;\n}\n.wu-radio .wu-radio_label {\n  font-size: 14px;\n  padding-left: 10px;\n}";

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
    WuRadio.css = index$4 ;
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

var index$3 = "@charset \"UTF-8\";\n/**********************系统级别配置*******************************/\n/**********************基本颜色***************************/\n/* Disable base\n-------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/**********************基本边框***************************/\n/**********************盒模型阴影*************************/\n/**********************基本字体*************************/\n/**********************Button***************************/\n/**************************Radio****************************/\n/* BEM support Func\n -------------------------- */\n:host {\n  display: inline-block;\n}\n\n:host([block]) {\n  display: block;\n}\n\n.wu-button {\n  display: inline-block;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: pointer;\n  background: #FFFFFF;\n  border: 1px solid #C0C4CC;\n  color: #606266;\n  -webkit-appearance: none;\n  text-align: center;\n  box-sizing: border-box;\n  outline: none;\n  margin: 0;\n  transition: 0.1s;\n  font-weight: 500;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  padding: 12px 20px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.wu-button + .wu-button {\n  margin-left: 10px;\n}\n.wu-button.is-round {\n  padding: 12px 20px;\n}\n.wu-button:hover, .wu-button:focus {\n  color: #409EFF;\n  border-color: #c6e2ff;\n  background-color: #ecf5ff;\n}\n.wu-button:active {\n  color: #3a8ee6;\n  border-color: #3a8ee6;\n  outline: none;\n}\n.wu-button::-moz-focus-inner {\n  border: 0;\n}\n.wu-button [class*=wu-icon-] + span {\n  margin-left: 5px;\n}\n.wu-button.is-plain:hover, .wu-button.is-plain:focus {\n  background: #FFFFFF;\n  border-color: #409EFF;\n  color: #409EFF;\n}\n.wu-button.is-plain:active {\n  background: #FFFFFF;\n  border-color: #3a8ee6;\n  color: #3a8ee6;\n  outline: none;\n}\n\n.wu-button.is-active {\n  color: #3a8ee6;\n  border-color: #3a8ee6;\n}\n\n.wu-button.is-disabled, .wu-button.is-disabled:hover, .wu-button.is-disabled:focus {\n  color: #C0C4CC;\n  cursor: not-allowed;\n  background-image: none;\n  background-color: #FFFFFF;\n  border-color: #EBEEF5;\n}\n.wu-button.is-disabled.wu-button--text {\n  background-color: transparent;\n}\n.wu-button.is-disabled.is-plain, .wu-button.is-disabled.is-plain:hover, .wu-button.is-disabled.is-plain:focus {\n  background-color: #FFFFFF;\n  border-color: #EBEEF5;\n  color: #C0C4CC;\n}\n\n.wu-button.is-loading {\n  position: relative;\n  pointer-events: none;\n}\n.wu-button.is-loading:before {\n  pointer-events: none;\n  content: \"\";\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  border-radius: inherit;\n  background-color: rgba(255, 255, 255, 0.35);\n}\n\n.wu-button.is-round {\n  border-radius: 20px;\n  padding: 12px 23px;\n}\n\n.wu-button.is-circle {\n  border-radius: 50%;\n  padding: 12px;\n}\n\n.wu-button-primary {\n  color: #FFFFFF;\n  background-color: #409EFF;\n  border-color: #409EFF;\n}\n.wu-button-primary:hover, .wu-button-primary:focus {\n  background: #66b1ff;\n  border-color: #66b1ff;\n  color: #FFFFFF;\n}\n.wu-button-primary:active {\n  background: #3a8ee6;\n  border-color: #3a8ee6;\n  color: #FFFFFF;\n  outline: none;\n}\n.wu-button-primary.is-active {\n  background: #3a8ee6;\n  border-color: #3a8ee6;\n  color: #FFFFFF;\n}\n.wu-button-primary.is-disabled, .wu-button-primary.is-disabled:hover, .wu-button-primary.is-disabled:focus, .wu-button-primary.is-disabled:active {\n  color: #FFFFFF;\n  background-color: #a0cfff;\n  border-color: #a0cfff;\n}\n.wu-button-primary.is-plain {\n  color: #409EFF;\n  background: #ecf5ff;\n  border-color: #b3d8ff;\n}\n.wu-button-primary.is-plain:hover, .wu-button-primary.is-plain:focus {\n  background: #409EFF;\n  border-color: #409EFF;\n  color: #FFFFFF;\n}\n.wu-button-primary.is-plain:active {\n  background: #3a8ee6;\n  border-color: #3a8ee6;\n  color: #FFFFFF;\n  outline: none;\n}\n.wu-button-primary.is-plain.is-disabled, .wu-button-primary.is-plain.is-disabled:hover, .wu-button-primary.is-plain.is-disabled:focus, .wu-button-primary.is-plain.is-disabled:active {\n  color: #8cc5ff;\n  background-color: #ecf5ff;\n  border-color: #d9ecff;\n}\n\n.wu-button-success {\n  color: #FFFFFF;\n  background-color: #67C23A;\n  border-color: #67C23A;\n}\n.wu-button-success:hover, .wu-button-success:focus {\n  background: #85ce61;\n  border-color: #85ce61;\n  color: #FFFFFF;\n}\n.wu-button-success:active {\n  background: #5daf34;\n  border-color: #5daf34;\n  color: #FFFFFF;\n  outline: none;\n}\n.wu-button-success.is-active {\n  background: #5daf34;\n  border-color: #5daf34;\n  color: #FFFFFF;\n}\n.wu-button-success.is-disabled, .wu-button-success.is-disabled:hover, .wu-button-success.is-disabled:focus, .wu-button-success.is-disabled:active {\n  color: #FFFFFF;\n  background-color: #b3e19d;\n  border-color: #b3e19d;\n}\n.wu-button-success.is-plain {\n  color: #67C23A;\n  background: #f0f9eb;\n  border-color: #c2e7b0;\n}\n.wu-button-success.is-plain:hover, .wu-button-success.is-plain:focus {\n  background: #67C23A;\n  border-color: #67C23A;\n  color: #FFFFFF;\n}\n.wu-button-success.is-plain:active {\n  background: #5daf34;\n  border-color: #5daf34;\n  color: #FFFFFF;\n  outline: none;\n}\n.wu-button-success.is-plain.is-disabled, .wu-button-success.is-plain.is-disabled:hover, .wu-button-success.is-plain.is-disabled:focus, .wu-button-success.is-plain.is-disabled:active {\n  color: #a4da89;\n  background-color: #f0f9eb;\n  border-color: #e1f3d8;\n}\n\n.wu-button-warning {\n  color: #FFFFFF;\n  background-color: #E6A23C;\n  border-color: #E6A23C;\n}\n.wu-button-warning:hover, .wu-button-warning:focus {\n  background: #ebb563;\n  border-color: #ebb563;\n  color: #FFFFFF;\n}\n.wu-button-warning:active {\n  background: #cf9236;\n  border-color: #cf9236;\n  color: #FFFFFF;\n  outline: none;\n}\n.wu-button-warning.is-active {\n  background: #cf9236;\n  border-color: #cf9236;\n  color: #FFFFFF;\n}\n.wu-button-warning.is-disabled, .wu-button-warning.is-disabled:hover, .wu-button-warning.is-disabled:focus, .wu-button-warning.is-disabled:active {\n  color: #FFFFFF;\n  background-color: #f3d19e;\n  border-color: #f3d19e;\n}\n.wu-button-warning.is-plain {\n  color: #E6A23C;\n  background: #fdf6ec;\n  border-color: #f5dab1;\n}\n.wu-button-warning.is-plain:hover, .wu-button-warning.is-plain:focus {\n  background: #E6A23C;\n  border-color: #E6A23C;\n  color: #FFFFFF;\n}\n.wu-button-warning.is-plain:active {\n  background: #cf9236;\n  border-color: #cf9236;\n  color: #FFFFFF;\n  outline: none;\n}\n.wu-button-warning.is-plain.is-disabled, .wu-button-warning.is-plain.is-disabled:hover, .wu-button-warning.is-plain.is-disabled:focus, .wu-button-warning.is-plain.is-disabled:active {\n  color: #f0c78a;\n  background-color: #fdf6ec;\n  border-color: #faecd8;\n}\n\n.wu-button-danger {\n  color: #FFFFFF;\n  background-color: #F56C6C;\n  border-color: #F56C6C;\n}\n.wu-button-danger:hover, .wu-button-danger:focus {\n  background: #f78989;\n  border-color: #f78989;\n  color: #FFFFFF;\n}\n.wu-button-danger:active {\n  background: #dd6161;\n  border-color: #dd6161;\n  color: #FFFFFF;\n  outline: none;\n}\n.wu-button-danger.is-active {\n  background: #dd6161;\n  border-color: #dd6161;\n  color: #FFFFFF;\n}\n.wu-button-danger.is-disabled, .wu-button-danger.is-disabled:hover, .wu-button-danger.is-disabled:focus, .wu-button-danger.is-disabled:active {\n  color: #FFFFFF;\n  background-color: #fab6b6;\n  border-color: #fab6b6;\n}\n.wu-button-danger.is-plain {\n  color: #F56C6C;\n  background: #fef0f0;\n  border-color: #fbc4c4;\n}\n.wu-button-danger.is-plain:hover, .wu-button-danger.is-plain:focus {\n  background: #F56C6C;\n  border-color: #F56C6C;\n  color: #FFFFFF;\n}\n.wu-button-danger.is-plain:active {\n  background: #dd6161;\n  border-color: #dd6161;\n  color: #FFFFFF;\n  outline: none;\n}\n.wu-button-danger.is-plain.is-disabled, .wu-button-danger.is-plain.is-disabled:hover, .wu-button-danger.is-plain.is-disabled:focus, .wu-button-danger.is-plain.is-disabled:active {\n  color: #f9a7a7;\n  background-color: #fef0f0;\n  border-color: #fde2e2;\n}\n\n.wu-button-info {\n  color: #FFFFFF;\n  background-color: #909399;\n  border-color: #909399;\n}\n.wu-button-info:hover, .wu-button-info:focus {\n  background: #a6a9ad;\n  border-color: #a6a9ad;\n  color: #FFFFFF;\n}\n.wu-button-info:active {\n  background: #82848a;\n  border-color: #82848a;\n  color: #FFFFFF;\n  outline: none;\n}\n.wu-button-info.is-active {\n  background: #82848a;\n  border-color: #82848a;\n  color: #FFFFFF;\n}\n.wu-button-info.is-disabled, .wu-button-info.is-disabled:hover, .wu-button-info.is-disabled:focus, .wu-button-info.is-disabled:active {\n  color: #FFFFFF;\n  background-color: #c8c9cc;\n  border-color: #c8c9cc;\n}\n.wu-button-info.is-plain {\n  color: #909399;\n  background: #f4f4f5;\n  border-color: #d3d4d6;\n}\n.wu-button-info.is-plain:hover, .wu-button-info.is-plain:focus {\n  background: #909399;\n  border-color: #909399;\n  color: #FFFFFF;\n}\n.wu-button-info.is-plain:active {\n  background: #82848a;\n  border-color: #82848a;\n  color: #FFFFFF;\n  outline: none;\n}\n.wu-button-info.is-plain.is-disabled, .wu-button-info.is-plain.is-disabled:hover, .wu-button-info.is-plain.is-disabled:focus, .wu-button-info.is-plain.is-disabled:active {\n  color: #bcbec2;\n  background-color: #f4f4f5;\n  border-color: #e9e9eb;\n}\n\n.wu-button-medium {\n  padding: 10px 20px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.wu-button-medium.is-round {\n  padding: 10px 20px;\n}\n.wu-button-medium.is-circle {\n  padding: 10px;\n}\n\n.wu-button-small {\n  padding: 9px 15px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.wu-button-small.is-round {\n  padding: 9px 15px;\n}\n.wu-button-small.is-circle {\n  padding: 9px;\n}\n\n.wu-button-mini {\n  padding: 7px 15px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.wu-button-mini.is-round {\n  padding: 7px 15px;\n}\n.wu-button-mini.is-circle {\n  padding: 7px;\n}\n\n.wu-button-text {\n  border-color: transparent;\n  color: #409EFF;\n  background: transparent;\n  padding-left: 0;\n  padding-right: 0;\n}\n.wu-button-text:hover, .wu-button-text:focus {\n  color: #66b1ff;\n  border-color: transparent;\n  background-color: transparent;\n}\n.wu-button-text:active {\n  color: #3a8ee6;\n  border-color: transparent;\n  background-color: transparent;\n}\n.wu-button-text.is-disabled, .wu-button-text.is-disabled:hover, .wu-button-text.is-disabled:focus {\n  border-color: transparent;\n}\n\n.loading {\n  width: 1em;\n  height: 1em;\n  display: inline-block;\n  animation: loading 1s steps(12, end) infinite;\n  vertical-align: -0.125em;\n}\n\n@-webkit-keyframes loading {\n  0% {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n  100% {\n    transform: rotate3d(0, 0, 1, 360deg);\n  }\n}\n@keyframes loading {\n  0% {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n  100% {\n    transform: rotate3d(0, 0, 1, 360deg);\n  }\n}";

var WuButton = (function (_super) {
    __extends(WuButton, _super);
    function WuButton() {
        return _super.call(this) || this;
    }
    WuButton.prototype.render = function (props) {
        var _a;
        return (h("button", __assign({ disabled: props.disabled }, extractClass(props, 'wu-button', (_a = {},
            _a['wu-button-' + props.type] = props.type,
            _a['wu-button-' + props.size] = props.size,
            _a['is-plain'] = props.plain,
            _a['is-round'] = props.round,
            _a['is-circle'] = props.circle,
            _a['is-disabled'] = props.disabled,
            _a)), { type: props.nativeType }),
            props.loading && [
                h("svg", { class: "loading", viewBox: "0 0 1024 1024", focusable: "false", "data-icon": "loading", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" },
                    h("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" })),
                ' ',
            ],
            props.text,
            h("slot", null)));
    };
    WuButton.css = index$3 ;
    WuButton.defaultProps = {
        size: WebUiConfig.size,
        plain: false,
        round: false,
        circle: false,
        loading: false,
        disabled: false,
        nativeType: 'button'
    };
    WuButton.propTypes = {
        size: String,
        type: String,
        plain: Boolean,
        round: Boolean,
        circle: Boolean,
        loading: Boolean,
        disabled: Boolean,
        icon: String,
        nativeType: String,
        text: String,
    };
    WuButton = __decorate([
        CustomTag({ name: 'wu-button' })
    ], WuButton);
    return WuButton;
}(CustomWebComponent));

var index$2 = "@charset \"UTF-8\";\n/**********************系统级别配置*******************************/\n/**********************基本颜色***************************/\n/* Disable base\n-------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/**********************基本边框***************************/\n/**********************盒模型阴影*************************/\n/**********************基本字体*************************/\n/**********************Button***************************/\n/**************************Radio****************************/\n/* BEM support Func\n -------------------------- */\n:host {\n  display: inline-block;\n}\n\n.wu-radio-group {\n  display: inline-block;\n  line-height: 1;\n  vertical-align: middle;\n  font-size: 0;\n}";

var WuRadioGroup = (function (_super) {
    __extends(WuRadioGroup, _super);
    function WuRadioGroup() {
        var _this = _super.call(this) || this;
        _this.radioGroup = [];
        return _this;
    }
    WuRadioGroup.prototype.installed = function () {
        var _this = this;
        this.radioGroup = this.querySelectorAll("wu-radio[name='" + this.props.name + "']") || [];
        this.radioGroup.forEach(function (ele, index) {
            ele.addEventListener('change', function (event) {
                _this.itemChange(event, ele, index);
            });
            ele.addEventListener('mounted', function (event) {
                _this.childRadioMounted(event, ele, index);
            });
        });
    };
    WuRadioGroup.prototype.childRadioMounted = function (event, ele, index) {
        ele.updateProps({ size: this.props.size, disabled: this.props.disabled, name: this.props.name || '' });
        if (ele.props.value === this.props.value) {
            ele.updateProps({ checked: true });
        }
    };
    WuRadioGroup.prototype.itemChange = function (event, ele, index) {
        var _this = this;
        if (this.props.disabled)
            return;
        this.radioGroup.forEach(function (item, currentIndex) {
            item.updateProps({ checked: false });
            if (currentIndex === index) {
                item.updateProps({ checked: !item.props.checked });
                _this.groupChange(item);
            }
        });
    };
    WuRadioGroup.prototype.groupChange = function (radio) {
        this.fire('change', { value: radio.props.value });
    };
    WuRadioGroup.prototype.uninstall = function () {
        var _this = this;
        this.radioGroup.forEach(function (ele, index) {
            ele.removeEventListener('change', function (event) {
                _this.itemChange(event, ele, index);
            });
            ele.removeEventListener('mounted', function (event) {
                _this.childRadioMounted(event, ele, index);
            });
        });
    };
    WuRadioGroup.prototype.render = function () {
        return (h("div", null,
            h("slot", null)));
    };
    WuRadioGroup.css = index$2 ;
    WuRadioGroup.propTypes = {
        size: String,
        disabled: Boolean,
        value: String,
        name: String,
    };
    WuRadioGroup.defaultProps = {
        size: WebUiConfig.size,
        disabled: false,
    };
    WuRadioGroup = __decorate([
        CustomTag({ name: 'wu-radio-group' })
    ], WuRadioGroup);
    return WuRadioGroup;
}(CustomWebComponent));

var index$1 = "@charset \"UTF-8\";\n/**********************系统级别配置*******************************/\n/**********************基本颜色***************************/\n/* Disable base\n-------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/**********************基本边框***************************/\n/**********************盒模型阴影*************************/\n/**********************基本字体*************************/\n/**********************Button***************************/\n/**************************Radio****************************/\n/* BEM support Func\n -------------------------- */\n:host {\n  display: inline-block;\n}\n\n.wu-radio-button {\n  position: relative;\n  display: inline-block;\n  outline: none;\n}\n.wu-radio-button .wu-radio-button_inner {\n  display: inline-block;\n  line-height: 1;\n  white-space: nowrap;\n  vertical-align: middle;\n  background: #FFFFFF;\n  border: 1px solid #C0C4CC;\n  font-weight: 500;\n  border-left: 0;\n  color: #606266;\n  -webkit-appearance: none;\n  text-align: center;\n  box-sizing: border-box;\n  outline: none;\n  margin: 0;\n  position: relative;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  padding: 12px 20px;\n  font-size: 14px;\n  border-radius: 0;\n}\n.wu-radio-button .wu-radio-button_inner.is-round {\n  padding: 12px 20px;\n}\n.wu-radio-button .wu-radio-button_inner:hover {\n  color: #409EFF;\n}\n.wu-radio-button .wu-radio-button_inner [class*=wu-icon-] {\n  line-height: 0.9;\n}\n.wu-radio-button .wu-radio-button_inner [class*=wu-icon-] + span {\n  margin-left: 5px;\n}\n\n.wu-radio-button:first-child .wu-radio-button_inner {\n  border-left: 1px solid #C0C4CC;\n  border-radius: 4px 0 0 4px;\n  box-shadow: none !important;\n}\n.wu-radio-button .wu-radio-button_orig-radio {\n  opacity: 0;\n  outline: none;\n  position: absolute;\n  z-index: -1;\n}\n.wu-radio-button .wu-radio-button_orig-radio:checked + .wu-radio-button_inner {\n  color: #FFFFFF;\n  background-color: #409EFF;\n  border-color: #409EFF;\n  box-shadow: -1px 0 0 0 #409EFF;\n}\n.wu-radio-button .wu-radio-button_orig-radio:disabled + .wu-radio-button_inner {\n  color: #C0C4CC;\n  cursor: not-allowed;\n  background-image: none;\n  background-color: #FFFFFF;\n  border-color: #EBEEF5;\n  box-shadow: none;\n}\n.wu-radio-button .wu-radio-button_orig-radio:disabled:checked + .wu-radio-button_inner {\n  background-color: #F2F6FC;\n}\n\n.wu-radio-button:last-child .wu-radio-button_inner {\n  border-radius: 0 4px 4px 0;\n}\n.wu-radio-button:first-child:last-child .wu-radio-button_inner {\n  border-radius: 4px;\n}\n.wu-radio-button-medium .wu-radio-button_inner {\n  padding: 10px 20px;\n  font-size: 14px;\n  border-radius: 0;\n}\n.wu-radio-button-medium .wu-radio-button_inner.is-round {\n  padding: 10px 20px;\n}\n\n.wu-radio-button-small .wu-radio-button_inner {\n  padding: 9px 15px;\n  font-size: 12px;\n  border-radius: 0;\n}\n.wu-radio-button-small .wu-radio-button_inner.is-round {\n  padding: 9px 15px;\n}\n\n.wu-radio-button-mini .wu-radio-button_inner {\n  padding: 7px 15px;\n  font-size: 12px;\n  border-radius: 0;\n}\n.wu-radio-button-mini .wu-radio-button_inner.is-round {\n  padding: 7px 15px;\n}\n\n.wu-radio-button:focus:not(.is-focus):not(:active):not(.is-disabled) {\n  /*获得焦点时 样式提醒*/\n  box-shadow: 0 0 2px 2px #409EFF;\n}";

var WuRadioButton = (function (_super) {
    __extends(WuRadioButton, _super);
    function WuRadioButton() {
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
    WuRadioButton.prototype.installed = function () {
        this.fire('mounted', { value: false });
    };
    WuRadioButton.prototype.render = function (props) {
        var _a;
        return (h("label", __assign({ role: "radio", tabindex: "0", onClick: debounce(this.clickHandler, 0) }, extractClass(props, 'wu-radio-button', (_a = {},
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
    WuRadioButton.css = index$1 ;
    WuRadioButton.propTypes = {
        size: String,
        label: String,
        disabled: Boolean,
        checked: Boolean,
        value: String,
        name: String,
        border: Boolean
    };
    WuRadioButton.defaultProps = {
        size: WebUiConfig.size,
        disabled: false,
        checked: false,
        border: false,
        value: ''
    };
    WuRadioButton = __decorate([
        CustomTag({ name: 'wu-radio-button' })
    ], WuRadioButton);
    return WuRadioButton;
}(CustomWebComponent));

var index = {
    WuRadio: WuRadio,
    WuRadioGroup: WuRadioGroup,
    WuRadioButton: WuRadioButton,
    WuButton: WuButton
};

export { WuButton, WuRadio, WuRadioButton, WuRadioGroup, index as default };
