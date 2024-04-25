"use strict";
require('./mor.i.js');
(wx["mor_modules"] = wx["mor_modules"] || []).push([["app"],{

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/usercenter/loginService */ "./services/usercenter/loginService.js");
// import { wApp } from '@morjs/core'

App({
    globalData: {
        isQy: false,
        session: {}
    },
    onLaunch: function () {
        var _a;
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        try {
            // 登录
            (0,_services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_0__.checkWxSession)();
            // console.log("__wxConfig",__wxConfig);
            //isQiyeweixin
            var res = (_a = wx.getSystemInfoSync) === null || _a === void 0 ? void 0 : _a.call(wx);
            // console.log(res.model)
            // console.log(res.pixelRatio)
            // console.log(res.windowWidth)
            // console.log(res.windowHeight)
            // console.log(res.language)
            // console.log(res.version)
            // console.log(res.platform)
            this.globalData.isQy = (res === null || res === void 0 ? void 0 : res.environment) === "wxwork";
            console.log("[zy]isQy", this.globalData.isQy);
        }
        catch (e) {
            // Do something when catch error
            console.log("[zy]app onLaunch catch", e);
        }
        // 登录
        wx.login({
            success: function (res) {
                console.log(res.code);
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        });
    }
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./app.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=app.js.map