"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["components/goods-card/index"],{

/***/ "./components/goods-card/index.js":
/*!****************************************!*\
  !*** ./components/goods-card/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");


Component({
    options: {
        addGlobalClass: true,
    },
    properties: {
        id: {
            type: String,
            value: '',
            observer: function (id) {
                var _a;
                this.genIndependentID(id);
                if ((_a = this.properties.thresholds) === null || _a === void 0 ? void 0 : _a.length) {
                    this.createIntersectionObserverHandle();
                }
            },
        },
        data: {
            type: Object,
            observer: function (data) {
                if (!data) {
                    return;
                }
                var isValidityLinePrice = true;
                if (data.originPrice && data.price && data.originPrice < data.price) {
                    isValidityLinePrice = false;
                }
                this.setData({ goods: data, isValidityLinePrice: isValidityLinePrice });
            },
        },
        currency: {
            type: String,
            value: '¥',
        },
        thresholds: {
            type: Array,
            value: [],
            observer: function (thresholds) {
                if (thresholds && thresholds.length) {
                    this.createIntersectionObserverHandle();
                }
                else {
                    this.clearIntersectionObserverHandle();
                }
            },
        },
    },
    data: {
        independentID: '',
        goods: { id: '' },
        isValidityLinePrice: false,
    },
    lifetimes: {
        ready: function () {
            this.init();
        },
        detached: function () {
            this.clear();
        },
    },
    pageLifeTimes: {},
    methods: {
        clickHandle: function () {
            this.triggerEvent('click', { goods: this.data.goods });
        },
        clickThumbHandle: function () {
            this.triggerEvent('thumb', { goods: this.data.goods });
        },
        addCartHandle: function (e) {
            var id = e.currentTarget.id;
            var cardID = e.currentTarget.dataset.id;
            this.triggerEvent('add-cart', (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, e.detail), { id: id, cardID: cardID, goods: this.data.goods }));
        },
        genIndependentID: function (id) {
            var independentID;
            if (id) {
                independentID = id;
            }
            else {
                independentID = "goods-card-" + ~~(Math.random() * Math.pow(10, 8));
            }
            this.setData({ independentID: independentID });
        },
        init: function () {
            var _a = this.properties, thresholds = _a.thresholds, id = _a.id;
            this.genIndependentID(id);
            if (thresholds && thresholds.length) {
                this.createIntersectionObserverHandle();
            }
        },
        clear: function () {
            this.clearIntersectionObserverHandle();
        },
        intersectionObserverContext: null,
        createIntersectionObserverHandle: function () {
            var _this = this;
            if (this.intersectionObserverContext || !this.data.independentID) {
                return;
            }
            this.intersectionObserverContext = this.createIntersectionObserver({
                thresholds: this.properties.thresholds,
            }).relativeToViewport();
            this.intersectionObserverContext.observe("#" + this.data.independentID, function (res) {
                _this.intersectionObserverCB(res);
            });
        },
        intersectionObserverCB: function () {
            this.triggerEvent('ob', {
                goods: this.data.goods,
                context: this.intersectionObserverContext,
            });
        },
        clearIntersectionObserverHandle: function () {
            if (this.intersectionObserverContext) {
                try {
                    this.intersectionObserverContext.disconnect();
                }
                catch (e) { }
                this.intersectionObserverContext = null;
            }
        },
    },
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v"], function() { return __webpack_exec__("./components/goods-card/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map