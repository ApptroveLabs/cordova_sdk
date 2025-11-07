import { __assign, __decorate, __extends } from "tslib";
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export var TrackierEnvironment;
(function (TrackierEnvironment) {
    TrackierEnvironment["Development"] = "development";
    TrackierEnvironment["Production"] = "production";
    TrackierEnvironment["Testing"] = "testing";
})(TrackierEnvironment || (TrackierEnvironment = {}));
export var TrackierRegion;
(function (TrackierRegion) {
    TrackierRegion["IN"] = "IN";
    TrackierRegion["GLOBAL"] = "GLOBAL";
    TrackierRegion["NONE"] = "NONE";
})(TrackierRegion || (TrackierRegion = {}));
export var TrackierEncryptionType;
(function (TrackierEncryptionType) {
    TrackierEncryptionType["AES_GCM"] = "AES_GCM";
})(TrackierEncryptionType || (TrackierEncryptionType = {}));
var TrackierConfig = /** @class */ (function () {
    function TrackierConfig(appToken, environment) {
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
    TrackierConfig.prototype.setAppSecret = function (key, value) {
        this.secretId = key;
        this.secretKey = value;
    };
    TrackierConfig.prototype.setManualMode = function (value) {
        this.manualMode = value;
    };
    TrackierConfig.prototype.disableOrganicTracking = function (value) {
        this.disableOrganic = value;
    };
    TrackierConfig.prototype.setAttributionParams = function (params) {
        this.attributionParams = __assign(__assign({}, this.attributionParams), params);
    };
    TrackierConfig.prototype.setFacebookAppId = function (value) {
        this.facebookAppId = value;
    };
    TrackierConfig.prototype.setAndroidId = function (value) {
        this.androidId = value;
    };
    TrackierConfig.prototype.setRegion = function (region) {
        this.region = region;
    };
    TrackierConfig.prototype.setAppID = function (value) {
        this.appId = value;
    };
    TrackierConfig.prototype.setEncryptionKey = function (value) {
        this.encryptionKey = value;
    };
    TrackierConfig.prototype.setEncryptionType = function (value) {
        this.encryptionType = value;
    };
    return TrackierConfig;
}());
export { TrackierConfig };
var TrackierEvent = /** @class */ (function () {
    function TrackierEvent(eventId) {
        this.eventId = eventId;
    }
    TrackierEvent.prototype.setOrderId = function (orderId) {
        this.orderId = orderId;
    };
    TrackierEvent.prototype.setProductId = function (productId) {
        this.productId = productId;
    };
    TrackierEvent.prototype.setCurrency = function (currency) {
        this.currency = currency;
    };
    TrackierEvent.prototype.setCouponCode = function (couponCode) {
        this.couponCode = couponCode;
    };
    TrackierEvent.prototype.setDiscount = function (discount) {
        this.discount = discount;
    };
    TrackierEvent.prototype.setParam1 = function (param1) {
        this.param1 = param1;
    };
    TrackierEvent.prototype.setParam2 = function (param2) {
        this.param2 = param2;
    };
    TrackierEvent.prototype.setParam3 = function (param3) {
        this.param3 = param3;
    };
    TrackierEvent.prototype.setParam4 = function (param4) {
        this.param4 = param4;
    };
    TrackierEvent.prototype.setParam5 = function (param5) {
        this.param5 = param5;
    };
    TrackierEvent.prototype.setParam6 = function (param6) {
        this.param6 = param6;
    };
    TrackierEvent.prototype.setParam7 = function (param7) {
        this.param7 = param7;
    };
    TrackierEvent.prototype.setParam8 = function (param8) {
        this.param8 = param8;
    };
    TrackierEvent.prototype.setParam9 = function (param9) {
        this.param9 = param9;
    };
    TrackierEvent.prototype.setParam10 = function (param10) {
        this.param10 = param10;
    };
    TrackierEvent.prototype.setRevenue = function (revenue) {
        this.revenue = revenue;
    };
    return TrackierEvent;
}());
export { TrackierEvent };
var TrackierCordovaPlugin = /** @class */ (function (_super) {
    __extends(TrackierCordovaPlugin, _super);
    function TrackierCordovaPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrackierCordovaPlugin.prototype.initializeSDK = function (config) { return cordova(this, "initializeSDK", {}, arguments); };
    TrackierCordovaPlugin.prototype.trackEvent = function (event) { return cordova(this, "trackEvent", {}, arguments); };
    TrackierCordovaPlugin.prototype.setUserId = function (userId) { return cordova(this, "setUserId", {}, arguments); };
    TrackierCordovaPlugin.prototype.setUserEmail = function (userEmail) { return cordova(this, "setUserEmail", {}, arguments); };
    TrackierCordovaPlugin.prototype.setUserName = function (userName) { return cordova(this, "setUserName", {}, arguments); };
    TrackierCordovaPlugin.prototype.setUserPhone = function (userPhone) { return cordova(this, "setUserPhone", {}, arguments); };
    TrackierCordovaPlugin.prototype.setDOB = function (dob) { return cordova(this, "setDOB", {}, arguments); };
    TrackierCordovaPlugin.prototype.setGender = function (gender) { return cordova(this, "setGender", {}, arguments); };
    TrackierCordovaPlugin.prototype.parseDeepLink = function (uri) { return cordova(this, "parseDeepLink", {}, arguments); };
    TrackierCordovaPlugin.prototype.fireInstall = function () { return cordova(this, "fireInstall", {}, arguments); };
    TrackierCordovaPlugin.prototype.getTrackierId = function () { return cordova(this, "getTrackierId", {}, arguments); };
    TrackierCordovaPlugin.prototype.getAd = function () { return cordova(this, "getAd", {}, arguments); };
    TrackierCordovaPlugin.prototype.getAdID = function () { return cordova(this, "getAdID", {}, arguments); };
    TrackierCordovaPlugin.prototype.getCampaign = function () { return cordova(this, "getCampaign", {}, arguments); };
    TrackierCordovaPlugin.prototype.getCampaignID = function () { return cordova(this, "getCampaignID", {}, arguments); };
    TrackierCordovaPlugin.prototype.getAdSet = function () { return cordova(this, "getAdSet", {}, arguments); };
    TrackierCordovaPlugin.prototype.getAdSetID = function () { return cordova(this, "getAdSetID", {}, arguments); };
    TrackierCordovaPlugin.prototype.getChannel = function () { return cordova(this, "getChannel", {}, arguments); };
    TrackierCordovaPlugin.prototype.getP1 = function () { return cordova(this, "getP1", {}, arguments); };
    TrackierCordovaPlugin.prototype.getP2 = function () { return cordova(this, "getP2", {}, arguments); };
    TrackierCordovaPlugin.prototype.getP3 = function () { return cordova(this, "getP3", {}, arguments); };
    TrackierCordovaPlugin.prototype.getP4 = function () { return cordova(this, "getP4", {}, arguments); };
    TrackierCordovaPlugin.prototype.getP5 = function () { return cordova(this, "getP5", {}, arguments); };
    TrackierCordovaPlugin.prototype.getClickId = function () { return cordova(this, "getClickId", {}, arguments); };
    TrackierCordovaPlugin.prototype.getDlv = function () { return cordova(this, "getDlv", {}, arguments); };
    TrackierCordovaPlugin.prototype.getPid = function () { return cordova(this, "getPid", {}, arguments); };
    TrackierCordovaPlugin.prototype.getIsRetargeting = function () { return cordova(this, "getIsRetargeting", {}, arguments); };
    TrackierCordovaPlugin.prototype.updateAppleAdsToken = function (token) { return cordova(this, "updateAppleAdsToken", {}, arguments); };
    TrackierCordovaPlugin.prototype.createDynamicLink = function (value) { return cordova(this, "createDynamicLink", {}, arguments); };
    TrackierCordovaPlugin.prototype.setMacAddress = function (value) { return cordova(this, "setMacAddress", {}, arguments); };
    TrackierCordovaPlugin.prototype.setIMEI = function (value) { return cordova(this, "setIMEI", {}, arguments); };
    TrackierCordovaPlugin.prototype.resolveDeeplinkUrl = function (url) { return cordova(this, "resolveDeeplinkUrl", {}, arguments); };
    TrackierCordovaPlugin.prototype.sendFcmToken = function (token) { return cordova(this, "sendFcmToken", {}, arguments); };
    TrackierCordovaPlugin.prototype.subscribeAttributionlink = function () { return cordova(this, "subscribeAttributionlink", {}, arguments); };
    TrackierCordovaPlugin.prototype.updatePostbackConversion = function (conversionValue) { return cordova(this, "updatePostbackConversion", {}, arguments); };
    TrackierCordovaPlugin.prototype.waitForATTUserAuthorization = function (timeoutInterval) { return cordova(this, "waitForATTUserAuthorization", {}, arguments); };
    TrackierCordovaPlugin.prototype.setDeferredDeeplinkCallbackListener = function () { return cordova(this, "setDeferredDeeplinkCallbackListener", { "observable": true }, arguments); };
    TrackierCordovaPlugin.prototype.storeRetargetting = function (dob) { return cordova(this, "storeRetargetting", {}, arguments); };
    TrackierCordovaPlugin.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TrackierCordovaPlugin, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    TrackierCordovaPlugin.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TrackierCordovaPlugin });
    TrackierCordovaPlugin.pluginName = "TrackierCordovaPlugin";
    TrackierCordovaPlugin.plugin = "com.trackier.cordova_sdk";
    TrackierCordovaPlugin.pluginRef = "cordova.plugins.TrackierCordovaPlugin";
    TrackierCordovaPlugin.repo = "https://github.com/trackier/cordova_sdk";
    TrackierCordovaPlugin.platforms = ["Android"];
    TrackierCordovaPlugin = __decorate([], TrackierCordovaPlugin);
    return TrackierCordovaPlugin;
}(AwesomeCordovaNativePlugin));
export { TrackierCordovaPlugin };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TrackierCordovaPlugin, decorators: [{
            type: Injectable
        }], propDecorators: { initializeSDK: [], trackEvent: [], setUserId: [], setUserEmail: [], setUserName: [], setUserPhone: [], setDOB: [], setGender: [], parseDeepLink: [], fireInstall: [], getTrackierId: [], getAd: [], getAdID: [], getCampaign: [], getCampaignID: [], getAdSet: [], getAdSetID: [], getChannel: [], getP1: [], getP2: [], getP3: [], getP4: [], getP5: [], getClickId: [], getDlv: [], getPid: [], getIsRetargeting: [], updateAppleAdsToken: [], createDynamicLink: [], setMacAddress: [], setIMEI: [], resolveDeeplinkUrl: [], sendFcmToken: [], subscribeAttributionlink: [], updatePostbackConversion: [], waitForATTUserAuthorization: [], setDeferredDeeplinkCallbackListener: [], storeRetargetting: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdHJhY2tpZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLHVDQUE4QixNQUFNLCtCQUErQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHbEMsTUFBTSxDQUFOLElBQVksbUJBSVg7QUFKRCxXQUFZLG1CQUFtQjtJQUM5QixrREFBMkIsQ0FBQTtJQUMzQixnREFBeUIsQ0FBQTtJQUN6QiwwQ0FBbUIsQ0FBQTtBQUNwQixDQUFDLEVBSlcsbUJBQW1CLEtBQW5CLG1CQUFtQixRQUk5QjtBQUVELE1BQU0sQ0FBTixJQUFZLGNBSVg7QUFKRCxXQUFZLGNBQWM7SUFDekIsMkJBQVMsQ0FBQTtJQUNULG1DQUFpQixDQUFBO0lBQ2pCLCtCQUFhLENBQUE7QUFDZCxDQUFDLEVBSlcsY0FBYyxLQUFkLGNBQWMsUUFJekI7QUFFRCxNQUFNLENBQU4sSUFBWSxzQkFFWDtBQUZELFdBQVksc0JBQXNCO0lBQ2pDLDZDQUFtQixDQUFBO0FBQ3BCLENBQUMsRUFGVyxzQkFBc0IsS0FBdEIsc0JBQXNCLFFBRWpDOztJQWlCQSx3QkFBWSxRQUFnQixFQUFFLFdBQWdDO1FBWnRELGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsc0JBQWlCLEdBQThCLEVBQUUsQ0FBQztRQUNsRCxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFVBQUss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QkFBbUIsTUFLbkIsaUJBQWlCLE1BS2pCLGFBQWEsTUFLYixPQUFPLE1BS1Asa0JBQWtCLE1BU2xCLFlBQVksTUFLWix3QkFBd0IsTUFLeEIsd0JBQXdCLE1BS3hCLDJCQUEyQixNQU96QixtQ0FBbUMsTUFrQnJDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBlbnVtIFRyYWNraWVyRW52aXJvbm1lbnQge1xuXHREZXZlbG9wbWVudCA9ICdkZXZlbG9wbWVudCcsXG5cdFByb2R1Y3Rpb24gPSAncHJvZHVjdGlvbicsXG5cdFRlc3RpbmcgPSAndGVzdGluZycsXG59XG5cbmV4cG9ydCBlbnVtIFRyYWNraWVyUmVnaW9uIHtcblx0SU4gPSAnSU4nLFxuXHRHTE9CQUwgPSAnR0xPQkFMJyxcblx0Tk9ORSA9ICdOT05FJ1xufVxuXG5leHBvcnQgZW51bSBUcmFja2llckVuY3J5cHRpb25UeXBlIHtcblx0QUVTX0dDTSA9ICdBRVNfR0NNJ1xufVxuXG5leHBvcnQgY2xhc3MgVHJhY2tpZXJDb25maWcge1xuXHRwcml2YXRlIGFwcFRva2VuOiBzdHJpbmc7XG5cdHByaXZhdGUgZW52aXJvbm1lbnQ6IFRyYWNraWVyRW52aXJvbm1lbnQ7XG5cdHByaXZhdGUgc2VjcmV0SWQ6IHN0cmluZyA9ICcnO1xuXHRwcml2YXRlIHNlY3JldEtleTogc3RyaW5nID0gJyc7XG5cdHByaXZhdGUgbWFudWFsTW9kZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIGRpc2FibGVPcmdhbmljOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgZmFjZWJvb2tBcHBJZDogc3RyaW5nID0gJyc7XG5cdHByaXZhdGUgYW5kcm9pZElkOiBzdHJpbmcgPSAnJztcblx0cHJpdmF0ZSBhdHRyaWJ1dGlvblBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXHRwcml2YXRlIHJlZ2lvbjogc3RyaW5nID0gJyc7XG5cdHByaXZhdGUgYXBwSWQ6IHN0cmluZyA9ICcnO1xuXHRwcml2YXRlIGVuY3J5cHRpb25LZXk6IHN0cmluZyA9ICcnO1xuXHRwcml2YXRlIGVuY3J5cHRpb25UeXBlOiBUcmFja2llckVuY3J5cHRpb25UeXBlIHwgc3RyaW5nID0gJyc7XG5cdFxuXHRjb25zdHJ1Y3RvcihhcHBUb2tlbjogc3RyaW5nLCBlbnZpcm9ubWVudDogVHJhY2tpZXJFbnZpcm9ubWVudCkge1xuXHRcdHRoaXMuYXBwVG9rZW4gPSBhcHBUb2tlbjtcblx0XHR0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG5cdFx0dGhpcy5zZWNyZXRJZCA9IHRoaXMuc2VjcmV0SWQ7XG5cdFx0dGhpcy5zZWNyZXRLZXkgPSB0aGlzLnNlY3JldEtleTtcblx0XHR0aGlzLm1hbnVhbE1vZGUgPSB0aGlzLm1hbnVhbE1vZGU7XG5cdFx0dGhpcy5kaXNhYmxlT3JnYW5pYyA9IHRoaXMuZGlzYWJsZU9yZ2FuaWM7XG5cdFx0dGhpcy5hbmRyb2lkSWQgPSB0aGlzLmFuZHJvaWRJZDtcblx0XHR0aGlzLmZhY2Vib29rQXBwSWQgPSB0aGlzLmZhY2Vib29rQXBwSWQ7XG5cdH1cblxuXHRwdWJsaWMgc2V0QXBwU2VjcmV0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zZWNyZXRJZCA9IGtleTtcblx0XHR0aGlzLnNlY3JldEtleSA9IHZhbHVlO1xuXHR9XG5cblx0cHVibGljIHNldE1hbnVhbE1vZGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLm1hbnVhbE1vZGUgPSB2YWx1ZVxuXHR9XG5cblx0cHVibGljIGRpc2FibGVPcmdhbmljVHJhY2tpbmcodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmRpc2FibGVPcmdhbmljID0gdmFsdWVcblx0fVxuXG5cdHB1YmxpYyBzZXRBdHRyaWJ1dGlvblBhcmFtcyhwYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiB2b2lkIHtcblx0XHR0aGlzLmF0dHJpYnV0aW9uUGFyYW1zID0geyAuLi50aGlzLmF0dHJpYnV0aW9uUGFyYW1zLCAuLi5wYXJhbXMgfTtcblx0fSBcblxuXHRwdWJsaWMgc2V0RmFjZWJvb2tBcHBJZCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5mYWNlYm9va0FwcElkID0gdmFsdWU7XG5cdH1cblxuXHRwdWJsaWMgc2V0QW5kcm9pZElkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmFuZHJvaWRJZCA9IHZhbHVlO1xuXHR9XG5cblx0cHVibGljIHNldFJlZ2lvbihyZWdpb246IFRyYWNraWVyUmVnaW9uKTogdm9pZCB7XG5cdFx0dGhpcy5yZWdpb24gPSByZWdpb247XG5cdH1cblxuXHRwdWJsaWMgc2V0QXBwSUQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuYXBwSWQgPSB2YWx1ZTtcblx0fVxuXG5cdHB1YmxpYyBzZXRFbmNyeXB0aW9uS2V5KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmVuY3J5cHRpb25LZXkgPSB2YWx1ZTtcblx0fVxuXG5cdHB1YmxpYyBzZXRFbmNyeXB0aW9uVHlwZSh2YWx1ZTogVHJhY2tpZXJFbmNyeXB0aW9uVHlwZSB8IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuZW5jcnlwdGlvblR5cGUgPSB2YWx1ZTtcblx0fVxuXG59XG5cbmV4cG9ydCBjbGFzcyBUcmFja2llckV2ZW50IHtcblxuXHRwcml2YXRlIGV2ZW50SWQ6IHN0cmluZztcblx0cHJpdmF0ZSBvcmRlcklkOiBzdHJpbmc7XG5cdHByaXZhdGUgcHJvZHVjdElkOiBzdHJpbmc7XG5cdHByaXZhdGUgY3VycmVuY3k6IHN0cmluZztcblx0cHJpdmF0ZSBjb3Vwb25Db2RlOiBzdHJpbmc7XG5cdHByaXZhdGUgZGlzY291bnQ6IG51bWJlclxuXHRwcml2YXRlIHBhcmFtMTogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtMjogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtMzogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtNDogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtNTogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtNjogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtNzogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtODogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtOTogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtMTA6IHN0cmluZztcblx0cHJpdmF0ZSByZXZlbnVlOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoZXZlbnRJZDogc3RyaW5nKSB7XG5cdFx0dGhpcy5ldmVudElkID0gZXZlbnRJZDtcblx0fVxuXG5cdHB1YmxpYyBzZXRPcmRlcklkKG9yZGVySWQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMub3JkZXJJZCA9IG9yZGVySWQ7XG5cdH1cblx0cHVibGljIHNldFByb2R1Y3RJZChwcm9kdWN0SWQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucHJvZHVjdElkID0gcHJvZHVjdElkO1xuXHR9XG5cdHB1YmxpYyBzZXRDdXJyZW5jeShjdXJyZW5jeTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuXHR9XG5cdHB1YmxpYyBzZXRDb3Vwb25Db2RlKGNvdXBvbkNvZGU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuY291cG9uQ29kZSA9IGNvdXBvbkNvZGU7XG5cdH1cblx0cHVibGljIHNldERpc2NvdW50KGRpc2NvdW50OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmRpc2NvdW50ID0gZGlzY291bnQ7XG5cdH1cblx0cHVibGljIHNldFBhcmFtMShwYXJhbTE6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW0xID0gcGFyYW0xO1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTIocGFyYW0yOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtMiA9IHBhcmFtMjtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW0zKHBhcmFtMzogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTMgPSBwYXJhbTM7XG5cdH1cblx0cHVibGljIHNldFBhcmFtNChwYXJhbTQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW00ID0gcGFyYW00O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTUocGFyYW01OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtNSA9IHBhcmFtNTtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW02KHBhcmFtNjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTYgPSBwYXJhbTY7XG5cdH1cblx0cHVibGljIHNldFBhcmFtNyhwYXJhbTc6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW03ID0gcGFyYW03O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTgocGFyYW04OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtOCA9IHBhcmFtODtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW05KHBhcmFtOTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTkgPSBwYXJhbTk7XG5cdH1cblx0cHVibGljIHNldFBhcmFtMTAocGFyYW0xMDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTEwID0gcGFyYW0xMDtcblx0fVxuXHRwdWJsaWMgc2V0UmV2ZW51ZShyZXZlbnVlOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnJldmVudWUgPSByZXZlbnVlO1xuXHR9XG5cblx0c2V0RXZlbnRWYWx1ZTogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG59XG5cblxuQFBsdWdpbih7XG5cdHBsdWdpbk5hbWU6ICdUcmFja2llckNvcmRvdmFQbHVnaW4nLFxuXHRwbHVnaW46ICdjb20udHJhY2tpZXIuY29yZG92YV9zZGsnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcblx0cGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLlRyYWNraWVyQ29yZG92YVBsdWdpbicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cblx0cmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90cmFja2llci9jb3Jkb3ZhX3NkaycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cblx0Ly9pbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG5cdC8vaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG5cdHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYWNraWVyQ29yZG92YVBsdWdpbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcblxuXHRAQ29yZG92YSgpXG5cdGluaXRpYWxpemVTREsoY29uZmlnOiBUcmFja2llckNvbmZpZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybjtcblx0fVxuIFxuXHQgXG5cdEBDb3Jkb3ZhKClcblx0dHJhY2tFdmVudChldmVudDogVHJhY2tpZXJFdmVudCk6IFByb21pc2U8YW55PiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRVc2VySWQodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0VXNlckVtYWlsKHVzZXJFbWFpbDogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNldFVzZXJOYW1lKHVzZXJOYW1lOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0VXNlclBob25lKHVzZXJQaG9uZTogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNldERPQihkb2I6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRHZW5kZXIoZ2VuZGVyOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0cGFyc2VEZWVwTGluayh1cmk6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRmaXJlSW5zdGFsbCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0VHJhY2tpZXJJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0QWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldEFkSUQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldENhbXBhaWduKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRDYW1wYWlnbklEKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRBZFNldCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0QWRTZXRJRCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0Q2hhbm5lbCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0UDEoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldFAyKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRQMygpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0UDQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldFA1KCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRDbGlja0lkKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXREbHYoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldFBpZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0SXNSZXRhcmdldGluZygpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0dXBkYXRlQXBwbGVBZHNUb2tlbih0b2tlbjogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGNyZWF0ZUR5bmFtaWNMaW5rKHZhbHVlOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0TWFjQWRkcmVzcyh2YWx1ZTogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNldElNRUkodmFsdWU6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRyZXNvbHZlRGVlcGxpbmtVcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPHtcblx0XHR1cmw6IHN0cmluZztcblx0XHRkbHY6IHN0cmluZztcblx0XHRzZGtQYXJhbXM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG5cdH0+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNlbmRGY21Ub2tlbih0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHN1YnNjcmliZUF0dHJpYnV0aW9ubGluaygpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0dXBkYXRlUG9zdGJhY2tDb252ZXJzaW9uKGNvbnZlcnNpb25WYWx1ZTogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHdhaXRGb3JBVFRVc2VyQXV0aG9yaXphdGlvbih0aW1lb3V0SW50ZXJ2YWw6IG51bWJlcik6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoe1xuXHRcdG9ic2VydmFibGU6IHRydWUgLy8gVGhpcyBhbGxvd3MgY2FsbGJhY2stYmFzZWQgZXZlbnRzXG5cdCAgfSlcblx0ICBzZXREZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2tMaXN0ZW5lcigpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuXHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcblx0XHQgIGNvcmRvdmEuZXhlYyhcblx0XHRcdChkZWVwTGlua1VybDogc3RyaW5nKSA9PiB7XG5cdFx0XHRvYnNlcnZlci5uZXh0KGRlZXBMaW5rVXJsKTtcblx0XHRcdG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cdFx0XHR9LFxuXHRcdFx0KGVycm9yOiBhbnkpID0+IHtcblx0XHRcdG9ic2VydmVyLmVycm9yKGVycm9yKTtcblx0XHRcdH0sXG5cdFx0XHRcIlRyYWNraWVyQ29yZG92YVBsdWdpblwiLFxuXHRcdFx0XCJ0cmFja2llcl9kZWZlcnJlZERlZXBsaW5rXCIsXG5cdFx0XHRbXVxuXHRcdCAgKTtcblx0XHR9KTtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c3RvcmVSZXRhcmdldHRpbmcoZG9iOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxufSJdfQ==