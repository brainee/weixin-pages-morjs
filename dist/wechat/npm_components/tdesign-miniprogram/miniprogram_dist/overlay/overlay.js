"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["npm_components/tdesign-miniprogram/miniprogram_dist/overlay/overlay"],{

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/overlay/overlay.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/overlay/overlay.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/config.js");
/* harmony import */ var _mixins_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/transition */ "../node_modules/tdesign-miniprogram/miniprogram_dist/mixins/transition.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const { prefix } = _common_config__WEBPACK_IMPORTED_MODULE_1__["default"];
const name = `${prefix}-overlay`;
let Overlay = class Overlay extends _common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent {
    constructor() {
        super(...arguments);
        this.properties = {
            zIndex: {
                type: Number,
                value: 11000,
            },
            duration: {
                type: Number,
                value: 300,
            },
            backgroundColor: {
                type: String,
                value: '',
            },
            preventScrollThrough: {
                type: Boolean,
                value: true,
            },
        };
        this.behaviors = [(0,_mixins_transition__WEBPACK_IMPORTED_MODULE_2__["default"])()];
        this.data = {
            prefix,
            classPrefix: name,
            computedStyle: '',
            _zIndex: 11000,
        };
        this.observers = {
            backgroundColor(v) {
                this.setData({
                    computedStyle: v ? `background-color: ${v};` : '',
                });
            },
            zIndex(v) {
                if (v !== 0) {
                    this.setData({
                        _zIndex: v,
                    });
                }
            },
        };
        this.methods = {
            handleClick() {
                this.triggerEvent('click', { visible: !this.properties.visible });
            },
            noop() { },
        };
    }
};
Overlay = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], Overlay);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Overlay);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v"], function() { return __webpack_exec__("../node_modules/tdesign-miniprogram/miniprogram_dist/overlay/overlay.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=overlay.js.map