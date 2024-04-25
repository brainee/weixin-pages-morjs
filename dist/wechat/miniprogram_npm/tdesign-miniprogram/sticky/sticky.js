"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["miniprogram_npm/tdesign-miniprogram/sticky/sticky"],{

/***/ "./miniprogram_npm/tdesign-miniprogram/mixins/page-scroll.js":
/*!*******************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/mixins/page-scroll.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utils */ "./miniprogram_npm/tdesign-miniprogram/common/utils.js");

var onPageScroll = function (event) {
    var page = (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.getCurrentPage)();
    if (!page)
        return;
    var pageScroller = page.pageScroller;
    pageScroller === null || pageScroller === void 0 ? void 0 : pageScroller.forEach(function (scroller) {
        if (typeof scroller === 'function') {
            scroller(event);
        }
    });
};
/* harmony default export */ __webpack_exports__["default"] = (function (funcName) {
    if (funcName === void 0) { funcName = 'onScroll'; }
    return Behavior({
        attached: function () {
            var _a;
            var page = (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.getCurrentPage)();
            if (!page)
                return;
            var bindScroller = (_a = this[funcName]) === null || _a === void 0 ? void 0 : _a.bind(this);
            if (bindScroller) {
                this._pageScroller = bindScroller;
            }
            if (Array.isArray(page.pageScroller)) {
                page.pageScroller.push(bindScroller);
            }
            else {
                page.pageScroller =
                    typeof page.onPageScroll === 'function' ? [page.onPageScroll.bind(page), bindScroller] : [bindScroller];
            }
            page.onPageScroll = onPageScroll;
        },
        detached: function () {
            var _this = this;
            var _a;
            var page = (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.getCurrentPage)();
            if (!page)
                return;
            page.pageScroller = ((_a = page.pageScroller) === null || _a === void 0 ? void 0 : _a.filter(function (item) { return item !== _this._pageScroller; })) || [];
        },
    });
});


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/sticky/props.js":
/*!*************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/sticky/props.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

var props = {
    container: {
        type: null,
    },
    disabled: {
        type: Boolean,
        value: false,
    },
    externalClasses: {
        type: Array,
    },
    offsetTop: {
        type: Number,
        value: 0,
    },
    zIndex: {
        type: Number,
        value: 99,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/sticky/sticky.js":
/*!**************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/sticky/sticky.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "./miniprogram_npm/tdesign-miniprogram/common/src/index.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./props */ "./miniprogram_npm/tdesign-miniprogram/sticky/props.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/config */ "./miniprogram_npm/tdesign-miniprogram/common/config.js");
/* harmony import */ var _mixins_page_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/page-scroll */ "./miniprogram_npm/tdesign-miniprogram/mixins/page-scroll.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils */ "./miniprogram_npm/tdesign-miniprogram/common/utils.js");

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





var prefix = _common_config__WEBPACK_IMPORTED_MODULE_2__["default"].prefix;
var name = prefix + "-sticky";
var ContainerClass = "." + name;
var Sticky = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(Sticky, _super);
    function Sticky() {
        var _this = _super.apply(this, arguments) || this;
        _this.externalClasses = [prefix + "-class", prefix + "-class-content"];
        _this.properties = _props__WEBPACK_IMPORTED_MODULE_1__["default"];
        _this.behaviors = [(0,_mixins_page_scroll__WEBPACK_IMPORTED_MODULE_3__["default"])()];
        _this.observers = {
            'offsetTop, disabled, container': function () {
                this.onScroll();
            },
        };
        _this.data = {
            prefix: prefix,
            classPrefix: name,
            containerStyle: '',
            contentStyle: '',
        };
        _this.methods = {
            onScroll: function (event) {
                var _this = this;
                var scrollTop = (event || {}).scrollTop;
                var _a = this.properties, container = _a.container, offsetTop = _a.offsetTop, disabled = _a.disabled;
                if (disabled) {
                    this.setDataAfterDiff({
                        isFixed: false,
                        transform: 0,
                    });
                    return;
                }
                this.scrollTop = scrollTop || this.scrollTop;
                if (typeof container === 'function') {
                    Promise.all([(0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.getRect)(this, ContainerClass), this.getContainerRect()]).then(function (_a) {
                        var root = _a[0], container = _a[1];
                        if (!root || !container)
                            return;
                        if (offsetTop + root.height > container.height + container.top) {
                            _this.setDataAfterDiff({
                                isFixed: false,
                                transform: container.height - root.height,
                            });
                        }
                        else if (offsetTop >= root.top) {
                            _this.setDataAfterDiff({
                                isFixed: true,
                                height: root.height,
                                transform: 0,
                            });
                        }
                        else {
                            _this.setDataAfterDiff({ isFixed: false, transform: 0 });
                        }
                    });
                    return;
                }
                (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.getRect)(this, ContainerClass).then(function (root) {
                    if (!root)
                        return;
                    if (offsetTop >= root.top) {
                        _this.setDataAfterDiff({ isFixed: true, height: root.height });
                        _this.transform = 0;
                    }
                    else {
                        _this.setDataAfterDiff({ isFixed: false });
                    }
                });
            },
            setDataAfterDiff: function (data) {
                var _this = this;
                var offsetTop = this.properties.offsetTop;
                var _a = this.data, prevContainerStyle = _a.containerStyle, prevContentStyle = _a.contentStyle;
                var isFixed = data.isFixed, height = data.height, transform = data.transform;
                wx.nextTick(function () {
                    var containerStyle = '';
                    var contentStyle = '';
                    if (isFixed) {
                        containerStyle += "height:" + height + "px;";
                        contentStyle += "position:fixed;top:" + offsetTop + "px;left:0;right:0;";
                    }
                    if (transform) {
                        var translate = "translate3d(0, " + transform + "px, 0)";
                        contentStyle += "-webkit-transform:" + translate + ";transform:" + translate + ";";
                    }
                    if (prevContainerStyle !== containerStyle || prevContentStyle !== contentStyle) {
                        _this.setData({ containerStyle: containerStyle, contentStyle: contentStyle });
                    }
                    _this.triggerEvent('scroll', {
                        scrollTop: _this.scrollTop,
                        isFixed: isFixed,
                    });
                });
            },
            getContainerRect: function () {
                var nodesRef = this.properties.container();
                return new Promise(function (resolve) { return nodesRef.boundingClientRect(resolve).exec(); });
            },
        };
        return _this;
    }
    Sticky.prototype.ready = function () {
        this.onScroll();
    };
    return Sticky;
}(_common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent));
Sticky = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], Sticky);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Sticky);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./miniprogram_npm/tdesign-miniprogram/sticky/sticky.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=sticky.js.map