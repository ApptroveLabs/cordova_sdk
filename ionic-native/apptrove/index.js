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
    AppTroveCordovaPluginOriginal.prototype.sendAPNToken = function (token) { return cordova(this, "sendAPNToken", {}, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwdHJvdmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBRTVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsTUFBTSxDQUFOLElBQVksbUJBSVg7QUFKRCxXQUFZLG1CQUFtQjtJQUM5QixrREFBMkIsQ0FBQTtJQUMzQixnREFBeUIsQ0FBQTtJQUN6QiwwQ0FBbUIsQ0FBQTtBQUNwQixDQUFDLEVBSlcsbUJBQW1CLEtBQW5CLG1CQUFtQixRQUk5QjtBQUVELE1BQU0sQ0FBTixJQUFZLGNBSVg7QUFKRCxXQUFZLGNBQWM7SUFDekIsMkJBQVMsQ0FBQTtJQUNULG1DQUFpQixDQUFBO0lBQ2pCLCtCQUFhLENBQUE7QUFDZCxDQUFDLEVBSlcsY0FBYyxLQUFkLGNBQWMsUUFJekI7QUFFRCxNQUFNLENBQU4sSUFBWSxzQkFFWDtBQUZELFdBQVksc0JBQXNCO0lBQ2pDLDZDQUFtQixDQUFBO0FBQ3BCLENBQUMsRUFGVyxzQkFBc0IsS0FBdEIsc0JBQXNCLFFBRWpDOztJQWlCQSx3QkFBWSxRQUFnQixFQUFFLFdBQWdDO1FBWnRELGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsc0JBQWlCLEdBQThCLEVBQUUsQ0FBQztRQUNsRCxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsa0JB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QUtmLHlDQUFTLGFBQUMsTUFBVztJQUtyQiw2Q0FBYSxhQUFDLEdBQVE7SUFLdEIsMkNBQVc7SUFLWCw2Q0FBYTtJQUtiLHFDQUFLO0lBS0wsdUNBQU87SUFLUCwyQ0FBVztJQUtYLDZDQUFhO0lBS2Isd0NBQVE7SUFLUiwwQ0FBVTtJQUtWLDBDQUFVO0lBS1YscUNBQUs7SUFLTCxxQ0FBSztJQUtMLHFDQUFLO0lBS0wscUNBQUs7SUFLTCxxQ0FBSztJQUtMLDBDQUFVO0lBS1Ysc0NBQU07SUFLTixzQ0FBTTtJQUtOLGdEQUFnQjtJQUtoQixtREFBbUIsYUFBQyxLQUFVO0lBSzlCLGlEQUFpQixhQUFDLEtBQVU7SUFLNUIsNkNBQWEsYUFBQyxLQUFVO0lBS3hCLHVDQUFPLGFBQUMsS0FBVTtJQUtsQixrREFBa0IsYUFBQyxHQUFXO0lBUzlCLDRDQUFZLGFBQUMsS0FBYTtJQUsxQiw0Q0FBWSxhQUFDLEtBQWE7SUFLMUIsd0RBQXdCO0lBS3hCLHdEQUF3QixhQUFDLGVBQXVCO0lBS2hELDJEQUEyQixhQUFDLGVBQXVCO0lBT2pELG1FQUFtQztJQWtCckMsaURBQWlCLGFBQUMsR0FBUTs7Ozs7O2dDQXJZM0I7RUFnTDJDLDBCQUEwQjtTQUF4RCxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgZW51bSBBcHBUcm92ZUVudmlyb25tZW50IHtcblx0RGV2ZWxvcG1lbnQgPSAnZGV2ZWxvcG1lbnQnLFxuXHRQcm9kdWN0aW9uID0gJ3Byb2R1Y3Rpb24nLFxuXHRUZXN0aW5nID0gJ3Rlc3RpbmcnLFxufVxuXG5leHBvcnQgZW51bSBBcHBUcm92ZVJlZ2lvbiB7XG5cdElOID0gJ0lOJyxcblx0R0xPQkFMID0gJ0dMT0JBTCcsXG5cdE5PTkUgPSAnTk9ORSdcbn1cblxuZXhwb3J0IGVudW0gQXBwVHJvdmVFbmNyeXB0aW9uVHlwZSB7XG5cdEFFU19HQ00gPSAnQUVTX0dDTSdcbn1cblxuZXhwb3J0IGNsYXNzIEFwcFRyb3ZlQ29uZmlnIHtcblx0cHJpdmF0ZSBhcHBUb2tlbjogc3RyaW5nO1xuXHRwcml2YXRlIGVudmlyb25tZW50OiBBcHBUcm92ZUVudmlyb25tZW50O1xuXHRwcml2YXRlIHNlY3JldElkOiBzdHJpbmcgPSAnJztcblx0cHJpdmF0ZSBzZWNyZXRLZXk6IHN0cmluZyA9ICcnO1xuXHRwcml2YXRlIG1hbnVhbE1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBkaXNhYmxlT3JnYW5pYzogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIGZhY2Vib29rQXBwSWQ6IHN0cmluZyA9ICcnO1xuXHRwcml2YXRlIGFuZHJvaWRJZDogc3RyaW5nID0gJyc7XG5cdHByaXZhdGUgYXR0cmlidXRpb25QYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblx0cHJpdmF0ZSByZWdpb246IHN0cmluZyA9ICcnO1xuXHRwcml2YXRlIGFwcElkOiBzdHJpbmcgPSAnJztcblx0cHJpdmF0ZSBlbmNyeXB0aW9uS2V5OiBzdHJpbmcgPSAnJztcblx0cHJpdmF0ZSBlbmNyeXB0aW9uVHlwZTogQXBwVHJvdmVFbmNyeXB0aW9uVHlwZSB8IHN0cmluZyA9ICcnO1xuXHRcblx0Y29uc3RydWN0b3IoYXBwVG9rZW46IHN0cmluZywgZW52aXJvbm1lbnQ6IEFwcFRyb3ZlRW52aXJvbm1lbnQpIHtcblx0XHR0aGlzLmFwcFRva2VuID0gYXBwVG9rZW47XG5cdFx0dGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHRcdHRoaXMuc2VjcmV0SWQgPSB0aGlzLnNlY3JldElkO1xuXHRcdHRoaXMuc2VjcmV0S2V5ID0gdGhpcy5zZWNyZXRLZXk7XG5cdFx0dGhpcy5tYW51YWxNb2RlID0gdGhpcy5tYW51YWxNb2RlO1xuXHRcdHRoaXMuZGlzYWJsZU9yZ2FuaWMgPSB0aGlzLmRpc2FibGVPcmdhbmljO1xuXHRcdHRoaXMuYW5kcm9pZElkID0gdGhpcy5hbmRyb2lkSWQ7XG5cdFx0dGhpcy5mYWNlYm9va0FwcElkID0gdGhpcy5mYWNlYm9va0FwcElkO1xuXHR9XG5cblx0cHVibGljIHNldEFwcFNlY3JldChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc2VjcmV0SWQgPSBrZXk7XG5cdFx0dGhpcy5zZWNyZXRLZXkgPSB2YWx1ZTtcblx0fVxuXG5cdHB1YmxpYyBzZXRNYW51YWxNb2RlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5tYW51YWxNb2RlID0gdmFsdWVcblx0fVxuXG5cdHB1YmxpYyBkaXNhYmxlT3JnYW5pY1RyYWNraW5nKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5kaXNhYmxlT3JnYW5pYyA9IHZhbHVlXG5cdH1cblxuXHRwdWJsaWMgc2V0QXR0cmlidXRpb25QYXJhbXMocGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCB7XG5cdFx0dGhpcy5hdHRyaWJ1dGlvblBhcmFtcyA9IHsgLi4udGhpcy5hdHRyaWJ1dGlvblBhcmFtcywgLi4ucGFyYW1zIH07XG5cdH0gXG5cblx0cHVibGljIHNldEZhY2Vib29rQXBwSWQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuZmFjZWJvb2tBcHBJZCA9IHZhbHVlO1xuXHR9XG5cblx0cHVibGljIHNldEFuZHJvaWRJZCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5hbmRyb2lkSWQgPSB2YWx1ZTtcblx0fVxuXG5cdHB1YmxpYyBzZXRSZWdpb24ocmVnaW9uOiBBcHBUcm92ZVJlZ2lvbik6IHZvaWQge1xuXHRcdHRoaXMucmVnaW9uID0gcmVnaW9uO1xuXHR9XG5cblx0cHVibGljIHNldEFwcElEKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmFwcElkID0gdmFsdWU7XG5cdH1cblxuXHRwdWJsaWMgc2V0RW5jcnlwdGlvbktleSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5lbmNyeXB0aW9uS2V5ID0gdmFsdWU7XG5cdH1cblxuXHRwdWJsaWMgc2V0RW5jcnlwdGlvblR5cGUodmFsdWU6IEFwcFRyb3ZlRW5jcnlwdGlvblR5cGUgfCBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmVuY3J5cHRpb25UeXBlID0gdmFsdWU7XG5cdH1cblxufVxuXG5leHBvcnQgY2xhc3MgQXBwVHJvdmVFdmVudCB7XG5cblx0cHJpdmF0ZSBldmVudElkOiBzdHJpbmc7XG5cdHByaXZhdGUgb3JkZXJJZDogc3RyaW5nO1xuXHRwcml2YXRlIHByb2R1Y3RJZDogc3RyaW5nO1xuXHRwcml2YXRlIGN1cnJlbmN5OiBzdHJpbmc7XG5cdHByaXZhdGUgY291cG9uQ29kZTogc3RyaW5nO1xuXHRwcml2YXRlIGRpc2NvdW50OiBudW1iZXJcblx0cHJpdmF0ZSBwYXJhbTE6IHN0cmluZztcblx0cHJpdmF0ZSBwYXJhbTI6IHN0cmluZztcblx0cHJpdmF0ZSBwYXJhbTM6IHN0cmluZztcblx0cHJpdmF0ZSBwYXJhbTQ6IHN0cmluZztcblx0cHJpdmF0ZSBwYXJhbTU6IHN0cmluZztcblx0cHJpdmF0ZSBwYXJhbTY6IHN0cmluZztcblx0cHJpdmF0ZSBwYXJhbTc6IHN0cmluZztcblx0cHJpdmF0ZSBwYXJhbTg6IHN0cmluZztcblx0cHJpdmF0ZSBwYXJhbTk6IHN0cmluZztcblx0cHJpdmF0ZSBwYXJhbTEwOiBzdHJpbmc7XG5cdHByaXZhdGUgcmV2ZW51ZTogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKGV2ZW50SWQ6IHN0cmluZykge1xuXHRcdHRoaXMuZXZlbnRJZCA9IGV2ZW50SWQ7XG5cdH1cblxuXHRwdWJsaWMgc2V0T3JkZXJJZChvcmRlcklkOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLm9yZGVySWQgPSBvcmRlcklkO1xuXHR9XG5cdHB1YmxpYyBzZXRQcm9kdWN0SWQocHJvZHVjdElkOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnByb2R1Y3RJZCA9IHByb2R1Y3RJZDtcblx0fVxuXHRwdWJsaWMgc2V0Q3VycmVuY3koY3VycmVuY3k6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuY3VycmVuY3kgPSBjdXJyZW5jeTtcblx0fVxuXHRwdWJsaWMgc2V0Q291cG9uQ29kZShjb3Vwb25Db2RlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmNvdXBvbkNvZGUgPSBjb3Vwb25Db2RlO1xuXHR9XG5cdHB1YmxpYyBzZXREaXNjb3VudChkaXNjb3VudDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5kaXNjb3VudCA9IGRpc2NvdW50O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTEocGFyYW0xOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtMSA9IHBhcmFtMTtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW0yKHBhcmFtMjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTIgPSBwYXJhbTI7XG5cdH1cblx0cHVibGljIHNldFBhcmFtMyhwYXJhbTM6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW0zID0gcGFyYW0zO1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTQocGFyYW00OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtNCA9IHBhcmFtNDtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW01KHBhcmFtNTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTUgPSBwYXJhbTU7XG5cdH1cblx0cHVibGljIHNldFBhcmFtNihwYXJhbTY6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW02ID0gcGFyYW02O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTcocGFyYW03OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtNyA9IHBhcmFtNztcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW04KHBhcmFtODogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTggPSBwYXJhbTg7XG5cdH1cblx0cHVibGljIHNldFBhcmFtOShwYXJhbTk6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW05ID0gcGFyYW05O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTEwKHBhcmFtMTA6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW0xMCA9IHBhcmFtMTA7XG5cdH1cblx0cHVibGljIHNldFJldmVudWUocmV2ZW51ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5yZXZlbnVlID0gcmV2ZW51ZTtcblx0fVxuXG5cdHNldEV2ZW50VmFsdWU6IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gdm9pZFxufVxuXG5cbkBQbHVnaW4oe1xuXHRwbHVnaW5OYW1lOiAnQXBwVHJvdmVDb3Jkb3ZhUGx1Z2luJyxcblx0cGx1Z2luOiAnY29tLmFwcHRyb3ZlLmNvcmRvdmFfc2RrJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG5cdHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5BcHBUcm92ZUNvcmRvdmFQbHVnaW4nLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG5cdHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vQXBwdHJvdmVMYWJzL2NvcmRvdmFfc2RrJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuXHQvL2luc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcblx0Ly9pbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcblx0cGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcFRyb3ZlQ29yZG92YVBsdWdpbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcblxuXHRAQ29yZG92YSgpXG5cdGluaXRpYWxpemVTREsoY29uZmlnOiBBcHBUcm92ZUNvbmZpZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybjtcblx0fVxuIFxuXHQgXG5cdEBDb3Jkb3ZhKClcblx0dHJhY2tFdmVudChldmVudDogQXBwVHJvdmVFdmVudCk6IFByb21pc2U8YW55PiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRVc2VySWQodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0VXNlckVtYWlsKHVzZXJFbWFpbDogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNldFVzZXJOYW1lKHVzZXJOYW1lOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0VXNlclBob25lKHVzZXJQaG9uZTogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNldERPQihkb2I6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRHZW5kZXIoZ2VuZGVyOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0cGFyc2VEZWVwTGluayh1cmk6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRmaXJlSW5zdGFsbCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0QXBwVHJvdmVJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0QWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldEFkSUQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldENhbXBhaWduKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRDYW1wYWlnbklEKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRBZFNldCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0QWRTZXRJRCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0Q2hhbm5lbCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0UDEoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldFAyKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRQMygpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0UDQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldFA1KCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRDbGlja0lkKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXREbHYoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldFBpZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0SXNSZXRhcmdldGluZygpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0dXBkYXRlQXBwbGVBZHNUb2tlbih0b2tlbjogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGNyZWF0ZUR5bmFtaWNMaW5rKHZhbHVlOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0TWFjQWRkcmVzcyh2YWx1ZTogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNldElNRUkodmFsdWU6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRyZXNvbHZlRGVlcGxpbmtVcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPHtcblx0XHR1cmw6IHN0cmluZztcblx0XHRkbHY6IHN0cmluZztcblx0XHRzZGtQYXJhbXM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG5cdH0+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNlbmRGY21Ub2tlbih0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNlbmRBUE5Ub2tlbih0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHN1YnNjcmliZUF0dHJpYnV0aW9ubGluaygpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0dXBkYXRlUG9zdGJhY2tDb252ZXJzaW9uKGNvbnZlcnNpb25WYWx1ZTogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHdhaXRGb3JBVFRVc2VyQXV0aG9yaXphdGlvbih0aW1lb3V0SW50ZXJ2YWw6IG51bWJlcik6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoe1xuXHRcdG9ic2VydmFibGU6IHRydWUgLy8gVGhpcyBhbGxvd3MgY2FsbGJhY2stYmFzZWQgZXZlbnRzXG5cdCAgfSlcblx0ICBzZXREZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2tMaXN0ZW5lcigpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuXHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcblx0XHQgIGNvcmRvdmEuZXhlYyhcblx0XHRcdChkZWVwTGlua1VybDogc3RyaW5nKSA9PiB7XG5cdFx0XHRvYnNlcnZlci5uZXh0KGRlZXBMaW5rVXJsKTtcblx0XHRcdG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cdFx0XHR9LFxuXHRcdFx0KGVycm9yOiBhbnkpID0+IHtcblx0XHRcdG9ic2VydmVyLmVycm9yKGVycm9yKTtcblx0XHRcdH0sXG5cdFx0XHRcIkFwcFRyb3ZlQ29yZG92YVBsdWdpblwiLFxuXHRcdFx0XCJhcHB0cm92ZV9kZWZlcnJlZERlZXBsaW5rXCIsXG5cdFx0XHRbXVxuXHRcdCAgKTtcblx0XHR9KTtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c3RvcmVSZXRhcmdldHRpbmcoZG9iOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxufVxuIl19