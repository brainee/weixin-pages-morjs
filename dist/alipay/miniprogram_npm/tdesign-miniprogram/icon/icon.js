(my["mor_modules"] = my["mor_modules"] || []).push([["miniprogram_npm/tdesign-miniprogram/icon/icon"],{

/***/ "./miniprogram_npm/tdesign-miniprogram/common/config.js":
/*!**************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/common/config.js ***!
  \**************************************************************/
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

/***/ "./miniprogram_npm/tdesign-miniprogram/common/src/control.js":
/*!*******************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/common/src/control.js ***!
  \*******************************************************************/
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

/***/ "./miniprogram_npm/tdesign-miniprogram/common/src/flatTool.js":
/*!********************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/common/src/flatTool.js ***!
  \********************************************************************/
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

/***/ "./miniprogram_npm/tdesign-miniprogram/common/src/index.js":
/*!*****************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/common/src/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuperComponent": function() { return /* reexport safe */ _superComponent__WEBPACK_IMPORTED_MODULE_0__.SuperComponent; },
/* harmony export */   "wxComponent": function() { return /* reexport safe */ _instantiationDecorator__WEBPACK_IMPORTED_MODULE_1__.wxComponent; }
/* harmony export */ });
/* harmony import */ var _superComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superComponent */ "./miniprogram_npm/tdesign-miniprogram/common/src/superComponent.js");
/* harmony import */ var _instantiationDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instantiationDecorator */ "./miniprogram_npm/tdesign-miniprogram/common/src/instantiationDecorator.js");
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control */ "./miniprogram_npm/tdesign-miniprogram/common/src/control.js");






/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/common/src/instantiationDecorator.js":
/*!**********************************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/common/src/instantiationDecorator.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;
var __MOR_COMPONENT__ = (__webpack_require__(/*! @morjs/core */ "../node_modules/@morjs/core/esm/index.js").createComponent);

"use strict";
__webpack_unused_export__ = ({ value: true });
exports.wxComponent = exports.toComponent = void 0;
var Behavior = (__webpack_require__(/*! ../node_modules/@morjs/runtime-mini/lib/common/behaviorOrMixin.js */ "../node_modules/@morjs/runtime-mini/lib/common/behaviorOrMixin.js").Behavior);
const flatTool_1 = __webpack_require__(/*! ./flatTool */ "./miniprogram_npm/tdesign-miniprogram/common/src/flatTool.js");
const version_1 = __webpack_require__(/*! ../version */ "./miniprogram_npm/tdesign-miniprogram/common/version.js");
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

/***/ "./miniprogram_npm/tdesign-miniprogram/common/src/superComponent.js":
/*!**************************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/common/src/superComponent.js ***!
  \**************************************************************************/
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

/***/ "./miniprogram_npm/tdesign-miniprogram/common/utils.js":
/*!*************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/common/utils.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addUnit": function() { return /* binding */ addUnit; },
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* unused harmony exports debounce, throttle, classNames, getAnimationFrame, getRect, isNumber, isNull, isUndefined, isDef, getCharacterLength, chunk, getInstance, unitConvert, setIcon, isBool, isObject, isString, toCamel, getCurrentPage, uniqueFactory, calcIcon, isOverSize */
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./miniprogram_npm/tdesign-miniprogram/common/config.js");
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

/***/ "./miniprogram_npm/tdesign-miniprogram/common/version.js":
/*!***************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/common/version.js ***!
  \***************************************************************/
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

/***/ "./miniprogram_npm/tdesign-miniprogram/icon/icon.js":
/*!**********************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/icon/icon.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "./miniprogram_npm/tdesign-miniprogram/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "./miniprogram_npm/tdesign-miniprogram/common/config.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "./miniprogram_npm/tdesign-miniprogram/icon/props.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils */ "./miniprogram_npm/tdesign-miniprogram/common/utils.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const { prefix } = _common_config__WEBPACK_IMPORTED_MODULE_1__["default"];
const name = `${prefix}-icon`;
let Icon = class Icon extends _common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`];
        this.properties = _props__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.data = {
            componentPrefix: prefix,
            classPrefix: name,
            isImage: false,
            iconStyle: undefined,
        };
        this.observers = {
            'name, color, size, style'() {
                this.setIconStyle();
            },
        };
        this.methods = {
            onTap(event) {
                this.triggerEvent('click', event.detail);
            },
            setIconStyle() {
                const { name, color, size } = this.properties;
                const isImage = name.indexOf('/') !== -1;
                const sizeValue = (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.addUnit)(size);
                const sizeStyle = isImage ? { width: sizeValue, height: sizeValue } : {};
                const colorStyle = color ? { color: color } : {};
                const fontStyle = size ? { 'font-size': sizeValue } : {};
                this.setData({
                    isImage,
                    iconStyle: `${(0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.styles)(Object.assign(Object.assign(Object.assign({}, colorStyle), fontStyle), sizeStyle))}`,
                });
            },
        };
    }
};
Icon = __decorate([
    (0,_common_src_index__WEBPACK_IMPORTED_MODULE_0__.wxComponent)()
], Icon);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/icon/props.js":
/*!***********************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/icon/props.js ***!
  \***********************************************************/
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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v"], function() { return __webpack_exec__("./miniprogram_npm/tdesign-miniprogram/icon/icon.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=icon.js.map