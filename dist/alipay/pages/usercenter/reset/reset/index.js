"use strict";
(my["mor_modules"] = my["mor_modules"] || []).push([["pages/usercenter/reset/reset/index"],{

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
var __MOR_PAGE__ = (__webpack_require__(/*! @morjs/core */ "../node_modules/@morjs/core/esm/index.js").createPage);

var __MOR_API__ = (__webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/esm/index.js").mor);


// pages/usercenter/validate-code/index.ts




__MOR_PAGE__({
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
        let { account, token, operate } = (0,_utils_queryString__WEBPACK_IMPORTED_MODULE_3__.getCurrentPageParam)() || {};
        console.log("[zy]got from last page:account", account);
        if (!token) {
            __MOR_API__.showToast({ title: "验证码错误，请重新尝试" });
            __MOR_API__.navigateBack();
            return;
        }
        let mainTitle = this.data.mainTitle;
        if (operate == "register") {
            mainTitle = "设置登录密码";
        }
        else if (operate == "reset") {
            mainTitle = "设置新密码";
        }
        this.setData({ account, token, operate, mainTitle });
    },
    changEye: function () {
        this.setData({
            showPassword: !this.data.showPassword
        });
    },
    inputChange: function (e) {
        let prop = e.currentTarget.dataset.prop;
        let value = e.detail.value;
        this.setData({ stepDisabled: !value });
        this.data.formData[prop] = value;
        this.setData({
            formData: this.data.formData
        });
    },
    inputChange2(e) {
        let prop = e.currentTarget.dataset.prop;
        let value = e.detail.value;
        this.setData({ stepDisabled: !value });
        this.data.formData[prop] = value;
        this.setData({
            formData: this.data.formData
        });
    },
    resetPass: function (res) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let { account, token, operate, } = this.data;
            let password = this.data.formData.password;
            const App = getApp();
            let { openid, unionid } = (_a = App === null || App === void 0 ? void 0 : App.globalData) === null || _a === void 0 ? void 0 : _a.session;
            if (!account) {
                __MOR_API__.showToast({
                    icon: 'none',
                    title: "账号不能为空",
                });
                return;
            }
            if (!password) {
                __MOR_API__.showToast({
                    icon: 'none',
                    title: "密码不能为空",
                });
                return;
            }
            if (!openid) {
                __MOR_API__.showToast({
                    icon: 'none',
                    title: "需要先登录小程序",
                });
                yield (0,_services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_1__.wxLogin)();
                return;
            }
            (0,_services_usercenter_resetService__WEBPACK_IMPORTED_MODULE_0__.resetPasswordService)({
                mobile: account,
                mobileprefix: _config_index__WEBPACK_IMPORTED_MODULE_2__.config.default_mobile_prefix,
                password,
                token,
                operation: operate,
                openid,
                unionid,
            }).then((data) => {
                if (data) {
                    __MOR_API__.showModal({
                        title: '重置成功',
                        content: "",
                        confirmText: '去登录',
                        showCancel: false,
                        success: (res) => {
                            if (res === null || res === void 0 ? void 0 : res.cancel) {
                            }
                            if (res.confirm) {
                                __MOR_API__.navigateTo({ url: '/pages/usercenter/login/account/index' });
                            }
                        }
                    });
                }
            });
        });
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

/***/ "./services/usercenter/resetService.js":
/*!*********************************************!*\
  !*** ./services/usercenter/resetService.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resetPasswordService": function() { return /* binding */ resetPasswordService; }
/* harmony export */ });
/* harmony import */ var _model_usercenter_sessionModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/usercenter/sessionModel */ "./model/usercenter/sessionModel.js");
var __MOR_API__ = (__webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/esm/index.js").mor);


function resetPasswordService(params) {
    let prefix = "[zy]resetPasswordService";
    console.log(prefix, "service start", params);
    return (0,_model_usercenter_sessionModel__WEBPACK_IMPORTED_MODULE_0__.resetPassword)(params).then((data) => {
        console.log(prefix, "resp=", data);
        if (data === null || data === void 0 ? void 0 : data.success) {
            // let {mobile,openid,unionid,loginResponse:{flag,token,uid,errorMsg,}}=data;
            return true;
        }
        else if (data === null || data === void 0 ? void 0 : data.errorMessage) {
            __MOR_API__.showToast({
                title: data === null || data === void 0 ? void 0 : data.errorMessage,
            });
        }
        else {
            __MOR_API__.showToast({
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