"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["miniprogram_npm/tdesign-miniprogram/image/image"],{

/***/ "./miniprogram_npm/tdesign-miniprogram/image/image.js":
/*!************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/image/image.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "./miniprogram_npm/tdesign-miniprogram/common/src/index.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./props */ "./miniprogram_npm/tdesign-miniprogram/image/props.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/config */ "./miniprogram_npm/tdesign-miniprogram/common/config.js");
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




var prefix = _common_config__WEBPACK_IMPORTED_MODULE_2__["default"].prefix;
var name = prefix + "-image";
var Image = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(Image, _super);
    function Image() {
        var _this = _super.apply(this, arguments) || this;
        _this.externalClasses = [prefix + "-class", prefix + "-class-load"];
        _this.options = {
            multipleSlots: true,
        };
        _this.properties = _props__WEBPACK_IMPORTED_MODULE_1__["default"];
        _this.data = {
            prefix: prefix,
            isLoading: true,
            isFailed: false,
            innerStyle: '',
            classPrefix: name,
        };
        _this.preSrc = '';
        _this.observers = {
            src: function () {
                if (this.preSrc === this.properties.src)
                    return;
                this.update();
            },
            'width, height': function (width, height) {
                this.calcSize(width, height);
            },
        };
        _this.methods = {
            onLoaded: function (e) {
                var _this = this;
                var sdkVersion = wx.getSystemInfoSync().SDKVersion;
                var versionArray = sdkVersion.split('.').map(function (v) { return parseInt(v, 10); });
                var mode = this.properties.mode;
                var isInCompatible = versionArray[0] < 2 ||
                    (versionArray[0] === 2 && versionArray[1] < 10) ||
                    (versionArray[0] === 2 && versionArray[1] === 10 && versionArray[2] < 3);
                if (mode === 'heightFix' && isInCompatible) {
                    var _a = e.detail, picHeight_1 = _a.height, picWidth_1 = _a.width;
                    (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.getRect)(this, '#image').then(function (rect) {
                        var height = rect.height;
                        var resultWidth = ((height / picHeight_1) * picWidth_1).toFixed(2);
                        _this.setData({ innerStyle: "height: " + (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.addUnit)(height) + "; width: " + resultWidth + "px;" });
                    });
                }
                this.setData({
                    isLoading: false,
                    isFailed: false,
                });
                this.triggerEvent('load', e.detail);
            },
            onLoadError: function (e) {
                this.setData({
                    isLoading: false,
                    isFailed: true,
                });
                this.triggerEvent('error', e.detail);
            },
            calcSize: function (width, height) {
                var innerStyle = '';
                if (width) {
                    innerStyle += "width: " + (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.addUnit)(width) + ";";
                }
                if (height) {
                    innerStyle += "height: " + (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.addUnit)(height) + ";";
                }
                this.setData({
                    innerStyle: innerStyle,
                });
            },
            update: function () {
                var src = this.properties.src;
                this.preSrc = src;
                if (!src) {
                    this.onLoadError({ errMsg: '图片链接为空' });
                }
                else {
                    this.setData({
                        isLoading: true,
                        isFailed: false,
                    });
                }
            },
        };
        return _this;
    }
    return Image;
}(_common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent));
Image = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], Image);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Image);


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/image/props.js":
/*!************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/image/props.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

var props = {
    error: {
        type: String,
        value: 'default',
    },
    externalClasses: {
        type: Array,
    },
    height: {
        type: null,
    },
    lazy: {
        type: Boolean,
        value: false,
    },
    loading: {
        type: String,
        value: 'default',
    },
    mode: {
        type: String,
        value: 'scaleToFill',
    },
    shape: {
        type: String,
        value: 'square',
    },
    showMenuByLongpress: {
        type: Boolean,
        value: false,
    },
    src: {
        type: String,
        value: '',
    },
    webp: {
        type: Boolean,
        value: false,
    },
    width: {
        type: null,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./miniprogram_npm/tdesign-miniprogram/image/image.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=image.js.map