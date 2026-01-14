import { __assign, __decorate, __extends } from "tslib";
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
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
var AppTroveCordovaPlugin = /** @class */ (function (_super) {
    __extends(AppTroveCordovaPlugin, _super);
    function AppTroveCordovaPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppTroveCordovaPlugin.prototype.initializeSDK = function (config) { return cordova(this, "initializeSDK", {}, arguments); };
    AppTroveCordovaPlugin.prototype.trackEvent = function (event) { return cordova(this, "trackEvent", {}, arguments); };
    AppTroveCordovaPlugin.prototype.setUserId = function (userId) { return cordova(this, "setUserId", {}, arguments); };
    AppTroveCordovaPlugin.prototype.setUserEmail = function (userEmail) { return cordova(this, "setUserEmail", {}, arguments); };
    AppTroveCordovaPlugin.prototype.setUserName = function (userName) { return cordova(this, "setUserName", {}, arguments); };
    AppTroveCordovaPlugin.prototype.setUserPhone = function (userPhone) { return cordova(this, "setUserPhone", {}, arguments); };
    AppTroveCordovaPlugin.prototype.setDOB = function (dob) { return cordova(this, "setDOB", {}, arguments); };
    AppTroveCordovaPlugin.prototype.setGender = function (gender) { return cordova(this, "setGender", {}, arguments); };
    AppTroveCordovaPlugin.prototype.parseDeepLink = function (uri) { return cordova(this, "parseDeepLink", {}, arguments); };
    AppTroveCordovaPlugin.prototype.fireInstall = function () { return cordova(this, "fireInstall", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getAppTroveId = function () { return cordova(this, "getAppTroveId", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getAd = function () { return cordova(this, "getAd", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getAdID = function () { return cordova(this, "getAdID", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getCampaign = function () { return cordova(this, "getCampaign", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getCampaignID = function () { return cordova(this, "getCampaignID", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getAdSet = function () { return cordova(this, "getAdSet", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getAdSetID = function () { return cordova(this, "getAdSetID", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getChannel = function () { return cordova(this, "getChannel", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getP1 = function () { return cordova(this, "getP1", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getP2 = function () { return cordova(this, "getP2", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getP3 = function () { return cordova(this, "getP3", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getP4 = function () { return cordova(this, "getP4", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getP5 = function () { return cordova(this, "getP5", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getClickId = function () { return cordova(this, "getClickId", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getDlv = function () { return cordova(this, "getDlv", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getPid = function () { return cordova(this, "getPid", {}, arguments); };
    AppTroveCordovaPlugin.prototype.getIsRetargeting = function () { return cordova(this, "getIsRetargeting", {}, arguments); };
    AppTroveCordovaPlugin.prototype.updateAppleAdsToken = function (token) { return cordova(this, "updateAppleAdsToken", {}, arguments); };
    AppTroveCordovaPlugin.prototype.createDynamicLink = function (value) { return cordova(this, "createDynamicLink", {}, arguments); };
    AppTroveCordovaPlugin.prototype.setMacAddress = function (value) { return cordova(this, "setMacAddress", {}, arguments); };
    AppTroveCordovaPlugin.prototype.setIMEI = function (value) { return cordova(this, "setIMEI", {}, arguments); };
    AppTroveCordovaPlugin.prototype.resolveDeeplinkUrl = function (url) { return cordova(this, "resolveDeeplinkUrl", {}, arguments); };
    AppTroveCordovaPlugin.prototype.sendFcmToken = function (token) { return cordova(this, "sendFcmToken", {}, arguments); };
    AppTroveCordovaPlugin.prototype.sendAPNToken = function (token) { return cordova(this, "sendAPNToken", {}, arguments); };
    AppTroveCordovaPlugin.prototype.subscribeAttributionlink = function () { return cordova(this, "subscribeAttributionlink", {}, arguments); };
    AppTroveCordovaPlugin.prototype.updatePostbackConversion = function (conversionValue) { return cordova(this, "updatePostbackConversion", {}, arguments); };
    AppTroveCordovaPlugin.prototype.waitForATTUserAuthorization = function (timeoutInterval) { return cordova(this, "waitForATTUserAuthorization", {}, arguments); };
    AppTroveCordovaPlugin.prototype.setDeferredDeeplinkCallbackListener = function () { return cordova(this, "setDeferredDeeplinkCallbackListener", { "observable": true }, arguments); };
    AppTroveCordovaPlugin.prototype.storeRetargetting = function (dob) { return cordova(this, "storeRetargetting", {}, arguments); };
    AppTroveCordovaPlugin.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AppTroveCordovaPlugin, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    AppTroveCordovaPlugin.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AppTroveCordovaPlugin });
    AppTroveCordovaPlugin.pluginName = "AppTroveCordovaPlugin";
    AppTroveCordovaPlugin.plugin = "com.apptrove.cordova_sdk";
    AppTroveCordovaPlugin.pluginRef = "cordova.plugins.AppTroveCordovaPlugin";
    AppTroveCordovaPlugin.repo = "https://github.com/ApptroveLabs/cordova_sdk";
    AppTroveCordovaPlugin.platforms = ["Android", "iOS"];
    AppTroveCordovaPlugin = __decorate([], AppTroveCordovaPlugin);
    return AppTroveCordovaPlugin;
}(AwesomeCordovaNativePlugin));
export { AppTroveCordovaPlugin };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AppTroveCordovaPlugin, decorators: [{
            type: Injectable
        }], propDecorators: { initializeSDK: [], trackEvent: [], setUserId: [], setUserEmail: [], setUserName: [], setUserPhone: [], setDOB: [], setGender: [], parseDeepLink: [], fireInstall: [], getAppTroveId: [], getAd: [], getAdID: [], getCampaign: [], getCampaignID: [], getAdSet: [], getAdSetID: [], getChannel: [], getP1: [], getP2: [], getP3: [], getP4: [], getP5: [], getClickId: [], getDlv: [], getPid: [], getIsRetargeting: [], updateAppleAdsToken: [], createDynamicLink: [], setMacAddress: [], setIMEI: [], resolveDeeplinkUrl: [], sendFcmToken: [], sendAPNToken: [], subscribeAttributionlink: [], updatePostbackConversion: [], waitForATTUserAuthorization: [], setDeferredDeeplinkCallbackListener: [], storeRetargetting: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwdHJvdmUvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFbEMsTUFBTSxDQUFOLElBQVksbUJBSVg7QUFKRCxXQUFZLG1CQUFtQjtJQUM5QixrREFBMkIsQ0FBQTtJQUMzQixnREFBeUIsQ0FBQTtJQUN6QiwwQ0FBbUIsQ0FBQTtBQUNwQixDQUFDLEVBSlcsbUJBQW1CLEtBQW5CLG1CQUFtQixRQUk5QjtBQUVELE1BQU0sQ0FBTixJQUFZLGNBSVg7QUFKRCxXQUFZLGNBQWM7SUFDekIsMkJBQVMsQ0FBQTtJQUNULG1DQUFpQixDQUFBO0lBQ2pCLCtCQUFhLENBQUE7QUFDZCxDQUFDLEVBSlcsY0FBYyxLQUFkLGNBQWMsUUFJekI7QUFFRCxNQUFNLENBQU4sSUFBWSxzQkFFWDtBQUZELFdBQVksc0JBQXNCO0lBQ2pDLDZDQUFtQixDQUFBO0FBQ3BCLENBQUMsRUFGVyxzQkFBc0IsS0FBdEIsc0JBQXNCLFFBRWpDOztJQWlCQSx3QkFBWSxRQUFnQixFQUFFLFdBQWdDO1FBWnRELGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsc0JBQWlCLEdBQThCLEVBQUUsQ0FBQztRQUNsRCxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFVBQUss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QU0sTUFLTixnQkFBZ0IsTUFLaEIsbUJBQW1CLE1BS25CLGlCQUFpQixNQUtqQixhQUFhLE1BS2IsT0FBTyxNQUtQLGtCQUFrQixNQVNsQixZQUFZLE1BS1osWUFBWSxNQUtaLHdCQUF3QixNQUt4Qix3QkFBd0IsTUFLeEIsMkJBQTJCLE1BT3pCLG1DQUFtQyxNQWtCckMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGVudW0gQXBwVHJvdmVFbnZpcm9ubWVudCB7XG5cdERldmVsb3BtZW50ID0gJ2RldmVsb3BtZW50Jyxcblx0UHJvZHVjdGlvbiA9ICdwcm9kdWN0aW9uJyxcblx0VGVzdGluZyA9ICd0ZXN0aW5nJyxcbn1cblxuZXhwb3J0IGVudW0gQXBwVHJvdmVSZWdpb24ge1xuXHRJTiA9ICdJTicsXG5cdEdMT0JBTCA9ICdHTE9CQUwnLFxuXHROT05FID0gJ05PTkUnXG59XG5cbmV4cG9ydCBlbnVtIEFwcFRyb3ZlRW5jcnlwdGlvblR5cGUge1xuXHRBRVNfR0NNID0gJ0FFU19HQ00nXG59XG5cbmV4cG9ydCBjbGFzcyBBcHBUcm92ZUNvbmZpZyB7XG5cdHByaXZhdGUgYXBwVG9rZW46IHN0cmluZztcblx0cHJpdmF0ZSBlbnZpcm9ubWVudDogQXBwVHJvdmVFbnZpcm9ubWVudDtcblx0cHJpdmF0ZSBzZWNyZXRJZDogc3RyaW5nID0gJyc7XG5cdHByaXZhdGUgc2VjcmV0S2V5OiBzdHJpbmcgPSAnJztcblx0cHJpdmF0ZSBtYW51YWxNb2RlOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgZGlzYWJsZU9yZ2FuaWM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBmYWNlYm9va0FwcElkOiBzdHJpbmcgPSAnJztcblx0cHJpdmF0ZSBhbmRyb2lkSWQ6IHN0cmluZyA9ICcnO1xuXHRwcml2YXRlIGF0dHJpYnV0aW9uUGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cdHByaXZhdGUgcmVnaW9uOiBzdHJpbmcgPSAnJztcblx0cHJpdmF0ZSBhcHBJZDogc3RyaW5nID0gJyc7XG5cdHByaXZhdGUgZW5jcnlwdGlvbktleTogc3RyaW5nID0gJyc7XG5cdHByaXZhdGUgZW5jcnlwdGlvblR5cGU6IEFwcFRyb3ZlRW5jcnlwdGlvblR5cGUgfCBzdHJpbmcgPSAnJztcblx0XG5cdGNvbnN0cnVjdG9yKGFwcFRva2VuOiBzdHJpbmcsIGVudmlyb25tZW50OiBBcHBUcm92ZUVudmlyb25tZW50KSB7XG5cdFx0dGhpcy5hcHBUb2tlbiA9IGFwcFRva2VuO1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0XHR0aGlzLnNlY3JldElkID0gdGhpcy5zZWNyZXRJZDtcblx0XHR0aGlzLnNlY3JldEtleSA9IHRoaXMuc2VjcmV0S2V5O1xuXHRcdHRoaXMubWFudWFsTW9kZSA9IHRoaXMubWFudWFsTW9kZTtcblx0XHR0aGlzLmRpc2FibGVPcmdhbmljID0gdGhpcy5kaXNhYmxlT3JnYW5pYztcblx0XHR0aGlzLmFuZHJvaWRJZCA9IHRoaXMuYW5kcm9pZElkO1xuXHRcdHRoaXMuZmFjZWJvb2tBcHBJZCA9IHRoaXMuZmFjZWJvb2tBcHBJZDtcblx0fVxuXG5cdHB1YmxpYyBzZXRBcHBTZWNyZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnNlY3JldElkID0ga2V5O1xuXHRcdHRoaXMuc2VjcmV0S2V5ID0gdmFsdWU7XG5cdH1cblxuXHRwdWJsaWMgc2V0TWFudWFsTW9kZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMubWFudWFsTW9kZSA9IHZhbHVlXG5cdH1cblxuXHRwdWJsaWMgZGlzYWJsZU9yZ2FuaWNUcmFja2luZyh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZGlzYWJsZU9yZ2FuaWMgPSB2YWx1ZVxuXHR9XG5cblx0cHVibGljIHNldEF0dHJpYnV0aW9uUGFyYW1zKHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQge1xuXHRcdHRoaXMuYXR0cmlidXRpb25QYXJhbXMgPSB7IC4uLnRoaXMuYXR0cmlidXRpb25QYXJhbXMsIC4uLnBhcmFtcyB9O1xuXHR9IFxuXG5cdHB1YmxpYyBzZXRGYWNlYm9va0FwcElkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmZhY2Vib29rQXBwSWQgPSB2YWx1ZTtcblx0fVxuXG5cdHB1YmxpYyBzZXRBbmRyb2lkSWQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuYW5kcm9pZElkID0gdmFsdWU7XG5cdH1cblxuXHRwdWJsaWMgc2V0UmVnaW9uKHJlZ2lvbjogQXBwVHJvdmVSZWdpb24pOiB2b2lkIHtcblx0XHR0aGlzLnJlZ2lvbiA9IHJlZ2lvbjtcblx0fVxuXG5cdHB1YmxpYyBzZXRBcHBJRCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5hcHBJZCA9IHZhbHVlO1xuXHR9XG5cblx0cHVibGljIHNldEVuY3J5cHRpb25LZXkodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuZW5jcnlwdGlvbktleSA9IHZhbHVlO1xuXHR9XG5cblx0cHVibGljIHNldEVuY3J5cHRpb25UeXBlKHZhbHVlOiBBcHBUcm92ZUVuY3J5cHRpb25UeXBlIHwgc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5lbmNyeXB0aW9uVHlwZSA9IHZhbHVlO1xuXHR9XG5cbn1cblxuZXhwb3J0IGNsYXNzIEFwcFRyb3ZlRXZlbnQge1xuXG5cdHByaXZhdGUgZXZlbnRJZDogc3RyaW5nO1xuXHRwcml2YXRlIG9yZGVySWQ6IHN0cmluZztcblx0cHJpdmF0ZSBwcm9kdWN0SWQ6IHN0cmluZztcblx0cHJpdmF0ZSBjdXJyZW5jeTogc3RyaW5nO1xuXHRwcml2YXRlIGNvdXBvbkNvZGU6IHN0cmluZztcblx0cHJpdmF0ZSBkaXNjb3VudDogbnVtYmVyXG5cdHByaXZhdGUgcGFyYW0xOiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW0yOiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW0zOiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW00OiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW01OiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW02OiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW03OiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW04OiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW05OiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW0xMDogc3RyaW5nO1xuXHRwcml2YXRlIHJldmVudWU6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3RvcihldmVudElkOiBzdHJpbmcpIHtcblx0XHR0aGlzLmV2ZW50SWQgPSBldmVudElkO1xuXHR9XG5cblx0cHVibGljIHNldE9yZGVySWQob3JkZXJJZDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5vcmRlcklkID0gb3JkZXJJZDtcblx0fVxuXHRwdWJsaWMgc2V0UHJvZHVjdElkKHByb2R1Y3RJZDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wcm9kdWN0SWQgPSBwcm9kdWN0SWQ7XG5cdH1cblx0cHVibGljIHNldEN1cnJlbmN5KGN1cnJlbmN5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmN1cnJlbmN5ID0gY3VycmVuY3k7XG5cdH1cblx0cHVibGljIHNldENvdXBvbkNvZGUoY291cG9uQ29kZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jb3Vwb25Db2RlID0gY291cG9uQ29kZTtcblx0fVxuXHRwdWJsaWMgc2V0RGlzY291bnQoZGlzY291bnQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuZGlzY291bnQgPSBkaXNjb3VudDtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW0xKHBhcmFtMTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTEgPSBwYXJhbTE7XG5cdH1cblx0cHVibGljIHNldFBhcmFtMihwYXJhbTI6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW0yID0gcGFyYW0yO1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTMocGFyYW0zOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtMyA9IHBhcmFtMztcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW00KHBhcmFtNDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTQgPSBwYXJhbTQ7XG5cdH1cblx0cHVibGljIHNldFBhcmFtNShwYXJhbTU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW01ID0gcGFyYW01O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTYocGFyYW02OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtNiA9IHBhcmFtNjtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW03KHBhcmFtNzogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTcgPSBwYXJhbTc7XG5cdH1cblx0cHVibGljIHNldFBhcmFtOChwYXJhbTg6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW04ID0gcGFyYW04O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTkocGFyYW05OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtOSA9IHBhcmFtOTtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW0xMChwYXJhbTEwOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtMTAgPSBwYXJhbTEwO1xuXHR9XG5cdHB1YmxpYyBzZXRSZXZlbnVlKHJldmVudWU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucmV2ZW51ZSA9IHJldmVudWU7XG5cdH1cblxuXHRzZXRFdmVudFZhbHVlOiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbn1cblxuXG5AUGx1Z2luKHtcblx0cGx1Z2luTmFtZTogJ0FwcFRyb3ZlQ29yZG92YVBsdWdpbicsXG5cdHBsdWdpbjogJ2NvbS5hcHB0cm92ZS5jb3Jkb3ZhX3NkaycsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuXHRwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuQXBwVHJvdmVDb3Jkb3ZhUGx1Z2luJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuXHRyZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0FwcHRyb3ZlTGFicy9jb3Jkb3ZhX3NkaycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cblx0Ly9pbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG5cdC8vaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG5cdHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBUcm92ZUNvcmRvdmFQbHVnaW4gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG5cblx0QENvcmRvdmEoKVxuXHRpbml0aWFsaXplU0RLKGNvbmZpZzogQXBwVHJvdmVDb25maWcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm47XG5cdH1cbiBcblx0IFxuXHRAQ29yZG92YSgpXG5cdHRyYWNrRXZlbnQoZXZlbnQ6IEFwcFRyb3ZlRXZlbnQpOiBQcm9taXNlPGFueT4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0VXNlcklkKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNldFVzZXJFbWFpbCh1c2VyRW1haWw6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRVc2VyTmFtZSh1c2VyTmFtZTogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNldFVzZXJQaG9uZSh1c2VyUGhvbmU6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRET0IoZG9iOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0R2VuZGVyKGdlbmRlcjogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHBhcnNlRGVlcExpbmsodXJpOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0ZmlyZUluc3RhbGwoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldEFwcFRyb3ZlSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldEFkKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRBZElEKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRDYW1wYWlnbigpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0Q2FtcGFpZ25JRCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0QWRTZXQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldEFkU2V0SUQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldENoYW5uZWwoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldFAxKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRQMigpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0UDMoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldFA0KCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRQNSgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0Q2xpY2tJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0RGx2KCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRQaWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldElzUmV0YXJnZXRpbmcoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHVwZGF0ZUFwcGxlQWRzVG9rZW4odG9rZW46IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRjcmVhdGVEeW5hbWljTGluayh2YWx1ZTogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNldE1hY0FkZHJlc3ModmFsdWU6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRJTUVJKHZhbHVlOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0cmVzb2x2ZURlZXBsaW5rVXJsKHVybDogc3RyaW5nKTogUHJvbWlzZTx7XG5cdFx0dXJsOiBzdHJpbmc7XG5cdFx0ZGx2OiBzdHJpbmc7XG5cdFx0c2RrUGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuXHR9PiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZW5kRmNtVG9rZW4odG9rZW46IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZW5kQVBOVG9rZW4odG9rZW46IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzdWJzY3JpYmVBdHRyaWJ1dGlvbmxpbmsoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHVwZGF0ZVBvc3RiYWNrQ29udmVyc2lvbihjb252ZXJzaW9uVmFsdWU6IG51bWJlcik6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHR3YWl0Rm9yQVRUVXNlckF1dGhvcml6YXRpb24odGltZW91dEludGVydmFsOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKHtcblx0XHRvYnNlcnZhYmxlOiB0cnVlIC8vIFRoaXMgYWxsb3dzIGNhbGxiYWNrLWJhc2VkIGV2ZW50c1xuXHQgIH0pXG5cdCAgc2V0RGVmZXJyZWREZWVwbGlua0NhbGxiYWNrTGlzdGVuZXIoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG5cdFx0ICBjb3Jkb3ZhLmV4ZWMoXG5cdFx0XHQoZGVlcExpbmtVcmw6IHN0cmluZykgPT4ge1xuXHRcdFx0b2JzZXJ2ZXIubmV4dChkZWVwTGlua1VybCk7XG5cdFx0XHRvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdFx0fSxcblx0XHRcdChlcnJvcjogYW55KSA9PiB7XG5cdFx0XHRvYnNlcnZlci5lcnJvcihlcnJvcik7XG5cdFx0XHR9LFxuXHRcdFx0XCJBcHBUcm92ZUNvcmRvdmFQbHVnaW5cIixcblx0XHRcdFwiYXBwdHJvdmVfZGVmZXJyZWREZWVwbGlua1wiLFxuXHRcdFx0W11cblx0XHQgICk7XG5cdFx0fSk7XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHN0b3JlUmV0YXJnZXR0aW5nKGRvYjogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cbn1cbiJdfQ==