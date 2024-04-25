"use strict";
(my["mor_modules"] = my["mor_modules"] || []).push([["miniprogram_npm/tdesign-miniprogram/popup/popup"],{

/***/ "./miniprogram_npm/tdesign-miniprogram/popup/popup.js":
/*!************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/popup/popup.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "./miniprogram_npm/tdesign-miniprogram/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "./miniprogram_npm/tdesign-miniprogram/common/config.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "./miniprogram_npm/tdesign-miniprogram/popup/props.js");
/* harmony import */ var _mixins_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/transition */ "./miniprogram_npm/tdesign-miniprogram/mixins/transition.js");
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




delete _props__WEBPACK_IMPORTED_MODULE_2__["default"].visible;
const { prefix } = _common_config__WEBPACK_IMPORTED_MODULE_1__["default"];
const name = `${prefix}-popup`;
let Popup = class Popup extends _common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`, `${prefix}-class-content`];
        this.behaviors = [(0,_mixins_transition__WEBPACK_IMPORTED_MODULE_3__["default"])()];
        this.options = {
            multipleSlots: true,
        };
        this.properties = _props__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.data = {
            prefix,
            classPrefix: name,
        };
        this.methods = {
            handleOverlayClick() {
                const { closeOnOverlayClick } = this.properties;
                if (closeOnOverlayClick) {
                    this.triggerEvent('visible-change', { visible: false, trigger: 'overlay' });
                }
            },
            handleClose() {
                this.triggerEvent('visible-change', { visible: false, trigger: 'close-btn' });
            },
        };
    }
};
Popup = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], Popup);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Popup);


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/popup/props.js":
/*!************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/popup/props.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {


const props = {
  closeBtn: {
    type: Boolean
  },
  closeOnOverlayClick: {
    type: Boolean,
    value: true
  },
  content: {
    type: String
  },
  duration: {
    type: Number,
    value: 240
  },
  externalClasses: {
    type: Array
  },
  overlayProps: {
    type: Object,
    value: {}
  },
  placement: {
    type: String,
    value: "top"
  },
  preventScrollThrough: {
    type: Boolean,
    value: true
  },
  showOverlay: {
    type: Boolean,
    value: true
  },
  transitionProps: {
    type: Object
  },
  visible: {
    type: Boolean,
    value: null
  },
  defaultVisible: {
    type: Boolean,
    value: false
  },
  zIndex: {
    type: Number,
    value: 11500
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./miniprogram_npm/tdesign-miniprogram/popup/popup.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=popup.js.map