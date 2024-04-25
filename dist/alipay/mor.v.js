var regeneratorRuntime;(my["mor_modules"] = my["mor_modules"] || []).push([["mor.v"],{

/***/ "../node_modules/@morjs/api/esm/index.js":
/*!***********************************************!*\
  !*** ../node_modules/@morjs/api/esm/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mor": function() { return /* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.mor; }
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "../node_modules/@morjs/api/esm/api.js");




/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_api__WEBPACK_IMPORTED_MODULE_0__.mor);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/esm/index.js":
/*!************************************************!*\
  !*** ../node_modules/@morjs/core/esm/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createApp": function() { return /* reexport safe */ _app__WEBPACK_IMPORTED_MODULE_0__.createApp; },
/* harmony export */   "createComponent": function() { return /* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.createComponent; },
/* harmony export */   "createPage": function() { return /* reexport safe */ _page__WEBPACK_IMPORTED_MODULE_2__.createPage; }
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "../node_modules/@morjs/core/esm/app.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "../node_modules/@morjs/core/esm/component.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page */ "../node_modules/@morjs/core/esm/page.js");








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/esm/plugins/contextPlugin.js":
/*!****************************************************************!*\
  !*** ../node_modules/@morjs/core/esm/plugins/contextPlugin.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextPlugin": function() { return /* binding */ ContextPlugin; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _morjs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/runtime-base/esm/logger.js");


/**
 * context 插件
 */
var ContextPlugin = /** @class */ (function () {
    function ContextPlugin() {
        var _this = this;
        this.pluginName = 'MorContextPlugin';
        this.apply = function (hooks) {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var $plugin = _this;
            hooks.appOnInit.tap(_this.pluginName, function (appOptions) {
                if (appOptions.$context) {
                    _morjs_api__WEBPACK_IMPORTED_MODULE_0__.logger.error($plugin.pluginName, '请去除业务代码中的对 $context 的赋值，防止出现不可预知的问题。');
                }
            });
            hooks.appOnLaunch.tap(_this.pluginName, function (options) {
                var query = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, ((options === null || options === void 0 ? void 0 : options.query) || {}));
                this.$context = { appQuery: query };
            });
            hooks.pageOnInit.tap(_this.pluginName, function (pageOptions) {
                if (pageOptions.$context) {
                    _morjs_api__WEBPACK_IMPORTED_MODULE_0__.logger.error($plugin.pluginName, '请去除业务代码中的对 $context 的赋值，防止出现不可预知的问题。');
                }
            });
            hooks.pageOnLoad.tap(_this.pluginName, function (query) {
                var _a, _b;
                var appQuery = {};
                if (typeof getApp !== 'undefined' && ((_a = getApp()) === null || _a === void 0 ? void 0 : _a.$context)) {
                    appQuery = ((_b = getApp().$context) === null || _b === void 0 ? void 0 : _b.appQuery) || {};
                }
                this.$context = {
                    pageQuery: query,
                    appQuery: appQuery
                };
            });
        };
    }
    return ContextPlugin;
}());

//# sourceMappingURL=contextPlugin.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/esm/plugins/eventPlugin.js":
/*!**************************************************************!*\
  !*** ../node_modules/@morjs/core/esm/plugins/eventPlugin.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventPlugin": function() { return /* binding */ EventPlugin; }
/* harmony export */ });
/* harmony import */ var _morjs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/runtime-base/esm/event.js");
/* harmony import */ var _morjs_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/runtime-base/esm/logger.js");

// 默认 event 使用标记
var IS_DEFAULT_EVENT_USED = false;
/**
 * event 插件
 */
var EventPlugin = /** @class */ (function () {
    function EventPlugin() {
        var _this = this;
        this.pluginName = 'MorEventPlugin';
        this.apply = function (hooks) {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var $plugin = _this;
            // 优先使用全局 event
            var $event = IS_DEFAULT_EVENT_USED
                ? (0,_morjs_api__WEBPACK_IMPORTED_MODULE_0__.createEvent)('createByMorEventPlugin')
                : _morjs_api__WEBPACK_IMPORTED_MODULE_0__.event;
            IS_DEFAULT_EVENT_USED = true;
            // app 注入 $event
            hooks.appOnInit.tap(_this.pluginName, function (appOptions) {
                if (appOptions.$event) {
                    _morjs_api__WEBPACK_IMPORTED_MODULE_1__.logger.error($plugin.pluginName, '请去除业务代码中的对 $event 的赋值，防止出现不可预知的问题。');
                }
                appOptions.$event = $event;
            });
            // 由于存在非 createApp 初始化的情况，appOnLaunch 的时候补偿加一下
            hooks.appOnLaunch.tap(_this.pluginName, function () {
                if (!this.$event)
                    this.$event = $event;
            });
            // 页面注入 $event
            hooks.pageOnInit.tap(_this.pluginName, function (pageOptions) {
                if (pageOptions.$event) {
                    _morjs_api__WEBPACK_IMPORTED_MODULE_1__.logger.error($plugin.pluginName, '请去除业务代码中的对 $event 的赋值，防止出现不可预知的问题。');
                }
                pageOptions.$event = $event;
            });
        };
    }
    return EventPlugin;
}());

//# sourceMappingURL=eventPlugin.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/esm/utils/constants.js":
/*!**********************************************************!*\
  !*** ../node_modules/@morjs/core/esm/utils/constants.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_ON_HIDE_EVENT": function() { return /* binding */ APP_ON_HIDE_EVENT; },
/* harmony export */   "APP_ON_SHOW_EVENT": function() { return /* binding */ APP_ON_SHOW_EVENT; },
/* harmony export */   "MOR_EVENT_METHOD_PREFIX": function() { return /* binding */ MOR_EVENT_METHOD_PREFIX; },
/* harmony export */   "MOR_EVENT_PREFIX": function() { return /* binding */ MOR_EVENT_PREFIX; }
/* harmony export */ });
/**
 * mor 事件名称前缀
 */
var MOR_EVENT_PREFIX = '$mor:';
/**
 * mor 注入的事件方法前缀
 */
var MOR_EVENT_METHOD_PREFIX = "".concat(MOR_EVENT_PREFIX, "event:");
/**
 * 监听 app 事件名称
 */
var APP_ON_SHOW_EVENT = "".concat(MOR_EVENT_PREFIX, "appOnShow");
var APP_ON_HIDE_EVENT = "".concat(MOR_EVENT_PREFIX, "appOnHide");
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/esm/utils/init.js":
/*!*****************************************************!*\
  !*** ../node_modules/@morjs/core/esm/utils/init.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var _morjs_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/runtime-base/esm/utils/asArray.js");
/* harmony import */ var _morjs_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/runtime-base/esm/hooks.js");
/* harmony import */ var _plugins_contextPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plugins/contextPlugin */ "../node_modules/@morjs/core/esm/plugins/contextPlugin.js");
/* harmony import */ var _plugins_eventPlugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugins/eventPlugin */ "../node_modules/@morjs/core/esm/plugins/eventPlugin.js");



var IS_DEFAULT_HOOKS_USED = false;
/**
 * 初始化, 创建 $hooks 及应用 solutions
 * @param solution 解决方案
 */
function init(solution) {
    var solutions = [
        function () {
            return {
                plugins: [new _plugins_eventPlugin__WEBPACK_IMPORTED_MODULE_0__.EventPlugin(), new _plugins_contextPlugin__WEBPACK_IMPORTED_MODULE_1__.ContextPlugin()]
            };
        }
    ].concat((0,_morjs_api__WEBPACK_IMPORTED_MODULE_2__.asArray)(solution));
    var $hooks = IS_DEFAULT_HOOKS_USED
        ? (0,_morjs_api__WEBPACK_IMPORTED_MODULE_3__.createHooks)('initWithSolutions')
        : _morjs_api__WEBPACK_IMPORTED_MODULE_3__.hooks;
    IS_DEFAULT_HOOKS_USED = true;
    var pluginsNames = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_3__.applySolutions)($hooks, solutions);
    return {
        $hooks: $hooks,
        pluginsNames: pluginsNames
    };
}
//# sourceMappingURL=init.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/esm/utils/invokeHook.js":
/*!***********************************************************!*\
  !*** ../node_modules/@morjs/core/esm/utils/invokeHook.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invokeHook": function() { return /* binding */ invokeHook; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _morjs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/runtime-base/esm/utils/getSharedProperty.js");
/* harmony import */ var _morjs_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/runtime-base/esm/logger.js");


/**
 * 调用 hook
 * @param hookName hook 名字
 */
var invokeHook = function (hookName) {
    return function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var hook = (_a = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_0__.getSharedProperty)('$morHooks', this)) === null || _a === void 0 ? void 0 : _a[hookName];
        if (typeof (hook === null || hook === void 0 ? void 0 : hook.call) === 'function') {
            hook.call.apply(hook, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([this], args, false));
        }
        else {
            _morjs_api__WEBPACK_IMPORTED_MODULE_2__.logger.error("".concat(hookName, " \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684 hook"));
        }
    };
};
//# sourceMappingURL=invokeHook.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/esm/utils/invokeOriginalFunction.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@morjs/core/esm/utils/invokeOriginalFunction.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invokeOriginalFunction": function() { return /* binding */ invokeOriginalFunction; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");

/**
 * 调用原本的生命周期函数
 * @param fnName 事件名
 * @param obj 事件方法来源
 * @param shouldDeleteProperty 是否移除属性, 一些生命周期函数需要保存后并移除, 以避免重复触发
 */
var invokeOriginalFunction = function (fnName, obj, shouldDeleteProperty) {
    if (shouldDeleteProperty === void 0) { shouldDeleteProperty = false; }
    var originalFn = obj[fnName];
    if (shouldDeleteProperty && obj && fnName && fnName in obj) {
        delete obj[fnName];
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (originalFn && typeof originalFn === 'function') {
            return originalFn.call.apply(originalFn, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([this], args, false));
        }
    };
};
//# sourceMappingURL=invokeOriginalFunction.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/esm/utils/isPromise.js":
/*!**********************************************************!*\
  !*** ../node_modules/@morjs/core/esm/utils/isPromise.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPromise": function() { return /* binding */ isPromise; }
/* harmony export */ });
function isPromise(obj) {
    return (!!obj &&
        (typeof obj === 'object' || typeof obj === 'function') &&
        typeof obj.then === 'function');
}
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/badge/props.js":
/*!***************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/badge/props.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";

const props = {
  color: {
    type: String,
    value: ""
  },
  content: {
    type: String,
    value: ""
  },
  count: {
    type: null,
    value: 0
  },
  dot: {
    type: Boolean,
    value: false
  },
  externalClasses: {
    type: Array
  },
  maxCount: {
    type: Number,
    value: 99
  },
  offset: {
    type: Array
  },
  shape: {
    type: String,
    value: "circle"
  },
  showZero: {
    type: Boolean,
    value: false
  },
  size: {
    type: String,
    value: "medium"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/button/props.js":
/*!****************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/button/props.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";

const props = {
  tId: {
    type: String,
    value: ""
  },
  block: {
    type: Boolean,
    value: false
  },
  content: {
    type: String
  },
  customDataset: {
    type: null
  },
  disabled: {
    type: Boolean,
    value: false
  },
  externalClasses: {
    type: Array
  },
  ghost: {
    type: Boolean,
    value: false
  },
  icon: {
    type: null
  },
  loading: {
    type: Boolean,
    value: false
  },
  loadingProps: {
    type: Object
  },
  shape: {
    type: String,
    value: "rectangle"
  },
  size: {
    type: String,
    value: "medium"
  },
  theme: {
    type: String,
    value: "default"
  },
  type: {
    type: String
  },
  variant: {
    type: String,
    value: "base"
  },
  openType: {
    type: String
  },
  hoverClass: {
    type: String,
    value: ""
  },
  hoverStopPropagation: {
    type: Boolean,
    value: false
  },
  hoverStartTime: {
    type: Number,
    value: 20
  },
  hoverStayTime: {
    type: Number,
    value: 70
  },
  lang: {
    type: String,
    value: "en"
  },
  sessionFrom: {
    type: String,
    value: ""
  },
  sendMessageTitle: {
    type: String,
    value: ""
  },
  sendMessagePath: {
    type: String,
    value: ""
  },
  sendMessageImg: {
    type: String,
    value: ""
  },
  appParameter: {
    type: String,
    value: ""
  },
  showMessageCard: {
    type: Boolean,
    value: false
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/cascader/props.js":
/*!******************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/cascader/props.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";

const props = {
  closeBtn: {
    type: Boolean,
    value: true
  },
  keys: {
    type: Object
  },
  options: {
    type: Array,
    value: []
  },
  placeholder: {
    type: String,
    value: "\u9009\u62E9\u9009\u9879"
  },
  subTitles: {
    type: Array,
    value: []
  },
  theme: {
    type: String,
    value: "step"
  },
  title: {
    type: String
  },
  value: {
    type: null,
    value: null
  },
  defaultValue: {
    type: null,
    value: null
  },
  visible: {
    type: Boolean,
    value: false
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/cell-group/props.js":
/*!********************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/cell-group/props.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";

const props = {
  bordered: {
    type: Boolean
  },
  externalClasses: {
    type: Array
  },
  theme: {
    type: String,
    value: "default"
  },
  title: {
    type: String,
    value: ""
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/cell/props.js":
/*!**************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/cell/props.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";

const props = {
  align: {
    type: String,
    value: "middle"
  },
  arrow: {
    type: null,
    value: false
  },
  bordered: {
    type: Boolean,
    value: true
  },
  description: {
    type: String
  },
  externalClasses: {
    type: Array
  },
  hover: {
    type: Boolean
  },
  image: {
    type: String
  },
  jumpType: {
    type: String,
    value: "navigateTo"
  },
  leftIcon: {
    type: null
  },
  note: {
    type: String
  },
  required: {
    type: Boolean,
    value: false
  },
  rightIcon: {
    type: null
  },
  title: {
    type: String
  },
  url: {
    type: String,
    value: ""
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/config.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/common/config.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prefix": function() { return /* binding */ prefix; }
/* harmony export */ });

/* harmony default export */ __webpack_exports__["default"] = ({
  prefix: "t"
});
const prefix = "t";


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/control.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/control.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useControl */

const defaultOption = {
  valueKey: "value",
  defaultValueKey: "defaultValue",
  changeEventName: "change",
  strict: true
};
function useControl(option = {}) {
  const { valueKey, defaultValueKey, changeEventName, strict } = Object.assign(Object.assign({}, defaultOption), option);
  const props = this.properties || {};
  const value = props[valueKey];
  const defaultValue = props[strict ? defaultValueKey : valueKey];
  let controlled = false;
  if (strict && typeof value !== "undefined" && value !== null) {
    controlled = true;
  }
  const set = (newVal, extObj, fn) => {
    this.setData(Object.assign({ [`_${valueKey}`]: newVal }, extObj), fn);
  };
  return {
    controlled,
    initValue: controlled ? value : defaultValue,
    set,
    get: () => {
      return this.data[`_${valueKey}`];
    },
    change: (newVal, customChangeData, customUpdateFn) => {
      this.triggerEvent(changeEventName, typeof customChangeData !== "undefined" ? customChangeData : newVal);
      if (controlled) {
        return;
      }
      if (typeof customUpdateFn === "function") {
        customUpdateFn();
      } else {
        set(newVal);
      }
    }
  };
}



/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/flatTool.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/flatTool.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPrototypeOf": function() { return /* binding */ getPrototypeOf; },
/* harmony export */   "isObject": function() { return /* binding */ isObject; },
/* harmony export */   "isPlainObject": function() { return /* binding */ isPlainObject; },
/* harmony export */   "iterateInheritedPrototype": function() { return /* binding */ iterateInheritedPrototype; },
/* harmony export */   "toObject": function() { return /* binding */ toObject; }
/* harmony export */ });

const getPrototypeOf = function(obj) {
  return Object.getPrototypeOf ? Object.getPrototypeOf(obj) : obj.__proto__;
};
const isObject = function isObject2(something) {
  const type = typeof something;
  return something !== null && (type === "function" || type === "object");
};
const iterateInheritedPrototype = function iterateInheritedPrototype2(callback, fromCtor, toCtor, includeToCtor = true) {
  let proto = fromCtor.prototype || fromCtor;
  const toProto = toCtor.prototype || toCtor;
  while (proto) {
    if (!includeToCtor && proto === toProto)
      break;
    if (callback(proto) === false)
      break;
    if (proto === toProto)
      break;
    proto = getPrototypeOf(proto);
  }
};
const toObject = function toObject2(something, options = {}) {
  const obj = {};
  if (!isObject(something))
    return obj;
  const excludes = options.excludes || ["constructor"];
  const { enumerable = true, configurable = 0, writable = 0 } = options;
  const defaultDesc = {};
  if (enumerable !== 0)
    defaultDesc.enumerable = enumerable;
  if (configurable !== 0)
    defaultDesc.configurable = configurable;
  if (writable !== 0)
    defaultDesc.writable = writable;
  iterateInheritedPrototype((proto) => {
    Object.getOwnPropertyNames(proto).forEach((key) => {
      if (excludes.indexOf(key) >= 0)
        return;
      if (Object.prototype.hasOwnProperty.call(obj, key))
        return;
      const desc = Object.getOwnPropertyDescriptor(proto, key);
      const fnKeys = ["get", "set", "value"];
      fnKeys.forEach((k) => {
        if (typeof desc[k] === "function") {
          const oldFn = desc[k];
          desc[k] = function(...args) {
            return oldFn.apply(Object.prototype.hasOwnProperty.call(options, "bindTo") ? options.bindTo : this, args);
          };
        }
      });
      Object.defineProperty(obj, key, Object.assign(Object.assign({}, desc), defaultDesc));
    });
  }, something, options.till || Object, false);
  return obj;
};
const isPlainObject = function isPlainObject2(something) {
  return Object.prototype.toString.call(something) === "[object Object]";
};


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/index.js":
/*!********************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/index.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuperComponent": function() { return /* reexport safe */ _superComponent__WEBPACK_IMPORTED_MODULE_0__.SuperComponent; },
/* harmony export */   "wxComponent": function() { return /* reexport safe */ _instantiationDecorator__WEBPACK_IMPORTED_MODULE_1__.wxComponent; }
/* harmony export */ });
/* harmony import */ var _superComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superComponent */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/superComponent.js");
/* harmony import */ var _instantiationDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instantiationDecorator */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/instantiationDecorator.js");
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/control.js");






/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/instantiationDecorator.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/instantiationDecorator.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;
var __MOR_COMPONENT__ = (__webpack_require__(/*! @morjs/core */ "../node_modules/@morjs/core/esm/index.js").createComponent);

"use strict";
__webpack_unused_export__ = ({ value: true });
exports.wxComponent = exports.toComponent = void 0;
var Behavior = (__webpack_require__(/*! ../node_modules/@morjs/runtime-mini/lib/common/behaviorOrMixin.js */ "../node_modules/@morjs/runtime-mini/lib/common/behaviorOrMixin.js").Behavior);
const flatTool_1 = __webpack_require__(/*! ./flatTool */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/flatTool.js");
const version_1 = __webpack_require__(/*! ../version */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/version.js");
const RawLifeCycles = ['Created', 'Attached', 'Ready', 'Moved', 'Detached', 'Error'];
const NativeLifeCycles = RawLifeCycles.map((k) => k.toLowerCase());
const ComponentNativeProps = [
    'properties',
    'data',
    'observers',
    'methods',
    'behaviors',
    ...NativeLifeCycles,
    'relations',
    'externalClasses',
    'options',
    'lifetimes',
    'pageLifeTimes',
    'definitionFilter',
];
const toComponent = function toComponent(options) {
    const { relations, behaviors = [], externalClasses = [] } = options;
    if (options.properties) {
        Object.keys(options.properties).forEach((k) => {
            let opt = options.properties[k];
            if (!(0, flatTool_1.isPlainObject)(opt)) {
                opt = { type: opt };
            }
            options.properties[k] = opt;
        });
        const ariaProps = [
            { key: 'ariaHidden', type: Boolean },
            { key: 'ariaRole', type: String },
            { key: 'ariaLabel', type: String },
            { key: 'ariaLabelledby', type: String },
            { key: 'ariaDescribedby', type: String },
            { key: 'ariaBusy', type: Boolean },
        ];
        ariaProps.forEach(({ key, type }) => {
            options.properties[key] = {
                type,
            };
        });
        options.properties.style = { type: String, value: '' };
        options.properties.customStyle = { type: String, value: '' };
    }
    if (!options.methods)
        options.methods = {};
    if (!options.lifetimes)
        options.lifetimes = {};
    const inits = {};
    if (relations) {
        const getRelations = (relation, path) => Behavior({
            created() {
                Object.defineProperty(this, `$${relation}`, {
                    get: () => {
                        const nodes = this.getRelationNodes(path) || [];
                        return relation === 'parent' ? nodes[0] : nodes;
                    },
                });
            },
        });
        const map = {};
        Object.keys(relations).forEach((path) => {
            const comp = relations[path];
            const relation = ['parent', 'ancestor'].includes(comp.type) ? 'parent' : 'children';
            const mixin = getRelations(relation, path);
            map[relation] = mixin;
        });
        behaviors.push(...Object.keys(map).map((key) => map[key]));
    }
    options.behaviors = [...behaviors];
    options.externalClasses = ['class', ...externalClasses];
    Object.getOwnPropertyNames(options).forEach((k) => {
        const desc = Object.getOwnPropertyDescriptor(options, k);
        if (!desc)
            return;
        if (NativeLifeCycles.indexOf(k) < 0 && typeof desc.value === 'function') {
            Object.defineProperty(options.methods, k, desc);
            delete options[k];
        }
        else if (ComponentNativeProps.indexOf(k) < 0) {
            inits[k] = desc;
        }
        else if (NativeLifeCycles.indexOf(k) >= 0) {
            options.lifetimes[k] = options[k];
        }
    });
    if (Object.keys(inits).length) {
        const oldCreated = options.lifetimes.created;
        const oldAttached = options.lifetimes.attached;
        const { controlledProps = [] } = options;
        options.lifetimes.created = function (...args) {
            Object.defineProperties(this, inits);
            if (oldCreated)
                oldCreated.apply(this, args);
        };
        options.lifetimes.attached = function (...args) {
            if (oldAttached)
                oldAttached.apply(this, args);
            controlledProps.forEach(({ key }) => {
                const defaultKey = `default${key.replace(/^(\w)/, (m, m1) => m1.toUpperCase())}`;
                const props = this.properties;
                if (props[key] == null) {
                    this._selfControlled = true;
                }
                if (props[key] == null && props[defaultKey] != null) {
                    this.setData({
                        [key]: props[defaultKey],
                    });
                }
            });
        };
        options.methods._trigger = function (evtName, detail, opts) {
            const target = controlledProps.find((item) => item.event == evtName);
            if (target) {
                const { key } = target;
                if (this._selfControlled) {
                    this.setData({
                        [key]: detail[key],
                    });
                }
            }
            this.triggerEvent(evtName, detail, opts);
        };
    }
    return options;
};
exports.toComponent = toComponent;
const wxComponent = function wxComponent() {
    return function (constructor) {
        class WxComponent extends constructor {
        }
        const current = new WxComponent();
        current.options = current.options || {};
        if (current.options.addGlobalClass === undefined) {
            current.options.addGlobalClass = true;
        }
        if ((0, version_1.canUseVirtualHost)()) {
            current.options.virtualHost = true;
        }
        const obj = (0, exports.toComponent)((0, flatTool_1.toObject)(current));
        __MOR_COMPONENT__(obj, "w");
    };
};
exports.wxComponent = wxComponent;


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/superComponent.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/superComponent.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuperComponent": function() { return /* binding */ SuperComponent; }
/* harmony export */ });
class SuperComponent {
    constructor() {
        this.app = getApp();
    }
}


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/utils.js":
/*!****************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/common/utils.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addUnit": function() { return /* binding */ addUnit; },
/* harmony export */   "calcIcon": function() { return /* binding */ calcIcon; },
/* harmony export */   "chunk": function() { return /* binding */ chunk; },
/* harmony export */   "classNames": function() { return /* binding */ classNames; },
/* harmony export */   "debounce": function() { return /* binding */ debounce; },
/* harmony export */   "getAnimationFrame": function() { return /* binding */ getAnimationFrame; },
/* harmony export */   "getCharacterLength": function() { return /* binding */ getCharacterLength; },
/* harmony export */   "getCurrentPage": function() { return /* binding */ getCurrentPage; },
/* harmony export */   "getInstance": function() { return /* binding */ getInstance; },
/* harmony export */   "getRect": function() { return /* binding */ getRect; },
/* harmony export */   "isBool": function() { return /* binding */ isBool; },
/* harmony export */   "isDef": function() { return /* binding */ isDef; },
/* harmony export */   "isNull": function() { return /* binding */ isNull; },
/* harmony export */   "isNumber": function() { return /* binding */ isNumber; },
/* harmony export */   "isObject": function() { return /* binding */ isObject; },
/* harmony export */   "isOverSize": function() { return /* binding */ isOverSize; },
/* harmony export */   "isString": function() { return /* binding */ isString; },
/* harmony export */   "isUndefined": function() { return /* binding */ isUndefined; },
/* harmony export */   "setIcon": function() { return /* binding */ setIcon; },
/* harmony export */   "styles": function() { return /* binding */ styles; },
/* harmony export */   "throttle": function() { return /* binding */ throttle; },
/* harmony export */   "toCamel": function() { return /* binding */ toCamel; },
/* harmony export */   "uniqueFactory": function() { return /* binding */ uniqueFactory; },
/* harmony export */   "unitConvert": function() { return /* binding */ unitConvert; }
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/config.js");
var __MOR_API__ = (__webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/esm/index.js").mor);


const systemInfo = __MOR_API__.getSystemInfoSync();
const debounce = function (func, wait = 500) {
    let timerId;
    return function (...rest) {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            func.apply(this, rest);
        }, wait);
    };
};
const throttle = (func, wait = 100, options = null) => {
    let previous = 0;
    let timerid = null;
    if (!options) {
        options = {
            leading: true,
        };
    }
    return function (...args) {
        const now = Date.now();
        if (!previous && !options.leading)
            previous = now;
        const remaining = wait - (now - previous);
        const context = this;
        if (remaining <= 0) {
            if (timerid) {
                clearTimeout(timerid);
                timerid = null;
            }
            previous = now;
            func.apply(context, args);
        }
    };
};
const classNames = function (...args) {
    const hasOwn = {}.hasOwnProperty;
    const classes = [];
    args.forEach((arg) => {
        if (!arg)
            return;
        const argType = typeof arg;
        if (argType === 'string' || argType === 'number') {
            classes.push(arg);
        }
        else if (Array.isArray(arg) && arg.length) {
            const inner = classNames(...arg);
            if (inner) {
                classes.push(inner);
            }
        }
        else if (argType === 'object') {
            for (const key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key);
                }
            }
        }
    });
    return classes.join(' ');
};
const styles = function (styleObj) {
    return Object.keys(styleObj)
        .map((styleKey) => `${styleKey}: ${styleObj[styleKey]}`)
        .join('; ');
};
const getAnimationFrame = function (context, cb) {
    return __MOR_API__.createSelectorQuery()
        .in(context)
        .selectViewport()
        .boundingClientRect()
        .exec(() => {
        cb();
    });
};
const getRect = function (context, selector, needAll = false) {
    return new Promise((resolve, reject) => {
        __MOR_API__.createSelectorQuery()
            .in(context)[needAll ? 'selectAll' : 'select'](selector)
            .boundingClientRect((rect) => {
            if (rect) {
                resolve(rect);
            }
            else {
                reject(rect);
            }
        })
            .exec();
    });
};
const isNumber = function (value) {
    return /^\d+(\.\d+)?$/.test(value);
};
const isNull = function (value) {
    return value === null;
};
const isUndefined = (value) => typeof value === 'undefined';
const isDef = function (value) {
    return !isUndefined(value) && !isNull(value);
};
const addUnit = function (value) {
    if (!isDef(value)) {
        return undefined;
    }
    value = String(value);
    return isNumber(value) ? `${value}px` : value;
};
const getCharacterLength = (type, char, max) => {
    const str = String(char !== null && char !== void 0 ? char : '');
    if (str.length === 0) {
        return {
            length: 0,
            characters: '',
        };
    }
    if (type === 'maxcharacter') {
        let len = 0;
        for (let i = 0; i < str.length; i += 1) {
            let currentStringLength = 0;
            if (str.charCodeAt(i) > 127 || str.charCodeAt(i) === 94) {
                currentStringLength = 2;
            }
            else {
                currentStringLength = 1;
            }
            if (len + currentStringLength > max) {
                return {
                    length: len,
                    characters: str.slice(0, i),
                };
            }
            len += currentStringLength;
        }
        return {
            length: len,
            characters: str,
        };
    }
    else if (type === 'maxlength') {
        const length = str.length > max ? max : str.length;
        return {
            length,
            characters: str.slice(0, length),
        };
    }
    return {
        length: str.length,
        characters: str,
    };
};
const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));
const getInstance = function (context, selector) {
    if (!context) {
        const pages = getCurrentPages();
        const page = pages[pages.length - 1];
        context = page.$$basePage || page;
    }
    const instance = context ? context.selectComponent(selector) : null;
    if (!instance) {
        console.warn('未找到组件,请检查selector是否正确');
        return null;
    }
    return instance;
};
const unitConvert = (value) => {
    var _a;
    if (typeof value === 'string') {
        if (value.includes('rpx')) {
            return (parseInt(value, 10) * ((_a = systemInfo === null || systemInfo === void 0 ? void 0 : systemInfo.screenWidth) !== null && _a !== void 0 ? _a : 750)) / 750;
        }
        return parseInt(value, 10);
    }
    return value;
};
const setIcon = (iconName, icon, defaultIcon) => {
    if (icon) {
        if (typeof icon === 'string') {
            return {
                [`${iconName}Name`]: icon,
                [`${iconName}Data`]: {},
            };
        }
        else if (typeof icon === 'object') {
            return {
                [`${iconName}Name`]: '',
                [`${iconName}Data`]: icon,
            };
        }
        else {
            return {
                [`${iconName}Name`]: defaultIcon,
                [`${iconName}Data`]: {},
            };
        }
    }
    return {
        [`${iconName}Name`]: '',
        [`${iconName}Data`]: {},
    };
};
const isBool = (val) => typeof val === 'boolean';
const isObject = (val) => typeof val === 'object' && val != null;
const isString = (val) => typeof val === 'string';
const toCamel = (str) => str.replace(/-(\w)/g, (match, m1) => m1.toUpperCase());
const getCurrentPage = function () {
    const pages = getCurrentPages();
    return pages[pages.length - 1];
};
const uniqueFactory = (compName) => {
    let number = 0;
    return () => `${_config__WEBPACK_IMPORTED_MODULE_0__.prefix}_${compName}_${number++}`;
};
const calcIcon = (icon, defaultIcon) => {
    if ((isBool(icon) && icon && defaultIcon) || isString(icon)) {
        return { name: isBool(icon) ? defaultIcon : icon };
    }
    if (isObject(icon)) {
        return icon;
    }
    return null;
};
const isOverSize = (size, sizeLimit) => {
    var _a;
    if (!sizeLimit)
        return false;
    const base = 1000;
    const unitMap = {
        B: 1,
        KB: base,
        MB: base * base,
        GB: base * base * base,
    };
    const computedSize = typeof sizeLimit === 'number' ? sizeLimit * base : (sizeLimit === null || sizeLimit === void 0 ? void 0 : sizeLimit.size) * unitMap[(_a = sizeLimit === null || sizeLimit === void 0 ? void 0 : sizeLimit.unit) !== null && _a !== void 0 ? _a : 'KB'];
    return size > computedSize;
};


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/version.js":
/*!******************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/common/version.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canIUseFormFieldButton": function() { return /* binding */ canIUseFormFieldButton; },
/* harmony export */   "canUseVirtualHost": function() { return /* binding */ canUseVirtualHost; }
/* harmony export */ });
var __MOR_API__ = (__webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/esm/index.js").mor);

let systemInfo;
function getSystemInfo() {
    if (systemInfo == null) {
        systemInfo = __MOR_API__.getSystemInfoSync();
    }
    return systemInfo;
}
function compareVersion(v1, v2) {
    v1 = v1.split('.');
    v2 = v2.split('.');
    const len = Math.max(v1.length, v2.length);
    while (v1.length < len) {
        v1.push('0');
    }
    while (v2.length < len) {
        v2.push('0');
    }
    for (let i = 0; i < len; i++) {
        const num1 = parseInt(v1[i]);
        const num2 = parseInt(v2[i]);
        if (num1 > num2) {
            return 1;
        }
        else if (num1 < num2) {
            return -1;
        }
    }
    return 0;
}
function judgeByVersion(version) {
    const currentSDKVersion = getSystemInfo().SDKVersion;
    return compareVersion(currentSDKVersion, version) >= 0;
}
function canIUseFormFieldButton() {
    const version = '2.10.3';
    return judgeByVersion(version);
}
function canUseVirtualHost() {
    return judgeByVersion('2.19.2');
}


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/fab/draggable/props.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/fab/draggable/props.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";

const props = {
  direction: {
    type: String,
    value: "all"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/fab/props.js":
/*!*************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/fab/props.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";

const props = {
  buttonProps: {
    type: Object
  },
  icon: {
    type: String,
    value: ""
  },
  text: {
    type: String,
    value: ""
  },
  draggable: {
    type: Boolean,
    optionalTypes: [String],
    value: false
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/icon/props.js":
/*!**************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/icon/props.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";

const props = {
  color: {
    type: String,
    value: ""
  },
  name: {
    type: String,
    value: "",
    required: true
  },
  size: {
    type: String,
    value: ""
  },
  prefix: {
    type: String,
    value: void 0
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/image/props.js":
/*!***************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/image/props.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";

const props = {
  error: {
    type: String,
    value: "default"
  },
  externalClasses: {
    type: Array
  },
  height: {
    type: null
  },
  lazy: {
    type: Boolean,
    value: false
  },
  loading: {
    type: String,
    value: "default"
  },
  mode: {
    type: String,
    value: "scaleToFill"
  },
  shape: {
    type: String,
    value: "square"
  },
  showMenuByLongpress: {
    type: Boolean,
    value: false
  },
  src: {
    type: String,
    value: ""
  },
  webp: {
    type: Boolean,
    value: false
  },
  width: {
    type: null
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/input/props.js":
/*!***************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/input/props.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";

const props = {
  align: {
    type: String,
    value: "left"
  },
  layout: {
    type: String,
    value: "horizontal"
  },
  borderless: {
    type: Boolean,
    value: false
  },
  clearable: {
    type: null,
    value: false
  },
  clearTrigger: {
    type: String,
    value: "always"
  },
  disabled: {
    type: Boolean,
    value: false
  },
  errorMessage: {
    type: String,
    value: ""
  },
  externalClasses: {
    type: Array
  },
  format: {
    type: null
  },
  label: {
    type: String
  },
  maxcharacter: {
    type: Number
  },
  maxlength: {
    type: Number,
    value: -1
  },
  placeholder: {
    type: String,
    value: void 0
  },
  prefixIcon: {
    type: null,
    value: null
  },
  readonly: {
    type: Boolean,
    value: false
  },
  size: {
    type: String,
    value: "medium"
  },
  status: {
    type: String,
    value: "default"
  },
  suffix: {
    type: String
  },
  suffixIcon: {
    type: null,
    value: null
  },
  tips: {
    type: String
  },
  value: {
    type: String,
    optionalTypes: [Number],
    value: null
  },
  defaultValue: {
    type: String,
    optionalTypes: [Number]
  },
  type: {
    type: String,
    value: "text"
  },
  placeholderStyle: {
    type: String,
    value: ""
  },
  placeholderClass: {
    type: String,
    value: "input-placeholder"
  },
  cursorSpacing: {
    type: Number,
    value: 0
  },
  autoFocus: {
    type: Boolean,
    value: false
  },
  focus: {
    type: Boolean,
    value: false
  },
  confirmType: {
    type: String,
    value: "done"
  },
  alwaysEmbed: {
    type: Boolean,
    value: false
  },
  confirmHold: {
    type: Boolean,
    value: false
  },
  cursor: {
    type: Number
  },
  selectionStart: {
    type: Number,
    value: -1
  },
  selectionEnd: {
    type: Number,
    value: -1
  },
  adjustPosition: {
    type: Boolean,
    value: true
  },
  holdKeyboard: {
    type: Boolean,
    value: false
  },
  safePasswordCertPath: {
    type: String,
    value: ""
  },
  safePasswordLength: {
    type: Number
  },
  safePasswordTimeStamp: {
    type: Number
  },
  safePasswordNonce: {
    type: String,
    value: ""
  },
  safePasswordSalt: {
    type: String,
    value: ""
  },
  safePasswordCustomHash: {
    type: String,
    value: ""
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/link/props.js":
/*!**************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/link/props.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";

const props = {
  content: {
    type: String
  },
  navigatorProps: {
    type: Object
  },
  prefixIcon: {
    type: null
  },
  size: {
    type: String,
    value: "medium"
  },
  status: {
    type: String,
    value: "normal"
  },
  disabled: {
    type: Boolean,
    value: false
  },
  hover: {
    type: Boolean,
    value: false
  },
  suffixIcon: {
    type: null
  },
  theme: {
    type: String,
    value: "default"
  },
  underline: {
    type: Boolean
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/loading/props.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/loading/props.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";

const props = {
  delay: {
    type: Number,
    value: 0
  },
  duration: {
    type: Number,
    value: 800
  },
  externalClasses: {
    type: Array
  },
  indicator: {
    type: Boolean,
    value: true
  },
  inheritColor: {
    type: Boolean,
    value: false
  },
  layout: {
    type: String,
    value: "horizontal"
  },
  loading: {
    type: Boolean,
    value: true
  },
  pause: {
    type: Boolean,
    value: false
  },
  progress: {
    type: Number
  },
  reverse: {
    type: Boolean
  },
  size: {
    type: String,
    value: "40rpx"
  },
  text: {
    type: String
  },
  theme: {
    type: String,
    value: "circular"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/mixins/page-scroll.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/mixins/page-scroll.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var Behavior = (__webpack_require__(/*! ../node_modules/@morjs/runtime-mini/lib/common/behaviorOrMixin.js */ "../node_modules/@morjs/runtime-mini/lib/common/behaviorOrMixin.js").Behavior);
const utils_1 = __webpack_require__(/*! ../common/utils */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/utils.js");
const onPageScroll = function (event) {
    const page = (0, utils_1.getCurrentPage)();
    if (!page)
        return;
    const { pageScroller } = page;
    pageScroller === null || pageScroller === void 0 ? void 0 : pageScroller.forEach((scroller) => {
        if (typeof scroller === 'function') {
            scroller(event);
        }
    });
};
exports["default"] = (funcName = 'onScroll') => {
    return Behavior({
        attached() {
            var _a;
            const page = (0, utils_1.getCurrentPage)();
            if (!page)
                return;
            const bindScroller = (_a = this[funcName]) === null || _a === void 0 ? void 0 : _a.bind(this);
            if (bindScroller) {
                this._pageScroller = bindScroller;
            }
            if (Array.isArray(page.pageScroller)) {
                page.pageScroller.push(bindScroller);
            }
            else {
                page.pageScroller =
                    typeof page.onPageScroll === 'function' ? [page.onPageScroll.bind(page), bindScroller] : [bindScroller];
            }
            page.onPageScroll = onPageScroll;
        },
        detached() {
            var _a;
            const page = (0, utils_1.getCurrentPage)();
            if (!page)
                return;
            page.pageScroller = ((_a = page.pageScroller) === null || _a === void 0 ? void 0 : _a.filter((item) => item !== this._pageScroller)) || [];
        },
    });
};


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/mixins/touch.js":
/*!****************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/mixins/touch.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

var Behavior = (__webpack_require__(/*! ../node_modules/@morjs/runtime-mini/lib/common/behaviorOrMixin.js */ "../node_modules/@morjs/runtime-mini/lib/common/behaviorOrMixin.js").Behavior);
const MinDistance = 10;
const getDirection = (x, y) => {
  if (x > y && x > MinDistance) {
    return "horizontal";
  }
  if (y > x && y > MinDistance) {
    return "vertical";
  }
  return "";
};
/* harmony default export */ __webpack_exports__["default"] = (Behavior({
  methods: {
    resetTouchStatus() {
      this.direction = "";
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    },
    touchStart(event) {
      this.resetTouchStatus();
      const [touch] = event.touches;
      this.startX = touch.clientX;
      this.startY = touch.clientY;
    },
    touchMove(event) {
      const [touch] = event.touches;
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = getDirection(this.offsetX, this.offsetY);
    }
  }
}));


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/mixins/transition.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/mixins/transition.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ transition; }
/* harmony export */ });
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/config */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/config.js");

var Behavior = (__webpack_require__(/*! ../node_modules/@morjs/runtime-mini/lib/common/behaviorOrMixin.js */ "../node_modules/@morjs/runtime-mini/lib/common/behaviorOrMixin.js").Behavior);

const { prefix } = _common_config__WEBPACK_IMPORTED_MODULE_0__["default"];
function transition() {
  return Behavior({
    properties: {
      visible: {
        type: Boolean,
        value: null,
        observer: "watchVisible"
      },
      appear: Boolean,
      name: {
        type: String,
        value: "fade"
      },
      durations: {
        type: Number,
        optionalTypes: [Array]
      }
    },
    data: {
      transitionClass: "",
      transitionDurations: 300,
      className: "",
      realVisible: false
    },
    created() {
      this.status = "";
      this.transitionT = 0;
    },
    attached() {
      this.durations = this.getDurations();
      if (this.data.visible) {
        this.enter();
      }
      this.inited = true;
    },
    detached() {
      clearTimeout(this.transitionT);
    },
    methods: {
      watchVisible(curr, prev) {
        if (this.inited && curr !== prev) {
          curr ? this.enter() : this.leave();
        }
      },
      getDurations() {
        const { durations } = this.data;
        if (Array.isArray(durations)) {
          return durations.map((item) => Number(item));
        }
        return [Number(durations), Number(durations)];
      },
      enter() {
        const { name } = this.data;
        const [duration] = this.durations;
        this.status = "entering";
        this.setData({
          realVisible: true,
          transitionClass: `${prefix}-${name}-enter ${prefix}-${name}-enter-active`
        });
        setTimeout(() => {
          this.setData({
            transitionClass: `${prefix}-${name}-enter-active ${prefix}-${name}-enter-to`
          });
        }, 30);
        if (typeof duration === "number" && duration > 0) {
          this.transitionT = setTimeout(this.entered.bind(this), duration + 30);
        }
      },
      entered() {
        this.customDuration = false;
        clearTimeout(this.transitionT);
        this.status = "entered";
        this.setData({
          transitionClass: ""
        });
      },
      leave() {
        const { name } = this.data;
        const [, duration] = this.durations;
        this.status = "leaving";
        this.setData({
          transitionClass: `${prefix}-${name}-leave  ${prefix}-${name}-leave-active`
        });
        clearTimeout(this.transitionT);
        setTimeout(() => {
          this.setData({
            transitionClass: `${prefix}-${name}-leave-active ${prefix}-${name}-leave-to`
          });
        }, 30);
        if (typeof duration === "number" && duration > 0) {
          this.customDuration = true;
          this.transitionT = setTimeout(this.leaved.bind(this), duration + 30);
        }
      },
      leaved() {
        this.customDuration = false;
        this.triggerEvent("leaved");
        clearTimeout(this.transitionT);
        this.status = "leaved";
        this.setData({
          transitionClass: ""
        });
      },
      onTransitionEnd() {
        if (this.customDuration) {
          return;
        }
        clearTimeout(this.transitionT);
        if (this.status === "entering" && this.data.visible) {
          this.entered();
        } else if (this.status === "leaving" && !this.data.visible) {
          this.leaved();
          this.setData({
            realVisible: false
          });
        }
      }
    }
  });
}


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/popup/props.js":
/*!***************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/popup/props.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";

const props = {
  closeBtn: {
    type: Boolean
  },
  closeOnOverlayClick: {
    type: Boolean,
    value: true
  },
  content: {
    type: String
  },
  duration: {
    type: Number,
    value: 240
  },
  externalClasses: {
    type: Array
  },
  overlayProps: {
    type: Object,
    value: {}
  },
  placement: {
    type: String,
    value: "top"
  },
  preventScrollThrough: {
    type: Boolean,
    value: true
  },
  showOverlay: {
    type: Boolean,
    value: true
  },
  transitionProps: {
    type: Object
  },
  visible: {
    type: Boolean,
    value: null
  },
  defaultVisible: {
    type: Boolean,
    value: false
  },
  zIndex: {
    type: Number,
    value: 11500
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/radio-group/props.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/radio-group/props.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";

const props = {
  placement: {
    type: String,
    value: "left"
  },
  borderless: {
    type: Boolean,
    value: false
  },
  disabled: {
    type: Boolean,
    value: void 0
  },
  icon: {
    type: null,
    value: "circle"
  },
  keys: {
    type: Object
  },
  name: {
    type: String,
    value: ""
  },
  options: {
    type: Array
  },
  value: {
    type: null,
    value: null
  },
  defaultValue: {
    type: null
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/radio/props.js":
/*!***************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/radio/props.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";

const props = {
  placement: {
    type: String,
    value: null
  },
  allowUncheck: {
    type: Boolean,
    value: false
  },
  block: {
    type: Boolean,
    value: true
  },
  checked: {
    type: Boolean,
    value: null
  },
  defaultChecked: {
    type: Boolean,
    value: false
  },
  content: {
    type: String
  },
  contentDisabled: {
    type: Boolean,
    value: false
  },
  readonly: {
    type: Boolean,
    value: false
  },
  disabled: {
    type: Boolean,
    value: void 0
  },
  externalClasses: {
    type: Array
  },
  icon: {
    type: null,
    value: "circle"
  },
  label: {
    type: String
  },
  maxContentRow: {
    type: Number,
    value: 5
  },
  maxLabelRow: {
    type: Number,
    value: 3
  },
  name: {
    type: String,
    value: ""
  },
  value: {
    type: null,
    value: false
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/search/props.js":
/*!****************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/search/props.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";

const props = {
  action: {
    type: String,
    value: ""
  },
  center: {
    type: Boolean,
    value: false
  },
  disabled: {
    type: Boolean,
    value: false
  },
  externalClasses: {
    type: Array
  },
  cursorSpacing: {
    type: Number,
    value: 0
  },
  focus: {
    type: Boolean,
    value: false
  },
  label: {
    type: String,
    value: ""
  },
  maxcharacter: {
    type: Number
  },
  maxlength: {
    type: Number,
    value: -1
  },
  confirmType: {
    type: String,
    value: "search"
  },
  alwaysEmbed: {
    type: Boolean,
    value: false
  },
  confirmHold: {
    type: Boolean,
    value: false
  },
  cursor: {
    type: Number
  },
  selectionStart: {
    type: Number,
    value: -1
  },
  selectionEnd: {
    type: Number,
    value: -1
  },
  adjustPosition: {
    type: Boolean,
    value: true
  },
  holdKeyboard: {
    type: Boolean,
    value: false
  },
  placeholderStyle: {
    type: String,
    value: ""
  },
  placeholderClass: {
    type: String,
    value: ""
  },
  leftIcon: {
    type: String,
    value: "search"
  },
  placeholder: {
    type: String,
    value: ""
  },
  rightIcon: {
    type: String,
    value: "close-circle-filled"
  },
  shape: {
    type: String,
    value: "square"
  },
  value: {
    type: String,
    value: ""
  },
  clearable: {
    type: Boolean,
    value: true
  },
  type: {
    type: String,
    value: "text"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/sticky/props.js":
/*!****************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/sticky/props.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";

const props = {
  container: {
    type: null
  },
  disabled: {
    type: Boolean,
    value: false
  },
  externalClasses: {
    type: Array
  },
  offsetTop: {
    type: Number,
    value: 0
  },
  zIndex: {
    type: Number,
    value: 99
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/swiper/props.js":
/*!****************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/swiper/props.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";

const props = {
  autoplay: {
    type: Boolean,
    value: true
  },
  current: {
    type: Number,
    value: 0
  },
  direction: {
    type: String,
    value: "horizontal"
  },
  displayMultipleItems: {
    type: Number,
    value: 1
  },
  duration: {
    type: Number,
    value: 300
  },
  easingFunction: {
    type: String,
    value: "default"
  },
  height: {
    type: null,
    value: 192
  },
  imageProps: {
    type: Object
  },
  interval: {
    type: Number,
    value: 5e3
  },
  list: {
    type: Array
  },
  loop: {
    type: Boolean,
    value: true
  },
  navigation: {
    type: null,
    value: true
  },
  nextMargin: {
    type: null,
    value: 0
  },
  paginationPosition: {
    type: String,
    value: "bottom"
  },
  previousMargin: {
    type: null,
    value: 0
  },
  snapToEdge: {
    type: Boolean,
    value: false
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/tab-bar-item/props.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/tab-bar-item/props.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";

const props = {
  badgeProps: {
    type: Object
  },
  icon: {
    type: null
  },
  subTabBar: {
    type: Array
  },
  value: {
    type: null
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/tab-bar/props.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/tab-bar/props.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";

const props = {
  bordered: {
    type: Boolean,
    value: true
  },
  externalClasses: {
    type: Array
  },
  fixed: {
    type: Boolean,
    value: true
  },
  safeAreaInsetBottom: {
    type: Boolean,
    value: true
  },
  shape: {
    type: String,
    value: "normal"
  },
  split: {
    type: Boolean,
    value: true
  },
  theme: {
    type: String,
    value: "normal"
  },
  value: {
    type: null,
    value: null
  },
  defaultValue: {
    type: null,
    value: null
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/tab-panel/props.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/tab-panel/props.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";

const props = {
  badgeProps: {
    type: Object,
    value: null
  },
  destroyOnHide: {
    type: Boolean,
    value: true
  },
  disabled: {
    type: Boolean,
    value: false
  },
  icon: {
    type: null
  },
  label: {
    type: String,
    value: ""
  },
  panel: {
    type: String
  },
  value: {
    type: null
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/tabs/props.js":
/*!**************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/tabs/props.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";

const props = {
  animation: {
    type: Object
  },
  externalClasses: {
    type: Array
  },
  showBottomLine: {
    type: Boolean,
    value: true
  },
  spaceEvenly: {
    type: Boolean,
    value: true
  },
  split: {
    type: Boolean,
    value: true
  },
  sticky: {
    type: Boolean,
    value: false
  },
  stickyProps: {
    type: Object
  },
  swipeable: {
    type: Boolean,
    value: true
  },
  theme: {
    type: String,
    value: "line"
  },
  value: {
    type: null,
    value: null
  },
  defaultValue: {
    type: null
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/toast/index.js":
/*!***************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/toast/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Toast; }
/* harmony export */ });
/* unused harmony exports showToast, hideToast */
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utils */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/utils.js");

var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};

function Toast(options) {
  var _a;
  const { context, selector = "#t-toast" } = options, Options = __rest(options, ["context", "selector"]);
  const instance = (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.getInstance)(context, selector);
  if (instance) {
    instance.show(Object.assign(Object.assign({}, Options), { duration: (_a = Options.duration) !== null && _a !== void 0 ? _a : 2e3 }));
  }
}
function showToast(options = {}) {
  Toast(options);
}
function hideToast(options = {}) {
  const { context, selector = "#t-toast" } = options;
  const instance = (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.getInstance)(context, selector);
  if (instance) {
    instance.hide();
  }
}



/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/toast/props.js":
/*!***************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/toast/props.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";

const props = {
  direction: {
    type: String,
    value: "row"
  },
  duration: {
    type: Number,
    value: 2e3
  },
  externalClasses: {
    type: Array
  },
  icon: {
    type: null
  },
  message: {
    type: String
  },
  overlayProps: {
    type: Object,
    value: {}
  },
  placement: {
    type: String,
    value: "middle"
  },
  preventScrollThrough: {
    type: Boolean,
    value: false
  },
  showOverlay: {
    type: Boolean,
    value: false
  },
  theme: {
    type: String
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/@morjs/api/esm/api.js":
/*!*********************************************!*\
  !*** ../node_modules/@morjs/api/esm/api.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mor": function() { return /* binding */ mor; }
/* harmony export */ });
/* unused harmony exports createApi, registerFactory, init */
/* harmony import */ var _morjs_runtime_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @morjs/runtime-base */ "../node_modules/@morjs/runtime-base/esm/env.js");
/* harmony import */ var _morjs_runtime_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @morjs/runtime-base */ "../node_modules/@morjs/runtime-base/esm/utils/transformApis.js");
/* harmony import */ var _morjs_runtime_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @morjs/runtime-base */ "../node_modules/@morjs/runtime-base/esm/logger.js");
/* harmony import */ var _morjs_runtime_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @morjs/runtime-base */ "../node_modules/@morjs/runtime-base/esm/event.js");

// 跨端支持的接口运行时引用注入位置, '' 空字符串是为了防止该注释被移除
// prettier-ignore
var apiTargetRuntime = __webpack_require__(/*! ../node_modules/@morjs/runtime-mini/lib/alipay/apisToAlipay.js */ "../node_modules/@morjs/runtime-mini/lib/alipay/apisToAlipay.js");
var apiSourceRuntime = __webpack_require__(/*! ../node_modules/@morjs/runtime-mini/lib/wechat/apis.js */ "../node_modules/@morjs/runtime-mini/lib/wechat/apis.js");
/**
 * 初始化 Mor API
 * 默认会自动初始化一个全局的 mor api
 * @example
 * 自定义 api 初始化并覆盖默认 mor api
 * createApi([adapters]).override()
 * @param adapters - 初始化 选项
 * @param adapters[x].initApi - 初始化接口方法, 接受 apiOptions 作为参数
 * @param options - 初始化选项, 默认为 {}
 * @returns Mor API
 */
function createApi(adapters, options) {
    if (options === void 0) { options = {}; }
    // global 小程序全局对象，如微信的 wx，支付宝的 my
    var global = (0,_morjs_runtime_base__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)();
    var apiOptions = {};
    apiOptions.global = global;
    apiOptions.env = global.env || {};
    apiOptions.getApp =
        typeof getApp === 'function' ? getApp : (0,_morjs_runtime_base__WEBPACK_IMPORTED_MODULE_1__.markAsUnsupport)('getApp');
    apiOptions.getCurrentPages =
        typeof getCurrentPages === 'function'
            ? getCurrentPages
            : (0,_morjs_runtime_base__WEBPACK_IMPORTED_MODULE_1__.markAsUnsupport)('getCurrentPages');
    apiOptions.requirePlugin =
        typeof requirePlugin === 'function'
            ? requirePlugin
            : (0,_morjs_runtime_base__WEBPACK_IMPORTED_MODULE_1__.markAsUnsupport)('requirePlugin');
    apiOptions.getEnv = _morjs_runtime_base__WEBPACK_IMPORTED_MODULE_0__.getEnv;
    // 跨端支持的接口运行时调用注入位置, '' 空字符串是为了防止该注释被移除
    // prettier-ignore
    apiTargetRuntime.initApi(apiOptions);
apiSourceRuntime.initApi(apiOptions);
    // 转端适配会自动注入 转端 API 兼容性支持
    // 这里依赖 apiOptions 名称, 如修改会导致 apiOptions 不存在
    // targetAdapter.initApi(apiOptions)
    // sourceAdapter.initApi(apiOptions)
    // 执行 apiOptions 适配器初始化
    if (adapters === null || adapters === void 0 ? void 0 : adapters.length) {
        adapters.forEach(function (adapter) {
            if (typeof (adapter === null || adapter === void 0 ? void 0 : adapter.initApi) === 'function') {
                adapter.initApi(apiOptions, options || {});
            }
            else {
                _morjs_runtime_base__WEBPACK_IMPORTED_MODULE_2__.logger.error("adapter.initApi \u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570, \u8BF7\u68C0\u67E5");
            }
        });
    }
    // 添加全局剩余的 apiOptions (不覆盖已有的接口)
    (0,_morjs_runtime_base__WEBPACK_IMPORTED_MODULE_1__.transformApis)(apiOptions, global, {
        needPromisfiedApis: [],
        apiTransformConfig: {}
    }, true, false);
    // 添加全局事件支持, 仅当缺少事件支持时添加
    if (!apiOptions.on) {
        apiOptions.on = function (type, handler) {
            _morjs_runtime_base__WEBPACK_IMPORTED_MODULE_3__.event.on.call(_morjs_runtime_base__WEBPACK_IMPORTED_MODULE_3__.event, type, handler);
        };
    }
    if (!apiOptions.emit) {
        apiOptions.emit = function (type, e) {
            _morjs_runtime_base__WEBPACK_IMPORTED_MODULE_3__.event.emit.call(_morjs_runtime_base__WEBPACK_IMPORTED_MODULE_3__.event, type, e);
        };
    }
    // 覆盖默认的 mor apiOptions 实例
    apiOptions.override = function () {
        if (apiOptions === mor)
            return;
        Object.assign(mor, apiOptions);
        return mor;
    };
    return apiOptions;
}
/**
 * 初始化 mor 接口
 */
var mor = createApi();
/**
 * 工厂函数存储对象
 */
var FACTORIES = {};
/**
 * 注册接口初始化工厂函数
 * @param factoryName - 接口初始化工厂函数名称
 * @param factoryFunction - 接口初始化工厂函数
 */
function registerFactory(factoryName, factoryFunction) {
    FACTORIES[factoryName] = factoryFunction;
}
/**
 * 初始化一个新的 mor api 实例
 * @param options - 选项
 * @returns 新的 mor api 实例
 */
function init(options) {
    var newMor = Object.assign({}, mor);
    for (var _i = 0, _a = Object.keys(FACTORIES); _i < _a.length; _i++) {
        var factoryName = _a[_i];
        FACTORIES[factoryName].call(newMor, options);
        _morjs_runtime_base__WEBPACK_IMPORTED_MODULE_2__.logger.debug('mor api factory', "".concat(factoryName, " \u521D\u59CB\u5316\u5B8C\u6210"));
    }
    return newMor;
}

//# sourceMappingURL=api.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/esm/app.js":
/*!**********************************************!*\
  !*** ../node_modules/@morjs/core/esm/app.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createApp": function() { return /* binding */ createApp; }
/* harmony export */ });
/* unused harmony exports registerAppAdapters, aApp, wApp */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _morjs_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/runtime-base/esm/utils/compose.js");
/* harmony import */ var _morjs_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/runtime-base/esm/logger.js");
/* harmony import */ var _morjs_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/runtime-base/esm/utils/asArray.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants */ "../node_modules/@morjs/core/esm/utils/constants.js");
/* harmony import */ var _utils_init__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/init */ "../node_modules/@morjs/core/esm/utils/init.js");
/* harmony import */ var _utils_invokeOriginalFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/invokeOriginalFunction */ "../node_modules/@morjs/core/esm/utils/invokeOriginalFunction.js");





// 跨端支持的应用运行时引用注入位置, '' 空字符串是为了防止该注释被移除
// prettier-ignore
;
// 转端适配器
var APP_ADAPTERS = [];
// 初始化标记
var IS_INITIALIZED = false;
// 全局应用事件
var APP_EVENT_MAPPINGS = {
    onPageNotFound: 'appOnPageNotFound',
    onUnhandledRejection: 'appOnUnhandledRejection'
};
/**
 * 注入 app 生命周期 hook
 * @param appOptions 小程序 app 初始化 options
 */
function hookAppLifeCycle(appOptions) {
    var _a, _b, _c;
    /**
     * 调用 hook
     * @param hookName hook名字
     */
    var invokeHook = function (hookName) {
        return function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            (_a = this.$morHooks[hookName]).call.apply(_a, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([this], args, false));
        };
    };
    /**
     * 调用事件通知
     * @param eventName 事件标识
     */
    var invokeEvent = function (eventName) {
        return function (arg) {
            if (this.$event) {
                this.$event.emit("".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.MOR_EVENT_PREFIX).concat(eventName), arg);
            }
        };
    };
    appOptions.onLaunch = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_2__.compose)([
        invokeHook('appOnLaunch'),
        (0,_utils_invokeOriginalFunction__WEBPACK_IMPORTED_MODULE_3__.invokeOriginalFunction)('onLaunch', appOptions)
    ]);
    appOptions.onShow = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_2__.compose)([
        invokeHook('appOnShow'),
        (0,_utils_invokeOriginalFunction__WEBPACK_IMPORTED_MODULE_3__.invokeOriginalFunction)('onShow', appOptions),
        invokeEvent('appOnShow')
    ]);
    appOptions.onHide = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_2__.compose)([
        invokeHook('appOnHide'),
        (0,_utils_invokeOriginalFunction__WEBPACK_IMPORTED_MODULE_3__.invokeOriginalFunction)('onHide', appOptions),
        invokeEvent('appOnHide')
    ]);
    appOptions.onError = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_2__.compose)([
        invokeHook('appOnError'),
        (0,_utils_invokeOriginalFunction__WEBPACK_IMPORTED_MODULE_3__.invokeOriginalFunction)('onError', appOptions)
    ]);
    // 这里的事件可能会改变小程序本身的行为, 故这里单独处理
    for (var eventName in APP_EVENT_MAPPINGS) {
        var hookName = APP_EVENT_MAPPINGS[eventName];
        if (hookName &&
            (appOptions[eventName] || ((_c = (_b = (_a = appOptions.$morHooks) === null || _a === void 0 ? void 0 : _a[hookName]) === null || _b === void 0 ? void 0 : _b.isUsed) === null || _c === void 0 ? void 0 : _c.call(_b)))) {
            appOptions[eventName] = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_2__.compose)([
                invokeHook(hookName),
                (0,_utils_invokeOriginalFunction__WEBPACK_IMPORTED_MODULE_3__.invokeOriginalFunction)(eventName, appOptions)
            ]);
        }
    }
}
/**
 * 注册 App
 */
function createApp(options, 
/**
 * 运行时 Solution 支持
 */
solution, 
/**
 * 拓展参数
 */
extend) {
    _morjs_api__WEBPACK_IMPORTED_MODULE_4__.logger.time('createApp-init');
    // 配置 globalApp 的时候不检查多实例的问题
    // 原因： 允许插件或分包工程使用模拟 App
    //       这种情况下一个小程序会出现多个 App 初始化
    if (!(extend === null || extend === void 0 ? void 0 : extend.globalApp)) {
        if (IS_INITIALIZED) {
            _morjs_api__WEBPACK_IMPORTED_MODULE_4__.logger.error('App 有且只能执行一次!');
            return;
        }
        else {
            IS_INITIALIZED = true;
        }
    }
    var appOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, options);
    _morjs_api__WEBPACK_IMPORTED_MODULE_4__.logger.time('app-init-solution');
    var _a = (0,_utils_init__WEBPACK_IMPORTED_MODULE_5__.init)(solution), $hooks = _a.$hooks, pluginsNames = _a.pluginsNames;
    _morjs_api__WEBPACK_IMPORTED_MODULE_4__.logger.timeEnd('app-init-solution');
    if (extend === null || extend === void 0 ? void 0 : extend.onHooksCreated) {
        if (typeof extend.onHooksCreated !== 'function') {
            _morjs_api__WEBPACK_IMPORTED_MODULE_4__.logger.error('onHooksCreated 必须是函数, 请检查 App 的 extends 配置');
            return;
        }
        extend.onHooksCreated($hooks);
    }
    // 添加到 App 实例中
    appOptions.$morHooks = $hooks;
    appOptions.$morPluginsNames = pluginsNames;
    // 触发 appOnConstruct hook, 兼容旧版本当 appOnConstruct 不存在时用 appOnInit 兜底
    var appOnConstruct = $hooks.appOnConstruct || $hooks.appOnInit;
    appOnConstruct.call(appOptions, appOptions);
    // 生命周期 hook
    _morjs_api__WEBPACK_IMPORTED_MODULE_4__.logger.time('app-hook-lifetimes');
    hookAppLifeCycle(appOptions);
    _morjs_api__WEBPACK_IMPORTED_MODULE_4__.logger.timeEnd('app-hook-lifetimes');
    // 跨端支持的应用运行时调用注入位置, '' 空字符串是为了防止该注释被移除
    // prettier-ignore
    ;
    // 执行 app 适配器初始化
    if (APP_ADAPTERS === null || APP_ADAPTERS === void 0 ? void 0 : APP_ADAPTERS.length) {
        APP_ADAPTERS.forEach(function (adapter) {
            if (typeof (adapter === null || adapter === void 0 ? void 0 : adapter.initApp) === 'function') {
                adapter.initApp(appOptions);
            }
            else {
                _morjs_api__WEBPACK_IMPORTED_MODULE_4__.logger.error("adapter.initApp \u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570, \u8BF7\u68C0\u67E5");
            }
        });
    }
    _morjs_api__WEBPACK_IMPORTED_MODULE_4__.logger.timeEnd('app-init');
    // 使用 extend.globalApp 替代 App
    // 用于 插件和分包模式下的 App 构造函数模拟
    if (extend === null || extend === void 0 ? void 0 : extend.globalApp) {
        if (typeof extend.globalApp !== 'function') {
            _morjs_api__WEBPACK_IMPORTED_MODULE_4__.logger.error('globalApp 必须是函数, 请检查 App 的 extends 配置');
            return;
        }
        return extend.globalApp(appOptions);
    }
    else {
        return App(appOptions);
    }
}
/**
 * 注册应用转端适配器
 * @param adapters - 应用转端适配器
 */
function registerAppAdapters(adapters) {
    APP_ADAPTERS.push.apply(APP_ADAPTERS, (0,_morjs_api__WEBPACK_IMPORTED_MODULE_6__.asArray)(adapters));
}
/**
 * 注册支付宝小程序 App
 */
var aApp = createApp;
/**
 * 注册微信小程序 App
 */
var wApp = createApp;
//# sourceMappingURL=app.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/esm/component.js":
/*!****************************************************!*\
  !*** ../node_modules/@morjs/core/esm/component.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createComponent": function() { return /* binding */ createComponent; }
/* harmony export */ });
/* unused harmony exports enhanceComponent, registerComponentAdapters, aComponent, wComponent */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _morjs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/runtime-base/esm/env.js");
/* harmony import */ var _morjs_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/runtime-base/esm/utils/generateId.js");
/* harmony import */ var _morjs_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/runtime-base/esm/logger.js");
/* harmony import */ var _morjs_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/runtime-base/esm/utils/getSharedProperty.js");
/* harmony import */ var _morjs_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/runtime-base/esm/utils/compose.js");
/* harmony import */ var _morjs_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/runtime-base/esm/utils/asArray.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/constants */ "../node_modules/@morjs/core/esm/utils/constants.js");
/* harmony import */ var _utils_invokeHook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/invokeHook */ "../node_modules/@morjs/core/esm/utils/invokeHook.js");
/* harmony import */ var _utils_invokeOriginalFunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/invokeOriginalFunction */ "../node_modules/@morjs/core/esm/utils/invokeOriginalFunction.js");





// 跨端支持的组件运行时引用注入位置, '' 空字符串是为了防止该注释被移除
// prettier-ignore
var componentTargetRuntime = __webpack_require__(/*! ../node_modules/@morjs/runtime-mini/lib/alipay/componentToAlipay.js */ "../node_modules/@morjs/runtime-mini/lib/alipay/componentToAlipay.js");
// 转端适配器
var COMPONENT_ADAPTERS = [];
// eslint-disable-next-line @typescript-eslint/no-empty-function
var emptyFn = function () { };
/**
 * hook 组件生命周期
 */
function hookComponentLifeCycle(componentOptions, needsToHookPageLifetimes, sourceType, invokeComponentHooks) {
    if (invokeComponentHooks === void 0) { invokeComponentHooks = true; }
    var isAlipaySource = sourceType === _morjs_api__WEBPACK_IMPORTED_MODULE_0__.SOURCE_TYPE.ALIPAY;
    /**
     * 设置基础信息
     */
    var makeBaseInfo = function () {
        if (!this.$morId)
            this.$morId = String((0,_morjs_api__WEBPACK_IMPORTED_MODULE_1__.generateId)());
    };
    /**
     * 做 pageLifetimes 的事件绑定
     * @param this 当前组件实例
     */
    var registerPageLifetimes = function () {
        var _a;
        // 这里检查 getCurrentPages 是否存在，防止导致整个应用崩溃
        // 目的是部分小程序页面转 H5 时，缺少完整的小程序 runtime polyfill 而直接报错
        if (typeof getCurrentPages === 'undefined') {
            _morjs_api__WEBPACK_IMPORTED_MODULE_2__.logger.error('未发现 getCurrentPages 方法, 无法自动获取当前页面实例, pageLifetimes 相关事件注册失败');
            return;
        }
        var $event = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_3__.getSharedProperty)('$event', this);
        var allPages = getCurrentPages() || [];
        // 在当前组件中保存 所在页面的标记
        var pageFlag = (this.$morCurrentPageFlag =
            (_a = allPages[allPages.length - 1]) === null || _a === void 0 ? void 0 : _a.$morPageFlag);
        if (!pageFlag || !$event) {
            _morjs_api__WEBPACK_IMPORTED_MODULE_2__.logger.warn('当前运行环境缺乏 $event 或 $morPageFlag 支持, ' +
                '请检查页面是否采用了 createPage/aPage/wPage 以及 App 是否初始化正确');
            return;
        }
        // 避免不重复添加
        if (this.$morPageLifetimesIsHooked)
            return;
        this.$morPageOnShow = this.$morPageOnShow.bind(this);
        this.$morPageOnHide = this.$morPageOnHide.bind(this);
        this.$morPageOnResize = this.$morPageOnResize.bind(this);
        $event.once("$mor:pageOnReady:".concat(pageFlag), this.$morPageOnShow);
        $event.on("$mor:pageOnShow:".concat(pageFlag), this.$morPageOnShow);
        $event.on("$mor:pageOnHide:".concat(pageFlag), this.$morPageOnHide);
        $event.on("$mor:pageOnResize:".concat(pageFlag), this.$morPageOnResize);
        this.$morPageLifetimesIsHooked = true;
    };
    /**
     * 去除pageLifetime的事件绑定
     */
    var unregisterPageLifetimes = function () {
        var $event = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_3__.getSharedProperty)('$event', this);
        if (!$event)
            return;
        if (!this.$morCurrentPageFlag)
            return;
        var pageFlag = this.$morCurrentPageFlag;
        $event.off("$mor:pageOnReady:".concat(pageFlag), this.$morPageOnShow);
        $event.off("$mor:pageOnShow:".concat(pageFlag), this.$morPageOnShow);
        $event.off("$mor:pageOnHide:".concat(pageFlag), this.$morPageOnHide);
        $event.off("$mor:pageOnResize:".concat(pageFlag), this.$morPageOnResize);
    };
    /**
     * 增加 $eventListener 事件绑定
     * @param this 当前组件实例
     */
    var addEventListeners = function () {
        var _this = this;
        var _a, _b;
        var $event = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_3__.getSharedProperty)('$event', this);
        if (!$event)
            return;
        if (!((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.$morEventListenerNames) === null || _b === void 0 ? void 0 : _b.length))
            return;
        // 在当前组件实例中添加 事件
        this.data.$morEventListenerNames.forEach(function (eventName) {
            var morEventName = "".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_4__.MOR_EVENT_METHOD_PREFIX).concat(eventName);
            _this[morEventName] = _this[morEventName].bind(_this);
            $event.on(eventName, _this[morEventName]);
        });
    };
    /**
     * 去除 $eventListener 事件绑定
     */
    var removeEventListeners = function () {
        var _this = this;
        var _a, _b;
        var $event = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_3__.getSharedProperty)('$event', this);
        if (!$event)
            return;
        if (!((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.$morEventListenerNames) === null || _b === void 0 ? void 0 : _b.length))
            return;
        this.data.$morEventListenerNames.forEach(function (eventName) {
            var morEventName = "".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_4__.MOR_EVENT_METHOD_PREFIX).concat(eventName);
            $event.off(eventName, _this[morEventName]);
        });
    };
    var lifetimes = isAlipaySource
        ? componentOptions
        : componentOptions.lifetimes;
    // 支付宝 DSL 支持
    if (isAlipaySource) {
        // onInit
        lifetimes.onInit = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_5__.compose)([
            needsToHookPageLifetimes ? registerPageLifetimes : emptyFn,
            invokeComponentHooks ? (0,_utils_invokeHook__WEBPACK_IMPORTED_MODULE_6__.invokeHook)('componentOnInit') : emptyFn,
            (0,_utils_invokeOriginalFunction__WEBPACK_IMPORTED_MODULE_7__.invokeOriginalFunction)('onInit', lifetimes)
        ]);
        // didMount
        componentOptions.didMount = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_5__.compose)([
            needsToHookPageLifetimes ? registerPageLifetimes : emptyFn,
            makeBaseInfo,
            invokeComponentHooks ? (0,_utils_invokeHook__WEBPACK_IMPORTED_MODULE_6__.invokeHook)('componentDidMount') : emptyFn,
            addEventListeners,
            (0,_utils_invokeOriginalFunction__WEBPACK_IMPORTED_MODULE_7__.invokeOriginalFunction)('didMount', lifetimes)
        ]);
        // didUnmount
        componentOptions.didUnmount = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_5__.compose)([
            needsToHookPageLifetimes ? unregisterPageLifetimes : emptyFn,
            invokeComponentHooks ? (0,_utils_invokeHook__WEBPACK_IMPORTED_MODULE_6__.invokeHook)('componentDidUnmount') : emptyFn,
            removeEventListeners,
            (0,_utils_invokeOriginalFunction__WEBPACK_IMPORTED_MODULE_7__.invokeOriginalFunction)('didUnmount', componentOptions)
        ]);
        // onError
        componentOptions.onError = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_5__.compose)([
            invokeComponentHooks ? (0,_utils_invokeHook__WEBPACK_IMPORTED_MODULE_6__.invokeHook)('componentOnError') : emptyFn,
            (0,_utils_invokeOriginalFunction__WEBPACK_IMPORTED_MODULE_7__.invokeOriginalFunction)('onError', componentOptions)
        ]);
    }
    // 微信 DSL 支持
    else {
        // created
        lifetimes.created = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_5__.compose)([
            needsToHookPageLifetimes ? registerPageLifetimes : emptyFn,
            invokeComponentHooks ? (0,_utils_invokeHook__WEBPACK_IMPORTED_MODULE_6__.invokeHook)('componentOnCreated') : emptyFn,
            (0,_utils_invokeOriginalFunction__WEBPACK_IMPORTED_MODULE_7__.invokeOriginalFunction)('created', lifetimes)
        ]);
        // attached
        lifetimes.attached = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_5__.compose)([
            needsToHookPageLifetimes ? registerPageLifetimes : emptyFn,
            makeBaseInfo,
            invokeComponentHooks ? (0,_utils_invokeHook__WEBPACK_IMPORTED_MODULE_6__.invokeHook)('componentOnAttached') : emptyFn,
            addEventListeners,
            (0,_utils_invokeOriginalFunction__WEBPACK_IMPORTED_MODULE_7__.invokeOriginalFunction)('attached', lifetimes)
        ]);
        // detached
        lifetimes.detached = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_5__.compose)([
            needsToHookPageLifetimes ? unregisterPageLifetimes : emptyFn,
            invokeComponentHooks ? (0,_utils_invokeHook__WEBPACK_IMPORTED_MODULE_6__.invokeHook)('componentOnDetached') : emptyFn,
            removeEventListeners,
            (0,_utils_invokeOriginalFunction__WEBPACK_IMPORTED_MODULE_7__.invokeOriginalFunction)('detached', lifetimes)
        ]);
        // error
        lifetimes.error = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_5__.compose)([
            invokeComponentHooks ? (0,_utils_invokeHook__WEBPACK_IMPORTED_MODULE_6__.invokeHook)('componentOnError') : emptyFn,
            (0,_utils_invokeOriginalFunction__WEBPACK_IMPORTED_MODULE_7__.invokeOriginalFunction)('error', lifetimes)
        ]);
    }
}
/**
 * 增加 pageLifetimes 的相关方法注入
 */
function hookPageLifetimes(componentOptions, needsToHookPageLifetimes) {
    if (!needsToHookPageLifetimes)
        return;
    var pageLifetimes = componentOptions.pageLifetimes || {};
    var originalPageOnShow = pageLifetimes.show;
    componentOptions.methods.$morPageOnShow = function () {
        if (originalPageOnShow) {
            originalPageOnShow.call(this);
        }
    };
    var originalPageOnHide = pageLifetimes.hide;
    componentOptions.methods.$morPageOnHide = function () {
        if (originalPageOnHide) {
            originalPageOnHide.call(this);
        }
    };
    var originalPageOnResize = pageLifetimes.resize;
    componentOptions.methods.$morPageOnResize = function () {
        if (originalPageOnResize) {
            originalPageOnResize.call(this);
        }
    };
    delete componentOptions.pageLifetimes;
}
/**
 * 注入 $eventListener 中对应的方法
 */
function hookEventListener(componentOptions) {
    if (componentOptions.$eventListener) {
        var eventNames = Object.keys(componentOptions.$eventListener);
        var data = componentOptions.data;
        data.$morEventListenerNames = eventNames;
        eventNames.forEach(function (eventName) {
            var morEventName = "".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_4__.MOR_EVENT_METHOD_PREFIX).concat(eventName);
            componentOptions.methods[morEventName] =
                componentOptions.$eventListener[eventName];
        });
    }
}
/**
 * 确保自定义组件选项中必要的值存在
 */
function ensureDataAndMethodsAndLifetimes(options, sourceType) {
    if (!options.methods)
        options.methods = {};
    if (!options.data)
        options.data = {};
    if (!options.lifetimes)
        options.lifetimes = {};
    // 如果 微信DSL
    if (sourceType === _morjs_api__WEBPACK_IMPORTED_MODULE_0__.SOURCE_TYPE.WECHAT) {
        // 微信中 lifetimes 中的优先级高于 options 中的方法
        var created = options.lifetimes.created || options.created;
        delete options.created;
        options.lifetimes.created = created;
        var attached = options.lifetimes.attached || options.attached;
        delete options.attached;
        options.lifetimes.attached = attached;
        var ready = options.lifetimes.ready || options.ready;
        delete options.ready;
        options.lifetimes.ready = ready;
        var moved = options.lifetimes.moved || options.moved;
        delete options.moved;
        options.lifetimes.moved = moved;
        var detached = options.lifetimes.detached || options.detached;
        delete options.detached;
        options.lifetimes.detached = detached;
        var error = options.lifetimes.error || options.error;
        delete options.error;
        options.lifetimes.error = error;
    }
}
// 支付宝小程序运行环境
var isAlipayTarget = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_0__.getEnv)() === _morjs_api__WEBPACK_IMPORTED_MODULE_0__.ENV_TYPE.ALIPAY ||
    (0,_morjs_api__WEBPACK_IMPORTED_MODULE_0__.getEnv)() === _morjs_api__WEBPACK_IMPORTED_MODULE_0__.ENV_TYPE.DINGDING ||
    (0,_morjs_api__WEBPACK_IMPORTED_MODULE_0__.getEnv)() === _morjs_api__WEBPACK_IMPORTED_MODULE_0__.ENV_TYPE.TAOBAO;
var WECHAT_COMPONENT_LIFETIMES_METHODS = [
    'created',
    'attached',
    'ready',
    'moved',
    'detached',
    'error'
];
/**
 * 支付宝基础库 2.8.5 (2022-12-29) 起新增 lifetimes 定义段，
 * 支持 created、attached 等组件节点树维度的生命周期函数
 */
var ALIPAY_COMPONENT_LIFETIMES_METHODS = [
    'onInit',
    'deriveDataFromProps',
    'didMount',
    'didUpdate',
    'didUnmount',
    'onError'
].concat(WECHAT_COMPONENT_LIFETIMES_METHODS);
function getComponentLifetimesMethods(sourceType) {
    return sourceType === _morjs_api__WEBPACK_IMPORTED_MODULE_0__.SOURCE_TYPE.WECHAT
        ? WECHAT_COMPONENT_LIFETIMES_METHODS
        : ALIPAY_COMPONENT_LIFETIMES_METHODS;
}
/**
 * 处理 mixins 或 behaviors
 *  - 声明周期方法会进行合并
 *  - methods 会使用最后声明的
 *  - 数据 会进行合并
 * @param componentOptions - Component 参数
 * @param mixinType - mixin 类型, 用于区分 mixin 和 behavior
 * @param sourceType - 源码类型
 */
function processMixinsOrBehaviors(componentOptions, mixinType, sourceType) {
    var _a;
    if (!((_a = componentOptions === null || componentOptions === void 0 ? void 0 : componentOptions[mixinType]) === null || _a === void 0 ? void 0 : _a.length))
        return;
    var mixins = componentOptions[mixinType];
    delete componentOptions[mixinType];
    var lifetimesFunctions = {};
    var componentLifetimesMethods = getComponentLifetimesMethods(sourceType);
    // 合并 mixins
    function processMixins(mixins, 
    // 是否是组件的直接 mixins
    isComponentDirectMixins) {
        return mixins.reduce(function (prev, curr) {
            var _a;
            if (typeof curr !== 'object') {
                _morjs_api__WEBPACK_IMPORTED_MODULE_2__.logger.error("\u65E0\u6548\u7684 ".concat(mixinType, ": "), curr, '已跳过');
                return prev;
            }
            var result = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__assign)({}, prev);
            if (mixinType === 'behaviors') {
                // 如果是组件直接使用的 behaviors
                // 需要执行 definitionFilter 方法
                if (isComponentDirectMixins && curr.definitionFilter) {
                    curr.definitionFilter(componentOptions);
                }
                // 处理 内嵌 behaviors
                if ((_a = curr === null || curr === void 0 ? void 0 : curr[mixinType]) === null || _a === void 0 ? void 0 : _a.length) {
                    var childMixins = curr === null || curr === void 0 ? void 0 : curr[mixinType];
                    delete curr[mixinType];
                    result = processMixins((0,tslib__WEBPACK_IMPORTED_MODULE_8__.__spreadArray)([result], childMixins, true), false);
                }
            }
            // 合并 lifetimes, lifetimes 中的函数优先级高
            var current = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_8__.__assign)({}, curr), (curr.lifetimes || {}));
            Object.keys(current).forEach(function (name) {
                // 不处理 定义段函数
                if (name === 'definitionFilter')
                    return;
                // 合并 数据
                // 如 props/properties/data/methods
                if (typeof current[name] === 'object') {
                    // 对象类型还可能包含数组，对数组做单独处理
                    if (Array.isArray(curr[name])) {
                        result[name] = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_8__.__spreadArray)([], (result[name] || []), true), curr[name], true);
                    }
                    else
                        result[name] = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_8__.__assign)({}, result[name]), current[name]);
                }
                // 合并 方法
                else if (typeof current[name] === 'function') {
                    var isLifetimeFn = componentLifetimesMethods.indexOf(name) !== -1;
                    if (isLifetimeFn) {
                        lifetimesFunctions[name] = lifetimesFunctions[name] || [];
                        lifetimesFunctions[name].push(current[name]);
                    }
                    // 非 lifetime method 只生效最后一个
                    else {
                        if (typeof result[name] === 'function') {
                            _morjs_api__WEBPACK_IMPORTED_MODULE_2__.logger.warn("".concat(mixinType, " \u4E2D\u91CD\u590D\u5B9A\u4E49\u65B9\u6CD5, \u5C06\u751F\u6548\u6700\u540E\u58F0\u660E\u7684"), name);
                        }
                        result[name] = current[name];
                    }
                }
                // 其他的 赋值
                else {
                    result[name] = current[name];
                }
            });
            return result;
        }, {});
    }
    var merged = processMixins(mixins, true);
    // 合并普通数据或方法
    Object.keys(merged).forEach(function (name) {
        if (name in componentOptions) {
            if (typeof merged[name] === 'object') {
                var currType = typeof componentOptions[name];
                if (currType !== 'object') {
                    _morjs_api__WEBPACK_IMPORTED_MODULE_2__.logger.warn("".concat(name, " \u5728 ").concat(mixinType, " \u4E2D\u5B9A\u4E49\u4E3A object, \u4F46\u662F\u5728\u5F53\u524D Component \u4E3A").concat(currType));
                    return;
                }
                componentOptions[name] = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_8__.__assign)({}, merged[name]), componentOptions[name]);
            }
        }
        else {
            componentOptions[name] = merged[name];
        }
    });
    // 合并 生命周期 函数
    Object.keys(lifetimesFunctions).forEach(function (name) {
        var _a;
        var originalFn = ((_a = componentOptions === null || componentOptions === void 0 ? void 0 : componentOptions.lifetimes) === null || _a === void 0 ? void 0 : _a[name]) || componentOptions[name];
        componentOptions[name] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            try {
                for (var _a = 0, _b = lifetimesFunctions[name]; _a < _b.length; _a++) {
                    var fn = _b[_a];
                    fn.call.apply(fn, (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__spreadArray)([this], args, false));
                }
            }
            catch (err) {
                _morjs_api__WEBPACK_IMPORTED_MODULE_2__.logger.error("".concat(mixinType, " \u51FD\u6570 ").concat(name, " \u62A5\u9519"), err);
            }
            if (originalFn)
                originalFn.call.apply(originalFn, (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__spreadArray)([this], args, false));
        };
        componentOptions.lifetimes[name] = componentOptions[name];
    });
}
/**
 * 增强 Component 组件
 * @param options - 小程序组件配置
 * @param sourceType - 小程序组件源码类型, 编译时由 Mor 自动填充
 * @param features - 功能特性配置
 */
function enhanceComponent(options, sourceType, features) {
    if (features === void 0) { features = {}; }
    _morjs_api__WEBPACK_IMPORTED_MODULE_2__.logger.time('component-init');
    if (!sourceType) {
        _morjs_api__WEBPACK_IMPORTED_MODULE_2__.logger.warn("createComponent \u7F3A\u5C11 sourceType \u53EF\u80FD\u4F1A\u5BFC\u81F4\u5C0F\u7A0B\u5E8F\u7EC4\u4EF6\u521D\u59CB\u5316\u9519\u8BEF");
    }
    var componentOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__assign)({}, options);
    var $morHooks = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_3__.getSharedProperty)('$morHooks', options);
    if (!$morHooks) {
        _morjs_api__WEBPACK_IMPORTED_MODULE_2__.logger.warn('createComponent 依赖于 $morHooks 的初始化, 请检查配置');
        return componentOptions;
    }
    // 确保 data 属性 和 methods 属性
    ensureDataAndMethodsAndLifetimes(componentOptions, sourceType);
    // 处理 mixins
    processMixinsOrBehaviors(componentOptions, 'mixins', sourceType);
    // 仅非支付宝DSL且目标为支付宝小程序运行环境需要处理 behaviors
    if (sourceType === _morjs_api__WEBPACK_IMPORTED_MODULE_0__.SOURCE_TYPE.WECHAT && isAlipayTarget) {
        processMixinsOrBehaviors(componentOptions, 'behaviors', sourceType);
    }
    // 触发 onConstruct, 兼容旧版本当 componentOnConstruct 不存在时用 componentOnInit 兜底
    if (features.invokeComponentHooks !== false) {
        var componentOnConstruct = $morHooks.componentOnConstruct || $morHooks.componentOnInit;
        componentOnConstruct.call(componentOptions, componentOptions);
    }
    // 是否需要添加 页面生命周期 支持，目前仅 支付宝及支付宝相关小程序运行环境 下需要
    var needsToHookPageLifetimes = componentOptions.pageLifetimes && isAlipayTarget;
    // 添加 生命周期 hook
    hookComponentLifeCycle(componentOptions, needsToHookPageLifetimes, sourceType, features.invokeComponentHooks !== false);
    // 添加 页面生命周期监听
    hookPageLifetimes(componentOptions, needsToHookPageLifetimes);
    // 添加 $eventListener 支持
    hookEventListener(componentOptions);
    // 跨端支持的组件运行时调用注入位置, '' 空字符串是为了防止该注释被移除
    // prettier-ignore
    componentTargetRuntime.initComponent(componentOptions);
    // 执行 component 适配器初始化
    if (COMPONENT_ADAPTERS === null || COMPONENT_ADAPTERS === void 0 ? void 0 : COMPONENT_ADAPTERS.length) {
        COMPONENT_ADAPTERS.forEach(function (adapter) {
            if (typeof (adapter === null || adapter === void 0 ? void 0 : adapter.initComponent) === 'function') {
                adapter.initComponent(componentOptions);
            }
            else {
                _morjs_api__WEBPACK_IMPORTED_MODULE_2__.logger.error("adapter.initComponent \u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570, \u8BF7\u68C0\u67E5");
            }
        });
    }
    _morjs_api__WEBPACK_IMPORTED_MODULE_2__.logger.timeEnd('component-init');
    return componentOptions;
}
/**
 * Component 组件注册
 * @param options - 小程序组件配置
 * @param sourceType - 小程序组件源码类型, 编译时由 Mor 自动填充
 */
function createComponent(options, sourceType) {
    _morjs_api__WEBPACK_IMPORTED_MODULE_2__.logger.time('component-init');
    var componentOptions = enhanceComponent(options, sourceType);
    _morjs_api__WEBPACK_IMPORTED_MODULE_2__.logger.timeEnd('component-init');
    return Component(componentOptions);
}
/**
 * 注册组件转端适配器
 * @param adapters - 组件转端适配器
 */
function registerComponentAdapters(adapters) {
    COMPONENT_ADAPTERS.push.apply(COMPONENT_ADAPTERS, (0,_morjs_api__WEBPACK_IMPORTED_MODULE_9__.asArray)(adapters));
}
/**
 * 支付宝 Component 组件注册
 * @param options - 小程序组件配置
 */
function aComponent(options) {
    return createComponent(options, _morjs_api__WEBPACK_IMPORTED_MODULE_0__.SOURCE_TYPE.ALIPAY);
}
/**
 * 微信 Component 组件注册
 * @param options - 小程序组件配置
 */
function wComponent(options) {
    return createComponent(options, _morjs_api__WEBPACK_IMPORTED_MODULE_0__.SOURCE_TYPE.WECHAT);
}
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/esm/page.js":
/*!***********************************************!*\
  !*** ../node_modules/@morjs/core/esm/page.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPage": function() { return /* binding */ createPage; },
/* harmony export */   "wPage": function() { return /* binding */ wPage; }
/* harmony export */ });
/* unused harmony exports enhancePage, registerPageAdapters, aPage */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _morjs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/runtime-base/esm/utils/getSharedProperty.js");
/* harmony import */ var _morjs_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/runtime-base/esm/logger.js");
/* harmony import */ var _morjs_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/runtime-base/esm/utils/generateId.js");
/* harmony import */ var _morjs_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/runtime-base/esm/utils/compose.js");
/* harmony import */ var _morjs_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/runtime-base/esm/env.js");
/* harmony import */ var _morjs_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/runtime-base/esm/utils/asArray.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants */ "../node_modules/@morjs/core/esm/utils/constants.js");
/* harmony import */ var _utils_invokeHook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/invokeHook */ "../node_modules/@morjs/core/esm/utils/invokeHook.js");
/* harmony import */ var _utils_invokeOriginalFunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/invokeOriginalFunction */ "../node_modules/@morjs/core/esm/utils/invokeOriginalFunction.js");
/* harmony import */ var _utils_isPromise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/isPromise */ "../node_modules/@morjs/core/esm/utils/isPromise.js");






// 跨端支持的页面运行时引用注入位置, '' 空字符串是为了防止该注释被移除
// prettier-ignore
var pageTargetRuntime = __webpack_require__(/*! ../node_modules/@morjs/runtime-mini/lib/alipay/pageToAlipay.js */ "../node_modules/@morjs/runtime-mini/lib/alipay/pageToAlipay.js");
// 转端适配器
var PAGE_ADAPTERS = [];
/**
 * 处理 Page 的生命周期
 */
function hookPageLifeCycle(pageOptions, sourceType) {
    /**
     * 增加 appLifetimes 的事件监听
     *
     * 使用方法如下:
     * ```
     * createPage({
     *   appLifetimes: {
     *     show() {}
     *     hide() {}
     *   }
     * })
     * ```
     */
    var registerAppLifetimes = function () {
        var appLifetimes = this.appLifetimes;
        if (!appLifetimes)
            return;
        var $event = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_0__.getSharedProperty)('$event', this);
        if (!$event) {
            return _morjs_api__WEBPACK_IMPORTED_MODULE_1__.logger.warn('createPage 中 appLifetimes 的运行依赖 $event，请检查配置');
        }
        // app show 支持
        if (appLifetimes.show) {
            if (typeof appLifetimes.show === 'function') {
                appLifetimes.show = appLifetimes.show.bind(this);
                $event.on(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.APP_ON_SHOW_EVENT, appLifetimes.show);
            }
            else {
                _morjs_api__WEBPACK_IMPORTED_MODULE_1__.logger.warn('appLifetimes 的 show 方法必须是 function');
            }
        }
        // app hide 支持
        if (appLifetimes.hide) {
            if (typeof appLifetimes.hide === 'function') {
                appLifetimes.hide = appLifetimes.hide.bind(this);
                $event.on(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.APP_ON_HIDE_EVENT, appLifetimes.hide);
            }
            else {
                _morjs_api__WEBPACK_IMPORTED_MODULE_1__.logger.warn('appLifetimes 的 hide 方法必须是 function');
            }
        }
    };
    /**
     * 取消 appLifetimes 的事件监听
     */
    var unregisterAppLifetimes = function () {
        var appLifetimes = this.appLifetimes;
        if (!appLifetimes)
            return;
        var $event = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_0__.getSharedProperty)('$event', this);
        if (!$event)
            return;
        if (appLifetimes.show)
            $event.off(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.APP_ON_SHOW_EVENT, appLifetimes.show);
        if (appLifetimes.hide)
            $event.off(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.APP_ON_HIDE_EVENT, appLifetimes.hide);
    };
    /**
     * 调用事件通知
     * @param eventName 事件标识
     */
    var invokeEvent = function (eventName) {
        return function (arg) {
            var $event = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_0__.getSharedProperty)('$event', this);
            if ($event && this.$morPageFlag) {
                $event.emit("$mor:".concat(eventName, ":").concat(this.$morPageFlag), arg);
            }
        };
    };
    /**
     * 增加 $eventListener 的事件监听
     */
    var addEventListeners = function () {
        var _this = this;
        var eventListener = this.$eventListener;
        if (!eventListener)
            return;
        var $event = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_0__.getSharedProperty)('$event', this);
        Object.keys(eventListener).forEach(function (eventName) {
            /**
             * 事件需要 bind this，否则实例并非一致
             * 事件如果绑定在 $eventListener 对象上，而非直接在 this 对象上
             * 会有隐藏 bug，导致 appx 底层框架在事件内调用 setData 时判断失效
             */
            _this["".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.MOR_EVENT_METHOD_PREFIX).concat(eventName)] =
                eventListener[eventName].bind(_this);
            $event.on(eventName, _this["".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.MOR_EVENT_METHOD_PREFIX).concat(eventName)]);
        });
    };
    /**
     * 去除 $eventListener 的事件监听
     */
    var removeEventListeners = function () {
        var _this = this;
        var eventListener = this.$eventListener;
        if (!eventListener)
            return;
        var $event = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_0__.getSharedProperty)('$event', this);
        Object.keys(eventListener).forEach(function (eventName) {
            $event.off(eventName, _this["".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.MOR_EVENT_METHOD_PREFIX).concat(eventName)]);
        });
    };
    /**
     *  确保必要的标示存在
     */
    var ensureViewIdExistance = function () {
        if (!('$viewId' in this))
            this.$viewId = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_3__.generateId)();
        this.$morPageFlag = String(this.$viewId);
    };
    pageOptions.onLoad = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_4__.compose)([
        ensureViewIdExistance,
        (0,_utils_invokeHook__WEBPACK_IMPORTED_MODULE_5__.invokeHook)('pageOnLoad'),
        addEventListeners,
        (0,_utils_invokeOriginalFunction__WEBPACK_IMPORTED_MODULE_6__.invokeOriginalFunction)('onLoad', pageOptions),
        registerAppLifetimes
    ]);
    pageOptions.onReady = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_4__.compose)([
        (0,_utils_invokeHook__WEBPACK_IMPORTED_MODULE_5__.invokeHook)('pageOnReady'),
        (0,_utils_invokeOriginalFunction__WEBPACK_IMPORTED_MODULE_6__.invokeOriginalFunction)('onReady', pageOptions),
        invokeEvent('pageOnReady')
    ]);
    pageOptions.onShow = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_4__.compose)([
        (0,_utils_invokeHook__WEBPACK_IMPORTED_MODULE_5__.invokeHook)('pageOnShow'),
        (0,_utils_invokeOriginalFunction__WEBPACK_IMPORTED_MODULE_6__.invokeOriginalFunction)('onShow', pageOptions),
        invokeEvent('pageOnShow')
    ]);
    pageOptions.onHide = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_4__.compose)([
        (0,_utils_invokeHook__WEBPACK_IMPORTED_MODULE_5__.invokeHook)('pageOnHide'),
        (0,_utils_invokeOriginalFunction__WEBPACK_IMPORTED_MODULE_6__.invokeOriginalFunction)('onHide', pageOptions),
        invokeEvent('pageOnHide')
    ]);
    pageOptions.onUnload = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_4__.compose)([
        (0,_utils_invokeHook__WEBPACK_IMPORTED_MODULE_5__.invokeHook)('pageOnUnload'),
        removeEventListeners,
        (0,_utils_invokeOriginalFunction__WEBPACK_IMPORTED_MODULE_6__.invokeOriginalFunction)('onUnload', pageOptions),
        unregisterAppLifetimes
    ]);
    // resize 支持
    // 区分支付宝和微信的 onResize 支持
    if (sourceType === _morjs_api__WEBPACK_IMPORTED_MODULE_7__.SOURCE_TYPE.ALIPAY) {
        pageOptions.events = pageOptions.events || {};
        var events = pageOptions.events;
        events.onResize = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_4__.compose)([
            (0,_utils_invokeOriginalFunction__WEBPACK_IMPORTED_MODULE_6__.invokeOriginalFunction)('onResize', pageOptions.events),
            invokeEvent('pageOnResize')
        ]);
    }
    else {
        pageOptions.onResize = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_4__.compose)([
            (0,_utils_invokeOriginalFunction__WEBPACK_IMPORTED_MODULE_6__.invokeOriginalFunction)('onResize', pageOptions),
            invokeEvent('pageOnResize')
        ]);
    }
}
// 通用
var PAGE_METHOD_NAMES = {
    onLoad: {},
    onShow: {},
    onHide: {},
    onReady: {},
    onUnload: {},
    onPullDownRefresh: {},
    onReachBottom: {},
    /**
     * 支付宝和微信表现不同
     * - 支付宝支持 promise, 这里直接对 promise 的结果进行合并
     * - 微信通过 { promise } 来获取异步结果, 且 3s 自动超时使用缺省内容, 这里仅做对象合并
     */
    onShareAppMessage: {
        r: function (previous, current) {
            if (previous == null)
                return current;
            if (current == null)
                return previous;
            if ((0,_utils_isPromise__WEBPACK_IMPORTED_MODULE_8__.isPromise)(previous) || (0,_utils_isPromise__WEBPACK_IMPORTED_MODULE_8__.isPromise)(current)) {
                return Promise.resolve(previous).then(function (p) {
                    return Promise.resolve(current).then(function (c) {
                        if (p == null)
                            return c;
                        if (c == null)
                            return p;
                        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_9__.__assign)({}, p), c);
                    });
                });
            }
            else {
                return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_9__.__assign)({}, previous), current);
            }
        }
    },
    onPageScroll: {}
};
// 微信小程序
var WECHAT_METHOD_NAMES = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_9__.__assign)({}, PAGE_METHOD_NAMES), { onShareTimeline: {
        r: function (previous, current) {
            if (previous == null)
                return current;
            if (current == null)
                return previous;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_9__.__assign)({}, previous), current);
        }
    }, onResize: {}, onAddToFavorites: {} });
// 支付宝小程序
var ALIPAY_METHOD_NAMES = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_9__.__assign)({}, PAGE_METHOD_NAMES), { onTitleClick: {}, onOptionMenuClick: {}, onPopMenuClick: {}, onPullIntercept: {}, onTabItemTap: {} });
function getPageMethodNames(sourceType) {
    return sourceType === _morjs_api__WEBPACK_IMPORTED_MODULE_7__.SOURCE_TYPE.WECHAT
        ? WECHAT_METHOD_NAMES
        : ALIPAY_METHOD_NAMES;
}
/**
 * 实现 createPage 的 mixins 机制
 * @param pageOptions
 */
function processMixins(pageOptions, sourceType) {
    var _a;
    if (!((_a = pageOptions === null || pageOptions === void 0 ? void 0 : pageOptions.mixins) === null || _a === void 0 ? void 0 : _a.length))
        return;
    var pageMethodNames = getPageMethodNames(sourceType);
    var mixins = pageOptions.mixins;
    delete pageOptions.mixins;
    var protoFns = {};
    var merged = mixins.reduce(function (prev, curr) {
        if (typeof curr !== 'object') {
            _morjs_api__WEBPACK_IMPORTED_MODULE_1__.logger.error('无效的 mixin: ', curr, '已跳过');
            return prev;
        }
        var result = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__assign)({}, prev);
        Object.keys(curr).forEach(function (name) {
            // 合并 数据
            if (typeof curr[name] === 'object') {
                // 对象类型还可能包含数组，对数组做单独处理
                if (Array.isArray(curr[name])) {
                    result[name] = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_9__.__spreadArray)([], (result[name] || []), true), curr[name], true);
                }
                else
                    result[name] = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_9__.__assign)({}, result[name]), curr[name]);
            }
            // 合并 方法
            else if (typeof curr[name] === 'function') {
                var isProtoFn = name in pageMethodNames;
                if (isProtoFn) {
                    protoFns[name] = protoFns[name] || [];
                    protoFns[name].push(curr[name]);
                }
                // 非 proto method 只生效最后一个
                else {
                    if (typeof result[name] === 'function') {
                        _morjs_api__WEBPACK_IMPORTED_MODULE_1__.logger.warn('mixins 中重复定义方法，将生效最后声明的', name);
                    }
                    result[name] = curr[name];
                }
            }
            // 其他的 赋值
            else {
                result[name] = curr[name];
            }
        });
        return result;
    }, {});
    Object.keys(merged).forEach(function (name) {
        if (name in pageOptions) {
            if (typeof merged[name] === 'object') {
                var currType = typeof pageOptions[name];
                if (currType !== 'object') {
                    _morjs_api__WEBPACK_IMPORTED_MODULE_1__.logger.warn("".concat(name, "\u5728 mixins \u4E2D\u5B9A\u4E49\u4E3A object, \u4F46\u662F\u5728\u5F53\u524D Page \u4E3A").concat(currType));
                    return;
                }
                pageOptions[name] = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_9__.__assign)({}, merged[name]), pageOptions[name]);
            }
        }
        else {
            pageOptions[name] = merged[name];
        }
    });
    // 处理 proto 方法的合并
    Object.keys(protoFns).forEach(function (name) {
        var originalFn = pageOptions[name];
        // 返回值
        var fnConfig = pageMethodNames[name];
        var result;
        pageOptions[name] = function () {
            var _a, _b;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            try {
                for (var _c = 0, _d = protoFns[name]; _c < _d.length; _c++) {
                    var fn = _d[_c];
                    var r = fn.call.apply(fn, (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__spreadArray)([this], args, false));
                    result = (_a = fnConfig === null || fnConfig === void 0 ? void 0 : fnConfig.r) === null || _a === void 0 ? void 0 : _a.call(fnConfig, result, r);
                }
            }
            catch (err) {
                _morjs_api__WEBPACK_IMPORTED_MODULE_1__.logger.error('mixins 函数报错', err);
            }
            if (originalFn) {
                var r = originalFn.call.apply(originalFn, (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__spreadArray)([this], args, false));
                result = (_b = fnConfig === null || fnConfig === void 0 ? void 0 : fnConfig.r) === null || _b === void 0 ? void 0 : _b.call(fnConfig, result, r);
            }
            if (fnConfig === null || fnConfig === void 0 ? void 0 : fnConfig.r)
                return result;
        };
    });
}
/**
 * 增强页面功能: 注入 adapters/hooks、转换声明周期等
 */
function enhancePage(options, sourceType) {
    if (!sourceType) {
        _morjs_api__WEBPACK_IMPORTED_MODULE_1__.logger.warn("createPage \u7F3A\u5C11 sourceType \u53EF\u80FD\u4F1A\u5BFC\u81F4\u5C0F\u7A0B\u5E8F\u9875\u9762\u521D\u59CB\u5316\u9519\u8BEF");
    }
    var $morHooks = (0,_morjs_api__WEBPACK_IMPORTED_MODULE_0__.getSharedProperty)('$morHooks', options);
    var pageOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__assign)({}, options);
    if (!$morHooks) {
        _morjs_api__WEBPACK_IMPORTED_MODULE_1__.logger.warn('createPage 依赖 $morHooks，请检查配置');
        return options;
    }
    // mixins 支持
    processMixins(pageOptions, sourceType);
    // 触发 pageOnConstruct hook, 兼容旧版本当 pageOnConstruct 不存在时用 pageOnInit 兜底
    var pageOnConstruct = $morHooks.pageOnConstruct || $morHooks.pageOnInit;
    pageOnConstruct.call(pageOptions, pageOptions);
    // 添加页面生命周期 hook
    hookPageLifeCycle(pageOptions, sourceType);
    // 跨端支持的页面运行时调用注入位置, '' 空字符串是为了防止该注释被移除
    // prettier-ignore
    pageTargetRuntime.initPage(pageOptions);
    // 执行 page 适配器初始化
    if (PAGE_ADAPTERS === null || PAGE_ADAPTERS === void 0 ? void 0 : PAGE_ADAPTERS.length) {
        PAGE_ADAPTERS.forEach(function (adapter) {
            if (typeof (adapter === null || adapter === void 0 ? void 0 : adapter.initPage) === 'function') {
                adapter.initPage(pageOptions);
            }
            else {
                _morjs_api__WEBPACK_IMPORTED_MODULE_1__.logger.error("adapter.initPage \u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570, \u8BF7\u68C0\u67E5");
            }
        });
    }
    return pageOptions;
}
/**
 * 注册 Page 函数
 */
function createPage(options, sourceType) {
    _morjs_api__WEBPACK_IMPORTED_MODULE_1__.logger.time('page-init');
    var pageOptions = enhancePage(options, sourceType);
    _morjs_api__WEBPACK_IMPORTED_MODULE_1__.logger.timeEnd('page-init');
    return Page(pageOptions);
}
/**
 * 注册页面转端适配器
 * @param adapters - 页面转端适配器
 */
function registerPageAdapters(adapters) {
    PAGE_ADAPTERS.push.apply(PAGE_ADAPTERS, (0,_morjs_api__WEBPACK_IMPORTED_MODULE_10__.asArray)(adapters));
}
/**
 * 支付宝 Page 页面注册
 * @param options - 小程序页面配置
 */
function aPage(options) {
    return createPage(options, _morjs_api__WEBPACK_IMPORTED_MODULE_7__.SOURCE_TYPE.ALIPAY);
}
/**
 * 微信 Page 页面注册
 * @param options - 小程序页面配置
 */
function wPage(options) {
    return createPage(options, _morjs_api__WEBPACK_IMPORTED_MODULE_7__.SOURCE_TYPE.WECHAT);
}
//# sourceMappingURL=page.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-base/esm/env.js":
/*!******************************************************!*\
  !*** ../node_modules/@morjs/runtime-base/esm/env.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ENV_TYPE": function() { return /* binding */ ENV_TYPE; },
/* harmony export */   "SOURCE_TYPE": function() { return /* binding */ SOURCE_TYPE; },
/* harmony export */   "getEnv": function() { return /* binding */ getEnv; },
/* harmony export */   "getEnvDesc": function() { return /* binding */ getEnvDesc; },
/* harmony export */   "getGlobalObject": function() { return /* binding */ getGlobalObject; }
/* harmony export */ });
/* unused harmony export ENV_TYPE_DESC */
/**
 * 支持的 env 类型
 * 用于 运行时判断
 */
var ENV_TYPE;
(function (ENV_TYPE) {
    /**
     * 微信小程序
     */
    ENV_TYPE["WECHAT"] = "WECHAT";
    /**
     * 支付宝小程序
     */
    ENV_TYPE["ALIPAY"] = "ALIPAY";
    /**
     * QQ 小程序
     */
    ENV_TYPE["QQ"] = "QQ";
    /**
     * 百度小程序
     */
    ENV_TYPE["BAIDU"] = "BAIDU";
    /**
     * 钉钉小程序
     */
    ENV_TYPE["DINGDING"] = "DINGDING";
    /**
     * 淘宝小程序
     */
    ENV_TYPE["TAOBAO"] = "TAOBAO";
    /**
     * 字节小程序
     */
    ENV_TYPE["BYTEDANCE"] = "BYTEDANCE";
    /**
     * 快手小程序
     */
    ENV_TYPE["KUAISHOU"] = "KUAISHOU";
    /**
     * Web 应用
     */
    ENV_TYPE["WEB"] = "WEB";
})(ENV_TYPE || (ENV_TYPE = {}));
/**
 * 支持的 env 类型描述
 */
var ENV_TYPE_DESC;
(function (ENV_TYPE_DESC) {
    /**
     * 微信小程序
     */
    ENV_TYPE_DESC["WECHAT"] = "\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F";
    /**
     * 支付宝小程序
     */
    ENV_TYPE_DESC["ALIPAY"] = "\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F";
    /**
     * QQ 小程序
     */
    ENV_TYPE_DESC["QQ"] = "QQ \u5C0F\u7A0B\u5E8F";
    /**
     * 百度小程序
     */
    ENV_TYPE_DESC["BAIDU"] = "\u767E\u5EA6\u5C0F\u7A0B\u5E8F";
    /**
     * 钉钉小程序
     */
    ENV_TYPE_DESC["DINGDING"] = "\u9489\u9489\u5C0F\u7A0B\u5E8F";
    /**
     * 淘宝小程序
     */
    ENV_TYPE_DESC["TAOBAO"] = "\u6DD8\u5B9D\u5C0F\u7A0B\u5E8F";
    /**
     * 字节小程序
     */
    ENV_TYPE_DESC["BYTEDANCE"] = "\u5B57\u8282\u5C0F\u7A0B\u5E8F";
    /**
     * 字节小程序
     */
    ENV_TYPE_DESC["KUAISHOU"] = "\u5FEB\u624B\u5C0F\u7A0B\u5E8F";
    /**
     * Web 应用
     */
    ENV_TYPE_DESC["WEB"] = "Web \u5E94\u7528";
})(ENV_TYPE_DESC || (ENV_TYPE_DESC = {}));
var SOURCE_TYPE;
(function (SOURCE_TYPE) {
    /**
     * 微信小程序 DSL 支持
     */
    SOURCE_TYPE["WECHAT"] = "w";
    /**
     * 支付宝小程序 DSL 支持
     */
    SOURCE_TYPE["ALIPAY"] = "a";
})(SOURCE_TYPE || (SOURCE_TYPE = {}));
var _ENV = null;
/**
 * 获取小程序运行环境
 * @returns 当前环境
 */
function getEnv() {
    if (_ENV)
        return _ENV;
    // 此处 tt 的判断需要在 wx 之前，因为在字节小程序中同时支持调用 tt 和 wx 对象
    if (typeof tt !== 'undefined' && tt.getSystemInfo) {
        _ENV = ENV_TYPE.BYTEDANCE;
        return _ENV;
    }
    // 此处 swan 的判断需要在 my 之前，因为在百度小程序初始化阶段含有 my 对象
    if (typeof swan !== 'undefined' && swan.getSystemInfo) {
        _ENV = ENV_TYPE.BAIDU;
        return _ENV;
    }
    if (typeof wx !== 'undefined' && wx.getSystemInfo) {
        _ENV = ENV_TYPE.WECHAT;
        return _ENV;
    }
    if (typeof dd !== 'undefined' && dd.getSystemInfo) {
        _ENV = ENV_TYPE.DINGDING;
        return _ENV;
    }
    if (typeof my !== 'undefined' &&
        typeof (my === null || my === void 0 ? void 0 : my.tb) !== 'undefined' &&
        my.getSystemInfo) {
        _ENV = ENV_TYPE.TAOBAO;
        return _ENV;
    }
    if (typeof my !== 'undefined' && my.getSystemInfo) {
        _ENV = ENV_TYPE.ALIPAY;
        return _ENV;
    }
    if (typeof qq !== 'undefined' && qq.getSystemInfo) {
        _ENV = ENV_TYPE.QQ;
        return _ENV;
    }
    if (typeof ks !== 'undefined' && ks.getSystemInfo) {
        _ENV = ENV_TYPE.KUAISHOU;
        return _ENV;
    }
    if (typeof window !== 'undefined') {
        _ENV = ENV_TYPE.WEB;
        return _ENV;
    }
    return 'Unknown environment';
}
/**
 * 获取当前环境描述信息
 * @returns 当前环境描述信息
 */
function getEnvDesc() {
    return ENV_TYPE_DESC[getEnv()];
}
/**
 * 获取全局对象
 * @returns 全局对象
 */
function getGlobalObject() {
    var env = getEnv();
    if (env === ENV_TYPE.WECHAT)
        return wx;
    if (env === ENV_TYPE.ALIPAY)
        return my;
    if (env === ENV_TYPE.TAOBAO)
        return my;
    if (env === ENV_TYPE.QQ)
        return qq;
    if (env === ENV_TYPE.BYTEDANCE)
        return tt;
    if (env === ENV_TYPE.BAIDU)
        return swan;
    if (env === ENV_TYPE.DINGDING)
        return dd;
    if (env === ENV_TYPE.KUAISHOU)
        return ks;
    if (env === ENV_TYPE.WEB)
        return window;
    return null;
}
//# sourceMappingURL=env.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/env.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/env.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ENV_TYPE": function() { return /* binding */ ENV_TYPE; },
/* harmony export */   "ENV_TYPE_DESC": function() { return /* binding */ ENV_TYPE_DESC; },
/* harmony export */   "SOURCE_TYPE": function() { return /* binding */ SOURCE_TYPE; },
/* harmony export */   "getEnv": function() { return /* binding */ getEnv; },
/* harmony export */   "getEnvDesc": function() { return /* binding */ getEnvDesc; },
/* harmony export */   "getGlobalObject": function() { return /* binding */ getGlobalObject; }
/* harmony export */ });
/**
 * 支持的 env 类型
 * 用于 运行时判断
 */
var ENV_TYPE;
(function (ENV_TYPE) {
    /**
     * 微信小程序
     */
    ENV_TYPE["WECHAT"] = "WECHAT";
    /**
     * 支付宝小程序
     */
    ENV_TYPE["ALIPAY"] = "ALIPAY";
    /**
     * QQ 小程序
     */
    ENV_TYPE["QQ"] = "QQ";
    /**
     * 百度小程序
     */
    ENV_TYPE["BAIDU"] = "BAIDU";
    /**
     * 钉钉小程序
     */
    ENV_TYPE["DINGDING"] = "DINGDING";
    /**
     * 淘宝小程序
     */
    ENV_TYPE["TAOBAO"] = "TAOBAO";
    /**
     * 字节小程序
     */
    ENV_TYPE["BYTEDANCE"] = "BYTEDANCE";
    /**
     * 快手小程序
     */
    ENV_TYPE["KUAISHOU"] = "KUAISHOU";
    /**
     * Web 应用
     */
    ENV_TYPE["WEB"] = "WEB";
})(ENV_TYPE || (ENV_TYPE = {}));
/**
 * 支持的 env 类型描述
 */
var ENV_TYPE_DESC;
(function (ENV_TYPE_DESC) {
    /**
     * 微信小程序
     */
    ENV_TYPE_DESC["WECHAT"] = "\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F";
    /**
     * 支付宝小程序
     */
    ENV_TYPE_DESC["ALIPAY"] = "\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F";
    /**
     * QQ 小程序
     */
    ENV_TYPE_DESC["QQ"] = "QQ \u5C0F\u7A0B\u5E8F";
    /**
     * 百度小程序
     */
    ENV_TYPE_DESC["BAIDU"] = "\u767E\u5EA6\u5C0F\u7A0B\u5E8F";
    /**
     * 钉钉小程序
     */
    ENV_TYPE_DESC["DINGDING"] = "\u9489\u9489\u5C0F\u7A0B\u5E8F";
    /**
     * 淘宝小程序
     */
    ENV_TYPE_DESC["TAOBAO"] = "\u6DD8\u5B9D\u5C0F\u7A0B\u5E8F";
    /**
     * 字节小程序
     */
    ENV_TYPE_DESC["BYTEDANCE"] = "\u5B57\u8282\u5C0F\u7A0B\u5E8F";
    /**
     * 字节小程序
     */
    ENV_TYPE_DESC["KUAISHOU"] = "\u5FEB\u624B\u5C0F\u7A0B\u5E8F";
    /**
     * Web 应用
     */
    ENV_TYPE_DESC["WEB"] = "Web \u5E94\u7528";
})(ENV_TYPE_DESC || (ENV_TYPE_DESC = {}));
var SOURCE_TYPE;
(function (SOURCE_TYPE) {
    /**
     * 微信小程序 DSL 支持
     */
    SOURCE_TYPE["WECHAT"] = "w";
    /**
     * 支付宝小程序 DSL 支持
     */
    SOURCE_TYPE["ALIPAY"] = "a";
})(SOURCE_TYPE || (SOURCE_TYPE = {}));
var _ENV = null;
/**
 * 获取小程序运行环境
 * @returns 当前环境
 */
function getEnv() {
    if (_ENV)
        return _ENV;
    // 此处 tt 的判断需要在 wx 之前，因为在字节小程序中同时支持调用 tt 和 wx 对象
    if (typeof tt !== 'undefined' && tt.getSystemInfo) {
        _ENV = ENV_TYPE.BYTEDANCE;
        return _ENV;
    }
    // 此处 swan 的判断需要在 my 之前，因为在百度小程序初始化阶段含有 my 对象
    if (typeof swan !== 'undefined' && swan.getSystemInfo) {
        _ENV = ENV_TYPE.BAIDU;
        return _ENV;
    }
    if (typeof wx !== 'undefined' && wx.getSystemInfo) {
        _ENV = ENV_TYPE.WECHAT;
        return _ENV;
    }
    if (typeof dd !== 'undefined' && dd.getSystemInfo) {
        _ENV = ENV_TYPE.DINGDING;
        return _ENV;
    }
    if (typeof my !== 'undefined' &&
        typeof (my === null || my === void 0 ? void 0 : my.tb) !== 'undefined' &&
        my.getSystemInfo) {
        _ENV = ENV_TYPE.TAOBAO;
        return _ENV;
    }
    if (typeof my !== 'undefined' && my.getSystemInfo) {
        _ENV = ENV_TYPE.ALIPAY;
        return _ENV;
    }
    if (typeof qq !== 'undefined' && qq.getSystemInfo) {
        _ENV = ENV_TYPE.QQ;
        return _ENV;
    }
    if (typeof ks !== 'undefined' && ks.getSystemInfo) {
        _ENV = ENV_TYPE.KUAISHOU;
        return _ENV;
    }
    if (typeof window !== 'undefined') {
        _ENV = ENV_TYPE.WEB;
        return _ENV;
    }
    return 'Unknown environment';
}
/**
 * 获取当前环境描述信息
 * @returns 当前环境描述信息
 */
function getEnvDesc() {
    return ENV_TYPE_DESC[getEnv()];
}
/**
 * 获取全局对象
 * @returns 全局对象
 */
function getGlobalObject() {
    var env = getEnv();
    if (env === ENV_TYPE.WECHAT)
        return wx;
    if (env === ENV_TYPE.ALIPAY)
        return my;
    if (env === ENV_TYPE.TAOBAO)
        return my;
    if (env === ENV_TYPE.QQ)
        return qq;
    if (env === ENV_TYPE.BYTEDANCE)
        return tt;
    if (env === ENV_TYPE.BAIDU)
        return swan;
    if (env === ENV_TYPE.DINGDING)
        return dd;
    if (env === ENV_TYPE.KUAISHOU)
        return ks;
    if (env === ENV_TYPE.WEB)
        return window;
    return null;
}
//# sourceMappingURL=env.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-base/esm/event.js":
/*!********************************************************!*\
  !*** ../node_modules/@morjs/runtime-base/esm/event.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEvent": function() { return /* binding */ createEvent; },
/* harmony export */   "event": function() { return /* binding */ event; }
/* harmony export */ });
/* unused harmony export getAllEvents */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
// 搜集所有创建的 Emitter 实例
// 主要用于 调试或检查
var EVENT_EMITTER_INSTANCES = {};
/**
 * 创建 Emitter 实例
 * @param reason - 事件创建原因, 用于统计
 * @param all - 自定义 Map 用于存储事件名称和事件处理函数
 * @returns Emitter
 */
function createEvent(reason, all) {
    all = all || new Map();
    function on(type, handler) {
        var handlers = all.get(type);
        if (handlers) {
            handlers.push(handler);
        }
        else {
            all.set(type, [handler]);
        }
    }
    function off(type, handler) {
        var handlers = all.get(type);
        if (handlers) {
            if (handler) {
                handlers.splice(handlers.indexOf(handler) >>> 0, 1);
            }
            else {
                all.set(type, []);
            }
        }
    }
    function emit(type, evt) {
        var handlers = all.get(type);
        if (handlers) {
            ;
            handlers
                .slice()
                .map(function (handler) {
                handler(evt);
            });
        }
        handlers = all.get('*');
        if (handlers) {
            ;
            handlers.slice().map(function (handler) {
                handler(type, evt);
            });
        }
    }
    function once(type, handler) {
        if (type === '*') {
            var fn_1 = function (type, event) {
                off(type, fn_1);
                handler(type, event);
            };
            on(type, fn_1);
        }
        else {
            var fn_2 = function (event) {
                off(type, fn_2);
                handler(event);
            };
            on(type, fn_2);
        }
    }
    var emitter = {
        all: all,
        on: on,
        off: off,
        emit: emit,
        once: once
    };
    // 记录创建的 event
    EVENT_EMITTER_INSTANCES[reason] = EVENT_EMITTER_INSTANCES[reason] || [];
    EVENT_EMITTER_INSTANCES[reason].push({
        createdAt: +new Date(),
        event: emitter
    });
    return emitter;
}
/**
 * 获取所有 event 实例
 */
function getAllEvents() {
    return EVENT_EMITTER_INSTANCES;
}
/**
 * 全局默认 Event
 */
var event = createEvent('default');
//# sourceMappingURL=event.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-base/esm/hooks.js":
/*!********************************************************!*\
  !*** ../node_modules/@morjs/runtime-base/esm/hooks.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applySolutions": function() { return /* binding */ applySolutions; },
/* harmony export */   "createHooks": function() { return /* binding */ createHooks; },
/* harmony export */   "hooks": function() { return /* binding */ hooks; }
/* harmony export */ });
/* unused harmony exports SyncHook, getAllHooks, applyPlugins */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "../node_modules/@morjs/runtime-base/esm/logger.js");
/* harmony import */ var _utils_asArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/asArray */ "../node_modules/@morjs/runtime-base/esm/utils/asArray.js");



var HookInvokeState;
(function (HookInvokeState) {
    HookInvokeState["pausing"] = "pausing";
    HookInvokeState["resuming"] = "resuming";
})(HookInvokeState || (HookInvokeState = {}));
/**
 * 同步 Hook
 */
var SyncHook = /** @class */ (function () {
    /**
     * @constructor
     * @param name - Hook 名称
     */
    function SyncHook(name, sharedState) {
        this.name = name || '';
        this.taps = [];
        this.sharedState = sharedState;
    }
    /**
     * 返回 hook 是否已被使用
     */
    SyncHook.prototype.isUsed = function () {
        return this.taps.length > 0;
    };
    /**
     * 创建 hook alias
     * @param name Hook 名称
     */
    SyncHook.prototype.alias = function (name) {
        var aliasHook = new SyncHook(name, this.sharedState);
        // 这里直接使用 taps 数组, 方便 alias Hook 共用
        aliasHook.taps = this.taps;
        return aliasHook;
    };
    /**
     * 添加 hook 插件
     * @param nameOrOptions 名称或选项
     * @param fn 函数
     */
    SyncHook.prototype.tap = function (nameOrOptions, fn) {
        var _a;
        var name;
        var stage;
        if (typeof nameOrOptions === 'string') {
            name = nameOrOptions;
            stage = 0;
        }
        else {
            name = nameOrOptions.name;
            stage = (_a = nameOrOptions.stage) !== null && _a !== void 0 ? _a : 0;
        }
        if (name == null) {
            _logger__WEBPACK_IMPORTED_MODULE_0__.logger.error("$hooks.".concat(this.name, ".tap \u7F3A\u5C11 name"));
        }
        this.taps.push({
            type: 'sync',
            name: name,
            stage: stage,
            fn: fn
        });
    };
    /**
     * 执行 hook
     * @param context 上下文
     * @param args 参数列表
     */
    SyncHook.prototype.call = function (context) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // 按照 stage 排序
        var taps = this.taps.sort(function (a, b) {
            return a.stage - b.stage;
        });
        for (var _b = 0, taps_1 = taps; _b < taps_1.length; _b++) {
            var tap = taps_1[_b];
            // 暂停中的 hook 将所有调用保存到堆栈中，等待后续恢复
            if (this.isPausing()) {
                this.sharedState.stack.push([this.name, tap, context, args]);
            }
            else {
                try {
                    (_a = tap.fn).call.apply(_a, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([context], args, false));
                }
                catch (err) {
                    _logger__WEBPACK_IMPORTED_MODULE_0__.logger.error(this.name, tap.name, err);
                }
            }
        }
    };
    SyncHook.prototype.isPausing = function () {
        var _a;
        var state = this.sharedState;
        // 当触发了 $hooks.pause 暂停，若未传入需要指定暂停的 hooks 则暂停所有生命周期触发
        // 若传入了某些指定的 hooks 数组，则只暂停这些传入 hooks
        if ((state === null || state === void 0 ? void 0 : state.state) !== HookInvokeState.pausing)
            return false;
        if (((_a = state.hooksNameList) === null || _a === void 0 ? void 0 : _a.length) === 0)
            return true;
        if (state.hooksNameList.indexOf(this.name) !== -1)
            return true;
        return false;
    };
    return SyncHook;
}());

// 搜集所有创建的 hooks 实例
// 主要用于 调试或检查
var HOOKS_INSTANCES = {};
/**
 * 创建 hooks 对象
 * @param reason Hooks 创建原因
 * @returns hooks 对象
 */
function createHooks(reason) {
    var sharedState = {
        state: HookInvokeState.resuming,
        stack: [],
        hooksNameList: []
    };
    var appOnConstruct = new SyncHook('appOnConstruct', sharedState);
    var pageOnConstructHook = new SyncHook('pageOnConstruct', sharedState);
    var componentOnInitHook = new SyncHook('componentOnInit', sharedState);
    var componentDidMountHook = new SyncHook('componentDidMount', sharedState);
    var componentDidUnmountHook = new SyncHook('componentDidUnmount', sharedState);
    var componentOnError = new SyncHook('componentOnError', sharedState);
    var hooks = {
        /* App 相关 hooks */
        appOnConstruct: appOnConstruct,
        // appOnInit 已废弃, 这里出于兼容性暂不移除
        appOnInit: appOnConstruct.alias('appOnInit'),
        appOnLaunch: new SyncHook('appOnLaunch', sharedState),
        appOnError: new SyncHook('appOnError', sharedState),
        appOnShow: new SyncHook('appOnShow', sharedState),
        appOnHide: new SyncHook('appOnHide', sharedState),
        appOnPageNotFound: new SyncHook('appOnPageNotFound', sharedState),
        appOnUnhandledRejection: new SyncHook('appOnUnhandledRejection', sharedState),
        /* Page 相关 hooks */
        pageOnConstruct: pageOnConstructHook,
        // pageOnInit 已废弃, 这里出于兼容性暂不移除
        pageOnInit: pageOnConstructHook.alias('pageOnInit'),
        pageOnLoad: new SyncHook('pageOnLoad', sharedState),
        pageOnReady: new SyncHook('pageOnReady', sharedState),
        pageOnShow: new SyncHook('pageOnShow', sharedState),
        pageOnHide: new SyncHook('pageOnHide', sharedState),
        pageOnUnload: new SyncHook('pageOnUnload', sharedState),
        /* Component 相关 hooks */
        componentOnConstruct: new SyncHook('componentOnConstruct', sharedState),
        componentOnInit: componentOnInitHook,
        componentOnCreated: componentOnInitHook.alias('componentOnCreated'),
        componentDidMount: componentDidMountHook,
        componentOnAttached: componentDidMountHook.alias('componentOnAttached'),
        componentDidUnmount: componentDidUnmountHook,
        componentOnDetached: componentDidUnmountHook.alias('componentOnDetached'),
        componentOnError: componentOnError,
        pause: function (hooksNameList) {
            sharedState.state = HookInvokeState.pausing;
            sharedState.hooksNameList = hooksNameList || [];
        },
        resume: function () {
            var _a;
            sharedState.state = HookInvokeState.resuming;
            var stackItem = sharedState.stack.shift();
            while (stackItem) {
                var name_1 = stackItem[0], tap = stackItem[1], context = stackItem[2], args = stackItem[3];
                try {
                    tap === null || tap === void 0 ? void 0 : (_a = tap.fn).call.apply(_a, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([context], args, false));
                }
                catch (error) {
                    _logger__WEBPACK_IMPORTED_MODULE_0__.logger.error(name_1, tap.name, error);
                }
                stackItem = sharedState.stack.shift();
            }
        }
    };
    // 记录创建的所有 hooks
    HOOKS_INSTANCES[reason] = HOOKS_INSTANCES[reason] || [];
    HOOKS_INSTANCES[reason].push({
        createdAt: +new Date(),
        hooks: hooks
    });
    return hooks;
}
/**
 * 获取所有 hooks
 */
function getAllHooks() {
    return HOOKS_INSTANCES;
}
/**
 * 获取全局共享属性，用于作为原子化的兜底实现
 *   1. 首先查找上下文中的属性
 *   2. 如果不存在，则查找 getApp 中的
 *   3. 如果不存在，则查找 小程序环境的 globalObject, 如 my 中是否存在
 */
var hooks = createHooks('default');
/**
 * 应用插件
 * @param hooks Hooks
 * @param plugins 插件列表
 */
function applyPlugins(hooks, plugins) {
    var pluginsNames = [];
    plugins.forEach(function (plugin) {
        try {
            plugin.apply(hooks);
            pluginsNames.push(plugin.pluginName);
        }
        catch (err) {
            _logger__WEBPACK_IMPORTED_MODULE_0__.logger.error("[plugin ".concat(plugin.pluginName, "]: \u521D\u59CB\u5316\u62A5\u9519"), err);
        }
    });
    return pluginsNames;
}
/**
 * 应用 Solutions
 * @param hooks Hooks
 * @param solutions 插件集列表
 */
function applySolutions(hooks, solution) {
    var solutions = (0,_utils_asArray__WEBPACK_IMPORTED_MODULE_2__.asArray)(solution);
    var plugins = [];
    try {
        solutions.forEach(function (solution) {
            var _a;
            if (typeof solution === 'function') {
                plugins = plugins.concat(((_a = solution()) === null || _a === void 0 ? void 0 : _a.plugins) || []);
            }
            else {
                _logger__WEBPACK_IMPORTED_MODULE_0__.logger.error("\u521D\u59CB\u5316\u8FD0\u884C\u65F6\u63D2\u4EF6\u5931\u8D25, \u539F\u56E0: ".concat(solution, " \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684 solution"));
            }
        });
    }
    catch (err) {
        _logger__WEBPACK_IMPORTED_MODULE_0__.logger.error("\u521D\u59CB\u5316\u8FD0\u884C\u65F6\u63D2\u4EF6\u5931\u8D25, \u539F\u56E0: ".concat(err));
    }
    return applyPlugins(hooks, plugins);
}
//# sourceMappingURL=hooks.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-base/esm/logger.js":
/*!*********************************************************!*\
  !*** ../node_modules/@morjs/runtime-base/esm/logger.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": function() { return /* binding */ logger; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");

var PREFIX = '[mor]';
function warn() {
    var msgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        msgs[_i] = arguments[_i];
    }
    console.warn && console.warn.apply(console, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([PREFIX], msgs, false));
}
function log() {
    var msgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        msgs[_i] = arguments[_i];
    }
    console.log && console.log.apply(console, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([PREFIX], msgs, false));
}
function error() {
    var msgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        msgs[_i] = arguments[_i];
    }
    console.error && console.error.apply(console, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([PREFIX], msgs, false));
}
function info() {
    var msgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        msgs[_i] = arguments[_i];
    }
    console.info && console.info.apply(console, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([PREFIX], msgs, false));
}
function debug() {
    var msgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        msgs[_i] = arguments[_i];
    }
    console.debug && console.debug.apply(console, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([PREFIX], msgs, false));
}
function deprecated(msg, fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        warn(msg);
        return fn.apply(void 0, args);
    };
}
var PERFORMANCE_TIMERS = {};
/**
 * 记录时间开始
 * @param label 标签
 */
function time(label) {
    PERFORMANCE_TIMERS[label] = +new Date();
}
/**
 * 记录时间结束并输出耗时
 * 大于 50ms 时会输出 warn
 * @param label 标签
 */
function timeEnd(label) {
    var start = PERFORMANCE_TIMERS[label];
    if (start) {
        delete PERFORMANCE_TIMERS[label];
        var millis = Date.now() - start;
        var msg = "".concat(label, " \u8017\u65F6: ").concat(millis, "ms");
        // 超过 50 ms
        // 输出警告
        millis > 50 ? warn(msg) : debug(msg);
    }
}
var logger = {
    warn: warn,
    log: log,
    error: error,
    info: info,
    debug: debug,
    deprecated: deprecated,
    time: time,
    timeEnd: timeEnd
};
//# sourceMappingURL=logger.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-base/esm/utils/asArray.js":
/*!****************************************************************!*\
  !*** ../node_modules/@morjs/runtime-base/esm/utils/asArray.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asArray": function() { return /* binding */ asArray; }
/* harmony export */ });
/**
 * 确保一个对象是数组
 *  - 如果 对象 == null 则返回空数组
 *  - 如果 对象不是数组 则返回包含该对象的数组
 *  - 如果 对象是数组 直接返回
 * @param arr - 需要转换为数组的参数
 * @returns 数组
 */
function asArray(arr) {
    return Array.isArray(arr) ? arr : arr == null ? [] : [arr];
}
//# sourceMappingURL=asArray.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-base/esm/utils/compose.js":
/*!****************************************************************!*\
  !*** ../node_modules/@morjs/runtime-base/esm/utils/compose.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compose": function() { return /* binding */ compose; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");

/**
 * 将多个函数合并为一个函数
 * @param stack - 函数堆栈
 * @returns 合并后的函数
 */
function compose(stack) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var _a = 0, stack_1 = stack; _a < stack_1.length; _a++) {
            var fn = stack_1[_a];
            if (Object.prototype.toString.call(fn) === '[object Function]') {
                fn.call.apply(fn, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([this], args, false));
            }
        }
    };
}
//# sourceMappingURL=compose.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-base/esm/utils/generateId.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@morjs/runtime-base/esm/utils/generateId.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateId": function() { return /* binding */ generateId; }
/* harmony export */ });
var ID = 0;
/**
 * 生成 ID
 */
function generateId() {
    return ++ID;
}
//# sourceMappingURL=generateId.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-base/esm/utils/getSharedProperty.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@morjs/runtime-base/esm/utils/getSharedProperty.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSharedProperty": function() { return /* binding */ getSharedProperty; }
/* harmony export */ });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../env */ "../node_modules/@morjs/runtime-base/esm/env.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event */ "../node_modules/@morjs/runtime-base/esm/event.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks */ "../node_modules/@morjs/runtime-base/esm/hooks.js");



// 默认的共享对象
var SHARED = {
    $morHooks: _hooks__WEBPACK_IMPORTED_MODULE_0__.hooks,
    $event: _event__WEBPACK_IMPORTED_MODULE_1__.event
};
/**
 * 获取全局共享属性，用于作为原子化的兜底实现
 *   1. 首先查找上下文中对应的属性
 *   2. 如果不存在，则查找 getApp 中的
 *   3. 如果不存在，则查找 小程序环境的 globalObject, 如 my 中是否存在
 *   4. 如果不存在，则使用 SHARED 作为兜底
 * @param propName - 共享属性名称
 * @param context - 当前执行环境的上下文
 * @returns propValue
 */
function getSharedProperty(propName, context) {
    // 先从当前上下文张获取，如果上下文存在的话
    if (context && context[propName] != null)
        return context[propName];
    // 尝试从 getApp 中获取
    if (typeof getApp === 'function') {
        var app = getApp();
        if (app && app[propName] != null)
            return app[propName];
    }
    // 从全局对象中获取
    var globalObj = (0,_env__WEBPACK_IMPORTED_MODULE_2__.getGlobalObject)();
    if (globalObj && globalObj[propName] != null)
        return globalObj[propName];
    return SHARED[propName];
}
//# sourceMappingURL=getSharedProperty.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-base/esm/utils/hasOwnProperty.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@morjs/runtime-base/esm/utils/hasOwnProperty.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasOwnProperty": function() { return /* binding */ hasOwnProperty; }
/* harmony export */ });
/**
 * 对象中是否包含对应的属性
 * @param obj - 对象
 * @param propertyName - 属性名称
 * @returns true or false
 */
function hasOwnProperty(obj, propertyName) {
    return Object.prototype.hasOwnProperty.call(obj, propertyName);
}
//# sourceMappingURL=hasOwnProperty.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-base/esm/utils/transformApis.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@morjs/runtime-base/esm/utils/transformApis.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "markAsUnsupport": function() { return /* binding */ markAsUnsupport; },
/* harmony export */   "transformApis": function() { return /* binding */ transformApis; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../env */ "../node_modules/@morjs/runtime-base/esm/env.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logger */ "../node_modules/@morjs/runtime-base/esm/logger.js");
/* harmony import */ var _hasOwnProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hasOwnProperty */ "../node_modules/@morjs/runtime-base/esm/utils/hasOwnProperty.js");




/**
 * 获取原始小程序 request 函数
 * @param global 小程序全局对象
 * @returns request 函数
 */
function getOriginalRequest(global) {
    return function request(options) {
        options = options || {};
        if (typeof options === 'string') {
            options = {
                url: options
            };
        }
        var originSuccess = options.success;
        var originFail = options.fail;
        var originComplete = options.complete;
        var requestTask;
        var p = new Promise(function (resolve, reject) {
            options.success = function (res) {
                originSuccess && originSuccess(res);
                resolve(res);
            };
            options.fail = function (res) {
                originFail && originFail(res);
                reject(res);
            };
            options.complete = function (res) {
                originComplete && originComplete(res);
            };
            requestTask = global.request(options);
        });
        p.abort = function (cb) {
            cb && cb();
            if (requestTask) {
                requestTask.abort();
            }
            return p;
        };
        return p;
    };
}
/**
 * 接口抹平转换
 * @param mor - mor 接口对象
 * @param global - 小程序目标平台全局对象
 * @param config - 接口抹平配置
 * @param installAllGlobalApis - 是否在 mor 中添加所有的 API
 * @param allowOverride - 是否允许覆盖 API
 */
function transformApis(mor, global, config, installAllGlobalApis, allowOverride) {
    if (config === void 0) { config = {}; }
    if (installAllGlobalApis === void 0) { installAllGlobalApis = false; }
    if (allowOverride === void 0) { allowOverride = true; }
    var needPromisfiedApis = config.needPromisfiedApis || [];
    var apiTransformConfig = config.apiTransformConfig || {};
    var preservedApis = [
        'global',
        'env',
        'getApp',
        'getCurrentPages',
        'requirePlugin',
        'getEnv'
    ];
    // 获取所有需要抹平的接口
    var allApiNames = installAllGlobalApis ? Object.keys(global) : [];
    // 合并需要处理的接口名称
    Object.keys(apiTransformConfig)
        .concat(needPromisfiedApis)
        .forEach(function (apiName) {
        if (allApiNames.indexOf(apiName) === -1) {
            allApiNames.push(apiName);
        }
    });
    // 处理接口差异
    allApiNames.forEach(function (apiName) {
        // 不处理 preserved 的 api
        if (preservedApis.indexOf(apiName) !== -1)
            return;
        // 不处理 mor_ 开头的属性
        if (/^mor_/.test(apiName))
            return;
        // 不重复添加接口
        if (allowOverride === false && apiName in mor)
            return;
        var apiConfig = apiTransformConfig[apiName];
        // 非函数处理
        if (global[apiName] && typeof global[apiName] !== 'function') {
            mor[apiName] = global[apiName];
            return;
        }
        // 函数处理
        mor[apiName] = function (options) {
            var _a;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            // options 差异抹平
            if (typeof (apiConfig === null || apiConfig === void 0 ? void 0 : apiConfig.opts) === 'function') {
                apiConfig.opts.apply(apiConfig, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([options], args, false));
            }
            else if (apiConfig === null || apiConfig === void 0 ? void 0 : apiConfig.opts) {
                var change = apiConfig.opts.c;
                var set = apiConfig.opts.s;
                if (options == null)
                    options = {};
                // 替换 键值
                if (change) {
                    change.forEach(function (item) {
                        if (item.o in options)
                            options[item.n] = options[item.o];
                    });
                }
                // 改写值
                if (set) {
                    set.forEach(function (item) {
                        options[item.k] =
                            typeof item.v === 'function' ? item.v(options) : item.v;
                    });
                }
            }
            // 实际接口名称
            var actualApiName = (apiConfig === null || apiConfig === void 0 ? void 0 : apiConfig.n) || apiName;
            var task = null;
            var obj = Object.assign({}, options);
            // 执行替换函数
            if (typeof (apiConfig === null || apiConfig === void 0 ? void 0 : apiConfig.fn) === 'function') {
                return apiConfig.fn.apply(apiConfig, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([global, options], args, false));
            }
            // 处理 request
            if (actualApiName === 'request') {
                return getOriginalRequest(global)(options);
            }
            // promisify 处理
            if (needPromisfiedApis.indexOf(apiName) !== -1) {
                // 新 apiName 可能不存在
                if (!(0,_hasOwnProperty__WEBPACK_IMPORTED_MODULE_1__.hasOwnProperty)(global, actualApiName)) {
                    return Promise.resolve(markAsUnsupport(actualApiName)());
                }
                // Promise 化
                var p_1 = new Promise(function (resolve, reject) {
                    obj.success = function (res) {
                        var _a, _b;
                        (_a = apiConfig === null || apiConfig === void 0 ? void 0 : apiConfig.r) === null || _a === void 0 ? void 0 : _a.call(apiConfig, res);
                        (_b = options === null || options === void 0 ? void 0 : options.success) === null || _b === void 0 ? void 0 : _b.call(options, res);
                        if (actualApiName === 'connectSocket') {
                            resolve(Promise.resolve().then(function () {
                                return task ? Object.assign(task, res) : res;
                            }));
                        }
                        else {
                            resolve(res);
                        }
                    };
                    obj.fail = function (res) {
                        var _a;
                        (_a = options === null || options === void 0 ? void 0 : options.fail) === null || _a === void 0 ? void 0 : _a.call(options, res);
                        // 如果用户传入了 fail 则代表用户自行处理错误
                        // mor 不再抛出 promise 错误, 只标记完成
                        if (typeof (options === null || options === void 0 ? void 0 : options.fail) === 'function') {
                            resolve(null);
                        }
                        else {
                            reject(res);
                        }
                        _logger__WEBPACK_IMPORTED_MODULE_2__.logger.error("\u63A5\u53E3 ".concat(actualApiName, " \u8C03\u7528\u9519\u8BEF: "), res, "\n\u53C2\u6570: ", (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([
                            options
                        ], args, true));
                    };
                    obj.complete = function (res) {
                        var _a;
                        (_a = options === null || options === void 0 ? void 0 : options.complete) === null || _a === void 0 ? void 0 : _a.call(options, res);
                    };
                    if (args.length) {
                        task = global[actualApiName].apply(global, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([obj], args, false));
                    }
                    else {
                        task = global[actualApiName](obj);
                    }
                });
                // 给 promise 对象挂载属性
                if (actualApiName === 'uploadFile' ||
                    actualApiName === 'downloadFile') {
                    p_1.progress = function (cb) {
                        var _a;
                        (_a = task === null || task === void 0 ? void 0 : task.onProgressUpdate) === null || _a === void 0 ? void 0 : _a.call(task, cb);
                        return p_1;
                    };
                    p_1.abort = function (cb) {
                        var _a;
                        cb === null || cb === void 0 ? void 0 : cb();
                        (_a = task === null || task === void 0 ? void 0 : task.abort) === null || _a === void 0 ? void 0 : _a.call(task);
                        return p_1;
                    };
                }
                return p_1;
            }
            else {
                // 新 apiName 可能不存在
                if (!(0,_hasOwnProperty__WEBPACK_IMPORTED_MODULE_1__.hasOwnProperty)(global, actualApiName)) {
                    return markAsUnsupport(actualApiName)();
                }
                var res = global[actualApiName].apply(global, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([options], args, false));
                (_a = apiConfig === null || apiConfig === void 0 ? void 0 : apiConfig.r) === null || _a === void 0 ? void 0 : _a.call(apiConfig, res);
                return res;
            }
        };
    });
}
/**
 * 返回暂不支持的 函数
 * @param apiName - 接口名称
 */
function markAsUnsupport(apiName) {
    return function () {
        _logger__WEBPACK_IMPORTED_MODULE_2__.logger.warn("".concat((0,_env__WEBPACK_IMPORTED_MODULE_3__.getEnvDesc)(), "\u6682\u4E0D\u652F\u6301 ").concat(apiName));
    };
}
//# sourceMappingURL=transformApis.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-mini/lib/alipay/apisToAlipay.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@morjs/runtime-mini/lib/alipay/apisToAlipay.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initApi = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
var runtime_base_1 = __webpack_require__(/*! @morjs/runtime-base */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/index.js");
var apis_1 = __webpack_require__(/*! ../wechat/apis */ "../node_modules/@morjs/runtime-mini/lib/wechat/apis.js");
//  changeToBuffer
var changeToBuffer = function (str) {
    var buffer = new ArrayBuffer(str.length / 2);
    var dataView = new DataView(buffer);
    for (var i = 0; i < str.length; i += 2) {
        dataView.setUint8(i / 2, parseInt(str.substr(i, 2), 16));
    }
    return buffer;
};
/**
 * 支付宝和微信接口的差异
 * 以微信为准
 * 微信 转 支付宝
 */
var apiTransformConfig = {
    showActionSheet: {
        opts: {
            c: [{ o: 'itemList', n: 'items' }]
        }
    },
    showToast: {
        fn: function (global, options) {
            if (options === void 0) { options = {}; }
            // 映射 title 为 content
            if ('title' in options) {
                options.content = options.title;
                delete options.title;
            }
            // 微信或其他端默认为 'success'
            // 而支付宝默认为 'none'
            // 所以这里默认返回 success 以确保行为一致
            options.type = options.icon || 'success';
            delete options.icon;
            // 针对 loading 特殊处理
            if (options.type === 'loading') {
                global.showLoading(options);
            }
            // 其他类型直接使用 showToast
            else {
                if (options.type === 'error') {
                    options.type = 'fail';
                }
                global.showToast(options);
            }
        }
    },
    showLoading: {
        opts: {
            c: [{ o: 'title', n: 'content' }]
        }
    },
    setNavigationBarTitle: {
        n: 'setNavigationBar'
    },
    setNavigationBarColor: {
        n: 'setNavigationBar'
    },
    saveImageToPhotosAlbum: {
        n: 'saveImage',
        opts: {
            c: [{ o: 'filePath', n: 'url' }]
        }
    },
    previewImage: {
        opts: {
            s: [
                {
                    k: 'current',
                    v: function (opts) {
                        return opts.urls.indexOf(opts.current || opts.urls[0]);
                    }
                }
            ]
        }
    },
    getFileInfo: {
        opts: {
            c: [{ o: 'filePath', n: 'apFilePath' }]
        }
    },
    getSavedFileInfo: {
        opts: {
            c: [{ o: 'filePath', n: 'apFilePath' }]
        }
    },
    removeSavedFile: {
        opts: {
            c: [{ o: 'filePath', n: 'apFilePath' }]
        }
    },
    saveFile: {
        opts: {
            c: [{ o: 'tempFilePath', n: 'apFilePath' }]
        },
        r: function (res) {
            res.savedFilePath = res.apFilePath;
        }
    },
    openLocation: {
        opts: {
            s: [
                {
                    k: 'latitude',
                    v: function (options) {
                        return String(options.latitude);
                    }
                },
                {
                    k: 'longitude',
                    v: function (options) {
                        return String(options.longitude);
                    }
                }
            ]
        }
    },
    uploadFile: {
        opts: {
            c: [{ o: 'name', n: 'fileName' }]
        }
    },
    getClipboardData: {
        n: 'getClipboard',
        r: function (res) {
            res.data = res.text;
        }
    },
    setClipboardData: {
        n: 'setClipboard',
        opts: {
            c: [{ o: 'data', n: 'text' }]
        }
    },
    makePhoneCall: {
        opts: {
            c: [{ o: 'phoneNumber', n: 'number' }]
        }
    },
    scanCode: {
        n: 'scan',
        opts: {
            c: [{ o: 'onlyFromCamera', n: 'hideAlbum' }],
            s: [
                {
                    k: 'type',
                    v: function (options) {
                        if (options.scanType && options.scanType.length) {
                            return [].concat(options.scanType).map(function (v) {
                                if (v === 'pdf417')
                                    return 'pdf417Code';
                                if (v === 'datamatrix')
                                    return 'dmCode';
                                return v;
                            });
                        }
                    }
                }
            ]
        },
        r: function (res) {
            res.result = res.code;
        }
    },
    setScreenBrightness: {
        opts: {
            c: [{ o: 'value', n: 'brightness' }]
        }
    },
    onBLEConnectionStateChange: {
        n: 'onBLEConnectionStateChanged'
    },
    offBLEConnectionStateChange: {
        n: 'offBLEConnectionStateChanged'
    },
    createBLEConnection: {
        n: 'connectBLEDevice'
    },
    closeBLEConnection: {
        n: 'disconnectBLEDevice'
    },
    openBluetoothAdapter: {
        r: function (res) {
            res.errno = res.isSupportBLE ? 0 : 10000;
        }
    },
    getBLEDeviceCharacteristics: {
        fn: function (global, options) {
            global.getBLEDeviceCharacteristics(tslib_1.__assign(tslib_1.__assign({}, options), { success: function (res) {
                    var _res = res;
                    if (_res.characteristics) {
                        _res.characteristics.forEach(function (item) {
                            item.uuid = item.characteristicId;
                            delete item.characteristicId;
                        });
                    }
                    options.success && options.success(_res);
                } }));
        }
    },
    getBLEDeviceServices: {
        fn: function (global, options) {
            global.getBLEDeviceServices(tslib_1.__assign(tslib_1.__assign({}, options), { success: function (res) {
                    var _res = res;
                    if (_res.services) {
                        _res.services.forEach(function (item) {
                            item.uuid = item.serviceId;
                            delete item.serviceId;
                        });
                    }
                    options.success && options.success(_res);
                } }));
        }
    },
    onBLECharacteristicValueChange: {
        fn: function (global, callback) {
            global.onBLECharacteristicValueChange(function (res) {
                res.value = changeToBuffer(res.value);
                callback && callback(res);
            });
        }
    },
    onBluetoothDeviceFound: {
        fn: function (global, callback) {
            global.onBluetoothDeviceFound(function (res) {
                var _res = res;
                if (_res.devices) {
                    _res.devices.forEach(function (item) {
                        item.deviceName = item.localName || item.name;
                    });
                }
                callback && callback(_res);
            });
        }
    },
    notifyBLECharacteristicValueChange: {
        fn: function (global, options) {
            global.notifyBLECharacteristicValueChange(tslib_1.__assign(tslib_1.__assign({}, options), { state: options.state !== false ? true : false }));
        }
    },
    request: {
        fn: function (global, options) {
            options = options || {};
            if (typeof options === 'string') {
                options = {
                    url: options
                };
            }
            // header => headers 转换
            var defaultHeaders = {
                'content-type': 'application/json'
            };
            options['headers'] = defaultHeaders;
            if (options['header']) {
                for (var k in options['header']) {
                    var lowerK = k.toLocaleLowerCase();
                    options['headers'][lowerK] = options['header'][k];
                }
                delete options['header'];
            }
            // promisified
            var originSuccess = options.success;
            var originFail = options.fail;
            var originComplete = options.complete;
            var requestTask;
            var p = new Promise(function (resolve, reject) {
                options.success = function (res) {
                    res.statusCode = res.status;
                    delete res.status;
                    res.header = res.headers;
                    delete res.headers;
                    originSuccess === null || originSuccess === void 0 ? void 0 : originSuccess(res);
                    resolve(res);
                };
                options.fail = function (res) {
                    originFail === null || originFail === void 0 ? void 0 : originFail(res);
                    // 如果用户传入了 fail 则代表用户自行处理错误
                    // mor 不再抛出 promise 错误, 只标记完成
                    if (typeof originFail === 'function') {
                        resolve(null);
                    }
                    else {
                        reject(res);
                    }
                };
                options.complete = function (res) {
                    originComplete === null || originComplete === void 0 ? void 0 : originComplete(res);
                };
                var nativeRequest = global.canIUse('request')
                    ? global.request
                    : global.httpRequest;
                requestTask = nativeRequest(options);
            });
            p.abort = function (cb) {
                var _a;
                cb === null || cb === void 0 ? void 0 : cb();
                (_a = requestTask === null || requestTask === void 0 ? void 0 : requestTask.abort) === null || _a === void 0 ? void 0 : _a.call(requestTask);
                return p;
            };
            return p;
        }
    },
    getStorageSync: {
        fn: function (global) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            // x 转 支付宝逻辑
            var arg1 = args[0];
            if (arg1 != null) {
                var res = global.getStorageSync({ key: arg1 });
                return res === null || res === void 0 ? void 0 : res.data;
            }
            return runtime_base_1.logger.error('getStorageSync 传入参数错误');
        }
    },
    setStorageSync: {
        fn: function (global) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var arg1 = args[0];
            var arg2 = args[1];
            if (arg1 != null) {
                return global.setStorageSync({
                    key: arg1,
                    data: arg2
                });
            }
            return runtime_base_1.logger.error('setStorageSync 传入参数错误');
        }
    },
    removeStorageSync: {
        fn: function (global) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var arg1 = args[0];
            if (arg1 != null) {
                return global.removeStorageSync({ key: arg1 });
            }
            return runtime_base_1.logger.error('removeStorageSync 传入参数错误');
        }
    },
    createSelectorQuery: {
        fn: function (global) {
            var query = global.createSelectorQuery();
            query.in = function () {
                return query;
            };
            return query;
        }
    },
    showModal: {
        fn: function (global, options) {
            var apiName;
            options.cancelButtonText = options.cancelText || '取消';
            options.confirmButtonText = options.confirmText || '确定';
            apiName = 'confirm';
            if (options.showCancel === false) {
                options.buttonText = options.confirmText || '确定';
                apiName = 'alert';
            }
            global[apiName](options);
        }
    },
    downloadFile: {
        r: function (res) {
            res.tempFilePath = res.apFilePath;
        }
    },
    chooseImage: {
        r: function (res) {
            res.tempFilePaths = res.apFilePaths;
        }
    },
    getScreenBrightness: {
        r: function (res) {
            res.value = res.brightness;
            delete res.brightness;
        }
    },
    connectSocket: {
        r: function (res) {
            var global = (0, runtime_base_1.getGlobalObject)();
            res.onClose = function (cb) {
                global.onSocketClose(cb);
            };
            res.onError = function (cb) {
                global.onSocketError(cb);
            };
            res.onMessage = function (cb) {
                global.onSocketMessage(cb);
            };
            res.onOpen = function (cb) {
                global.onSocketOpen(cb);
            };
            res.send = function (opt) {
                global.sendSocketMessage(opt);
            };
            res.close = function () {
                global.closeSocket();
            };
        }
    },
    login: {
        n: 'getAuthCode',
        opts: {
            s: [
                {
                    k: 'scopes',
                    v: function () {
                        // 微信 login 是静默授权
                        return ['auth_base'];
                    }
                }
            ]
        },
        r: function (res) {
            res.code = res.authCode;
            delete res.authCode;
        }
    },
    getUserInfo: {
        n: 'getOpenUserInfo',
        r: getOpenUserInfo
    },
    getUserProfile: {
        n: 'getOpenUserInfo',
        r: getOpenUserInfo
    },
    createIntersectionObserver: {
        fn: function (global) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var options = (args === null || args === void 0 ? void 0 : args[1]) || {};
            if ((options === null || options === void 0 ? void 0 : options.observeAll) != null) {
                options.selectAll = options.observeAll;
                delete options.observeAll;
            }
            return global.createIntersectionObserver(options);
        }
    },
    getSystemInfo: {
        r: getSystemInfoResult
    },
    getSystemInfoSync: {
        r: getSystemInfoResult
    },
    getSystemInfoAsync: {
        n: 'getSystemInfo',
        r: getSystemInfoResult
    },
    nextTick: {
        fn: function (global, callback) {
            if (typeof callback !== 'function')
                return;
            if (typeof (global === null || global === void 0 ? void 0 : global.nextTick) === 'function') {
                return global.nextTick(callback);
            }
            else {
                return setTimeout(callback, 0);
            }
        }
    }
};
function getOpenUserInfo(res) {
    var userInfo = JSON.parse(res.response).response;
    if (userInfo) {
        userInfo.avatarUrl = userInfo.avatar;
        if (userInfo.gender === 'm') {
            userInfo.gender = 1;
        }
        else if (userInfo.gender === 'f') {
            userInfo.gender = 2;
        }
        else {
            userInfo.gender = 0;
        }
        userInfo.country = userInfo.countryCode;
        res.userInfo = userInfo;
    }
}
function getSystemInfoResult(res) {
    var _a;
    res.SDKVersion = (_a = (0, runtime_base_1.getGlobalObject)()) === null || _a === void 0 ? void 0 : _a.SDKVersion;
}
function initApi(mor) {
    (0, runtime_base_1.transformApis)(mor, (0, runtime_base_1.getGlobalObject)(), {
        needPromisfiedApis: apis_1.needPromisfiedApis,
        apiTransformConfig: apiTransformConfig
    });
}
exports.initApi = initApi;
//# sourceMappingURL=apisToAlipay.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-mini/lib/alipay/componentToAlipay.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@morjs/runtime-mini/lib/alipay/componentToAlipay.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initComponent = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
var runtime_base_1 = __webpack_require__(/*! @morjs/runtime-base */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/index.js");
var lodash_get_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash.get */ "../node_modules/lodash.get/index.js"));
var lodash_has_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash.has */ "../node_modules/lodash.has/index.js"));
var lodash_set_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash.set */ "../node_modules/lodash.set/index.js"));
var behaviorOrMixin_1 = __webpack_require__(/*! ../common/behaviorOrMixin */ "../node_modules/@morjs/runtime-mini/lib/common/behaviorOrMixin.js");
var utilsToAlipay_1 = __webpack_require__(/*! ./utilsToAlipay */ "../node_modules/@morjs/runtime-mini/lib/alipay/utilsToAlipay.js");
var MOR_PREFIX = 'mor';
/**
 * 用于在组件实例中保存 data 更新前的数据
 */
var MOR_PREV_DATA = "$".concat(MOR_PREFIX, "PrevData");
// 用于记录 DeriveDataFromProps 生命周期的第一次触发
var MOR_FIRST_DERIVE_DATA_FROM_PROPS = "$".concat(MOR_PREFIX, "FirstDeriveDataFromProps");
// 用于记录 InitPropertiesAndData 方法的第一次触发
var MOR_FIRST_INIT_PROPERTIES_AND_DATA = "$".concat(MOR_PREFIX, "FirstInitPropertiesAndData");
// 检查是否支持 component2
var isComponent2Enabled = (0, utilsToAlipay_1.canIUse)('component2');
// 检查是否支持 observers 基础库 2.8.1
var isObserversSupported = (0, utilsToAlipay_1.canIUse)('component.observers');
// 检查是否支持 relations
var isRelationsSupported = (0, utilsToAlipay_1.canIUse)('component.relations');
// 检查是否支持 externalClasses
var isExternalClassesSupported = (0, utilsToAlipay_1.canIUse)('component.externalClasses');
// 检查是否支持 lifetimes 基础库 2.8.5
var isLifetimesSupported = (0, utilsToAlipay_1.canIUse)('component.lifetimes');
/**
 * 确保组件有对应的对象的存在
 *
 * @param options - 组件选项
 */
function ensureOptions(options) {
    if (!options.data)
        options.data = {};
    if (!options.properties)
        options.properties = {};
    if (!options.props)
        options.props = {};
    if (!options.options)
        options.options = {};
    if (!options.methods)
        options.methods = {};
    if (!options.lifetimes)
        options.lifetimes = {};
}
/**
 * 确保组件有对应的对象的存在
 *
 * @param options - 组件选项
 */
function checkOptions(options) {
    var _a, _b, _c, _d;
    if ((_a = options.options) === null || _a === void 0 ? void 0 : _a.styleIsolation) {
        runtime_base_1.logger.warn('支付宝小程序不支持通过组件构造器 Component 的 options 来设置 styleIsolation', '请在组件对应的 json 文件中设置该属性');
    }
    if (!isLifetimesSupported && (options.moved || options.lifetimes.moved)) {
        runtime_base_1.logger.warn("\u7EC4\u4EF6\u4E2D\u5305\u542B\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u4F4E\u7248\u672C\u4E0D\u652F\u6301\u7684 moved \u751F\u547D\u5468\u671F, \u8BF7\u5347\u7EA7\u57FA\u7840\u5E93\u7248\u672C\u81F3 2.8.5 \u6216\u4EE5\u4E0A\uFF0C\u82E5\u4E0D\u5347\u7EA7\u57FA\u7840\u5E93\u5219\u9700\u81EA\u884C\u9002\u914D\u76F8\u5173\u903B\u8F91");
    }
    // 如果支持 relations 且用户未手动关闭，则默认开启
    if (isRelationsSupported && ((_b = options.options) === null || _b === void 0 ? void 0 : _b.relations) !== false) {
        options.options.relations = true;
    }
    // 如果支持 externalClasses 且用户未手动关闭，则默认开启
    if (isExternalClassesSupported &&
        ((_c = options.options) === null || _c === void 0 ? void 0 : _c.externalClasses) !== false) {
        options.options.externalClasses = true;
    }
    // 如果支持 lifetimes 且用户未手动关闭，则默认开启
    if (isLifetimesSupported && ((_d = options.options) === null || _d === void 0 ? void 0 : _d.lifetimes) !== false) {
        options.options.lifetimes = true;
    }
}
/**
 * 清除无用的选项
 * @param options - 组件选项
 */
function cleanOptions(options) {
    !isLifetimesSupported && delete options.lifetimes;
    delete options.created;
    delete options.attached;
    delete options.ready;
    delete options.moved;
    delete options.detached;
    delete options.error;
}
/**
 * 判断是否是 小程序 event 对象
 */
function isEventObject(e) {
    return e && typeof e === 'object' && 'target' in e && 'currentTarget' in e;
}
/**
 * 用于保存上一次事件对象
 */
var MOR_EVENT_OBJECT_NAME = '$morLastEventInvokeObject';
/**
 * 用于保存事件对象的方法
 */
var MOR_SAVE_EVENT_OBJECT = '$morSaveEventObject';
/**
 * 兼容微信组件中的 triggerEvent
 */
function injectEventSupport(options) {
    if (options.methods.triggerEvent) {
        runtime_base_1.logger.warn("\u7EC4\u4EF6 ".concat((this === null || this === void 0 ? void 0 : this.is) || '', " \u4E2D\u7684 triggerEvent \u65B9\u6CD5\u51B2\u7A81, \u53EF\u80FD\u5BFC\u81F4\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u5931\u6548"));
        return;
    }
    var _loop_1 = function (methodName) {
        var originalMethod = options.methods[methodName];
        options.methods[methodName] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this[MOR_SAVE_EVENT_OBJECT])
                this[MOR_SAVE_EVENT_OBJECT](args === null || args === void 0 ? void 0 : args[0]);
            return originalMethod.call.apply(originalMethod, tslib_1.__spreadArray([this], args, false));
        };
    };
    // 封装所有的 methods 用于截获事件对象
    for (var methodName in options.methods) {
        _loop_1(methodName);
    }
    // 添加 triggerEvent 方法并尝试和微信的自定义组件事件对齐
    options.methods.triggerEvent = function (name, params, opts) {
        var _this = this;
        if (params === void 0) { params = {}; }
        if (opts === void 0) { opts = {}; }
        name = name
            .replace(/^[a-zA-Z]{1}/, function (s) { return s.toUpperCase(); })
            .replace(/-./g, function (s) { return s[1].toUpperCase(); });
        // 自定义组件的事件中需要包含 data- 属性
        var dataset = {};
        Object.keys(this.props).forEach(function (key) {
            if (key.indexOf('data-') === 0) {
                var newKey = key
                    .toLowerCase()
                    .replace('data-', '')
                    .replace(/-./g, function (c) { return c[1].toUpperCase(); });
                dataset[newKey] = _this.props[key];
            }
        });
        var eventObj = isEventObject(this[MOR_EVENT_OBJECT_NAME])
            ? this[MOR_EVENT_OBJECT_NAME]
            : {};
        // 支付宝组件传递函数时 必须以 on 开头并且 on 后的第一个字母必须大写（微信必须全小写）
        var callEventHandler = function (eventName) {
            var currentTarget = eventObj.currentTarget || {};
            var target = eventObj.target || {};
            var e = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, eventObj), {
                currentTarget: tslib_1.__assign(tslib_1.__assign({}, currentTarget), { dataset: tslib_1.__assign(tslib_1.__assign({}, (currentTarget.dataset || {})), dataset) }),
                target: tslib_1.__assign(tslib_1.__assign({}, target), { dataset: tslib_1.__assign(tslib_1.__assign({}, (target.dataset || {})), dataset), id: _this.props.id })
            }), { type: name });
            e.detail = e.detail || {};
            if (Array.isArray(params)) {
                e.detail = params;
            }
            else if (typeof params === 'object') {
                e.detail = tslib_1.__assign(tslib_1.__assign({}, e.detail), params);
            }
            else {
                e.detail = params;
            }
            _this.props[eventName](e, opts);
        };
        if (typeof this.props["on".concat(name)] === 'function') {
            callEventHandler("on".concat(name));
        }
        else if (typeof this.props["catch".concat(name)] === 'function') {
            callEventHandler("catch".concat(name));
        }
    };
    options.methods[MOR_SAVE_EVENT_OBJECT] = function (e) {
        if (isEventObject(e)) {
            this[MOR_EVENT_OBJECT_NAME] = e;
        }
    };
}
/**
 * 转换 property 为固定额格式
 * @param property property 值
 */
function convertPropertyByType(property) {
    var type = property === null || property === void 0 ? void 0 : property.type;
    var observer = property === null || property === void 0 ? void 0 : property.observer;
    var optionalTypes = property === null || property === void 0 ? void 0 : property.optionalTypes;
    var value;
    if (property === String || type === String) {
        type = String;
        value = '';
    }
    else if (property === Number || type === Number) {
        type = Number;
        value = 0;
    }
    else if (property === Boolean || type === Boolean) {
        type = Boolean;
        value = false;
    }
    else if (property === Object || type === Object) {
        type = Object;
        value = {};
    }
    else if (property === Array || type === Array) {
        type = Array;
        value = [];
    }
    else if (property == null || type == null) {
        type = null;
        value = null;
    }
    if (property && typeof property === 'object' && 'value' in property) {
        value = property.value;
    }
    return {
        type: type,
        value: value,
        observer: observer,
        optionalTypes: optionalTypes
    };
}
/**
 * 覆盖 this.setData 方法, 用于监听数据变化
 */
function hackSetData() {
    var _this = this;
    var originalSetData = this.setData;
    if (!originalSetData) {
        runtime_base_1.logger.error("[mor] \u52AB\u6301 setData \u5931\u8D25, \u53EF\u80FD\u5BFC\u81F4\u65E0\u6CD5\u6B63\u786E\u89E6\u53D1\u66F4\u65B0");
    }
    // 初始化 data
    if (this.data)
        this[MOR_PREV_DATA] = this.data;
    this.setData = function (nextData, callback) {
        if (nextData === void 0) { nextData = {}; }
        for (var key in nextData) {
            (0, lodash_set_1.default)(nextData, key, nextData[key]);
        }
        _this[MOR_PREV_DATA] = tslib_1.__assign(tslib_1.__assign({}, (_this[MOR_PREV_DATA] || {})), nextData);
        return originalSetData.call(_this, nextData, callback);
    };
}
/**
 * 添加 properties 和 observers 支持
 */
function injectPropertiesAndObserversSupport(options) {
    // 如果支付宝小程序基础库已支持 observers 且用户未手动关闭 observers
    // 则直接自动启用 observers 监听器代替 MorJS 本身的实现逻辑
    if (isObserversSupported && options.options.observers !== false) {
        options.options.observers = true;
    }
    var properties = options.properties || {};
    // 属性监听器
    var propertiesWithObserver = {};
    // 纯数据字段正则
    var pureDataPattern = options.pureDataPattern;
    // 准备 props 以及 propertiesWithObserver
    var props = {};
    Object.keys(properties).forEach(function (key) {
        var prop = convertPropertyByType(properties[key] || {});
        props[key] = prop.value;
        // 保存属性监听器
        if (prop.observer) {
            if (typeof prop.observer === 'string') {
                propertiesWithObserver[key] = options.methods[prop.observer];
            }
            else if (typeof prop.observer === 'function') {
                propertiesWithObserver[key] = prop.observer;
            }
        }
    });
    // 创建监听器函数
    var observers = options.observers || {};
    var observerFns = [];
    var _loop_2 = function (key) {
        var keys = key.split(',').map(function (k) {
            return k.trim().replace('.**', '');
        });
        var originObserver = observers[key];
        observerFns.push(function (obj) {
            try {
                var hasTarget_1 = false;
                var values = keys.map(function (k) {
                    if ((0, lodash_has_1.default)(obj, k)) {
                        hasTarget_1 = true;
                        return (0, lodash_get_1.default)(obj, k);
                    }
                });
                hasTarget_1 && originObserver.apply(this, values);
            }
            catch (error) {
                runtime_base_1.logger.error("\u7EC4\u4EF6 ".concat(this.is, " \u76D1\u542C\u5668 observers[").concat(key, "] \u62A5\u9519: "), error);
            }
        });
    };
    for (var key in observers) {
        _loop_2(key);
    }
    var invokeObservers = (0, runtime_base_1.compose)(observerFns);
    // 初始化 props
    options.props = Object.assign(props, options.props || {});
    // 接收变更，需要开启 component2 支持
    var originalDeriveDataFromProps = options.deriveDataFromProps;
    options.deriveDataFromProps = function (nextProps) {
        var _a, _b, _c;
        if (nextProps === void 0) { nextProps = {}; }
        // 1. 当基础库版本支持 lifetimes 时，由于生命周期执行委托给了原生，需跳过首次执行，若不跳过则会导致，
        //    data 同步 nextProps 后，传入的值前后对比未发现变更，而使在第一次初始化不触发 observer 的监听
        // 2. 当基础库版本不支持 lifetimes 时，使用 mor 的自实现，正常执行以下流程
        // 基于上述逻辑，初始化时，需记录状态，跳过 properties/data 赋值
        var firstDeriveDataFromProps = !this[MOR_FIRST_DERIVE_DATA_FROM_PROPS];
        var firstDeriveWithObserversSupported = firstDeriveDataFromProps && isObserversSupported;
        // data变化触发双向绑定
        (_b = (_a = this.props).onMorChildTWBProxy) === null || _b === void 0 ? void 0 : _b.call(_a, this.data, this.props);
        // created 生命周期触发之后， 会将 __createdEmitCallbacks__ 标记为null，只有首次进入时给当前组件实例初始化一个待执行队列
        if (isLifetimesSupported &&
            typeof this.__createdEmitCallbacks__ === 'undefined')
            this.__createdEmitCallbacks__ = {};
        // 用于判断 nextProps 不为空对象
        var hasProps = false;
        var updateProps = {};
        // 遍历所有更新的 prop 并触发更新
        for (var prop in nextProps) {
            // 支付宝中 prop 为函数时, 通常代表事件, 此处直接跳过赋值
            // if (typeof nextProps[prop] === 'function') continue
            // 哪些 prop 发生了改变
            var isPropChanged = firstDeriveDataFromProps
                ? nextProps[prop] !== options.props[prop]
                : nextProps[prop] !== this.props[prop];
            if (isPropChanged) {
                updateProps[prop] = nextProps[prop];
            }
            hasProps = true;
            var originalValue = this.properties[prop];
            // 基于上述 1、2 两点逻辑，支持 observers 的版本初始化时不赋值。
            // 但是该做法会导致 property.observer 首次回调中，this.data
            // 和 this.properties 值不同步，可建议用户首次避免通过 data
            // 获取 properties 中的属性值
            if (!firstDeriveWithObserversSupported) {
                // 更新 properties 和 data
                // 微信小程序中的 properties 和 data 是一致的
                // 都包含 包括内部数据和属性值
                this.properties[prop] = nextProps[prop];
                this.data[prop] = nextProps[prop];
            }
            // 微信端组件初始化、属性改变时，会触发属性监听器 property.observer。
            // 而支付宝 deriveDataFromProps 方法，初始化时 this.props 和 nextProps
            // 中属性值相同，不满足 isPropChanged = true
            // 需通过 firstDeriveDataFromProps 强制初始化触发，与微信逻辑同步
            if (isPropChanged &&
                propertiesWithObserver[prop] &&
                !(pureDataPattern && pureDataPattern.test(prop))) {
                try {
                    var updateFn = propertiesWithObserver[prop].bind(this, nextProps[prop], originalValue);
                    // created 执行之后 或者 lifetimes 不支持的场景，__createdEmitCallbacks__ 会为 null或者 undefined
                    if (this.__createdEmitCallbacks__) {
                        this.__createdEmitCallbacks__[prop] = updateFn; // 推入待执行队列，等 created 生命周期触发后在执行，确保首次执行顺序
                    }
                    else {
                        updateFn();
                    }
                }
                catch (e) {
                    runtime_base_1.logger.error("\u7EC4\u4EF6 ".concat(this.is, " \u5C5E\u6027\u76D1\u542C\u5668 properties.").concat(prop, ".observer \u62A5\u9519: "), e);
                }
            }
        }
        // 初始化时，记录首次执行状态
        this[MOR_FIRST_DERIVE_DATA_FROM_PROPS] = true;
        if (firstDeriveWithObserversSupported)
            return;
        // // 触发一次更新
        if (hasProps) {
            this.setData(updateProps);
        }
        // 如果配置了 options.observers 则使用支付宝提供的数据变化观测器，否者触发自定义监听器
        if (!((_c = options.options) === null || _c === void 0 ? void 0 : _c.observers)) {
            var changedData = tslib_1.__assign(tslib_1.__assign({}, (this[MOR_PREV_DATA] || {})), updateProps);
            this[MOR_PREV_DATA] = null;
            invokeObservers.call(this, changedData);
        }
        // 执行原函数
        if (originalDeriveDataFromProps)
            originalDeriveDataFromProps.call(this, nextProps);
    };
}
/**
 * 处理组件生命周期映射
 */
function hookComponentLifeCycle(options) {
    var lifetimes = options.lifetimes;
    /**
     * 调用原本的生命周期函数
     * @param fnName 事件名
     */
    var callOriginalFn = function (fnName) {
        var originalFn = lifetimes[fnName] || options[fnName];
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (originalFn) {
                originalFn.call.apply(originalFn, tslib_1.__spreadArray([this], args, false));
            }
        };
    };
    /**
     * 初始化同步 properties 和 data 的值，为了兼容不同基础库版本，此处需触发两次
     * 第一次同步在 onInit 之前，目的是让 properties 同步 props 的值
     * 第二次同步是在 created 之前，目的是让之后的生命周期能正常从 data 和 properties 中取值
     */
    var initPropertiesAndData = function () {
        if (!this[MOR_FIRST_INIT_PROPERTIES_AND_DATA]) {
            this.properties = this.properties || {};
            for (var prop in this.props || {}) {
                if (typeof prop === 'function')
                    continue;
                this.properties[prop] = this.props[prop];
            }
            this[MOR_FIRST_INIT_PROPERTIES_AND_DATA] = true;
        }
        else {
            this.properties = tslib_1.__assign(tslib_1.__assign({}, this.properties), (this.data || {}));
            this.data = this.properties;
        }
    };
    // export => ref 映射
    if (options.export) {
        options.ref = options.export;
        delete options.export;
    }
    var executeCreatedCallbacks = function () {
        var _this = this;
        // created 生命周期触发时执行的回调（主要是为了解决首次 observer 和 created 生命周期的执行顺序问题）
        // 在微信中，created 触发时机早于 observer，在支付宝中由于该生命周期使用 deriveDataFromProps 模拟，而 deriveDataFromProps
        // 是先于 created 执行的，所以导致微信转支付宝场景下，observer 执行时机先于 created，这让某些依赖生命周期执行顺序的功能异常，所以在此做兼容适配
        if (!(this.__createdEmitCallbacks__ &&
            typeof this.__createdEmitCallbacks__ === 'object'))
            return;
        var keys = Object.keys(this.__createdEmitCallbacks__);
        if (keys.length > 0) {
            keys.forEach(function (key) {
                var value = _this.__createdEmitCallbacks__[key];
                value();
            });
            // 在这里将缓存队里置为 null，用于标记 created 已经执行过了，方便后续在 deriveDataFromProps 周期中进行判断（推入队列 or 直接执行）
            this.__createdEmitCallbacks__ = null;
        }
    };
    /**
     * 生命周期执行顺序:
     * 1. 执行 hackSetData 劫持 setData，把需要变更的数据存入 MOR_PREV_DATA
     * 2. 执行第一次 initPropertiesAndData，使 properties 同步 props 的值
     * 3. 执行 onInit 生命周期
     * 4. 触发 deriveDataFromProps
     *  4.1 当基础库版本支持 lifetimes 时，需要跳过首次执行，防止 data 同步 nextProps 后无法触发下一步的 observer
     *  4.2 当基础库版本不支持 lifetimes 时，需要正常执行，来触发 Mor 自实现的 observers 监听
     * 5. 触发 observers 监听
     *  5.1 当基础库版本支持 lifetimes 时，此时 data 还未同步新值，故会触发原生事件的 observers 监听
     *  5.2 当基础库版本不支持 lifetimes 时，需要借助上一步 deriveDataFromProps，触发 invokeObservers 来实现 observers 监听，入参有两部分值:
     *    5.2.1 deriveDataFromProps 入参 nextProps，取其中发生了变更的 key，即 props 中的变更的参数
     *    5.2.2 第一步劫持的 setData 所保存的 MOR_PREV_DATA，即 data 中的变更的参数
     * 6. 执行第二次 initPropertiesAndData，使 data 和 properties 同步所有的数据
     * 7. 执行 created 生命周期，此后可兼容从 data 和 properties 取值
     * 8. 执行 attached 生命周期
     * …
     */
    options.onInit = (0, runtime_base_1.compose)([
        hackSetData,
        (0, utilsToAlipay_1.injectCreateIntersectionObserverSupport)(),
        (0, utilsToAlipay_1.injectCreateSelectorQuerySupport)(),
        initPropertiesAndData,
        callOriginalFn('onInit')
    ]);
    if (isLifetimesSupported) {
        options.lifetimes.created = (0, runtime_base_1.compose)([
            initPropertiesAndData,
            callOriginalFn('created'),
            executeCreatedCallbacks
        ]);
    }
    options.didMount = (0, runtime_base_1.compose)([
        !isLifetimesSupported && initPropertiesAndData,
        !isLifetimesSupported && callOriginalFn('created'),
        !isLifetimesSupported && callOriginalFn('attached'),
        callOriginalFn('didMount'),
        !isLifetimesSupported && callOriginalFn('ready')
    ]);
    options.didUnmount = (0, runtime_base_1.compose)([
        !isLifetimesSupported && callOriginalFn('detached'),
        callOriginalFn('didUnmount')
    ]);
    options.onError = (0, runtime_base_1.compose)([
        !isLifetimesSupported && callOriginalFn('error'),
        callOriginalFn('onError')
    ]);
}
/**
 * 注入组件实例方法支持
 */
function injectComponentInstanceMethodSupport(options) {
    // 批量更新数据 支持
    options.groupSetData = function (cb) {
        if (typeof this.$batchedUpdates === 'function') {
            this.$batchedUpdates(cb);
        }
        else {
            cb();
        }
    };
    // 获取页面标识符
    options.getPageId = function () {
        var _a;
        return (_a = this.$page) === null || _a === void 0 ? void 0 : _a.$viewId;
    };
}
/**
 * 其他小程序转支付宝的 Component 差异抹平
 */
function initComponent(options) {
    if (!isComponent2Enabled) {
        runtime_base_1.logger.error('转换到支付宝小程序需要开启 component2 支持\n' +
            '开启方法: 在 支付宝小程序开发者工具 中的 详情 > 项目配置 中，勾选 component2 \n' +
            "\u6216\u8005 \u5728 mini.project.json \u6216 project.alipay.json \u6587\u4EF6\u4E2D\u624B\u52A8\u8BBE\u7F6E component2 \u4E3A `true`");
    }
    // 确保选项必要字段存在
    ensureOptions(options);
    // 检查兼容性
    checkOptions(options);
    // 标记不支持的实例方法
    (0, utilsToAlipay_1.markUnsupportMethods)(options.methods);
    // 注入双向绑定方法
    (0, utilsToAlipay_1.injectTwoWayBindingMethodsSupport)(options.methods);
    // 增加组件实例方法支持
    injectComponentInstanceMethodSupport(options.methods);
    // 注入 hasBehavior 支持
    (0, behaviorOrMixin_1.injectHasBehaviorSupport)(options.methods, options.behaviors || []);
    // 注入事件支持
    injectEventSupport(options);
    // 注入组件选择器支持
    (0, utilsToAlipay_1.injectComponentSelectorMethodsSupport)(options, 'component');
    // 注入 监听器和属性支持
    injectPropertiesAndObserversSupport(options);
    // 对齐生命周期
    hookComponentLifeCycle(options);
    // 清理选项
    cleanOptions(options);
}
exports.initComponent = initComponent;
//# sourceMappingURL=componentToAlipay.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-mini/lib/alipay/pageToAlipay.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@morjs/runtime-mini/lib/alipay/pageToAlipay.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initPage = void 0;
var runtime_base_1 = __webpack_require__(/*! @morjs/runtime-base */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/index.js");
var behaviorOrMixin_1 = __webpack_require__(/*! ../common/behaviorOrMixin */ "../node_modules/@morjs/runtime-mini/lib/common/behaviorOrMixin.js");
var utilsToAlipay_1 = __webpack_require__(/*! ./utilsToAlipay */ "../node_modules/@morjs/runtime-mini/lib/alipay/utilsToAlipay.js");
/**
 * 注入页面实例方法支持
 */
function injectPageInstanceMethodSupport(options) {
    // 批量更新数据 支持
    options.groupSetData = function (cb) {
        this.$batchedUpdates(cb);
    };
    // 获取页面标识符
    options.getPageId = function () {
        return this.$viewId;
    };
}
/**
 * 注入页面事件支持
 */
function injectPageEventSupport(options) {
    options.events = options.events || {};
    // onResize 对齐
    if (options.onResize) {
        options.events.onResize = options.onResize;
    }
}
/**
 * 支付宝转其他端的 Page 差异抹平
 */
function initPage(options) {
    options = options || {};
    // 注入 createIntersectionObserver 方法
    var onLoadFns = [
        (0, utilsToAlipay_1.injectCreateIntersectionObserverSupport)(),
        (0, utilsToAlipay_1.injectCreateSelectorQuerySupport)()
    ];
    if (typeof options.onLoad === 'function')
        onLoadFns.push(options.onLoad);
    options.onLoad = (0, runtime_base_1.compose)(onLoadFns);
    // 注入双向绑定支持
    (0, utilsToAlipay_1.injectTwoWayBindingMethodsSupport)(options);
    // 注入页面事件支持
    injectPageEventSupport(options);
    // 标记不支持的实例方法
    (0, utilsToAlipay_1.markUnsupportMethods)(options);
    // 注入页面实例方法支持
    injectPageInstanceMethodSupport(options);
    // 注入组件选择器支持
    (0, utilsToAlipay_1.injectComponentSelectorMethodsSupport)(options, 'page');
    // 注入 hasBehavior 支持
    (0, behaviorOrMixin_1.injectHasBehaviorSupport)(options, options.behaviors || []);
}
exports.initPage = initPage;
//# sourceMappingURL=pageToAlipay.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-mini/lib/alipay/utilsToAlipay.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@morjs/runtime-mini/lib/alipay/utilsToAlipay.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.injectCreateSelectorQuerySupport = exports.injectCreateIntersectionObserverSupport = exports.injectTwoWayBindingMethodsSupport = exports.injectComponentSelectorMethodsSupport = exports.markUnsupportMethods = exports.canIUse = void 0;
var runtime_base_1 = __webpack_require__(/*! @morjs/runtime-base */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/index.js");
function canIUse(name) {
    var _a, _b;
    return !!((_b = (_a = (0, runtime_base_1.getGlobalObject)()) === null || _a === void 0 ? void 0 : _a.canIUse) === null || _b === void 0 ? void 0 : _b.call(_a, name));
}
exports.canIUse = canIUse;
/**
 * 标记不支持的实例方法
 */
function markUnsupportMethods(options, extraMethods) {
    ;
    [
        'setInitialRenderingCache',
        'animate',
        'clearAnimation',
        'createMediaQueryObserver',
        'setUpdatePerformanceListener'
    ]
        .concat(extraMethods || [])
        .forEach(function (methodName) {
        if (!options[methodName]) {
            options[methodName] = (0, runtime_base_1.markAsUnsupport)("this.".concat(methodName, " \u7684\u8C03\u7528"));
        }
    });
}
exports.markUnsupportMethods = markUnsupportMethods;
var isSelectOwnerComponentSupported = canIUse('component.selectOwnerComponent');
var isSelectComponentSupported = canIUse('component.$selectComponent');
/**
 * 注入 $morSaveRef / selectComponent / selectAllComponents / selectOwnerComponent 方法
 * 通过 支付宝小程序的 ref 来实现
 */
function injectComponentSelectorMethodsSupport(pageOrComponentOptions, type) {
    var _a;
    var options = type === 'page' ? pageOrComponentOptions : pageOrComponentOptions.methods;
    // 保存当前页面或组件中使用到的组件实例
    options.$morSaveRef = function (component) {
        this.$morChildComponents = this.$morChildComponents || [];
        // 记录子组件
        if (this.$morChildComponents.indexOf(component) === -1) {
            this.$morChildComponents.push(component);
        }
        // 保存引用方关联
        component.$morOwnerComponent = this;
        return component;
    };
    // 移除关联
    // 这个方法会在 组件或页面卸载时调用
    options.$morRemoveRef = function (component) {
        var childComponents = (this.$morChildComponents || []);
        var index = childComponents.indexOf(component);
        if (index !== -1) {
            childComponents.splice(index, 1);
        }
    };
    // 页面卸载时移除 $morChildComponents
    if (type === 'page') {
        var originalFn_1 = options.onUnload;
        options.onUnload = function () {
            this.$morChildComponents = [];
            if (typeof originalFn_1 === 'function')
                originalFn_1.call(this);
        };
    }
    else {
        var originalFn_2 = ((_a = pageOrComponentOptions === null || pageOrComponentOptions === void 0 ? void 0 : pageOrComponentOptions.lifetimes) === null || _a === void 0 ? void 0 : _a.detached) ||
            (pageOrComponentOptions === null || pageOrComponentOptions === void 0 ? void 0 : pageOrComponentOptions.detached);
        pageOrComponentOptions.lifetimes.detached =
            pageOrComponentOptions.detached = function () {
                var _a, _b;
                this.$morChildComponents = [];
                if (typeof ((_a = this === null || this === void 0 ? void 0 : this.$morOwnerComponent) === null || _a === void 0 ? void 0 : _a.$morRemoveRef) === 'function') {
                    (_b = this === null || this === void 0 ? void 0 : this.$morOwnerComponent) === null || _b === void 0 ? void 0 : _b.$morRemoveRef(this);
                }
                if (typeof originalFn_2 === 'function')
                    originalFn_2.call(this);
            };
    }
    // 生成选择器
    function generateSelectFunction(selectType) {
        return function (selector) {
            var _a;
            var childComponents = this.$morChildComponents || [];
            var matchedComponents = [];
            if (!selector || typeof selector !== 'string') {
                if (selectType === 'selectComponent') {
                    return;
                }
                else {
                    return matchedComponents;
                }
            }
            var searchField;
            var searchValue;
            if (selector.indexOf('#') === 0) {
                searchField = 'morTagId';
                searchValue = selector.slice(1);
            }
            else if (selector.indexOf('.') === 0) {
                searchField = 'className';
                searchValue = selector.slice(1);
            }
            else {
                searchField = 'morTagName';
                searchValue = selector;
            }
            for (var i = 0; i < childComponents.length; i++) {
                var component = childComponents[i] || {};
                var names = (((_a = component.props) === null || _a === void 0 ? void 0 : _a[searchField]) || '').split(' ');
                if (names.indexOf(searchValue) !== -1) {
                    if (selectType === 'selectComponent') {
                        return component;
                    }
                    else {
                        matchedComponents.push(component);
                    }
                }
                // 查找组件中的组件
                if (typeof (component === null || component === void 0 ? void 0 : component[selectType]) === 'function') {
                    var result = component[selectType](selector);
                    if (result) {
                        if (selectType === 'selectComponent') {
                            return result;
                        }
                        else {
                            matchedComponents.concat(result);
                        }
                    }
                }
            }
            return selectType === 'selectComponent' ? undefined : matchedComponents;
        };
    }
    // 如果支付宝已支持 selectComponent 或 selectAllComponents 则不注入
    if (isSelectComponentSupported && type === 'component') {
        // 选择组件支持
        options.selectComponent = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.$selectComponent.apply(this, args);
        };
        // 选择组件支持(多个)
        options.selectAllComponents = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.$selectAllComponents.apply(this, args);
        };
    }
    else {
        // 选择组件支持
        options.selectComponent = generateSelectFunction('selectComponent');
        // 选择组件支持(多个)
        options.selectAllComponents = generateSelectFunction('selectAllComponents');
    }
    // 如果支付宝已支持 selectOwnerComponent 则不注入
    if (!isSelectOwnerComponentSupported || type === 'page') {
        // 选额父组件支持
        options.selectOwnerComponent = function () {
            return this.$morOwnerComponent;
        };
    }
}
exports.injectComponentSelectorMethodsSupport = injectComponentSelectorMethodsSupport;
/**
 * 注入双向绑定方法
 */
function injectTwoWayBindingMethodsSupport(options) {
    var allTwoWayBindingMappings = {};
    function parseTwoWayBingMap(str) {
        if (allTwoWayBindingMappings[str])
            return allTwoWayBindingMappings[str];
        var map = {};
        str.split(',').forEach(function (pair) {
            var _a = pair.split(':'), key = _a[0], value = _a[1];
            map[key] = value;
        });
        allTwoWayBindingMappings[str] = map;
        return map;
    }
    // 双向绑定劫持自定义事件
    options.$morTWBProxy = function (event) {
        var _a;
        var _b, _c, _d, _e;
        var _f = (_c = (_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b.dataset) !== null && _c !== void 0 ? _c : {}, mortwbmethod = _f.mortwbmethod, mortwbkey = _f.mortwbkey, mortwbvalue = _f.mortwbvalue;
        this.setData((_a = {},
            _a[mortwbvalue] = (_d = event === null || event === void 0 ? void 0 : event.detail) === null || _d === void 0 ? void 0 : _d[mortwbkey],
            _a));
        // 双向绑定时，tag上自定义的响应事件
        if (mortwbmethod) {
            (_e = this[mortwbmethod]) === null || _e === void 0 ? void 0 : _e.call(this, event);
        }
    };
    // 自定义组件的双向绑定方法 $morParentTWBProxy
    options.$morParentTWBProxy = function (data, props) {
        if (typeof props.morChildTwbMap !== 'string')
            return;
        try {
            var map = parseTwoWayBingMap(props.morChildTwbMap);
            var updates = {};
            var hasUpdates = false;
            for (var childKey in map) {
                // 子组件 props 滞后 data，更新父组件 data
                if (data[childKey] !== props[childKey]) {
                    hasUpdates = true;
                    updates[map[childKey]] = data[childKey];
                }
            }
            if (hasUpdates)
                this.setData(updates);
        }
        catch (e) {
            runtime_base_1.logger.warn("".concat(e));
        }
    };
}
exports.injectTwoWayBindingMethodsSupport = injectTwoWayBindingMethodsSupport;
/**
 * 为组件或页面注入 this.createIntersectionObserver 支持
 * 原因: 支付宝仅 2.7.4 及以上页面有该方法, 但组件无该方法
 * @param context 组件或页面上下文, 即 this 对象
 */
function injectCreateIntersectionObserverSupport() {
    return function () {
        // 如果方法存在则不处理
        if (this === null || this === void 0 ? void 0 : this.createIntersectionObserver)
            return;
        this.createIntersectionObserver = function (options) {
            if (options === void 0) { options = {}; }
            return (0, runtime_base_1.getGlobalObject)().createIntersectionObserver(options);
        };
    };
}
exports.injectCreateIntersectionObserverSupport = injectCreateIntersectionObserverSupport;
/**
 * 为组件或页面注入 this.createSelectorQuery 支持
 * 原因: 支付宝仅 2.7.4 及以上页面有该方法
 * @param context 组件或页面上下文, 即 this 对象
 */
function injectCreateSelectorQuerySupport() {
    return function () {
        // 如果方法存在则不处理
        if (this === null || this === void 0 ? void 0 : this.createSelectorQuery)
            return;
        this.createSelectorQuery = function () {
            return (0, runtime_base_1.getGlobalObject)().createSelectorQuery();
        };
    };
}
exports.injectCreateSelectorQuerySupport = injectCreateSelectorQuerySupport;
//# sourceMappingURL=utilsToAlipay.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-mini/lib/common/behaviorOrMixin.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@morjs/runtime-mini/lib/common/behaviorOrMixin.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.injectHasMixinSupport = exports.injectHasBehaviorSupport = exports.Mixin = exports.Behavior = void 0;
var runtime_base_1 = __webpack_require__(/*! @morjs/runtime-base */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/index.js");
function BehaviorOrMixin(options, types) {
    var behaviorsOrMixins = (options === null || options === void 0 ? void 0 : options[types]) || [];
    var definitionFilter = options === null || options === void 0 ? void 0 : options.definitionFilter;
    var definitionFilterArr = [];
    // 执行当前 behaviors/mixins 中的 definitionFilter
    behaviorsOrMixins.map(function (item) {
        if (item.definitionFilter) {
            if (typeof item.definitionFilter === 'function') {
                definitionFilterArr.push(item.definitionFilter);
                item.definitionFilter(options);
            }
            else {
                runtime_base_1.logger.error("".concat(types, " definitionFilter \u5B9A\u4E49\u6BB5\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u51FD\u6570: ").concat(item.definitionFilter));
            }
        }
    });
    // 重写 definitionFilter, 补充 definitionFilterArr 参数
    if (definitionFilter) {
        options.definitionFilter = function (defFields) {
            definitionFilter(defFields, definitionFilterArr);
        };
    }
    return options;
}
/**
 * Behavior 构造函数实现
 * @param options - Behavior 选项
 */
function Behavior(options) {
    return BehaviorOrMixin(options, 'behaviors');
}
exports.Behavior = Behavior;
/**
 * Mixin 构造函数实现
 * @param options - Mixin 选项
 */
function Mixin(options) {
    return BehaviorOrMixin(options, 'mixins');
}
exports.Mixin = Mixin;
function hasBehaviorOrMixin(items, item) {
    var _a;
    if (!item)
        return false;
    if (items.indexOf(item) !== -1)
        return true;
    for (var i = 0; i < items.length; i++) {
        if (hasBehaviorOrMixin(((_a = items[i]) === null || _a === void 0 ? void 0 : _a.items) || [], item))
            return true;
    }
    return false;
}
/**
 * 注入 hasBehavior 方法支持
 */
function injectHasBehaviorSupport(options, behaviors) {
    // 保存当前页面或组件中的 behaviors
    behaviors = behaviors || [];
    options.hasBehavior = function (behavior) {
        return hasBehaviorOrMixin(behaviors, behavior);
    };
}
exports.injectHasBehaviorSupport = injectHasBehaviorSupport;
/**
 * 注入 hasMixin 方法支持
 */
function injectHasMixinSupport(options, mixins) {
    // 保存当前页面或组件中的 mixins
    mixins = mixins || [];
    options.hasMixin = function (mixin) {
        return hasBehaviorOrMixin(mixins, mixin);
    };
}
exports.injectHasMixinSupport = injectHasMixinSupport;
//# sourceMappingURL=behaviorOrMixin.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-mini/lib/wechat/apis.js":
/*!**************************************************************!*\
  !*** ../node_modules/@morjs/runtime-mini/lib/wechat/apis.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initApi = exports.needPromisfiedApis = void 0;
var runtime_base_1 = __webpack_require__(/*! @morjs/runtime-base */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/index.js");
/**
 * 微信需要被 promisified 的接口
 */
exports.needPromisfiedApis = [
    'addPhoneContact',
    'authorize',
    'authPrivateMessage',
    'canvasGetImageData',
    'canvasPutImageData',
    'canvasToTempFilePath',
    'checkSession',
    'chooseAddress',
    'chooseImage',
    'chooseInvoiceTitle',
    'chooseLocation',
    'chooseVideo',
    'clearStorage',
    'closeBLEConnection',
    'closeBluetoothAdapter',
    'closeSocket',
    'compressImage',
    'connectSocket',
    'createBLEConnection',
    'disableAlertBeforeUnload',
    'downloadFile',
    'enableAlertBeforeUnload',
    'exitMiniProgram',
    'getAvailableAudioSources',
    'getBackgroundFetchData',
    'getBatteryInfo',
    'getBeacons',
    'getBLEDeviceCharacteristics',
    'getBLEDeviceServices',
    'getBluetoothAdapterState',
    'getBluetoothDevices',
    'getClipboardData',
    'getConnectedBluetoothDevices',
    'getConnectedWifi',
    'getExtConfig',
    'getFileInfo',
    'getGroupEnterInfo',
    'getImageInfo',
    'getLocation',
    'getNetworkType',
    'getSavedFileInfo',
    'getSavedFileList',
    'getScreenBrightness',
    'getSetting',
    'getShareInfo',
    'getStorage',
    'getStorageInfo',
    'getSystemInfo',
    'getUserInfo',
    'getUserProfile',
    'getWeRunData',
    'getWifiList',
    'hideHomeButton',
    'hideKeyboard',
    'hideLoading',
    'hideNavigationBarLoading',
    'hideShareMenu',
    'hideTabBar',
    'hideTabBarRedDot',
    'hideToast',
    'join1v1Chat',
    'loadFontFace',
    'login',
    'makePhoneCall',
    'navigateBack',
    'navigateBackMiniProgram',
    'navigateTo',
    'navigateToBookshelf',
    'navigateToMiniProgram',
    'notifyBLECharacteristicValueChange',
    'openBluetoothAdapter',
    'openCustomerServiceChat',
    'openDocument',
    'openLocation',
    'openSetting',
    'openVideoEditor',
    'pageScrollTo',
    'previewImage',
    'queryBookshelf',
    'readBLECharacteristicValue',
    'redirectTo',
    'reLaunch',
    'removeSavedFile',
    'removeStorage',
    'removeTabBarBadge',
    'requestSubscribeMessage',
    'saveFile',
    'saveFileToDisk',
    'saveImageToPhotosAlbum',
    'saveVideoToPhotosAlbum',
    'scanCode',
    'scanItem',
    'sendBizRedPacket',
    'sendSocketMessage',
    'setBackgroundColor',
    'setBackgroundTextStyle',
    'setClipboardData',
    'setEnable1v1Chat',
    'setEnableDebug',
    'setInnerAudioOption',
    'setKeepScreenOn',
    'setNavigationBarColor',
    'setNavigationBarTitle',
    'setScreenBrightness',
    'setStorage',
    'setTabBarBadge',
    'setTabBarItem',
    'setTabBarStyle',
    'setWindowSize',
    'showActionSheet',
    'showFavoriteGuide',
    'showLoading',
    'showModal',
    'showNavigationBarLoading',
    'showShareMenu',
    'showTabBar',
    'showTabBarRedDot',
    'showToast',
    'startAccelerometer',
    'startBeaconDiscovery',
    'startBluetoothDevicesDiscovery',
    'startCompass',
    'startDeviceMotionListening',
    'startFacialRecognitionVerify',
    'startPullDownRefresh',
    'stopAccelerometer',
    'stopBeaconDiscovery',
    'stopBluetoothDevicesDiscovery',
    'stopCompass',
    'stopDeviceMotionListening',
    'stopPullDownRefresh',
    'switchTab',
    'uploadFile',
    'vibrateLong',
    'vibrateShort',
    'writeBLECharacteristicValue'
];
var apiTransformConfig = {
    nextTick: {
        fn: function (global, callback) {
            if (typeof callback !== 'function')
                return;
            if (typeof (global === null || global === void 0 ? void 0 : global.nextTick) === 'function') {
                return global.nextTick(callback);
            }
            else {
                return setTimeout(callback, 0);
            }
        }
    }
};
function initApi(mor) {
    (0, runtime_base_1.transformApis)(mor, (0, runtime_base_1.getGlobalObject)(), {
        needPromisfiedApis: exports.needPromisfiedApis,
        apiTransformConfig: apiTransformConfig
    }, false, false);
}
exports.initApi = initApi;
//# sourceMappingURL=apis.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/base64.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/base64.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Base64": function() { return /* binding */ Base64; }
/* harmony export */ });
var Base64 = {
    _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    encode: function (input) {
        var output = '';
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = Base64.utf8Encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            }
            else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output =
                output +
                    this._keyStr.charAt(enc1) +
                    this._keyStr.charAt(enc2) +
                    this._keyStr.charAt(enc3) +
                    this._keyStr.charAt(enc4);
        }
        return output;
    },
    decode: function (input) {
        var output = '';
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9+/=]/g, '');
        while (i < input.length) {
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 !== 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 !== 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = Base64.utf8Decode(output);
        return output;
    },
    utf8Encode: function (string) {
        string = string.replace(/\r\n/g, '\n');
        var utftext = '';
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if (c > 127 && c < 2048) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    },
    utf8Decode: function (utftext) {
        var string = '';
        var i = 0;
        var c = 0;
        var c2 = 0;
        var c3 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if (c > 191 && c < 224) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
};

//# sourceMappingURL=base64.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/event.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/event.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEvent": function() { return /* binding */ createEvent; },
/* harmony export */   "event": function() { return /* binding */ event; },
/* harmony export */   "getAllEvents": function() { return /* binding */ getAllEvents; }
/* harmony export */ });
/* eslint-disable @typescript-eslint/no-non-null-assertion */
// 搜集所有创建的 Emitter 实例
// 主要用于 调试或检查
var EVENT_EMITTER_INSTANCES = {};
/**
 * 创建 Emitter 实例
 * @param reason - 事件创建原因, 用于统计
 * @param all - 自定义 Map 用于存储事件名称和事件处理函数
 * @returns Emitter
 */
function createEvent(reason, all) {
    all = all || new Map();
    function on(type, handler) {
        var handlers = all.get(type);
        if (handlers) {
            handlers.push(handler);
        }
        else {
            all.set(type, [handler]);
        }
    }
    function off(type, handler) {
        var handlers = all.get(type);
        if (handlers) {
            if (handler) {
                handlers.splice(handlers.indexOf(handler) >>> 0, 1);
            }
            else {
                all.set(type, []);
            }
        }
    }
    function emit(type, evt) {
        var handlers = all.get(type);
        if (handlers) {
            ;
            handlers
                .slice()
                .map(function (handler) {
                handler(evt);
            });
        }
        handlers = all.get('*');
        if (handlers) {
            ;
            handlers.slice().map(function (handler) {
                handler(type, evt);
            });
        }
    }
    function once(type, handler) {
        if (type === '*') {
            var fn_1 = function (type, event) {
                off(type, fn_1);
                handler(type, event);
            };
            on(type, fn_1);
        }
        else {
            var fn_2 = function (event) {
                off(type, fn_2);
                handler(event);
            };
            on(type, fn_2);
        }
    }
    var emitter = {
        all: all,
        on: on,
        off: off,
        emit: emit,
        once: once
    };
    // 记录创建的 event
    EVENT_EMITTER_INSTANCES[reason] = EVENT_EMITTER_INSTANCES[reason] || [];
    EVENT_EMITTER_INSTANCES[reason].push({
        createdAt: +new Date(),
        event: emitter
    });
    return emitter;
}
/**
 * 获取所有 event 实例
 */
function getAllEvents() {
    return EVENT_EMITTER_INSTANCES;
}
/**
 * 全局默认 Event
 */
var event = createEvent('default');
//# sourceMappingURL=event.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/hooks.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/hooks.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyncHook": function() { return /* binding */ SyncHook; },
/* harmony export */   "applyPlugins": function() { return /* binding */ applyPlugins; },
/* harmony export */   "applySolutions": function() { return /* binding */ applySolutions; },
/* harmony export */   "createHooks": function() { return /* binding */ createHooks; },
/* harmony export */   "getAllHooks": function() { return /* binding */ getAllHooks; },
/* harmony export */   "hooks": function() { return /* binding */ hooks; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/logger.js");
/* harmony import */ var _utils_asArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/asArray */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/utils/asArray.js");



var HookInvokeState;
(function (HookInvokeState) {
    HookInvokeState["pausing"] = "pausing";
    HookInvokeState["resuming"] = "resuming";
})(HookInvokeState || (HookInvokeState = {}));
/**
 * 同步 Hook
 */
var SyncHook = /** @class */ (function () {
    /**
     * @constructor
     * @param name - Hook 名称
     */
    function SyncHook(name, sharedState) {
        this.name = name || '';
        this.taps = [];
        this.sharedState = sharedState;
    }
    /**
     * 返回 hook 是否已被使用
     */
    SyncHook.prototype.isUsed = function () {
        return this.taps.length > 0;
    };
    /**
     * 创建 hook alias
     * @param name Hook 名称
     */
    SyncHook.prototype.alias = function (name) {
        var aliasHook = new SyncHook(name, this.sharedState);
        // 这里直接使用 taps 数组, 方便 alias Hook 共用
        aliasHook.taps = this.taps;
        return aliasHook;
    };
    /**
     * 添加 hook 插件
     * @param nameOrOptions 名称或选项
     * @param fn 函数
     */
    SyncHook.prototype.tap = function (nameOrOptions, fn) {
        var _a;
        var name;
        var stage;
        if (typeof nameOrOptions === 'string') {
            name = nameOrOptions;
            stage = 0;
        }
        else {
            name = nameOrOptions.name;
            stage = (_a = nameOrOptions.stage) !== null && _a !== void 0 ? _a : 0;
        }
        if (name == null) {
            _logger__WEBPACK_IMPORTED_MODULE_0__.logger.error("$hooks.".concat(this.name, ".tap \u7F3A\u5C11 name"));
        }
        this.taps.push({
            type: 'sync',
            name: name,
            stage: stage,
            fn: fn
        });
    };
    /**
     * 执行 hook
     * @param context 上下文
     * @param args 参数列表
     */
    SyncHook.prototype.call = function (context) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // 按照 stage 排序
        var taps = this.taps.sort(function (a, b) {
            return a.stage - b.stage;
        });
        for (var _b = 0, taps_1 = taps; _b < taps_1.length; _b++) {
            var tap = taps_1[_b];
            // 暂停中的 hook 将所有调用保存到堆栈中，等待后续恢复
            if (this.isPausing()) {
                this.sharedState.stack.push([this.name, tap, context, args]);
            }
            else {
                try {
                    (_a = tap.fn).call.apply(_a, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([context], args, false));
                }
                catch (err) {
                    _logger__WEBPACK_IMPORTED_MODULE_0__.logger.error(this.name, tap.name, err);
                }
            }
        }
    };
    SyncHook.prototype.isPausing = function () {
        var _a;
        var state = this.sharedState;
        // 当触发了 $hooks.pause 暂停，若未传入需要指定暂停的 hooks 则暂停所有生命周期触发
        // 若传入了某些指定的 hooks 数组，则只暂停这些传入 hooks
        if ((state === null || state === void 0 ? void 0 : state.state) !== HookInvokeState.pausing)
            return false;
        if (((_a = state.hooksNameList) === null || _a === void 0 ? void 0 : _a.length) === 0)
            return true;
        if (state.hooksNameList.indexOf(this.name) !== -1)
            return true;
        return false;
    };
    return SyncHook;
}());

// 搜集所有创建的 hooks 实例
// 主要用于 调试或检查
var HOOKS_INSTANCES = {};
/**
 * 创建 hooks 对象
 * @param reason Hooks 创建原因
 * @returns hooks 对象
 */
function createHooks(reason) {
    var sharedState = {
        state: HookInvokeState.resuming,
        stack: [],
        hooksNameList: []
    };
    var appOnConstruct = new SyncHook('appOnConstruct', sharedState);
    var pageOnConstructHook = new SyncHook('pageOnConstruct', sharedState);
    var componentOnInitHook = new SyncHook('componentOnInit', sharedState);
    var componentDidMountHook = new SyncHook('componentDidMount', sharedState);
    var componentDidUnmountHook = new SyncHook('componentDidUnmount', sharedState);
    var componentOnError = new SyncHook('componentOnError', sharedState);
    var hooks = {
        /* App 相关 hooks */
        appOnConstruct: appOnConstruct,
        // appOnInit 已废弃, 这里出于兼容性暂不移除
        appOnInit: appOnConstruct.alias('appOnInit'),
        appOnLaunch: new SyncHook('appOnLaunch', sharedState),
        appOnError: new SyncHook('appOnError', sharedState),
        appOnShow: new SyncHook('appOnShow', sharedState),
        appOnHide: new SyncHook('appOnHide', sharedState),
        appOnPageNotFound: new SyncHook('appOnPageNotFound', sharedState),
        appOnUnhandledRejection: new SyncHook('appOnUnhandledRejection', sharedState),
        /* Page 相关 hooks */
        pageOnConstruct: pageOnConstructHook,
        // pageOnInit 已废弃, 这里出于兼容性暂不移除
        pageOnInit: pageOnConstructHook.alias('pageOnInit'),
        pageOnLoad: new SyncHook('pageOnLoad', sharedState),
        pageOnReady: new SyncHook('pageOnReady', sharedState),
        pageOnShow: new SyncHook('pageOnShow', sharedState),
        pageOnHide: new SyncHook('pageOnHide', sharedState),
        pageOnUnload: new SyncHook('pageOnUnload', sharedState),
        /* Component 相关 hooks */
        componentOnConstruct: new SyncHook('componentOnConstruct', sharedState),
        componentOnInit: componentOnInitHook,
        componentOnCreated: componentOnInitHook.alias('componentOnCreated'),
        componentDidMount: componentDidMountHook,
        componentOnAttached: componentDidMountHook.alias('componentOnAttached'),
        componentDidUnmount: componentDidUnmountHook,
        componentOnDetached: componentDidUnmountHook.alias('componentOnDetached'),
        componentOnError: componentOnError,
        pause: function (hooksNameList) {
            sharedState.state = HookInvokeState.pausing;
            sharedState.hooksNameList = hooksNameList || [];
        },
        resume: function () {
            var _a;
            sharedState.state = HookInvokeState.resuming;
            var stackItem = sharedState.stack.shift();
            while (stackItem) {
                var name_1 = stackItem[0], tap = stackItem[1], context = stackItem[2], args = stackItem[3];
                try {
                    tap === null || tap === void 0 ? void 0 : (_a = tap.fn).call.apply(_a, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([context], args, false));
                }
                catch (error) {
                    _logger__WEBPACK_IMPORTED_MODULE_0__.logger.error(name_1, tap.name, error);
                }
                stackItem = sharedState.stack.shift();
            }
        }
    };
    // 记录创建的所有 hooks
    HOOKS_INSTANCES[reason] = HOOKS_INSTANCES[reason] || [];
    HOOKS_INSTANCES[reason].push({
        createdAt: +new Date(),
        hooks: hooks
    });
    return hooks;
}
/**
 * 获取所有 hooks
 */
function getAllHooks() {
    return HOOKS_INSTANCES;
}
/**
 * 获取全局共享属性，用于作为原子化的兜底实现
 *   1. 首先查找上下文中的属性
 *   2. 如果不存在，则查找 getApp 中的
 *   3. 如果不存在，则查找 小程序环境的 globalObject, 如 my 中是否存在
 */
var hooks = createHooks('default');
/**
 * 应用插件
 * @param hooks Hooks
 * @param plugins 插件列表
 */
function applyPlugins(hooks, plugins) {
    var pluginsNames = [];
    plugins.forEach(function (plugin) {
        try {
            plugin.apply(hooks);
            pluginsNames.push(plugin.pluginName);
        }
        catch (err) {
            _logger__WEBPACK_IMPORTED_MODULE_0__.logger.error("[plugin ".concat(plugin.pluginName, "]: \u521D\u59CB\u5316\u62A5\u9519"), err);
        }
    });
    return pluginsNames;
}
/**
 * 应用 Solutions
 * @param hooks Hooks
 * @param solutions 插件集列表
 */
function applySolutions(hooks, solution) {
    var solutions = (0,_utils_asArray__WEBPACK_IMPORTED_MODULE_2__.asArray)(solution);
    var plugins = [];
    try {
        solutions.forEach(function (solution) {
            var _a;
            if (typeof solution === 'function') {
                plugins = plugins.concat(((_a = solution()) === null || _a === void 0 ? void 0 : _a.plugins) || []);
            }
            else {
                _logger__WEBPACK_IMPORTED_MODULE_0__.logger.error("\u521D\u59CB\u5316\u8FD0\u884C\u65F6\u63D2\u4EF6\u5931\u8D25, \u539F\u56E0: ".concat(solution, " \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684 solution"));
            }
        });
    }
    catch (err) {
        _logger__WEBPACK_IMPORTED_MODULE_0__.logger.error("\u521D\u59CB\u5316\u8FD0\u884C\u65F6\u63D2\u4EF6\u5931\u8D25, \u539F\u56E0: ".concat(err));
    }
    return applyPlugins(hooks, plugins);
}
//# sourceMappingURL=hooks.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/index.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/index.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Base64": function() { return /* reexport safe */ _base64__WEBPACK_IMPORTED_MODULE_0__.Base64; },
/* harmony export */   "ENV_TYPE": function() { return /* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_1__.ENV_TYPE; },
/* harmony export */   "ENV_TYPE_DESC": function() { return /* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_1__.ENV_TYPE_DESC; },
/* harmony export */   "SOURCE_TYPE": function() { return /* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_1__.SOURCE_TYPE; },
/* harmony export */   "SyncHook": function() { return /* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.SyncHook; },
/* harmony export */   "applyPlugins": function() { return /* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.applyPlugins; },
/* harmony export */   "applySolutions": function() { return /* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.applySolutions; },
/* harmony export */   "asArray": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_5__.asArray; },
/* harmony export */   "compose": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_5__.compose; },
/* harmony export */   "createEvent": function() { return /* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_2__.createEvent; },
/* harmony export */   "createHooks": function() { return /* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.createHooks; },
/* harmony export */   "event": function() { return /* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_2__.event; },
/* harmony export */   "generateId": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_5__.generateId; },
/* harmony export */   "getAllEvents": function() { return /* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_2__.getAllEvents; },
/* harmony export */   "getAllHooks": function() { return /* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.getAllHooks; },
/* harmony export */   "getEnv": function() { return /* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_1__.getEnv; },
/* harmony export */   "getEnvDesc": function() { return /* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_1__.getEnvDesc; },
/* harmony export */   "getGlobalObject": function() { return /* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_1__.getGlobalObject; },
/* harmony export */   "getSharedProperty": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_5__.getSharedProperty; },
/* harmony export */   "hasOwnProperty": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_5__.hasOwnProperty; },
/* harmony export */   "hooks": function() { return /* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.hooks; },
/* harmony export */   "logger": function() { return /* reexport safe */ _logger__WEBPACK_IMPORTED_MODULE_4__.logger; },
/* harmony export */   "markAsUnsupport": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_5__.markAsUnsupport; },
/* harmony export */   "transformApis": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_5__.transformApis; }
/* harmony export */ });
/* harmony import */ var _base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base64 */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/base64.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/env.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/event.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/hooks.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/logger.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/utils/index.js");






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/logger.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/logger.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": function() { return /* binding */ logger; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");

var PREFIX = '[mor]';
function warn() {
    var msgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        msgs[_i] = arguments[_i];
    }
    console.warn && console.warn.apply(console, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([PREFIX], msgs, false));
}
function log() {
    var msgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        msgs[_i] = arguments[_i];
    }
    console.log && console.log.apply(console, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([PREFIX], msgs, false));
}
function error() {
    var msgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        msgs[_i] = arguments[_i];
    }
    console.error && console.error.apply(console, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([PREFIX], msgs, false));
}
function info() {
    var msgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        msgs[_i] = arguments[_i];
    }
    console.info && console.info.apply(console, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([PREFIX], msgs, false));
}
function debug() {
    var msgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        msgs[_i] = arguments[_i];
    }
    console.debug && console.debug.apply(console, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([PREFIX], msgs, false));
}
function deprecated(msg, fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        warn(msg);
        return fn.apply(void 0, args);
    };
}
var PERFORMANCE_TIMERS = {};
/**
 * 记录时间开始
 * @param label 标签
 */
function time(label) {
    PERFORMANCE_TIMERS[label] = +new Date();
}
/**
 * 记录时间结束并输出耗时
 * 大于 50ms 时会输出 warn
 * @param label 标签
 */
function timeEnd(label) {
    var start = PERFORMANCE_TIMERS[label];
    if (start) {
        delete PERFORMANCE_TIMERS[label];
        var millis = Date.now() - start;
        var msg = "".concat(label, " \u8017\u65F6: ").concat(millis, "ms");
        // 超过 50 ms
        // 输出警告
        millis > 50 ? warn(msg) : debug(msg);
    }
}
var logger = {
    warn: warn,
    log: log,
    error: error,
    info: info,
    debug: debug,
    deprecated: deprecated,
    time: time,
    timeEnd: timeEnd
};
//# sourceMappingURL=logger.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/utils/asArray.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/utils/asArray.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asArray": function() { return /* binding */ asArray; }
/* harmony export */ });
/**
 * 确保一个对象是数组
 *  - 如果 对象 == null 则返回空数组
 *  - 如果 对象不是数组 则返回包含该对象的数组
 *  - 如果 对象是数组 直接返回
 * @param arr - 需要转换为数组的参数
 * @returns 数组
 */
function asArray(arr) {
    return Array.isArray(arr) ? arr : arr == null ? [] : [arr];
}
//# sourceMappingURL=asArray.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/utils/compose.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/utils/compose.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compose": function() { return /* binding */ compose; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");

/**
 * 将多个函数合并为一个函数
 * @param stack - 函数堆栈
 * @returns 合并后的函数
 */
function compose(stack) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var _a = 0, stack_1 = stack; _a < stack_1.length; _a++) {
            var fn = stack_1[_a];
            if (Object.prototype.toString.call(fn) === '[object Function]') {
                fn.call.apply(fn, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([this], args, false));
            }
        }
    };
}
//# sourceMappingURL=compose.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/utils/generateId.js":
/*!****************************************************************************************************!*\
  !*** ../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/utils/generateId.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateId": function() { return /* binding */ generateId; }
/* harmony export */ });
var ID = 0;
/**
 * 生成 ID
 */
function generateId() {
    return ++ID;
}
//# sourceMappingURL=generateId.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/utils/getSharedProperty.js":
/*!***********************************************************************************************************!*\
  !*** ../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/utils/getSharedProperty.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSharedProperty": function() { return /* binding */ getSharedProperty; }
/* harmony export */ });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../env */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/env.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/event.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/hooks.js");



// 默认的共享对象
var SHARED = {
    $morHooks: _hooks__WEBPACK_IMPORTED_MODULE_0__.hooks,
    $event: _event__WEBPACK_IMPORTED_MODULE_1__.event
};
/**
 * 获取全局共享属性，用于作为原子化的兜底实现
 *   1. 首先查找上下文中对应的属性
 *   2. 如果不存在，则查找 getApp 中的
 *   3. 如果不存在，则查找 小程序环境的 globalObject, 如 my 中是否存在
 *   4. 如果不存在，则使用 SHARED 作为兜底
 * @param propName - 共享属性名称
 * @param context - 当前执行环境的上下文
 * @returns propValue
 */
function getSharedProperty(propName, context) {
    // 先从当前上下文张获取，如果上下文存在的话
    if (context && context[propName] != null)
        return context[propName];
    // 尝试从 getApp 中获取
    if (typeof getApp === 'function') {
        var app = getApp();
        if (app && app[propName] != null)
            return app[propName];
    }
    // 从全局对象中获取
    var globalObj = (0,_env__WEBPACK_IMPORTED_MODULE_2__.getGlobalObject)();
    if (globalObj && globalObj[propName] != null)
        return globalObj[propName];
    return SHARED[propName];
}
//# sourceMappingURL=getSharedProperty.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/utils/hasOwnProperty.js":
/*!********************************************************************************************************!*\
  !*** ../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/utils/hasOwnProperty.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasOwnProperty": function() { return /* binding */ hasOwnProperty; }
/* harmony export */ });
/**
 * 对象中是否包含对应的属性
 * @param obj - 对象
 * @param propertyName - 属性名称
 * @returns true or false
 */
function hasOwnProperty(obj, propertyName) {
    return Object.prototype.hasOwnProperty.call(obj, propertyName);
}
//# sourceMappingURL=hasOwnProperty.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/utils/index.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/utils/index.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asArray": function() { return /* reexport safe */ _asArray__WEBPACK_IMPORTED_MODULE_0__.asArray; },
/* harmony export */   "compose": function() { return /* reexport safe */ _compose__WEBPACK_IMPORTED_MODULE_1__.compose; },
/* harmony export */   "generateId": function() { return /* reexport safe */ _generateId__WEBPACK_IMPORTED_MODULE_2__.generateId; },
/* harmony export */   "getSharedProperty": function() { return /* reexport safe */ _getSharedProperty__WEBPACK_IMPORTED_MODULE_3__.getSharedProperty; },
/* harmony export */   "hasOwnProperty": function() { return /* reexport safe */ _hasOwnProperty__WEBPACK_IMPORTED_MODULE_4__.hasOwnProperty; },
/* harmony export */   "markAsUnsupport": function() { return /* reexport safe */ _transformApis__WEBPACK_IMPORTED_MODULE_5__.markAsUnsupport; },
/* harmony export */   "transformApis": function() { return /* reexport safe */ _transformApis__WEBPACK_IMPORTED_MODULE_5__.transformApis; }
/* harmony export */ });
/* harmony import */ var _asArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asArray */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/utils/asArray.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/utils/compose.js");
/* harmony import */ var _generateId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateId */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/utils/generateId.js");
/* harmony import */ var _getSharedProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getSharedProperty */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/utils/getSharedProperty.js");
/* harmony import */ var _hasOwnProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hasOwnProperty */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/utils/hasOwnProperty.js");
/* harmony import */ var _transformApis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transformApis */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/utils/transformApis.js");






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/utils/transformApis.js":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/utils/transformApis.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "markAsUnsupport": function() { return /* binding */ markAsUnsupport; },
/* harmony export */   "transformApis": function() { return /* binding */ transformApis; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../env */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/env.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logger */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/logger.js");
/* harmony import */ var _hasOwnProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hasOwnProperty */ "../node_modules/@morjs/runtime-mini/node_modules/@morjs/runtime-base/esm/utils/hasOwnProperty.js");




/**
 * 获取原始小程序 request 函数
 * @param global 小程序全局对象
 * @returns request 函数
 */
function getOriginalRequest(global) {
    return function request(options) {
        options = options || {};
        if (typeof options === 'string') {
            options = {
                url: options
            };
        }
        var originSuccess = options.success;
        var originFail = options.fail;
        var originComplete = options.complete;
        var requestTask;
        var p = new Promise(function (resolve, reject) {
            options.success = function (res) {
                originSuccess && originSuccess(res);
                resolve(res);
            };
            options.fail = function (res) {
                originFail && originFail(res);
                reject(res);
            };
            options.complete = function (res) {
                originComplete && originComplete(res);
            };
            requestTask = global.request(options);
        });
        p.abort = function (cb) {
            cb && cb();
            if (requestTask) {
                requestTask.abort();
            }
            return p;
        };
        return p;
    };
}
/**
 * 接口抹平转换
 * @param mor - mor 接口对象
 * @param global - 小程序目标平台全局对象
 * @param config - 接口抹平配置
 * @param installAllGlobalApis - 是否在 mor 中添加所有的 API
 * @param allowOverride - 是否允许覆盖 API
 */
function transformApis(mor, global, config, installAllGlobalApis, allowOverride) {
    if (config === void 0) { config = {}; }
    if (installAllGlobalApis === void 0) { installAllGlobalApis = false; }
    if (allowOverride === void 0) { allowOverride = true; }
    var needPromisfiedApis = config.needPromisfiedApis || [];
    var apiTransformConfig = config.apiTransformConfig || {};
    var preservedApis = [
        'global',
        'env',
        'getApp',
        'getCurrentPages',
        'requirePlugin',
        'getEnv'
    ];
    // 获取所有需要抹平的接口
    var allApiNames = installAllGlobalApis ? Object.keys(global) : [];
    // 合并需要处理的接口名称
    Object.keys(apiTransformConfig)
        .concat(needPromisfiedApis)
        .forEach(function (apiName) {
        if (allApiNames.indexOf(apiName) === -1) {
            allApiNames.push(apiName);
        }
    });
    // 处理接口差异
    allApiNames.forEach(function (apiName) {
        // 不处理 preserved 的 api
        if (preservedApis.indexOf(apiName) !== -1)
            return;
        // 不处理 mor_ 开头的属性
        if (/^mor_/.test(apiName))
            return;
        // 不重复添加接口
        if (allowOverride === false && apiName in mor)
            return;
        var apiConfig = apiTransformConfig[apiName];
        // 非函数处理
        if (global[apiName] && typeof global[apiName] !== 'function') {
            mor[apiName] = global[apiName];
            return;
        }
        // 函数处理
        mor[apiName] = function (options) {
            var _a;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            // options 差异抹平
            if (typeof (apiConfig === null || apiConfig === void 0 ? void 0 : apiConfig.opts) === 'function') {
                apiConfig.opts.apply(apiConfig, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([options], args, false));
            }
            else if (apiConfig === null || apiConfig === void 0 ? void 0 : apiConfig.opts) {
                var change = apiConfig.opts.c;
                var set = apiConfig.opts.s;
                if (options == null)
                    options = {};
                // 替换 键值
                if (change) {
                    change.forEach(function (item) {
                        if (item.o in options)
                            options[item.n] = options[item.o];
                    });
                }
                // 改写值
                if (set) {
                    set.forEach(function (item) {
                        options[item.k] =
                            typeof item.v === 'function' ? item.v(options) : item.v;
                    });
                }
            }
            // 实际接口名称
            var actualApiName = (apiConfig === null || apiConfig === void 0 ? void 0 : apiConfig.n) || apiName;
            var task = null;
            var obj = Object.assign({}, options);
            // 执行替换函数
            if (typeof (apiConfig === null || apiConfig === void 0 ? void 0 : apiConfig.fn) === 'function') {
                return apiConfig.fn.apply(apiConfig, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([global, options], args, false));
            }
            // 处理 request
            if (actualApiName === 'request') {
                return getOriginalRequest(global)(options);
            }
            // promisify 处理
            if (needPromisfiedApis.indexOf(apiName) !== -1) {
                // 新 apiName 可能不存在
                if (!(0,_hasOwnProperty__WEBPACK_IMPORTED_MODULE_1__.hasOwnProperty)(global, actualApiName)) {
                    return Promise.resolve(markAsUnsupport(actualApiName)());
                }
                // Promise 化
                var p_1 = new Promise(function (resolve, reject) {
                    obj.success = function (res) {
                        var _a, _b;
                        (_a = apiConfig === null || apiConfig === void 0 ? void 0 : apiConfig.r) === null || _a === void 0 ? void 0 : _a.call(apiConfig, res);
                        (_b = options === null || options === void 0 ? void 0 : options.success) === null || _b === void 0 ? void 0 : _b.call(options, res);
                        if (actualApiName === 'connectSocket') {
                            resolve(Promise.resolve().then(function () {
                                return task ? Object.assign(task, res) : res;
                            }));
                        }
                        else {
                            resolve(res);
                        }
                    };
                    obj.fail = function (res) {
                        var _a;
                        (_a = options === null || options === void 0 ? void 0 : options.fail) === null || _a === void 0 ? void 0 : _a.call(options, res);
                        // 如果用户传入了 fail 则代表用户自行处理错误
                        // mor 不再抛出 promise 错误, 只标记完成
                        if (typeof (options === null || options === void 0 ? void 0 : options.fail) === 'function') {
                            resolve(null);
                        }
                        else {
                            reject(res);
                        }
                        _logger__WEBPACK_IMPORTED_MODULE_2__.logger.error("\u63A5\u53E3 ".concat(actualApiName, " \u8C03\u7528\u9519\u8BEF: "), res, "\n\u53C2\u6570: ", (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([
                            options
                        ], args, true));
                    };
                    obj.complete = function (res) {
                        var _a;
                        (_a = options === null || options === void 0 ? void 0 : options.complete) === null || _a === void 0 ? void 0 : _a.call(options, res);
                    };
                    if (args.length) {
                        task = global[actualApiName].apply(global, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([obj], args, false));
                    }
                    else {
                        task = global[actualApiName](obj);
                    }
                });
                // 给 promise 对象挂载属性
                if (actualApiName === 'uploadFile' ||
                    actualApiName === 'downloadFile') {
                    p_1.progress = function (cb) {
                        var _a;
                        (_a = task === null || task === void 0 ? void 0 : task.onProgressUpdate) === null || _a === void 0 ? void 0 : _a.call(task, cb);
                        return p_1;
                    };
                    p_1.abort = function (cb) {
                        var _a;
                        cb === null || cb === void 0 ? void 0 : cb();
                        (_a = task === null || task === void 0 ? void 0 : task.abort) === null || _a === void 0 ? void 0 : _a.call(task);
                        return p_1;
                    };
                }
                return p_1;
            }
            else {
                // 新 apiName 可能不存在
                if (!(0,_hasOwnProperty__WEBPACK_IMPORTED_MODULE_1__.hasOwnProperty)(global, actualApiName)) {
                    return markAsUnsupport(actualApiName)();
                }
                var res = global[actualApiName].apply(global, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([options], args, false));
                (_a = apiConfig === null || apiConfig === void 0 ? void 0 : apiConfig.r) === null || _a === void 0 ? void 0 : _a.call(apiConfig, res);
                return res;
            }
        };
    });
}
/**
 * 返回暂不支持的 函数
 * @param apiName - 接口名称
 */
function markAsUnsupport(apiName) {
    return function () {
        _logger__WEBPACK_IMPORTED_MODULE_2__.logger.warn("".concat((0,_env__WEBPACK_IMPORTED_MODULE_3__.getEnvDesc)(), "\u6682\u4E0D\u652F\u6301 ").concat(apiName));
    };
}
//# sourceMappingURL=transformApis.js.map

/***/ }),

/***/ "../node_modules/lodash.get/index.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash.get/index.js ***!
  \*******************************************/
/***/ (function(module) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "../node_modules/lodash.has/index.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash.has/index.js ***!
  \*******************************************/
/***/ (function(module) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

module.exports = has;


/***/ }),

/***/ "../node_modules/lodash.set/index.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash.set/index.js ***!
  \*******************************************/
/***/ (function(module) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = isKey(path, object) ? [path] : castPath(path);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;


/***/ }),

/***/ "../node_modules/tslib/tslib.es6.mjs":
/*!*******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.mjs ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__addDisposableResource": function() { return /* binding */ __addDisposableResource; },
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldIn": function() { return /* binding */ __classPrivateFieldIn; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__disposeResources": function() { return /* binding */ __disposeResources; },
/* harmony export */   "__esDecorate": function() { return /* binding */ __esDecorate; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__propKey": function() { return /* binding */ __propKey; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__runInitializers": function() { return /* binding */ __runInitializers; },
/* harmony export */   "__setFunctionName": function() { return /* binding */ __setFunctionName; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArray": function() { return /* binding */ __spreadArray; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__values": function() { return /* binding */ __values; }
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ __webpack_exports__["default"] = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ })

}]);
//# sourceMappingURL=mor.v.js.map