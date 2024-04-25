"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["pages/usercenter/components/ui-address-item/index"],{

/***/ "./pages/usercenter/components/ui-address-item/index.js":
/*!**************************************************************!*\
  !*** ./pages/usercenter/components/ui-address-item/index.js ***!
  \**************************************************************/
/***/ (function() {


Component({
    options: {
        addGlobalClass: true,
        multipleSlots: true,
    },
    properties: {
        address: {
            type: Object,
            value: {},
        },
        customIcon: {
            type: String,
            value: 'edit-1',
        },
        extraSpace: {
            type: Boolean,
            value: true,
        },
        isDrawLine: {
            type: Boolean,
            value: true,
        },
    },
    externalClasses: [
        'item-wrapper-class',
        'title-class',
        'default-tag-class',
        'normal-tag-class',
        'address-info-class',
        'delete-class',
    ],
    methods: {
        onDelete: function (e) {
            var item = e.currentTarget.dataset.item;
            this.triggerEvent('onDelete', item);
        },
        onSelect: function (e) {
            var item = e.currentTarget.dataset.item;
            this.triggerEvent('onSelect', item);
        },
        onEdit: function (e) {
            var item = e.currentTarget.dataset.item;
            this.triggerEvent('onEdit', item);
        },
    },
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./pages/usercenter/components/ui-address-item/index.js"));
/******/ }
]);
//# sourceMappingURL=index.js.map