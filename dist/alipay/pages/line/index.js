"use strict";
(my["mor_modules"] = my["mor_modules"] || []).push([["pages/line/index"],{

/***/ "./pages/line/index.js":
/*!*****************************!*\
  !*** ./pages/line/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _ec_canvas_echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ec-canvas/echarts */ "./ec-canvas/echarts.js");
/* harmony import */ var _ec_canvas_echarts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ec_canvas_echarts__WEBPACK_IMPORTED_MODULE_0__);
var __MOR_PAGE__ = (__webpack_require__(/*! @morjs/core */ "../node_modules/@morjs/core/esm/index.js").createPage);


const app = getApp();
function initChart(canvas, width, height, dpr) {
    console.log("[zy]initChart", canvas, width, height, dpr);
    const chart = _ec_canvas_echarts__WEBPACK_IMPORTED_MODULE_0__.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
    });
    canvas.setChart(chart);
    var option = {
        title: {
            text: '测试下面legend的红色区域不应被裁剪',
            left: 'center'
        },
        legend: {
            data: ['A', 'B', 'C'],
            top: 50,
            left: 'center',
            backgroundColor: 'red',
            z: 100
        },
        grid: {
            containLabel: true
        },
        tooltip: {
            show: true,
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            // show: false
        },
        yAxis: {
            x: 'center',
            type: 'value',
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
            // show: false
        },
        series: [{
                name: 'A',
                type: 'line',
                smooth: true,
                data: [18, 36, 65, 30, 78, 40, 33]
            }, {
                name: 'B',
                type: 'line',
                smooth: true,
                data: [12, 50, 51, 35, 70, 30, 20]
            }, {
                name: 'C',
                type: 'line',
                smooth: true,
                data: [10, 30, 31, 50, 40, 20, 10]
            }]
    };
    chart.setOption(option);
    return chart;
}
__MOR_PAGE__({
    onShareAppMessage: function (res) {
        return {
            title: 'ECharts 可以在微信小程序中使用啦！',
            path: '/pages/index/index',
            success: function () { },
            fail: function () { }
        };
    },
    data: {
        ec: {
            onInit: initChart
        }
    },
    onShow() {
        var _a, _b;
        (_b = (_a = this === null || this === void 0 ? void 0 : this.getTabBar) === null || _a === void 0 ? void 0 : _a.call(this)) === null || _b === void 0 ? void 0 : _b.init();
    },
    onReady() {
    }
}, "w");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./pages/line/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map