(my["mor_modules"] = my["mor_modules"] || []).push([["pages/index/index"],{

/***/ "./pages/index/index.ts":
/*!******************************!*\
  !*** ./pages/index/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var __MOR_PAGE__ = (__webpack_require__(/*! @morjs/core */ "../node_modules/@morjs/core/esm/index.js").createPage);

var __MOR_API__ = (__webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/esm/index.js").mor);

"use strict";
// import { wPage } from '@morjs/core'
__MOR_PAGE__({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: __MOR_API__.canIUse('button.open-type.getUserInfo'),
        canIUseGetUserProfile: false,
        canIUseOpenData: __MOR_API__.canIUse('open-data.type.userAvatarUrl') &&
            __MOR_API__.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
    },
    // 事件处理函数
    bindViewTap() {
        __MOR_API__.navigateTo({
            url: '../logs/logs'
        });
    },
    onLoad() {
        // @ts-ignore
        if (__MOR_API__.getUserProfile) {
            this.setData({
                canIUseGetUserProfile: true
            });
        }
    },
    onShow() {
        // this?.getTabBar()?.init();
    },
    getUserProfile() {
        // 推荐使用 wx.getUserProfile 获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        __MOR_API__.getUserProfile({
            desc: '展示用户信息',
            success: (res) => {
                console.log(res);
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                });
            }
        });
    },
    getUserInfo(e) {
        // 不推荐使用 getUserInfo 获取用户信息，预计自2021年4月13日起，getUserInfo 将不再弹出弹窗，并直接返回匿名的用户个人信息
        console.log(e);
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    }
}, "w");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v"], function() { return __webpack_exec__("./pages/index/index.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map