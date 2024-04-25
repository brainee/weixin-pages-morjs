"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["pages/usercenter/register/mail/index"],{

/***/ "./model/airline/index.js":
/*!********************************!*\
  !*** ./model/airline/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findAirlines": function() { return /* binding */ findAirlines; }
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/request */ "./utils/request.ts");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/index */ "./config/index.js");


var findAirlinesUrl = _config_index__WEBPACK_IMPORTED_MODULE_0__.domain + "/api/findAirlines";
function findAirlines(params) {
    var prefix = "[zy]findAirlines model";
    var url = findAirlinesUrl;
    console.log(prefix, "request start", url);
    return (0,_utils_request__WEBPACK_IMPORTED_MODULE_1__.request)({
        url: url,
        data: params,
        method: "POST",
    }).then(function (e) {
        console.log(prefix, "request success", e);
        return e;
    }).catch(function (e) {
        console.log(prefix, "request fail", e);
    });
}


/***/ }),

/***/ "./model/airport/index.js":
/*!********************************!*\
  !*** ./model/airport/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchArea": function() { return /* binding */ searchArea; }
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/request */ "./utils/request.ts");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/index */ "./config/index.js");


var searchAreaUrl = _config_index__WEBPACK_IMPORTED_MODULE_0__.domain + "/api/searchArea";
function searchArea(params) {
    var prefix = "[zy]searchArea model";
    var url = searchAreaUrl;
    console.log(prefix, "request start", url);
    return (0,_utils_request__WEBPACK_IMPORTED_MODULE_1__.request)({
        url: url,
        data: params,
        method: "POST",
    }).then(function (e) {
        console.log(prefix, "request success", e);
        // if(config.useMock){
        //   return areaData;
        // }
        return e;
    }).catch(function (e) {
        console.log(prefix, "request fail", e);
    });
}


/***/ }),

/***/ "./pages/usercenter/register/mail/index.js":
/*!*************************************************!*\
  !*** ./pages/usercenter/register/mail/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _utils_queryString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/queryString */ "./utils/queryString.ts");
/* harmony import */ var _services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/usercenter/loginService */ "./services/usercenter/loginService.js");
/* harmony import */ var _services_usercenter_registerService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/usercenter/registerService */ "./services/usercenter/registerService.js");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config/index */ "./config/index.js");
/* harmony import */ var _services_airport_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/airport/index */ "./services/airport/index.js");
/* harmony import */ var _services_airline_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/airline/index */ "./services/airline/index.js");

// pages/usercenter/validate-code/index.ts






Page({
    /**
     * 页面的初始数据
     */
    data: {
        mykeys: {
            label: "areaName",
            value: "areaCode",
        },
        account: "",
        formData: {},
        stepDisabled: true,
        unitShowText: '',
        unitTitle: '',
        unitText: '',
        unitValue: [],
        airportText: '',
        airportValue: [],
        airportTitle: '',
        airlineText: '',
        airlineValue: [],
        airlineTitle: '',
        units: [
            { label: "机场", value: "1", key: "airport" },
            { label: "航司", value: "2", key: "airline" },
            { label: "其他", value: "3", key: "other" },
        ],
        citys: [
            { label: '北京市', value: '北京市' },
            { label: '上海市', value: '上海市' },
            { label: '广州市', value: '广州市' },
            { label: '深圳市', value: '深圳市' },
            { label: '成都市', value: '成都市' },
        ],
        airlines: []
    },
    /* 生命周期函数--监听页面加载 */
    onLoad: function (options) {
        // console.log("[zy]options=",options);
        var _a = (0,_utils_queryString__WEBPACK_IMPORTED_MODULE_5__.getCurrentPageParam)() || {}, account = _a.account, operate = _a.operate;
        console.log("[zy]got from last page:account", account, operate);
        this.setData({ account: account, operate: operate });
        var pass = this.checkBase();
        // if(!pass){
        //   return;
        // }
        this.searchArea();
        this.findAirlines();
    },
    searchArea: function () {
        var _this = this;
        (0,_services_airport_index__WEBPACK_IMPORTED_MODULE_3__.searchAreaService)({
            "head": { "uid": "", "token": "", "requestTime": "2024-04-07T02:18:21.282Z", "appId": "", "clientType": "1", "clientVersion": "", "moduleCode": "common", "chartTableCode": null },
            "type": 1
        }).then(function (data) {
            if ((data === null || data === void 0 ? void 0 : data.length) > 0) {
                _this.setData({ citys: data });
            }
        });
    },
    findAirlines: function () {
        var _this = this;
        (0,_services_airline_index__WEBPACK_IMPORTED_MODULE_4__.findAirlinesService)({
            "head": { "uid": "", "token": "", "requestTime": "2024-04-07T02:18:25.687Z", "appId": "", "clientType": "1", "clientVersion": "", "moduleCode": "common", "chartTableCode": null },
            "type": 1
        }).then(function (data) {
            if ((data === null || data === void 0 ? void 0 : data.length) > 0) {
                _this.setData({ airlines: data });
            }
        });
    },
    onPickOfCascader: function (e) {
        var prefix = "[zy]onPickOfCascader";
        console.log(prefix, e.detail);
    },
    onChangeOfCascader: function (e) {
        var _a;
        var prefix = "[zy]onChangeOfCascader";
        var _b = e.detail, selectedOptions = _b.selectedOptions, value = _b.value;
        var unitText = this.data.unitText;
        var airportText = (_a = selectedOptions[(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.length) - 1]) === null || _a === void 0 ? void 0 : _a.areaName;
        console.log(prefix, e.detail);
        this.setData({
            airportValue: [value],
            airportText: airportText,
            airportVisible: false,
            unitShowText: unitText + ":" + airportText,
        });
    },
    inputChange: function (e) {
        var prop = e.currentTarget.dataset.prop;
        var value = e.detail.value;
        this.setData({ stepDisabled: !value });
        this.data.formData[prop] = value;
        this.setData({
            formData: this.data.formData
        });
    },
    onColumnChange: function (e) {
        console.log('picker pick:', e);
    },
    onPickerChangeOfAirline: function (e) {
        var _a;
        var key = e.currentTarget.dataset.key;
        var _b = e.detail, label = _b.label, value = _b.value;
        var unitText = this.data.unitText;
        var airlineText = label.join(' ');
        console.log('picker change:', e.detail);
        this.setData((_a = {},
            _a[key + "Visible"] = false,
            _a[key + "Value"] = value,
            _a[key + "Text"] = label.join(' '),
            _a.unitShowText = unitText + ":" + airlineText,
            _a));
    },
    onPickerChangeOfUnit: function (e) {
        var _a;
        var key = e.currentTarget.dataset.key;
        var _b = e.detail, label = _b.label, value = _b.value;
        var unitTypeKeys = this.data.units.map(function (unit) { return unit.key; }); //["airport", "airline", "other"]
        var unitTypeTitles = this.data.units.map(function (unit) { return unit.label; });
        var index = value[0] - 1;
        var typeKey = unitTypeKeys[index];
        var typeTitle = unitTypeTitles[index];
        console.log('picker change:', typeKey, e.detail);
        var note = label.join(' ');
        this.setData((_a = {},
            _a[key + "Visible"] = false,
            _a[key + "Value"] = value,
            _a[key + "Text"] = note,
            _a[typeKey + "Visible"] = true,
            _a[typeKey + "Title"] = "选择" + typeTitle,
            _a.unitShowText = note,
            _a));
    },
    onPickerCancel: function (e) {
        var _a;
        var key = e.currentTarget.dataset.key;
        console.log(e, '取消');
        console.log('picker1 cancel:');
        this.setData((_a = {},
            _a[key + "Visible"] = false,
            _a));
    },
    onTitlePicker: function () {
        this.setData({ unitVisible: true, unitTitle: '选择单位' });
    },
    inputChange2: function (e) {
        var prop = e.currentTarget.dataset.prop;
        var value = e.detail.value;
        this.data.formData[prop] = value;
        this.setData({
            formData: this.data.formData
        });
    },
    inputChangeNormal: function (e) {
        var prop = e.currentTarget.dataset.prop;
        var value = e.detail.value;
        this.data.formData[prop] = value;
        this.setData({
            formData: this.data.formData
        });
        var pass = this.check();
        this.setData({ stepDisabled: !pass });
    },
    getMainUnit: function () {
        var _a = this.data, unitValue = _a.unitValue, airportText = _a.airportText, airportValue = _a.airportValue, airlineText = _a.airlineText, airlineValue = _a.airlineValue;
        var unit = this.data.formData.unit;
        var mainUnitName = "", mainUnitCode = "";
        var demoType = +unitValue[0] || 0;
        if (demoType === 1) {
            mainUnitName = airportText,
                mainUnitCode = airportValue[0];
        }
        else if (demoType === 2) {
            mainUnitName = airlineText,
                mainUnitCode = airlineValue[0];
        }
        else {
            mainUnitName = unit;
        }
        return {
            mainUnitName: mainUnitName,
            mainUnitCode: mainUnitCode,
            demoType: demoType,
        };
    },
    checkBase: function () {
        var _a;
        var account = this.data.account;
        if (!account) {
            wx.showToast({
                icon: 'none',
                title: "账号不能为空",
            });
            return;
        }
        var App = getApp();
        var _b = (_a = App === null || App === void 0 ? void 0 : App.globalData) === null || _a === void 0 ? void 0 : _a.session, openid = _b.openid, unionid = _b.unionid;
        if (!openid) {
            wx.showToast({
                icon: 'none',
                title: "需要先登录小程序",
            });
            (0,_services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_0__.wxLogin)();
            return;
        }
        return true;
    },
    check: function (showTip) {
        var _a = this.data.formData, name = _a.name, depart = _a.depart, mail = _a.mail;
        var _b = this.getMainUnit(), mainUnitName = _b.mainUnitName, mainUnitCode = _b.mainUnitCode;
        if (!name) {
            showTip && wx.showToast({
                icon: 'none',
                title: "真实姓名不能为空",
            });
            return;
        }
        if (!depart) {
            showTip && wx.showToast({
                icon: 'none',
                title: "部门不能为空",
            });
            return;
        }
        if (!mail) {
            showTip && wx.showToast({
                icon: 'none',
                title: "邮箱不能为空",
            });
            return;
        }
        if (!mainUnitName) {
            showTip && wx.showToast({
                icon: 'none',
                title: "单位不能为空",
            });
            return;
        }
        return true;
    },
    submit: function (res) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function () {
            var pass, account, _b, name, depart, mail, App, _c, openid, unionid, _d, mainUnitName, mainUnitCode, demoType;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_e) {
                pass = this.check(true);
                if (!pass)
                    return [2 /*return*/];
                account = this.data.account;
                _b = this.data.formData, name = _b.name, depart = _b.depart, mail = _b.mail;
                App = getApp();
                _c = (_a = App === null || App === void 0 ? void 0 : App.globalData) === null || _a === void 0 ? void 0 : _a.session, openid = _c.openid, unionid = _c.unionid;
                _d = this.getMainUnit(), mainUnitName = _d.mainUnitName, mainUnitCode = _d.mainUnitCode, demoType = _d.demoType;
                (0,_services_usercenter_registerService__WEBPACK_IMPORTED_MODULE_1__.trialService)({
                    name: name,
                    mobileprefix: _config_index__WEBPACK_IMPORTED_MODULE_2__.config.default_mobile_prefix,
                    mobile: account,
                    mail: mail,
                    mainUnitName: mainUnitName,
                    mainUnitCode: mainUnitCode,
                    remark: "",
                    depart: depart,
                    title: "",
                    budget: 0,
                    persons: 0,
                    demoType: demoType,
                    openid: openid,
                    unionid: unionid,
                }).then(function (data) {
                    if (data) {
                        wx.navigateTo({ url: '/pages/usercenter/register/finish/index' });
                    }
                    else {
                        wx.showToast({ title: " 注册失败，请重试" });
                    }
                });
                return [2 /*return*/];
            });
        });
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
    },
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
    },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
    },
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
    }
});


/***/ }),

/***/ "./services/airline/index.js":
/*!***********************************!*\
  !*** ./services/airline/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findAirlinesService": function() { return /* binding */ findAirlinesService; }
/* harmony export */ });
/* harmony import */ var _model_airline_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/airline/index */ "./model/airline/index.js");

function findAirlinesService(params) {
    var prefix = "[zy]findAirlinesService";
    console.log(prefix, "service start", params);
    return (0,_model_airline_index__WEBPACK_IMPORTED_MODULE_0__.findAirlines)(params).then(function (res) {
        console.log(prefix, "service got", res);
        if (res.data) {
            return res.data.map(function (airline) {
                return { label: airline.airlinesName, value: airline.airlinesCode };
            });
        }
    });
}


/***/ }),

/***/ "./services/airport/index.js":
/*!***********************************!*\
  !*** ./services/airport/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchAreaService": function() { return /* binding */ searchAreaService; }
/* harmony export */ });
/* harmony import */ var _model_airport_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/airport/index */ "./model/airport/index.js");

function searchAreaService(params) {
    var prefix = "[zy]searchAreaService";
    console.log(prefix, "service start", params);
    return (0,_model_airport_index__WEBPACK_IMPORTED_MODULE_0__.searchArea)(params).then(function (res) {
        // console.log(prefix,"service got",res);
        if (res === null || res === void 0 ? void 0 : res.data) {
            return res.data;
        }
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./pages/usercenter/register/mail/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map