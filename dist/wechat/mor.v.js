"use strict";
var regeneratorRuntime;(wx["mor_modules"] = wx["mor_modules"] || []).push([["mor.v"],{

/***/ "../node_modules/@morjs/api/lib/index.js":
/*!***********************************************!*\
  !*** ../node_modules/@morjs/api/lib/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
var api_1 = __webpack_require__(/*! ./api */ "../node_modules/@morjs/api/lib/api.js");
tslib_1.__exportStar(__webpack_require__(/*! @morjs/runtime-base */ "../node_modules/@morjs/runtime-base/lib/index.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./api */ "../node_modules/@morjs/api/lib/api.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./moduleManager */ "../node_modules/@morjs/api/lib/moduleManager.js"), exports);
exports["default"] = api_1.mor;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@morjs/api/lib/moduleManager.js":
/*!*******************************************************!*\
  !*** ../node_modules/@morjs/api/lib/moduleManager.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModuleManager = exports.ModuleTypes = void 0;
var runtime_base_1 = __webpack_require__(/*! @morjs/runtime-base */ "../node_modules/@morjs/runtime-base/lib/index.js");
var api_1 = __webpack_require__(/*! ./api */ "../node_modules/@morjs/api/lib/api.js");
/**
 * 模块类型
 */
var ModuleTypes;
(function (ModuleTypes) {
    /**
     * 分包模块
     */
    ModuleTypes["SUBPACKAGE"] = "SUBPACKAGE";
    /**
     * 动态插件模块, 仅支付宝支持
     */
    ModuleTypes["DYNAMIC_PLUGIN"] = "DYNAMIC_PLUGIN";
    /**
     * 静态插件模块
     */
    ModuleTypes["STATIC_PLUGIN"] = "STATIC_PLUGIN";
})(ModuleTypes = exports.ModuleTypes || (exports.ModuleTypes = {}));
/**
 * 模块
 * 分包或插件
 */
var ModuleItem = /** @class */ (function () {
    function ModuleItem(module) {
        /**
         * 是否已载入
         * 载入代表已初始化
         */
        this.isLoaded = false;
        this.setOrUpdate(module);
    }
    ModuleItem.prototype.setOrUpdate = function (_a) {
        var name = _a.name, id = _a.id, type = _a.type, version = _a.version, routes = _a.routes, extend = _a.extend, instance = _a.instance, success = _a.success, fail = _a.fail;
        this.name = name;
        this.id = id;
        this.type = type;
        this.version = version;
        this.routes = routes;
        this.extend = extend;
        this.instance = instance;
        this.success = success;
        this.fail = fail;
    };
    return ModuleItem;
}());
/**
 * 模块管理
 * 用于 获取当前小程序中的插件、分包和模块等
 */
var ModuleManager = /** @class */ (function () {
    /**
     *
     * @param modules 模块信息
     */
    function ModuleManager(host, modules) {
        var _this = this;
        /**
         * Mor 插件初始化及能力注入
         */
        this.mountPlugin = function (module, identity) {
            var plugin = api_1.mor.requirePlugin(identity) || {};
            // es6 export default 兜底支持
            if (plugin && plugin.__esModule && plugin.default) {
                Object.assign(plugin, plugin.default);
            }
            // 检查是否为 mor 插件工程
            if (!(plugin === null || plugin === void 0 ? void 0 : plugin.$isMorPlugin)) {
                runtime_base_1.logger.error('mor.moduleManager.init', '目前只支持配置 mor 的插件');
                return;
            }
            module.instance = plugin;
            _this.mountModule(module);
        };
        this.host = host;
        if (modules === null || modules === void 0 ? void 0 : modules.length) {
            for (var _i = 0, modules_1 = modules; _i < modules_1.length; _i++) {
                var m = modules_1[_i];
                this.register(m);
            }
        }
    }
    /**
     * 获取 模块
     * @param name
     */
    ModuleManager.prototype.getModule = function (name) {
        return this.modules[name];
    };
    /**
     * 获取所有模块
     */
    ModuleManager.prototype.getAllModules = function () {
        var modules = [];
        for (var _i = 0, _a = Object.keys(this.modules); _i < _a.length; _i++) {
            var name_1 = _a[_i];
            modules.push(this.modules[name_1]);
        }
        return modules;
    };
    /**
     * 注册模块
     * @param module 模块信息
     */
    ModuleManager.prototype.register = function (module) {
        if (!(module === null || module === void 0 ? void 0 : module.name)) {
            return runtime_base_1.logger.warn('模块注册失败, 原因: 缺少名称');
        }
        var moduleItem = this.modules[module.name];
        // 不重复初始化
        if (moduleItem == null) {
            moduleItem = new ModuleItem(module);
        }
        else {
            // 更新模块信息
            moduleItem.setOrUpdate(module);
        }
        return moduleItem;
    };
    /**
     * 检查模块是否已载入
     * @param moduleNameOrModule 模块名称 或 模块实例
     * @returns 是否已载入
     */
    ModuleManager.prototype.isLoaded = function (moduleNameOrModule) {
        var _a;
        if (moduleNameOrModule instanceof ModuleItem) {
            return moduleNameOrModule.isLoaded;
        }
        else {
            return ((_a = this.modules[moduleNameOrModule]) === null || _a === void 0 ? void 0 : _a.isLoaded) === true;
        }
    };
    /**
     * 初始化模块, 并注入宿主能力
     * @param modules - 模块信息
     */
    ModuleManager.prototype.init = function (modules) {
        var _this = this;
        modules = Array.isArray(modules)
            ? modules
            : modules == null
                ? []
                : [modules];
        if (modules === null || modules === void 0 ? void 0 : modules.length)
            return runtime_base_1.logger.warn('请传入需要初始化的分包或插件');
        modules.forEach(function (moduleInfo) {
            var module = _this.register(moduleInfo);
            // 未注册成功, 通常是缺少
            if (!module)
                return;
            // 前置检查, 仅 支付宝小程序 支持动态插件
            if (module.type === ModuleTypes.DYNAMIC_PLUGIN &&
                (0, runtime_base_1.getEnv)() !== runtime_base_1.ENV_TYPE.ALIPAY) {
                return runtime_base_1.logger.error("\u76EE\u524D\u4EC5\u652F\u4ED8\u5B9D\u652F\u6301\u52A8\u6001\u63D2\u4EF6, \u63D2\u4EF6\u540D\u79F0: ".concat(module.name));
            }
            var isDynamicPlugin = module.type === ModuleTypes.DYNAMIC_PLUGIN;
            // 支持插件调用方感知调用成功, 仅针对动态插件调用
            // isInit 用于标记是否是第一次初始化
            var onPluginLoaded = function (isInit) {
                if (!isDynamicPlugin)
                    return;
                if (typeof module.success === 'function')
                    module.success(isInit);
            };
            // 支持插件调用方感知调用失败, 仅针对动态插件调用
            var onPluginFailed = function (error) {
                if (!isDynamicPlugin)
                    return;
                if (typeof module.fail === 'function')
                    module.fail(error);
            };
            // 如果插件已成功载入, 则不需要跳过后续步骤, 避免多次初始化
            // 动态插件直接触发 success 回调
            if (_this.isLoaded(module.name))
                return onPluginLoaded(false);
            var global = (0, runtime_base_1.getGlobalObject)();
            // 动态插件初始化
            // 仅适用于 支付宝且非 IDE 的情况下
            if (isDynamicPlugin &&
                (global === null || global === void 0 ? void 0 : global.canIuse) &&
                global.canIuse('plugin.dynamic') &&
                !global.isIDE) {
                try {
                    global.loadPlugin({
                        plugin: "".concat(module.id, "@").concat(module.version),
                        success: function () {
                            _this.mountPlugin(module, "dynamic-plugin://".concat(module.id));
                            onPluginLoaded(true);
                        },
                        fail: function (err) {
                            onPluginFailed(err);
                        }
                    });
                }
                catch (error) {
                    onPluginFailed(error);
                }
            }
            else {
                if (module.type === ModuleTypes.STATIC_PLUGIN) {
                    // 静态插件初始化
                    _this.mountPlugin(module, module.name);
                }
                else {
                    _this.mountModule(module);
                }
            }
        });
    };
    /**
     * 标记模块为已加载
     */
    ModuleManager.prototype.markModuleAsLoaded = function (module) {
        if (module)
            module.isLoaded = true;
    };
    /**
     * 模块
     * @param module 模块
     * @param extend 拓展能力信息
     */
    ModuleManager.prototype.mountModule = function (module) {
        var _a, _b, _c;
        this.markModuleAsLoaded(module);
        // mor 旧版兼容
        if (((_a = module === null || module === void 0 ? void 0 : module.instance) === null || _a === void 0 ? void 0 : _a.internalInit) && ((_b = this.host) === null || _b === void 0 ? void 0 : _b.$event)) {
            module.instance.internalInit({ $event: this.host.$event });
        }
        // 宿主能力注入
        if (((_c = module === null || module === void 0 ? void 0 : module.instance) === null || _c === void 0 ? void 0 : _c.morInit) && (module === null || module === void 0 ? void 0 : module.extend)) {
            module.instance.morInit(module.extend);
        }
    };
    return ModuleManager;
}());
exports.ModuleManager = ModuleManager;
//# sourceMappingURL=moduleManager.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/lib/index.js":
/*!************************************************!*\
  !*** ../node_modules/@morjs/core/lib/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = exports.wPage = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = void 0;
var app_1 = __webpack_require__(/*! ./app */ "../node_modules/@morjs/core/lib/app.js");
__webpack_unused_export__ = ({ enumerable: true, get: function () { return app_1.aApp; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return app_1.createApp; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return app_1.registerAppAdapters; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return app_1.wApp; } });
var component_1 = __webpack_require__(/*! ./component */ "../node_modules/@morjs/core/lib/component.js");
__webpack_unused_export__ = ({ enumerable: true, get: function () { return component_1.aComponent; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return component_1.createComponent; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return component_1.enhanceComponent; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return component_1.registerComponentAdapters; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return component_1.wComponent; } });
var page_1 = __webpack_require__(/*! ./page */ "../node_modules/@morjs/core/lib/page.js");
__webpack_unused_export__ = ({ enumerable: true, get: function () { return page_1.aPage; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return page_1.createPage; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return page_1.enhancePage; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return page_1.registerPageAdapters; } });
Object.defineProperty(exports, "wPage", ({ enumerable: true, get: function () { return page_1.wPage; } }));
var pageToComponent_1 = __webpack_require__(/*! ./pageToComponent */ "../node_modules/@morjs/core/lib/pageToComponent.js");
__webpack_unused_export__ = ({ enumerable: true, get: function () { return pageToComponent_1.aPageToComponent; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return pageToComponent_1.PageToComponent; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return pageToComponent_1.wPageToComponent; } });
var plugin_1 = __webpack_require__(/*! ./plugin */ "../node_modules/@morjs/core/lib/plugin.js");
__webpack_unused_export__ = ({ enumerable: true, get: function () { return plugin_1.aPlugin; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return plugin_1.createPlugin; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return plugin_1.wPlugin; } });
var init_1 = __webpack_require__(/*! ./utils/init */ "../node_modules/@morjs/core/lib/utils/init.js");
__webpack_unused_export__ = ({ enumerable: true, get: function () { return init_1.init; } });
__webpack_require__(/*! ./utils/polyfill */ "../node_modules/@morjs/core/lib/utils/polyfill.js");
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/lib/pageToComponent.js":
/*!**********************************************************!*\
  !*** ../node_modules/@morjs/core/lib/pageToComponent.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wPageToComponent = exports.aPageToComponent = exports.PageToComponent = void 0;
var api_1 = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/lib/index.js");
var component_1 = __webpack_require__(/*! ./component */ "../node_modules/@morjs/core/lib/component.js");
var page_1 = __webpack_require__(/*! ./page */ "../node_modules/@morjs/core/lib/page.js");
var invokeOriginalFunction_1 = __webpack_require__(/*! ./utils/invokeOriginalFunction */ "../node_modules/@morjs/core/lib/utils/invokeOriginalFunction.js");
var COMPONENT_LIFETIME_MAPPINGS = {
    onLoad: (_a = {},
        _a[api_1.SOURCE_TYPE.ALIPAY] = 'onInit',
        _a[api_1.SOURCE_TYPE.WECHAT] = 'attached',
        _a),
    onReady: (_b = {},
        _b[api_1.SOURCE_TYPE.ALIPAY] = 'didMount',
        _b[api_1.SOURCE_TYPE.WECHAT] = 'ready',
        _b),
    onUnload: (_c = {},
        _c[api_1.SOURCE_TYPE.ALIPAY] = 'didUnmount',
        _c[api_1.SOURCE_TYPE.WECHAT] = 'detached',
        _c)
};
var COMPONENT_PAGE_LIFETIME_MAPPINGS = {
    onShow: 'show',
    onHide: 'hide',
    onResize: 'resize'
};
/**
 * 将页面作为组件使用, 仅供特殊场景下的使用
 * 不保证完全的兼容性
 *
 * 转换页面配置为组件配置
 *
 * @param pageOptions - 页面配置
 * @param sourceType - 源码类型
 * @param features - 功能配置
 * @returns 组件配置
 */
function PageToComponent(pageOptions, sourceType, features) {
    var _a;
    if (features === void 0) { features = {}; }
    // 页面增强（含转端逻辑）
    var opts = (0, page_1.enhancePage)(pageOptions, sourceType);
    // 直接透传的属性
    var data = opts.data || {};
    var observers = opts.observers || {};
    // 需要插入到 this 的数据
    var thisData = {};
    // 组件方法
    var methods = {};
    // 组件生命周期
    var lifetimes = {};
    // 页面生命周期
    var pageLifetimes = {};
    var isAlipaySource = sourceType === api_1.SOURCE_TYPE.ALIPAY;
    // 兼容支付宝
    if (isAlipaySource && typeof ((_a = opts === null || opts === void 0 ? void 0 : opts.events) === null || _a === void 0 ? void 0 : _a.onResize) === 'function') {
        pageLifetimes['resize'] = opts.events.onResize;
        // 其他事件组件不支持, 直接移除
        delete opts.events;
    }
    // 遍历每一个属性逐个分配
    for (var key in opts) {
        var value = opts[key];
        if (key === 'data')
            continue;
        if (key === 'observers')
            continue;
        if (key === 'methods') {
            Object.assign(methods, value || {});
            continue;
        }
        if (key === 'pageLifetimes') {
            Object.assign(pageLifetimes, value || {});
            continue;
        }
        if (key === 'lifetimes') {
            Object.assign(lifetimes, value || {});
            continue;
        }
        if (typeof value === 'function') {
            switch (key) {
                // 组件生命周期对齐
                case 'onLoad':
                case 'onReady':
                case 'onUnload':
                    lifetimes[COMPONENT_LIFETIME_MAPPINGS[key][sourceType]] = value;
                    break;
                // 页面生命周期对齐
                case 'onShow':
                case 'onHide':
                case 'onResize':
                    pageLifetimes[COMPONENT_PAGE_LIFETIME_MAPPINGS[key]] = value;
                    break;
                // 支付宝或微信原生组件生命周期
                case 'onInit':
                case 'didMount':
                case 'didUnmount':
                case 'created':
                case 'attached':
                case 'ready':
                case 'detached':
                    lifetimes[key] = value;
                    break;
                // 其他函数配置为方法
                default:
                    methods[key] = value;
                    break;
            }
        }
        // 其他属性直接添加到 thisData
        else {
            thisData[key] = value;
        }
    }
    // 转换出来的组件
    var componentOptions = {
        data: data,
        observers: observers,
        methods: methods,
        pageLifetimes: pageLifetimes
    };
    // 合并 lifetimes
    Object.assign(componentOptions, lifetimes);
    // 注入 thisData 到 组件 this 上下文中
    function injectThisData() {
        Object.assign(this, thisData);
    }
    // 挂载 thisData
    var hookByLifetime = isAlipaySource ? 'onInit' : 'created';
    componentOptions[hookByLifetime] = (0, api_1.compose)([
        injectThisData,
        (0, invokeOriginalFunction_1.invokeOriginalFunction)(hookByLifetime, componentOptions)
    ]);
    // 组件增强（含转端逻辑）
    return (0, component_1.enhanceComponent)(componentOptions, sourceType, {
        // 默认为 false
        invokeComponentHooks: features.invokeComponentHooks == null
            ? false
            : features.invokeComponentHooks
    });
}
exports.PageToComponent = PageToComponent;
/**
 * 支付宝 Page 转组件辅助函数
 * @param options - 小程序页面配置
 * @param features - 功能开关
 * @returns 返回组件配置
 */
function aPageToComponent(options, features) {
    if (features === void 0) { features = {}; }
    return PageToComponent(options, api_1.SOURCE_TYPE.ALIPAY, features);
}
exports.aPageToComponent = aPageToComponent;
/**
 * 微信 Page 页面转组件辅助函数
 * @param options - 小程序页面配置
 * @param features - 功能开关
 * @returns 返回组件配置
 */
function wPageToComponent(options, features) {
    if (features === void 0) { features = {}; }
    return PageToComponent(options, api_1.SOURCE_TYPE.WECHAT, features);
}
exports.wPageToComponent = wPageToComponent;
//# sourceMappingURL=pageToComponent.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/lib/plugin.js":
/*!*************************************************!*\
  !*** ../node_modules/@morjs/core/lib/plugin.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wPlugin = exports.aPlugin = exports.createPlugin = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
var api_1 = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/lib/index.js");
/**
 * 插件构造函数
 * @param options - 插件选项
 * @param options.getApp - 插件使用的 getApp 构造函数
 * @returns Mor 小程序插件对象 (用于和宿主小程序交换数据或能力)
 */
function createPlugin(pluginOptions) {
    var getApp = (pluginOptions || {}).getApp;
    if (typeof getApp === 'undefined') {
        api_1.logger.error('插件入口必须传 getApp');
        return;
    }
    delete pluginOptions.getApp;
    var app = getApp();
    var plugin = tslib_1.__assign(tslib_1.__assign({ getApp: getApp, $isMorPlugin: true }, pluginOptions), { internalInit: function (options) {
            var $hostEvent = (options !== null && options !== void 0 ? options : {}).$event;
            // 宿主的 event
            if (!this.$hostEvent && $hostEvent) {
                this.$hostEvent = $hostEvent;
                var app_1 = this.getApp();
                app_1.$hostEvent = $hostEvent;
            }
        }, morInit: function (extend) {
            var app = this.getApp();
            if (!app.$host)
                app.$host = {};
            Object.keys(extend).forEach(function (name) {
                app.$host[name] = extend[name];
            });
        } });
    if (app.$event)
        plugin.$pluginEvent = app.$event;
    return plugin;
}
exports.createPlugin = createPlugin;
/**
 * 支付宝插件构造函数
 */
function aPlugin() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return createPlugin.apply(void 0, args);
}
exports.aPlugin = aPlugin;
/**
 * 微信插件构造函数
 */
function wPlugin() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return createPlugin.apply(void 0, args);
}
exports.wPlugin = wPlugin;
//# sourceMappingURL=plugin.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/lib/plugins/contextPlugin.js":
/*!****************************************************************!*\
  !*** ../node_modules/@morjs/core/lib/plugins/contextPlugin.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContextPlugin = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
var api_1 = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/lib/index.js");
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
                    api_1.logger.error($plugin.pluginName, '请去除业务代码中的对 $context 的赋值，防止出现不可预知的问题。');
                }
            });
            hooks.appOnLaunch.tap(_this.pluginName, function (options) {
                var query = tslib_1.__assign({}, ((options === null || options === void 0 ? void 0 : options.query) || {}));
                this.$context = { appQuery: query };
            });
            hooks.pageOnInit.tap(_this.pluginName, function (pageOptions) {
                if (pageOptions.$context) {
                    api_1.logger.error($plugin.pluginName, '请去除业务代码中的对 $context 的赋值，防止出现不可预知的问题。');
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
exports.ContextPlugin = ContextPlugin;
//# sourceMappingURL=contextPlugin.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/lib/plugins/eventPlugin.js":
/*!**************************************************************!*\
  !*** ../node_modules/@morjs/core/lib/plugins/eventPlugin.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventPlugin = void 0;
var api_1 = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/lib/index.js");
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
                ? (0, api_1.createEvent)('createByMorEventPlugin')
                : api_1.event;
            IS_DEFAULT_EVENT_USED = true;
            // app 注入 $event
            hooks.appOnInit.tap(_this.pluginName, function (appOptions) {
                if (appOptions.$event) {
                    api_1.logger.error($plugin.pluginName, '请去除业务代码中的对 $event 的赋值，防止出现不可预知的问题。');
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
                    api_1.logger.error($plugin.pluginName, '请去除业务代码中的对 $event 的赋值，防止出现不可预知的问题。');
                }
                pageOptions.$event = $event;
            });
        };
    }
    return EventPlugin;
}());
exports.EventPlugin = EventPlugin;
//# sourceMappingURL=eventPlugin.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/lib/utils/constants.js":
/*!**********************************************************!*\
  !*** ../node_modules/@morjs/core/lib/utils/constants.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.APP_ON_HIDE_EVENT = exports.APP_ON_SHOW_EVENT = exports.MOR_EVENT_METHOD_PREFIX = exports.MOR_EVENT_PREFIX = void 0;
/**
 * mor 事件名称前缀
 */
exports.MOR_EVENT_PREFIX = '$mor:';
/**
 * mor 注入的事件方法前缀
 */
exports.MOR_EVENT_METHOD_PREFIX = "".concat(exports.MOR_EVENT_PREFIX, "event:");
/**
 * 监听 app 事件名称
 */
exports.APP_ON_SHOW_EVENT = "".concat(exports.MOR_EVENT_PREFIX, "appOnShow");
exports.APP_ON_HIDE_EVENT = "".concat(exports.MOR_EVENT_PREFIX, "appOnHide");
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/lib/utils/init.js":
/*!*****************************************************!*\
  !*** ../node_modules/@morjs/core/lib/utils/init.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init = void 0;
var api_1 = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/lib/index.js");
var contextPlugin_1 = __webpack_require__(/*! ../plugins/contextPlugin */ "../node_modules/@morjs/core/lib/plugins/contextPlugin.js");
var eventPlugin_1 = __webpack_require__(/*! ../plugins/eventPlugin */ "../node_modules/@morjs/core/lib/plugins/eventPlugin.js");
var IS_DEFAULT_HOOKS_USED = false;
/**
 * 初始化, 创建 $hooks 及应用 solutions
 * @param solution 解决方案
 */
function init(solution) {
    var solutions = [
        function () {
            return {
                plugins: [new eventPlugin_1.EventPlugin(), new contextPlugin_1.ContextPlugin()]
            };
        }
    ].concat((0, api_1.asArray)(solution));
    var $hooks = IS_DEFAULT_HOOKS_USED
        ? (0, api_1.createHooks)('initWithSolutions')
        : api_1.hooks;
    IS_DEFAULT_HOOKS_USED = true;
    var pluginsNames = (0, api_1.applySolutions)($hooks, solutions);
    return {
        $hooks: $hooks,
        pluginsNames: pluginsNames
    };
}
exports.init = init;
//# sourceMappingURL=init.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/lib/utils/invokeHook.js":
/*!***********************************************************!*\
  !*** ../node_modules/@morjs/core/lib/utils/invokeHook.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.invokeHook = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
var api_1 = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/lib/index.js");
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
        var hook = (_a = (0, api_1.getSharedProperty)('$morHooks', this)) === null || _a === void 0 ? void 0 : _a[hookName];
        if (typeof (hook === null || hook === void 0 ? void 0 : hook.call) === 'function') {
            hook.call.apply(hook, tslib_1.__spreadArray([this], args, false));
        }
        else {
            api_1.logger.error("".concat(hookName, " \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684 hook"));
        }
    };
};
exports.invokeHook = invokeHook;
//# sourceMappingURL=invokeHook.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/lib/utils/invokeOriginalFunction.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@morjs/core/lib/utils/invokeOriginalFunction.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.invokeOriginalFunction = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
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
            return originalFn.call.apply(originalFn, tslib_1.__spreadArray([this], args, false));
        }
    };
};
exports.invokeOriginalFunction = invokeOriginalFunction;
//# sourceMappingURL=invokeOriginalFunction.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/lib/utils/isPromise.js":
/*!**********************************************************!*\
  !*** ../node_modules/@morjs/core/lib/utils/isPromise.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isPromise = void 0;
function isPromise(obj) {
    return (!!obj &&
        (typeof obj === 'object' || typeof obj === 'function') &&
        typeof obj.then === 'function');
}
exports.isPromise = isPromise;
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/lib/utils/polyfill.js":
/*!*********************************************************!*\
  !*** ../node_modules/@morjs/core/lib/utils/polyfill.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var api_1 = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/lib/index.js");
(function morPolyfill() {
    try {
        Promise.prototype.finally =
            Promise.prototype.finally ||
                function morPolyfillPromiseFinally(onFinally) {
                    var isFunction = typeof onFinally === 'function';
                    return this.then(isFunction
                        ? function (value) {
                            return Promise.resolve(onFinally()).then(function () {
                                return value;
                            });
                        }
                        : onFinally, isFunction
                        ? function (reason) {
                            return Promise.resolve(onFinally()).then(function () {
                                throw reason;
                            });
                        }
                        : onFinally);
                };
    }
    catch (err) {
        api_1.logger.error('polyfill', err);
    }
})();
//# sourceMappingURL=polyfill.js.map

/***/ }),

/***/ "../node_modules/@morjs/api/lib/api.js":
/*!*********************************************!*\
  !*** ../node_modules/@morjs/api/lib/api.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init = exports.registerFactory = exports.mor = exports.createApi = void 0;
var runtime_base_1 = __webpack_require__(/*! @morjs/runtime-base */ "../node_modules/@morjs/runtime-base/lib/index.js");
// 跨端支持的接口运行时引用注入位置, '' 空字符串是为了防止该注释被移除
// prettier-ignore
/* MOR_API_POLYFILL_IMPORT_REPLACER */ '';
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
    var global = (0, runtime_base_1.getGlobalObject)();
    var apiOptions = {};
    apiOptions.global = global;
    apiOptions.env = global.env || {};
    apiOptions.getApp =
        typeof getApp === 'function' ? getApp : (0, runtime_base_1.markAsUnsupport)('getApp');
    apiOptions.getCurrentPages =
        typeof getCurrentPages === 'function'
            ? getCurrentPages
            : (0, runtime_base_1.markAsUnsupport)('getCurrentPages');
    apiOptions.requirePlugin =
        typeof requirePlugin === 'function'
            ? requirePlugin
            : (0, runtime_base_1.markAsUnsupport)('requirePlugin');
    apiOptions.getEnv = runtime_base_1.getEnv;
    // 跨端支持的接口运行时调用注入位置, '' 空字符串是为了防止该注释被移除
    // prettier-ignore
    /* MOR_API_POLYFILL_INVOKE_REPLACER */ '';
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
                runtime_base_1.logger.error("adapter.initApi \u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570, \u8BF7\u68C0\u67E5");
            }
        });
    }
    // 添加全局剩余的 apiOptions (不覆盖已有的接口)
    (0, runtime_base_1.transformApis)(apiOptions, global, {
        needPromisfiedApis: [],
        apiTransformConfig: {}
    }, true, false);
    // 添加全局事件支持, 仅当缺少事件支持时添加
    if (!apiOptions.on) {
        apiOptions.on = function (type, handler) {
            runtime_base_1.event.on.call(runtime_base_1.event, type, handler);
        };
    }
    if (!apiOptions.emit) {
        apiOptions.emit = function (type, e) {
            runtime_base_1.event.emit.call(runtime_base_1.event, type, e);
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
exports.createApi = createApi;
/**
 * 初始化 mor 接口
 */
var mor = createApi();
exports.mor = mor;
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
exports.registerFactory = registerFactory;
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
        runtime_base_1.logger.debug('mor api factory', "".concat(factoryName, " \u521D\u59CB\u5316\u5B8C\u6210"));
    }
    return newMor;
}
exports.init = init;
//# sourceMappingURL=api.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/lib/app.js":
/*!**********************************************!*\
  !*** ../node_modules/@morjs/core/lib/app.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wApp = exports.aApp = exports.registerAppAdapters = exports.createApp = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
var api_1 = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/lib/index.js");
var constants_1 = __webpack_require__(/*! ./utils/constants */ "../node_modules/@morjs/core/lib/utils/constants.js");
var init_1 = __webpack_require__(/*! ./utils/init */ "../node_modules/@morjs/core/lib/utils/init.js");
var invokeOriginalFunction_1 = __webpack_require__(/*! ./utils/invokeOriginalFunction */ "../node_modules/@morjs/core/lib/utils/invokeOriginalFunction.js");
// 跨端支持的应用运行时引用注入位置, '' 空字符串是为了防止该注释被移除
// prettier-ignore
/* MOR_APP_POLYFILL_IMPORT_REPLACER */ '';
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
            (_a = this.$morHooks[hookName]).call.apply(_a, tslib_1.__spreadArray([this], args, false));
        };
    };
    /**
     * 调用事件通知
     * @param eventName 事件标识
     */
    var invokeEvent = function (eventName) {
        return function (arg) {
            if (this.$event) {
                this.$event.emit("".concat(constants_1.MOR_EVENT_PREFIX).concat(eventName), arg);
            }
        };
    };
    appOptions.onLaunch = (0, api_1.compose)([
        invokeHook('appOnLaunch'),
        (0, invokeOriginalFunction_1.invokeOriginalFunction)('onLaunch', appOptions)
    ]);
    appOptions.onShow = (0, api_1.compose)([
        invokeHook('appOnShow'),
        (0, invokeOriginalFunction_1.invokeOriginalFunction)('onShow', appOptions),
        invokeEvent('appOnShow')
    ]);
    appOptions.onHide = (0, api_1.compose)([
        invokeHook('appOnHide'),
        (0, invokeOriginalFunction_1.invokeOriginalFunction)('onHide', appOptions),
        invokeEvent('appOnHide')
    ]);
    appOptions.onError = (0, api_1.compose)([
        invokeHook('appOnError'),
        (0, invokeOriginalFunction_1.invokeOriginalFunction)('onError', appOptions)
    ]);
    // 这里的事件可能会改变小程序本身的行为, 故这里单独处理
    for (var eventName in APP_EVENT_MAPPINGS) {
        var hookName = APP_EVENT_MAPPINGS[eventName];
        if (hookName &&
            (appOptions[eventName] || ((_c = (_b = (_a = appOptions.$morHooks) === null || _a === void 0 ? void 0 : _a[hookName]) === null || _b === void 0 ? void 0 : _b.isUsed) === null || _c === void 0 ? void 0 : _c.call(_b)))) {
            appOptions[eventName] = (0, api_1.compose)([
                invokeHook(hookName),
                (0, invokeOriginalFunction_1.invokeOriginalFunction)(eventName, appOptions)
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
    api_1.logger.time('createApp-init');
    // 配置 globalApp 的时候不检查多实例的问题
    // 原因： 允许插件或分包工程使用模拟 App
    //       这种情况下一个小程序会出现多个 App 初始化
    if (!(extend === null || extend === void 0 ? void 0 : extend.globalApp)) {
        if (IS_INITIALIZED) {
            api_1.logger.error('App 有且只能执行一次!');
            return;
        }
        else {
            IS_INITIALIZED = true;
        }
    }
    var appOptions = tslib_1.__assign({}, options);
    api_1.logger.time('app-init-solution');
    var _a = (0, init_1.init)(solution), $hooks = _a.$hooks, pluginsNames = _a.pluginsNames;
    api_1.logger.timeEnd('app-init-solution');
    if (extend === null || extend === void 0 ? void 0 : extend.onHooksCreated) {
        if (typeof extend.onHooksCreated !== 'function') {
            api_1.logger.error('onHooksCreated 必须是函数, 请检查 App 的 extends 配置');
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
    api_1.logger.time('app-hook-lifetimes');
    hookAppLifeCycle(appOptions);
    api_1.logger.timeEnd('app-hook-lifetimes');
    // 跨端支持的应用运行时调用注入位置, '' 空字符串是为了防止该注释被移除
    // prettier-ignore
    /* MOR_APP_POLYFILL_INVOKE_REPLACER */ '';
    // 执行 app 适配器初始化
    if (APP_ADAPTERS === null || APP_ADAPTERS === void 0 ? void 0 : APP_ADAPTERS.length) {
        APP_ADAPTERS.forEach(function (adapter) {
            if (typeof (adapter === null || adapter === void 0 ? void 0 : adapter.initApp) === 'function') {
                adapter.initApp(appOptions);
            }
            else {
                api_1.logger.error("adapter.initApp \u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570, \u8BF7\u68C0\u67E5");
            }
        });
    }
    api_1.logger.timeEnd('app-init');
    // 使用 extend.globalApp 替代 App
    // 用于 插件和分包模式下的 App 构造函数模拟
    if (extend === null || extend === void 0 ? void 0 : extend.globalApp) {
        if (typeof extend.globalApp !== 'function') {
            api_1.logger.error('globalApp 必须是函数, 请检查 App 的 extends 配置');
            return;
        }
        return extend.globalApp(appOptions);
    }
    else {
        return App(appOptions);
    }
}
exports.createApp = createApp;
/**
 * 注册应用转端适配器
 * @param adapters - 应用转端适配器
 */
function registerAppAdapters(adapters) {
    APP_ADAPTERS.push.apply(APP_ADAPTERS, (0, api_1.asArray)(adapters));
}
exports.registerAppAdapters = registerAppAdapters;
/**
 * 注册支付宝小程序 App
 */
exports.aApp = createApp;
/**
 * 注册微信小程序 App
 */
exports.wApp = createApp;
//# sourceMappingURL=app.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/lib/component.js":
/*!****************************************************!*\
  !*** ../node_modules/@morjs/core/lib/component.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wComponent = exports.aComponent = exports.registerComponentAdapters = exports.createComponent = exports.enhanceComponent = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
var api_1 = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/lib/index.js");
var constants_1 = __webpack_require__(/*! ./utils/constants */ "../node_modules/@morjs/core/lib/utils/constants.js");
var invokeHook_1 = __webpack_require__(/*! ./utils/invokeHook */ "../node_modules/@morjs/core/lib/utils/invokeHook.js");
var invokeOriginalFunction_1 = __webpack_require__(/*! ./utils/invokeOriginalFunction */ "../node_modules/@morjs/core/lib/utils/invokeOriginalFunction.js");
// 跨端支持的组件运行时引用注入位置, '' 空字符串是为了防止该注释被移除
// prettier-ignore
/* MOR_COMPONENT_POLYFILL_IMPORT_REPLACER */ '';
// 转端适配器
var COMPONENT_ADAPTERS = [];
// eslint-disable-next-line @typescript-eslint/no-empty-function
var emptyFn = function () { };
/**
 * hook 组件生命周期
 */
function hookComponentLifeCycle(componentOptions, needsToHookPageLifetimes, sourceType, invokeComponentHooks) {
    if (invokeComponentHooks === void 0) { invokeComponentHooks = true; }
    var isAlipaySource = sourceType === api_1.SOURCE_TYPE.ALIPAY;
    /**
     * 设置基础信息
     */
    var makeBaseInfo = function () {
        if (!this.$morId)
            this.$morId = String((0, api_1.generateId)());
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
            api_1.logger.error('未发现 getCurrentPages 方法, 无法自动获取当前页面实例, pageLifetimes 相关事件注册失败');
            return;
        }
        var $event = (0, api_1.getSharedProperty)('$event', this);
        var allPages = getCurrentPages() || [];
        // 在当前组件中保存 所在页面的标记
        var pageFlag = (this.$morCurrentPageFlag =
            (_a = allPages[allPages.length - 1]) === null || _a === void 0 ? void 0 : _a.$morPageFlag);
        if (!pageFlag || !$event) {
            api_1.logger.warn('当前运行环境缺乏 $event 或 $morPageFlag 支持, ' +
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
        var $event = (0, api_1.getSharedProperty)('$event', this);
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
        var $event = (0, api_1.getSharedProperty)('$event', this);
        if (!$event)
            return;
        if (!((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.$morEventListenerNames) === null || _b === void 0 ? void 0 : _b.length))
            return;
        // 在当前组件实例中添加 事件
        this.data.$morEventListenerNames.forEach(function (eventName) {
            var morEventName = "".concat(constants_1.MOR_EVENT_METHOD_PREFIX).concat(eventName);
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
        var $event = (0, api_1.getSharedProperty)('$event', this);
        if (!$event)
            return;
        if (!((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.$morEventListenerNames) === null || _b === void 0 ? void 0 : _b.length))
            return;
        this.data.$morEventListenerNames.forEach(function (eventName) {
            var morEventName = "".concat(constants_1.MOR_EVENT_METHOD_PREFIX).concat(eventName);
            $event.off(eventName, _this[morEventName]);
        });
    };
    var lifetimes = isAlipaySource
        ? componentOptions
        : componentOptions.lifetimes;
    // 支付宝 DSL 支持
    if (isAlipaySource) {
        // onInit
        lifetimes.onInit = (0, api_1.compose)([
            needsToHookPageLifetimes ? registerPageLifetimes : emptyFn,
            invokeComponentHooks ? (0, invokeHook_1.invokeHook)('componentOnInit') : emptyFn,
            (0, invokeOriginalFunction_1.invokeOriginalFunction)('onInit', lifetimes)
        ]);
        // didMount
        componentOptions.didMount = (0, api_1.compose)([
            needsToHookPageLifetimes ? registerPageLifetimes : emptyFn,
            makeBaseInfo,
            invokeComponentHooks ? (0, invokeHook_1.invokeHook)('componentDidMount') : emptyFn,
            addEventListeners,
            (0, invokeOriginalFunction_1.invokeOriginalFunction)('didMount', lifetimes)
        ]);
        // didUnmount
        componentOptions.didUnmount = (0, api_1.compose)([
            needsToHookPageLifetimes ? unregisterPageLifetimes : emptyFn,
            invokeComponentHooks ? (0, invokeHook_1.invokeHook)('componentDidUnmount') : emptyFn,
            removeEventListeners,
            (0, invokeOriginalFunction_1.invokeOriginalFunction)('didUnmount', componentOptions)
        ]);
        // onError
        componentOptions.onError = (0, api_1.compose)([
            invokeComponentHooks ? (0, invokeHook_1.invokeHook)('componentOnError') : emptyFn,
            (0, invokeOriginalFunction_1.invokeOriginalFunction)('onError', componentOptions)
        ]);
    }
    // 微信 DSL 支持
    else {
        // created
        lifetimes.created = (0, api_1.compose)([
            needsToHookPageLifetimes ? registerPageLifetimes : emptyFn,
            invokeComponentHooks ? (0, invokeHook_1.invokeHook)('componentOnCreated') : emptyFn,
            (0, invokeOriginalFunction_1.invokeOriginalFunction)('created', lifetimes)
        ]);
        // attached
        lifetimes.attached = (0, api_1.compose)([
            needsToHookPageLifetimes ? registerPageLifetimes : emptyFn,
            makeBaseInfo,
            invokeComponentHooks ? (0, invokeHook_1.invokeHook)('componentOnAttached') : emptyFn,
            addEventListeners,
            (0, invokeOriginalFunction_1.invokeOriginalFunction)('attached', lifetimes)
        ]);
        // detached
        lifetimes.detached = (0, api_1.compose)([
            needsToHookPageLifetimes ? unregisterPageLifetimes : emptyFn,
            invokeComponentHooks ? (0, invokeHook_1.invokeHook)('componentOnDetached') : emptyFn,
            removeEventListeners,
            (0, invokeOriginalFunction_1.invokeOriginalFunction)('detached', lifetimes)
        ]);
        // error
        lifetimes.error = (0, api_1.compose)([
            invokeComponentHooks ? (0, invokeHook_1.invokeHook)('componentOnError') : emptyFn,
            (0, invokeOriginalFunction_1.invokeOriginalFunction)('error', lifetimes)
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
            var morEventName = "".concat(constants_1.MOR_EVENT_METHOD_PREFIX).concat(eventName);
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
    if (sourceType === api_1.SOURCE_TYPE.WECHAT) {
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
var isAlipayTarget = (0, api_1.getEnv)() === api_1.ENV_TYPE.ALIPAY ||
    (0, api_1.getEnv)() === api_1.ENV_TYPE.DINGDING ||
    (0, api_1.getEnv)() === api_1.ENV_TYPE.TAOBAO;
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
    return sourceType === api_1.SOURCE_TYPE.WECHAT
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
                api_1.logger.error("\u65E0\u6548\u7684 ".concat(mixinType, ": "), curr, '已跳过');
                return prev;
            }
            var result = tslib_1.__assign({}, prev);
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
                    result = processMixins(tslib_1.__spreadArray([result], childMixins, true), false);
                }
            }
            // 合并 lifetimes, lifetimes 中的函数优先级高
            var current = tslib_1.__assign(tslib_1.__assign({}, curr), (curr.lifetimes || {}));
            Object.keys(current).forEach(function (name) {
                // 不处理 定义段函数
                if (name === 'definitionFilter')
                    return;
                // 合并 数据
                // 如 props/properties/data/methods
                if (typeof current[name] === 'object') {
                    // 对象类型还可能包含数组，对数组做单独处理
                    if (Array.isArray(curr[name])) {
                        result[name] = tslib_1.__spreadArray(tslib_1.__spreadArray([], (result[name] || []), true), curr[name], true);
                    }
                    else
                        result[name] = tslib_1.__assign(tslib_1.__assign({}, result[name]), current[name]);
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
                            api_1.logger.warn("".concat(mixinType, " \u4E2D\u91CD\u590D\u5B9A\u4E49\u65B9\u6CD5, \u5C06\u751F\u6548\u6700\u540E\u58F0\u660E\u7684"), name);
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
                    api_1.logger.warn("".concat(name, " \u5728 ").concat(mixinType, " \u4E2D\u5B9A\u4E49\u4E3A object, \u4F46\u662F\u5728\u5F53\u524D Component \u4E3A").concat(currType));
                    return;
                }
                componentOptions[name] = tslib_1.__assign(tslib_1.__assign({}, merged[name]), componentOptions[name]);
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
                    fn.call.apply(fn, tslib_1.__spreadArray([this], args, false));
                }
            }
            catch (err) {
                api_1.logger.error("".concat(mixinType, " \u51FD\u6570 ").concat(name, " \u62A5\u9519"), err);
            }
            if (originalFn)
                originalFn.call.apply(originalFn, tslib_1.__spreadArray([this], args, false));
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
    api_1.logger.time('component-init');
    if (!sourceType) {
        api_1.logger.warn("createComponent \u7F3A\u5C11 sourceType \u53EF\u80FD\u4F1A\u5BFC\u81F4\u5C0F\u7A0B\u5E8F\u7EC4\u4EF6\u521D\u59CB\u5316\u9519\u8BEF");
    }
    var componentOptions = tslib_1.__assign({}, options);
    var $morHooks = (0, api_1.getSharedProperty)('$morHooks', options);
    if (!$morHooks) {
        api_1.logger.warn('createComponent 依赖于 $morHooks 的初始化, 请检查配置');
        return componentOptions;
    }
    // 确保 data 属性 和 methods 属性
    ensureDataAndMethodsAndLifetimes(componentOptions, sourceType);
    // 处理 mixins
    processMixinsOrBehaviors(componentOptions, 'mixins', sourceType);
    // 仅非支付宝DSL且目标为支付宝小程序运行环境需要处理 behaviors
    if (sourceType === api_1.SOURCE_TYPE.WECHAT && isAlipayTarget) {
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
    /* MOR_COMPONENT_POLYFILL_INVOKE_REPLACER */ '';
    // 执行 component 适配器初始化
    if (COMPONENT_ADAPTERS === null || COMPONENT_ADAPTERS === void 0 ? void 0 : COMPONENT_ADAPTERS.length) {
        COMPONENT_ADAPTERS.forEach(function (adapter) {
            if (typeof (adapter === null || adapter === void 0 ? void 0 : adapter.initComponent) === 'function') {
                adapter.initComponent(componentOptions);
            }
            else {
                api_1.logger.error("adapter.initComponent \u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570, \u8BF7\u68C0\u67E5");
            }
        });
    }
    api_1.logger.timeEnd('component-init');
    return componentOptions;
}
exports.enhanceComponent = enhanceComponent;
/**
 * Component 组件注册
 * @param options - 小程序组件配置
 * @param sourceType - 小程序组件源码类型, 编译时由 Mor 自动填充
 */
function createComponent(options, sourceType) {
    api_1.logger.time('component-init');
    var componentOptions = enhanceComponent(options, sourceType);
    api_1.logger.timeEnd('component-init');
    return Component(componentOptions);
}
exports.createComponent = createComponent;
/**
 * 注册组件转端适配器
 * @param adapters - 组件转端适配器
 */
function registerComponentAdapters(adapters) {
    COMPONENT_ADAPTERS.push.apply(COMPONENT_ADAPTERS, (0, api_1.asArray)(adapters));
}
exports.registerComponentAdapters = registerComponentAdapters;
/**
 * 支付宝 Component 组件注册
 * @param options - 小程序组件配置
 */
function aComponent(options) {
    return createComponent(options, api_1.SOURCE_TYPE.ALIPAY);
}
exports.aComponent = aComponent;
/**
 * 微信 Component 组件注册
 * @param options - 小程序组件配置
 */
function wComponent(options) {
    return createComponent(options, api_1.SOURCE_TYPE.WECHAT);
}
exports.wComponent = wComponent;
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../node_modules/@morjs/core/lib/page.js":
/*!***********************************************!*\
  !*** ../node_modules/@morjs/core/lib/page.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wPage = exports.aPage = exports.registerPageAdapters = exports.createPage = exports.enhancePage = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
var api_1 = __webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/lib/index.js");
var constants_1 = __webpack_require__(/*! ./utils/constants */ "../node_modules/@morjs/core/lib/utils/constants.js");
var invokeHook_1 = __webpack_require__(/*! ./utils/invokeHook */ "../node_modules/@morjs/core/lib/utils/invokeHook.js");
var invokeOriginalFunction_1 = __webpack_require__(/*! ./utils/invokeOriginalFunction */ "../node_modules/@morjs/core/lib/utils/invokeOriginalFunction.js");
var isPromise_1 = __webpack_require__(/*! ./utils/isPromise */ "../node_modules/@morjs/core/lib/utils/isPromise.js");
// 跨端支持的页面运行时引用注入位置, '' 空字符串是为了防止该注释被移除
// prettier-ignore
/* MOR_PAGE_POLYFILL_IMPORT_REPLACER */ '';
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
        var $event = (0, api_1.getSharedProperty)('$event', this);
        if (!$event) {
            return api_1.logger.warn('createPage 中 appLifetimes 的运行依赖 $event，请检查配置');
        }
        // app show 支持
        if (appLifetimes.show) {
            if (typeof appLifetimes.show === 'function') {
                appLifetimes.show = appLifetimes.show.bind(this);
                $event.on(constants_1.APP_ON_SHOW_EVENT, appLifetimes.show);
            }
            else {
                api_1.logger.warn('appLifetimes 的 show 方法必须是 function');
            }
        }
        // app hide 支持
        if (appLifetimes.hide) {
            if (typeof appLifetimes.hide === 'function') {
                appLifetimes.hide = appLifetimes.hide.bind(this);
                $event.on(constants_1.APP_ON_HIDE_EVENT, appLifetimes.hide);
            }
            else {
                api_1.logger.warn('appLifetimes 的 hide 方法必须是 function');
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
        var $event = (0, api_1.getSharedProperty)('$event', this);
        if (!$event)
            return;
        if (appLifetimes.show)
            $event.off(constants_1.APP_ON_SHOW_EVENT, appLifetimes.show);
        if (appLifetimes.hide)
            $event.off(constants_1.APP_ON_HIDE_EVENT, appLifetimes.hide);
    };
    /**
     * 调用事件通知
     * @param eventName 事件标识
     */
    var invokeEvent = function (eventName) {
        return function (arg) {
            var $event = (0, api_1.getSharedProperty)('$event', this);
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
        var $event = (0, api_1.getSharedProperty)('$event', this);
        Object.keys(eventListener).forEach(function (eventName) {
            /**
             * 事件需要 bind this，否则实例并非一致
             * 事件如果绑定在 $eventListener 对象上，而非直接在 this 对象上
             * 会有隐藏 bug，导致 appx 底层框架在事件内调用 setData 时判断失效
             */
            _this["".concat(constants_1.MOR_EVENT_METHOD_PREFIX).concat(eventName)] =
                eventListener[eventName].bind(_this);
            $event.on(eventName, _this["".concat(constants_1.MOR_EVENT_METHOD_PREFIX).concat(eventName)]);
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
        var $event = (0, api_1.getSharedProperty)('$event', this);
        Object.keys(eventListener).forEach(function (eventName) {
            $event.off(eventName, _this["".concat(constants_1.MOR_EVENT_METHOD_PREFIX).concat(eventName)]);
        });
    };
    /**
     *  确保必要的标示存在
     */
    var ensureViewIdExistance = function () {
        if (!('$viewId' in this))
            this.$viewId = (0, api_1.generateId)();
        this.$morPageFlag = String(this.$viewId);
    };
    pageOptions.onLoad = (0, api_1.compose)([
        ensureViewIdExistance,
        (0, invokeHook_1.invokeHook)('pageOnLoad'),
        addEventListeners,
        (0, invokeOriginalFunction_1.invokeOriginalFunction)('onLoad', pageOptions),
        registerAppLifetimes
    ]);
    pageOptions.onReady = (0, api_1.compose)([
        (0, invokeHook_1.invokeHook)('pageOnReady'),
        (0, invokeOriginalFunction_1.invokeOriginalFunction)('onReady', pageOptions),
        invokeEvent('pageOnReady')
    ]);
    pageOptions.onShow = (0, api_1.compose)([
        (0, invokeHook_1.invokeHook)('pageOnShow'),
        (0, invokeOriginalFunction_1.invokeOriginalFunction)('onShow', pageOptions),
        invokeEvent('pageOnShow')
    ]);
    pageOptions.onHide = (0, api_1.compose)([
        (0, invokeHook_1.invokeHook)('pageOnHide'),
        (0, invokeOriginalFunction_1.invokeOriginalFunction)('onHide', pageOptions),
        invokeEvent('pageOnHide')
    ]);
    pageOptions.onUnload = (0, api_1.compose)([
        (0, invokeHook_1.invokeHook)('pageOnUnload'),
        removeEventListeners,
        (0, invokeOriginalFunction_1.invokeOriginalFunction)('onUnload', pageOptions),
        unregisterAppLifetimes
    ]);
    // resize 支持
    // 区分支付宝和微信的 onResize 支持
    if (sourceType === api_1.SOURCE_TYPE.ALIPAY) {
        pageOptions.events = pageOptions.events || {};
        var events = pageOptions.events;
        events.onResize = (0, api_1.compose)([
            (0, invokeOriginalFunction_1.invokeOriginalFunction)('onResize', pageOptions.events),
            invokeEvent('pageOnResize')
        ]);
    }
    else {
        pageOptions.onResize = (0, api_1.compose)([
            (0, invokeOriginalFunction_1.invokeOriginalFunction)('onResize', pageOptions),
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
            if ((0, isPromise_1.isPromise)(previous) || (0, isPromise_1.isPromise)(current)) {
                return Promise.resolve(previous).then(function (p) {
                    return Promise.resolve(current).then(function (c) {
                        if (p == null)
                            return c;
                        if (c == null)
                            return p;
                        return tslib_1.__assign(tslib_1.__assign({}, p), c);
                    });
                });
            }
            else {
                return tslib_1.__assign(tslib_1.__assign({}, previous), current);
            }
        }
    },
    onPageScroll: {}
};
// 微信小程序
var WECHAT_METHOD_NAMES = tslib_1.__assign(tslib_1.__assign({}, PAGE_METHOD_NAMES), { onShareTimeline: {
        r: function (previous, current) {
            if (previous == null)
                return current;
            if (current == null)
                return previous;
            return tslib_1.__assign(tslib_1.__assign({}, previous), current);
        }
    }, onResize: {}, onAddToFavorites: {} });
// 支付宝小程序
var ALIPAY_METHOD_NAMES = tslib_1.__assign(tslib_1.__assign({}, PAGE_METHOD_NAMES), { onTitleClick: {}, onOptionMenuClick: {}, onPopMenuClick: {}, onPullIntercept: {}, onTabItemTap: {} });
function getPageMethodNames(sourceType) {
    return sourceType === api_1.SOURCE_TYPE.WECHAT
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
            api_1.logger.error('无效的 mixin: ', curr, '已跳过');
            return prev;
        }
        var result = tslib_1.__assign({}, prev);
        Object.keys(curr).forEach(function (name) {
            // 合并 数据
            if (typeof curr[name] === 'object') {
                // 对象类型还可能包含数组，对数组做单独处理
                if (Array.isArray(curr[name])) {
                    result[name] = tslib_1.__spreadArray(tslib_1.__spreadArray([], (result[name] || []), true), curr[name], true);
                }
                else
                    result[name] = tslib_1.__assign(tslib_1.__assign({}, result[name]), curr[name]);
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
                        api_1.logger.warn('mixins 中重复定义方法，将生效最后声明的', name);
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
                    api_1.logger.warn("".concat(name, "\u5728 mixins \u4E2D\u5B9A\u4E49\u4E3A object, \u4F46\u662F\u5728\u5F53\u524D Page \u4E3A").concat(currType));
                    return;
                }
                pageOptions[name] = tslib_1.__assign(tslib_1.__assign({}, merged[name]), pageOptions[name]);
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
                    var r = fn.call.apply(fn, tslib_1.__spreadArray([this], args, false));
                    result = (_a = fnConfig === null || fnConfig === void 0 ? void 0 : fnConfig.r) === null || _a === void 0 ? void 0 : _a.call(fnConfig, result, r);
                }
            }
            catch (err) {
                api_1.logger.error('mixins 函数报错', err);
            }
            if (originalFn) {
                var r = originalFn.call.apply(originalFn, tslib_1.__spreadArray([this], args, false));
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
        api_1.logger.warn("createPage \u7F3A\u5C11 sourceType \u53EF\u80FD\u4F1A\u5BFC\u81F4\u5C0F\u7A0B\u5E8F\u9875\u9762\u521D\u59CB\u5316\u9519\u8BEF");
    }
    var $morHooks = (0, api_1.getSharedProperty)('$morHooks', options);
    var pageOptions = tslib_1.__assign({}, options);
    if (!$morHooks) {
        api_1.logger.warn('createPage 依赖 $morHooks，请检查配置');
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
    /* MOR_PAGE_POLYFILL_INVOKE_REPLACER */ '';
    // 执行 page 适配器初始化
    if (PAGE_ADAPTERS === null || PAGE_ADAPTERS === void 0 ? void 0 : PAGE_ADAPTERS.length) {
        PAGE_ADAPTERS.forEach(function (adapter) {
            if (typeof (adapter === null || adapter === void 0 ? void 0 : adapter.initPage) === 'function') {
                adapter.initPage(pageOptions);
            }
            else {
                api_1.logger.error("adapter.initPage \u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570, \u8BF7\u68C0\u67E5");
            }
        });
    }
    return pageOptions;
}
exports.enhancePage = enhancePage;
/**
 * 注册 Page 函数
 */
function createPage(options, sourceType) {
    api_1.logger.time('page-init');
    var pageOptions = enhancePage(options, sourceType);
    api_1.logger.timeEnd('page-init');
    return Page(pageOptions);
}
exports.createPage = createPage;
/**
 * 注册页面转端适配器
 * @param adapters - 页面转端适配器
 */
function registerPageAdapters(adapters) {
    PAGE_ADAPTERS.push.apply(PAGE_ADAPTERS, (0, api_1.asArray)(adapters));
}
exports.registerPageAdapters = registerPageAdapters;
/**
 * 支付宝 Page 页面注册
 * @param options - 小程序页面配置
 */
function aPage(options) {
    return createPage(options, api_1.SOURCE_TYPE.ALIPAY);
}
exports.aPage = aPage;
/**
 * 微信 Page 页面注册
 * @param options - 小程序页面配置
 */
function wPage(options) {
    return createPage(options, api_1.SOURCE_TYPE.WECHAT);
}
exports.wPage = wPage;
//# sourceMappingURL=page.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-base/lib/env.js":
/*!******************************************************!*\
  !*** ../node_modules/@morjs/runtime-base/lib/env.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getGlobalObject = exports.getEnvDesc = exports.getEnv = exports.SOURCE_TYPE = exports.ENV_TYPE_DESC = exports.ENV_TYPE = void 0;
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
})(ENV_TYPE = exports.ENV_TYPE || (exports.ENV_TYPE = {}));
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
})(ENV_TYPE_DESC = exports.ENV_TYPE_DESC || (exports.ENV_TYPE_DESC = {}));
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
})(SOURCE_TYPE = exports.SOURCE_TYPE || (exports.SOURCE_TYPE = {}));
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
exports.getEnv = getEnv;
/**
 * 获取当前环境描述信息
 * @returns 当前环境描述信息
 */
function getEnvDesc() {
    return ENV_TYPE_DESC[getEnv()];
}
exports.getEnvDesc = getEnvDesc;
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
exports.getGlobalObject = getGlobalObject;
//# sourceMappingURL=env.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-base/lib/base64.js":
/*!*********************************************************!*\
  !*** ../node_modules/@morjs/runtime-base/lib/base64.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Base64 = void 0;
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
exports.Base64 = Base64;
//# sourceMappingURL=base64.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-base/lib/event.js":
/*!********************************************************!*\
  !*** ../node_modules/@morjs/runtime-base/lib/event.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {


/* eslint-disable @typescript-eslint/no-non-null-assertion */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.event = exports.getAllEvents = exports.createEvent = void 0;
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
exports.createEvent = createEvent;
/**
 * 获取所有 event 实例
 */
function getAllEvents() {
    return EVENT_EMITTER_INSTANCES;
}
exports.getAllEvents = getAllEvents;
/**
 * 全局默认 Event
 */
exports.event = createEvent('default');
//# sourceMappingURL=event.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-base/lib/hooks.js":
/*!********************************************************!*\
  !*** ../node_modules/@morjs/runtime-base/lib/hooks.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.applySolutions = exports.applyPlugins = exports.hooks = exports.getAllHooks = exports.createHooks = exports.SyncHook = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
var logger_1 = __webpack_require__(/*! ./logger */ "../node_modules/@morjs/runtime-base/lib/logger.js");
var asArray_1 = __webpack_require__(/*! ./utils/asArray */ "../node_modules/@morjs/runtime-base/lib/utils/asArray.js");
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
            logger_1.logger.error("$hooks.".concat(this.name, ".tap \u7F3A\u5C11 name"));
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
                    (_a = tap.fn).call.apply(_a, tslib_1.__spreadArray([context], args, false));
                }
                catch (err) {
                    logger_1.logger.error(this.name, tap.name, err);
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
exports.SyncHook = SyncHook;
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
                    tap === null || tap === void 0 ? void 0 : (_a = tap.fn).call.apply(_a, tslib_1.__spreadArray([context], args, false));
                }
                catch (error) {
                    logger_1.logger.error(name_1, tap.name, error);
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
exports.createHooks = createHooks;
/**
 * 获取所有 hooks
 */
function getAllHooks() {
    return HOOKS_INSTANCES;
}
exports.getAllHooks = getAllHooks;
/**
 * 获取全局共享属性，用于作为原子化的兜底实现
 *   1. 首先查找上下文中的属性
 *   2. 如果不存在，则查找 getApp 中的
 *   3. 如果不存在，则查找 小程序环境的 globalObject, 如 my 中是否存在
 */
exports.hooks = createHooks('default');
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
            logger_1.logger.error("[plugin ".concat(plugin.pluginName, "]: \u521D\u59CB\u5316\u62A5\u9519"), err);
        }
    });
    return pluginsNames;
}
exports.applyPlugins = applyPlugins;
/**
 * 应用 Solutions
 * @param hooks Hooks
 * @param solutions 插件集列表
 */
function applySolutions(hooks, solution) {
    var solutions = (0, asArray_1.asArray)(solution);
    var plugins = [];
    try {
        solutions.forEach(function (solution) {
            var _a;
            if (typeof solution === 'function') {
                plugins = plugins.concat(((_a = solution()) === null || _a === void 0 ? void 0 : _a.plugins) || []);
            }
            else {
                logger_1.logger.error("\u521D\u59CB\u5316\u8FD0\u884C\u65F6\u63D2\u4EF6\u5931\u8D25, \u539F\u56E0: ".concat(solution, " \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684 solution"));
            }
        });
    }
    catch (err) {
        logger_1.logger.error("\u521D\u59CB\u5316\u8FD0\u884C\u65F6\u63D2\u4EF6\u5931\u8D25, \u539F\u56E0: ".concat(err));
    }
    return applyPlugins(hooks, plugins);
}
exports.applySolutions = applySolutions;
//# sourceMappingURL=hooks.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-base/lib/index.js":
/*!********************************************************!*\
  !*** ../node_modules/@morjs/runtime-base/lib/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
tslib_1.__exportStar(__webpack_require__(/*! ./base64 */ "../node_modules/@morjs/runtime-base/lib/base64.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./env */ "../node_modules/@morjs/runtime-base/lib/env.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./event */ "../node_modules/@morjs/runtime-base/lib/event.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./hooks */ "../node_modules/@morjs/runtime-base/lib/hooks.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./logger */ "../node_modules/@morjs/runtime-base/lib/logger.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./utils */ "../node_modules/@morjs/runtime-base/lib/utils/index.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-base/lib/logger.js":
/*!*********************************************************!*\
  !*** ../node_modules/@morjs/runtime-base/lib/logger.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.logger = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
var PREFIX = '[mor]';
function warn() {
    var msgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        msgs[_i] = arguments[_i];
    }
    console.warn && console.warn.apply(console, tslib_1.__spreadArray([PREFIX], msgs, false));
}
function log() {
    var msgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        msgs[_i] = arguments[_i];
    }
    console.log && console.log.apply(console, tslib_1.__spreadArray([PREFIX], msgs, false));
}
function error() {
    var msgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        msgs[_i] = arguments[_i];
    }
    console.error && console.error.apply(console, tslib_1.__spreadArray([PREFIX], msgs, false));
}
function info() {
    var msgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        msgs[_i] = arguments[_i];
    }
    console.info && console.info.apply(console, tslib_1.__spreadArray([PREFIX], msgs, false));
}
function debug() {
    var msgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        msgs[_i] = arguments[_i];
    }
    console.debug && console.debug.apply(console, tslib_1.__spreadArray([PREFIX], msgs, false));
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
exports.logger = {
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

/***/ "../node_modules/@morjs/runtime-base/lib/utils/asArray.js":
/*!****************************************************************!*\
  !*** ../node_modules/@morjs/runtime-base/lib/utils/asArray.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.asArray = void 0;
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
exports.asArray = asArray;
//# sourceMappingURL=asArray.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-base/lib/utils/compose.js":
/*!****************************************************************!*\
  !*** ../node_modules/@morjs/runtime-base/lib/utils/compose.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.compose = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
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
                fn.call.apply(fn, tslib_1.__spreadArray([this], args, false));
            }
        }
    };
}
exports.compose = compose;
//# sourceMappingURL=compose.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-base/lib/utils/generateId.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@morjs/runtime-base/lib/utils/generateId.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateId = void 0;
var ID = 0;
/**
 * 生成 ID
 */
function generateId() {
    return ++ID;
}
exports.generateId = generateId;
//# sourceMappingURL=generateId.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-base/lib/utils/getSharedProperty.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@morjs/runtime-base/lib/utils/getSharedProperty.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSharedProperty = void 0;
var env_1 = __webpack_require__(/*! ../env */ "../node_modules/@morjs/runtime-base/lib/env.js");
var event_1 = __webpack_require__(/*! ../event */ "../node_modules/@morjs/runtime-base/lib/event.js");
var hooks_1 = __webpack_require__(/*! ../hooks */ "../node_modules/@morjs/runtime-base/lib/hooks.js");
// 默认的共享对象
var SHARED = {
    $morHooks: hooks_1.hooks,
    $event: event_1.event
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
    var globalObj = (0, env_1.getGlobalObject)();
    if (globalObj && globalObj[propName] != null)
        return globalObj[propName];
    return SHARED[propName];
}
exports.getSharedProperty = getSharedProperty;
//# sourceMappingURL=getSharedProperty.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-base/lib/utils/hasOwnProperty.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@morjs/runtime-base/lib/utils/hasOwnProperty.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hasOwnProperty = void 0;
/**
 * 对象中是否包含对应的属性
 * @param obj - 对象
 * @param propertyName - 属性名称
 * @returns true or false
 */
function hasOwnProperty(obj, propertyName) {
    return Object.prototype.hasOwnProperty.call(obj, propertyName);
}
exports.hasOwnProperty = hasOwnProperty;
//# sourceMappingURL=hasOwnProperty.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-base/lib/utils/index.js":
/*!**************************************************************!*\
  !*** ../node_modules/@morjs/runtime-base/lib/utils/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
tslib_1.__exportStar(__webpack_require__(/*! ./asArray */ "../node_modules/@morjs/runtime-base/lib/utils/asArray.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./compose */ "../node_modules/@morjs/runtime-base/lib/utils/compose.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./generateId */ "../node_modules/@morjs/runtime-base/lib/utils/generateId.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./getSharedProperty */ "../node_modules/@morjs/runtime-base/lib/utils/getSharedProperty.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./hasOwnProperty */ "../node_modules/@morjs/runtime-base/lib/utils/hasOwnProperty.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./transformApis */ "../node_modules/@morjs/runtime-base/lib/utils/transformApis.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@morjs/runtime-base/lib/utils/transformApis.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@morjs/runtime-base/lib/utils/transformApis.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.markAsUnsupport = exports.transformApis = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
var env_1 = __webpack_require__(/*! ../env */ "../node_modules/@morjs/runtime-base/lib/env.js");
var logger_1 = __webpack_require__(/*! ../logger */ "../node_modules/@morjs/runtime-base/lib/logger.js");
var hasOwnProperty_1 = __webpack_require__(/*! ./hasOwnProperty */ "../node_modules/@morjs/runtime-base/lib/utils/hasOwnProperty.js");
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
                apiConfig.opts.apply(apiConfig, tslib_1.__spreadArray([options], args, false));
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
                return apiConfig.fn.apply(apiConfig, tslib_1.__spreadArray([global, options], args, false));
            }
            // 处理 request
            if (actualApiName === 'request') {
                return getOriginalRequest(global)(options);
            }
            // promisify 处理
            if (needPromisfiedApis.indexOf(apiName) !== -1) {
                // 新 apiName 可能不存在
                if (!(0, hasOwnProperty_1.hasOwnProperty)(global, actualApiName)) {
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
                        logger_1.logger.error("\u63A5\u53E3 ".concat(actualApiName, " \u8C03\u7528\u9519\u8BEF: "), res, "\n\u53C2\u6570: ", tslib_1.__spreadArray([
                            options
                        ], args, true));
                    };
                    obj.complete = function (res) {
                        var _a;
                        (_a = options === null || options === void 0 ? void 0 : options.complete) === null || _a === void 0 ? void 0 : _a.call(options, res);
                    };
                    if (args.length) {
                        task = global[actualApiName].apply(global, tslib_1.__spreadArray([obj], args, false));
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
                if (!(0, hasOwnProperty_1.hasOwnProperty)(global, actualApiName)) {
                    return markAsUnsupport(actualApiName)();
                }
                var res = global[actualApiName].apply(global, tslib_1.__spreadArray([options], args, false));
                (_a = apiConfig === null || apiConfig === void 0 ? void 0 : apiConfig.r) === null || _a === void 0 ? void 0 : _a.call(apiConfig, res);
                return res;
            }
        };
    });
}
exports.transformApis = transformApis;
/**
 * 返回暂不支持的 函数
 * @param apiName - 接口名称
 */
function markAsUnsupport(apiName) {
    return function () {
        logger_1.logger.warn("".concat((0, env_1.getEnvDesc)(), "\u6682\u4E0D\u652F\u6301 ").concat(apiName));
    };
}
exports.markAsUnsupport = markAsUnsupport;
//# sourceMappingURL=transformApis.js.map

/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/badge/props.js":
/*!***************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/badge/props.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const props = {
    color: {
        type: String,
        value: '',
    },
    content: {
        type: String,
        value: '',
    },
    count: {
        type: null,
        value: 0,
    },
    dot: {
        type: Boolean,
        value: false,
    },
    externalClasses: {
        type: Array,
    },
    maxCount: {
        type: Number,
        value: 99,
    },
    offset: {
        type: Array,
    },
    shape: {
        type: String,
        value: 'circle',
    },
    showZero: {
        type: Boolean,
        value: false,
    },
    size: {
        type: String,
        value: 'medium',
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/button/props.js":
/*!****************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/button/props.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const props = {
    tId: {
        type: String,
        value: '',
    },
    block: {
        type: Boolean,
        value: false,
    },
    content: {
        type: String,
    },
    customDataset: {
        type: null,
    },
    disabled: {
        type: Boolean,
        value: false,
    },
    externalClasses: {
        type: Array,
    },
    ghost: {
        type: Boolean,
        value: false,
    },
    icon: {
        type: null,
    },
    loading: {
        type: Boolean,
        value: false,
    },
    loadingProps: {
        type: Object,
    },
    shape: {
        type: String,
        value: 'rectangle',
    },
    size: {
        type: String,
        value: 'medium',
    },
    theme: {
        type: String,
        value: 'default',
    },
    type: {
        type: String,
    },
    variant: {
        type: String,
        value: 'base',
    },
    openType: {
        type: String,
    },
    hoverClass: {
        type: String,
        value: '',
    },
    hoverStopPropagation: {
        type: Boolean,
        value: false,
    },
    hoverStartTime: {
        type: Number,
        value: 20,
    },
    hoverStayTime: {
        type: Number,
        value: 70,
    },
    lang: {
        type: String,
        value: 'en',
    },
    sessionFrom: {
        type: String,
        value: '',
    },
    sendMessageTitle: {
        type: String,
        value: '',
    },
    sendMessagePath: {
        type: String,
        value: '',
    },
    sendMessageImg: {
        type: String,
        value: '',
    },
    appParameter: {
        type: String,
        value: '',
    },
    showMessageCard: {
        type: Boolean,
        value: false,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/cascader/props.js":
/*!******************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/cascader/props.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const props = {
    closeBtn: {
        type: Boolean,
        value: true,
    },
    keys: {
        type: Object,
    },
    options: {
        type: Array,
        value: [],
    },
    placeholder: {
        type: String,
        value: '选择选项',
    },
    subTitles: {
        type: Array,
        value: [],
    },
    theme: {
        type: String,
        value: 'step',
    },
    title: {
        type: String,
    },
    value: {
        type: null,
        value: null,
    },
    defaultValue: {
        type: null,
        value: null,
    },
    visible: {
        type: Boolean,
        value: false,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/cell-group/props.js":
/*!********************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/cell-group/props.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const props = {
    bordered: {
        type: Boolean,
    },
    externalClasses: {
        type: Array,
    },
    theme: {
        type: String,
        value: 'default',
    },
    title: {
        type: String,
        value: '',
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/cell/props.js":
/*!**************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/cell/props.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const props = {
    align: {
        type: String,
        value: 'middle',
    },
    arrow: {
        type: null,
        value: false,
    },
    bordered: {
        type: Boolean,
        value: true,
    },
    description: {
        type: String,
    },
    externalClasses: {
        type: Array,
    },
    hover: {
        type: Boolean,
    },
    image: {
        type: String,
    },
    jumpType: {
        type: String,
        value: 'navigateTo',
    },
    leftIcon: {
        type: null,
    },
    note: {
        type: String,
    },
    required: {
        type: Boolean,
        value: false,
    },
    rightIcon: {
        type: null,
    },
    title: {
        type: String,
    },
    url: {
        type: String,
        value: '',
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/config.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/common/config.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prefix": function() { return /* binding */ prefix; }
/* harmony export */ });
/* harmony default export */ __webpack_exports__["default"] = ({
    prefix: "t",
});
const prefix = "t";


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/control.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/control.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export useControl */
const defaultOption = {
    valueKey: 'value',
    defaultValueKey: 'defaultValue',
    changeEventName: 'change',
    strict: true,
};
function useControl(option = {}) {
    const { valueKey, defaultValueKey, changeEventName, strict } = Object.assign(Object.assign({}, defaultOption), option);
    const props = this.properties || {};
    const value = props[valueKey];
    const defaultValue = props[strict ? defaultValueKey : valueKey];
    let controlled = false;
    if (strict && typeof value !== 'undefined' && value !== null) {
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
            this.triggerEvent(changeEventName, typeof customChangeData !== 'undefined' ? customChangeData : newVal);
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

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/flatTool.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/flatTool.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPlainObject": function() { return /* binding */ isPlainObject; },
/* harmony export */   "toObject": function() { return /* binding */ toObject; }
/* harmony export */ });
/* unused harmony exports getPrototypeOf, isObject, iterateInheritedPrototype */
const getPrototypeOf = function (obj) {
    return Object.getPrototypeOf ? Object.getPrototypeOf(obj) : obj.__proto__;
};
const isObject = function isObject(something) {
    const type = typeof something;
    return something !== null && (type === 'function' || type === 'object');
};
const iterateInheritedPrototype = function iterateInheritedPrototype(callback, fromCtor, toCtor, includeToCtor = true) {
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
const toObject = function toObject(something, options = {}) {
    const obj = {};
    if (!isObject(something))
        return obj;
    const excludes = options.excludes || ['constructor'];
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
            const fnKeys = ['get', 'set', 'value'];
            fnKeys.forEach((k) => {
                if (typeof desc[k] === 'function') {
                    const oldFn = desc[k];
                    desc[k] = function (...args) {
                        return oldFn.apply(Object.prototype.hasOwnProperty.call(options, 'bindTo') ? options.bindTo : this, args);
                    };
                }
            });
            Object.defineProperty(obj, key, Object.assign(Object.assign({}, desc), defaultDesc));
        });
    }, something, options.till || Object, false);
    return obj;
};
const isPlainObject = function isPlainObject(something) {
    return Object.prototype.toString.call(something) === '[object Object]';
};


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/index.js":
/*!********************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/index.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wxComponent": function() { return /* binding */ wxComponent; }
/* harmony export */ });
/* unused harmony export toComponent */
/* harmony import */ var _flatTool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flatTool */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/flatTool.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../version */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/version.js");


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
            if (!(0,_flatTool__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(opt)) {
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
const wxComponent = function wxComponent() {
    return function (constructor) {
        class WxComponent extends constructor {
        }
        const current = new WxComponent();
        current.options = current.options || {};
        if (current.options.addGlobalClass === undefined) {
            current.options.addGlobalClass = true;
        }
        if ((0,_version__WEBPACK_IMPORTED_MODULE_1__.canUseVirtualHost)()) {
            current.options.virtualHost = true;
        }
        const obj = toComponent((0,_flatTool__WEBPACK_IMPORTED_MODULE_0__.toObject)(current));
        Component(obj);
    };
};


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/superComponent.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/common/src/superComponent.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addUnit": function() { return /* binding */ addUnit; },
/* harmony export */   "calcIcon": function() { return /* binding */ calcIcon; },
/* harmony export */   "getCharacterLength": function() { return /* binding */ getCharacterLength; },
/* harmony export */   "getCurrentPage": function() { return /* binding */ getCurrentPage; },
/* harmony export */   "getInstance": function() { return /* binding */ getInstance; },
/* harmony export */   "getRect": function() { return /* binding */ getRect; },
/* harmony export */   "isDef": function() { return /* binding */ isDef; },
/* harmony export */   "setIcon": function() { return /* binding */ setIcon; },
/* harmony export */   "styles": function() { return /* binding */ styles; },
/* harmony export */   "uniqueFactory": function() { return /* binding */ uniqueFactory; }
/* harmony export */ });
/* unused harmony exports debounce, throttle, classNames, getAnimationFrame, isNumber, isNull, isUndefined, chunk, unitConvert, isBool, isObject, isString, toCamel, isOverSize */
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/config.js");

const systemInfo = wx.getSystemInfoSync();
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
    return wx
        .createSelectorQuery()
        .in(context)
        .selectViewport()
        .boundingClientRect()
        .exec(() => {
        cb();
    });
};
const getRect = function (context, selector, needAll = false) {
    return new Promise((resolve, reject) => {
        wx.createSelectorQuery()
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canIUseFormFieldButton": function() { return /* binding */ canIUseFormFieldButton; },
/* harmony export */   "canUseVirtualHost": function() { return /* binding */ canUseVirtualHost; }
/* harmony export */ });
let systemInfo;
function getSystemInfo() {
    if (systemInfo == null) {
        systemInfo = wx.getSystemInfoSync();
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

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/divider/props.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/divider/props.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const props = {
    align: {
        type: String,
        value: 'center',
    },
    content: {
        type: String,
    },
    style: {
        type: String,
        value: '',
    },
    dashed: {
        type: Boolean,
        value: false,
    },
    externalClasses: {
        type: Array,
    },
    layout: {
        type: String,
        value: 'horizontal',
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/fab/draggable/props.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/fab/draggable/props.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const props = {
    direction: {
        type: String,
        value: 'all',
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/fab/props.js":
/*!*************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/fab/props.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const props = {
    buttonProps: {
        type: Object,
    },
    icon: {
        type: String,
        value: '',
    },
    text: {
        type: String,
        value: '',
    },
    draggable: {
        type: Boolean,
        optionalTypes: [String],
        value: false,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/icon/props.js":
/*!**************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/icon/props.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const props = {
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


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/image/props.js":
/*!***************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/image/props.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const props = {
    error: {
        type: String,
        value: 'default',
    },
    externalClasses: {
        type: Array,
    },
    height: {
        type: null,
    },
    lazy: {
        type: Boolean,
        value: false,
    },
    loading: {
        type: String,
        value: 'default',
    },
    mode: {
        type: String,
        value: 'scaleToFill',
    },
    shape: {
        type: String,
        value: 'square',
    },
    showMenuByLongpress: {
        type: Boolean,
        value: false,
    },
    src: {
        type: String,
        value: '',
    },
    webp: {
        type: Boolean,
        value: false,
    },
    width: {
        type: null,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/input/props.js":
/*!***************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/input/props.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const props = {
    align: {
        type: String,
        value: 'left',
    },
    layout: {
        type: String,
        value: 'horizontal',
    },
    borderless: {
        type: Boolean,
        value: false,
    },
    clearable: {
        type: null,
        value: false,
    },
    clearTrigger: {
        type: String,
        value: 'always',
    },
    disabled: {
        type: Boolean,
        value: false,
    },
    errorMessage: {
        type: String,
        value: '',
    },
    externalClasses: {
        type: Array,
    },
    format: {
        type: null,
    },
    label: {
        type: String,
    },
    maxcharacter: {
        type: Number,
    },
    maxlength: {
        type: Number,
        value: -1,
    },
    placeholder: {
        type: String,
        value: undefined,
    },
    prefixIcon: {
        type: null,
        value: null,
    },
    readonly: {
        type: Boolean,
        value: false,
    },
    size: {
        type: String,
        value: 'medium',
    },
    status: {
        type: String,
        value: 'default',
    },
    suffix: {
        type: String,
    },
    suffixIcon: {
        type: null,
        value: null,
    },
    tips: {
        type: String,
    },
    value: {
        type: String,
        optionalTypes: [Number],
        value: null,
    },
    defaultValue: {
        type: String,
        optionalTypes: [Number],
    },
    type: {
        type: String,
        value: 'text',
    },
    placeholderStyle: {
        type: String,
        value: '',
    },
    placeholderClass: {
        type: String,
        value: 'input-placeholder',
    },
    cursorSpacing: {
        type: Number,
        value: 0,
    },
    autoFocus: {
        type: Boolean,
        value: false,
    },
    focus: {
        type: Boolean,
        value: false,
    },
    confirmType: {
        type: String,
        value: 'done',
    },
    alwaysEmbed: {
        type: Boolean,
        value: false,
    },
    confirmHold: {
        type: Boolean,
        value: false,
    },
    cursor: {
        type: Number,
    },
    selectionStart: {
        type: Number,
        value: -1,
    },
    selectionEnd: {
        type: Number,
        value: -1,
    },
    adjustPosition: {
        type: Boolean,
        value: true,
    },
    holdKeyboard: {
        type: Boolean,
        value: false,
    },
    safePasswordCertPath: {
        type: String,
        value: '',
    },
    safePasswordLength: {
        type: Number,
    },
    safePasswordTimeStamp: {
        type: Number,
    },
    safePasswordNonce: {
        type: String,
        value: '',
    },
    safePasswordSalt: {
        type: String,
        value: '',
    },
    safePasswordCustomHash: {
        type: String,
        value: '',
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/link/props.js":
/*!**************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/link/props.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const props = {
    content: {
        type: String,
    },
    navigatorProps: {
        type: Object,
    },
    prefixIcon: {
        type: null,
    },
    size: {
        type: String,
        value: 'medium',
    },
    status: {
        type: String,
        value: 'normal',
    },
    disabled: {
        type: Boolean,
        value: false,
    },
    hover: {
        type: Boolean,
        value: false,
    },
    suffixIcon: {
        type: null,
    },
    theme: {
        type: String,
        value: 'default',
    },
    underline: {
        type: Boolean,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/loading/props.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/loading/props.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const props = {
    delay: {
        type: Number,
        value: 0,
    },
    duration: {
        type: Number,
        value: 800,
    },
    externalClasses: {
        type: Array,
    },
    indicator: {
        type: Boolean,
        value: true,
    },
    inheritColor: {
        type: Boolean,
        value: false,
    },
    layout: {
        type: String,
        value: 'horizontal',
    },
    loading: {
        type: Boolean,
        value: true,
    },
    pause: {
        type: Boolean,
        value: false,
    },
    progress: {
        type: Number,
    },
    reverse: {
        type: Boolean,
    },
    size: {
        type: String,
        value: '40rpx',
    },
    text: {
        type: String,
    },
    theme: {
        type: String,
        value: 'circular',
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/mixins/page-scroll.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/mixins/page-scroll.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utils */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/utils.js");

const onPageScroll = function (event) {
    const page = (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.getCurrentPage)();
    if (!page)
        return;
    const { pageScroller } = page;
    pageScroller === null || pageScroller === void 0 ? void 0 : pageScroller.forEach((scroller) => {
        if (typeof scroller === 'function') {
            scroller(event);
        }
    });
};
/* harmony default export */ __webpack_exports__["default"] = ((funcName = 'onScroll') => {
    return Behavior({
        attached() {
            var _a;
            const page = (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.getCurrentPage)();
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
            const page = (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.getCurrentPage)();
            if (!page)
                return;
            page.pageScroller = ((_a = page.pageScroller) === null || _a === void 0 ? void 0 : _a.filter((item) => item !== this._pageScroller)) || [];
        },
    });
});


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/mixins/touch.js":
/*!****************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/mixins/touch.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const MinDistance = 10;
const getDirection = (x, y) => {
    if (x > y && x > MinDistance) {
        return 'horizontal';
    }
    if (y > x && y > MinDistance) {
        return 'vertical';
    }
    return '';
};
/* harmony default export */ __webpack_exports__["default"] = (Behavior({
    methods: {
        resetTouchStatus() {
            this.direction = '';
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
        },
    },
}));


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/mixins/transition.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/mixins/transition.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ transition; }
/* harmony export */ });
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/config */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/config.js");

const { prefix } = _common_config__WEBPACK_IMPORTED_MODULE_0__["default"];
function transition() {
    return Behavior({
        properties: {
            visible: {
                type: Boolean,
                value: null,
                observer: 'watchVisible',
            },
            appear: Boolean,
            name: {
                type: String,
                value: 'fade',
            },
            durations: {
                type: Number,
                optionalTypes: [Array],
            },
        },
        data: {
            transitionClass: '',
            transitionDurations: 300,
            className: '',
            realVisible: false,
        },
        created() {
            this.status = '';
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
                this.status = 'entering';
                this.setData({
                    realVisible: true,
                    transitionClass: `${prefix}-${name}-enter ${prefix}-${name}-enter-active`,
                });
                setTimeout(() => {
                    this.setData({
                        transitionClass: `${prefix}-${name}-enter-active ${prefix}-${name}-enter-to`,
                    });
                }, 30);
                if (typeof duration === 'number' && duration > 0) {
                    this.transitionT = setTimeout(this.entered.bind(this), duration + 30);
                }
            },
            entered() {
                this.customDuration = false;
                clearTimeout(this.transitionT);
                this.status = 'entered';
                this.setData({
                    transitionClass: '',
                });
            },
            leave() {
                const { name } = this.data;
                const [, duration] = this.durations;
                this.status = 'leaving';
                this.setData({
                    transitionClass: `${prefix}-${name}-leave  ${prefix}-${name}-leave-active`,
                });
                clearTimeout(this.transitionT);
                setTimeout(() => {
                    this.setData({
                        transitionClass: `${prefix}-${name}-leave-active ${prefix}-${name}-leave-to`,
                    });
                }, 30);
                if (typeof duration === 'number' && duration > 0) {
                    this.customDuration = true;
                    this.transitionT = setTimeout(this.leaved.bind(this), duration + 30);
                }
            },
            leaved() {
                this.customDuration = false;
                this.triggerEvent('leaved');
                clearTimeout(this.transitionT);
                this.status = 'leaved';
                this.setData({
                    transitionClass: '',
                });
            },
            onTransitionEnd() {
                if (this.customDuration) {
                    return;
                }
                clearTimeout(this.transitionT);
                if (this.status === 'entering' && this.data.visible) {
                    this.entered();
                }
                else if (this.status === 'leaving' && !this.data.visible) {
                    this.leaved();
                    this.setData({
                        realVisible: false,
                    });
                }
            },
        },
    });
}


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/popup/props.js":
/*!***************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/popup/props.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const props = {
    closeBtn: {
        type: Boolean,
    },
    closeOnOverlayClick: {
        type: Boolean,
        value: true,
    },
    content: {
        type: String,
    },
    duration: {
        type: Number,
        value: 240,
    },
    externalClasses: {
        type: Array,
    },
    overlayProps: {
        type: Object,
        value: {},
    },
    placement: {
        type: String,
        value: 'top',
    },
    preventScrollThrough: {
        type: Boolean,
        value: true,
    },
    showOverlay: {
        type: Boolean,
        value: true,
    },
    transitionProps: {
        type: Object,
    },
    visible: {
        type: Boolean,
        value: null,
    },
    defaultVisible: {
        type: Boolean,
        value: false,
    },
    zIndex: {
        type: Number,
        value: 11500,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/radio-group/props.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/radio-group/props.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const props = {
    placement: {
        type: String,
        value: 'left',
    },
    borderless: {
        type: Boolean,
        value: false,
    },
    disabled: {
        type: Boolean,
        value: undefined,
    },
    icon: {
        type: null,
        value: 'circle',
    },
    keys: {
        type: Object,
    },
    name: {
        type: String,
        value: '',
    },
    options: {
        type: Array,
    },
    value: {
        type: null,
        value: null,
    },
    defaultValue: {
        type: null,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/radio/props.js":
/*!***************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/radio/props.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const props = {
    placement: {
        type: String,
        value: null,
    },
    allowUncheck: {
        type: Boolean,
        value: false,
    },
    block: {
        type: Boolean,
        value: true,
    },
    checked: {
        type: Boolean,
        value: null,
    },
    defaultChecked: {
        type: Boolean,
        value: false,
    },
    content: {
        type: String,
    },
    contentDisabled: {
        type: Boolean,
        value: false,
    },
    readonly: {
        type: Boolean,
        value: false,
    },
    disabled: {
        type: Boolean,
        value: undefined,
    },
    externalClasses: {
        type: Array,
    },
    icon: {
        type: null,
        value: 'circle',
    },
    label: {
        type: String,
    },
    maxContentRow: {
        type: Number,
        value: 5,
    },
    maxLabelRow: {
        type: Number,
        value: 3,
    },
    name: {
        type: String,
        value: '',
    },
    value: {
        type: null,
        value: false,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/search/props.js":
/*!****************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/search/props.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const props = {
    action: {
        type: String,
        value: '',
    },
    center: {
        type: Boolean,
        value: false,
    },
    disabled: {
        type: Boolean,
        value: false,
    },
    externalClasses: {
        type: Array,
    },
    cursorSpacing: {
        type: Number,
        value: 0,
    },
    focus: {
        type: Boolean,
        value: false,
    },
    label: {
        type: String,
        value: '',
    },
    maxcharacter: {
        type: Number,
    },
    maxlength: {
        type: Number,
        value: -1,
    },
    confirmType: {
        type: String,
        value: 'search',
    },
    alwaysEmbed: {
        type: Boolean,
        value: false,
    },
    confirmHold: {
        type: Boolean,
        value: false,
    },
    cursor: {
        type: Number,
    },
    selectionStart: {
        type: Number,
        value: -1,
    },
    selectionEnd: {
        type: Number,
        value: -1,
    },
    adjustPosition: {
        type: Boolean,
        value: true,
    },
    holdKeyboard: {
        type: Boolean,
        value: false,
    },
    placeholderStyle: {
        type: String,
        value: '',
    },
    placeholderClass: {
        type: String,
        value: '',
    },
    leftIcon: {
        type: String,
        value: 'search',
    },
    placeholder: {
        type: String,
        value: '',
    },
    rightIcon: {
        type: String,
        value: 'close-circle-filled',
    },
    shape: {
        type: String,
        value: 'square',
    },
    value: {
        type: String,
        value: '',
    },
    clearable: {
        type: Boolean,
        value: true,
    },
    type: {
        type: String,
        value: 'text',
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/sticky/props.js":
/*!****************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/sticky/props.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const props = {
    container: {
        type: null,
    },
    disabled: {
        type: Boolean,
        value: false,
    },
    externalClasses: {
        type: Array,
    },
    offsetTop: {
        type: Number,
        value: 0,
    },
    zIndex: {
        type: Number,
        value: 99,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/swiper/props.js":
/*!****************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/swiper/props.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const props = {
    autoplay: {
        type: Boolean,
        value: true,
    },
    current: {
        type: Number,
        value: 0,
    },
    direction: {
        type: String,
        value: 'horizontal',
    },
    displayMultipleItems: {
        type: Number,
        value: 1,
    },
    duration: {
        type: Number,
        value: 300,
    },
    easingFunction: {
        type: String,
        value: 'default',
    },
    height: {
        type: null,
        value: 192,
    },
    imageProps: {
        type: Object,
    },
    interval: {
        type: Number,
        value: 5000,
    },
    list: {
        type: Array,
    },
    loop: {
        type: Boolean,
        value: true,
    },
    navigation: {
        type: null,
        value: true,
    },
    nextMargin: {
        type: null,
        value: 0,
    },
    paginationPosition: {
        type: String,
        value: 'bottom',
    },
    previousMargin: {
        type: null,
        value: 0,
    },
    snapToEdge: {
        type: Boolean,
        value: false,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/tab-bar-item/props.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/tab-bar-item/props.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const props = {
    badgeProps: {
        type: Object,
    },
    icon: {
        type: null,
    },
    subTabBar: {
        type: Array,
    },
    value: {
        type: null,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/tab-bar/props.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/tab-bar/props.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const props = {
    bordered: {
        type: Boolean,
        value: true,
    },
    externalClasses: {
        type: Array,
    },
    fixed: {
        type: Boolean,
        value: true,
    },
    safeAreaInsetBottom: {
        type: Boolean,
        value: true,
    },
    shape: {
        type: String,
        value: 'normal',
    },
    split: {
        type: Boolean,
        value: true,
    },
    theme: {
        type: String,
        value: 'normal',
    },
    value: {
        type: null,
        value: null,
    },
    defaultValue: {
        type: null,
        value: null,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/tab-panel/props.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/tab-panel/props.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const props = {
    badgeProps: {
        type: Object,
        value: null,
    },
    destroyOnHide: {
        type: Boolean,
        value: true,
    },
    disabled: {
        type: Boolean,
        value: false,
    },
    icon: {
        type: null,
    },
    label: {
        type: String,
        value: '',
    },
    panel: {
        type: String,
    },
    value: {
        type: null,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/tabs/props.js":
/*!**************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/tabs/props.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const props = {
    animation: {
        type: Object,
    },
    externalClasses: {
        type: Array,
    },
    showBottomLine: {
        type: Boolean,
        value: true,
    },
    spaceEvenly: {
        type: Boolean,
        value: true,
    },
    split: {
        type: Boolean,
        value: true,
    },
    sticky: {
        type: Boolean,
        value: false,
    },
    stickyProps: {
        type: Object,
    },
    swipeable: {
        type: Boolean,
        value: true,
    },
    theme: {
        type: String,
        value: 'line',
    },
    value: {
        type: null,
        value: null,
    },
    defaultValue: {
        type: null,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tdesign-miniprogram/miniprogram_dist/toast/index.js":
/*!***************************************************************************!*\
  !*** ../node_modules/tdesign-miniprogram/miniprogram_dist/toast/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Toast; }
/* harmony export */ });
/* unused harmony exports showToast, hideToast */
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utils */ "../node_modules/tdesign-miniprogram/miniprogram_dist/common/utils.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
    const { context, selector = '#t-toast' } = options, Options = __rest(options, ["context", "selector"]);
    const instance = (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.getInstance)(context, selector);
    if (instance) {
        instance.show(Object.assign(Object.assign({}, Options), { duration: (_a = Options.duration) !== null && _a !== void 0 ? _a : 2000 }));
    }
}
function showToast(options = {}) {
    Toast(options);
}
function hideToast(options = {}) {
    const { context, selector = '#t-toast' } = options;
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

const props = {
    direction: {
        type: String,
        value: 'row',
    },
    duration: {
        type: Number,
        value: 2000,
    },
    externalClasses: {
        type: Array,
    },
    icon: {
        type: null,
    },
    message: {
        type: String,
    },
    overlayProps: {
        type: Object,
        value: {},
    },
    placement: {
        type: String,
        value: 'middle',
    },
    preventScrollThrough: {
        type: Boolean,
        value: false,
    },
    showOverlay: {
        type: Boolean,
        value: false,
    },
    theme: {
        type: String,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (props);


/***/ }),

/***/ "../node_modules/tslib/tslib.es6.mjs":
/*!*******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.mjs ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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