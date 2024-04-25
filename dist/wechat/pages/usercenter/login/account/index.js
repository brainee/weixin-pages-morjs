"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["pages/usercenter/login/account/index"],{

/***/ "./pages/usercenter/login/account/index.js":
/*!*************************************************!*\
  !*** ./pages/usercenter/login/account/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/usercenter/loginService */ "./services/usercenter/loginService.js");

Page({
    data: {
        formData: { account: "" },
        showPassword: false,
        accountLogin: "账号登录",
        stepDisabled: true,
        readedPolicy: false,
        isChecked: false,
        navigatorProps: {
            url: "/pages/usercenter/register/account/index"
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
        // flag = true;
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
    goLine: function () {
        this.goStep2();
        wx.navigateTo({ url: "/pages/line/index" });
    },
    goStep2: function () {
        var readedPolicy = this.data.readedPolicy;
        if (readedPolicy) {
            var account = this.data.formData.account;
            wx.navigateTo({ url: "/pages/usercenter/code/index?account=" + account + "&operate=login" });
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
        var _a, _b;
        var prefix = "[zy]getPhoneNumber";
        var _c = e.detail, code = _c.code, errMsg = _c.errMsg, iv = _c.iv, encryptedData = _c.encryptedData;
        console.log(prefix, code, e, errMsg, iv, encryptedData);
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
                console.log(prefix, "getPhoneNumber code success");
                var session = ((_b = getApp().globalData) === null || _b === void 0 ? void 0 : _b.session) || {};
                var openid = session.openid, unionid = session.unionid;
                (0,_services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_0__.phoneLoginService)({ code: code, openid: openid, unionid: unionid }).then(function (data) {
                    //微信快捷登录完成
                    if (data) {
                        wx.showModal({
                            title: '提示',
                            showCancel: false,
                            content: '快捷登录成功',
                            success: function (res) {
                                wx.switchTab({ url: '/pages/cart/index' });
                            }
                        });
                    }
                    else {
                        wx.showToast({ title: "微信快捷登录失败" });
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
        wx.showToast({ title: JSON.stringify(e.detail) + "---" });
        // wx.showToast({ title: e.detail.checked + "" });
        this.setData({
            readedPolicy: e.detail.checked,
            isChecked: !this.data.isChecked,
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
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./pages/usercenter/login/account/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map