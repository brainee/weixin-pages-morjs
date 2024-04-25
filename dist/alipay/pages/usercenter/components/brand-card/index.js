(my["mor_modules"] = my["mor_modules"] || []).push([["pages/usercenter/components/brand-card/index"],{

/***/ "./pages/usercenter/components/brand-card/index.ts":
/*!*********************************************************!*\
  !*** ./pages/usercenter/components/brand-card/index.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var __MOR_COMPONENT__ = (__webpack_require__(/*! @morjs/core */ "../node_modules/@morjs/core/esm/index.js").createComponent);

var __MOR_API__ = (__webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/esm/index.js").mor);

"use strict";
// pages/usercenter/components/brand-card/index.ts
__MOR_COMPONENT__({
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
            __MOR_API__.showModal({ title: "zy2", content: "点击了品牌卡片" });
        }
    }
}, "w");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v"], function() { return __webpack_exec__("./pages/usercenter/components/brand-card/index.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map