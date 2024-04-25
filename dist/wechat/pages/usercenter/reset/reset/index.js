"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["pages/usercenter/reset/reset/index"],{

/***/ "./pages/usercenter/reset/reset/index.js":
/*!***********************************************!*\
  !*** ./pages/usercenter/reset/reset/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _utils_queryString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/queryString */ "./utils/queryString.ts");
/* harmony import */ var _services_usercenter_resetService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/usercenter/resetService */ "./services/usercenter/resetService.js");
/* harmony import */ var _services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/usercenter/loginService */ "./services/usercenter/loginService.js");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config/index */ "./config/index.js");

// pages/usercenter/validate-code/index.ts




Page({
    /**
     * 页面的初始数据
     */
    data: {
        account: "",
        token: "",
        showPassword: false,
        formData: {},
        stepDisabled: true,
        operate: "",
        mainTitle: "设置新密码",
    },
    /* 生命周期函数--监听页面加载 */
    onLoad: function (options) {
        // console.log("[zy]options=",options);
        var _a = (0,_utils_queryString__WEBPACK_IMPORTED_MODULE_3__.getCurrentPageParam)() || {}, account = _a.account, token = _a.token, operate = _a.operate;
        console.log("[zy]got from last page:account", account);
        if (!token) {
            wx.showToast({ title: "验证码错误，请重新尝试" });
            wx.navigateBack();
            return;
        }
        var mainTitle = this.data.mainTitle;
        if (operate == "register") {
            mainTitle = "设置登录密码";
        }
        else if (operate == "reset") {
            mainTitle = "设置新密码";
        }
        this.setData({ account: account, token: token, operate: operate, mainTitle: mainTitle });
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
    inputChange2: function (e) {
        var prop = e.currentTarget.dataset.prop;
        var value = e.detail.value;
        this.setData({ stepDisabled: !value });
        this.data.formData[prop] = value;
        this.setData({
            formData: this.data.formData
        });
    },
    resetPass: function (res) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            var _b, account, token, operate, password, App, _c, openid, unionid;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = this.data, account = _b.account, token = _b.token, operate = _b.operate;
                        password = this.data.formData.password;
                        App = getApp();
                        _c = (_a = App === null || App === void 0 ? void 0 : App.globalData) === null || _a === void 0 ? void 0 : _a.session, openid = _c.openid, unionid = _c.unionid;
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
                        return [4 /*yield*/, (0,_services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_1__.wxLogin)()];
                    case 1:
                        _d.sent();
                        return [2 /*return*/];
                    case 2:
                        (0,_services_usercenter_resetService__WEBPACK_IMPORTED_MODULE_0__.resetPasswordService)({
                            mobile: account,
                            mobileprefix: _config_index__WEBPACK_IMPORTED_MODULE_2__.config.default_mobile_prefix,
                            password: password,
                            token: token,
                            operation: operate,
                            openid: openid,
                            unionid: unionid,
                        }).then(function (data) {
                            if (data) {
                                wx.showModal({
                                    title: '重置成功',
                                    content: "",
                                    confirmText: '去登录',
                                    showCancel: false,
                                    success: function (res) {
                                        if (res === null || res === void 0 ? void 0 : res.cancel) {
                                        }
                                        if (res.confirm) {
                                            wx.navigateTo({ url: '/pages/usercenter/login/account/index' });
                                        }
                                    }
                                });
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


/***/ }),

/***/ "./services/usercenter/resetService.js":
/*!*********************************************!*\
  !*** ./services/usercenter/resetService.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resetPasswordService": function() { return /* binding */ resetPasswordService; }
/* harmony export */ });
/* harmony import */ var _model_usercenter_sessionModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/usercenter/sessionModel */ "./model/usercenter/sessionModel.js");

function resetPasswordService(params) {
    var prefix = "[zy]resetPasswordService";
    console.log(prefix, "service start", params);
    return (0,_model_usercenter_sessionModel__WEBPACK_IMPORTED_MODULE_0__.resetPassword)(params).then(function (data) {
        console.log(prefix, "resp=", data);
        if (data === null || data === void 0 ? void 0 : data.success) {
            // let {mobile,openid,unionid,loginResponse:{flag,token,uid,errorMsg,}}=data;
            return true;
        }
        else if (data === null || data === void 0 ? void 0 : data.errorMessage) {
            wx.showToast({
                title: data === null || data === void 0 ? void 0 : data.errorMessage,
            });
        }
        else {
            wx.showToast({
                title: "重置失败",
            });
        }
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./pages/usercenter/reset/reset/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map