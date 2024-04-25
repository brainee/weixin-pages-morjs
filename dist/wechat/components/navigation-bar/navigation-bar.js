"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["components/navigation-bar/navigation-bar"],{

/***/ "./components/navigation-bar/navigation-bar.js":
/*!*****************************************************!*\
  !*** ./components/navigation-bar/navigation-bar.js ***!
  \*****************************************************/
/***/ (function() {


Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    /**
     * 组件的属性列表
     */
    properties: {
        extClass: {
            type: String,
            value: ''
        },
        title: {
            type: String,
            value: ''
        },
        background: {
            type: String,
            value: ''
        },
        color: {
            type: String,
            value: ''
        },
        back: {
            type: Boolean,
            value: true
        },
        loading: {
            type: Boolean,
            value: false
        },
        homeButton: {
            type: Boolean,
            value: false,
        },
        animated: {
            // 显示隐藏的时候opacity动画效果
            type: Boolean,
            value: true
        },
        show: {
            // 显示隐藏导航，隐藏的时候navigation-bar的高度占位还在
            type: Boolean,
            value: true,
            observer: '_showChange'
        },
        // back为true的时候，返回的页面深度
        delta: {
            type: Number,
            value: 1
        },
    },
    /**
     * 组件的初始数据
     */
    data: {
        displayStyle: ''
    },
    lifetimes: {
        attached: function () {
            var _this = this;
            var rect = wx.getMenuButtonBoundingClientRect();
            wx.getSystemInfo({
                success: function (res) {
                    var isAndroid = res.platform === 'android';
                    var isDevtools = res.platform === 'devtools';
                    _this.setData({
                        ios: !isAndroid,
                        innerPaddingRight: "padding-right: " + (res.windowWidth - rect.left) + "px",
                        leftWidth: "width: " + (res.windowWidth - rect.left) + "px",
                        safeAreaTop: isDevtools || isAndroid ? "height: calc(var(--height) + " + res.safeArea.top + "px); padding-top: " + res.safeArea.top + "px" : ""
                    });
                }
            });
        },
    },
    /**
     * 组件的方法列表
     */
    methods: {
        _showChange: function (show) {
            xxx;
            var animated = this.data.animated;
            var displayStyle = '';
            if (animated) {
                displayStyle = "opacity: " + (show ? '1' : '0') + ";transition:opacity 0.5s;";
            }
            else {
                displayStyle = "display: " + (show ? '' : 'none');
            }
            this.setData({
                displayStyle: displayStyle
            });
        },
        back: function () {
            var data = this.data;
            if (data.delta) {
                wx.navigateBack({
                    delta: data.delta
                });
            }
            this.triggerEvent('back', { delta: data.delta }, {});
        }
    },
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./components/navigation-bar/navigation-bar.js"));
/******/ }
]);
//# sourceMappingURL=navigation-bar.js.map