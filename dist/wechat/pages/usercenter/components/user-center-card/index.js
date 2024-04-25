"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["pages/usercenter/components/user-center-card/index"],{

/***/ "./pages/usercenter/components/user-center-card/index.js":
/*!***************************************************************!*\
  !*** ./pages/usercenter/components/user-center-card/index.js ***!
  \***************************************************************/
/***/ (function() {


var AuthStepType = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
};
Component({
    options: {
        multipleSlots: true,
    },
    properties: {
        currAuthStep: {
            type: Number,
            value: AuthStepType.ONE,
        },
        userInfo: {
            type: Object,
            value: {},
        },
        isNeedGetUserInfo: {
            type: Boolean,
            value: false,
        },
    },
    data: {
        defaultAvatarUrl: 'https://cdn-we-retail.ym.tencent.com/miniapp/usercenter/icon-user-center-avatar@2x.png',
        AuthStepType: AuthStepType,
    },
    methods: {
        gotoUserEditPage: function () {
            this.triggerEvent('gotoUserEditPage');
        },
    },
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./pages/usercenter/components/user-center-card/index.js"));
/******/ }
]);
//# sourceMappingURL=index.js.map