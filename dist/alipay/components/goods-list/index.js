(my["mor_modules"] = my["mor_modules"] || []).push([["components/goods-list/index"],{

/***/ "./components/goods-list/index.js":
/*!****************************************!*\
  !*** ./components/goods-list/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var __MOR_COMPONENT__ = (__webpack_require__(/*! @morjs/core */ "../node_modules/@morjs/core/esm/index.js").createComponent);

"use strict";
__MOR_COMPONENT__({
    externalClasses: ['wr-class'],
    properties: {
        goodsList: {
            type: Array,
            value: [],
        },
        id: {
            type: String,
            value: '',
            observer: (id) => {
                this.genIndependentID(id);
            },
        },
        thresholds: {
            type: Array,
            value: [],
        },
    },
    data: {
        independentID: '',
    },
    lifetimes: {
        ready() {
            this.init();
        },
    },
    methods: {
        onClickGoods(e) {
            const { index } = e.currentTarget.dataset;
            this.triggerEvent('click', Object.assign(Object.assign({}, e.detail), { index }));
        },
        onAddCart(e) {
            const { index } = e.currentTarget.dataset;
            this.triggerEvent('addcart', Object.assign(Object.assign({}, e.detail), { index }));
        },
        onClickGoodsThumb(e) {
            const { index } = e.currentTarget.dataset;
            this.triggerEvent('thumb', Object.assign(Object.assign({}, e.detail), { index }));
        },
        init() {
            this.genIndependentID(this.id || '');
        },
        genIndependentID(id) {
            if (id) {
                this.setData({ independentID: id });
            }
            else {
                this.setData({
                    independentID: `goods-list-${~~(Math.random() * Math.pow(10, 8))}`,
                });
            }
        },
    },
}, "w");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v"], function() { return __webpack_exec__("./components/goods-list/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map