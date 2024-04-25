"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["pages/usercenter/address/list/index"],{

/***/ "./pages/usercenter/address/list/index.js":
/*!************************************************!*\
  !*** ./pages/usercenter/address/list/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../services/address/fetchAddress'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var tdesign_miniprogram_toast_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tdesign-miniprogram/toast/index */ "../node_modules/tdesign-miniprogram/miniprogram_dist/toast/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./pages/usercenter/address/list/util.js");
/* harmony import */ var _edit_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit/util */ "./pages/usercenter/address/edit/util.js");

/* eslint-disable no-param-reassign */




Page({
    data: {
        addressList: [],
        deleteID: '',
        showDeleteConfirm: false,
        isOrderSure: false,
    },
    /** 选择模式 */
    selectMode: false,
    /** 是否已经选择地址，不置为true的话页面离开时会触发取消选择行为 */
    hasSelect: false,
    onLoad: function (query) {
        var _a = query.selectMode, selectMode = _a === void 0 ? '' : _a, _b = query.isOrderSure, isOrderSure = _b === void 0 ? '' : _b, _c = query.id, id = _c === void 0 ? '' : _c;
        this.setData({
            isOrderSure: !!isOrderSure,
            id: id,
        });
        this.selectMode = !!selectMode;
        this.init();
    },
    init: function () {
        this.getAddressList();
    },
    onUnload: function () {
        if (this.selectMode && !this.hasSelect) {
            (0,_util__WEBPACK_IMPORTED_MODULE_2__.rejectAddress)();
        }
    },
    getAddressList: function () {
        var _this = this;
        var id = this.data.id;
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../services/address/fetchAddress'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().then(function (addressList) {
            addressList.forEach(function (address) {
                if (address.id === id) {
                    address.checked = true;
                }
            });
            _this.setData({ addressList: addressList });
        });
    },
    getWXAddressHandle: function () {
        var _this = this;
        wx.chooseAddress({
            success: function (res) {
                var _a;
                if (res.errMsg.indexOf('ok') === -1) {
                    (0,tdesign_miniprogram_toast_index__WEBPACK_IMPORTED_MODULE_1__["default"])({
                        context: _this,
                        selector: '#t-toast',
                        message: res.errMsg,
                        icon: '',
                        duration: 1000,
                    });
                    return;
                }
                (0,tdesign_miniprogram_toast_index__WEBPACK_IMPORTED_MODULE_1__["default"])({
                    context: _this,
                    selector: '#t-toast',
                    message: '添加成功',
                    icon: '',
                    duration: 1000,
                });
                var len = _this.data.addressList.length;
                _this.setData((_a = {},
                    _a["addressList[" + len + "]"] = {
                        name: res.userName,
                        phoneNumber: res.telNumber,
                        address: "" + res.provinceName + res.cityName + res.countryName + res.detailInfo,
                        isDefault: 0,
                        tag: '微信地址',
                        id: len,
                    },
                    _a));
            },
        });
    },
    confirmDeleteHandle: function (_a) {
        var detail = _a.detail;
        var id = (detail || {}).id;
        if (id !== undefined) {
            this.setData({ deleteID: id, showDeleteConfirm: true });
            (0,tdesign_miniprogram_toast_index__WEBPACK_IMPORTED_MODULE_1__["default"])({
                context: this,
                selector: '#t-toast',
                message: '地址删除成功',
                theme: 'success',
                duration: 1000,
            });
        }
        else {
            (0,tdesign_miniprogram_toast_index__WEBPACK_IMPORTED_MODULE_1__["default"])({
                context: this,
                selector: '#t-toast',
                message: '需要组件库发新版才能拿到地址ID',
                icon: '',
                duration: 1000,
            });
        }
    },
    deleteAddressHandle: function (e) {
        var id = e.currentTarget.dataset.id;
        this.setData({
            addressList: this.data.addressList.filter(function (address) { return address.id !== id; }),
            deleteID: '',
            showDeleteConfirm: false,
        });
    },
    editAddressHandle: function (_a) {
        var detail = _a.detail;
        this.waitForNewAddress();
        var id = (detail || {}).id;
        wx.navigateTo({ url: "/pages/usercenter/address/edit/index?id=" + id });
    },
    selectHandle: function (_a) {
        var detail = _a.detail;
        if (this.selectMode) {
            this.hasSelect = true;
            (0,_util__WEBPACK_IMPORTED_MODULE_2__.resolveAddress)(detail);
            wx.navigateBack({ delta: 1 });
        }
        else {
            this.editAddressHandle({ detail: detail });
        }
    },
    createHandle: function () {
        this.waitForNewAddress();
        wx.navigateTo({ url: '/pages/usercenter/address/edit/index' });
    },
    waitForNewAddress: function () {
        var _this = this;
        (0,_edit_util__WEBPACK_IMPORTED_MODULE_3__.getAddressPromise)()
            .then(function (newAddress) {
            var addressList = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([], _this.data.addressList, true);
            newAddress.phoneNumber = newAddress.phone;
            newAddress.address = "" + newAddress.provinceName + newAddress.cityName + newAddress.districtName + newAddress.detailAddress;
            newAddress.tag = newAddress.addressTag;
            if (!newAddress.addressId) {
                newAddress.id = "" + addressList.length;
                newAddress.addressId = "" + addressList.length;
                if (newAddress.isDefault === 1) {
                    addressList = addressList.map(function (address) {
                        address.isDefault = 0;
                        return address;
                    });
                }
                else {
                    newAddress.isDefault = 0;
                }
                addressList.push(newAddress);
            }
            else {
                addressList = addressList.map(function (address) {
                    if (address.addressId === newAddress.addressId) {
                        return newAddress;
                    }
                    return address;
                });
            }
            addressList.sort(function (prevAddress, nextAddress) {
                if (prevAddress.isDefault && !nextAddress.isDefault) {
                    return -1;
                }
                if (!prevAddress.isDefault && nextAddress.isDefault) {
                    return 1;
                }
                return 0;
            });
            _this.setData({
                addressList: addressList,
            });
        })
            .catch(function (e) {
            if (e.message !== 'cancel') {
                (0,tdesign_miniprogram_toast_index__WEBPACK_IMPORTED_MODULE_1__["default"])({
                    context: _this,
                    selector: '#t-toast',
                    message: '地址编辑发生错误',
                    icon: '',
                    duration: 1000,
                });
            }
        });
    },
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./pages/usercenter/address/list/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map