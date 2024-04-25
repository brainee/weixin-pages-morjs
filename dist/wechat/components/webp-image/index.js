"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["components/webp-image/index"],{

/***/ "./components/webp-image/index.js":
/*!****************************************!*\
  !*** ./components/webp-image/index.js ***!
  \****************************************/
/***/ (function() {


var _a;
/*
 * @Author: rileycai
 * @Date: 2022-03-14 14:21:26
 * @LastEditTime: 2022-03-14 15:23:04
 * @LastEditors: rileycai
 * @Description: webp-image组件对t-image包裹了一层，主要实现图片裁剪、webp压缩功能
 * @FilePath: /tdesign-miniprogram-starter/components/webp-image/index.js
 */
var systemInfo = (_a = wx.getSystemInfoSync) === null || _a === void 0 ? void 0 : _a.call(wx);
Component({
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
        systemInfo: systemInfo,
    },
    lifetimes: {
        ready: function () {
            var _this = this;
            var mode = this.properties.mode;
            // 获取容器的真实宽高，设置图片的裁剪宽度
            this.getRect('.J-image').then(function (res) {
                if (res) {
                    var width = res.width, height = res.height;
                    _this.setData(mode === 'heightFix'
                        ? {
                            thumbHeight: _this.px2rpx(height) || 375,
                        }
                        : {
                            thumbWidth: _this.px2rpx(width) || 375,
                        });
                }
            });
        },
    },
    methods: {
        px2rpx: function (px) {
            return (750 / (systemInfo.screenWidth || 375)) * px;
        },
        getRect: function (selector) {
            var _this = this;
            return new Promise(function (resolve) {
                if (!_this.selectorQuery) {
                    _this.selectorQuery = _this.createSelectorQuery();
                }
                _this.selectorQuery.select(selector).boundingClientRect(resolve).exec();
            });
        },
        onLoad: function (e) {
            this.triggerEvent('load', e.detail);
        },
        onError: function (e) {
            this.triggerEvent('error', e.detail);
        },
    },
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./components/webp-image/index.js"));
/******/ }
]);
//# sourceMappingURL=index.js.map