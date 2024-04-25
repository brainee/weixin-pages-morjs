"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["pages/usercenter/components/order-group/index"],{

/***/ "./pages/usercenter/components/order-group/index.js":
/*!**********************************************************!*\
  !*** ./pages/usercenter/components/order-group/index.js ***!
  \**********************************************************/
/***/ (function() {


Component({
    externalClasses: ['title-class', 'icon-class', 'number-class'],
    options: {
        multipleSlots: true,
    },
    properties: {
        orderTagInfos: {
            type: Array,
            value: [],
        },
        title: {
            type: String,
            value: '我的订单',
        },
        desc: {
            type: String,
            value: '全部订单',
        },
        isTop: {
            type: Boolean,
            value: true,
        },
        classPrefix: {
            type: String,
            value: 'wr',
        },
    },
    methods: {
        onClickItem: function (e) {
            this.triggerEvent('onClickItem', e.currentTarget.dataset.item);
        },
        onClickTop: function () {
            this.triggerEvent('onClickTop', {});
        },
    },
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./pages/usercenter/components/order-group/index.js"));
/******/ }
]);
//# sourceMappingURL=index.js.map