"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["components/price/index"],{

/***/ "./components/price/index.js":
/*!***********************************!*\
  !*** ./components/price/index.js ***!
  \***********************************/
/***/ (function() {


Component({
    externalClasses: ['wr-class', 'symbol-class', 'decimal-class'],
    useStore: [],
    properties: {
        priceUnit: {
            type: String,
            value: 'fen',
        },
        price: {
            type: null,
            value: '',
            observer: function (price) {
                this.format(price);
            },
        },
        type: {
            type: String,
            value: '', //
        },
        symbol: {
            type: String,
            value: '¥', // '￥',
        },
        fill: Boolean,
        decimalSmaller: Boolean,
        lineThroughWidth: {
            type: null,
            value: '0.12em',
        }, // 划线价线条高度
    },
    data: {
        pArr: [],
    },
    methods: {
        format: function (price) {
            price = parseFloat("" + price);
            var pArr = [];
            if (!isNaN(price)) {
                var isMinus = price < 0;
                if (isMinus) {
                    price = -price;
                }
                if (this.properties.priceUnit === 'yuan') {
                    var priceSplit = price.toString().split('.');
                    pArr[0] = priceSplit[0];
                    pArr[1] = !priceSplit[1]
                        ? '00'
                        : priceSplit[1].length === 1
                            ? priceSplit[1] + "0"
                            : priceSplit[1];
                }
                else {
                    price = Math.round(price * Math.pow(10, 8)) / Math.pow(10, 8); // 恢复精度丢失
                    price = Math.ceil(price); // 向上取整
                    pArr[0] = price >= 100 ? ("" + price).slice(0, -2) : '0';
                    pArr[1] = ("" + (price + 100)).slice(-2);
                }
                if (!this.properties.fill) {
                    // 如果 fill 为 false， 不显示小数末尾的0
                    if (pArr[1] === '00')
                        pArr[1] = '';
                    else if (pArr[1][1] === '0')
                        pArr[1] = pArr[1][0];
                }
                if (isMinus) {
                    pArr[0] = "-" + pArr[0];
                }
            }
            this.setData({ pArr: pArr });
        },
    },
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./components/price/index.js"));
/******/ }
]);
//# sourceMappingURL=index.js.map