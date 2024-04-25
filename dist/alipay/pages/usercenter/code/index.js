"use strict";
(my["mor_modules"] = my["mor_modules"] || []).push([["pages/usercenter/code/index"],{

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
var __MOR_PAGE__ = (__webpack_require__(/*! @morjs/core */ "../node_modules/@morjs/core/esm/index.js").createPage);

var __MOR_API__ = (__webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/esm/index.js").mor);


// pages/usercenter/validate-code/index.ts




const default_mobile_prefix = _config_index__WEBPACK_IMPORTED_MODULE_2__.config.default_mobile_prefix;
const default_sendsms_time = _config_index__WEBPACK_IMPORTED_MODULE_2__.config.default_sendsms_time;
__MOR_PAGE__({
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
        var _a;
        // console.log("[zy]options=",options);
        let { account, operate } = (0,_utils_queryString__WEBPACK_IMPORTED_MODULE_3__.getCurrentPageParam)() || {};
        console.log("[zy]got from last page:account", account);
        this.setData({
            account,
            operate
        });
        let mobile = account;
        let mobileprefix = default_mobile_prefix;
        const App = getApp();
        let { openid, unionid } = (_a = App === null || App === void 0 ? void 0 : App.globalData) === null || _a === void 0 ? void 0 : _a.session;
        (0,_services_usercenter_smsService__WEBPACK_IMPORTED_MODULE_1__.sendSmsCodeService)({
            openid,
            unionid,
            mobile,
            mobileprefix
        }).then(e => {
            let { returnCode, maxSendTimes, message, leftSendTimes } = e || {};
            this.setData({
                leftSendTimes,
            });
            if (returnCode === 0) {
                this.countdown();
            }
            else {
                __MOR_API__.showToast({ title: message || "验证码发送失败，请重试" });
                this.setData({
                    isRegain: true,
                });
            }
            console.log("[zy]onLoad e", e);
        });
    },
    validateParam() {
        var _a;
        let mobile = this.data.account;
        let mobileprefix = default_mobile_prefix;
        let smsCode = this.data.code;
        const App = getApp();
        let { openid, unionid } = (_a = App === null || App === void 0 ? void 0 : App.globalData) === null || _a === void 0 ? void 0 : _a.session;
        if (!mobile) {
            __MOR_API__.showToast({
                icon: 'none',
                title: "账号不能为空",
            });
            return;
        }
        if (!smsCode) {
            __MOR_API__.showToast({
                icon: 'none',
                title: "验证码不能为空",
            });
            return;
        }
        if (!openid) {
            __MOR_API__.showToast({
                icon: 'none',
                title: "需要先登录小程序",
            });
            (0,_services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_0__.wxLogin)();
            return;
        }
        return true;
    },
    finishCode() {
        if (!this.validateParam()) {
            return;
        }
        let { operate } = this.data;
        if (["register", "reset"].indexOf(operate) > -1) {
            this.validateSmsCode();
        }
        else { //login
            this.login();
        }
    },
    login() {
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let mobile = this.data.account;
            let mobileprefix = default_mobile_prefix;
            let smsCode = this.data.code;
            const App = getApp();
            let { openid, unionid } = (_a = App === null || App === void 0 ? void 0 : App.globalData) === null || _a === void 0 ? void 0 : _a.session;
            let res = yield (0,_services_usercenter_smsService__WEBPACK_IMPORTED_MODULE_1__.getSmsSession)({
                openid,
                unionid,
                mobile,
                smsCode,
                mobileprefix
            });
            if ((_b = res === null || res === void 0 ? void 0 : res.loginResponse) === null || _b === void 0 ? void 0 : _b.flag) {
                __MOR_API__.switchTab({ url: '/pages/cart/index' });
            }
            else if ((_c = res === null || res === void 0 ? void 0 : res.loginResponse) === null || _c === void 0 ? void 0 : _c.errorMsg) {
                __MOR_API__.showToast({ title: (_d = res === null || res === void 0 ? void 0 : res.loginResponse) === null || _d === void 0 ? void 0 : _d.errorMsg });
            }
            else {
                __MOR_API__.showToast({ title: "登录失败，请检查手机号码和验证码" });
            }
        });
    },
    validateSmsCode() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let { operate, } = this.data;
            let mobile = this.data.account;
            let mobileprefix = default_mobile_prefix;
            let smsCode = this.data.code;
            const App = getApp();
            let { openid, unionid } = (_a = App === null || App === void 0 ? void 0 : App.globalData) === null || _a === void 0 ? void 0 : _a.session;
            let res = yield (0,_services_usercenter_smsService__WEBPACK_IMPORTED_MODULE_1__.validateSmsService)({
                openid,
                unionid,
                mobile,
                smsCode,
                mobileprefix,
                operation: operate,
            });
            if (res.returnCode === 0 && (res === null || res === void 0 ? void 0 : res.token)) { //data?.loginResponse?.token
                this.setData({
                    stepDisabled: false,
                    validatedToken: res === null || res === void 0 ? void 0 : res.token,
                });
            }
            else {
                __MOR_API__.showToast({ title: (res === null || res === void 0 ? void 0 : res.message) || "验证码失效" });
            }
        });
    },
    goNext() {
        let { account, operate, validatedToken, } = this.data;
        if (validatedToken) {
            if (operate === "reset") {
                __MOR_API__.navigateTo({ url: `/pages/usercenter/reset/reset/index?account=${account}&token=${validatedToken}&operate=${operate}` });
            }
            else {
                __MOR_API__.navigateTo({ url: `/pages/usercenter/register/pass/index?account=${account}&token=${validatedToken}&operate=${operate}` });
            }
        }
        else {
            __MOR_API__.showToast({ title: "验证码错误，请重新尝试" });
            this.setData({ code: "" });
        }
    },
    regain() {
        this.setData({
            isRegain: false,
        });
        this.countdown();
    },
    switchPass() {
        let account = this.data.account;
        __MOR_API__.navigateTo({ url: `/pages/usercenter/login/pass/index?account=${account}` });
    },
    getFocus() {
        this.setData({
            isFocus: true,
        });
    },
    getCode(e) {
        console.log("[zy]getCode", e);
        let code = e.detail.value;
        this.setData({
            code,
        });
        if (code.length === 6) {
            this.finishCode();
        }
    },
    countdown() {
        var currentTime = this.data.time;
        let timer = setInterval(() => {
            currentTime--;
            this.setData({
                time: currentTime
            });
            if (currentTime <= 0) {
                clearInterval(timer);
                this.setData({
                    time: default_sendsms_time,
                    isRegain: true,
                });
            }
        }, 1000);
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
    let prefix = "[zy]getSmsSession";
    console.log(prefix, "service start");
    return (0,_model_usercenter_sessionModel__WEBPACK_IMPORTED_MODULE_0__.smsSession)(params).then((data) => {
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
    let prefix = "[zy]sendSmsCodeService";
    console.log(prefix, "service start", params);
    return (0,_model_usercenter_sessionModel__WEBPACK_IMPORTED_MODULE_0__.sendSmsCode)(params).then((data) => {
        console.log(prefix, "resp=", data);
        if (data) {
            // let {mobile,openid,unionid,loginResponse:{flag,token,uid,errorMsg,}}=data;
            return data;
        }
    });
}
function validateSmsService(params) {
    let prefix = "[zy]validateSmsService";
    console.log(prefix, "service start");
    return (0,_model_usercenter_sessionModel__WEBPACK_IMPORTED_MODULE_0__.validateSmsCode)(params).then((data) => {
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