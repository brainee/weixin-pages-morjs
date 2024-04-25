"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["npm_components/tdesign-miniprogram/miniprogram_dist/divider/divider"],{

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/divider/divider.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/divider/divider.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/config.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "../node_modules/tdesign-miniprogram/miniprogram_dist/divider/props.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const { prefix } = _common_config__WEBPACK_IMPORTED_MODULE_1__["default"];
const name = `${prefix}-divider`;
let Divider = class Divider extends _common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`, `${prefix}-class-content`];
        this.options = {
            addGlobalClass: true,
            multipleSlots: true,
        };
        this.properties = _props__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.data = {
            prefix,
            classPrefix: name,
        };
        this.observers = {
            lineColor() {
                this.setStyle();
            },
        };
        this.methods = {
            setStyle() {
                const { lineColor } = this.properties;
                const dividerStyle = `${lineColor ? `border-color: ${lineColor};` : ''}`;
                this.setData({
                    dividerStyle,
                });
            },
        };
    }
};
Divider = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], Divider);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Divider);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v"], function() { return __webpack_exec__("../node_modules/tdesign-miniprogram/miniprogram_dist/divider/divider.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=divider.js.map