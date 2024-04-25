"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["npm_components/tdesign-miniprogram/miniprogram_dist/picker/picker"],{

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/picker/picker.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/picker/picker.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/config.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "../node_modules/tdesign-miniprogram/miniprogram_dist/picker/props.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const { prefix } = _common_config__WEBPACK_IMPORTED_MODULE_1__["default"];
const name = `${prefix}-picker`;
let Picker = class Picker extends _common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent {
    constructor() {
        super(...arguments);
        this.properties = _props__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.externalClasses = [`${prefix}-class`, `${prefix}-class-confirm`, `${prefix}-class-cancel`, `${prefix}-class-title`];
        this.options = {
            multipleSlots: true,
        };
        this.relations = {
            '../picker-item/picker-item': {
                type: 'child',
                linked() {
                    this.updateChildren();
                },
            },
        };
        this.observers = {
            'value, visible'() {
                this.updateChildren();
            },
            keys(obj) {
                this.setData({
                    labelAlias: (obj === null || obj === void 0 ? void 0 : obj.label) || 'label',
                    valueAlias: (obj === null || obj === void 0 ? void 0 : obj.value) || 'value',
                });
            },
        };
        this.data = {
            prefix,
            classPrefix: name,
            labelAlias: 'label',
            valueAlias: 'value',
            defaultPopUpProps: {},
            defaultPopUpzIndex: 11500,
        };
        this.methods = {
            updateChildren() {
                const { value, defaultValue } = this.properties;
                this.$children.forEach((child, index) => {
                    var _a, _b;
                    child.setData({
                        value: (_b = (_a = value === null || value === void 0 ? void 0 : value[index]) !== null && _a !== void 0 ? _a : defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue[index]) !== null && _b !== void 0 ? _b : '',
                        columnIndex: index,
                    });
                    child.update();
                });
            },
            getSelectedValue() {
                const value = this.$children.map((item) => item._selectedValue);
                const label = this.$children.map((item) => item._selectedLabel);
                return [value, label];
            },
            getColumnIndexes() {
                const columns = this.$children.map((pickerColumn, columnIndex) => {
                    return {
                        column: columnIndex,
                        index: pickerColumn._selectedIndex,
                    };
                });
                return columns;
            },
            onConfirm() {
                const [value, label] = this.getSelectedValue();
                const columns = this.getColumnIndexes();
                this.close('confirm-btn');
                this.triggerEvent('change', { value, label, columns });
                this.triggerEvent('confirm', { value, label, columns });
            },
            triggerColumnChange({ column, index }) {
                const [value, label] = this.getSelectedValue();
                this.triggerEvent('pick', { value, label, column, index });
            },
            onCancel() {
                this.close('cancel-btn');
                this.triggerEvent('cancel');
            },
            onPopupChange(e) {
                const { visible } = e.detail;
                this.close('overlay');
                this.triggerEvent('visible-change', { visible });
            },
            close(trigger) {
                if (this.data.autoClose) {
                    this.setData({ visible: false });
                }
                this.triggerEvent('close', { trigger });
            },
        };
    }
    ready() {
        this.$children.map((column, index) => (column.columnIndex = index));
    }
};
Picker = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], Picker);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Picker);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v"], function() { return __webpack_exec__("../node_modules/tdesign-miniprogram/miniprogram_dist/picker/picker.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=picker.js.map