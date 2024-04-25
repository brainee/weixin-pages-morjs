"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["npm_components/tdesign-miniprogram/miniprogram_dist/toast/toast"],{

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/toast/toast.js":
/*!***************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/toast/toast.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/config.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "../node_modules/tdesign-miniprogram/miniprogram_dist/toast/props.js");
/* harmony import */ var _mixins_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/transition */ "../node_modules/tdesign-miniprogram/miniprogram_dist/mixins/transition.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/utils.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const { prefix } = _common_config__WEBPACK_IMPORTED_MODULE_1__["default"];
const name = `${prefix}-toast`;
let Toast = class Toast extends _common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`];
        this.options = {
            multipleSlots: true,
        };
        this.behaviors = [(0,_mixins_transition__WEBPACK_IMPORTED_MODULE_3__["default"])()];
        this.hideTimer = null;
        this.data = {
            prefix,
            classPrefix: name,
            typeMapIcon: '',
        };
        this.properties = _props__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.lifetimes = {
            detached() {
                this.destroyed();
            },
        };
        this.pageLifetimes = {
            hide() {
                this.hide();
            },
        };
        this.methods = {
            show(options) {
                if (this.hideTimer)
                    clearTimeout(this.hideTimer);
                const iconMap = {
                    loading: 'loading',
                    success: 'check-circle',
                    warning: 'error-circle',
                    error: 'close-circle',
                };
                const typeMapIcon = iconMap[options === null || options === void 0 ? void 0 : options.theme];
                const defaultOptions = {
                    direction: _props__WEBPACK_IMPORTED_MODULE_2__["default"].direction.value,
                    duration: _props__WEBPACK_IMPORTED_MODULE_2__["default"].duration.value,
                    icon: _props__WEBPACK_IMPORTED_MODULE_2__["default"].icon.value,
                    message: _props__WEBPACK_IMPORTED_MODULE_2__["default"].message.value,
                    placement: _props__WEBPACK_IMPORTED_MODULE_2__["default"].placement.value,
                    preventScrollThrough: _props__WEBPACK_IMPORTED_MODULE_2__["default"].preventScrollThrough.value,
                    theme: _props__WEBPACK_IMPORTED_MODULE_2__["default"].theme.value,
                };
                const data = Object.assign(Object.assign(Object.assign({}, defaultOptions), options), { visible: true, isLoading: (options === null || options === void 0 ? void 0 : options.theme) === 'loading', _icon: (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.calcIcon)(typeMapIcon !== null && typeMapIcon !== void 0 ? typeMapIcon : options.icon) });
                const { duration } = data;
                this.setData(data);
                if (duration > 0) {
                    this.hideTimer = setTimeout(() => {
                        this.hide();
                    }, duration);
                }
            },
            hide() {
                var _a, _b;
                if (!this.data.visible)
                    return;
                this.setData({ visible: false });
                (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.close) === null || _b === void 0 ? void 0 : _b.call(_a);
                this.triggerEvent('close');
            },
            destroyed() {
                if (this.hideTimer) {
                    clearTimeout(this.hideTimer);
                    this.hideTimer = null;
                }
                this.triggerEvent('destory');
            },
            loop() { },
        };
    }
};
Toast = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], Toast);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Toast);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v"], function() { return __webpack_exec__("../node_modules/tdesign-miniprogram/miniprogram_dist/toast/toast.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=toast.js.map