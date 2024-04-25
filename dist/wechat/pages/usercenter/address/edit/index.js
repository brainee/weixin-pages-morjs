"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["pages/usercenter/address/edit/index"],{

/***/ "./pages/usercenter/address/edit/index.js":
/*!************************************************!*\
  !*** ./pages/usercenter/address/edit/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var tdesign_miniprogram_toast_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tdesign-miniprogram/toast/index */ "../node_modules/tdesign-miniprogram/miniprogram_dist/toast/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../services/address/fetchAddress'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config/index */ "./config/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./pages/usercenter/address/edit/util.js");





var innerPhoneReg = '^1(?:3\\d|4[4-9]|5[0-35-9]|6[67]|7[0-8]|8\\d|9\\d)\\d{8}$';
var innerNameReg = '^[a-zA-Z\\d\\u4e00-\\u9fa5]+$';
var labelsOptions = [
    { id: 0, name: '家' },
    { id: 1, name: '公司' },
];
Page({
    options: {
        multipleSlots: true,
    },
    externalClasses: ['theme-wrapper-class'],
    data: {
        locationState: {
            labelIndex: null,
            addressId: '',
            addressTag: '',
            cityCode: '',
            cityName: '',
            countryCode: '',
            countryName: '',
            detailAddress: '',
            districtCode: '',
            districtName: '',
            isDefault: false,
            name: '',
            phone: '',
            provinceCode: '',
            provinceName: '',
            isEdit: false,
            isOrderDetail: false,
            isOrderSure: false,
        },
        areaData: _config_index__WEBPACK_IMPORTED_MODULE_2__.areaData,
        labels: labelsOptions,
        areaPickerVisible: false,
        submitActive: false,
        visible: false,
        labelValue: '',
        columns: 3,
    },
    privateData: {
        verifyTips: '',
    },
    onLoad: function (options) {
        var id = options.id;
        this.init(id);
    },
    onUnload: function () {
        if (!this.hasSava) {
            (0,_util__WEBPACK_IMPORTED_MODULE_3__.rejectAddress)();
        }
    },
    hasSava: false,
    init: function (id) {
        if (id) {
            this.getAddressDetail(Number(id));
        }
    },
    getAddressDetail: function (id) {
        var _this = this;
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../services/address/fetchAddress'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(id).then(function (detail) {
            _this.setData({ locationState: detail }, function () {
                var _a = _this.onVerifyInputLegal(), isLegal = _a.isLegal, tips = _a.tips;
                _this.setData({
                    submitActive: isLegal,
                });
                _this.privateData.verifyTips = tips;
            });
        });
    },
    onInputValue: function (e) {
        var _a;
        var _this = this;
        var item = e.currentTarget.dataset.item;
        if (item === 'address') {
            var _b = e.detail.selectedOptions, selectedOptions = _b === void 0 ? [] : _b;
            this.setData({
                'locationState.provinceCode': selectedOptions[0].value,
                'locationState.provinceName': selectedOptions[0].label,
                'locationState.cityName': selectedOptions[1].label,
                'locationState.cityCode': selectedOptions[1].value,
                'locationState.districtCode': selectedOptions[2].value,
                'locationState.districtName': selectedOptions[2].label,
                areaPickerVisible: false,
            }, function () {
                var _a = _this.onVerifyInputLegal(), isLegal = _a.isLegal, tips = _a.tips;
                _this.setData({
                    submitActive: isLegal,
                });
                _this.privateData.verifyTips = tips;
            });
        }
        else {
            var _c = e.detail.value, value = _c === void 0 ? '' : _c;
            this.setData((_a = {},
                _a["locationState." + item] = value,
                _a), function () {
                var _a = _this.onVerifyInputLegal(), isLegal = _a.isLegal, tips = _a.tips;
                _this.setData({
                    submitActive: isLegal,
                });
                _this.privateData.verifyTips = tips;
            });
        }
    },
    onPickArea: function () {
        this.setData({ areaPickerVisible: true });
    },
    onPickLabels: function (e) {
        var item = e.currentTarget.dataset.item;
        var _a = this.data, _b = _a.locationState.labelIndex, labelIndex = _b === void 0 ? undefined : _b, _c = _a.labels, labels = _c === void 0 ? [] : _c;
        var payload = {
            labelIndex: item,
            addressTag: labels[item].name,
        };
        if (item === labelIndex) {
            payload = { labelIndex: null, addressTag: '' };
        }
        this.setData({
            'locationState.labelIndex': payload.labelIndex,
        });
        this.triggerEvent('triggerUpdateValue', payload);
    },
    addLabels: function () {
        this.setData({
            visible: true,
        });
    },
    confirmHandle: function () {
        var _a = this.data, labels = _a.labels, labelValue = _a.labelValue;
        this.setData({
            visible: false,
            labels: (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([], labels, true), [{ id: labels[labels.length - 1].id + 1, name: labelValue }], false),
            labelValue: '',
        });
    },
    cancelHandle: function () {
        this.setData({
            visible: false,
            labelValue: '',
        });
    },
    onCheckDefaultAddress: function (_a) {
        var detail = _a.detail;
        var value = detail.value;
        this.setData({
            'locationState.isDefault': value,
        });
    },
    onVerifyInputLegal: function () {
        var _a = this.data.locationState, name = _a.name, phone = _a.phone, detailAddress = _a.detailAddress, districtName = _a.districtName;
        var prefixPhoneReg = String(this.properties.phoneReg || innerPhoneReg);
        var prefixNameReg = String(this.properties.nameReg || innerNameReg);
        var nameRegExp = new RegExp(prefixNameReg);
        var phoneRegExp = new RegExp(prefixPhoneReg);
        if (!name || !name.trim()) {
            return {
                isLegal: false,
                tips: '请填写收货人',
            };
        }
        if (!nameRegExp.test(name)) {
            return {
                isLegal: false,
                tips: '收货人仅支持输入中文、英文（区分大小写）、数字',
            };
        }
        if (!phone || !phone.trim()) {
            return {
                isLegal: false,
                tips: '请填写手机号',
            };
        }
        if (!phoneRegExp.test(phone)) {
            return {
                isLegal: false,
                tips: '请填写正确的手机号',
            };
        }
        if (!districtName || !districtName.trim()) {
            return {
                isLegal: false,
                tips: '请选择省市区信息',
            };
        }
        if (!detailAddress || !detailAddress.trim()) {
            return {
                isLegal: false,
                tips: '请完善详细地址',
            };
        }
        if (detailAddress && detailAddress.trim().length > 50) {
            return {
                isLegal: false,
                tips: '详细地址不能超过50个字符',
            };
        }
        return {
            isLegal: true,
            tips: '添加成功',
        };
    },
    builtInSearch: function (_a) {
        var code = _a.code, name = _a.name;
        return new Promise(function (resolve, reject) {
            wx.getSetting({
                success: function (res) {
                    if (res.authSetting[code] === false) {
                        wx.showModal({
                            title: "\u83B7\u53D6" + name + "\u5931\u8D25",
                            content: "\u83B7\u53D6" + name + "\u5931\u8D25\uFF0C\u8BF7\u5728\u3010\u53F3\u4E0A\u89D2\u3011-\u5C0F\u7A0B\u5E8F\u3010\u8BBE\u7F6E\u3011\u9879\u4E2D\uFF0C\u5C06\u3010" + name + "\u3011\u5F00\u542F\u3002",
                            confirmText: '去设置',
                            confirmColor: '#FA550F',
                            cancelColor: '取消',
                            success: function (res) {
                                if (res.confirm) {
                                    wx.openSetting({
                                        success: function (settinRes) {
                                            if (settinRes.authSetting[code] === true) {
                                                resolve();
                                            }
                                            else {
                                                console.warn('用户未打开权限', name, code);
                                                reject();
                                            }
                                        },
                                    });
                                }
                                else {
                                    reject();
                                }
                            },
                            fail: function () {
                                reject();
                            },
                        });
                    }
                    else {
                        resolve();
                    }
                },
                fail: function () {
                    reject();
                },
            });
        });
    },
    onSearchAddress: function () {
        var _this = this;
        this.builtInSearch({ code: 'scope.userLocation', name: '地址位置' }).then(function () {
            wx.chooseLocation({
                success: function (res) {
                    if (res.name) {
                        _this.triggerEvent('addressParse', {
                            address: res.address,
                            name: res.name,
                            latitude: res.latitude,
                            longitude: res.longitude,
                        });
                    }
                    else {
                        (0,tdesign_miniprogram_toast_index__WEBPACK_IMPORTED_MODULE_0__["default"])({
                            context: _this,
                            selector: '#t-toast',
                            message: '地点为空，请重新选择',
                            icon: '',
                            duration: 1000,
                        });
                    }
                },
                fail: function (res) {
                    console.warn("wx.chooseLocation fail: " + JSON.stringify(res));
                    if (res.errMsg !== 'chooseLocation:fail cancel') {
                        (0,tdesign_miniprogram_toast_index__WEBPACK_IMPORTED_MODULE_0__["default"])({
                            context: this,
                            selector: '#t-toast',
                            message: '地点错误，请重新选择',
                            icon: '',
                            duration: 1000,
                        });
                    }
                },
            });
        });
    },
    formSubmit: function () {
        var submitActive = this.data.submitActive;
        if (!submitActive) {
            (0,tdesign_miniprogram_toast_index__WEBPACK_IMPORTED_MODULE_0__["default"])({
                context: this,
                selector: '#t-toast',
                message: this.privateData.verifyTips,
                icon: '',
                duration: 1000,
            });
            return;
        }
        var locationState = this.data.locationState;
        this.hasSava = true;
        (0,_util__WEBPACK_IMPORTED_MODULE_3__.resolveAddress)({
            saasId: '88888888',
            uid: "88888888205500",
            authToken: null,
            id: locationState.addressId,
            addressId: locationState.addressId,
            phone: locationState.phone,
            name: locationState.name,
            countryName: locationState.countryName,
            countryCode: locationState.countryCode,
            provinceName: locationState.provinceName,
            provinceCode: locationState.provinceCode,
            cityName: locationState.cityName,
            cityCode: locationState.cityCode,
            districtName: locationState.districtName,
            districtCode: locationState.districtCode,
            detailAddress: locationState.detailAddress,
            isDefault: locationState.isDefault === 1 ? 1 : 0,
            addressTag: locationState.addressTag,
            latitude: locationState.latitude,
            longitude: locationState.longitude,
            storeId: null,
        });
        wx.navigateBack({ delta: 1 });
    },
    getWeixinAddress: function (e) {
        var _this = this;
        var locationState = this.data.locationState;
        var weixinAddress = e.detail;
        this.setData({
            locationState: (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, locationState), weixinAddress),
        }, function () {
            var _a = _this.onVerifyInputLegal(), isLegal = _a.isLegal, tips = _a.tips;
            _this.setData({
                submitActive: isLegal,
            });
            _this.privateData.verifyTips = tips;
        });
    },
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./pages/usercenter/address/edit/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map