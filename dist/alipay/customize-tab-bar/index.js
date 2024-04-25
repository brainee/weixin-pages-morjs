"use strict";
(my["mor_modules"] = my["mor_modules"] || []).push([["customize-tab-bar/index"],{

/***/ "./custom-tab-bar/data.js":
/*!********************************!*\
  !*** ./custom-tab-bar/data.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {


/* harmony default export */ __webpack_exports__["default"] = ([
  {
    icon: "home",
    text: "\u9996\u9875",
    url: "pages/home/home"
  },
  {
    icon: "sort",
    text: "\u6D88\u606F",
    url: "pages/index/index"
    // url: 'pages/goods/category/index',
  },
  {
    icon: "cart",
    text: "\u63A7\u5236\u53F0",
    url: "pages/line/index"
  },
  {
    icon: "person",
    text: "\u6211\u7684",
    url: "pages/usercenter/login/account/index"
  }
]);


/***/ }),

/***/ "./custom-tab-bar/index.js":
/*!*********************************!*\
  !*** ./custom-tab-bar/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./custom-tab-bar/data.js");
var __MOR_COMPONENT__ = (__webpack_require__(/*! @morjs/core */ "../node_modules/@morjs/core/esm/index.js").createComponent);

var __MOR_API__ = (__webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/esm/index.js").mor);


__MOR_COMPONENT__({
    data: {
        active: 0,
        list: _data__WEBPACK_IMPORTED_MODULE_0__["default"],
    },
    methods: {
        onChange(event) {
            this.setData({ active: event.detail.value });
            __MOR_API__.switchTab({
                url: this.data.list[event.detail.value].url.startsWith('/')
                    ? this.data.list[event.detail.value].url
                    : `/${this.data.list[event.detail.value].url}`,
            });
        },
        init() {
            const page = getCurrentPages().pop();
            const route = page ? page.route.split('?')[0] : '';
            const active = this.data.list.findIndex((item) => (item.url.startsWith('/') ? item.url.substr(1) : item.url) ===
                `${route}`);
            this.setData({ active });
        },
    },
}, "w");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v"], function() { return __webpack_exec__("./custom-tab-bar/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map