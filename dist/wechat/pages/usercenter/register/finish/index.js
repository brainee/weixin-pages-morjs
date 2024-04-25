"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["pages/usercenter/register/finish/index"],{

/***/ "./pages/usercenter/register/finish/index.js":
/*!***************************************************!*\
  !*** ./pages/usercenter/register/finish/index.js ***!
  \***************************************************/
/***/ (function() {

Page({
    data: {
        accountLogin: "认证申请等待…",
        stepDisabled: false,
    },
    finish: function () {
        wx.navigateTo({ url: "/pages/usercenter/login/account/index" });
        // wx.navigateTo({url:`/pages/cart/index`});
    },
    onLoad: function () {
        // checkWxSession();
        // wxLogin();
        wx.hideHomeButton();
    },
    onShow: function () {
        // this.getTabBar()?.init();
    },
});



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./pages/usercenter/register/finish/index.js"));
/******/ }
]);
//# sourceMappingURL=index.js.map