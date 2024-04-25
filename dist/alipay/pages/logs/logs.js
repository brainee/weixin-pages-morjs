"use strict";
(my["mor_modules"] = my["mor_modules"] || []).push([["pages/logs/logs"],{

/***/ "./pages/logs/logs.ts":
/*!****************************!*\
  !*** ./pages/logs/logs.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _morjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @morjs/core */ "../node_modules/@morjs/core/esm/page.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/util */ "./utils/util.ts");
var __MOR_API__ = (__webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/esm/index.js").mor);



(0,_morjs_core__WEBPACK_IMPORTED_MODULE_0__.wPage)({
    data: {
        logs: []
    },
    onLoad() {
        this.setData({
            logs: (__MOR_API__.getStorageSync('logs') || []).map((log) => {
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

const formatTime = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return [year, month, day].map(formatNumber).join("/") + " " + [hour, minute, second].map(formatNumber).join(":");
};
const formatNumber = (n) => {
  const s = n.toString();
  return s[1] ? s : "0" + s;
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