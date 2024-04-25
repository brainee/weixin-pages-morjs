"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["components/goods-list/index"],{

/***/ "./components/goods-list/index.js":
/*!****************************************!*\
  !*** ./components/goods-list/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");

var _this = undefined;

Component({
    externalClasses: ['wr-class'],
    properties: {
        goodsList: {
            type: Array,
            value: [],
        },
        id: {
            type: String,
            value: '',
            observer: function (id) {
                _this.genIndependentID(id);
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
        ready: function () {
            this.init();
        },
    },
    methods: {
        onClickGoods: function (e) {
            var index = e.currentTarget.dataset.index;
            this.triggerEvent('click', (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, e.detail), { index: index }));
        },
        onAddCart: function (e) {
            var index = e.currentTarget.dataset.index;
            this.triggerEvent('addcart', (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, e.detail), { index: index }));
        },
        onClickGoodsThumb: function (e) {
            var index = e.currentTarget.dataset.index;
            this.triggerEvent('thumb', (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, e.detail), { index: index }));
        },
        init: function () {
            this.genIndependentID(this.id || '');
        },
        genIndependentID: function (id) {
            if (id) {
                this.setData({ independentID: id });
            }
            else {
                this.setData({
                    independentID: "goods-list-" + ~~(Math.random() * Math.pow(10, 8)),
                });
            }
        },
    },
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v"], function() { return __webpack_exec__("./components/goods-list/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map