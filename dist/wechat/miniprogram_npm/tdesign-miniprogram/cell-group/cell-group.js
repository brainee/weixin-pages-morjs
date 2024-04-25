"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["miniprogram_npm/tdesign-miniprogram/cell-group/cell-group"],{

/***/ "./miniprogram_npm/tdesign-miniprogram/cell-group/cell-group.js":
/*!**********************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/cell-group/cell-group.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "./miniprogram_npm/tdesign-miniprogram/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "./miniprogram_npm/tdesign-miniprogram/common/config.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "./miniprogram_npm/tdesign-miniprogram/cell-group/props.js");

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
var name = prefix + "-cell-group";
var CellGroup = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(CellGroup, _super);
    function CellGroup() {
        var _this = _super.apply(this, arguments) || this;
        _this.externalClasses = [prefix + "-class", prefix + "-class-title"];
        _this.relations = {
            '../cell/cell': {
                type: 'child',
            },
        };
        _this.options = {
            addGlobalClass: true,
        };
        _this.properties = _props__WEBPACK_IMPORTED_MODULE_2__["default"];
        _this.data = {
            prefix: prefix,
            classPrefix: name,
        };
        _this.lifetimes = {
            ready: function () {
                this.updateLastChid();
            },
        };
        _this.methods = {
            updateLastChid: function () {
                var items = this.$children;
                items.forEach(function (child, index) { return child.setData({ isLastChild: index === items.length - 1 }); });
            },
        };
        return _this;
    }
    return CellGroup;
}(_common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent));
CellGroup = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], CellGroup);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (CellGroup);


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/cell-group/props.js":
/*!*****************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/cell-group/props.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

var props = {
    bordered: {
        type: Boolean,
    },
    externalClasses: {
        type: Array,
    },
    theme: {
        type: String,
        value: 'default',
    },
    title: {
        type: String,
        value: '',
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./miniprogram_npm/tdesign-miniprogram/cell-group/cell-group.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=cell-group.js.map