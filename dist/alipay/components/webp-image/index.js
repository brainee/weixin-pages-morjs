(my["mor_modules"] = my["mor_modules"] || []).push([["components/webp-image/index"],{

/***/ "./components/webp-image/index.js":
/*!****************************************!*\
  !*** ./components/webp-image/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var __MOR_COMPONENT__ = (__webpack_require__(/*! @morjs/core */ "../node_modules/@morjs/core/esm/index.js").createComponent);

var __MOR_API__ = (__webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/esm/index.js").mor);

"use strict";
var _a;
/*
 * @Author: rileycai
 * @Date: 2022-03-14 14:21:26
 * @LastEditTime: 2022-03-14 15:23:04
 * @LastEditors: rileycai
 * @Description: webp-image组件对t-image包裹了一层，主要实现图片裁剪、webp压缩功能
 * @FilePath: /tdesign-miniprogram-starter/components/webp-image/index.js
 */
const systemInfo = (_a = __MOR_API__.getSystemInfoSync) === null || _a === void 0 ? void 0 : _a.call(__MOR_API__);
__MOR_COMPONENT__({
    externalClasses: ['t-class', 't-class-load'],
    properties: {
        loadFailed: {
            type: String,
            value: 'default',
        },
        loading: {
            type: String,
            value: 'default',
        },
        src: {
            type: String,
            value: '',
        },
        mode: {
            type: String,
            value: 'aspectFill',
        },
        webp: {
            type: Boolean,
            value: true,
        },
        lazyLoad: {
            type: Boolean,
            value: false,
        },
        showMenuByLongpress: {
            type: Boolean,
            value: false,
        },
    },
    data: {
        thumbHeight: 375,
        thumbWidth: 375,
        systemInfo,
    },
    lifetimes: {
        ready() {
            const { mode } = this.properties;
            // 获取容器的真实宽高，设置图片的裁剪宽度
            this.getRect('.J-image').then((res) => {
                if (res) {
                    const { width, height } = res;
                    this.setData(mode === 'heightFix'
                        ? {
                            thumbHeight: this.px2rpx(height) || 375,
                        }
                        : {
                            thumbWidth: this.px2rpx(width) || 375,
                        });
                }
            });
        },
    },
    methods: {
        px2rpx(px) {
            return (750 / (systemInfo.screenWidth || 375)) * px;
        },
        getRect(selector) {
            return new Promise((resolve) => {
                if (!this.selectorQuery) {
                    this.selectorQuery = this.createSelectorQuery();
                }
                this.selectorQuery.select(selector).boundingClientRect(resolve).exec();
            });
        },
        onLoad(e) {
            this.triggerEvent('load', e.detail);
        },
        onError(e) {
            this.triggerEvent('error', e.detail);
        },
    },
}, "w");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v"], function() { return __webpack_exec__("./components/webp-image/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map