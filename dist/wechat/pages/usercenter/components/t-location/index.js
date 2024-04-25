"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["pages/usercenter/components/t-location/index"],{

/***/ "./pages/usercenter/components/t-location/index.js":
/*!*********************************************************!*\
  !*** ./pages/usercenter/components/t-location/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../utils/getPermission'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/util */ "./utils/util.ts");
/* harmony import */ var tdesign_miniprogram_toast_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tdesign-miniprogram/toast/index */ "../node_modules/tdesign-miniprogram/miniprogram_dist/toast/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../utils/addressParse'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../address/list/util'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






Component({
    externalClasses: ['t-class'],
    properties: {
        title: {
            type: String,
        },
        navigateUrl: {
            type: String,
        },
        navigateEvent: {
            type: String,
        },
        isCustomStyle: {
            type: Boolean,
            value: false,
        },
        isDisabledBtn: {
            type: Boolean,
            value: false,
        },
        isOrderSure: {
            type: Boolean,
            value: false,
        },
    },
    methods: {
        getWxLocation: function () {
            var _this = this;
            if (this.properties.isDisabledBtn)
                return;
            Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../utils/getPermission'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({ code: 'scope.address', name: '通讯地址' }).then(function () {
                wx.chooseAddress({
                    success: function (options) { return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(_this, void 0, void 0, function () {
                        var provinceName, cityName, countyName, detailInfo, userName, telNumber, target, _a, provinceCode, cityCode, districtCode, params_1, navigateEvent_1, error_1;
                        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    provinceName = options.provinceName, cityName = options.cityName, countyName = options.countyName, detailInfo = options.detailInfo, userName = options.userName, telNumber = options.telNumber;
                                    if (!(0,_utils_util__WEBPACK_IMPORTED_MODULE_3__.phoneRegCheck)(telNumber)) {
                                        (0,tdesign_miniprogram_toast_index__WEBPACK_IMPORTED_MODULE_1__["default"])({
                                            context: this,
                                            selector: '#t-toast',
                                            message: '请填写正确的手机号',
                                        });
                                        return [2 /*return*/];
                                    }
                                    target = {
                                        name: userName,
                                        phone: telNumber,
                                        countryName: '中国',
                                        countryCode: 'chn',
                                        detailAddress: detailInfo,
                                        provinceName: provinceName,
                                        cityName: cityName,
                                        districtName: countyName,
                                        isDefault: false,
                                        isOrderSure: this.properties.isOrderSure,
                                    };
                                    _b.label = 1;
                                case 1:
                                    _b.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../utils/addressParse'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(provinceName, cityName, countyName)];
                                case 2:
                                    _a = _b.sent(), provinceCode = _a.provinceCode, cityCode = _a.cityCode, districtCode = _a.districtCode;
                                    params_1 = Object.assign(target, {
                                        provinceCode: provinceCode,
                                        cityCode: cityCode,
                                        districtCode: districtCode,
                                    });
                                    if (this.properties.isOrderSure) {
                                        this.onHandleSubmit(params_1);
                                    }
                                    else if (this.properties.navigateUrl != '') {
                                        navigateEvent_1 = this.properties.navigateEvent;
                                        this.triggerEvent('navigate');
                                        wx.navigateTo({
                                            url: this.properties.navigateUrl,
                                            success: function (res) {
                                                res.eventChannel.emit(navigateEvent_1, params_1);
                                            },
                                        });
                                    }
                                    else {
                                        this.triggerEvent('change', params_1);
                                    }
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_1 = _b.sent();
                                    wx.showToast({ title: '地址解析出错，请稍后再试', icon: 'none' });
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); },
                    fail: function (err) {
                        console.warn('未选择微信收货地址', err);
                    },
                });
            });
        },
        queryAddress: function (addressId) {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
                var data, err_1;
                return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, apis.userInfo.queryAddress({ addressId: addressId })];
                        case 1:
                            data = (_a.sent()).data;
                            return [2 /*return*/, data.userAddressVO];
                        case 2:
                            err_1 = _a.sent();
                            console.error('查询地址错误', err_1);
                            throw err_1;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        findPage: function (pageRouteUrl) {
            var currentRoutes = getCurrentPages().map(function (v) { return v.route; });
            return currentRoutes.indexOf(pageRouteUrl);
        },
        onHandleSubmit: function (params) {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
                var orderPageDeltaNum;
                return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                    try {
                        orderPageDeltaNum = this.findPage('pages/order/order-confirm/index');
                        if (orderPageDeltaNum > -1) {
                            wx.navigateBack({ delta: 1 });
                            Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../address/list/util'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(params);
                            return [2 /*return*/];
                        }
                    }
                    catch (err) {
                        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../address/list/util'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(params);
                        console.error(err);
                    }
                    return [2 /*return*/];
                });
            });
        },
    },
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./pages/usercenter/components/t-location/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map