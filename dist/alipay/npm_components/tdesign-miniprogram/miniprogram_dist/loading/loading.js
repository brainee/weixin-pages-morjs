"use strict";
(my["mor_modules"] = my["mor_modules"] || []).push([["npm_components/tdesign-miniprogram/miniprogram_dist/loading/loading"],{

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/loading/loading.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/loading/loading.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/config.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "../node_modules/tdesign-miniprogram/miniprogram_dist/loading/props.js");
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
const name = `${prefix}-loading`;
let Loading = class Loading extends _common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`, `${prefix}-class-text`, `${prefix}-class-indicator`];
        this.data = {
            prefix,
            classPrefix: name,
            show: true,
        };
        this.options = {
            multipleSlots: true,
        };
        this.properties = Object.assign({}, _props__WEBPACK_IMPORTED_MODULE_2__["default"]);
        this.timer = null;
        this.observers = {
            loading(cur) {
                const { delay } = this.properties;
                if (this.timer) {
                    clearTimeout(this.timer);
                }
                if (cur) {
                    if (delay) {
                        this.timer = setTimeout(() => {
                            this.setData({ show: cur });
                            this.timer = null;
                        }, delay);
                    }
                    else {
                        this.setData({ show: cur });
                    }
                }
                else {
                    this.setData({ show: cur });
                }
            },
        };
        this.lifetimes = {
            detached() {
                clearTimeout(this.timer);
            },
        };
    }
    refreshPage() {
        this.triggerEvent('reload');
    }
};
Loading = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], Loading);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v"], function() { return __webpack_exec__("../node_modules/tdesign-miniprogram/miniprogram_dist/loading/loading.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=loading.js.map