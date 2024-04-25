"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["miniprogram_npm/tdesign-miniprogram/badge/badge"],{

/***/ "./miniprogram_npm/tdesign-miniprogram/badge/badge.js":
/*!************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/badge/badge.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "./miniprogram_npm/tdesign-miniprogram/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "./miniprogram_npm/tdesign-miniprogram/common/config.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "./miniprogram_npm/tdesign-miniprogram/badge/props.js");
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
var name = prefix + "-badge";
var getUniqueID = (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.uniqueFactory)('badge');
var Badge = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(Badge, _super);
    function Badge() {
        var _this = _super.apply(this, arguments) || this;
        _this.options = {
            multipleSlots: true,
        };
        _this.externalClasses = [prefix + "-class", prefix + "-class-count", prefix + "-class-content"];
        _this.properties = _props__WEBPACK_IMPORTED_MODULE_2__["default"];
        _this.data = {
            prefix: prefix,
            classPrefix: name,
            value: '',
            labelID: '',
            descriptionID: '',
        };
        _this.lifetimes = {
            ready: function () {
                var uniqueID = getUniqueID();
                this.setData({
                    labelID: uniqueID + "_label",
                    descriptionID: uniqueID + "_description",
                });
            },
        };
        return _this;
    }
    return Badge;
}(_common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent));
Badge = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], Badge);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Badge);


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/badge/props.js":
/*!************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/badge/props.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

var props = {
    color: {
        type: String,
        value: '',
    },
    content: {
        type: String,
        value: '',
    },
    count: {
        type: null,
        value: 0,
    },
    dot: {
        type: Boolean,
        value: false,
    },
    externalClasses: {
        type: Array,
    },
    maxCount: {
        type: Number,
        value: 99,
    },
    offset: {
        type: Array,
    },
    shape: {
        type: String,
        value: 'circle',
    },
    showZero: {
        type: Boolean,
        value: false,
    },
    size: {
        type: String,
        value: 'medium',
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./miniprogram_npm/tdesign-miniprogram/badge/badge.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=badge.js.map