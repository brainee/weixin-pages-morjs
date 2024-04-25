"use strict";
(my["mor_modules"] = my["mor_modules"] || []).push([["pages/usercenter/reset/account/index"],{

/***/ "./pages/usercenter/reset/account/index.js":
/*!*************************************************!*\
  !*** ./pages/usercenter/reset/account/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _utils_queryString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/queryString */ "./utils/queryString.ts");
var __MOR_PAGE__ = (__webpack_require__(/*! @morjs/core */ "../node_modules/@morjs/core/esm/index.js").createPage);

var __MOR_API__ = (__webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/esm/index.js").mor);


__MOR_PAGE__({
    data: {
        formData: { account: "" },
        accountLogin: "重置密码",
        stepDisabled: true,
    },
    inputChange: function (e) {
        let prop = e.currentTarget.dataset.prop;
        let value = e.detail.value;
        this.data.formData[prop] = value;
        let flag = this.getVerificationCode(value);
        // flag=true;
        if ((value === null || value === void 0 ? void 0 : value.length) > 11) {
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
        let account = this.data.formData.account;
        let flag = this.getVerificationCode(account);
        if (flag) {
            __MOR_API__.navigateTo({ url: `/pages/usercenter/code/index?account=${account}&operate=reset` });
        }
    },
    onLoad() {
        let { account, operate } = (0,_utils_queryString__WEBPACK_IMPORTED_MODULE_0__.getCurrentPageParam)() || {};
        console.log("[zy]got from last page:account", account);
        this.data.formData.account = account;
        this.setData({
            formData: this.data.formData,
            stepDisabled: !account,
        });
        // checkWxSession();
        // wxLogin();
    },
    onShow() {
        // this.getTabBar()?.init();
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
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./pages/usercenter/reset/account/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map