"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["pages/usercenter/index"],{

/***/ "./model/usercenter/usercenter.js":
/*!****************************************!*\
  !*** ./model/usercenter/usercenter.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "genUsercenter": function() { return /* binding */ genUsercenter; }
/* harmony export */ });
/* unused harmony export genSimpleUserInfo */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");

var userInfo = {
    avatarUrl: 'https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg',
    nickName: 'TDesign 🌟',
    phoneNumber: '13438358888',
    gender: 2,
};
var countsData = [
    {
        num: 2,
        name: '积分',
        type: 'point',
    },
    {
        num: 10,
        name: '优惠券',
        type: 'coupon',
    },
];
var orderTagInfos = [
    {
        orderNum: 1,
        tabType: 5,
    },
    {
        orderNum: 1,
        tabType: 10,
    },
    {
        orderNum: 1,
        tabType: 40,
    },
    {
        orderNum: 0,
        tabType: 0,
    },
];
var customerServiceInfo = {
    servicePhone: '4006336868',
    serviceTimeDuration: '每周三至周五 9:00-12:00  13:00-15:00',
};
var genSimpleUserInfo = function () { return ((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, userInfo)); };
var genUsercenter = function () { return ({
    userInfo: userInfo,
    countsData: countsData,
    orderTagInfos: orderTagInfos,
    customerServiceInfo: customerServiceInfo,
}); };


/***/ }),

/***/ "./pages/usercenter/index.js":
/*!***********************************!*\
  !*** ./pages/usercenter/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _services_usercenter_fetchUsercenter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/usercenter/fetchUsercenter */ "./services/usercenter/fetchUsercenter.js");
/* harmony import */ var tdesign_miniprogram_toast_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tdesign-miniprogram/toast/index */ "../node_modules/tdesign-miniprogram/miniprogram_dist/toast/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'services/usercenter/logoutService'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'services/usercenter/loginService'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





var menuData = [
    [
        {
            title: '收货地址',
            tit: '',
            url: '',
            type: 'address',
        },
        {
            title: '优惠券',
            tit: '',
            url: '',
            type: 'coupon',
        },
        {
            title: '积分',
            tit: '',
            url: '',
            type: 'point',
        },
    ],
    [
        {
            title: '帮助中心',
            tit: '',
            url: '',
            type: 'help-center',
        },
        {
            title: '客服热线',
            tit: '',
            url: '',
            type: 'service',
            icon: 'service',
        },
    ],
];
var orderTagInfos = [
    {
        title: '待付款',
        iconName: 'wallet',
        orderNum: 0,
        tabType: 5,
        status: 1,
    },
    {
        title: '待发货',
        iconName: 'deliver',
        orderNum: 0,
        tabType: 10,
        status: 1,
    },
    {
        title: '待收货',
        iconName: 'package',
        orderNum: 0,
        tabType: 40,
        status: 1,
    },
    {
        title: '待评价',
        iconName: 'comment',
        orderNum: 0,
        tabType: 60,
        status: 1,
    },
    {
        title: '退款/售后',
        iconName: 'exchang',
        orderNum: 0,
        tabType: 0,
        status: 1,
    },
];
var getDefaultData = function () { return ({
    showMakePhone: false,
    userInfo: {
        avatarUrl: '',
        nickName: '正在登录...',
        phoneNumber: '',
    },
    menuData: menuData,
    orderTagInfos: orderTagInfos,
    customerServiceInfo: {},
    currAuthStep: 1,
    showKefu: true,
    versionNo: '',
}); };
Page({
    data: getDefaultData(),
    onLoad: function () {
        this.getVersionInfo();
    },
    onShow: function () {
        this.getTabBar().init();
        this.init();
    },
    onPullDownRefresh: function () {
        this.init();
    },
    init: function () {
        this.fetUseriInfoHandle();
    },
    fetUseriInfoHandle: function () {
        var _this = this;
        (0,_services_usercenter_fetchUsercenter__WEBPACK_IMPORTED_MODULE_0__.fetchUserCenter)().then(function (_a) {
            var userInfo = _a.userInfo, countsData = _a.countsData, orderInfo = _a.orderTagInfos, customerServiceInfo = _a.customerServiceInfo;
            // eslint-disable-next-line no-unused-expressions
            menuData === null || menuData === void 0 ? void 0 : menuData[0].forEach(function (v) {
                countsData.forEach(function (counts) {
                    if (counts.type === v.type) {
                        // eslint-disable-next-line no-param-reassign
                        v.tit = counts.num;
                    }
                });
            });
            var info = orderTagInfos.map(function (v, index) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, v), orderInfo[index])); });
            _this.setData({
                userInfo: userInfo,
                menuData: menuData,
                orderTagInfos: info,
                customerServiceInfo: customerServiceInfo,
                currAuthStep: 2,
            });
            wx.stopPullDownRefresh();
        });
    },
    onClickCell: function (_a) {
        var currentTarget = _a.currentTarget;
        var type = currentTarget.dataset.type;
        switch (type) {
            case 'address': {
                wx.navigateTo({ url: '/pages/usercenter/address/list/index' });
                break;
            }
            case 'service': {
                this.openMakePhone();
                break;
            }
            case 'help-center': {
                // Toast({
                //   context: this,
                //   selector: '#t-toast',
                //   message: '你点击了帮助中心',
                //   icon: '',
                //   duration: 1000,
                // });
                wx.navigateTo({ url: '/pages/usercenter/login/account/index' });
                break;
            }
            case 'point': {
                // Toast({
                //   context: this,
                //   selector: '#t-toast',
                //   message: '你点击了积分菜单',
                //   icon: '',
                //   duration: 1000,
                // });
                var _b = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'services/usercenter/loginService'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), openid = _b.openid, unionid = _b.unionid, _c = _b.loginResponse, flag = _c.flag, token = _c.token, uid = _c.uid;
                if (flag === true) {
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'services/usercenter/logoutService'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({ openid: openid, unionid: unionid, token: token }).then(function (e) {
                        if (e) {
                            wx.navigateTo({
                                url: '/pages/usercenter/login/account/index',
                            });
                        }
                    });
                }
                else {
                    wx.showToast({
                        title: '您已登出',
                    });
                    wx.navigateTo({
                        url: '/pages/usercenter/login/account/index',
                    });
                }
                break;
            }
            case 'coupon': {
                wx.navigateTo({ url: '/pages/coupon/coupon-list/index' });
                break;
            }
            default: {
                (0,tdesign_miniprogram_toast_index__WEBPACK_IMPORTED_MODULE_1__["default"])({
                    context: this,
                    selector: '#t-toast',
                    message: '未知跳转',
                    icon: '',
                    duration: 1000,
                });
                break;
            }
        }
    },
    jumpNav: function (e) {
        var status = e.detail.tabType;
        if (status === 0) {
            wx.navigateTo({ url: '/pages/order/after-service-list/index' });
        }
        else {
            wx.navigateTo({ url: "/pages/order/order-list/index?status=" + status });
        }
    },
    jumpAllOrder: function () {
        wx.navigateTo({ url: '/pages/order/order-list/index' });
    },
    openMakePhone: function () {
        this.setData({ showMakePhone: true });
    },
    closeMakePhone: function () {
        this.setData({ showMakePhone: false });
    },
    call: function () {
        wx.makePhoneCall({
            phoneNumber: this.data.customerServiceInfo.servicePhone,
        });
    },
    gotoUserEditPage: function () {
        var currAuthStep = this.data.currAuthStep;
        if (currAuthStep === 2) {
            wx.navigateTo({ url: '/pages/usercenter/person-info/index' });
        }
        else {
            this.fetUseriInfoHandle();
        }
    },
    getVersionInfo: function () {
        var versionInfo = wx.getAccountInfoSync();
        var _a = versionInfo.miniProgram, version = _a.version, _b = _a.envVersion, envVersion = _b === void 0 ? __wxConfig : _b;
        this.setData({
            versionNo: envVersion === 'release' ? version : envVersion,
        });
    },
});


/***/ }),

/***/ "./services/usercenter/fetchUsercenter.js":
/*!************************************************!*\
  !*** ./services/usercenter/fetchUsercenter.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.fetchUserCenter = void 0;
var index_1 = __webpack_require__(/*! ../../config/index */ "./config/index.js");
/** 获取个人中心信息 */
function mockFetchUserCenter() {
    var delay = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../_utils/delay'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
    var genUsercenter = (__webpack_require__(/*! ../../model/usercenter/usercenter */ "./model/usercenter/usercenter.js").genUsercenter);
    return delay(200).then(function () { return genUsercenter(); });
}
/** 获取个人中心信息 */
function fetchUserCenter() {
    if (index_1.config.useMock) {
        return mockFetchUserCenter();
    }
    return new Promise(function (resolve) {
        resolve('real api');
    });
}
exports.fetchUserCenter = fetchUserCenter;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./pages/usercenter/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map