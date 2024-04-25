"use strict";
(my["mor_modules"] = my["mor_modules"] || []).push([["pages/usercenter/register/account/index"],{

/***/ "./pages/usercenter/register/account/index.js":
/*!****************************************************!*\
  !*** ./pages/usercenter/register/account/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _services_usercenter_registerService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/usercenter/registerService */ "./services/usercenter/registerService.js");
var __MOR_PAGE__ = (__webpack_require__(/*! @morjs/core */ "../node_modules/@morjs/core/esm/index.js").createPage);

var __MOR_API__ = (__webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/esm/index.js").mor);

// pages/usercenter/login-account/index.ts

__MOR_PAGE__({
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
        let prop = e.currentTarget.dataset.prop;
        let value = e.detail.value;
        this.data.formData[prop] = value;
        let flag = this.getVerificationCode(value);
        // flag=true;
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
    goStep2() {
        let readedPolicy = this.data.readedPolicy;
        if (readedPolicy) {
            let account = this.data.formData.account;
            __MOR_API__.navigateTo({ url: `/pages/usercenter/code/index?account=${account}&operate=register` });
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
        var _a;
        let prefix = "[zy]getPhoneNumber";
        let { code, errMsg, iv, encryptedData } = e.detail;
        console.log(prefix, code, e, errMsg);
        if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.readedPolicy) {
            let { account } = this.data.formData;
            if (errMsg.startsWith('getPhoneNumber:fail ')) {
                __MOR_API__.showModal({
                    title: '获取失败',
                    showCancel: false,
                    content: errMsg,
                    success: function (res) { }
                });
            }
            else {
                __MOR_API__.showModal({
                    title: '提示',
                    showCancel: false,
                    content: '同意授权',
                    success: (res) => {
                        var _a;
                        let session = ((_a = getApp().globalData) === null || _a === void 0 ? void 0 : _a.session) || {};
                        let { openid, unionid } = session;
                        (0,_services_usercenter_registerService__WEBPACK_IMPORTED_MODULE_0__.getPhoneService)({ code, openid, unionid }).then((mobile) => {
                            //微信快捷获取手机号
                            if (mobile) {
                                this.data.formData.account = mobile;
                                this.setData({
                                    formData: this.data.formData,
                                    stepDisabled: false,
                                });
                            }
                            else {
                                __MOR_API__.showToast({ title: "微信快捷获取手机号失败" });
                            }
                        });
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
        // wx.showToast({ title: e.detail.checked + "" });
        this.setData({
            readedPolicy: e.detail.checked
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
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./pages/usercenter/register/account/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map