"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["pages/usercenter/name-edit/index"],{

/***/ "./pages/usercenter/name-edit/index.js":
/*!*********************************************!*\
  !*** ./pages/usercenter/name-edit/index.js ***!
  \*********************************************/
/***/ (function() {


Page({
    data: {
        nameValue: '',
    },
    onLoad: function (options) {
        var name = options.name;
        this.setData({
            nameValue: name,
        });
    },
    onSubmit: function () {
        wx.navigateBack({ backRefresh: true });
    },
    clearContent: function () {
        this.setData({
            nameValue: '',
        });
    },
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./pages/usercenter/name-edit/index.js"));
/******/ }
]);
//# sourceMappingURL=index.js.map