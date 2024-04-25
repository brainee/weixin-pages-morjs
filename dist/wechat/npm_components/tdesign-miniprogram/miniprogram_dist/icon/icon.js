"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["npm_components/tdesign-miniprogram/miniprogram_dist/icon/icon"],{

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/icon/icon.js":
/*!*************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/icon/icon.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/config.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "../node_modules/tdesign-miniprogram/miniprogram_dist/icon/props.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/utils.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const { prefix } = _common_config__WEBPACK_IMPORTED_MODULE_1__["default"];
const name = `${prefix}-icon`;
let Icon = class Icon extends _common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`];
        this.properties = _props__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.data = {
            componentPrefix: prefix,
            classPrefix: name,
            isImage: false,
            iconStyle: undefined,
        };
        this.observers = {
            'name, color, size, style'() {
                this.setIconStyle();
            },
        };
        this.methods = {
            onTap(event) {
                this.triggerEvent('click', event.detail);
            },
            setIconStyle() {
                const { name, color, size } = this.properties;
                const isImage = name.indexOf('/') !== -1;
                const sizeValue = (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.addUnit)(size);
                const sizeStyle = isImage ? { width: sizeValue, height: sizeValue } : {};
                const colorStyle = color ? { color: color } : {};
                const fontStyle = size ? { 'font-size': sizeValue } : {};
                this.setData({
                    isImage,
                    iconStyle: `${(0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.styles)(Object.assign(Object.assign(Object.assign({}, colorStyle), fontStyle), sizeStyle))}`,
                });
            },
        };
    }
};
Icon = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], Icon);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v"], function() { return __webpack_exec__("../node_modules/tdesign-miniprogram/miniprogram_dist/icon/icon.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=icon.js.map