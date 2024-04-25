"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["pages/usercenter/register/account/index"],{

/***/ "./pages/usercenter/register/account/index.js":
/*!****************************************************!*\
  !*** ./pages/usercenter/register/account/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _services_usercenter_registerService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/usercenter/registerService */ "./services/usercenter/registerService.js");
// pages/usercenter/login-account/index.ts

Page({
    data: {
        formData: { account: "" },
        accountLogin: "手机号注册",
        stepDisabled: true,
        readedPolicy: false,
        navigatorProps: {
            url: "/pages/usercenter/login/account/index",
        }
    },
    changEye: function () {
        this.setData({
            showPassword: !this.data.showPassword
        });
    },
    inputChange: function (e) {
        var prop = e.currentTarget.dataset.prop;
        var value = e.detail.value;
        this.data.formData[prop] = value;
        var flag = this.getVerificationCode(value);
        // flag=true;
        if (value.length > 11) {
            wx.showToast({
                "title": "手机号码不正确"
            });
        }
        if (!flag) {
            this.setData({
                stepDisabled: true,
            });
        }
        else {
            this.setData({
                stepDisabled: false,
            });
        }
        this.setData({
            formData: this.data.formData
        });
    },
    goStep2: function () {
        var readedPolicy = this.data.readedPolicy;
        if (readedPolicy) {
            var account = this.data.formData.account;
            wx.navigateTo({ url: "/pages/usercenter/code/index?account=" + account + "&operate=register" });
        }
        else {
            wx.showToast({ title: "请先阅读 服务协议和隐私政策" });
        }
    },
    onLoad: function () {
        // checkWxSession();
        // wxLogin();
    },
    onShow: function () {
        // this.getTabBar()?.init();
    },
    getPhoneNumber: function (e) {
        var _this = this;
        var _a;
        var prefix = "[zy]getPhoneNumber";
        var _b = e.detail, code = _b.code, errMsg = _b.errMsg, iv = _b.iv, encryptedData = _b.encryptedData;
        console.log(prefix, code, e, errMsg);
        if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.readedPolicy) {
            var account = this.data.formData.account;
            if (errMsg.startsWith('getPhoneNumber:fail ')) {
                wx.showModal({
                    title: '获取失败',
                    showCancel: false,
                    content: errMsg,
                    success: function (res) { }
                });
            }
            else {
                wx.showModal({
                    title: '提示',
                    showCancel: false,
                    content: '同意授权',
                    success: function (res) {
                        var _a;
                        var session = ((_a = getApp().globalData) === null || _a === void 0 ? void 0 : _a.session) || {};
                        var openid = session.openid, unionid = session.unionid;
                        (0,_services_usercenter_registerService__WEBPACK_IMPORTED_MODULE_0__.getPhoneService)({ code: code, openid: openid, unionid: unionid }).then(function (mobile) {
                            //微信快捷获取手机号
                            if (mobile) {
                                _this.data.formData.account = mobile;
                                _this.setData({
                                    formData: _this.data.formData,
                                    stepDisabled: false,
                                });
                            }
                            else {
                                wx.showToast({ title: "微信快捷获取手机号失败" });
                            }
                        });
                    }
                });
            }
        }
        else {
            wx.showToast({ title: "请先阅读 服务协议和隐私政策" });
            return;
        }
    },
    onChangeOfRead: function (e) {
        // wx.showToast({ title: e.detail.checked + "" });
        this.setData({
            readedPolicy: e.detail.checked
        });
    },
    agreeUser: function (e) {
        wx.showToast({ title: "agreeUser" });
        return false;
    },
    agreePrivacy: function (e) {
        wx.showToast({ title: "agreePrivacy" });
        return false;
    },
    getVerificationCode: function (phone) {
        // https://developer.aliyun.com/article/1431953?spm=5176.26934562.main.1.33046d28Ikjk93
        var reg = /^1[3-9][0-9]{9}$/;
        var flag = reg.test(phone);
        return flag;
    },
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./pages/usercenter/register/account/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map