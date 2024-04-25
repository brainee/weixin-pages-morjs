"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["pages/usercenter/components/brand-card/index"],{

/***/ "./pages/usercenter/components/brand-card/index.ts":
/*!*********************************************************!*\
  !*** ./pages/usercenter/components/brand-card/index.ts ***!
  \*********************************************************/
/***/ (function() {


// pages/usercenter/components/brand-card/index.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        loginType: {
            type: String,
        },
    },
    /**
     * 组件的初始数据
     */
    data: {},
    /**
     * 组件的方法列表
     */
    methods: {
        onClickBrand: function () {
            wx.showModal({ title: "zy2", content: "点击了品牌卡片" });
        }
    }
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./pages/usercenter/components/brand-card/index.ts"));
/******/ }
]);
//# sourceMappingURL=index.js.map