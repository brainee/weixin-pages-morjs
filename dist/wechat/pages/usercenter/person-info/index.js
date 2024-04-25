"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["pages/usercenter/person-info/index"],{

/***/ "./pages/usercenter/person-info/index.js":
/*!***********************************************!*\
  !*** ./pages/usercenter/person-info/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _services_usercenter_fetchPerson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/usercenter/fetchPerson */ "./services/usercenter/fetchPerson.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/util */ "./utils/util.ts");
/* harmony import */ var tdesign_miniprogram_toast_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tdesign-miniprogram/toast/index */ "../node_modules/tdesign-miniprogram/miniprogram_dist/toast/index.js");




Page({
    data: {
        personInfo: {
            avatarUrl: '',
            nickName: '',
            gender: 0,
            phoneNumber: '',
        },
        showUnbindConfirm: false,
        pickerOptions: [
            {
                name: '男',
                code: '1',
            },
            {
                name: '女',
                code: '2',
            },
        ],
        typeVisible: false,
        genderMap: ['', '男', '女'],
    },
    onLoad: function () {
        this.init();
    },
    init: function () {
        this.fetchData();
    },
    fetchData: function () {
        var _this = this;
        (0,_services_usercenter_fetchPerson__WEBPACK_IMPORTED_MODULE_0__.fetchPerson)().then(function (personInfo) {
            _this.setData({
                personInfo: personInfo,
                'personInfo.phoneNumber': (0,_utils_util__WEBPACK_IMPORTED_MODULE_2__.phoneEncryption)(personInfo.phoneNumber),
            });
        });
    },
    onClickCell: function (_a) {
        var currentTarget = _a.currentTarget;
        var dataset = currentTarget.dataset;
        var nickName = this.data.personInfo.nickName;
        switch (dataset.type) {
            case 'gender':
                this.setData({
                    typeVisible: true,
                });
                break;
            case 'name':
                wx.navigateTo({
                    url: "/pages/usercenter/name-edit/index?name=" + nickName,
                });
                break;
            case 'avatarUrl':
                this.toModifyAvatar();
                break;
            default: {
                break;
            }
        }
    },
    onClose: function () {
        this.setData({
            typeVisible: false,
        });
    },
    onConfirm: function (e) {
        var _this = this;
        var value = e.detail.value;
        this.setData({
            typeVisible: false,
            'personInfo.gender': value,
        }, function () {
            (0,tdesign_miniprogram_toast_index__WEBPACK_IMPORTED_MODULE_1__["default"])({
                context: _this,
                selector: '#t-toast',
                message: '设置成功',
                theme: 'success',
            });
        });
    },
    toModifyAvatar: function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            var tempFilePath, tempUrlArr, tempFileName, error_1;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                wx.chooseImage({
                                    count: 1,
                                    sizeType: ['compressed'],
                                    sourceType: ['album', 'camera'],
                                    success: function (res) {
                                        var _a = res.tempFiles[0], path = _a.path, size = _a.size;
                                        if (size <= 10485760) {
                                            resolve(path);
                                        }
                                        else {
                                            reject({ errMsg: '图片大小超出限制，请重新上传' });
                                        }
                                    },
                                    fail: function (err) { return reject(err); },
                                });
                            })];
                    case 1:
                        tempFilePath = _a.sent();
                        tempUrlArr = tempFilePath.split('/');
                        tempFileName = tempUrlArr[tempUrlArr.length - 1];
                        (0,tdesign_miniprogram_toast_index__WEBPACK_IMPORTED_MODULE_1__["default"])({
                            context: this,
                            selector: '#t-toast',
                            message: "\u5DF2\u9009\u62E9\u56FE\u7247-" + tempFileName,
                            theme: 'success',
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        if (error_1.errMsg === 'chooseImage:fail cancel')
                            return [2 /*return*/];
                        (0,tdesign_miniprogram_toast_index__WEBPACK_IMPORTED_MODULE_1__["default"])({
                            context: this,
                            selector: '#t-toast',
                            message: error_1.errMsg || error_1.msg || '修改头像出错了',
                            theme: 'error',
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
});


/***/ }),

/***/ "./services/usercenter/fetchPerson.js":
/*!********************************************!*\
  !*** ./services/usercenter/fetchPerson.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.fetchPerson = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
var index_1 = __webpack_require__(/*! ../../config/index */ "./config/index.js");
/** 获取个人中心信息 */
function mockFetchPerson() {
    var delay = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../_utils/delay'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
    var genSimpleUserInfo = (__webpack_require__(/*! ../../model/usercenter/usercenter */ "./model/usercenter/usercenter.js").genSimpleUserInfo);
    var genAddress = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../model/address'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
    var address = genAddress();
    return delay().then(function () { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, genSimpleUserInfo()), { address: {
            provinceName: address.provinceName,
            provinceCode: address.provinceCode,
            cityName: address.cityName,
            cityCode: address.cityCode,
        } })); });
}
/** 获取个人中心信息 */
function fetchPerson() {
    if (index_1.config.useMock) {
        return mockFetchPerson();
    }
    return new Promise(function (resolve) {
        resolve('real api');
    });
}
exports.fetchPerson = fetchPerson;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./pages/usercenter/person-info/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map