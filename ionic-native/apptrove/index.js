var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
export var AppTroveEnvironment;
(function (AppTroveEnvironment) {
    AppTroveEnvironment["Development"] = "development";
    AppTroveEnvironment["Production"] = "production";
    AppTroveEnvironment["Testing"] = "testing";
})(AppTroveEnvironment || (AppTroveEnvironment = {}));
export var AppTroveRegion;
(function (AppTroveRegion) {
    AppTroveRegion["IN"] = "IN";
    AppTroveRegion["GLOBAL"] = "GLOBAL";
    AppTroveRegion["NONE"] = "NONE";
})(AppTroveRegion || (AppTroveRegion = {}));
export var AppTroveEncryptionType;
(function (AppTroveEncryptionType) {
    AppTroveEncryptionType["AES_GCM"] = "AES_GCM";
})(AppTroveEncryptionType || (AppTroveEncryptionType = {}));
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
        this.attributionParams = __assign(__assign({}, this.attributionParams), params);
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
export { AppTroveConfig };
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
export { AppTroveEvent };
var AppTroveCordovaPluginOriginal = /** @class */ (function (_super) {
    __extends(AppTroveCordovaPluginOriginal, _super);
    function AppTroveCordovaPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppTroveCordovaPluginOriginal.prototype.initializeSDK = function (config) { return cordova(this, "initializeSDK", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.trackEvent = function (event) { return cordova(this, "trackEvent", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.setUserId = function (userId) { return cordova(this, "setUserId", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.setUserEmail = function (userEmail) { return cordova(this, "setUserEmail", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.setUserName = function (userName) { return cordova(this, "setUserName", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.setUserPhone = function (userPhone) { return cordova(this, "setUserPhone", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.setDOB = function (dob) { return cordova(this, "setDOB", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.setGender = function (gender) { return cordova(this, "setGender", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.parseDeepLink = function (uri) { return cordova(this, "parseDeepLink", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.fireInstall = function () { return cordova(this, "fireInstall", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.getAppTroveId = function () { return cordova(this, "getAppTroveId", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.getAd = function () { return cordova(this, "getAd", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.getAdID = function () { return cordova(this, "getAdID", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.getCampaign = function () { return cordova(this, "getCampaign", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.getCampaignID = function () { return cordova(this, "getCampaignID", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.getAdSet = function () { return cordova(this, "getAdSet", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.getAdSetID = function () { return cordova(this, "getAdSetID", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.getChannel = function () { return cordova(this, "getChannel", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.getP1 = function () { return cordova(this, "getP1", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.getP2 = function () { return cordova(this, "getP2", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.getP3 = function () { return cordova(this, "getP3", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.getP4 = function () { return cordova(this, "getP4", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.getP5 = function () { return cordova(this, "getP5", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.getClickId = function () { return cordova(this, "getClickId", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.getDlv = function () { return cordova(this, "getDlv", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.getPid = function () { return cordova(this, "getPid", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.getIsRetargeting = function () { return cordova(this, "getIsRetargeting", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.updateAppleAdsToken = function (token) { return cordova(this, "updateAppleAdsToken", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.createDynamicLink = function (value) { return cordova(this, "createDynamicLink", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.setMacAddress = function (value) { return cordova(this, "setMacAddress", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.setIMEI = function (value) { return cordova(this, "setIMEI", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.resolveDeeplinkUrl = function (url) { return cordova(this, "resolveDeeplinkUrl", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.sendFcmToken = function (token) { return cordova(this, "sendFcmToken", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.subscribeAttributionlink = function () { return cordova(this, "subscribeAttributionlink", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.updatePostbackConversion = function (conversionValue) { return cordova(this, "updatePostbackConversion", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.waitForATTUserAuthorization = function (timeoutInterval) { return cordova(this, "waitForATTUserAuthorization", {}, arguments); };
    AppTroveCordovaPluginOriginal.prototype.setDeferredDeeplinkCallbackListener = function () { return cordova(this, "setDeferredDeeplinkCallbackListener", { "observable": true }, arguments); };
    AppTroveCordovaPluginOriginal.prototype.storeRetargetting = function (dob) { return cordova(this, "storeRetargetting", {}, arguments); };
    AppTroveCordovaPluginOriginal.pluginName = "AppTroveCordovaPlugin";
    AppTroveCordovaPluginOriginal.plugin = "com.apptrove.cordova_sdk";
    AppTroveCordovaPluginOriginal.pluginRef = "cordova.plugins.AppTroveCordovaPlugin";
    AppTroveCordovaPluginOriginal.repo = "https://github.com/ApptroveLabs/cordova_sdk";
    AppTroveCordovaPluginOriginal.platforms = ["Android", "iOS"];
    return AppTroveCordovaPluginOriginal;
}(AwesomeCordovaNativePlugin));
var AppTroveCordovaPlugin = new AppTroveCordovaPluginOriginal();
export { AppTroveCordovaPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwdHJvdmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLHVDQUE4QixNQUFNLCtCQUErQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHbEMsTUFBTSxDQUFOLElBQVksbUJBSVg7QUFKRCxXQUFZLG1CQUFtQjtJQUM5QixrREFBMkIsQ0FBQTtJQUMzQixnREFBeUIsQ0FBQTtJQUN6QiwwQ0FBbUIsQ0FBQTtBQUNwQixDQUFDLEVBSlcsbUJBQW1CLEtBQW5CLG1CQUFtQixRQUk5QjtBQUVELE1BQU0sQ0FBTixJQUFZLGNBSVg7QUFKRCxXQUFZLGNBQWM7SUFDekIsMkJBQVMsQ0FBQTtJQUNULG1DQUFpQixDQUFBO0lBQ2pCLCtCQUFhLENBQUE7QUFDZCxDQUFDLEVBSlcsY0FBYyxLQUFkLGNBQWMsUUFJekI7QUFFRCxNQUFNLENBQU4sSUFBWSxzQkFFWDtBQUZELFdBQVksc0JBQXNCO0lBQ2pDLDZDQUFtQixDQUFBO0FBQ3BCLENBQUMsRUFGVyxzQkFBc0IsS0FBdEIsc0JBQXNCLFFBRWpDOztJQWlCQSx3QkFBWSxRQUFnQixFQUFFLFdBQWdDO1FBWnRELGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsc0JBQWlCLEdBQThCLEVBQUUsQ0FBQztRQUNsRCxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsa0JB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QUtmLHlDQUFTLGFBQUMsTUFBVztJQUtyQiw2Q0FBYSxhQUFDLEdBQVE7SUFLdEIsMkNBQVc7SUFLWCw2Q0FBYTtJQUtiLHFDQUFLO0lBS0wsdUNBQU87SUFLUCwyQ0FBVztJQUtYLDZDQUFhO0lBS2Isd0NBQVE7SUFLUiwwQ0FBVTtJQUtWLDBDQUFVO0lBS1YscUNBQUs7SUFLTCxxQ0FBSztJQUtMLHFDQUFLO0lBS0wscUNBQUs7SUFLTCxxQ0FBSztJQUtMLDBDQUFVO0lBS1Ysc0NBQU07SUFLTixzQ0FBTTtJQUtOLGdEQUFnQjtJQUtoQixtREFBbUIsYUFBQyxLQUFVO0lBSzlCLGlEQUFpQixhQUFDLEtBQVU7SUFLNUIsNkNBQWEsYUFBQyxLQUFVO0lBS3hCLHVDQUFPLGFBQUMsS0FBVTtJQUtsQixrREFBa0IsYUFBQyxHQUFXO0lBUzlCLDRDQUFZLGFBQUMsS0FBYTtJQUsxQix3REFBd0I7SUFLeEIsd0RBQXdCLGFBQUMsZUFBdUI7SUFLaEQsMkRBQTJCLGFBQUMsZUFBdUI7SUFPakQsbUVBQW1DO0lBa0JyQyxpREFBaUIsYUFBQyxHQUFROzs7Ozs7Z0NBalkzQjtFQWlMMkMsMEJBQTBCO1NBQXhELHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBlbnVtIEFwcFRyb3ZlRW52aXJvbm1lbnQge1xuXHREZXZlbG9wbWVudCA9ICdkZXZlbG9wbWVudCcsXG5cdFByb2R1Y3Rpb24gPSAncHJvZHVjdGlvbicsXG5cdFRlc3RpbmcgPSAndGVzdGluZycsXG59XG5cbmV4cG9ydCBlbnVtIEFwcFRyb3ZlUmVnaW9uIHtcblx0SU4gPSAnSU4nLFxuXHRHTE9CQUwgPSAnR0xPQkFMJyxcblx0Tk9ORSA9ICdOT05FJ1xufVxuXG5leHBvcnQgZW51bSBBcHBUcm92ZUVuY3J5cHRpb25UeXBlIHtcblx0QUVTX0dDTSA9ICdBRVNfR0NNJ1xufVxuXG5leHBvcnQgY2xhc3MgQXBwVHJvdmVDb25maWcge1xuXHRwcml2YXRlIGFwcFRva2VuOiBzdHJpbmc7XG5cdHByaXZhdGUgZW52aXJvbm1lbnQ6IEFwcFRyb3ZlRW52aXJvbm1lbnQ7XG5cdHByaXZhdGUgc2VjcmV0SWQ6IHN0cmluZyA9ICcnO1xuXHRwcml2YXRlIHNlY3JldEtleTogc3RyaW5nID0gJyc7XG5cdHByaXZhdGUgbWFudWFsTW9kZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIGRpc2FibGVPcmdhbmljOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgZmFjZWJvb2tBcHBJZDogc3RyaW5nID0gJyc7XG5cdHByaXZhdGUgYW5kcm9pZElkOiBzdHJpbmcgPSAnJztcblx0cHJpdmF0ZSBhdHRyaWJ1dGlvblBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXHRwcml2YXRlIHJlZ2lvbjogc3RyaW5nID0gJyc7XG5cdHByaXZhdGUgYXBwSWQ6IHN0cmluZyA9ICcnO1xuXHRwcml2YXRlIGVuY3J5cHRpb25LZXk6IHN0cmluZyA9ICcnO1xuXHRwcml2YXRlIGVuY3J5cHRpb25UeXBlOiBBcHBUcm92ZUVuY3J5cHRpb25UeXBlIHwgc3RyaW5nID0gJyc7XG5cdFxuXHRjb25zdHJ1Y3RvcihhcHBUb2tlbjogc3RyaW5nLCBlbnZpcm9ubWVudDogQXBwVHJvdmVFbnZpcm9ubWVudCkge1xuXHRcdHRoaXMuYXBwVG9rZW4gPSBhcHBUb2tlbjtcblx0XHR0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG5cdFx0dGhpcy5zZWNyZXRJZCA9IHRoaXMuc2VjcmV0SWQ7XG5cdFx0dGhpcy5zZWNyZXRLZXkgPSB0aGlzLnNlY3JldEtleTtcblx0XHR0aGlzLm1hbnVhbE1vZGUgPSB0aGlzLm1hbnVhbE1vZGU7XG5cdFx0dGhpcy5kaXNhYmxlT3JnYW5pYyA9IHRoaXMuZGlzYWJsZU9yZ2FuaWM7XG5cdFx0dGhpcy5hbmRyb2lkSWQgPSB0aGlzLmFuZHJvaWRJZDtcblx0XHR0aGlzLmZhY2Vib29rQXBwSWQgPSB0aGlzLmZhY2Vib29rQXBwSWQ7XG5cdH1cblxuXHRwdWJsaWMgc2V0QXBwU2VjcmV0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zZWNyZXRJZCA9IGtleTtcblx0XHR0aGlzLnNlY3JldEtleSA9IHZhbHVlO1xuXHR9XG5cblx0cHVibGljIHNldE1hbnVhbE1vZGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLm1hbnVhbE1vZGUgPSB2YWx1ZVxuXHR9XG5cblx0cHVibGljIGRpc2FibGVPcmdhbmljVHJhY2tpbmcodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmRpc2FibGVPcmdhbmljID0gdmFsdWVcblx0fVxuXG5cdHB1YmxpYyBzZXRBdHRyaWJ1dGlvblBhcmFtcyhwYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiB2b2lkIHtcblx0XHR0aGlzLmF0dHJpYnV0aW9uUGFyYW1zID0geyAuLi50aGlzLmF0dHJpYnV0aW9uUGFyYW1zLCAuLi5wYXJhbXMgfTtcblx0fSBcblxuXHRwdWJsaWMgc2V0RmFjZWJvb2tBcHBJZCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5mYWNlYm9va0FwcElkID0gdmFsdWU7XG5cdH1cblxuXHRwdWJsaWMgc2V0QW5kcm9pZElkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmFuZHJvaWRJZCA9IHZhbHVlO1xuXHR9XG5cblx0cHVibGljIHNldFJlZ2lvbihyZWdpb246IEFwcFRyb3ZlUmVnaW9uKTogdm9pZCB7XG5cdFx0dGhpcy5yZWdpb24gPSByZWdpb247XG5cdH1cblxuXHRwdWJsaWMgc2V0QXBwSUQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuYXBwSWQgPSB2YWx1ZTtcblx0fVxuXG5cdHB1YmxpYyBzZXRFbmNyeXB0aW9uS2V5KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmVuY3J5cHRpb25LZXkgPSB2YWx1ZTtcblx0fVxuXG5cdHB1YmxpYyBzZXRFbmNyeXB0aW9uVHlwZSh2YWx1ZTogQXBwVHJvdmVFbmNyeXB0aW9uVHlwZSB8IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuZW5jcnlwdGlvblR5cGUgPSB2YWx1ZTtcblx0fVxuXG59XG5cbmV4cG9ydCBjbGFzcyBBcHBUcm92ZUV2ZW50IHtcblxuXHRwcml2YXRlIGV2ZW50SWQ6IHN0cmluZztcblx0cHJpdmF0ZSBvcmRlcklkOiBzdHJpbmc7XG5cdHByaXZhdGUgcHJvZHVjdElkOiBzdHJpbmc7XG5cdHByaXZhdGUgY3VycmVuY3k6IHN0cmluZztcblx0cHJpdmF0ZSBjb3Vwb25Db2RlOiBzdHJpbmc7XG5cdHByaXZhdGUgZGlzY291bnQ6IG51bWJlclxuXHRwcml2YXRlIHBhcmFtMTogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtMjogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtMzogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtNDogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtNTogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtNjogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtNzogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtODogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtOTogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtMTA6IHN0cmluZztcblx0cHJpdmF0ZSByZXZlbnVlOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoZXZlbnRJZDogc3RyaW5nKSB7XG5cdFx0dGhpcy5ldmVudElkID0gZXZlbnRJZDtcblx0fVxuXG5cdHB1YmxpYyBzZXRPcmRlcklkKG9yZGVySWQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMub3JkZXJJZCA9IG9yZGVySWQ7XG5cdH1cblx0cHVibGljIHNldFByb2R1Y3RJZChwcm9kdWN0SWQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucHJvZHVjdElkID0gcHJvZHVjdElkO1xuXHR9XG5cdHB1YmxpYyBzZXRDdXJyZW5jeShjdXJyZW5jeTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuXHR9XG5cdHB1YmxpYyBzZXRDb3Vwb25Db2RlKGNvdXBvbkNvZGU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuY291cG9uQ29kZSA9IGNvdXBvbkNvZGU7XG5cdH1cblx0cHVibGljIHNldERpc2NvdW50KGRpc2NvdW50OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmRpc2NvdW50ID0gZGlzY291bnQ7XG5cdH1cblx0cHVibGljIHNldFBhcmFtMShwYXJhbTE6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW0xID0gcGFyYW0xO1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTIocGFyYW0yOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtMiA9IHBhcmFtMjtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW0zKHBhcmFtMzogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTMgPSBwYXJhbTM7XG5cdH1cblx0cHVibGljIHNldFBhcmFtNChwYXJhbTQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW00ID0gcGFyYW00O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTUocGFyYW01OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtNSA9IHBhcmFtNTtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW02KHBhcmFtNjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTYgPSBwYXJhbTY7XG5cdH1cblx0cHVibGljIHNldFBhcmFtNyhwYXJhbTc6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW03ID0gcGFyYW03O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTgocGFyYW04OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtOCA9IHBhcmFtODtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW05KHBhcmFtOTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTkgPSBwYXJhbTk7XG5cdH1cblx0cHVibGljIHNldFBhcmFtMTAocGFyYW0xMDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTEwID0gcGFyYW0xMDtcblx0fVxuXHRwdWJsaWMgc2V0UmV2ZW51ZShyZXZlbnVlOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnJldmVudWUgPSByZXZlbnVlO1xuXHR9XG5cblx0c2V0RXZlbnRWYWx1ZTogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG59XG5cblxuQFBsdWdpbih7XG5cdHBsdWdpbk5hbWU6ICdBcHBUcm92ZUNvcmRvdmFQbHVnaW4nLFxuXHRwbHVnaW46ICdjb20uYXBwdHJvdmUuY29yZG92YV9zZGsnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcblx0cGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLkFwcFRyb3ZlQ29yZG92YVBsdWdpbicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cblx0cmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9BcHB0cm92ZUxhYnMvY29yZG92YV9zZGsnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG5cdC8vaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuXHQvL2luc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuXHRwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwVHJvdmVDb3Jkb3ZhUGx1Z2luIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuXG5cdEBDb3Jkb3ZhKClcblx0aW5pdGlhbGl6ZVNESyhjb25maWc6IEFwcFRyb3ZlQ29uZmlnKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG4gXG5cdCBcblx0QENvcmRvdmEoKVxuXHR0cmFja0V2ZW50KGV2ZW50OiBBcHBUcm92ZUV2ZW50KTogUHJvbWlzZTxhbnk+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNldFVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRVc2VyRW1haWwodXNlckVtYWlsOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0VXNlck5hbWUodXNlck5hbWU6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRVc2VyUGhvbmUodXNlclBob25lOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0RE9CKGRvYjogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNldEdlbmRlcihnZW5kZXI6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRwYXJzZURlZXBMaW5rKHVyaTogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGZpcmVJbnN0YWxsKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRBcHBUcm92ZUlkKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRBZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0QWRJRCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0Q2FtcGFpZ24oKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldENhbXBhaWduSUQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldEFkU2V0KCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRBZFNldElEKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRDaGFubmVsKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRQMSgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0UDIoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldFAzKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRQNCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0UDUoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldENsaWNrSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldERsdigpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0UGlkKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRJc1JldGFyZ2V0aW5nKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHR1cGRhdGVBcHBsZUFkc1Rva2VuKHRva2VuOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Y3JlYXRlRHluYW1pY0xpbmsodmFsdWU6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRNYWNBZGRyZXNzKHZhbHVlOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0SU1FSSh2YWx1ZTogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHJlc29sdmVEZWVwbGlua1VybCh1cmw6IHN0cmluZyk6IFByb21pc2U8e1xuXHRcdHVybDogc3RyaW5nO1xuXHRcdGRsdjogc3RyaW5nO1xuXHRcdHNka1BhcmFtczogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcblx0fT4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2VuZEZjbVRva2VuKHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c3Vic2NyaWJlQXR0cmlidXRpb25saW5rKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHR1cGRhdGVQb3N0YmFja0NvbnZlcnNpb24oY29udmVyc2lvblZhbHVlOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0d2FpdEZvckFUVFVzZXJBdXRob3JpemF0aW9uKHRpbWVvdXRJbnRlcnZhbDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSh7XG5cdFx0b2JzZXJ2YWJsZTogdHJ1ZSAvLyBUaGlzIGFsbG93cyBjYWxsYmFjay1iYXNlZCBldmVudHNcblx0ICB9KVxuXHQgIHNldERlZmVycmVkRGVlcGxpbmtDYWxsYmFja0xpc3RlbmVyKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuXHRcdCAgY29yZG92YS5leGVjKFxuXHRcdFx0KGRlZXBMaW5rVXJsOiBzdHJpbmcpID0+IHtcblx0XHRcdG9ic2VydmVyLm5leHQoZGVlcExpbmtVcmwpO1xuXHRcdFx0b2JzZXJ2ZXIuY29tcGxldGUoKTtcblx0XHRcdH0sXG5cdFx0XHQoZXJyb3I6IGFueSkgPT4ge1xuXHRcdFx0b2JzZXJ2ZXIuZXJyb3IoZXJyb3IpO1xuXHRcdFx0fSxcblx0XHRcdFwiQXBwVHJvdmVDb3Jkb3ZhUGx1Z2luXCIsXG5cdFx0XHRcImFwcHRyb3ZlX2RlZmVycmVkRGVlcGxpbmtcIixcblx0XHRcdFtdXG5cdFx0ICApO1xuXHRcdH0pO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzdG9yZVJldGFyZ2V0dGluZyhkb2I6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG59Il19