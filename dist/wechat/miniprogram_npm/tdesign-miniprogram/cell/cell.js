"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["miniprogram_npm/tdesign-miniprogram/cell/cell"],{

/***/ "./miniprogram_npm/tdesign-miniprogram/cell/cell.js":
/*!**********************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/cell/cell.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "./miniprogram_npm/tdesign-miniprogram/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "./miniprogram_npm/tdesign-miniprogram/common/config.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "./miniprogram_npm/tdesign-miniprogram/cell/props.js");
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




var prefix = _common_config__WEBPACK_IMPORTED_MODULE_1__["default"].prefix;
var name = prefix + "-cell";
var Cell = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(Cell, _super);
    function Cell() {
        var _this = _super.apply(this, arguments) || this;
        _this.externalClasses = [
            prefix + "-class",
            prefix + "-class-title",
            prefix + "-class-description",
            prefix + "-class-note",
            prefix + "-class-hover",
            prefix + "-class-image",
            prefix + "-class-left",
            prefix + "-class-left-icon",
            prefix + "-class-center",
            prefix + "-class-right",
            prefix + "-class-right-icon",
        ];
        _this.relations = {
            '../cell-group/cell-group': {
                type: 'parent',
            },
        };
        _this.options = {
            multipleSlots: true,
        };
        _this.properties = _props__WEBPACK_IMPORTED_MODULE_2__["default"];
        _this.data = {
            prefix: prefix,
            classPrefix: name,
            isLastChild: false,
        };
        _this.observers = {
            leftIcon: function (v) {
                this.setIcon('_leftIcon', v, '');
            },
            rightIcon: function (v) {
                this.setIcon('_rightIcon', v, '');
            },
            arrow: function (v) {
                this.setIcon('_arrow', v, 'chevron-right');
            },
        };
        return _this;
    }
    Cell.prototype.setIcon = function (name, value, defaultValue) {
        var _a;
        if (!value)
            return;
        this.setData((_a = {},
            _a[name] = (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.calcIcon)(value, defaultValue),
            _a));
    };
    Cell.prototype.onClick = function (e) {
        this.triggerEvent('click', e.detail);
        this.jumpLink();
    };
    Cell.prototype.jumpLink = function (urlKey, link) {
        if (urlKey === void 0) { urlKey = 'url'; }
        if (link === void 0) { link = 'jumpType'; }
        var url = this.data[urlKey];
        var jumpType = this.data[link];
        if (url) {
            wx[jumpType]({ url: url });
        }
    };
    return Cell;
}(_common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent));
Cell = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], Cell);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Cell);


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/cell/props.js":
/*!***********************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/cell/props.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

var props = {
    align: {
        type: String,
        value: 'middle',
    },
    arrow: {
        type: null,
        value: false,
    },
    bordered: {
        type: Boolean,
        value: true,
    },
    description: {
        type: String,
    },
    externalClasses: {
        type: Array,
    },
    hover: {
        type: Boolean,
    },
    image: {
        type: String,
    },
    jumpType: {
        type: String,
        value: 'navigateTo',
    },
    leftIcon: {
        type: null,
    },
    note: {
        type: String,
    },
    required: {
        type: Boolean,
        value: false,
    },
    rightIcon: {
        type: null,
    },
    title: {
        type: String,
    },
    url: {
        type: String,
        value: '',
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./miniprogram_npm/tdesign-miniprogram/cell/cell.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=cell.js.map