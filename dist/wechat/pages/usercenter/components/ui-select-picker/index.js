"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["pages/usercenter/components/ui-select-picker/index"],{

/***/ "./pages/usercenter/components/ui-select-picker/index.js":
/*!***************************************************************!*\
  !*** ./pages/usercenter/components/ui-select-picker/index.js ***!
  \***************************************************************/
/***/ (function() {


Component({
    properties: {
        show: {
            type: Boolean,
            observer: function (show) {
                if (!show)
                    return;
                this.updateDivisions();
            },
        },
        title: {
            type: String,
            value: '',
        },
        value: {
            type: String,
            value: '',
            observer: function () {
                if (!this.data.show)
                    return;
                this.updateDivisions();
            },
        },
        pickerOptions: {
            type: Array,
            value: [],
            observer: function () {
                if (!this.data.show)
                    return;
                this.updateDivisions();
            },
        },
        headerVisible: {
            type: Boolean,
            value: true,
        },
    },
    data: {
        pickerValue: [],
    },
    methods: {
        updateDivisions: function () {
            var _this = this;
            var _a = this.data, pickerOptions = _a.pickerOptions, value = _a.value;
            var index = (pickerOptions || []).findIndex(function (item) { return item.code === value; });
            setTimeout(function () {
                _this.setData({ pickerValue: index >= 0 ? [index] : [0] });
            }, 0);
        },
        getAreaByIndex: function (indexes) {
            var pickerOptions = this.data.pickerOptions;
            return pickerOptions[indexes.toString()];
        },
        onChange: function (e) {
            var currentValue = e.detail.value;
            var target = this.getAreaByIndex(currentValue);
            if (target === null)
                return;
            this.setData({ pickerValue: currentValue });
            this.triggerEvent('change', { value: target.code, target: target });
        },
        onConfirm: function () {
            var target = this.getAreaByIndex(this.data.pickerValue);
            this.triggerEvent('confirm', { value: target === null || target === void 0 ? void 0 : target.code, target: target });
        },
        onClose: function () {
            this.triggerEvent('close');
        },
    },
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./pages/usercenter/components/ui-select-picker/index.js"));
/******/ }
]);
//# sourceMappingURL=index.js.map