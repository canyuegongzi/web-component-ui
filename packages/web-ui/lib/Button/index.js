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

:host([block]) {
  display: block;
}

.wu-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #FFFFFF;
  border: 1px solid #C0C4CC;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.wu-button + .wu-button {
  margin-left: 10px;
}
.wu-button.is-round {
  padding: 12px 20px;
}
.wu-button:hover, .wu-button:focus {
  color: #409EFF;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.wu-button:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
  outline: none;
}
.wu-button::-moz-focus-inner {
  border: 0;
}
.wu-button [class*=wu-icon-] + span {
  margin-left: 5px;
}
.wu-button.is-plain:hover, .wu-button.is-plain:focus {
  background: #FFFFFF;
  border-color: #409EFF;
  color: #409EFF;
}
.wu-button.is-plain:active {
  background: #FFFFFF;
  border-color: #3a8ee6;
  color: #3a8ee6;
  outline: none;
}

.wu-button.is-active {
  color: #3a8ee6;
  border-color: #3a8ee6;
}

.wu-button.is-disabled, .wu-button.is-disabled:hover, .wu-button.is-disabled:focus {
  color: #C0C4CC;
  cursor: not-allowed;
  background-image: none;
  background-color: #FFFFFF;
  border-color: #EBEEF5;
}
.wu-button.is-disabled.wu-button--text {
  background-color: transparent;
}
.wu-button.is-disabled.is-plain, .wu-button.is-disabled.is-plain:hover, .wu-button.is-disabled.is-plain:focus {
  background-color: #FFFFFF;
  border-color: #EBEEF5;
  color: #C0C4CC;
}

.wu-button.is-loading {
  position: relative;
  pointer-events: none;
}
.wu-button.is-loading:before {
  pointer-events: none;
  content: "";
  position: absolute;
  left: -1px;
  top: -1px;
  right: -1px;
  bottom: -1px;
  border-radius: inherit;
  background-color: rgba(255, 255, 255, 0.35);
}

.wu-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}

.wu-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}

.wu-button-primary {
  color: #FFFFFF;
  background-color: #409EFF;
  border-color: #409EFF;
}
.wu-button-primary:hover, .wu-button-primary:focus {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #FFFFFF;
}
.wu-button-primary:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #FFFFFF;
  outline: none;
}
.wu-button-primary.is-active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #FFFFFF;
}
.wu-button-primary.is-disabled, .wu-button-primary.is-disabled:hover, .wu-button-primary.is-disabled:focus, .wu-button-primary.is-disabled:active {
  color: #FFFFFF;
  background-color: #a0cfff;
  border-color: #a0cfff;
}
.wu-button-primary.is-plain {
  color: #409EFF;
  background: #ecf5ff;
  border-color: #b3d8ff;
}
.wu-button-primary.is-plain:hover, .wu-button-primary.is-plain:focus {
  background: #409EFF;
  border-color: #409EFF;
  color: #FFFFFF;
}
.wu-button-primary.is-plain:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #FFFFFF;
  outline: none;
}
.wu-button-primary.is-plain.is-disabled, .wu-button-primary.is-plain.is-disabled:hover, .wu-button-primary.is-plain.is-disabled:focus, .wu-button-primary.is-plain.is-disabled:active {
  color: #8cc5ff;
  background-color: #ecf5ff;
  border-color: #d9ecff;
}

.wu-button-success {
  color: #FFFFFF;
  background-color: #67C23A;
  border-color: #67C23A;
}
.wu-button-success:hover, .wu-button-success:focus {
  background: #85ce61;
  border-color: #85ce61;
  color: #FFFFFF;
}
.wu-button-success:active {
  background: #5daf34;
  border-color: #5daf34;
  color: #FFFFFF;
  outline: none;
}
.wu-button-success.is-active {
  background: #5daf34;
  border-color: #5daf34;
  color: #FFFFFF;
}
.wu-button-success.is-disabled, .wu-button-success.is-disabled:hover, .wu-button-success.is-disabled:focus, .wu-button-success.is-disabled:active {
  color: #FFFFFF;
  background-color: #b3e19d;
  border-color: #b3e19d;
}
.wu-button-success.is-plain {
  color: #67C23A;
  background: #f0f9eb;
  border-color: #c2e7b0;
}
.wu-button-success.is-plain:hover, .wu-button-success.is-plain:focus {
  background: #67C23A;
  border-color: #67C23A;
  color: #FFFFFF;
}
.wu-button-success.is-plain:active {
  background: #5daf34;
  border-color: #5daf34;
  color: #FFFFFF;
  outline: none;
}
.wu-button-success.is-plain.is-disabled, .wu-button-success.is-plain.is-disabled:hover, .wu-button-success.is-plain.is-disabled:focus, .wu-button-success.is-plain.is-disabled:active {
  color: #a4da89;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}

.wu-button-warning {
  color: #FFFFFF;
  background-color: #E6A23C;
  border-color: #E6A23C;
}
.wu-button-warning:hover, .wu-button-warning:focus {
  background: #ebb563;
  border-color: #ebb563;
  color: #FFFFFF;
}
.wu-button-warning:active {
  background: #cf9236;
  border-color: #cf9236;
  color: #FFFFFF;
  outline: none;
}
.wu-button-warning.is-active {
  background: #cf9236;
  border-color: #cf9236;
  color: #FFFFFF;
}
.wu-button-warning.is-disabled, .wu-button-warning.is-disabled:hover, .wu-button-warning.is-disabled:focus, .wu-button-warning.is-disabled:active {
  color: #FFFFFF;
  background-color: #f3d19e;
  border-color: #f3d19e;
}
.wu-button-warning.is-plain {
  color: #E6A23C;
  background: #fdf6ec;
  border-color: #f5dab1;
}
.wu-button-warning.is-plain:hover, .wu-button-warning.is-plain:focus {
  background: #E6A23C;
  border-color: #E6A23C;
  color: #FFFFFF;
}
.wu-button-warning.is-plain:active {
  background: #cf9236;
  border-color: #cf9236;
  color: #FFFFFF;
  outline: none;
}
.wu-button-warning.is-plain.is-disabled, .wu-button-warning.is-plain.is-disabled:hover, .wu-button-warning.is-plain.is-disabled:focus, .wu-button-warning.is-plain.is-disabled:active {
  color: #f0c78a;
  background-color: #fdf6ec;
  border-color: #faecd8;
}

.wu-button-danger {
  color: #FFFFFF;
  background-color: #F56C6C;
  border-color: #F56C6C;
}
.wu-button-danger:hover, .wu-button-danger:focus {
  background: #f78989;
  border-color: #f78989;
  color: #FFFFFF;
}
.wu-button-danger:active {
  background: #dd6161;
  border-color: #dd6161;
  color: #FFFFFF;
  outline: none;
}
.wu-button-danger.is-active {
  background: #dd6161;
  border-color: #dd6161;
  color: #FFFFFF;
}
.wu-button-danger.is-disabled, .wu-button-danger.is-disabled:hover, .wu-button-danger.is-disabled:focus, .wu-button-danger.is-disabled:active {
  color: #FFFFFF;
  background-color: #fab6b6;
  border-color: #fab6b6;
}
.wu-button-danger.is-plain {
  color: #F56C6C;
  background: #fef0f0;
  border-color: #fbc4c4;
}
.wu-button-danger.is-plain:hover, .wu-button-danger.is-plain:focus {
  background: #F56C6C;
  border-color: #F56C6C;
  color: #FFFFFF;
}
.wu-button-danger.is-plain:active {
  background: #dd6161;
  border-color: #dd6161;
  color: #FFFFFF;
  outline: none;
}
.wu-button-danger.is-plain.is-disabled, .wu-button-danger.is-plain.is-disabled:hover, .wu-button-danger.is-plain.is-disabled:focus, .wu-button-danger.is-plain.is-disabled:active {
  color: #f9a7a7;
  background-color: #fef0f0;
  border-color: #fde2e2;
}

.wu-button-info {
  color: #FFFFFF;
  background-color: #909399;
  border-color: #909399;
}
.wu-button-info:hover, .wu-button-info:focus {
  background: #a6a9ad;
  border-color: #a6a9ad;
  color: #FFFFFF;
}
.wu-button-info:active {
  background: #82848a;
  border-color: #82848a;
  color: #FFFFFF;
  outline: none;
}
.wu-button-info.is-active {
  background: #82848a;
  border-color: #82848a;
  color: #FFFFFF;
}
.wu-button-info.is-disabled, .wu-button-info.is-disabled:hover, .wu-button-info.is-disabled:focus, .wu-button-info.is-disabled:active {
  color: #FFFFFF;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}
.wu-button-info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
}
.wu-button-info.is-plain:hover, .wu-button-info.is-plain:focus {
  background: #909399;
  border-color: #909399;
  color: #FFFFFF;
}
.wu-button-info.is-plain:active {
  background: #82848a;
  border-color: #82848a;
  color: #FFFFFF;
  outline: none;
}
.wu-button-info.is-plain.is-disabled, .wu-button-info.is-plain.is-disabled:hover, .wu-button-info.is-plain.is-disabled:focus, .wu-button-info.is-plain.is-disabled:active {
  color: #bcbec2;
  background-color: #f4f4f5;
  border-color: #e9e9eb;
}

.wu-button-medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.wu-button-medium.is-round {
  padding: 10px 20px;
}
.wu-button-medium.is-circle {
  padding: 10px;
}

.wu-button-small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}
.wu-button-small.is-round {
  padding: 9px 15px;
}
.wu-button-small.is-circle {
  padding: 9px;
}

.wu-button-mini {
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px;
}
.wu-button-mini.is-round {
  padding: 7px 15px;
}
.wu-button-mini.is-circle {
  padding: 7px;
}

.wu-button-text {
  border-color: transparent;
  color: #409EFF;
  background: transparent;
  padding-left: 0;
  padding-right: 0;
}
.wu-button-text:hover, .wu-button-text:focus {
  color: #66b1ff;
  border-color: transparent;
  background-color: transparent;
}
.wu-button-text:active {
  color: #3a8ee6;
  border-color: transparent;
  background-color: transparent;
}
.wu-button-text.is-disabled, .wu-button-text.is-disabled:hover, .wu-button-text.is-disabled:focus {
  border-color: transparent;
}

.loading {
  width: 1em;
  height: 1em;
  display: inline-block;
  animation: loading 1s steps(12, end) infinite;
  vertical-align: -0.125em;
}

@-webkit-keyframes loading {
  0% {
    transform: rotate3d(0, 0, 1, 0deg);
  }
  100% {
    transform: rotate3d(0, 0, 1, 360deg);
  }
}
@keyframes loading {
  0% {
    transform: rotate3d(0, 0, 1, 0deg);
  }
  100% {
    transform: rotate3d(0, 0, 1, 360deg);
  }
}`


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
    WuButton.css = undefined ? undefined : css;
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

export { WuButton as default };
