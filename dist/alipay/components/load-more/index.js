(my["mor_modules"] = my["mor_modules"] || []).push([["components/load-more/index"],{

/***/ "./components/load-more/index.js":
/*!***************************************!*\
  !*** ./components/load-more/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var __MOR_COMPONENT__ = (__webpack_require__(/*! @morjs/core */ "../node_modules/@morjs/core/esm/index.js").createComponent);

"use strict";
__MOR_COMPONENT__({
    externalClasses: ['wr-class', 'wr-class--no-more'],
    options: { multipleSlots: true },
    properties: {
        status: {
            type: Number,
            value: 0,
        },
        loadingText: {
            type: String,
            value: '加载中...',
        },
        noMoreText: {
            type: String,
            value: '没有更多了',
        },
        failedText: {
            type: String,
            value: '加载失败，点击重试',
        },
        color: {
            type: String,
            value: '#BBBBBB',
        },
        failedColor: {
            type: String,
            value: '#FA550F',
        },
        size: {
            type: null,
            value: '40rpx',
        },
        loadingBackgroundColor: {
            type: String,
            value: '#F5F5F5',
        },
        listIsEmpty: {
            type: Boolean,
            value: false,
        },
    },
    methods: {
        /** 点击处理 */
        tapHandle() {
            // 失败重试
            if (this.data.status === 3) {
                this.triggerEvent('retry');
            }
        },
    },
}, "w");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v"], function() { return __webpack_exec__("./components/load-more/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map