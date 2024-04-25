"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["pages/usercenter/login/pass/index"],{

/***/ "./pages/usercenter/login/pass/index.js":
/*!**********************************************!*\
  !*** ./pages/usercenter/login/pass/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _utils_queryString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/queryString */ "./utils/queryString.ts");
/* harmony import */ var _services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/usercenter/loginService */ "./services/usercenter/loginService.js");

// pages/usercenter/validate-code/index.ts


Page({
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
        var account = ((0,_utils_queryString__WEBPACK_IMPORTED_MODULE_1__.getCurrentPageParam)() || {}).account;
        console.log("[zy]got from last page:account", account);
        this.setData({ account: account });
    },
    changEye: function () {
        this.setData({
            showPassword: !this.data.showPassword
        });
    },
    inputChange: function (e) {
        var prop = e.currentTarget.dataset.prop;
        var value = e.detail.value;
        this.setData({ stepDisabled: !value });
        this.data.formData[prop] = value;
        this.setData({
            formData: this.data.formData
        });
    },
    regain: function () {
        var account = this.data.account;
        wx.navigateTo({ url: "/pages/usercenter/reset/account/index?account=" + account + "&operate=reset" });
    },
    switchCode: function () {
        console.log("[zy]switchCode");
        wx.navigateBack();
    },
    login: function (res) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var account, password, App, _b, openid, unionid;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        account = this.data.account;
                        password = this.data.formData.password;
                        App = getApp();
                        _b = (_a = App === null || App === void 0 ? void 0 : App.globalData) === null || _a === void 0 ? void 0 : _a.session, openid = _b.openid, unionid = _b.unionid;
                        if (!account) {
                            wx.showToast({
                                icon: 'none',
                                title: "账号不能为空",
                            });
                            return [2 /*return*/];
                        }
                        if (!password) {
                            wx.showToast({
                                icon: 'none',
                                title: "密码不能为空",
                            });
                            return [2 /*return*/];
                        }
                        if (!!openid) return [3 /*break*/, 2];
                        wx.showToast({
                            icon: 'none',
                            title: "需要先登录小程序",
                        });
                        return [4 /*yield*/, (0,_services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_0__.wxLogin)()];
                    case 1:
                        _c.sent();
                        return [2 /*return*/];
                    case 2:
                        (0,_services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_0__.getAccountSession)({
                            account: account,
                            password: password,
                            openid: openid,
                            unionid: unionid,
                        }).then(function (data) {
                            var _a, _b, _c;
                            if ((_a = data === null || data === void 0 ? void 0 : data.loginResponse) === null || _a === void 0 ? void 0 : _a.flag) {
                                wx.switchTab({ url: '/pages/cart/index' });
                            }
                            else if ((_b = data === null || data === void 0 ? void 0 : data.loginResponse) === null || _b === void 0 ? void 0 : _b.errorMsg) {
                                wx.showToast({ title: (_c = data === null || data === void 0 ? void 0 : data.loginResponse) === null || _c === void 0 ? void 0 : _c.errorMsg });
                            }
                            else {
                                wx.showToast({ title: "登录失败，请检查登录名称和密码" });
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
    },
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
    },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
    },
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
    }
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./pages/usercenter/login/pass/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map