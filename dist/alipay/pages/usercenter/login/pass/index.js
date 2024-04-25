"use strict";
(my["mor_modules"] = my["mor_modules"] || []).push([["pages/usercenter/login/pass/index"],{

/***/ "./pages/usercenter/login/pass/index.js":
/*!**********************************************!*\
  !*** ./pages/usercenter/login/pass/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _utils_queryString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/queryString */ "./utils/queryString.ts");
/* harmony import */ var _services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/usercenter/loginService */ "./services/usercenter/loginService.js");
var __MOR_PAGE__ = (__webpack_require__(/*! @morjs/core */ "../node_modules/@morjs/core/esm/index.js").createPage);

var __MOR_API__ = (__webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/esm/index.js").mor);


// pages/usercenter/validate-code/index.ts


__MOR_PAGE__({
    /**
     * 页面的初始数据
     */
    data: {
        account: "",
        showPassword: false,
        formData: {},
        stepDisabled: true,
    },
    /* 生命周期函数--监听页面加载 */
    onLoad: function (options) {
        // console.log("[zy]options=",options);
        let { account } = (0,_utils_queryString__WEBPACK_IMPORTED_MODULE_1__.getCurrentPageParam)() || {};
        console.log("[zy]got from last page:account", account);
        this.setData({ account });
    },
    changEye: function () {
        this.setData({
            showPassword: !this.data.showPassword
        });
    },
    inputChange: function (e) {
        let prop = e.currentTarget.dataset.prop;
        let value = e.detail.value;
        this.setData({ stepDisabled: !value });
        this.data.formData[prop] = value;
        this.setData({
            formData: this.data.formData
        });
    },
    regain() {
        let { account, } = this.data;
        __MOR_API__.navigateTo({ url: `/pages/usercenter/reset/account/index?account=${account}&operate=reset` });
    },
    switchCode() {
        console.log("[zy]switchCode");
        __MOR_API__.navigateBack();
    },
    login: function (res) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let account = this.data.account;
            let password = this.data.formData.password;
            const App = getApp();
            let { openid, unionid } = (_a = App === null || App === void 0 ? void 0 : App.globalData) === null || _a === void 0 ? void 0 : _a.session;
            if (!account) {
                __MOR_API__.showToast({
                    icon: 'none',
                    title: "账号不能为空",
                });
                return;
            }
            if (!password) {
                __MOR_API__.showToast({
                    icon: 'none',
                    title: "密码不能为空",
                });
                return;
            }
            if (!openid) {
                __MOR_API__.showToast({
                    icon: 'none',
                    title: "需要先登录小程序",
                });
                yield (0,_services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_0__.wxLogin)();
                return;
            }
            (0,_services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_0__.getAccountSession)({
                account,
                password,
                openid,
                unionid,
            }).then((data) => {
                var _a, _b, _c;
                if ((_a = data === null || data === void 0 ? void 0 : data.loginResponse) === null || _a === void 0 ? void 0 : _a.flag) {
                    __MOR_API__.switchTab({ url: '/pages/cart/index' });
                }
                else if ((_b = data === null || data === void 0 ? void 0 : data.loginResponse) === null || _b === void 0 ? void 0 : _b.errorMsg) {
                    __MOR_API__.showToast({ title: (_c = data === null || data === void 0 ? void 0 : data.loginResponse) === null || _c === void 0 ? void 0 : _c.errorMsg });
                }
                else {
                    __MOR_API__.showToast({ title: "登录失败，请检查登录名称和密码" });
                }
            });
        });
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {
    },
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
    },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
    },
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {
    }
}, "w");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./pages/usercenter/login/pass/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map