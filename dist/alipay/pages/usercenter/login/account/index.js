"use strict";
(my["mor_modules"] = my["mor_modules"] || []).push([["pages/usercenter/login/account/index"],{

/***/ "./pages/usercenter/login/account/index.js":
/*!*************************************************!*\
  !*** ./pages/usercenter/login/account/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/usercenter/loginService */ "./services/usercenter/loginService.js");
var __MOR_PAGE__ = (__webpack_require__(/*! @morjs/core */ "../node_modules/@morjs/core/esm/index.js").createPage);

var __MOR_API__ = (__webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/esm/index.js").mor);


__MOR_PAGE__({
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
        let prop = e.currentTarget.dataset.prop;
        let value = e.detail.value;
        this.data.formData[prop] = value;
        let flag = this.getVerificationCode(value);
        // flag = true;
        if (value.length > 11) {
            __MOR_API__.showToast({
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
    goLine() {
        this.goStep2();
        __MOR_API__.navigateTo({ url: `/pages/line/index` });
    },
    goStep2() {
        let readedPolicy = this.data.readedPolicy;
        if (readedPolicy) {
            let account = this.data.formData.account;
            __MOR_API__.navigateTo({ url: `/pages/usercenter/code/index?account=${account}&operate=login` });
        }
        else {
            __MOR_API__.showToast({ title: "请先阅读 服务协议和隐私政策" });
        }
    },
    onLoad() {
        // checkWxSession();
        // wxLogin();
    },
    onShow() {
        // this.getTabBar()?.init();
    },
    getPhoneNumber(e) {
        var _a, _b;
        let prefix = "[zy]getPhoneNumber";
        let { code, errMsg, iv, encryptedData } = e.detail;
        console.log(prefix, code, e, errMsg, iv, encryptedData);
        if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.readedPolicy) {
            let account = this.data.formData.account;
            if (errMsg.startsWith('getPhoneNumber:fail ')) {
                __MOR_API__.showModal({
                    title: '获取失败',
                    showCancel: false,
                    content: errMsg,
                    success: function (res) { }
                });
            }
            else {
                console.log(prefix, "getPhoneNumber code success");
                let session = ((_b = getApp().globalData) === null || _b === void 0 ? void 0 : _b.session) || {};
                let { openid, unionid } = session;
                (0,_services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_0__.phoneLoginService)({ code, openid, unionid }).then((data) => {
                    //微信快捷登录完成
                    if (data) {
                        __MOR_API__.showModal({
                            title: '提示',
                            showCancel: false,
                            content: '快捷登录成功',
                            success: function (res) {
                                __MOR_API__.switchTab({ url: '/pages/cart/index' });
                            }
                        });
                    }
                    else {
                        __MOR_API__.showToast({ title: "微信快捷登录失败" });
                    }
                });
            }
        }
        else {
            __MOR_API__.showToast({ title: "请先阅读 服务协议和隐私政策" });
            return;
        }
    },
    onChangeOfRead(e) {
        __MOR_API__.showToast({ title: JSON.stringify(e.detail) + "---" });
        // wx.showToast({ title: e.detail.checked + "" });
        this.setData({
            readedPolicy: e.detail.checked,
            isChecked: !this.data.isChecked,
        });
    },
    agreeUser(e) {
        __MOR_API__.showToast({ title: "agreeUser" });
        return false;
    },
    agreePrivacy(e) {
        __MOR_API__.showToast({ title: "agreePrivacy" });
        return false;
    },
    getVerificationCode: function (phone) {
        // https://developer.aliyun.com/article/1431953?spm=5176.26934562.main.1.33046d28Ikjk93
        var reg = /^1[3-9][0-9]{9}$/;
        var flag = reg.test(phone);
        return flag;
    },
}, "w");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./pages/usercenter/login/account/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map