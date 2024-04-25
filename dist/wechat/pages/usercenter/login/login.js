"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["pages/usercenter/login/login"],{

/***/ "./pages/usercenter/login/login.js":
/*!*****************************************!*\
  !*** ./pages/usercenter/login/login.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/usercenter/loginService */ "./services/usercenter/loginService.js");

var App = getApp();
Page({
    data: {
        formData: {},
        showPassword: false,
        accountLogin: "账号登录",
        disabled: false,
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
        this.setData({
            formData: this.data.formData
        });
    },
    login: function (res) {
        var _a;
        var account = this.data.formData.account;
        var password = this.data.formData.password;
        var _b = (_a = App === null || App === void 0 ? void 0 : App.globalData) === null || _a === void 0 ? void 0 : _a.session, openid = _b.openid, unionid = _b.unionid;
        if (!account) {
            wx.showToast({
                icon: 'none',
                title: "账号不能为空",
            });
            return;
        }
        if (!password) {
            wx.showToast({
                icon: 'none',
                title: "密码不能为空",
            });
            return;
        }
        if (!openid) {
            wx.showToast({
                icon: 'none',
                title: "需要先登录小程序",
            });
            return;
        }
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
    },
    goStep2: function () {
        wx.navigateTo({ url: "/pages/usercenter/validate-code/index" });
    },
    onLoad: function () {
        // checkWxSession();
        (0,_services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_0__.wxLogin)();
    },
    onShow: function () {
        // this.getTabBar()?.init();
    },
    getPhoneNumber: function (e) {
        var _a = e.detail, code = _a.code, errMsg = _a.errMsg, iv = _a.iv, encryptedData = _a.encryptedData;
        console.log("[zy]e.detail", code, e, errMsg, iv, encryptedData);
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
                    var _b = ((_a = getApp().globalData) === null || _a === void 0 ? void 0 : _a.session) || {}, openid = _b.openid, unionid = _b.unionid;
                    (0,_services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_0__.phoneLoginService)({ code: code, openid: openid, unionid: unionid });
                }
            });
        }
    },
    onChangeOfRead: function (e) {
        wx.showToast({ title: e.detail.checked + "" });
    },
    agreeUser: function (e) {
        wx.showToast({ title: "agreeUser" });
        return false;
    },
    agreePrivacy: function (e) {
        wx.showToast({ title: "agreePrivacy" });
        return false;
    },
    getVerificationCode: function (e) {
        var reg = /^1[3|4|5|7|8][0-9]{9}$/;
        var phone = this.data.userPhone;
        var flag = reg.test(phone);
        if (flag) {
            var that = this;
            var code;
            this.setData({
                isValated: true
            });
        }
        else {
            wx.showToast({
                "title": "手机号码不正确"
            });
        }
    },
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./pages/usercenter/login/login.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=login.js.map