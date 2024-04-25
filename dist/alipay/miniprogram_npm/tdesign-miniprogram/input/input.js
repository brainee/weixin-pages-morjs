"use strict";
(my["mor_modules"] = my["mor_modules"] || []).push([["miniprogram_npm/tdesign-miniprogram/input/input"],{

/***/ "./miniprogram_npm/tdesign-miniprogram/input/input.js":
/*!************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/input/input.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "./miniprogram_npm/tdesign-miniprogram/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "./miniprogram_npm/tdesign-miniprogram/common/config.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "./miniprogram_npm/tdesign-miniprogram/input/props.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils */ "./miniprogram_npm/tdesign-miniprogram/common/utils.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const { prefix } = _common_config__WEBPACK_IMPORTED_MODULE_1__["default"];
const name = `${prefix}-input`;
let Input = class Input extends _common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent {
    constructor() {
        super(...arguments);
        this.options = {
            multipleSlots: true,
        };
        this.externalClasses = [
            `${prefix}-class`,
            `${prefix}-class-prefix-icon`,
            `${prefix}-class-label`,
            `${prefix}-class-input`,
            `${prefix}-class-clearable`,
            `${prefix}-class-suffix`,
            `${prefix}-class-suffix-icon`,
            `${prefix}-class-tips`,
        ];
        this.behaviors = ['wx://form-field'];
        this.properties = _props__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.data = {
            prefix,
            classPrefix: name,
            classBasePrefix: prefix,
            showClearIcon: true,
        };
        this.lifetimes = {
            ready() {
                const { value } = this.properties;
                this.updateValue(value !== null && value !== void 0 ? value : '');
            },
        };
        this.observers = {
            prefixIcon(v) {
                this.setData({
                    _prefixIcon: (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.calcIcon)(v),
                });
            },
            suffixIcon(v) {
                this.setData({
                    _suffixIcon: (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.calcIcon)(v),
                });
            },
            clearable(v) {
                this.setData({
                    _clearIcon: (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.calcIcon)(v, 'close-circle-filled'),
                });
            },
            clearTrigger() {
                this.updateClearIconVisible();
            },
        };
        this.methods = {
            updateValue(value) {
                const { maxcharacter, maxlength } = this.properties;
                if (maxcharacter && maxcharacter > 0 && !Number.isNaN(maxcharacter)) {
                    const { length, characters } = (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.getCharacterLength)('maxcharacter', value, maxcharacter);
                    this.setData({
                        value: characters,
                        count: length,
                    });
                }
                else if (maxlength && maxlength > 0 && !Number.isNaN(maxlength)) {
                    const { length, characters } = (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.getCharacterLength)('maxlength', value, maxlength);
                    this.setData({
                        value: characters,
                        count: length,
                    });
                }
                else {
                    this.setData({
                        value,
                        count: (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.isDef)(value) ? String(value).length : 0,
                    });
                }
            },
            updateClearIconVisible(value = false) {
                const { clearTrigger } = this.properties;
                this.setData({ showClearIcon: value || clearTrigger === 'always' });
            },
            onInput(e) {
                const { value, cursor, keyCode } = e.detail;
                this.updateValue(value);
                this.triggerEvent('change', { value: this.data.value, cursor, keyCode });
            },
            onFocus(e) {
                this.updateClearIconVisible(true);
                this.triggerEvent('focus', e.detail);
            },
            onBlur(e) {
                this.updateClearIconVisible();
                this.triggerEvent('blur', e.detail);
            },
            onConfirm(e) {
                this.triggerEvent('enter', e.detail);
            },
            onSuffixClick() {
                this.triggerEvent('click', { trigger: 'suffix' });
            },
            onSuffixIconClick() {
                this.triggerEvent('click', { trigger: 'suffix-icon' });
            },
            clearInput(e) {
                this.triggerEvent('clear', e.detail);
                this.setData({ value: '' });
            },
            onKeyboardHeightChange(e) {
                this.triggerEvent('keyboardheightchange', e.detail);
            },
            onNickNameReview(e) {
                this.triggerEvent('nicknamereview', e.detail);
            },
        };
    }
};
Input = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], Input);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/input/props.js":
/*!************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/input/props.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {


const props = {
  align: {
    type: String,
    value: "left"
  },
  layout: {
    type: String,
    value: "horizontal"
  },
  borderless: {
    type: Boolean,
    value: false
  },
  clearable: {
    type: null,
    value: false
  },
  clearTrigger: {
    type: String,
    value: "always"
  },
  disabled: {
    type: Boolean,
    value: false
  },
  errorMessage: {
    type: String,
    value: ""
  },
  externalClasses: {
    type: Array
  },
  format: {
    type: null
  },
  label: {
    type: String
  },
  maxcharacter: {
    type: Number
  },
  maxlength: {
    type: Number,
    value: -1
  },
  placeholder: {
    type: String,
    value: void 0
  },
  prefixIcon: {
    type: null,
    value: null
  },
  readonly: {
    type: Boolean,
    value: false
  },
  size: {
    type: String,
    value: "medium"
  },
  status: {
    type: String,
    value: "default"
  },
  suffix: {
    type: String
  },
  suffixIcon: {
    type: null,
    value: null
  },
  tips: {
    type: String
  },
  value: {
    type: String,
    optionalTypes: [Number],
    value: null
  },
  defaultValue: {
    type: String,
    optionalTypes: [Number]
  },
  type: {
    type: String,
    value: "text"
  },
  placeholderStyle: {
    type: String,
    value: ""
  },
  placeholderClass: {
    type: String,
    value: "input-placeholder"
  },
  cursorSpacing: {
    type: Number,
    value: 0
  },
  autoFocus: {
    type: Boolean,
    value: false
  },
  focus: {
    type: Boolean,
    value: false
  },
  confirmType: {
    type: String,
    value: "done"
  },
  alwaysEmbed: {
    type: Boolean,
    value: false
  },
  confirmHold: {
    type: Boolean,
    value: false
  },
  cursor: {
    type: Number
  },
  selectionStart: {
    type: Number,
    value: -1
  },
  selectionEnd: {
    type: Number,
    value: -1
  },
  adjustPosition: {
    type: Boolean,
    value: true
  },
  holdKeyboard: {
    type: Boolean,
    value: false
  },
  safePasswordCertPath: {
    type: String,
    value: ""
  },
  safePasswordLength: {
    type: Number
  },
  safePasswordTimeStamp: {
    type: Number
  },
  safePasswordNonce: {
    type: String,
    value: ""
  },
  safePasswordSalt: {
    type: String,
    value: ""
  },
  safePasswordCustomHash: {
    type: String,
    value: ""
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./miniprogram_npm/tdesign-miniprogram/input/input.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=input.js.map