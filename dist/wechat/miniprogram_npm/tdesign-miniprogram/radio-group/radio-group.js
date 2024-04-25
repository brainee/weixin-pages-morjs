"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["miniprogram_npm/tdesign-miniprogram/radio-group/radio-group"],{

/***/ "./miniprogram_npm/tdesign-miniprogram/radio-group/props.js":
/*!******************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/radio-group/props.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

var props = {
    placement: {
        type: String,
        value: 'left',
    },
    borderless: {
        type: Boolean,
        value: false,
    },
    disabled: {
        type: Boolean,
        value: undefined,
    },
    icon: {
        type: null,
        value: 'circle',
    },
    keys: {
        type: Object,
    },
    name: {
        type: String,
        value: '',
    },
    options: {
        type: Array,
    },
    value: {
        type: null,
        value: null,
    },
    defaultValue: {
        type: null,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/radio-group/radio-group.js":
/*!************************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/radio-group/radio-group.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/config */ "./miniprogram_npm/tdesign-miniprogram/common/config.js");
/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/src/index */ "./miniprogram_npm/tdesign-miniprogram/common/src/index.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "./miniprogram_npm/tdesign-miniprogram/radio-group/props.js");

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



var prefix = _common_config__WEBPACK_IMPORTED_MODULE_0__["default"].prefix;
var name = prefix + "-radio-group";
var RadioGroup = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(RadioGroup, _super);
    function RadioGroup() {
        var _this = _super.apply(this, arguments) || this;
        _this.externalClasses = [prefix + "-class"];
        _this.data = {
            prefix: prefix,
            classPrefix: name,
            radioOptions: [],
        };
        _this.relations = {
            '../radio/radio': {
                type: 'descendant',
                linked: function (target) {
                    var _d = this.data, value = _d.value, disabled = _d.disabled;
                    target.setData({
                        checked: value === target.data.value,
                    });
                    target.setDisabled(disabled);
                },
            },
        };
        _this.properties = _props__WEBPACK_IMPORTED_MODULE_2__["default"];
        _this.controlledProps = [
            {
                key: 'value',
                event: 'change',
            },
        ];
        _this.observers = {
            value: function (v) {
                this.getChildren().forEach(function (item) {
                    item.setData({
                        checked: v === item.data.value,
                    });
                });
            },
            options: function () {
                this.initWithOptions();
            },
        };
        _this.methods = {
            getChildren: function () {
                var items = this.$children;
                if (!(items === null || items === void 0 ? void 0 : items.length)) {
                    items = this.selectAllComponents("." + prefix + "-radio-option");
                }
                return items;
            },
            updateValue: function (value) {
                this._trigger('change', { value: value });
            },
            handleRadioChange: function (e) {
                var checked = e.detail.checked;
                var _d = e.target.dataset, value = _d.value, index = _d.index, allowUncheck = _d.allowUncheck;
                this._trigger('change', checked === false && allowUncheck ? { value: null, index: index } : { value: value, index: index });
            },
            initWithOptions: function () {
                var _d = this.data, options = _d.options, value = _d.value, keys = _d.keys;
                if (!(options === null || options === void 0 ? void 0 : options.length) || !Array.isArray(options)) {
                    this.setData({
                        radioOptions: [],
                    });
                    return;
                }
                var optionsValue = [];
                try {
                    options.forEach(function (element) {
                        var _a, _b, _c;
                        var typeName = typeof element;
                        if (typeName === 'number' || typeName === 'string') {
                            optionsValue.push({
                                label: "" + element,
                                value: element,
                                checked: value === element,
                            });
                        }
                        else if (typeName === 'object') {
                            optionsValue.push(Object.assign(Object.assign({}, element), { label: element[(_a = keys === null || keys === void 0 ? void 0 : keys.label) !== null && _a !== void 0 ? _a : 'label'], value: element[(_b = keys === null || keys === void 0 ? void 0 : keys.value) !== null && _b !== void 0 ? _b : 'value'], checked: value === element[(_c = keys === null || keys === void 0 ? void 0 : keys.value) !== null && _c !== void 0 ? _c : 'value'] }));
                        }
                    });
                    this.setData({
                        radioOptions: optionsValue,
                    });
                }
                catch (error) {
                    console.error('error', error);
                }
            },
        };
        return _this;
    }
    return RadioGroup;
}(_common_src_index__WEBPACK_IMPORTED_MODULE_1__.SuperComponent));
RadioGroup = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_1__.wxComponent)()
], RadioGroup);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (RadioGroup);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./miniprogram_npm/tdesign-miniprogram/radio-group/radio-group.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=radio-group.js.map