"use strict";
(my["mor_modules"] = my["mor_modules"] || []).push([["pages/usercenter/register/mail/index"],{

/***/ "./model/airline/index.js":
/*!********************************!*\
  !*** ./model/airline/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findAirlines": function() { return /* binding */ findAirlines; }
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/request */ "./utils/request.ts");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/index */ "./config/index.js");



const findAirlinesUrl = _config_index__WEBPACK_IMPORTED_MODULE_1__.domain + `/api/findAirlines`;
function findAirlines(params) {
  let prefix = "[zy]findAirlines model";
  let url = findAirlinesUrl;
  console.log(prefix, "request start", url);
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__.request)({
    url,
    data: params,
    method: "POST"
  }).then((e) => {
    console.log(prefix, "request success", e);
    return e;
  }).catch((e) => {
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
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/request */ "./utils/request.ts");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/index */ "./config/index.js");



const searchAreaUrl = _config_index__WEBPACK_IMPORTED_MODULE_1__.domain + `/api/searchArea`;
function searchArea(params) {
  let prefix = "[zy]searchArea model";
  let url = searchAreaUrl;
  console.log(prefix, "request start", url);
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__.request)({
    url,
    data: params,
    method: "POST"
  }).then((e) => {
    console.log(prefix, "request success", e);
    return e;
  }).catch((e) => {
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
var __MOR_PAGE__ = (__webpack_require__(/*! @morjs/core */ "../node_modules/@morjs/core/esm/index.js").createPage);

var __MOR_API__ = (__webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/esm/index.js").mor);


// pages/usercenter/validate-code/index.ts






__MOR_PAGE__({
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
        let { account, operate, } = (0,_utils_queryString__WEBPACK_IMPORTED_MODULE_5__.getCurrentPageParam)() || {};
        console.log("[zy]got from last page:account", account, operate);
        this.setData({ account, operate });
        let pass = this.checkBase();
        // if(!pass){
        //   return;
        // }
        this.searchArea();
        this.findAirlines();
    },
    searchArea() {
        (0,_services_airport_index__WEBPACK_IMPORTED_MODULE_3__.searchAreaService)({
            "head": { "uid": "", "token": "", "requestTime": "2024-04-07T02:18:21.282Z", "appId": "", "clientType": "1", "clientVersion": "", "moduleCode": "common", "chartTableCode": null },
            "type": 1
        }).then(data => {
            if ((data === null || data === void 0 ? void 0 : data.length) > 0) {
                this.setData({ citys: data });
            }
        });
    },
    findAirlines() {
        (0,_services_airline_index__WEBPACK_IMPORTED_MODULE_4__.findAirlinesService)({
            "head": { "uid": "", "token": "", "requestTime": "2024-04-07T02:18:25.687Z", "appId": "", "clientType": "1", "clientVersion": "", "moduleCode": "common", "chartTableCode": null },
            "type": 1
        }).then(data => {
            if ((data === null || data === void 0 ? void 0 : data.length) > 0) {
                this.setData({ airlines: data });
            }
        });
    },
    onPickOfCascader(e) {
        let prefix = "[zy]onPickOfCascader";
        console.log(prefix, e.detail);
    },
    onChangeOfCascader(e) {
        var _a;
        let prefix = "[zy]onChangeOfCascader";
        const { selectedOptions, value } = e.detail;
        let { unitText } = this.data;
        let airportText = (_a = selectedOptions[(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.length) - 1]) === null || _a === void 0 ? void 0 : _a.areaName;
        console.log(prefix, e.detail);
        this.setData({
            airportValue: [value],
            airportText,
            airportVisible: false,
            unitShowText: `${unitText}:${airportText}`,
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
    onColumnChange(e) {
        console.log('picker pick:', e);
    },
    onPickerChangeOfAirline(e) {
        const { key } = e.currentTarget.dataset;
        const { label, value, } = e.detail;
        let { unitText } = this.data;
        let airlineText = label.join(' ');
        console.log('picker change:', e.detail);
        this.setData({
            [`${key}Visible`]: false,
            [`${key}Value`]: value,
            [`${key}Text`]: label.join(' '),
            unitShowText: `${unitText}:${airlineText}`,
        });
    },
    onPickerChangeOfUnit(e) {
        const { key } = e.currentTarget.dataset;
        const { label, value } = e.detail;
        let unitTypeKeys = this.data.units.map(unit => unit.key); //["airport", "airline", "other"]
        let unitTypeTitles = this.data.units.map(unit => unit.label);
        let index = value[0] - 1;
        let typeKey = unitTypeKeys[index];
        let typeTitle = unitTypeTitles[index];
        console.log('picker change:', typeKey, e.detail);
        let note = label.join(' ');
        this.setData({
            [`${key}Visible`]: false,
            [`${key}Value`]: value,
            [`${key}Text`]: note,
            [`${typeKey}Visible`]: true,
            [`${typeKey}Title`]: "选择" + typeTitle,
            unitShowText: note,
        });
    },
    onPickerCancel(e) {
        const { key } = e.currentTarget.dataset;
        console.log(e, '取消');
        console.log('picker1 cancel:');
        this.setData({
            [`${key}Visible`]: false,
        });
    },
    onTitlePicker() {
        this.setData({ unitVisible: true, unitTitle: '选择单位' });
    },
    inputChange2: function (e) {
        let prop = e.currentTarget.dataset.prop;
        let value = e.detail.value;
        this.data.formData[prop] = value;
        this.setData({
            formData: this.data.formData
        });
    },
    inputChangeNormal(e) {
        let prop = e.currentTarget.dataset.prop;
        let value = e.detail.value;
        this.data.formData[prop] = value;
        this.setData({
            formData: this.data.formData
        });
        let pass = this.check();
        this.setData({ stepDisabled: !pass });
    },
    getMainUnit() {
        let { unitValue, airportText, airportValue, airlineText, airlineValue } = this.data;
        let { unit } = this.data.formData;
        let mainUnitName = "", mainUnitCode = "";
        let demoType = +unitValue[0] || 0;
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
            mainUnitName,
            mainUnitCode,
            demoType,
        };
    },
    checkBase() {
        var _a;
        let { account, } = this.data;
        if (!account) {
            __MOR_API__.showToast({
                icon: 'none',
                title: "账号不能为空",
            });
            return;
        }
        const App = getApp();
        let { openid, unionid } = (_a = App === null || App === void 0 ? void 0 : App.globalData) === null || _a === void 0 ? void 0 : _a.session;
        if (!openid) {
            __MOR_API__.showToast({
                icon: 'none',
                title: "需要先登录小程序",
            });
            (0,_services_usercenter_loginService__WEBPACK_IMPORTED_MODULE_0__.wxLogin)();
            return;
        }
        return true;
    },
    check(showTip) {
        let { name, depart, mail, } = this.data.formData;
        let { mainUnitName, mainUnitCode } = this.getMainUnit();
        if (!name) {
            showTip && __MOR_API__.showToast({
                icon: 'none',
                title: "真实姓名不能为空",
            });
            return;
        }
        if (!depart) {
            showTip && __MOR_API__.showToast({
                icon: 'none',
                title: "部门不能为空",
            });
            return;
        }
        if (!mail) {
            showTip && __MOR_API__.showToast({
                icon: 'none',
                title: "邮箱不能为空",
            });
            return;
        }
        if (!mainUnitName) {
            showTip && __MOR_API__.showToast({
                icon: 'none',
                title: "单位不能为空",
            });
            return;
        }
        return true;
    },
    submit: function (res) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let pass = this.check(true);
            if (!pass)
                return;
            let { account, } = this.data;
            let { name, depart, mail, } = this.data.formData;
            const App = getApp();
            let { openid, unionid } = (_a = App === null || App === void 0 ? void 0 : App.globalData) === null || _a === void 0 ? void 0 : _a.session;
            let { mainUnitName, mainUnitCode, demoType, } = this.getMainUnit();
            (0,_services_usercenter_registerService__WEBPACK_IMPORTED_MODULE_1__.trialService)({
                name,
                mobileprefix: _config_index__WEBPACK_IMPORTED_MODULE_2__.config.default_mobile_prefix,
                mobile: account,
                mail,
                mainUnitName,
                mainUnitCode,
                remark: "",
                depart,
                title: "",
                budget: 0,
                persons: 0,
                demoType,
                openid,
                unionid,
            }).then((data) => {
                if (data) {
                    __MOR_API__.navigateTo({ url: '/pages/usercenter/register/finish/index' });
                }
                else {
                    __MOR_API__.showToast({ title: " 注册失败，请重试" });
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
  let prefix = "[zy]findAirlinesService";
  console.log(prefix, "service start", params);
  return (0,_model_airline_index__WEBPACK_IMPORTED_MODULE_0__.findAirlines)(params).then((res) => {
    console.log(prefix, "service got", res);
    if (res.data) {
      return res.data.map((airline) => {
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
  let prefix = "[zy]searchAreaService";
  console.log(prefix, "service start", params);
  return (0,_model_airport_index__WEBPACK_IMPORTED_MODULE_0__.searchArea)(params).then((res) => {
    if (res == null ? void 0 : res.data) {
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