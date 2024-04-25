"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["pages/bar/index"],{

/***/ "./pages/bar/index.js":
/*!****************************!*\
  !*** ./pages/bar/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _ec_canvas_echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ec-canvas/echarts */ "./ec-canvas/echarts.js");
/* harmony import */ var _ec_canvas_echarts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ec_canvas_echarts__WEBPACK_IMPORTED_MODULE_0__);

var chart = null;
function initChart(canvas, width, height, dpr) {
    chart = _ec_canvas_echarts__WEBPACK_IMPORTED_MODULE_0__.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
    });
    canvas.setChart(chart);
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            confine: true
        },
        legend: {
            data: ['热度', '正面', '负面']
        },
        grid: {
            left: 20,
            right: 20,
            bottom: 15,
            top: 40,
            containLabel: true
        },
        xAxis: [
            {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#999'
                    }
                },
                axisLabel: {
                    color: '#666'
                }
            }
        ],
        yAxis: [
            {
                type: 'category',
                axisTick: { show: false },
                data: ['汽车之家', '今日头条', '百度贴吧', '一点资讯', '微信', '微博', '知乎'],
                axisLine: {
                    lineStyle: {
                        color: '#999'
                    }
                },
                axisLabel: {
                    color: '#666'
                }
            }
        ],
        series: [
            {
                name: '热度',
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                data: [300, 270, 340, 344, 300, 320, 310],
                itemStyle: {
                // emphasis: {
                //   color: '#37a2da'
                // }
                }
            },
            {
                name: '正面',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true
                    }
                },
                data: [120, 102, 141, 174, 190, 250, 220],
                itemStyle: {
                // emphasis: {
                //   color: '#32c5e9'
                // }
                }
            },
            {
                name: '负面',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'left'
                    }
                },
                data: [-20, -32, -21, -34, -90, -130, -110],
                itemStyle: {
                // emphasis: {
                //   color: '#67e0e3'
                // }
                }
            }
        ]
    };
    chart.setOption(option);
    return chart;
}
Page({
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
    onReady: function () {
        setTimeout(function () {
            // 获取 chart 实例的方式
            // console.log(chart)
        }, 2000);
    }
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.c"], function() { return __webpack_exec__("./pages/bar/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map