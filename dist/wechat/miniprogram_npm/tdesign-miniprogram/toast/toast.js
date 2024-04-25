"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["miniprogram_npm/tdesign-miniprogram/toast/toast"],{

/***/ "./miniprogram_npm/tdesign-miniprogram/toast/props.js":
/*!************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/toast/props.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

var props = {
    direction: {
        type: String,
        value: 'row',
    },
    duration: {
        type: Number,
        value: 2000,
    },
    externalClasses: {
        type: Array,
    },
    icon: {
        type: null,
    },
    message: {
        type: String,
    },
    overlayProps: {
        type: Object,
        value: {},
    },
    placement: {
        type: String,
        value: 'middle',
    },
    preventScrollThrough: {
        type: Boolean,
        value: false,
    },
    showOverlay: {
        type: Boolean,
        value: false,
    },
    theme: {
        type: String,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/toast/toast.js":
/*!************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/toast/toast.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "./miniprogram_npm/tdesign-miniprogram/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "./miniprogram_npm/tdesign-miniprogram/common/config.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "./miniprogram_npm/tdesign-miniprogram/toast/props.js");
/* harmony import */ var _mixins_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/transition */ "./miniprogram_npm/tdesign-miniprogram/mixins/transition.js");
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





var prefix = _common_config__WEBPACK_IMPORTED_MODULE_1__["default"].prefix;
var name = prefix + "-toast";
var Toast = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(Toast, _super);
    function Toast() {
        var _this = _super.apply(this, arguments) || this;
        _this.externalClasses = [prefix + "-class"];
        _this.options = {
            multipleSlots: true,
        };
        _this.behaviors = [(0,_mixins_transition__WEBPACK_IMPORTED_MODULE_3__["default"])()];
        _this.hideTimer = null;
        _this.data = {
            prefix: prefix,
            classPrefix: name,
            typeMapIcon: '',
        };
        _this.properties = _props__WEBPACK_IMPORTED_MODULE_2__["default"];
        _this.lifetimes = {
            detached: function () {
                this.destroyed();
            },
        };
        _this.pageLifetimes = {
            hide: function () {
                this.hide();
            },
        };
        _this.methods = {
            show: function (options) {
                var _this = this;
                if (this.hideTimer)
                    clearTimeout(this.hideTimer);
                var iconMap = {
                    loading: 'loading',
                    success: 'check-circle',
                    warning: 'error-circle',
                    error: 'close-circle',
                };
                var typeMapIcon = iconMap[options === null || options === void 0 ? void 0 : options.theme];
                var defaultOptions = {
                    direction: _props__WEBPACK_IMPORTED_MODULE_2__["default"].direction.value,
                    duration: _props__WEBPACK_IMPORTED_MODULE_2__["default"].duration.value,
                    icon: _props__WEBPACK_IMPORTED_MODULE_2__["default"].icon.value,
                    message: _props__WEBPACK_IMPORTED_MODULE_2__["default"].message.value,
                    placement: _props__WEBPACK_IMPORTED_MODULE_2__["default"].placement.value,
                    preventScrollThrough: _props__WEBPACK_IMPORTED_MODULE_2__["default"].preventScrollThrough.value,
                    theme: _props__WEBPACK_IMPORTED_MODULE_2__["default"].theme.value,
                };
                var data = Object.assign(Object.assign(Object.assign({}, defaultOptions), options), { visible: true, isLoading: (options === null || options === void 0 ? void 0 : options.theme) === 'loading', _icon: (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.calcIcon)(typeMapIcon !== null && typeMapIcon !== void 0 ? typeMapIcon : options.icon) });
                var duration = data.duration;
                this.setData(data);
                if (duration > 0) {
                    this.hideTimer = setTimeout(function () {
                        _this.hide();
                    }, duration);
                }
            },
            hide: function () {
                var _a, _b;
                if (!this.data.visible)
                    return;
                this.setData({ visible: false });
                (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.close) === null || _b === void 0 ? void 0 : _b.call(_a);
                this.triggerEvent('close');
            },
            destroyed: function () {
                if (this.hideTimer) {
                    clearTimeout(this.hideTimer);
                    this.hideTimer = null;
                }
                this.triggerEvent('destory');
            },
            loop: function () { },
        };
        return _this;
    }
    return Toast;
}(_common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent));
Toast = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], Toast);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Toast);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./miniprogram_npm/tdesign-miniprogram/toast/toast.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=toast.js.map