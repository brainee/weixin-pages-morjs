"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["miniprogram_npm/tdesign-miniprogram/radio/radio"],{

/***/ "./miniprogram_npm/tdesign-miniprogram/radio/props.js":
/*!************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/radio/props.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

var props = {
    placement: {
        type: String,
        value: null,
    },
    allowUncheck: {
        type: Boolean,
        value: false,
    },
    block: {
        type: Boolean,
        value: true,
    },
    checked: {
        type: Boolean,
        value: null,
    },
    defaultChecked: {
        type: Boolean,
        value: false,
    },
    content: {
        type: String,
    },
    contentDisabled: {
        type: Boolean,
        value: false,
    },
    readonly: {
        type: Boolean,
        value: false,
    },
    disabled: {
        type: Boolean,
        value: undefined,
    },
    externalClasses: {
        type: Array,
    },
    icon: {
        type: null,
        value: 'circle',
    },
    label: {
        type: String,
    },
    maxContentRow: {
        type: Number,
        value: 5,
    },
    maxLabelRow: {
        type: Number,
        value: 3,
    },
    name: {
        type: String,
        value: '',
    },
    value: {
        type: null,
        value: false,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/radio/radio.js":
/*!************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/radio/radio.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/config */ "./miniprogram_npm/tdesign-miniprogram/common/config.js");
/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/src/index */ "./miniprogram_npm/tdesign-miniprogram/common/src/index.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "./miniprogram_npm/tdesign-miniprogram/radio/props.js");

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
var name = prefix + "-radio";
var Radio = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(Radio, _super);
    function Radio() {
        var _this = _super.apply(this, arguments) || this;
        _this.externalClasses = [
            prefix + "-class",
            prefix + "-class-label",
            prefix + "-class-icon",
            prefix + "-class-content",
            prefix + "-class-border",
        ];
        _this.behaviors = ['wx://form-field'];
        _this.relations = {
            '../radio-group/radio-group': {
                type: 'ancestor',
                linked: function (parent) {
                    if (parent.data.borderless) {
                        this.setData({ borderless: true });
                    }
                },
            },
        };
        _this.options = {
            multipleSlots: true,
        };
        _this.lifetimes = {
            attached: function () {
                this.init();
            },
        };
        _this.properties = Object.assign(Object.assign({}, _props__WEBPACK_IMPORTED_MODULE_2__["default"]), { borderless: {
                type: Boolean,
                value: false,
            } });
        _this.controlledProps = [
            {
                key: 'checked',
                event: 'change',
            },
        ];
        _this.data = {
            prefix: prefix,
            classPrefix: name,
            customIcon: false,
            slotIcon: false,
            optionLinked: false,
            iconVal: [],
            _placement: '',
        };
        _this.methods = {
            handleTap: function (e) {
                if (this.data.disabled || this.data.readonly)
                    return;
                var target = e.currentTarget.dataset.target;
                if (target === 'text' && this.data.contentDisabled)
                    return;
                this.doChange();
            },
            doChange: function () {
                var _g = this.data, value = _g.value, checked = _g.checked, allowUncheck = _g.allowUncheck;
                if (this.$parent) {
                    this.$parent.updateValue(checked && allowUncheck ? null : value);
                }
                else {
                    this._trigger('change', { checked: checked && allowUncheck ? false : !checked });
                }
            },
            init: function () {
                var _a, _b, _c, _d, _e, _f;
                var icon = this.data.icon;
                var isIdArr = Array.isArray(((_a = this.$parent) === null || _a === void 0 ? void 0 : _a.icon) || icon);
                this.setData({
                    customIcon: isIdArr,
                    slotIcon: icon === 'slot',
                    iconVal: isIdArr ? ((_b = this.$parent) === null || _b === void 0 ? void 0 : _b.icon) || icon : [],
                    _placement: (_f = (_c = this.data.placement) !== null && _c !== void 0 ? _c : (_e = (_d = this.$parent) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.placement) !== null && _f !== void 0 ? _f : 'left',
                });
            },
            setDisabled: function (disabled) {
                this.setData({
                    disabled: this.data.disabled || disabled,
                });
            },
        };
        return _this;
    }
    return Radio;
}(_common_src_index__WEBPACK_IMPORTED_MODULE_1__.SuperComponent));
Radio = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_1__.wxComponent)()
], Radio);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Radio);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./miniprogram_npm/tdesign-miniprogram/radio/radio.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=radio.js.map