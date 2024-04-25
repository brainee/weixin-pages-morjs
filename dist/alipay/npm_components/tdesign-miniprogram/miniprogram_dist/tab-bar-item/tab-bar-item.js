"use strict";
(my["mor_modules"] = my["mor_modules"] || []).push([["npm_components/tdesign-miniprogram/miniprogram_dist/tab-bar-item/tab-bar-item"],{

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/tab-bar-item/tab-bar-item.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/tab-bar-item/tab-bar-item.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/config.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "../node_modules/tdesign-miniprogram/miniprogram_dist/tab-bar-item/props.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/utils.js");
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
const classPrefix = `${prefix}-tab-bar-item`;
let TabBarItem = class TabBarItem extends _common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`];
        this.parent = null;
        this.relations = {
            '../tab-bar/tab-bar': {
                type: 'ancestor',
                linked(parent) {
                    const { theme, split, shape } = parent.data;
                    this.setData({
                        theme,
                        split,
                        shape,
                        currentName: this.properties.value ? this.properties.value : parent.initName(),
                    });
                    parent.updateChildren();
                },
            },
        };
        this.options = {
            multipleSlots: true,
        };
        this.data = {
            prefix,
            classPrefix,
            isSpread: false,
            isChecked: false,
            hasChildren: false,
            currentName: '',
            split: true,
            iconOnly: false,
            theme: '',
            crowded: false,
            shape: 'normal',
        };
        this.properties = _props__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.observers = {
            subTabBar(value) {
                this.setData({
                    hasChildren: value.length > 0,
                });
            },
            icon(v) {
                this.setData({
                    _icon: (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.calcIcon)(v),
                });
            },
        };
        this.lifetimes = {
            attached() {
                return __awaiter(this, void 0, void 0, function* () {
                    const res = yield (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.getRect)(this, `.${classPrefix}__text`);
                    this.setData({ iconOnly: res.height === 0 });
                });
            },
        };
        this.methods = {
            showSpread() {
                this.setData({
                    isSpread: true,
                });
            },
            toggle() {
                const { currentName, hasChildren, isSpread } = this.data;
                if (hasChildren) {
                    this.setData({
                        isSpread: !isSpread,
                    });
                }
                this.$parent.updateValue(currentName);
                this.$parent.changeOtherSpread(currentName);
            },
            selectChild(event) {
                const { value } = event.target.dataset;
                this.$parent.updateValue(value);
                this.setData({
                    isSpread: false,
                });
            },
            checkActive(value) {
                const { currentName, subTabBar } = this.data;
                const isChecked = (subTabBar === null || subTabBar === void 0 ? void 0 : subTabBar.some((item) => item.value === value)) || currentName === value;
                this.setData({
                    isChecked,
                });
            },
            closeSpread() {
                this.setData({
                    isSpread: false,
                });
            },
        };
    }
};
TabBarItem = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], TabBarItem);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (TabBarItem);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v"], function() { return __webpack_exec__("../node_modules/tdesign-miniprogram/miniprogram_dist/tab-bar-item/tab-bar-item.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=tab-bar-item.js.map