"use strict";
(my["mor_modules"] = my["mor_modules"] || []).push([["npm_components/tdesign-miniprogram/miniprogram_dist/link/link"],{

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/link/link.js":
/*!*************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/link/link.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/config.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "../node_modules/tdesign-miniprogram/miniprogram_dist/link/props.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/utils.js");
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
const name = `${prefix}-link`;
let Link = class Link extends _common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [
            `${prefix}-class`,
            `${prefix}-class-hover`,
            `${prefix}-class-prefix-icon`,
            `${prefix}-class-content`,
            `${prefix}-class-suffix-icon`,
        ];
        this.properties = _props__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.options = {
            multipleSlots: true,
        };
        this.data = {
            prefix,
            classPrefix: name,
        };
        this.observers = {
            'theme, status, size, underline, navigatorProps'() {
                this.setClass();
            },
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
        };
        this.lifetimes = {
            attached() {
                this.setClass();
            },
        };
        this.methods = {
            setClass() {
                const { theme, size, underline, navigatorProps, disabled } = this.properties;
                const classList = [name, `${name}--${theme}`, `${name}--${size}`];
                if (underline) {
                    classList.push(`${name}--underline`);
                }
                if ((navigatorProps && !navigatorProps.url && !['navigateBack', 'exit'].includes(navigatorProps.openType)) ||
                    disabled) {
                    classList.push(`${name}--disabled`);
                }
                this.setData({
                    className: classList.join(' '),
                });
            },
            onSuccess(e) {
                this.triggerEvent('success', e);
            },
            onFail(e) {
                this.triggerEvent('fail', e);
            },
            onComplete(e) {
                this.triggerEvent('complete', e);
            },
        };
    }
};
Link = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], Link);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Link);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v"], function() { return __webpack_exec__("../node_modules/tdesign-miniprogram/miniprogram_dist/link/link.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=link.js.map