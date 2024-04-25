"use strict";
(my["mor_modules"] = my["mor_modules"] || []).push([["components/tdesign-miniprogram/icon/icon"],{

/***/ "./components/tdesign-miniprogram/common/utils.js":
/*!********************************************************!*\
  !*** ./components/tdesign-miniprogram/common/utils.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addUnit": function() { return /* binding */ addUnit; },
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* unused harmony exports debounce, throttle, classNames, getAnimationFrame, getRect, isNumber, isNull, isUndefined, isDef, getCharacterLength, chunk, getInstance, unitConvert, setIcon, isBool, isObject, isString, toCamel, getCurrentPage, uniqueFactory, calcIcon, isOverSize */
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./components/tdesign-miniprogram/common/config.js");
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

/***/ "./components/tdesign-miniprogram/icon/icon.js":
/*!*****************************************************!*\
  !*** ./components/tdesign-miniprogram/icon/icon.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _common_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/src/index */ "./components/tdesign-miniprogram/common/src/index.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ "./components/tdesign-miniprogram/common/config.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "./components/tdesign-miniprogram/icon/props.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils */ "./components/tdesign-miniprogram/common/utils.js");
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

/***/ "./components/tdesign-miniprogram/icon/props.js":
/*!******************************************************!*\
  !*** ./components/tdesign-miniprogram/icon/props.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {


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
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./components/tdesign-miniprogram/icon/icon.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=icon.js.map