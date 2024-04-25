"use strict";
(my["mor_modules"] = my["mor_modules"] || []).push([["miniprogram_npm/tdesign-miniprogram/image/image"],{

/***/ "./miniprogram_npm/tdesign-miniprogram/image/image.js":
/*!************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/image/image.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "./miniprogram_npm/tdesign-miniprogram/common/src/index.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./props */ "./miniprogram_npm/tdesign-miniprogram/image/props.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/config */ "./miniprogram_npm/tdesign-miniprogram/common/config.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils */ "./miniprogram_npm/tdesign-miniprogram/common/utils.js");
var __MOR_API__ = (__webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/esm/index.js").mor);

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




const { prefix } = _common_config__WEBPACK_IMPORTED_MODULE_2__["default"];
const name = `${prefix}-image`;
let Image = class Image extends _common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`, `${prefix}-class-load`];
        this.options = {
            multipleSlots: true,
        };
        this.properties = _props__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.data = {
            prefix,
            isLoading: true,
            isFailed: false,
            innerStyle: '',
            classPrefix: name,
        };
        this.preSrc = '';
        this.observers = {
            src() {
                if (this.preSrc === this.properties.src)
                    return;
                this.update();
            },
            'width, height'(width, height) {
                this.calcSize(width, height);
            },
        };
        this.methods = {
            onLoaded(e) {
                const sdkVersion = __MOR_API__.getSystemInfoSync().SDKVersion;
                const versionArray = sdkVersion.split('.').map((v) => parseInt(v, 10));
                const { mode } = this.properties;
                const isInCompatible = versionArray[0] < 2 ||
                    (versionArray[0] === 2 && versionArray[1] < 10) ||
                    (versionArray[0] === 2 && versionArray[1] === 10 && versionArray[2] < 3);
                if (mode === 'heightFix' && isInCompatible) {
                    const { height: picHeight, width: picWidth } = e.detail;
                    (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.getRect)(this, '#image').then((rect) => {
                        const { height } = rect;
                        const resultWidth = ((height / picHeight) * picWidth).toFixed(2);
                        this.setData({ innerStyle: `height: ${(0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.addUnit)(height)}; width: ${resultWidth}px;` });
                    });
                }
                this.setData({
                    isLoading: false,
                    isFailed: false,
                });
                this.triggerEvent('load', e.detail);
            },
            onLoadError(e) {
                this.setData({
                    isLoading: false,
                    isFailed: true,
                });
                this.triggerEvent('error', e.detail);
            },
            calcSize(width, height) {
                let innerStyle = '';
                if (width) {
                    innerStyle += `width: ${(0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.addUnit)(width)};`;
                }
                if (height) {
                    innerStyle += `height: ${(0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.addUnit)(height)};`;
                }
                this.setData({
                    innerStyle,
                });
            },
            update() {
                const { src } = this.properties;
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
    }
};
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


const props = {
  error: {
    type: String,
    value: "default"
  },
  externalClasses: {
    type: Array
  },
  height: {
    type: null
  },
  lazy: {
    type: Boolean,
    value: false
  },
  loading: {
    type: String,
    value: "default"
  },
  mode: {
    type: String,
    value: "scaleToFill"
  },
  shape: {
    type: String,
    value: "square"
  },
  showMenuByLongpress: {
    type: Boolean,
    value: false
  },
  src: {
    type: String,
    value: ""
  },
  webp: {
    type: Boolean,
    value: false
  },
  width: {
    type: null
  }
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