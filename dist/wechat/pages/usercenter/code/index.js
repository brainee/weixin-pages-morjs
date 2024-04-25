"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["pages/usercenter/code/index"],{

/***/ "./pages/usercenter/code/index.js":
/*!****************************************!*\
  !*** ./pages/usercenter/code/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _utils_queryString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/queryString */ "./utils/queryString.ts");
/* harmony import */ var _services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/usercenter/loginService */ "./services/usercenter/loginService.js");
/* harmony import */ var _services_usercenter_smsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/usercenter/smsService */ "./services/usercenter/smsService.js");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/index */ "./config/index.js");

// pages/usercenter/validate-code/index.ts




var default_mobile_prefix = _config_index__WEBPACK_IMPORTED_MODULE_2__.config.default_mobile_prefix;
var default_sendsms_time = _config_index__WEBPACK_IMPORTED_MODULE_2__.config.default_sendsms_time;
Page({
    /**
     * 页面的初始数据
     */
    data: {
        account: "",
        isFocus: true,
        code: "",
        isRegain: false,
        timer: null,
        time: default_sendsms_time,
        leftSendTimes: 2,
        stepDisabled: true,
        validatedToken: "",
    },
    /* 生命周期函数--监听页面加载 */
    onLoad: function (options) {
        var _this = this;
        var _a;
        // console.log("[zy]options=",options);
        var _b = (0,_utils_queryString__WEBPACK_IMPORTED_MODULE_3__.getCurrentPageParam)() || {}, account = _b.account, operate = _b.operate;
        console.log("[zy]got from last page:account", account);
        this.setData({
            account: account,
            operate: operate
        });
        var mobile = account;
        var mobileprefix = default_mobile_prefix;
        var App = getApp();
        var _c = (_a = App === null || App === void 0 ? void 0 : App.globalData) === null || _a === void 0 ? void 0 : _a.session, openid = _c.openid, unionid = _c.unionid;
        (0,_services_usercenter_smsService__WEBPACK_IMPORTED_MODULE_1__.sendSmsCodeService)({
            openid: openid,
            unionid: unionid,
            mobile: mobile,
            mobileprefix: mobileprefix
        }).then(function (e) {
            var _a = e || {}, returnCode = _a.returnCode, maxSendTimes = _a.maxSendTimes, message = _a.message, leftSendTimes = _a.leftSendTimes;
            _this.setData({
                leftSendTimes: leftSendTimes,
            });
            if (returnCode === 0) {
                _this.countdown();
            }
            else {
                wx.showToast({ title: message || "验证码发送失败，请重试" });
                _this.setData({
                    isRegain: true,
                });
            }
            console.log("[zy]onLoad e", e);
        });
    },
    validateParam: function () {
        var _a;
        var mobile = this.data.account;
        var mobileprefix = default_mobile_prefix;
        var smsCode = this.data.code;
        var App = getApp();
        var _b = (_a = App === null || App === void 0 ? void 0 : App.globalData) === null || _a === void 0 ? void 0 : _a.session, openid = _b.openid, unionid = _b.unionid;
        if (!mobile) {
            wx.showToast({
                icon: 'none',
                title: "账号不能为空",
            });
            return;
        }
        if (!smsCode) {
            wx.showToast({
                icon: 'none',
                title: "验证码不能为空",
            });
            return;
        }
        if (!openid) {
            wx.showToast({
                icon: 'none',
                title: "需要先登录小程序",
            });
            (0,_services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_0__.wxLogin)();
            return;
        }
        return true;
    },
    finishCode: function () {
        if (!this.validateParam()) {
            return;
        }
        var operate = this.data.operate;
        if (["register", "reset"].indexOf(operate) > -1) {
            this.validateSmsCode();
        }
        else { //login
            this.login();
        }
    },
    login: function () {
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            var mobile, mobileprefix, smsCode, App, _e, openid, unionid, res;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        mobile = this.data.account;
                        mobileprefix = default_mobile_prefix;
                        smsCode = this.data.code;
                        App = getApp();
                        _e = (_a = App === null || App === void 0 ? void 0 : App.globalData) === null || _a === void 0 ? void 0 : _a.session, openid = _e.openid, unionid = _e.unionid;
                        return [4 /*yield*/, (0,_services_usercenter_smsService__WEBPACK_IMPORTED_MODULE_1__.getSmsSession)({
                                openid: openid,
                                unionid: unionid,
                                mobile: mobile,
                                smsCode: smsCode,
                                mobileprefix: mobileprefix
                            })];
                    case 1:
                        res = _f.sent();
                        if ((_b = res === null || res === void 0 ? void 0 : res.loginResponse) === null || _b === void 0 ? void 0 : _b.flag) {
                            wx.switchTab({ url: '/pages/cart/index' });
                        }
                        else if ((_c = res === null || res === void 0 ? void 0 : res.loginResponse) === null || _c === void 0 ? void 0 : _c.errorMsg) {
                            wx.showToast({ title: (_d = res === null || res === void 0 ? void 0 : res.loginResponse) === null || _d === void 0 ? void 0 : _d.errorMsg });
                        }
                        else {
                            wx.showToast({ title: "登录失败，请检查手机号码和验证码" });
                        }
                        return [2 /*return*/];
                }
            });
        });
    },
    validateSmsCode: function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            var operate, mobile, mobileprefix, smsCode, App, _b, openid, unionid, res;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        operate = this.data.operate;
                        mobile = this.data.account;
                        mobileprefix = default_mobile_prefix;
                        smsCode = this.data.code;
                        App = getApp();
                        _b = (_a = App === null || App === void 0 ? void 0 : App.globalData) === null || _a === void 0 ? void 0 : _a.session, openid = _b.openid, unionid = _b.unionid;
                        return [4 /*yield*/, (0,_services_usercenter_smsService__WEBPACK_IMPORTED_MODULE_1__.validateSmsService)({
                                openid: openid,
                                unionid: unionid,
                                mobile: mobile,
                                smsCode: smsCode,
                                mobileprefix: mobileprefix,
                                operation: operate,
                            })];
                    case 1:
                        res = _c.sent();
                        if (res.returnCode === 0 && (res === null || res === void 0 ? void 0 : res.token)) { //data?.loginResponse?.token
                            this.setData({
                                stepDisabled: false,
                                validatedToken: res === null || res === void 0 ? void 0 : res.token,
                            });
                        }
                        else {
                            wx.showToast({ title: (res === null || res === void 0 ? void 0 : res.message) || "验证码失效" });
                        }
                        return [2 /*return*/];
                }
            });
        });
    },
    goNext: function () {
        var _a = this.data, account = _a.account, operate = _a.operate, validatedToken = _a.validatedToken;
        if (validatedToken) {
            if (operate === "reset") {
                wx.navigateTo({ url: "/pages/usercenter/reset/reset/index?account=" + account + "&token=" + validatedToken + "&operate=" + operate });
            }
            else {
                wx.navigateTo({ url: "/pages/usercenter/register/pass/index?account=" + account + "&token=" + validatedToken + "&operate=" + operate });
            }
        }
        else {
            wx.showToast({ title: "验证码错误，请重新尝试" });
            this.setData({ code: "" });
        }
    },
    regain: function () {
        this.setData({
            isRegain: false,
        });
        this.countdown();
    },
    switchPass: function () {
        var account = this.data.account;
        wx.navigateTo({ url: "/pages/usercenter/login/pass/index?account=" + account });
    },
    getFocus: function () {
        this.setData({
            isFocus: true,
        });
    },
    getCode: function (e) {
        console.log("[zy]getCode", e);
        var code = e.detail.value;
        this.setData({
            code: code,
        });
        if (code.length === 6) {
            this.finishCode();
        }
    },
    countdown: function () {
        var _this = this;
        var currentTime = this.data.time;
        var timer = setInterval(function () {
            currentTime--;
            _this.setData({
                time: currentTime
            });
            if (currentTime <= 0) {
                clearInterval(timer);
                _this.setData({
                    time: default_sendsms_time,
                    isRegain: true,
                });
            }
        }, 1000);
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

/***/ "./services/usercenter/smsService.js":
/*!*******************************************!*\
  !*** ./services/usercenter/smsService.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSmsSession": function() { return /* binding */ getSmsSession; },
/* harmony export */   "sendSmsCodeService": function() { return /* binding */ sendSmsCodeService; },
/* harmony export */   "validateSmsService": function() { return /* binding */ validateSmsService; }
/* harmony export */ });
/* harmony import */ var _model_usercenter_sessionModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/usercenter/sessionModel */ "./model/usercenter/sessionModel.js");

function getSmsSession(params) {
    var prefix = "[zy]getSmsSession";
    console.log(prefix, "service start");
    return (0,_model_usercenter_sessionModel__WEBPACK_IMPORTED_MODULE_0__.smsSession)(params).then(function (data) {
        var _a;
        console.log(prefix, "resp=", data);
        if (data) {
            // let {mobile,openid,unionid,loginResponse:{flag,token,uid,errorMsg,}}=data;
            if ((_a = data === null || data === void 0 ? void 0 : data.loginResponse) === null || _a === void 0 ? void 0 : _a.flag) {
                getApp().globalData.session = data;
            }
            return data;
        }
    });
}
function sendSmsCodeService(params) {
    var prefix = "[zy]sendSmsCodeService";
    console.log(prefix, "service start", params);
    return (0,_model_usercenter_sessionModel__WEBPACK_IMPORTED_MODULE_0__.sendSmsCode)(params).then(function (data) {
        console.log(prefix, "resp=", data);
        if (data) {
            // let {mobile,openid,unionid,loginResponse:{flag,token,uid,errorMsg,}}=data;
            return data;
        }
    });
}
function validateSmsService(params) {
    var prefix = "[zy]validateSmsService";
    console.log(prefix, "service start");
    return (0,_model_usercenter_sessionModel__WEBPACK_IMPORTED_MODULE_0__.validateSmsCode)(params).then(function (data) {
        console.log(prefix, "resp=", data);
        if (data) {
            // let {mobile,openid,unionid,loginResponse:{flag,token,uid,errorMsg,}}=data;
            return data;
        }
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./pages/usercenter/code/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map