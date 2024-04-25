"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["miniprogram_npm/tdesign-miniprogram/link/link"],{

/***/ "./miniprogram_npm/tdesign-miniprogram/link/link.js":
/*!**********************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/link/link.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "./miniprogram_npm/tdesign-miniprogram/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "./miniprogram_npm/tdesign-miniprogram/common/config.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "./miniprogram_npm/tdesign-miniprogram/link/props.js");
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




var prefix = _common_config__WEBPACK_IMPORTED_MODULE_1__["default"].prefix;
var name = prefix + "-link";
var Link = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(Link, _super);
    function Link() {
        var _this = _super.apply(this, arguments) || this;
        _this.externalClasses = [
            prefix + "-class",
            prefix + "-class-hover",
            prefix + "-class-prefix-icon",
            prefix + "-class-content",
            prefix + "-class-suffix-icon",
        ];
        _this.properties = _props__WEBPACK_IMPORTED_MODULE_2__["default"];
        _this.options = {
            multipleSlots: true,
        };
        _this.data = {
            prefix: prefix,
            classPrefix: name,
        };
        _this.observers = {
            'theme, status, size, underline, navigatorProps': function () {
                this.setClass();
            },
            prefixIcon: function (v) {
                this.setData({
                    _prefixIcon: (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.calcIcon)(v),
                });
            },
            suffixIcon: function (v) {
                this.setData({
                    _suffixIcon: (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.calcIcon)(v),
                });
            },
        };
        _this.lifetimes = {
            attached: function () {
                this.setClass();
            },
        };
        _this.methods = {
            setClass: function () {
                var _a = this.properties, theme = _a.theme, size = _a.size, underline = _a.underline, navigatorProps = _a.navigatorProps, disabled = _a.disabled;
                var classList = [name, name + "--" + theme, name + "--" + size];
                if (underline) {
                    classList.push(name + "--underline");
                }
                if ((navigatorProps && !navigatorProps.url && !['navigateBack', 'exit'].includes(navigatorProps.openType)) ||
                    disabled) {
                    classList.push(name + "--disabled");
                }
                this.setData({
                    className: classList.join(' '),
                });
            },
            onSuccess: function (e) {
                this.triggerEvent('success', e);
            },
            onFail: function (e) {
                this.triggerEvent('fail', e);
            },
            onComplete: function (e) {
                this.triggerEvent('complete', e);
            },
        };
        return _this;
    }
    return Link;
}(_common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent));
Link = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], Link);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Link);


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/link/props.js":
/*!***********************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/link/props.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

var props = {
    content: {
        type: String,
    },
    navigatorProps: {
        type: Object,
    },
    prefixIcon: {
        type: null,
    },
    size: {
        type: String,
        value: 'medium',
    },
    status: {
        type: String,
        value: 'normal',
    },
    disabled: {
        type: Boolean,
        value: false,
    },
    hover: {
        type: Boolean,
        value: false,
    },
    suffixIcon: {
        type: null,
    },
    theme: {
        type: String,
        value: 'default',
    },
    underline: {
        type: Boolean,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./miniprogram_npm/tdesign-miniprogram/link/link.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=link.js.map