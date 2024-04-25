"use strict";
(my["mor_modules"] = my["mor_modules"] || []).push([["miniprogram_npm/tdesign-miniprogram/button/button"],{

/***/ "./miniprogram_npm/tdesign-miniprogram/button/button.js":
/*!**************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/button/button.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "./miniprogram_npm/tdesign-miniprogram/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "./miniprogram_npm/tdesign-miniprogram/common/config.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "./miniprogram_npm/tdesign-miniprogram/button/props.js");
/* harmony import */ var _common_version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/version */ "./miniprogram_npm/tdesign-miniprogram/common/version.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils */ "./miniprogram_npm/tdesign-miniprogram/common/utils.js");
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
const name = `${prefix}-button`;
let Button = class Button extends _common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`, `${prefix}-class-icon`, `${prefix}-class-loading`];
        this.behaviors = (0,_common_version__WEBPACK_IMPORTED_MODULE_3__.canIUseFormFieldButton)() ? ['wx://form-field-button'] : [];
        this.properties = _props__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.options = {
            multipleSlots: true,
        };
        this.data = {
            prefix,
            className: '',
            classPrefix: name,
        };
        this.observers = {
            'theme, size, plain, block, shape, disabled, loading, variant'() {
                this.setClass();
            },
            icon(icon) {
                const obj = (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.setIcon)('icon', icon, '');
                this.setData(Object.assign({}, obj));
            },
        };
        this.lifetimes = {
            attached() {
                this.setClass();
            },
        };
        this.methods = {
            setClass() {
                const classList = [
                    name,
                    `${prefix}-class`,
                    `${name}--${this.data.variant || 'base'}`,
                    `${name}--${this.data.theme || 'default'}`,
                    `${name}--${this.data.shape || 'rectangle'}`,
                    `${name}--size-${this.data.size || 'medium'}`,
                ];
                if (this.data.block) {
                    classList.push(`${name}--block`);
                }
                if (this.data.disabled) {
                    classList.push(`${name}--disabled`);
                }
                if (this.data.ghost) {
                    classList.push(`${name}--ghost`);
                }
                this.setData({
                    className: classList.join(' '),
                });
            },
            getuserinfo(e) {
                this.triggerEvent('getuserinfo', e.detail);
            },
            contact(e) {
                this.triggerEvent('contact', e.detail);
            },
            getphonenumber(e) {
                this.triggerEvent('getphonenumber', e.detail);
            },
            error(e) {
                this.triggerEvent('error', e.detail);
            },
            opensetting(e) {
                this.triggerEvent('opensetting', e.detail);
            },
            launchapp(e) {
                this.triggerEvent('launchapp', e.detail);
            },
            chooseavatar(e) {
                this.triggerEvent('chooseavatar', e.detail);
            },
            agreeprivacyauthorization(e) {
                this.triggerEvent('agreeprivacyauthorization', e.detail);
            },
            handleTap(e) {
                if (this.data.disabled || this.data.loading)
                    return;
                this.triggerEvent('tap', e);
            },
        };
    }
};
Button = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], Button);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/button/props.js":
/*!*************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/button/props.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {


const props = {
  tId: {
    type: String,
    value: ""
  },
  block: {
    type: Boolean,
    value: false
  },
  content: {
    type: String
  },
  customDataset: {
    type: null
  },
  disabled: {
    type: Boolean,
    value: false
  },
  externalClasses: {
    type: Array
  },
  ghost: {
    type: Boolean,
    value: false
  },
  icon: {
    type: null
  },
  loading: {
    type: Boolean,
    value: false
  },
  loadingProps: {
    type: Object
  },
  shape: {
    type: String,
    value: "rectangle"
  },
  size: {
    type: String,
    value: "medium"
  },
  theme: {
    type: String,
    value: "default"
  },
  type: {
    type: String
  },
  variant: {
    type: String,
    value: "base"
  },
  openType: {
    type: String
  },
  hoverClass: {
    type: String,
    value: ""
  },
  hoverStopPropagation: {
    type: Boolean,
    value: false
  },
  hoverStartTime: {
    type: Number,
    value: 20
  },
  hoverStayTime: {
    type: Number,
    value: 70
  },
  lang: {
    type: String,
    value: "en"
  },
  sessionFrom: {
    type: String,
    value: ""
  },
  sendMessageTitle: {
    type: String,
    value: ""
  },
  sendMessagePath: {
    type: String,
    value: ""
  },
  sendMessageImg: {
    type: String,
    value: ""
  },
  appParameter: {
    type: String,
    value: ""
  },
  showMessageCard: {
    type: Boolean,
    value: false
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./miniprogram_npm/tdesign-miniprogram/button/button.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=button.js.map