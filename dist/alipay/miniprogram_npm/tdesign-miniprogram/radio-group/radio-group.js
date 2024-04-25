"use strict";
(my["mor_modules"] = my["mor_modules"] || []).push([["miniprogram_npm/tdesign-miniprogram/radio-group/radio-group"],{

/***/ "./miniprogram_npm/tdesign-miniprogram/radio-group/props.js":
/*!******************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/radio-group/props.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {


const props = {
  placement: {
    type: String,
    value: "left"
  },
  borderless: {
    type: Boolean,
    value: false
  },
  disabled: {
    type: Boolean,
    value: void 0
  },
  icon: {
    type: null,
    value: "circle"
  },
  keys: {
    type: Object
  },
  name: {
    type: String,
    value: ""
  },
  options: {
    type: Array
  },
  value: {
    type: null,
    value: null
  },
  defaultValue: {
    type: null
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/radio-group/radio-group.js":
/*!************************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/radio-group/radio-group.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

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



const { prefix } = _common_config__WEBPACK_IMPORTED_MODULE_0__["default"];
const name = `${prefix}-radio-group`;
let RadioGroup = class RadioGroup extends _common_src_index__WEBPACK_IMPORTED_MODULE_1__.SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`];
        this.data = {
            prefix,
            classPrefix: name,
            radioOptions: [],
        };
        this.relations = {
            '../radio/radio': {
                type: 'descendant',
                linked(target) {
                    const { value, disabled } = this.data;
                    target.setData({
                        checked: value === target.data.value,
                    });
                    target.setDisabled(disabled);
                },
            },
        };
        this.properties = _props__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.controlledProps = [
            {
                key: 'value',
                event: 'change',
            },
        ];
        this.observers = {
            value(v) {
                this.getChildren().forEach((item) => {
                    item.setData({
                        checked: v === item.data.value,
                    });
                });
            },
            options() {
                this.initWithOptions();
            },
        };
        this.methods = {
            getChildren() {
                let items = this.$children;
                if (!(items === null || items === void 0 ? void 0 : items.length)) {
                    items = this.selectAllComponents(`.${prefix}-radio-option`);
                }
                return items;
            },
            updateValue(value) {
                this._trigger('change', { value });
            },
            handleRadioChange(e) {
                const { checked } = e.detail;
                const { value, index, allowUncheck } = e.target.dataset;
                this._trigger('change', checked === false && allowUncheck ? { value: null, index } : { value, index });
            },
            initWithOptions() {
                const { options, value, keys } = this.data;
                if (!(options === null || options === void 0 ? void 0 : options.length) || !Array.isArray(options)) {
                    this.setData({
                        radioOptions: [],
                    });
                    return;
                }
                const optionsValue = [];
                try {
                    options.forEach((element) => {
                        var _a, _b, _c;
                        const typeName = typeof element;
                        if (typeName === 'number' || typeName === 'string') {
                            optionsValue.push({
                                label: `${element}`,
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
    }
};
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