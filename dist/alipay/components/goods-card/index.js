(my["mor_modules"] = my["mor_modules"] || []).push([["components/goods-card/index"],{

/***/ "./components/goods-card/index.js":
/*!****************************************!*\
  !*** ./components/goods-card/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var __MOR_COMPONENT__ = (__webpack_require__(/*! @morjs/core */ "../node_modules/@morjs/core/esm/index.js").createComponent);

"use strict";
__MOR_COMPONENT__({
    options: {
        addGlobalClass: true,
    },
    properties: {
        id: {
            type: String,
            value: '',
            observer(id) {
                var _a;
                this.genIndependentID(id);
                if ((_a = this.properties.thresholds) === null || _a === void 0 ? void 0 : _a.length) {
                    this.createIntersectionObserverHandle();
                }
            },
        },
        data: {
            type: Object,
            observer(data) {
                if (!data) {
                    return;
                }
                let isValidityLinePrice = true;
                if (data.originPrice && data.price && data.originPrice < data.price) {
                    isValidityLinePrice = false;
                }
                this.setData({ goods: data, isValidityLinePrice });
            },
        },
        currency: {
            type: String,
            value: '¥',
        },
        thresholds: {
            type: Array,
            value: [],
            observer(thresholds) {
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
        ready() {
            this.init();
        },
        detached() {
            this.clear();
        },
    },
    pageLifeTimes: {},
    methods: {
        clickHandle() {
            this.triggerEvent('click', { goods: this.data.goods });
        },
        clickThumbHandle() {
            this.triggerEvent('thumb', { goods: this.data.goods });
        },
        addCartHandle(e) {
            const { id } = e.currentTarget;
            const { id: cardID } = e.currentTarget.dataset;
            this.triggerEvent('add-cart', Object.assign(Object.assign({}, e.detail), { id,
                cardID, goods: this.data.goods }));
        },
        genIndependentID(id) {
            let independentID;
            if (id) {
                independentID = id;
            }
            else {
                independentID = `goods-card-${~~(Math.random() * Math.pow(10, 8))}`;
            }
            this.setData({ independentID });
        },
        init() {
            const { thresholds, id } = this.properties;
            this.genIndependentID(id);
            if (thresholds && thresholds.length) {
                this.createIntersectionObserverHandle();
            }
        },
        clear() {
            this.clearIntersectionObserverHandle();
        },
        intersectionObserverContext: null,
        createIntersectionObserverHandle() {
            if (this.intersectionObserverContext || !this.data.independentID) {
                return;
            }
            this.intersectionObserverContext = this.createIntersectionObserver({
                thresholds: this.properties.thresholds,
            }).relativeToViewport();
            this.intersectionObserverContext.observe(`#${this.data.independentID}`, (res) => {
                this.intersectionObserverCB(res);
            });
        },
        intersectionObserverCB() {
            this.triggerEvent('ob', {
                goods: this.data.goods,
                context: this.intersectionObserverContext,
            });
        },
        clearIntersectionObserverHandle() {
            if (this.intersectionObserverContext) {
                try {
                    this.intersectionObserverContext.disconnect();
                }
                catch (e) { }
                this.intersectionObserverContext = null;
            }
        },
    },
}, "w");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v"], function() { return __webpack_exec__("./components/goods-card/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map