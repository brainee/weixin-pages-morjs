"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["npm_components/tdesign-miniprogram/miniprogram_dist/textarea/textarea"],{

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/textarea/textarea.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/textarea/textarea.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/config.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "../node_modules/tdesign-miniprogram/miniprogram_dist/textarea/props.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/utils.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const { prefix } = _common_config__WEBPACK_IMPORTED_MODULE_1__["default"];
const name = `${prefix}-textarea`;
let Textarea = class Textarea extends _common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent {
    constructor() {
        super(...arguments);
        this.options = {
            multipleSlots: true,
        };
        this.behaviors = ['wx://form-field'];
        this.externalClasses = [
            `${prefix}-class`,
            `${prefix}-class-textarea`,
            `${prefix}-class-label`,
            `${prefix}-class-indicator`,
        ];
        this.properties = _props__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.data = {
            prefix,
            classPrefix: name,
            count: 0,
        };
        this.observers = {
            value(val) {
                this.updateCount(val);
            },
        };
        this.lifetimes = {
            ready() {
                const { value } = this.properties;
                this.updateValue(value == null ? '' : value);
            },
        };
        this.methods = {
            updateCount(val) {
                const { maxcharacter, maxlength } = this.properties;
                const { count } = this.calculateValue(val, maxcharacter, maxlength);
                this.setData({
                    count,
                });
            },
            updateValue(val) {
                const { maxcharacter, maxlength } = this.properties;
                const { value, count } = this.calculateValue(val, maxcharacter, maxlength);
                this.setData({
                    value,
                    count,
                });
            },
            calculateValue(value, maxcharacter, maxlength) {
                if (maxcharacter > 0 && !Number.isNaN(maxcharacter)) {
                    const { length, characters } = (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.getCharacterLength)('maxcharacter', value, maxcharacter);
                    return {
                        value: characters,
                        count: length,
                    };
                }
                if (maxlength > 0 && !Number.isNaN(maxlength)) {
                    const { length, characters } = (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.getCharacterLength)('maxlength', value, maxlength);
                    return {
                        value: characters,
                        count: length,
                    };
                }
                return {
                    value,
                    count: value ? String(value).length : 0,
                };
            },
            onInput(event) {
                const { value, cursor } = event.detail;
                this.updateValue(value);
                this.triggerEvent('change', { value: this.data.value, cursor });
            },
            onFocus(event) {
                this.triggerEvent('focus', Object.assign({}, event.detail));
            },
            onBlur(event) {
                this.triggerEvent('blur', Object.assign({}, event.detail));
            },
            onConfirm(event) {
                this.triggerEvent('enter', Object.assign({}, event.detail));
            },
            onLineChange(event) {
                this.triggerEvent('line-change', Object.assign({}, event.detail));
            },
            onKeyboardHeightChange(e) {
                this.triggerEvent('keyboardheightchange', e.detail);
            },
        };
    }
};
Textarea = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], Textarea);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Textarea);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v"], function() { return __webpack_exec__("../node_modules/tdesign-miniprogram/miniprogram_dist/textarea/textarea.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=textarea.js.map