"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["miniprogram_npm/tdesign-miniprogram/tabs/tabs"],{

/***/ "./miniprogram_npm/tdesign-miniprogram/mixins/touch.js":
/*!*************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/mixins/touch.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

var MinDistance = 10;
var getDirection = function (x, y) {
    if (x > y && x > MinDistance) {
        return 'horizontal';
    }
    if (y > x && y > MinDistance) {
        return 'vertical';
    }
    return '';
};
/* harmony default export */ __webpack_exports__["default"] = (Behavior({
    methods: {
        resetTouchStatus: function () {
            this.direction = '';
            this.deltaX = 0;
            this.deltaY = 0;
            this.offsetX = 0;
            this.offsetY = 0;
        },
        touchStart: function (event) {
            this.resetTouchStatus();
            var touch = event.touches[0];
            this.startX = touch.clientX;
            this.startY = touch.clientY;
        },
        touchMove: function (event) {
            var touch = event.touches[0];
            this.deltaX = touch.clientX - this.startX;
            this.deltaY = touch.clientY - this.startY;
            this.offsetX = Math.abs(this.deltaX);
            this.offsetY = Math.abs(this.deltaY);
            this.direction = getDirection(this.offsetX, this.offsetY);
        },
    },
}));


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/tabs/props.js":
/*!***********************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/tabs/props.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

var props = {
    animation: {
        type: Object,
    },
    externalClasses: {
        type: Array,
    },
    showBottomLine: {
        type: Boolean,
        value: true,
    },
    spaceEvenly: {
        type: Boolean,
        value: true,
    },
    split: {
        type: Boolean,
        value: true,
    },
    sticky: {
        type: Boolean,
        value: false,
    },
    stickyProps: {
        type: Object,
    },
    swipeable: {
        type: Boolean,
        value: true,
    },
    theme: {
        type: String,
        value: 'line',
    },
    value: {
        type: null,
        value: null,
    },
    defaultValue: {
        type: null,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/tabs/tabs.js":
/*!**********************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/tabs/tabs.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "./miniprogram_npm/tdesign-miniprogram/common/src/index.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./props */ "./miniprogram_npm/tdesign-miniprogram/tabs/props.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/config */ "./miniprogram_npm/tdesign-miniprogram/common/config.js");
/* harmony import */ var _mixins_touch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/touch */ "./miniprogram_npm/tdesign-miniprogram/mixins/touch.js");
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





var prefix = _common_config__WEBPACK_IMPORTED_MODULE_2__["default"].prefix;
var name = prefix + "-tabs";
var getUniqueID = (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.uniqueFactory)('tabs');
var Tabs = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(Tabs, _super);
    function Tabs() {
        var _this = _super.apply(this, arguments) || this;
        _this.behaviors = [_mixins_touch__WEBPACK_IMPORTED_MODULE_3__["default"]];
        _this.externalClasses = [
            prefix + "-class",
            prefix + "-class-item",
            prefix + "-class-active",
            prefix + "-class-track",
            prefix + "-class-content",
        ];
        _this.relations = {
            '../tab-panel/tab-panel': {
                type: 'descendant',
                linked: function (target) {
                    this.children.push(target);
                    this.initChildId();
                    target.index = this.children.length - 1;
                    this.updateTabs();
                },
                unlinked: function (target) {
                    var _this = this;
                    this.children = this.children.filter(function (item) { return item.index !== target.index; });
                    this.updateTabs(function () { return _this.setTrack(); });
                    this.initChildId();
                },
            },
        };
        _this.properties = _props__WEBPACK_IMPORTED_MODULE_1__["default"];
        _this.controlledProps = [
            {
                key: 'value',
                event: 'change',
            },
        ];
        _this.observers = {
            value: function (name) {
                if (name !== this.getCurrentName()) {
                    this.setCurrentIndexByName(name);
                }
            },
        };
        _this.data = {
            prefix: prefix,
            classPrefix: name,
            tabs: [],
            currentIndex: -1,
            trackStyle: '',
            offset: 0,
            scrollLeft: 0,
            tabID: '',
            placement: 'top',
        };
        _this.lifetimes = {
            created: function () {
                this.children = this.children || [];
            },
            attached: function () {
                var _this = this;
                wx.nextTick(function () {
                    _this.setTrack();
                });
                (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.getRect)(this, "." + name).then(function (rect) {
                    _this.containerWidth = rect.width;
                });
                this.setData({
                    tabID: getUniqueID(),
                });
            },
        };
        _this.methods = {
            onScroll: function (e) {
                var scrollLeft = e.detail.scrollLeft;
                this.setData({
                    scrollLeft: scrollLeft,
                });
            },
            updateTabs: function (cb) {
                var children = this.children;
                var tabs = children.map(function (child) { return child.data; });
                tabs.forEach(function (item) {
                    if (typeof item.icon === 'string') {
                        item.icon = { name: item.icon };
                    }
                });
                this.setData({ tabs: tabs }, cb);
                this.setCurrentIndexByName(this.properties.value);
            },
            setCurrentIndexByName: function (name) {
                var children = this.children;
                var index = children.findIndex(function (child) { return child.getComputedName() === "" + name; });
                if (index > -1) {
                    this.setCurrentIndex(index);
                }
            },
            setCurrentIndex: function (index) {
                var _this = this;
                if (index <= -1 || index >= this.children.length)
                    return;
                this.children.forEach(function (child, idx) {
                    var isActive = index === idx;
                    if (isActive !== child.data.active) {
                        child.render(isActive, _this);
                    }
                });
                if (this.data.currentIndex === index)
                    return;
                this.setData({
                    currentIndex: index,
                });
                this.setTrack();
            },
            getCurrentName: function () {
                if (this.children) {
                    var activeTab = this.children[this.data.currentIndex];
                    if (activeTab) {
                        return activeTab.getComputedName();
                    }
                }
            },
            calcScrollOffset: function (containerWidth, targetLeft, targetWidth, offset) {
                return offset + targetLeft - (1 / 2) * containerWidth + targetWidth / 2;
            },
            getTrackSize: function () {
                var _this = this;
                return new Promise(function (resolve, reject) {
                    if (_this.trackWidth) {
                        resolve(_this.trackWidth);
                        return;
                    }
                    (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.getRect)(_this, "." + prefix + "-tabs__track")
                        .then(function (res) {
                        if (res) {
                            _this.trackWidth = res.width;
                            resolve(_this.trackWidth);
                        }
                    })
                        .catch(reject);
                });
            },
            setTrack: function () {
                return __awaiter(this, void 0, void 0, function () {
                    var children, currentIndex, res, rect, count_1, distance_1, totalSize_1, offset, maxOffset, trackLineWidth, err_1;
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                children = this.children;
                                if (!children)
                                    return [2 /*return*/];
                                currentIndex = this.data.currentIndex;
                                if (currentIndex <= -1)
                                    return [2 /*return*/];
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 5, , 6]);
                                return [4 /*yield*/, (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.getRect)(this, "." + prefix + "-tabs__item", true)];
                            case 2:
                                res = _a.sent();
                                rect = res[currentIndex];
                                if (!rect)
                                    return [2 /*return*/];
                                count_1 = 0;
                                distance_1 = 0;
                                totalSize_1 = 0;
                                res.forEach(function (item) {
                                    if (count_1 < currentIndex) {
                                        distance_1 += item.width;
                                        count_1 += 1;
                                    }
                                    totalSize_1 += item.width;
                                });
                                if (this.containerWidth) {
                                    offset = this.calcScrollOffset(this.containerWidth, rect.left, rect.width, this.data.scrollLeft);
                                    maxOffset = totalSize_1 - this.containerWidth;
                                    this.setData({
                                        offset: Math.min(Math.max(offset, 0), maxOffset),
                                    });
                                }
                                if (!(this.data.theme === 'line')) return [3 /*break*/, 4];
                                return [4 /*yield*/, this.getTrackSize()];
                            case 3:
                                trackLineWidth = _a.sent();
                                distance_1 += (rect.width - trackLineWidth) / 2;
                                _a.label = 4;
                            case 4:
                                this.setData({
                                    trackStyle: "-webkit-transform: translateX(" + distance_1 + "px);\n            transform: translateX(" + distance_1 + "px);\n          ",
                                });
                                return [3 /*break*/, 6];
                            case 5:
                                err_1 = _a.sent();
                                this.triggerEvent('error', err_1);
                                return [3 /*break*/, 6];
                            case 6: return [2 /*return*/];
                        }
                    });
                });
            },
            onTabTap: function (event) {
                var index = event.currentTarget.dataset.index;
                this.changeIndex(index);
            },
            onTouchStart: function (event) {
                if (!this.properties.swipeable)
                    return;
                this.touchStart(event);
            },
            onTouchMove: function (event) {
                if (!this.properties.swipeable)
                    return;
                this.touchMove(event);
            },
            onTouchEnd: function () {
                if (!this.properties.swipeable)
                    return;
                var _a = this, direction = _a.direction, deltaX = _a.deltaX, offsetX = _a.offsetX;
                var minSwipeDistance = 50;
                if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
                    var index = this.getAvailableTabIndex(deltaX);
                    if (index !== -1) {
                        this.changeIndex(index);
                    }
                }
            },
            onTouchScroll: function (event) {
                this._trigger('scroll', event.detail);
            },
            changeIndex: function (index) {
                var currentTab = this.data.tabs[index];
                var value = currentTab.value, label = currentTab.label;
                if (!(currentTab === null || currentTab === void 0 ? void 0 : currentTab.disabled) && index !== this.data.currentIndex) {
                    this._trigger('change', { value: value, label: label });
                }
                this._trigger('click', { value: value, label: label });
            },
            getAvailableTabIndex: function (deltaX) {
                var step = deltaX > 0 ? -1 : 1;
                var _a = this.data, currentIndex = _a.currentIndex, tabs = _a.tabs;
                var len = tabs.length;
                for (var i = step; currentIndex + step >= 0 && currentIndex + step < len; i += step) {
                    var newIndex = currentIndex + i;
                    if (newIndex >= 0 && newIndex < len && tabs[newIndex]) {
                        if (!tabs[newIndex].disabled) {
                            return newIndex;
                        }
                    }
                    else {
                        return currentIndex;
                    }
                }
                return -1;
            },
        };
        return _this;
    }
    Tabs.prototype.initChildId = function () {
        var _this = this;
        this.children.forEach(function (item, index) {
            item.setId(_this.data.tabID + "_panel_" + index);
        });
    };
    return Tabs;
}(_common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent));
Tabs = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], Tabs);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Tabs);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./miniprogram_npm/tdesign-miniprogram/tabs/tabs.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=tabs.js.map