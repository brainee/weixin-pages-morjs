"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["custom-tab-bar/index"],{

/***/ "./custom-tab-bar/data.js":
/*!********************************!*\
  !*** ./custom-tab-bar/data.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/* harmony default export */ __webpack_exports__["default"] = ([
    {
        icon: 'home',
        text: '首页',
        url: 'pages/home/home',
    },
    {
        icon: 'sort',
        text: '消息',
        url: 'pages/index/index',
        // url: 'pages/goods/category/index',
    },
    {
        icon: 'cart',
        text: '控制台',
        url: 'pages/line/index',
    },
    {
        icon: 'person',
        text: '我的',
        url: 'pages/usercenter/login/account/index',
    },
]);


/***/ }),

/***/ "./custom-tab-bar/index.js":
/*!*********************************!*\
  !*** ./custom-tab-bar/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./custom-tab-bar/data.js");

Component({
    data: {
        active: 0,
        list: _data__WEBPACK_IMPORTED_MODULE_0__["default"],
    },
    methods: {
        onChange: function (event) {
            this.setData({ active: event.detail.value });
            wx.switchTab({
                url: this.data.list[event.detail.value].url.startsWith('/')
                    ? this.data.list[event.detail.value].url
                    : "/" + this.data.list[event.detail.value].url,
            });
        },
        init: function () {
            var page = getCurrentPages().pop();
            var route = page ? page.route.split('?')[0] : '';
            var active = this.data.list.findIndex(function (item) {
                return (item.url.startsWith('/') ? item.url.substr(1) : item.url) ===
                    "" + route;
            });
            this.setData({ active: active });
        },
    },
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./custom-tab-bar/index.js"));
/******/ }
]);
//# sourceMappingURL=index.js.map