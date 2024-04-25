"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["miniprogram_npm/tdesign-miniprogram/tab-panel/tab-panel"],{

/***/ "./miniprogram_npm/tdesign-miniprogram/tab-panel/props.js":
/*!****************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/tab-panel/props.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

var props = {
    badgeProps: {
        type: Object,
        value: null,
    },
    destroyOnHide: {
        type: Boolean,
        value: true,
    },
    disabled: {
        type: Boolean,
        value: false,
    },
    icon: {
        type: null,
    },
    label: {
        type: String,
        value: '',
    },
    panel: {
        type: String,
    },
    value: {
        type: null,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/tab-panel/tab-panel.js":
/*!********************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/tab-panel/tab-panel.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "./miniprogram_npm/tdesign-miniprogram/common/src/index.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./props */ "./miniprogram_npm/tdesign-miniprogram/tab-panel/props.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/config */ "./miniprogram_npm/tdesign-miniprogram/common/config.js");

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var prefix = _common_config__WEBPACK_IMPORTED_MODULE_2__["default"].prefix;
var name = prefix + "-tab-panel";
var TabPanel = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TabPanel, _super);
    function TabPanel() {
        var _this = _super.apply(this, arguments) || this;
        _this.externalClasses = [prefix + "-class"];
        _this.relations = {
            '../tabs/tabs': {
                type: 'ancestor',
            },
        };
        _this.options = {
            multipleSlots: true,
        };
        _this.properties = _props__WEBPACK_IMPORTED_MODULE_1__["default"];
        _this.data = {
            prefix: prefix,
            classPrefix: name,
            active: false,
            hide: true,
            id: '',
        };
        _this.observers = {
            'label, badgeProps, disabled, icon, panel, value': function () {
                this.update();
            },
        };
        return _this;
    }
    TabPanel.prototype.setId = function (id) {
        this.setData({ id: id });
    };
    TabPanel.prototype.getComputedName = function () {
        if (this.properties.value != null) {
            return "" + this.properties.value;
        }
        return "" + this.index;
    };
    TabPanel.prototype.update = function () {
        var _a;
        (_a = this.$parent) === null || _a === void 0 ? void 0 : _a.updateTabs();
    };
    TabPanel.prototype.render = function (active, parent) {
        this.setData({
            active: active,
            hide: !parent.data.animation && !active,
        });
    };
    return TabPanel;
}(_common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent));
TabPanel = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], TabPanel);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (TabPanel);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./miniprogram_npm/tdesign-miniprogram/tab-panel/tab-panel.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=tab-panel.js.map