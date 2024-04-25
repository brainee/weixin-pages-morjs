"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["npm_components/tdesign-miniprogram/miniprogram_dist/tab-bar/tab-bar"],{

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/tab-bar/tab-bar.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/tab-bar/tab-bar.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/config.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "../node_modules/tdesign-miniprogram/miniprogram_dist/tab-bar/props.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const { prefix } = _common_config__WEBPACK_IMPORTED_MODULE_1__["default"];
const classPrefix = `${prefix}-tab-bar`;
let Tabbar = class Tabbar extends _common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent {
    constructor() {
        super(...arguments);
        this.relations = {
            '../tab-bar-item/tab-bar-item': {
                type: 'descendant',
            },
        };
        this.externalClasses = [`${prefix}-class`];
        this.backupValue = -1;
        this.data = {
            prefix,
            classPrefix,
        };
        this.properties = _props__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.controlledProps = [
            {
                key: 'value',
                event: 'change',
            },
        ];
        this.observers = {
            value() {
                this.updateChildren();
            },
        };
        this.lifetimes = {
            ready() {
                this.showChildren();
            },
        };
        this.methods = {
            showChildren() {
                const { value } = this.data;
                this.$children.forEach((child) => {
                    if (child.properties.value === value) {
                        child.showSpread();
                        child.setData({ crowded: this.$children > 3 });
                    }
                });
            },
            updateChildren() {
                const { value } = this.data;
                this.$children.forEach((child) => {
                    child.checkActive(value);
                });
            },
            updateValue(value) {
                this._trigger('change', { value });
            },
            changeOtherSpread(value) {
                this.$children.forEach((child) => {
                    if (child.properties.value !== value) {
                        child.closeSpread();
                    }
                });
            },
            initName() {
                return (this.backupValue += 1);
            },
        };
    }
};
Tabbar = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], Tabbar);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Tabbar);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v"], function() { return __webpack_exec__("../node_modules/tdesign-miniprogram/miniprogram_dist/tab-bar/tab-bar.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=tab-bar.js.map