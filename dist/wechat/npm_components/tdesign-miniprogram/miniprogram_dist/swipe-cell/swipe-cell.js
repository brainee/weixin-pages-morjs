"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["npm_components/tdesign-miniprogram/miniprogram_dist/swipe-cell/swipe-cell"],{

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/swipe-cell/swipe-cell.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/swipe-cell/swipe-cell.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/config.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "../node_modules/tdesign-miniprogram/miniprogram_dist/swipe-cell/props.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/utils.js");
/* harmony import */ var _common_wechat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/wechat */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/wechat.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ARRAY = [];
const { prefix } = _common_config__WEBPACK_IMPORTED_MODULE_1__["default"];
const name = `${prefix}-swipe-cell`;
const ContainerClass = `.${name}`;
let SwiperCell = class SwiperCell extends _common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`];
        this.options = {
            multipleSlots: true,
        };
        this.properties = _props__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.data = {
            prefix,
            wrapperStyle: '',
            closed: true,
            classPrefix: name,
        };
        this.observers = {
            'left, right'() {
                this.setSwipeWidth();
            },
        };
        this.lifetimes = {
            attached() {
                ARRAY.push(this);
            },
            ready() {
                this.setSwipeWidth();
            },
            detached() {
                ARRAY = ARRAY.filter((item) => item !== this);
            },
        };
    }
    setSwipeWidth() {
        Promise.all([(0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.getRect)(this, `${ContainerClass}__left`), (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.getRect)(this, `${ContainerClass}__right`)]).then(([leftRect, rightRect]) => {
            if (leftRect.width === 0 && rightRect.width === 0 && !this._hasObserved) {
                this._hasObserved = true;
                (0,_common_wechat__WEBPACK_IMPORTED_MODULE_4__.getObserver)(this, `.${name}`).then(() => {
                    this.setSwipeWidth();
                });
            }
            this.setData({
                leftWidth: leftRect.width,
                rightWidth: rightRect.width,
            });
        });
    }
    open() {
        this.setData({ opened: true });
    }
    close() {
        this.setData({ opened: false });
    }
    closeOther() {
        ARRAY.filter((item) => item !== this).forEach((item) => item.close());
    }
    onTap() {
        this.close();
    }
    onActionTap(event) {
        const { currentTarget: { dataset: { action }, }, } = event;
        this.triggerEvent('click', action);
    }
};
SwiperCell = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], SwiperCell);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (SwiperCell);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v"], function() { return __webpack_exec__("../node_modules/tdesign-miniprogram/miniprogram_dist/swipe-cell/swipe-cell.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=swipe-cell.js.map