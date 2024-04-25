"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["npm_components/tdesign-miniprogram/miniprogram_dist/swiper/swiper"],{

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/swiper/swiper.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/swiper/swiper.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/config.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "../node_modules/tdesign-miniprogram/miniprogram_dist/swiper/props.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const { prefix } = _common_config__WEBPACK_IMPORTED_MODULE_1__["default"];
const name = `${prefix}-swiper`;
let Swiper = class Swiper extends _common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [
            `${prefix}-class`,
            `${prefix}-class-nav`,
            `${prefix}-class-image`,
            `${prefix}-class-prev-image`,
            `${prefix}-class-next-image`,
        ];
        this.options = {
            multipleSlots: true,
        };
        this.properties = _props__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.observers = {
            navCurrent(v) {
                this.updateNav(v);
            },
        };
        this.$nav = null;
        this.relations = {
            '../swiper-nav/swiper-nav': {
                type: 'child',
            },
        };
        this.data = {
            prefix,
            classPrefix: name,
        };
        this.lifetimes = {
            ready() {
                const { current } = this.properties;
                this.setData({ navCurrent: current });
            },
        };
        this.methods = {
            updateNav(currentValue) {
                var _a;
                if (this.data.navigation)
                    return;
                const $nav = (_a = this.getRelationNodes('./swiper-nav')) === null || _a === void 0 ? void 0 : _a[0];
                if (!$nav)
                    return;
                const { direction, paginationPosition, list } = this.properties;
                $nav.setData({
                    current: currentValue,
                    total: list.length,
                    direction,
                    paginationPosition,
                });
            },
            onTap(e) {
                const { index } = e.currentTarget.dataset;
                this.triggerEvent('click', { index });
            },
            onChange(e) {
                const { current, source } = e.detail;
                this.setData({
                    navCurrent: current,
                });
                this.triggerEvent('change', { current, source });
            },
            onNavBtnChange(e) {
                const { dir, source } = e.detail;
                this.doNavBtnChange(dir, source);
            },
            doNavBtnChange(dir, source) {
                const { current, list, loop } = this.data;
                const count = list.length;
                let nextPos = dir === 'next' ? current + 1 : current - 1;
                if (loop) {
                    nextPos = dir === 'next' ? (current + 1) % count : (current - 1 + count) % count;
                }
                else {
                    nextPos = nextPos < 0 || nextPos >= count ? current : nextPos;
                }
                if (nextPos === current)
                    return;
                this.setData({
                    current: nextPos,
                });
                this.triggerEvent('change', { current: nextPos, source });
            },
            onImageLoad(e) {
                this.triggerEvent('image-load', { index: e.target.dataset.custom });
            },
        };
    }
};
Swiper = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], Swiper);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Swiper);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v"], function() { return __webpack_exec__("../node_modules/tdesign-miniprogram/miniprogram_dist/swiper/swiper.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=swiper.js.map