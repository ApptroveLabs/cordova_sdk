'use strict';

var tslib = require('tslib');
var core = require('@awesome-cordova-plugins/core');
var i0 = require('@angular/core');
require('rxjs');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

exports.AppTroveEnvironment = void 0;
(function (AppTroveEnvironment) {
    AppTroveEnvironment["Development"] = "development";
    AppTroveEnvironment["Production"] = "production";
    AppTroveEnvironment["Testing"] = "testing";
})(exports.AppTroveEnvironment || (exports.AppTroveEnvironment = {}));
exports.AppTroveRegion = void 0;
(function (AppTroveRegion) {
    AppTroveRegion["IN"] = "IN";
    AppTroveRegion["GLOBAL"] = "GLOBAL";
    AppTroveRegion["NONE"] = "NONE";
})(exports.AppTroveRegion || (exports.AppTroveRegion = {}));
exports.AppTroveEncryptionType = void 0;
(function (AppTroveEncryptionType) {
    AppTroveEncryptionType["AES_GCM"] = "AES_GCM";
})(exports.AppTroveEncryptionType || (exports.AppTroveEncryptionType = {}));
var AppTroveConfig = /** @class */ (function () {
    function AppTroveConfig(appToken, environment) {
        this.secretId = '';
        this.secretKey = '';
        this.manualMode = false;
        this.disableOrganic = false;
        this.facebookAppId = '';
        this.androidId = '';
        this.attributionParams = {};
        this.region = '';
        this.appId = '';
        this.encryptionKey = '';
        this.encryptionType = '';
        this.appToken = appToken;
        this.environment = environment;
        this.secretId = this.secretId;
        this.secretKey = this.secretKey;
        this.manualMode = this.manualMode;
        this.disableOrganic = this.disableOrganic;
        this.androidId = this.androidId;
        this.facebookAppId = this.facebookAppId;
    }
    AppTroveConfig.prototype.setAppSecret = function (key, value) {
        this.secretId = key;
        this.secretKey = value;
    };
    AppTroveConfig.prototype.setManualMode = function (value) {
        this.manualMode = value;
    };
    AppTroveConfig.prototype.disableOrganicTracking = function (value) {
        this.disableOrganic = value;
    };
    AppTroveConfig.prototype.setAttributionParams = function (params) {
        this.attributionParams = tslib.__assign(tslib.__assign({}, this.attributionParams), params);
    };
    AppTroveConfig.prototype.setFacebookAppId = function (value) {
        this.facebookAppId = value;
    };
    AppTroveConfig.prototype.setAndroidId = function (value) {
        this.androidId = value;
    };
    AppTroveConfig.prototype.setRegion = function (region) {
        this.region = region;
    };
    AppTroveConfig.prototype.setAppID = function (value) {
        this.appId = value;
    };
    AppTroveConfig.prototype.setEncryptionKey = function (value) {
        this.encryptionKey = value;
    };
    AppTroveConfig.prototype.setEncryptionType = function (value) {
        this.encryptionType = value;
    };
    return AppTroveConfig;
}());
var AppTroveEvent = /** @class */ (function () {
    function AppTroveEvent(eventId) {
        this.eventId = eventId;
    }
    AppTroveEvent.prototype.setOrderId = function (orderId) {
        this.orderId = orderId;
    };
    AppTroveEvent.prototype.setProductId = function (productId) {
        this.productId = productId;
    };
    AppTroveEvent.prototype.setCurrency = function (currency) {
        this.currency = currency;
    };
    AppTroveEvent.prototype.setCouponCode = function (couponCode) {
        this.couponCode = couponCode;
    };
    AppTroveEvent.prototype.setDiscount = function (discount) {
        this.discount = discount;
    };
    AppTroveEvent.prototype.setParam1 = function (param1) {
        this.param1 = param1;
    };
    AppTroveEvent.prototype.setParam2 = function (param2) {
        this.param2 = param2;
    };
    AppTroveEvent.prototype.setParam3 = function (param3) {
        this.param3 = param3;
    };
    AppTroveEvent.prototype.setParam4 = function (param4) {
        this.param4 = param4;
    };
    AppTroveEvent.prototype.setParam5 = function (param5) {
        this.param5 = param5;
    };
    AppTroveEvent.prototype.setParam6 = function (param6) {
        this.param6 = param6;
    };
    AppTroveEvent.prototype.setParam7 = function (param7) {
        this.param7 = param7;
    };
    AppTroveEvent.prototype.setParam8 = function (param8) {
        this.param8 = param8;
    };
    AppTroveEvent.prototype.setParam9 = function (param9) {
        this.param9 = param9;
    };
    AppTroveEvent.prototype.setParam10 = function (param10) {
        this.param10 = param10;
    };
    AppTroveEvent.prototype.setRevenue = function (revenue) {
        this.revenue = revenue;
    };
    return AppTroveEvent;
}());
var AppTroveCordovaPlugin = /** @class */ (function (_super) {
    tslib.__extends(AppTroveCordovaPlugin, _super);
    function AppTroveCordovaPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppTroveCordovaPlugin.prototype.initializeSDK = function (config) { return core.cordova(this, "initializeSDK", {}, arguments); };
    AppTroveCordovaPlugin.prototype.trackEvent = function (event) { return core.cordova(this, "trackEvent", {}, arguments); };
    AppTroveCordovaPlugin.prototype.setUserId = function (userId) { return core.cordova(this, "setUserId", {}, arguments); };
    AppTroveCordovaPlugin.prototype.setUserEmail = function (userEmail) { return core.cordova(this, "setUserEmail", {}, arguments); };
    AppTroveCordovaPlugin.prototype.setUserName = function (userName) { return core.cordova(this, "setUserName", {}, arguments); };
    AppTroveCordovaPlugin.prototype.setUserPhone = function (userPhone) { return core.cordova(this, "setUserPhone", {}, arguments); };
    AppTroveCordovaPlugin.prototype.setDOB = function (dob) { return core.cordova(this, "setDOB", {}, arguments); };
    AppTroveCordovaPlugin.prototype.setGender = function (gender) { return core.cordova(this, "setGender", {}, arguments); };
    AppTroveCordovaPlugin.prototype.parseDeepLink = function (uri) { return core.cordova(this, "parseDeepLink", {}, arguments); };
    AppTroveCordovaPlugin.prototype.fireInstall = function () { return core.cordova(this, "fireInstall", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getAppTroveId = function () { return core.cordova(this, "getAppTroveId", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getAd = function () { return core.cordova(this, "getAd", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getAdID = function () { return core.cordova(this, "getAdID", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getCampaign = function () { return core.cordova(this, "getCampaign", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getCampaignID = function () { return core.cordova(this, "getCampaignID", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getAdSet = function () { return core.cordova(this, "getAdSet", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getAdSetID = function () { return core.cordova(this, "getAdSetID", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getChannel = function () { return core.cordova(this, "getChannel", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getP1 = function () { return core.cordova(this, "getP1", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getP2 = function () { return core.cordova(this, "getP2", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getP3 = function () { return core.cordova(this, "getP3", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getP4 = function () { return core.cordova(this, "getP4", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getP5 = function () { return core.cordova(this, "getP5", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getClickId = function () { return core.cordova(this, "getClickId", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getDlv = function () { return core.cordova(this, "getDlv", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getPid = function () { return core.cordova(this, "getPid", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getIsRetargeting = function () { return core.cordova(this, "getIsRetargeting", {}, arguments); };
    AppTroveCordovaPlugin.prototype.updateAppleAdsToken = function (token) { return core.cordova(this, "updateAppleAdsToken", {}, arguments); };
    AppTroveCordovaPlugin.prototype.createDynamicLink = function (value) { return core.cordova(this, "createDynamicLink", {}, arguments); };
    AppTroveCordovaPlugin.prototype.setMacAddress = function (value) { return core.cordova(this, "setMacAddress", {}, arguments); };
    AppTroveCordovaPlugin.prototype.setIMEI = function (value) { return core.cordova(this, "setIMEI", {}, arguments); };
    AppTroveCordovaPlugin.prototype.resolveDeeplinkUrl = function (url) { return core.cordova(this, "resolveDeeplinkUrl", {}, arguments); };
    AppTroveCordovaPlugin.prototype.sendFcmToken = function (token) { return core.cordova(this, "sendFcmToken", {}, arguments); };
    AppTroveCordovaPlugin.prototype.sendAPNToken = function (token) { return core.cordova(this, "sendAPNToken", {}, arguments); };
    AppTroveCordovaPlugin.prototype.subscribeAttributionlink = function () { return core.cordova(this, "subscribeAttributionlink", {}, arguments); };
    AppTroveCordovaPlugin.prototype.updatePostbackConversion = function (conversionValue) { return core.cordova(this, "updatePostbackConversion", {}, arguments); };
    AppTroveCordovaPlugin.prototype.waitForATTUserAuthorization = function (timeoutInterval) { return core.cordova(this, "waitForATTUserAuthorization", {}, arguments); };
    AppTroveCordovaPlugin.prototype.setDeferredDeeplinkCallbackListener = function () { return core.cordova(this, "setDeferredDeeplinkCallbackListener", { "observable": true }, arguments); };
    AppTroveCordovaPlugin.prototype.storeRetargetting = function (dob) { return core.cordova(this, "storeRetargetting", {}, arguments); };
    AppTroveCordovaPlugin.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppTroveCordovaPlugin, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AppTroveCordovaPlugin.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppTroveCordovaPlugin });
    AppTroveCordovaPlugin.pluginName = "AppTroveCordovaPlugin";
    AppTroveCordovaPlugin.plugin = "com.apptrove.cordova_sdk";
    AppTroveCordovaPlugin.pluginRef = "cordova.plugins.AppTroveCordovaPlugin";
    AppTroveCordovaPlugin.repo = "https://github.com/ApptroveLabs/cordova_sdk";
    AppTroveCordovaPlugin.platforms = ["Android", "iOS"];
    AppTroveCordovaPlugin = tslib.__decorate([], AppTroveCordovaPlugin);
    return AppTroveCordovaPlugin;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppTroveCordovaPlugin, decorators: [{
            type: i0.Injectable
        }], propDecorators: { initializeSDK: [], trackEvent: [], setUserId: [], setUserEmail: [], setUserName: [], setUserPhone: [], setDOB: [], setGender: [], parseDeepLink: [], fireInstall: [], getAppTroveId: [], getAd: [], getAdID: [], getCampaign: [], getCampaignID: [], getAdSet: [], getAdSetID: [], getChannel: [], getP1: [], getP2: [], getP3: [], getP4: [], getP5: [], getClickId: [], getDlv: [], getPid: [], getIsRetargeting: [], updateAppleAdsToken: [], createDynamicLink: [], setMacAddress: [], setIMEI: [], resolveDeeplinkUrl: [], sendFcmToken: [], sendAPNToken: [], subscribeAttributionlink: [], updatePostbackConversion: [], waitForATTUserAuthorization: [], setDeferredDeeplinkCallbackListener: [], storeRetargetting: [] } });

exports.AppTroveConfig = AppTroveConfig;
exports.AppTroveCordovaPlugin = AppTroveCordovaPlugin;
exports.AppTroveEvent = AppTroveEvent;
