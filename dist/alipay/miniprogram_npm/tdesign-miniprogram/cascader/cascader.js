"use strict";
(my["mor_modules"] = my["mor_modules"] || []).push([["miniprogram_npm/tdesign-miniprogram/cascader/cascader"],{

/***/ "./miniprogram_npm/tdesign-miniprogram/cascader/cascader.js":
/*!******************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/cascader/cascader.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

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




const { prefix } = _common_config__WEBPACK_IMPORTED_MODULE_1__["default"];
const name = `${prefix}-cascader`;
let Cascader = class Cascader extends _common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`];
        this.options = {
            multipleSlots: true,
        };
        this.properties = _props__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.controlledProps = [
            {
                key: 'value',
                event: 'change',
            },
        ];
        this.data = {
            prefix,
            name,
            stepIndex: 0,
            selectedIndexes: [],
            selectedValue: [],
            scrollTopList: [],
            steps: [],
        };
        this.observers = {
            visible(v) {
                if (v) {
                    const $tabs = this.selectComponent('#tabs');
                    $tabs === null || $tabs === void 0 ? void 0 : $tabs.setTrack();
                    this.updateScrollTop();
                    this.initWithValue();
                }
            },
            value() {
                this.initWithValue();
            },
            'selectedIndexes, options'() {
                var _a, _b, _c, _d;
                const { options, selectedIndexes, keys, placeholder } = this.data;
                const selectedValue = [];
                const steps = [];
                const items = [options];
                if (options.length > 0) {
                    for (let i = 0, size = selectedIndexes.length; i < size; i += 1) {
                        const index = selectedIndexes[i];
                        const next = items[i][index];
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
                    steps,
                    items,
                    selectedValue,
                    stepIndex: items.length - 1,
                });
            },
            stepIndex() {
                return __awaiter(this, void 0, void 0, function* () {
                    const { visible } = this.data;
                    if (visible) {
                        this.updateScrollTop();
                    }
                });
            },
        };
        this.methods = {
            initWithValue() {
                if (this.data.value != null && this.data.value !== '') {
                    const selectedIndexes = this.getIndexesByValue(this.data.options, this.data.value);
                    if (selectedIndexes) {
                        this.setData({ selectedIndexes });
                    }
                }
                else {
                    this.setData({ selectedIndexes: [] });
                }
            },
            getIndexesByValue(options, value) {
                var _a, _b, _c;
                const { keys } = this.data;
                for (let i = 0, size = options.length; i < size; i += 1) {
                    const opt = options[i];
                    if (opt[(_a = keys === null || keys === void 0 ? void 0 : keys.value) !== null && _a !== void 0 ? _a : 'value'] === value) {
                        return [i];
                    }
                    if (opt[(_b = keys === null || keys === void 0 ? void 0 : keys.children) !== null && _b !== void 0 ? _b : 'children']) {
                        const res = this.getIndexesByValue(opt[(_c = keys === null || keys === void 0 ? void 0 : keys.children) !== null && _c !== void 0 ? _c : 'children'], value);
                        if (res) {
                            return [i, ...res];
                        }
                    }
                }
            },
            updateScrollTop() {
                const { visible, items, selectedIndexes, stepIndex } = this.data;
                if (visible) {
                    (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.getRect)(this, '.cascader-radio-group-0').then((rect) => {
                        var _a;
                        const eachRadioHeight = rect.height / ((_a = items[0]) === null || _a === void 0 ? void 0 : _a.length);
                        this.setData({
                            [`scrollTopList[${stepIndex}]`]: eachRadioHeight * selectedIndexes[stepIndex],
                        });
                    });
                }
            },
            hide(trigger) {
                this.setData({ visible: false });
                this.triggerEvent('close', { trigger: trigger });
            },
            onVisibleChange() {
                this.hide('overlay');
            },
            onClose() {
                this.hide('close-btn');
            },
            onStepClick(e) {
                const { index } = e.currentTarget.dataset;
                this.setData({ stepIndex: index });
            },
            onTabChange(e) {
                const { value } = e.detail;
                this.setData({
                    stepIndex: value,
                });
            },
            handleSelect(e) {
                var _a, _b, _c;
                const { level } = e.target.dataset;
                const { value } = e.detail;
                const { selectedIndexes, items, keys } = this.data;
                const index = items[level].findIndex((item) => { var _a; return item[(_a = keys === null || keys === void 0 ? void 0 : keys.value) !== null && _a !== void 0 ? _a : 'value'] === value; });
                const item = items[level][index];
                if (item.disabled) {
                    return;
                }
                selectedIndexes[level] = index;
                selectedIndexes.length = level + 1;
                this.triggerEvent('pick', { value: item[(_a = keys === null || keys === void 0 ? void 0 : keys.value) !== null && _a !== void 0 ? _a : 'value'], index, level });
                if ((_c = item === null || item === void 0 ? void 0 : item[(_b = keys === null || keys === void 0 ? void 0 : keys.children) !== null && _b !== void 0 ? _b : 'children']) === null || _c === void 0 ? void 0 : _c.length) {
                    this.setData({ selectedIndexes });
                }
                else {
                    this.setData({ selectedIndexes }, () => {
                        var _a;
                        const { items } = this.data;
                        this._trigger('change', {
                            value: item[(_a = keys === null || keys === void 0 ? void 0 : keys.value) !== null && _a !== void 0 ? _a : 'value'],
                            selectedOptions: items.map((item, index) => item[selectedIndexes[index]]),
                        });
                    });
                    this.hide('finish');
                }
            },
        };
    }
};
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


const props = {
  closeBtn: {
    type: Boolean,
    value: true
  },
  keys: {
    type: Object
  },
  options: {
    type: Array,
    value: []
  },
  placeholder: {
    type: String,
    value: "\u9009\u62E9\u9009\u9879"
  },
  subTitles: {
    type: Array,
    value: []
  },
  theme: {
    type: String,
    value: "step"
  },
  title: {
    type: String
  },
  value: {
    type: null,
    value: null
  },
  defaultValue: {
    type: null,
    value: null
  },
  visible: {
    type: Boolean,
    value: false
  }
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