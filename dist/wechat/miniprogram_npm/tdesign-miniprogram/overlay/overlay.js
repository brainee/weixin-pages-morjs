"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["miniprogram_npm/tdesign-miniprogram/overlay/overlay"],{

/***/ "./miniprogram_npm/tdesign-miniprogram/mixins/transition.js":
/*!******************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/mixins/transition.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ transition; }
/* harmony export */ });
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/config */ "./miniprogram_npm/tdesign-miniprogram/common/config.js");

var prefix = _common_config__WEBPACK_IMPORTED_MODULE_0__["default"].prefix;
function transition() {
    return Behavior({
        properties: {
            visible: {
                type: Boolean,
                value: null,
                observer: 'watchVisible',
            },
            appear: Boolean,
            name: {
                type: String,
                value: 'fade',
            },
            durations: {
                type: Number,
                optionalTypes: [Array],
            },
        },
        data: {
            transitionClass: '',
            transitionDurations: 300,
            className: '',
            realVisible: false,
        },
        created: function () {
            this.status = '';
            this.transitionT = 0;
        },
        attached: function () {
            this.durations = this.getDurations();
            if (this.data.visible) {
                this.enter();
            }
            this.inited = true;
        },
        detached: function () {
            clearTimeout(this.transitionT);
        },
        methods: {
            watchVisible: function (curr, prev) {
                if (this.inited && curr !== prev) {
                    curr ? this.enter() : this.leave();
                }
            },
            getDurations: function () {
                var durations = this.data.durations;
                if (Array.isArray(durations)) {
                    return durations.map(function (item) { return Number(item); });
                }
                return [Number(durations), Number(durations)];
            },
            enter: function () {
                var _this = this;
                var name = this.data.name;
                var duration = this.durations[0];
                this.status = 'entering';
                this.setData({
                    realVisible: true,
                    transitionClass: prefix + "-" + name + "-enter " + prefix + "-" + name + "-enter-active",
                });
                setTimeout(function () {
                    _this.setData({
                        transitionClass: prefix + "-" + name + "-enter-active " + prefix + "-" + name + "-enter-to",
                    });
                }, 30);
                if (typeof duration === 'number' && duration > 0) {
                    this.transitionT = setTimeout(this.entered.bind(this), duration + 30);
                }
            },
            entered: function () {
                this.customDuration = false;
                clearTimeout(this.transitionT);
                this.status = 'entered';
                this.setData({
                    transitionClass: '',
                });
            },
            leave: function () {
                var _this = this;
                var name = this.data.name;
                var _a = this.durations, duration = _a[1];
                this.status = 'leaving';
                this.setData({
                    transitionClass: prefix + "-" + name + "-leave  " + prefix + "-" + name + "-leave-active",
                });
                clearTimeout(this.transitionT);
                setTimeout(function () {
                    _this.setData({
                        transitionClass: prefix + "-" + name + "-leave-active " + prefix + "-" + name + "-leave-to",
                    });
                }, 30);
                if (typeof duration === 'number' && duration > 0) {
                    this.customDuration = true;
                    this.transitionT = setTimeout(this.leaved.bind(this), duration + 30);
                }
            },
            leaved: function () {
                this.customDuration = false;
                this.triggerEvent('leaved');
                clearTimeout(this.transitionT);
                this.status = 'leaved';
                this.setData({
                    transitionClass: '',
                });
            },
            onTransitionEnd: function () {
                if (this.customDuration) {
                    return;
                }
                clearTimeout(this.transitionT);
                if (this.status === 'entering' && this.data.visible) {
                    this.entered();
                }
                else if (this.status === 'leaving' && !this.data.visible) {
                    this.leaved();
                    this.setData({
                        realVisible: false,
                    });
                }
            },
        },
    });
}


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/overlay/overlay.js":
/*!****************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/overlay/overlay.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "./miniprogram_npm/tdesign-miniprogram/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "./miniprogram_npm/tdesign-miniprogram/common/config.js");
/* harmony import */ var _mixins_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/transition */ "./miniprogram_npm/tdesign-miniprogram/mixins/transition.js");

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
var name = prefix + "-overlay";
var Overlay = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(Overlay, _super);
    function Overlay() {
        var _this = _super.apply(this, arguments) || this;
        _this.properties = {
            zIndex: {
                type: Number,
                value: 11000,
            },
            duration: {
                type: Number,
                value: 300,
            },
            backgroundColor: {
                type: String,
                value: '',
            },
            preventScrollThrough: {
                type: Boolean,
                value: true,
            },
        };
        _this.behaviors = [(0,_mixins_transition__WEBPACK_IMPORTED_MODULE_2__["default"])()];
        _this.data = {
            prefix: prefix,
            classPrefix: name,
            computedStyle: '',
            _zIndex: 11000,
        };
        _this.observers = {
            backgroundColor: function (v) {
                this.setData({
                    computedStyle: v ? "background-color: " + v + ";" : '',
                });
            },
            zIndex: function (v) {
                if (v !== 0) {
                    this.setData({
                        _zIndex: v,
                    });
                }
            },
        };
        _this.methods = {
            handleClick: function () {
                this.triggerEvent('click', { visible: !this.properties.visible });
            },
            noop: function () { },
        };
        return _this;
    }
    return Overlay;
}(_common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent));
Overlay = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], Overlay);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Overlay);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./miniprogram_npm/tdesign-miniprogram/overlay/overlay.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=overlay.js.map