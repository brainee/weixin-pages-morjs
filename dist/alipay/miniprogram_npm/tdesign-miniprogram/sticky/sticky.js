"use strict";
(my["mor_modules"] = my["mor_modules"] || []).push([["miniprogram_npm/tdesign-miniprogram/sticky/sticky"],{

/***/ "./miniprogram_npm/tdesign-miniprogram/mixins/page-scroll.js":
/*!*******************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/mixins/page-scroll.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var Behavior = (__webpack_require__(/*! ../node_modules/@morjs/runtime-mini/lib/common/behaviorOrMixin.js */ "../node_modules/@morjs/runtime-mini/lib/common/behaviorOrMixin.js").Behavior);
const utils_1 = __webpack_require__(/*! ../common/utils */ "./miniprogram_npm/tdesign-miniprogram/common/utils.js");
const onPageScroll = function (event) {
    const page = (0, utils_1.getCurrentPage)();
    if (!page)
        return;
    const { pageScroller } = page;
    pageScroller === null || pageScroller === void 0 ? void 0 : pageScroller.forEach((scroller) => {
        if (typeof scroller === 'function') {
            scroller(event);
        }
    });
};
exports["default"] = (funcName = 'onScroll') => {
    return Behavior({
        attached() {
            var _a;
            const page = (0, utils_1.getCurrentPage)();
            if (!page)
                return;
            const bindScroller = (_a = this[funcName]) === null || _a === void 0 ? void 0 : _a.bind(this);
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
        detached() {
            var _a;
            const page = (0, utils_1.getCurrentPage)();
            if (!page)
                return;
            page.pageScroller = ((_a = page.pageScroller) === null || _a === void 0 ? void 0 : _a.filter((item) => item !== this._pageScroller)) || [];
        },
    });
};


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/sticky/props.js":
/*!*************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/sticky/props.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {


const props = {
  container: {
    type: null
  },
  disabled: {
    type: Boolean,
    value: false
  },
  externalClasses: {
    type: Array
  },
  offsetTop: {
    type: Number,
    value: 0
  },
  zIndex: {
    type: Number,
    value: 99
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/sticky/sticky.js":
/*!**************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/sticky/sticky.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "./miniprogram_npm/tdesign-miniprogram/common/src/index.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./props */ "./miniprogram_npm/tdesign-miniprogram/sticky/props.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/config */ "./miniprogram_npm/tdesign-miniprogram/common/config.js");
/* harmony import */ var _mixins_page_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/page-scroll */ "./miniprogram_npm/tdesign-miniprogram/mixins/page-scroll.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils */ "./miniprogram_npm/tdesign-miniprogram/common/utils.js");
var __MOR_API__ = (__webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/esm/index.js").mor);

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





const { prefix } = _common_config__WEBPACK_IMPORTED_MODULE_2__["default"];
const name = `${prefix}-sticky`;
const ContainerClass = `.${name}`;
let Sticky = class Sticky extends _common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`, `${prefix}-class-content`];
        this.properties = _props__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.behaviors = [(0,_mixins_page_scroll__WEBPACK_IMPORTED_MODULE_3__["default"])()];
        this.observers = {
            'offsetTop, disabled, container'() {
                this.onScroll();
            },
        };
        this.data = {
            prefix,
            classPrefix: name,
            containerStyle: '',
            contentStyle: '',
        };
        this.methods = {
            onScroll(event) {
                const { scrollTop } = event || {};
                const { container, offsetTop, disabled } = this.properties;
                if (disabled) {
                    this.setDataAfterDiff({
                        isFixed: false,
                        transform: 0,
                    });
                    return;
                }
                this.scrollTop = scrollTop || this.scrollTop;
                if (typeof container === 'function') {
                    Promise.all([(0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.getRect)(this, ContainerClass), this.getContainerRect()]).then(([root, container]) => {
                        if (!root || !container)
                            return;
                        if (offsetTop + root.height > container.height + container.top) {
                            this.setDataAfterDiff({
                                isFixed: false,
                                transform: container.height - root.height,
                            });
                        }
                        else if (offsetTop >= root.top) {
                            this.setDataAfterDiff({
                                isFixed: true,
                                height: root.height,
                                transform: 0,
                            });
                        }
                        else {
                            this.setDataAfterDiff({ isFixed: false, transform: 0 });
                        }
                    });
                    return;
                }
                (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.getRect)(this, ContainerClass).then((root) => {
                    if (!root)
                        return;
                    if (offsetTop >= root.top) {
                        this.setDataAfterDiff({ isFixed: true, height: root.height });
                        this.transform = 0;
                    }
                    else {
                        this.setDataAfterDiff({ isFixed: false });
                    }
                });
            },
            setDataAfterDiff(data) {
                const { offsetTop } = this.properties;
                const { containerStyle: prevContainerStyle, contentStyle: prevContentStyle } = this.data;
                const { isFixed, height, transform } = data;
                __MOR_API__.nextTick(() => {
                    let containerStyle = '';
                    let contentStyle = '';
                    if (isFixed) {
                        containerStyle += `height:${height}px;`;
                        contentStyle += `position:fixed;top:${offsetTop}px;left:0;right:0;`;
                    }
                    if (transform) {
                        const translate = `translate3d(0, ${transform}px, 0)`;
                        contentStyle += `-webkit-transform:${translate};transform:${translate};`;
                    }
                    if (prevContainerStyle !== containerStyle || prevContentStyle !== contentStyle) {
                        this.setData({ containerStyle, contentStyle });
                    }
                    this.triggerEvent('scroll', {
                        scrollTop: this.scrollTop,
                        isFixed,
                    });
                });
            },
            getContainerRect() {
                const nodesRef = this.properties.container();
                return new Promise((resolve) => nodesRef.boundingClientRect(resolve).exec());
            },
        };
    }
    ready() {
        this.onScroll();
    }
};
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