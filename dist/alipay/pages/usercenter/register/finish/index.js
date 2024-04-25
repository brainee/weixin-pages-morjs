"use strict";
(my["mor_modules"] = my["mor_modules"] || []).push([["pages/usercenter/register/finish/index"],{

/***/ "./pages/usercenter/register/finish/index.js":
/*!***************************************************!*\
  !*** ./pages/usercenter/register/finish/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

var __MOR_PAGE__ = (__webpack_require__(/*! @morjs/core */ "../node_modules/@morjs/core/esm/index.js").createPage);

var __MOR_API__ = (__webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/esm/index.js").mor);

__MOR_PAGE__({
    data: {
        accountLogin: "认证申请等待…",
        stepDisabled: false,
    },
    finish() {
        __MOR_API__.navigateTo({ url: `/pages/usercenter/login/account/index` });
        // wx.navigateTo({url:`/pages/cart/index`});
    },
    onLoad() {
        // checkWxSession();
        // wxLogin();
        __MOR_API__.hideHomeButton();
    },
    onShow() {
        // this.getTabBar()?.init();
    },
}, "w");



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v"], function() { return __webpack_exec__("./pages/usercenter/register/finish/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map