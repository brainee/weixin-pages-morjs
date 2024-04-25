"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["miniprogram_npm/tdesign-miniprogram/loading/loading"],{

/***/ "./miniprogram_npm/tdesign-miniprogram/loading/loading.js":
/*!****************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/loading/loading.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "./miniprogram_npm/tdesign-miniprogram/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "./miniprogram_npm/tdesign-miniprogram/common/config.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "./miniprogram_npm/tdesign-miniprogram/loading/props.js");

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
var name = prefix + "-loading";
var Loading = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(Loading, _super);
    function Loading() {
        var _this = _super.apply(this, arguments) || this;
        _this.externalClasses = [prefix + "-class", prefix + "-class-text", prefix + "-class-indicator"];
        _this.data = {
            prefix: prefix,
            classPrefix: name,
            show: true,
        };
        _this.options = {
            multipleSlots: true,
        };
        _this.properties = Object.assign({}, _props__WEBPACK_IMPORTED_MODULE_2__["default"]);
        _this.timer = null;
        _this.observers = {
            loading: function (cur) {
                var _this = this;
                var delay = this.properties.delay;
                if (this.timer) {
                    clearTimeout(this.timer);
                }
                if (cur) {
                    if (delay) {
                        this.timer = setTimeout(function () {
                            _this.setData({ show: cur });
                            _this.timer = null;
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
        _this.lifetimes = {
            detached: function () {
                clearTimeout(this.timer);
            },
        };
        return _this;
    }
    Loading.prototype.refreshPage = function () {
        this.triggerEvent('reload');
    };
    return Loading;
}(_common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent));
Loading = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], Loading);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/loading/props.js":
/*!**************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/loading/props.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

var props = {
    delay: {
        type: Number,
        value: 0,
    },
    duration: {
        type: Number,
        value: 800,
    },
    externalClasses: {
        type: Array,
    },
    indicator: {
        type: Boolean,
        value: true,
    },
    inheritColor: {
        type: Boolean,
        value: false,
    },
    layout: {
        type: String,
        value: 'horizontal',
    },
    loading: {
        type: Boolean,
        value: true,
    },
    pause: {
        type: Boolean,
        value: false,
    },
    progress: {
        type: Number,
    },
    reverse: {
        type: Boolean,
    },
    size: {
        type: String,
        value: '40rpx',
    },
    text: {
        type: String,
    },
    theme: {
        type: String,
        value: 'circular',
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./miniprogram_npm/tdesign-miniprogram/loading/loading.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=loading.js.map