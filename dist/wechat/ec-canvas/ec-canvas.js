"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["ec-canvas/ec-canvas"],{

/***/ "./ec-canvas/ec-canvas.js":
/*!********************************!*\
  !*** ./ec-canvas/ec-canvas.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _wx_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wx-canvas */ "./ec-canvas/wx-canvas.js");
/* harmony import */ var _echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts */ "./ec-canvas/echarts.js");
/* harmony import */ var _echarts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_echarts__WEBPACK_IMPORTED_MODULE_1__);


var ctx;
function compareVersion(v1, v2) {
    v1 = v1.split('.');
    v2 = v2.split('.');
    var len = Math.max(v1.length, v2.length);
    while (v1.length < len) {
        v1.push('0');
    }
    while (v2.length < len) {
        v2.push('0');
    }
    for (var i = 0; i < len; i++) {
        var num1 = parseInt(v1[i]);
        var num2 = parseInt(v2[i]);
        if (num1 > num2) {
            return 1;
        }
        else if (num1 < num2) {
            return -1;
        }
    }
    return 0;
}
Component({
    properties: {
        canvasId: {
            type: String,
            value: 'ec-canvas'
        },
        ec: {
            type: Object
        },
        forceUseOldCanvas: {
            type: Boolean,
            value: false
        }
    },
    data: {
        isUseNewCanvas: false
    },
    ready: function () {
        // Disable prograssive because drawImage doesn't support DOM as parameter
        // See https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.drawImage.html
        _echarts__WEBPACK_IMPORTED_MODULE_1__.registerPreprocessor(function (option) {
            if (option && option.series) {
                if (option.series.length > 0) {
                    option.series.forEach(function (series) {
                        series.progressive = 0;
                    });
                }
                else if (typeof option.series === 'object') {
                    option.series.progressive = 0;
                }
            }
        });
        if (!this.data.ec) {
            console.warn('组件需绑定 ec 变量，例：<ec-canvas id="mychart-dom-bar" '
                + 'canvas-id="mychart-bar" ec="{{ ec }}"></ec-canvas>');
            return;
        }
        if (!this.data.ec.lazyLoad) {
            this.init();
        }
    },
    methods: {
        init: function (callback) {
            var _a;
            var version = (_a = wx.getSystemInfoSync) === null || _a === void 0 ? void 0 : _a.call(wx).SDKVersion;
            var canUseNewCanvas = compareVersion(version, '2.9.0') >= 0;
            var forceUseOldCanvas = this.data.forceUseOldCanvas;
            var isUseNewCanvas = canUseNewCanvas && !forceUseOldCanvas;
            this.setData({ isUseNewCanvas: isUseNewCanvas });
            if (forceUseOldCanvas && canUseNewCanvas) {
                console.warn('开发者强制使用旧canvas,建议关闭');
            }
            if (isUseNewCanvas) {
                // console.log('微信基础库版本大于2.9.0，开始使用<canvas type="2d"/>');
                // 2.9.0 可以使用 <canvas type="2d"></canvas>
                this.initByNewWay(callback);
            }
            else {
                var isValid = compareVersion(version, '1.9.91') >= 0;
                if (!isValid) {
                    console.error('微信基础库版本过低，需大于等于 1.9.91。'
                        + '参见：https://github.com/ecomfe/echarts-for-weixin'
                        + '#%E5%BE%AE%E4%BF%A1%E7%89%88%E6%9C%AC%E8%A6%81%E6%B1%82');
                    return;
                }
                else {
                    console.warn('建议将微信基础库调整大于等于2.9.0版本。升级后绘图将有更好性能');
                    this.initByOldWay(callback);
                }
            }
        },
        getCanvasAndCtx: function () {
            var _a, _b;
            //ref https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM
            var myCanvas = (_b = (_a = document.querySelector("." + this.data.canvasId)) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("canvas");
            if (myCanvas) {
                ctx = myCanvas.getContext("2d");
                console.log("[zy]getCanvasAndCtx if", ctx, ctx.canvas);
            }
            else {
                console.log("[zy]getCanvasAndCtx else");
                myCanvas = document.createElement("canvas");
                myCanvas.canvasId = this.data.canvasId;
                myCanvas.zy = "createElement";
                myCanvas.className = "ec-canvas";
                document.body.appendChild(myCanvas);
                ctx = myCanvas.getContext("2d");
                // ctx.canvas=myCanvas;
            }
            if (!ctx.canvas) {
                console.log("[zy]getCanvasAndCtx ctx.canvas is null");
                ctx.canvas = myCanvas;
            }
            return { ctx: ctx, canvas: myCanvas };
        },
        initByOldWay: function (callback) {
            var _this = this;
            // 1.9.91 <= version < 2.9.0：原来的方式初始化
            var ctx = wx.createCanvasContext(this.data.canvasId, this);
            var canvas;
            if (ctx.canvas) {
                canvas = new _wx_canvas__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, this.data.canvasId, false);
                console.log("[zy]initByOldWay if", ctx, canvas);
            }
            else {
                var obj = this.getCanvasAndCtx();
                ctx = obj.ctx;
                canvas = new _wx_canvas__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, this.data.canvasId, true, obj.canvas);
                console.log("[zy]initByOldWay else", ctx, obj.canvas);
            }
            if (_echarts__WEBPACK_IMPORTED_MODULE_1__.setPlatformAPI) {
                _echarts__WEBPACK_IMPORTED_MODULE_1__.setPlatformAPI({
                    createCanvas: function () { return canvas; },
                });
            }
            else {
                _echarts__WEBPACK_IMPORTED_MODULE_1__.setCanvasCreator(function () { return canvas; });
            }
            ;
            // const canvasDpr = wx.getSystemInfoSync?.().pixelRatio // 微信旧的canvas不能传入dpr
            var canvasDpr = 1;
            var query = wx.createSelectorQuery().in(this);
            console.log("[zy]initByOldWay query", query);
            query.select('.ec-canvas').boundingClientRect(function (res) {
                if (typeof callback === 'function') {
                    _this.chart = callback(canvas, res.width, res.height, canvasDpr);
                }
                else if (_this.data.ec && typeof _this.data.ec.onInit === 'function') {
                    _this.chart = _this.data.ec.onInit(canvas, res.width, res.height, canvasDpr);
                }
                else {
                    _this.triggerEvent('init', {
                        canvas: canvas,
                        width: res.width,
                        height: res.height,
                        canvasDpr: canvasDpr // 增加了dpr，可方便外面echarts.init
                    });
                }
            }).exec();
        },
        initByNewWay: function (callback) {
            var _this = this;
            // version >= 2.9.0：使用新的方式初始化
            var query = wx.createSelectorQuery().in(this);
            console.log("[zy]initByNewWay query", query);
            query
                .select('.ec-canvas')
                .fields({ node: true, size: true })
                .exec(function (res) {
                var _a;
                var canvasNode = res[0].node;
                _this.canvasNode = canvasNode;
                var canvasDpr = (_a = wx.getSystemInfoSync) === null || _a === void 0 ? void 0 : _a.call(wx).pixelRatio;
                var canvasWidth = res[0].width;
                var canvasHeight = res[0].height;
                var ctx = canvasNode.getContext('2d');
                var canvas = new _wx_canvas__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, _this.data.canvasId, true, canvasNode);
                if (_echarts__WEBPACK_IMPORTED_MODULE_1__.setPlatformAPI) {
                    _echarts__WEBPACK_IMPORTED_MODULE_1__.setPlatformAPI({
                        createCanvas: function () { return canvas; },
                        loadImage: function (src, onload, onerror) {
                            if (canvasNode.createImage) {
                                var image = canvasNode.createImage();
                                image.onload = onload;
                                image.onerror = onerror;
                                image.src = src;
                                return image;
                            }
                            console.error('加载图片依赖 `Canvas.createImage()` API，要求小程序基础库版本在 2.7.0 及以上。');
                            // PENDING fallback?
                        }
                    });
                }
                else {
                    _echarts__WEBPACK_IMPORTED_MODULE_1__.setCanvasCreator(function () { return canvas; });
                }
                if (typeof callback === 'function') {
                    _this.chart = callback(canvas, canvasWidth, canvasHeight, canvasDpr);
                }
                else if (_this.data.ec && typeof _this.data.ec.onInit === 'function') {
                    _this.chart = _this.data.ec.onInit(canvas, canvasWidth, canvasHeight, canvasDpr);
                }
                else {
                    _this.triggerEvent('init', {
                        canvas: canvas,
                        width: canvasWidth,
                        height: canvasHeight,
                        dpr: canvasDpr
                    });
                }
            });
        },
        canvasToTempFilePath: function (opt) {
            var _this = this;
            if (this.data.isUseNewCanvas) {
                // 新版
                var query = wx.createSelectorQuery().in(this);
                query
                    .select('.ec-canvas')
                    .fields({ node: true, size: true })
                    .exec(function (res) {
                    var canvasNode = res[0].node;
                    opt.canvas = canvasNode;
                    wx.canvasToTempFilePath(opt);
                });
            }
            else {
                // 旧的
                if (!opt.canvasId) {
                    opt.canvasId = this.data.canvasId;
                }
                ctx.draw(true, function () {
                    wx.canvasToTempFilePath(opt, _this);
                });
            }
        },
        touchStart: function (e) {
            if (this.chart && e.touches.length > 0) {
                var touch = e.touches[0];
                var handler = this.chart.getZr().handler;
                handler.dispatch('mousedown', {
                    zrX: touch.x,
                    zrY: touch.y,
                    preventDefault: function () { },
                    stopImmediatePropagation: function () { },
                    stopPropagation: function () { }
                });
                handler.dispatch('mousemove', {
                    zrX: touch.x,
                    zrY: touch.y,
                    preventDefault: function () { },
                    stopImmediatePropagation: function () { },
                    stopPropagation: function () { }
                });
                handler.processGesture(wrapTouch(e), 'start');
            }
        },
        touchMove: function (e) {
            if (this.chart && e.touches.length > 0) {
                var touch = e.touches[0];
                var handler = this.chart.getZr().handler;
                handler.dispatch('mousemove', {
                    zrX: touch.x,
                    zrY: touch.y,
                    preventDefault: function () { },
                    stopImmediatePropagation: function () { },
                    stopPropagation: function () { }
                });
                handler.processGesture(wrapTouch(e), 'change');
            }
        },
        touchEnd: function (e) {
            if (this.chart) {
                var touch = e.changedTouches ? e.changedTouches[0] : {};
                var handler = this.chart.getZr().handler;
                handler.dispatch('mouseup', {
                    zrX: touch.x,
                    zrY: touch.y,
                    preventDefault: function () { },
                    stopImmediatePropagation: function () { },
                    stopPropagation: function () { }
                });
                handler.dispatch('click', {
                    zrX: touch.x,
                    zrY: touch.y,
                    preventDefault: function () { },
                    stopImmediatePropagation: function () { },
                    stopPropagation: function () { }
                });
                handler.processGesture(wrapTouch(e), 'end');
            }
        }
    }
});
function wrapTouch(event) {
    for (var i = 0; i < event.touches.length; ++i) {
        var touch = event.touches[i];
        touch.offsetX = touch.x;
        touch.offsetY = touch.y;
    }
    return event;
}


/***/ }),

/***/ "./ec-canvas/wx-canvas.js":
/*!********************************!*\
  !*** ./ec-canvas/wx-canvas.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

var WxCanvas = /** @class */ (function () {
    function WxCanvas(ctx, canvasId, isNew, canvasNode) {
        this.ctx = ctx;
        this.canvasId = canvasId;
        this.chart = null;
        this.isNew = isNew;
        if (isNew) {
            this.canvasNode = canvasNode;
        }
        else {
            this._initStyle(ctx);
        }
        // this._initCanvas(zrender, ctx);
        this._initEvent();
    }
    WxCanvas.prototype.getContext = function (contextType) {
        if (contextType === '2d') {
            return this.ctx;
        }
    };
    // canvasToTempFilePath(opt) {
    //   if (!opt.canvasId) {
    //     opt.canvasId = this.canvasId;
    //   }
    //   return wx.canvasToTempFilePath(opt, this);
    // }
    WxCanvas.prototype.setChart = function (chart) {
        this.chart = chart;
    };
    WxCanvas.prototype.addEventListener = function () {
        // noop
    };
    WxCanvas.prototype.attachEvent = function () {
        // noop
    };
    WxCanvas.prototype.detachEvent = function () {
        // noop
    };
    WxCanvas.prototype._initCanvas = function (zrender, ctx) {
        zrender.util.getContext = function () {
            return ctx;
        };
        zrender.util.$override('measureText', function (text, font) {
            ctx.font = font || '12px sans-serif';
            return ctx.measureText(text);
        });
    };
    WxCanvas.prototype._initStyle = function (ctx) {
        ctx.createRadialGradient = function () {
            return ctx.createCircularGradient(arguments);
        };
    };
    WxCanvas.prototype._initEvent = function () {
        var _this = this;
        this.event = {};
        var eventNames = [{
                wxName: 'touchStart',
                ecName: 'mousedown'
            }, {
                wxName: 'touchMove',
                ecName: 'mousemove'
            }, {
                wxName: 'touchEnd',
                ecName: 'mouseup'
            }, {
                wxName: 'touchEnd',
                ecName: 'click'
            }];
        eventNames.forEach(function (name) {
            _this.event[name.wxName] = function (e) {
                var touch = e.touches[0];
                _this.chart.getZr().handler.dispatch(name.ecName, {
                    zrX: name.wxName === 'tap' ? touch.clientX : touch.x,
                    zrY: name.wxName === 'tap' ? touch.clientY : touch.y,
                    preventDefault: function () { },
                    stopImmediatePropagation: function () { },
                    stopPropagation: function () { }
                });
            };
        });
    };
    Object.defineProperty(WxCanvas.prototype, "width", {
        get: function () {
            if (this.canvasNode)
                return this.canvasNode.width;
            return 0;
        },
        set: function (w) {
            if (this.canvasNode)
                this.canvasNode.width = w;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WxCanvas.prototype, "height", {
        get: function () {
            if (this.canvasNode)
                return this.canvasNode.height;
            return 0;
        },
        set: function (h) {
            if (this.canvasNode)
                this.canvasNode.height = h;
        },
        enumerable: false,
        configurable: true
    });
    return WxCanvas;
}());
/* harmony default export */ __webpack_exports__["default"] = (WxCanvas);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.c"], function() { return __webpack_exec__("./ec-canvas/ec-canvas.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=ec-canvas.js.map