"use strict";
require('./mor.i.js');
(my["mor_modules"] = my["mor_modules"] || []).push([["app"],{

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/usercenter/loginService */ "./services/usercenter/loginService.js");
var __MOR_APP__ = (__webpack_require__(/*! @morjs/core */ "../node_modules/@morjs/core/esm/index.js").createApp);

var __MOR_API__ = (__webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/esm/index.js").mor);

// import { wApp } from '@morjs/core'

__MOR_APP__({
    globalData: {
        isQy: false,
        session: {}
    },
    onLaunch() {
        var _a;
        // 展示本地存储能力
        const logs = __MOR_API__.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        __MOR_API__.setStorageSync('logs', logs);
        try {
            // 登录
            (0,_services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_0__.checkWxSession)();
            // console.log("__wxConfig",__wxConfig);
            //isQiyeweixin
            const res = (_a = __MOR_API__.getSystemInfoSync) === null || _a === void 0 ? void 0 : _a.call(__MOR_API__);
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
        __MOR_API__.login({
            success: (res) => {
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