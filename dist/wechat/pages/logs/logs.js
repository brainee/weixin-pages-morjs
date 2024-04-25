"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["pages/logs/logs"],{

/***/ "./pages/logs/logs.ts":
/*!****************************!*\
  !*** ./pages/logs/logs.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _morjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @morjs/core */ "../node_modules/@morjs/core/lib/index.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/util */ "./utils/util.ts");


(0,_morjs_core__WEBPACK_IMPORTED_MODULE_0__.wPage)({
    data: {
        logs: []
    },
    onLoad: function () {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(function (log) {
                return {
                    date: (0,_utils_util__WEBPACK_IMPORTED_MODULE_1__.formatTime)(new Date(log)),
                    timeStamp: log
                };
            })
        });
    }
});


/***/ }),

/***/ "./utils/util.ts":
/*!***********************!*\
  !*** ./utils/util.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatTime": function() { return /* binding */ formatTime; }
/* harmony export */ });
var formatTime = function (date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return ([year, month, day].map(formatNumber).join('/') +
        ' ' +
        [hour, minute, second].map(formatNumber).join(':'));
};
var formatNumber = function (n) {
    var s = n.toString();
    return s[1] ? s : '0' + s;
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v"], function() { return __webpack_exec__("./pages/logs/logs.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=logs.js.map