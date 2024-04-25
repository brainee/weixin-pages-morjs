"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["miniprogram_npm/tdesign-miniprogram/icon/icon"],{

/***/ "./miniprogram_npm/tdesign-miniprogram/common/config.js":
/*!**************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/common/config.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prefix": function() { return /* binding */ prefix; }
/* harmony export */ });
/* harmony default export */ __webpack_exports__["default"] = ({
    prefix: "t",
});
var prefix = "t";


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/common/src/control.js":
/*!*******************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/common/src/control.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export useControl */
var defaultOption = {
    valueKey: 'value',
    defaultValueKey: 'defaultValue',
    changeEventName: 'change',
    strict: true,
};
function useControl(option) {
    var _this = this;
    if (option === void 0) { option = {}; }
    var _a = Object.assign(Object.assign({}, defaultOption), option), valueKey = _a.valueKey, defaultValueKey = _a.defaultValueKey, changeEventName = _a.changeEventName, strict = _a.strict;
    var props = this.properties || {};
    var value = props[valueKey];
    var defaultValue = props[strict ? defaultValueKey : valueKey];
    var controlled = false;
    if (strict && typeof value !== 'undefined' && value !== null) {
        controlled = true;
    }
    var set = function (newVal, extObj, fn) {
        var _a;
        _this.setData(Object.assign((_a = {}, _a["_" + valueKey] = newVal, _a), extObj), fn);
    };
    return {
        controlled: controlled,
        initValue: controlled ? value : defaultValue,
        set: set,
        get: function () {
            return _this.data["_" + valueKey];
        },
        change: function (newVal, customChangeData, customUpdateFn) {
            _this.triggerEvent(changeEventName, typeof customChangeData !== 'undefined' ? customChangeData : newVal);
            if (controlled) {
                return;
            }
            if (typeof customUpdateFn === 'function') {
                customUpdateFn();
            }
            else {
                set(newVal);
            }
        },
    };
}



/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/common/src/flatTool.js":
/*!********************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/common/src/flatTool.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPlainObject": function() { return /* binding */ isPlainObject; },
/* harmony export */   "toObject": function() { return /* binding */ toObject; }
/* harmony export */ });
/* unused harmony exports getPrototypeOf, isObject, iterateInheritedPrototype */
var getPrototypeOf = function (obj) {
    return Object.getPrototypeOf ? Object.getPrototypeOf(obj) : obj.__proto__;
};
var isObject = function isObject(something) {
    var type = typeof something;
    return something !== null && (type === 'function' || type === 'object');
};
var iterateInheritedPrototype = function iterateInheritedPrototype(callback, fromCtor, toCtor, includeToCtor) {
    if (includeToCtor === void 0) { includeToCtor = true; }
    var proto = fromCtor.prototype || fromCtor;
    var toProto = toCtor.prototype || toCtor;
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
var toObject = function toObject(something, options) {
    if (options === void 0) { options = {}; }
    var obj = {};
    if (!isObject(something))
        return obj;
    var excludes = options.excludes || ['constructor'];
    var _a = options.enumerable, enumerable = _a === void 0 ? true : _a, _b = options.configurable, configurable = _b === void 0 ? 0 : _b, _c = options.writable, writable = _c === void 0 ? 0 : _c;
    var defaultDesc = {};
    if (enumerable !== 0)
        defaultDesc.enumerable = enumerable;
    if (configurable !== 0)
        defaultDesc.configurable = configurable;
    if (writable !== 0)
        defaultDesc.writable = writable;
    iterateInheritedPrototype(function (proto) {
        Object.getOwnPropertyNames(proto).forEach(function (key) {
            if (excludes.indexOf(key) >= 0)
                return;
            if (Object.prototype.hasOwnProperty.call(obj, key))
                return;
            var desc = Object.getOwnPropertyDescriptor(proto, key);
            var fnKeys = ['get', 'set', 'value'];
            fnKeys.forEach(function (k) {
                if (typeof desc[k] === 'function') {
                    var oldFn_1 = desc[k];
                    desc[k] = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return oldFn_1.apply(Object.prototype.hasOwnProperty.call(options, 'bindTo') ? options.bindTo : this, args);
                    };
                }
            });
            Object.defineProperty(obj, key, Object.assign(Object.assign({}, desc), defaultDesc));
        });
    }, something, options.till || Object, false);
    return obj;
};
var isPlainObject = function isPlainObject(something) {
    return Object.prototype.toString.call(something) === '[object Object]';
};


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/common/src/index.js":
/*!*****************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/common/src/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wxComponent": function() { return /* binding */ wxComponent; }
/* harmony export */ });
/* unused harmony export toComponent */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _flatTool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flatTool */ "./miniprogram_npm/tdesign-miniprogram/common/src/flatTool.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../version */ "./miniprogram_npm/tdesign-miniprogram/common/version.js");



var RawLifeCycles = ['Created', 'Attached', 'Ready', 'Moved', 'Detached', 'Error'];
var NativeLifeCycles = RawLifeCycles.map(function (k) { return k.toLowerCase(); });
var ComponentNativeProps = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([
    'properties',
    'data',
    'observers',
    'methods',
    'behaviors'
], NativeLifeCycles, true), [
    'relations',
    'externalClasses',
    'options',
    'lifetimes',
    'pageLifeTimes',
    'definitionFilter',
], false);
var toComponent = function toComponent(options) {
    var relations = options.relations, _a = options.behaviors, behaviors = _a === void 0 ? [] : _a, _b = options.externalClasses, externalClasses = _b === void 0 ? [] : _b;
    if (options.properties) {
        Object.keys(options.properties).forEach(function (k) {
            var opt = options.properties[k];
            if (!(0,_flatTool__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(opt)) {
                opt = { type: opt };
            }
            options.properties[k] = opt;
        });
        var ariaProps = [
            { key: 'ariaHidden', type: Boolean },
            { key: 'ariaRole', type: String },
            { key: 'ariaLabel', type: String },
            { key: 'ariaLabelledby', type: String },
            { key: 'ariaDescribedby', type: String },
            { key: 'ariaBusy', type: Boolean },
        ];
        ariaProps.forEach(function (_a) {
            var key = _a.key, type = _a.type;
            options.properties[key] = {
                type: type,
            };
        });
        options.properties.style = { type: String, value: '' };
        options.properties.customStyle = { type: String, value: '' };
    }
    if (!options.methods)
        options.methods = {};
    if (!options.lifetimes)
        options.lifetimes = {};
    var inits = {};
    if (relations) {
        var getRelations_1 = function (relation, path) { return Behavior({
            created: function () {
                var _this = this;
                Object.defineProperty(this, "$" + relation, {
                    get: function () {
                        var nodes = _this.getRelationNodes(path) || [];
                        return relation === 'parent' ? nodes[0] : nodes;
                    },
                });
            },
        }); };
        var map_1 = {};
        Object.keys(relations).forEach(function (path) {
            var comp = relations[path];
            var relation = ['parent', 'ancestor'].includes(comp.type) ? 'parent' : 'children';
            var mixin = getRelations_1(relation, path);
            map_1[relation] = mixin;
        });
        behaviors.push.apply(behaviors, Object.keys(map_1).map(function (key) { return map_1[key]; }));
    }
    options.behaviors = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], behaviors, true);
    options.externalClasses = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)(['class'], externalClasses, true);
    Object.getOwnPropertyNames(options).forEach(function (k) {
        var desc = Object.getOwnPropertyDescriptor(options, k);
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
        var oldCreated_1 = options.lifetimes.created;
        var oldAttached_1 = options.lifetimes.attached;
        var _c = options.controlledProps, controlledProps_1 = _c === void 0 ? [] : _c;
        options.lifetimes.created = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            Object.defineProperties(this, inits);
            if (oldCreated_1)
                oldCreated_1.apply(this, args);
        };
        options.lifetimes.attached = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (oldAttached_1)
                oldAttached_1.apply(this, args);
            controlledProps_1.forEach(function (_a) {
                var _b;
                var key = _a.key;
                var defaultKey = "default" + key.replace(/^(\w)/, function (m, m1) { return m1.toUpperCase(); });
                var props = _this.properties;
                if (props[key] == null) {
                    _this._selfControlled = true;
                }
                if (props[key] == null && props[defaultKey] != null) {
                    _this.setData((_b = {},
                        _b[key] = props[defaultKey],
                        _b));
                }
            });
        };
        options.methods._trigger = function (evtName, detail, opts) {
            var _a;
            var target = controlledProps_1.find(function (item) { return item.event == evtName; });
            if (target) {
                var key = target.key;
                if (this._selfControlled) {
                    this.setData((_a = {},
                        _a[key] = detail[key],
                        _a));
                }
            }
            this.triggerEvent(evtName, detail, opts);
        };
    }
    return options;
};
var wxComponent = function wxComponent() {
    return function (constructor) {
        var WxComponent = /** @class */ (function (_super) {
            (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(WxComponent, _super);
            function WxComponent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return WxComponent;
        }(constructor));
        var current = new WxComponent();
        current.options = current.options || {};
        if (current.options.addGlobalClass === undefined) {
            current.options.addGlobalClass = true;
        }
        if ((0,_version__WEBPACK_IMPORTED_MODULE_2__.canUseVirtualHost)()) {
            current.options.virtualHost = true;
        }
        var obj = toComponent((0,_flatTool__WEBPACK_IMPORTED_MODULE_1__.toObject)(current));
        Component(obj);
    };
};


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/common/src/superComponent.js":
/*!**************************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/common/src/superComponent.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuperComponent": function() { return /* binding */ SuperComponent; }
/* harmony export */ });
var SuperComponent = /** @class */ (function () {
    function SuperComponent() {
        this.app = getApp();
    }
    return SuperComponent;
}());



/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/common/utils.js":
/*!*************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/common/utils.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addUnit": function() { return /* binding */ addUnit; },
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* unused harmony exports debounce, throttle, classNames, getAnimationFrame, getRect, isNumber, isNull, isUndefined, isDef, getCharacterLength, chunk, getInstance, unitConvert, setIcon, isBool, isObject, isString, toCamel, getCurrentPage, uniqueFactory, calcIcon, isOverSize */
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./miniprogram_npm/tdesign-miniprogram/common/config.js");

var systemInfo = wx.getSystemInfoSync();
var debounce = function (func, wait) {
    if (wait === void 0) { wait = 500; }
    var timerId;
    return function () {
        var _this = this;
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(function () {
            func.apply(_this, rest);
        }, wait);
    };
};
var throttle = function (func, wait, options) {
    if (wait === void 0) { wait = 100; }
    if (options === void 0) { options = null; }
    var previous = 0;
    var timerid = null;
    if (!options) {
        options = {
            leading: true,
        };
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var now = Date.now();
        if (!previous && !options.leading)
            previous = now;
        var remaining = wait - (now - previous);
        var context = this;
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
var classNames = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var hasOwn = {}.hasOwnProperty;
    var classes = [];
    args.forEach(function (arg) {
        if (!arg)
            return;
        var argType = typeof arg;
        if (argType === 'string' || argType === 'number') {
            classes.push(arg);
        }
        else if (Array.isArray(arg) && arg.length) {
            var inner = classNames.apply(void 0, arg);
            if (inner) {
                classes.push(inner);
            }
        }
        else if (argType === 'object') {
            for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key);
                }
            }
        }
    });
    return classes.join(' ');
};
var styles = function (styleObj) {
    return Object.keys(styleObj)
        .map(function (styleKey) { return styleKey + ": " + styleObj[styleKey]; })
        .join('; ');
};
var getAnimationFrame = function (context, cb) {
    return wx
        .createSelectorQuery()
        .in(context)
        .selectViewport()
        .boundingClientRect()
        .exec(function () {
        cb();
    });
};
var getRect = function (context, selector, needAll) {
    if (needAll === void 0) { needAll = false; }
    return new Promise(function (resolve, reject) {
        wx.createSelectorQuery()
            .in(context)[needAll ? 'selectAll' : 'select'](selector)
            .boundingClientRect(function (rect) {
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
var isNumber = function (value) {
    return /^\d+(\.\d+)?$/.test(value);
};
var isNull = function (value) {
    return value === null;
};
var isUndefined = function (value) { return typeof value === 'undefined'; };
var isDef = function (value) {
    return !isUndefined(value) && !isNull(value);
};
var addUnit = function (value) {
    if (!isDef(value)) {
        return undefined;
    }
    value = String(value);
    return isNumber(value) ? value + "px" : value;
};
var getCharacterLength = function (type, char, max) {
    var str = String(char !== null && char !== void 0 ? char : '');
    if (str.length === 0) {
        return {
            length: 0,
            characters: '',
        };
    }
    if (type === 'maxcharacter') {
        var len = 0;
        for (var i = 0; i < str.length; i += 1) {
            var currentStringLength = 0;
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
        var length = str.length > max ? max : str.length;
        return {
            length: length,
            characters: str.slice(0, length),
        };
    }
    return {
        length: str.length,
        characters: str,
    };
};
var chunk = function (arr, size) { return Array.from({ length: Math.ceil(arr.length / size) }, function (v, i) { return arr.slice(i * size, i * size + size); }); };
var getInstance = function (context, selector) {
    if (!context) {
        var pages = getCurrentPages();
        var page = pages[pages.length - 1];
        context = page.$$basePage || page;
    }
    var instance = context ? context.selectComponent(selector) : null;
    if (!instance) {
        console.warn('未找到组件,请检查selector是否正确');
        return null;
    }
    return instance;
};
var unitConvert = function (value) {
    var _a;
    if (typeof value === 'string') {
        if (value.includes('rpx')) {
            return (parseInt(value, 10) * ((_a = systemInfo === null || systemInfo === void 0 ? void 0 : systemInfo.screenWidth) !== null && _a !== void 0 ? _a : 750)) / 750;
        }
        return parseInt(value, 10);
    }
    return value;
};
var setIcon = function (iconName, icon, defaultIcon) {
    var _b, _c, _d, _e;
    if (icon) {
        if (typeof icon === 'string') {
            return _b = {},
                _b[iconName + "Name"] = icon,
                _b[iconName + "Data"] = {},
                _b;
        }
        else if (typeof icon === 'object') {
            return _c = {},
                _c[iconName + "Name"] = '',
                _c[iconName + "Data"] = icon,
                _c;
        }
        else {
            return _d = {},
                _d[iconName + "Name"] = defaultIcon,
                _d[iconName + "Data"] = {},
                _d;
        }
    }
    return _e = {},
        _e[iconName + "Name"] = '',
        _e[iconName + "Data"] = {},
        _e;
};
var isBool = function (val) { return typeof val === 'boolean'; };
var isObject = function (val) { return typeof val === 'object' && val != null; };
var isString = function (val) { return typeof val === 'string'; };
var toCamel = function (str) { return str.replace(/-(\w)/g, function (match, m1) { return m1.toUpperCase(); }); };
var getCurrentPage = function () {
    var pages = getCurrentPages();
    return pages[pages.length - 1];
};
var uniqueFactory = function (compName) {
    var number = 0;
    return function () { return _config__WEBPACK_IMPORTED_MODULE_0__.prefix + "_" + compName + "_" + number++; };
};
var calcIcon = function (icon, defaultIcon) {
    if ((isBool(icon) && icon && defaultIcon) || isString(icon)) {
        return { name: isBool(icon) ? defaultIcon : icon };
    }
    if (isObject(icon)) {
        return icon;
    }
    return null;
};
var isOverSize = function (size, sizeLimit) {
    var _a;
    if (!sizeLimit)
        return false;
    var base = 1000;
    var unitMap = {
        B: 1,
        KB: base,
        MB: base * base,
        GB: base * base * base,
    };
    var computedSize = typeof sizeLimit === 'number' ? sizeLimit * base : (sizeLimit === null || sizeLimit === void 0 ? void 0 : sizeLimit.size) * unitMap[(_a = sizeLimit === null || sizeLimit === void 0 ? void 0 : sizeLimit.unit) !== null && _a !== void 0 ? _a : 'KB'];
    return size > computedSize;
};


/***/ }),

/***/ "./miniprogram_npm/tdesign-miniprogram/common/version.js":
/*!***************************************************************!*\
  !*** ./miniprogram_npm/tdesign-miniprogram/common/version.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canUseVirtualHost": function() { return /* binding */ canUseVirtualHost; }
/* harmony export */ });
/* unused harmony export canIUseFormFieldButton */
var systemInfo;
function getSystemInfo() {
    if (systemInfo == null) {
        systemInfo = wx.getSystemInfoSync();
    }
    return systemInfo;
}
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
function judgeByVersion(version) {
    var currentSDKVersion = getSystemInfo().SDKVersion;
    return compareVersion(currentSDKVersion, version) >= 0;
}
function canIUseFormFieldButton() {
    var version = '2.10.3';
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

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
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




var prefix = _common_config__WEBPACK_IMPORTED_MODULE_1__["default"].prefix;
var name = prefix + "-icon";
var Icon = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(Icon, _super);
    function Icon() {
        var _this = _super.apply(this, arguments) || this;
        _this.externalClasses = [prefix + "-class"];
        _this.properties = _props__WEBPACK_IMPORTED_MODULE_2__["default"];
        _this.data = {
            componentPrefix: prefix,
            classPrefix: name,
            isImage: false,
            iconStyle: undefined,
        };
        _this.observers = {
            'name, color, size, style': function () {
                this.setIconStyle();
            },
        };
        _this.methods = {
            onTap: function (event) {
                this.triggerEvent('click', event.detail);
            },
            setIconStyle: function () {
                var _a = this.properties, name = _a.name, color = _a.color, size = _a.size;
                var isImage = name.indexOf('/') !== -1;
                var sizeValue = (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.addUnit)(size);
                var sizeStyle = isImage ? { width: sizeValue, height: sizeValue } : {};
                var colorStyle = color ? { color: color } : {};
                var fontStyle = size ? { 'font-size': sizeValue } : {};
                this.setData({
                    isImage: isImage,
                    iconStyle: "" + (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.styles)(Object.assign(Object.assign(Object.assign({}, colorStyle), fontStyle), sizeStyle)),
                });
            },
        };
        return _this;
    }
    return Icon;
}(_common_src_index__WEBPACK_IMPORTED_MODULE_0__.SuperComponent));
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

var props = {
    color: {
        type: String,
        value: '',
    },
    name: {
        type: String,
        value: '',
        required: true,
    },
    size: {
        type: String,
        value: '',
    },
    prefix: {
        type: String,
        value: undefined,
    },
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