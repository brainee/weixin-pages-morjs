"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["miniprogram_npm/tdesign-miniprogram/cascader/cascader"],{

/***/ "./miniprogram_npm/tdesign-miniprogram/cascader/cascader.js":
/*!******************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/cascader/cascader.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "./miniprogram_npm/tdesign-miniprogram/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "./miniprogram_npm/tdesign-miniprogram/common/config.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "./miniprogram_npm/tdesign-miniprogram/cascader/props.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils */ "./miniprogram_npm/tdesign-miniprogram/common/utils.js");

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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




var prefix = _common_config__WEBPACK_IMPORTED_MODULE_1__["default"].prefix;
var name = prefix + "-cascader";
var Cascader = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(Cascader, _super);
    function Cascader() {
        var _this = _super.apply(this, arguments) || this;
        _this.externalClasses = [prefix + "-class"];
        _this.options = {
            multipleSlots: true,
        };
        _this.properties = _props__WEBPACK_IMPORTED_MODULE_2__["default"];
        _this.controlledProps = [
            {
                key: 'value',
                event: 'change',
            },
        ];
        _this.data = {
            prefix: prefix,
            name: name,
            stepIndex: 0,
            selectedIndexes: [],
            selectedValue: [],
            scrollTopList: [],
            steps: [],
        };
        _this.observers = {
            visible: function (v) {
                if (v) {
                    var $tabs = this.selectComponent('#tabs');
                    $tabs === null || $tabs === void 0 ? void 0 : $tabs.setTrack();
                    this.updateScrollTop();
                    this.initWithValue();
                }
            },
            value: function () {
                this.initWithValue();
            },
            'selectedIndexes, options': function () {
                var _a, _b, _c, _d;
                var _e = this.data, options = _e.options, selectedIndexes = _e.selectedIndexes, keys = _e.keys, placeholder = _e.placeholder;
                var selectedValue = [];
                var steps = [];
                var items = [options];
                if (options.length > 0) {
                    for (var i = 0, size = selectedIndexes.length; i < size; i += 1) {
                        var index = selectedIndexes[i];
                        var next = items[i][index];
                        selectedValue.push(next[(_a = keys === null || keys === void 0 ? void 0 : keys.value) !== null && _a !== void 0 ? _a : 'value']);
                        steps.push(next[(_b = keys === null || keys === void 0 ? void 0 : keys.label) !== null && _b !== void 0 ? _b : 'label']);
                        if (next[(_c = keys === null || keys === void 0 ? void 0 : keys.children) !== null && _c !== void 0 ? _c : 'children']) {
                            items.push(next[(_d = keys === null || keys === void 0 ? void 0 : keys.children) !== null && _d !== void 0 ? _d : 'children']);
                        }
                    }
                }
                if (steps.length < items.length) {
                    steps.push(placeholder);
                }
                this.setData({
                    steps: steps,
                    items: items,
                    selectedValue: selectedValue,
                    stepIndex: items.length - 1,
                });
            },
            stepIndex: function () {
                return __awaiter(this, void 0, void 0, function () {
                    var visible;
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_e) {
                        visible = this.data.visible;
                        if (visible) {
                            this.updateScrollTop();
                        }
                        return [2 /*return*/];
                    });
                });
            },
        };
        _this.methods = {
            initWithValue: function () {
                if (this.data.value != null && this.data.value !== '') {
                    var selectedIndexes = this.getIndexesByValue(this.data.options, this.data.value);
                    if (selectedIndexes) {
                        this.setData({ selectedIndexes: selectedIndexes });
                    }
                }
                else {
                    this.setData({ selectedIndexes: [] });
                }
            },
            getIndexesByValue: function (options, value) {
                var _a, _b, _c;
                var keys = this.data.keys;
                for (var i = 0, size = options.length; i < size; i += 1) {
                    var opt = options[i];
                    if (opt[(_a = keys === null || keys === void 0 ? void 0 : keys.value) !== null && _a !== void 0 ? _a : 'value'] === value) {
                        return [i];
                    }
                    if (opt[(_b = keys === null || keys === void 0 ? void 0 : keys.children) !== null && _b !== void 0 ? _b : 'children']) {
                        var res = this.getIndexesByValue(opt[(_c = keys === null || keys === void 0 ? void 0 : keys.children) !== null && _c !== void 0 ? _c : 'children'], value);
                        if (res) {
                            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([i], res, true);
                        }
                    }
                }
            },
            updateScrollTop: function () {
                var _this = this;
                var _e = this.data, visible = _e.visible, items = _e.items, selectedIndexes = _e.selectedIndexes, stepIndex = _e.stepIndex;
                if (visible) {
                    (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.getRect)(this, '.cascader-radio-group-0').then(function (rect) {
                        var _e;
                        var _a;
                        var eachRadioHeight = rect.height / ((_a = items[0]) === null || _a === void 0 ? void 0 : _a.length);
                        _this.setData((_e = {},
                            _e["scrollTopList[" + stepIndex + "]"] = eachRadioHeight * selectedIndexes[stepIndex],
                            _e));
                    });
                }
            },
            hide: function (trigger) {
                this.setData({ visible: false });
                this.triggerEvent('close', { trigger: trigger });
            },
            onVisibleChange: function () {
                this.hide('overlay');
            },
            onClose: function () {
                this.hide('close-btn');
            },
            onStepClick: function (e) {
                var index = e.currentTarget.dataset.index;
                this.setData({ stepIndex: index });
            },
            onTabChange: function (e) {
                var value = e.detail.value;
                this.setData({
                    stepIndex: value,
                });
            },
            handleSelect: function (e) {
                var _this = this;
                var _a, _b, _c;
                var level = e.target.dataset.level;
                var value = e.detail.value;
                var _e = this.data, selectedIndexes = _e.selectedIndexes, items = _e.items, keys = _e.keys;
                var index = items[level].findIndex(function (item) { var _a; return item[(_a = keys === null || keys === void 0 ? void 0 : keys.value) !== null && _a !== void 0 ? _a : 'value'] === value; });
                var item = items[level][index];
                if (item.disabled) {
                    return;
                }
                selectedIndexes[level] = index;
                selectedIndexes.length = level + 1;
                this.triggerEvent('pick', { value: item[(_a = keys === null || keys === void 0 ? void 0 : keys.value) !== null && _a !== void 0 ? _a : 'value'], index: index, level: level });
                if ((_c = item === null || item === void 0 ? void 0 : item[(_b = keys === null || keys === void 0 ? void 0 : keys.children) !== null && _b !== void 0 ? _b : 'children']) === null || _c === void 0 ? void 0 : _c.length) {
                    this.setData({ selectedIndexes: selectedIndexes });
                }
                else {
                    this.setData({ selectedIndexes: selectedIndexes }, function () {
                        var _a;
                        var items = _this.data.items;
                        _this._trigger('change', {
                            value: item[(_a = keys === null || keys === void 0 ? void 0 : keys.value) !== null && _a !== void 0 ? _a : 'value'],
                            selectedOptions: items.map(function (item, index) { return item[selectedIndexes[index]]; }),
                        });
                    });
                    this.hide('finish');
                }
            },
        };
        return _this;
    }
    return Cascader;
}(_common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent));
Cascader = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], Cascader);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Cascader);


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/cascader/props.js":
/*!***************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/cascader/props.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

var props = {
    closeBtn: {
        type: Boolean,
        value: true,
    },
    keys: {
        type: Object,
    },
    options: {
        type: Array,
        value: [],
    },
    placeholder: {
        type: String,
        value: '选择选项',
    },
    subTitles: {
        type: Array,
        value: [],
    },
    theme: {
        type: String,
        value: 'step',
    },
    title: {
        type: String,
    },
    value: {
        type: null,
        value: null,
    },
    defaultValue: {
        type: null,
        value: null,
    },
    visible: {
        type: Boolean,
        value: false,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./miniprogram_npm/tdesign-miniprogram/cascader/cascader.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=cascader.js.map