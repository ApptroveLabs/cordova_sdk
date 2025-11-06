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
var TrackierCordovaPluginOriginal = /** @class */ (function (_super) {
    __extends(TrackierCordovaPluginOriginal, _super);
    function TrackierCordovaPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrackierCordovaPluginOriginal.prototype.initializeSDK = function (config) { return cordova(this, "initializeSDK", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.trackEvent = function (event) { return cordova(this, "trackEvent", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.setUserId = function (userId) { return cordova(this, "setUserId", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.setUserEmail = function (userEmail) { return cordova(this, "setUserEmail", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.setUserName = function (userName) { return cordova(this, "setUserName", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.setUserPhone = function (userPhone) { return cordova(this, "setUserPhone", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.setDOB = function (dob) { return cordova(this, "setDOB", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.setGender = function (gender) { return cordova(this, "setGender", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.parseDeepLink = function (uri) { return cordova(this, "parseDeepLink", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.fireInstall = function () { return cordova(this, "fireInstall", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getTrackierId = function () { return cordova(this, "getTrackierId", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getAd = function () { return cordova(this, "getAd", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getAdID = function () { return cordova(this, "getAdID", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getCampaign = function () { return cordova(this, "getCampaign", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getCampaignID = function () { return cordova(this, "getCampaignID", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getAdSet = function () { return cordova(this, "getAdSet", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getAdSetID = function () { return cordova(this, "getAdSetID", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getChannel = function () { return cordova(this, "getChannel", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getP1 = function () { return cordova(this, "getP1", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getP2 = function () { return cordova(this, "getP2", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getP3 = function () { return cordova(this, "getP3", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getP4 = function () { return cordova(this, "getP4", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getP5 = function () { return cordova(this, "getP5", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getClickId = function () { return cordova(this, "getClickId", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getDlv = function () { return cordova(this, "getDlv", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getPid = function () { return cordova(this, "getPid", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getIsRetargeting = function () { return cordova(this, "getIsRetargeting", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.updateAppleAdsToken = function (token) { return cordova(this, "updateAppleAdsToken", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.createDynamicLink = function (value) { return cordova(this, "createDynamicLink", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.setMacAddress = function (value) { return cordova(this, "setMacAddress", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.setIMEI = function (value) { return cordova(this, "setIMEI", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.resolveDeeplinkUrl = function (url) { return cordova(this, "resolveDeeplinkUrl", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.sendFcmToken = function (token) { return cordova(this, "sendFcmToken", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.subscribeAttributionlink = function () { return cordova(this, "subscribeAttributionlink", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.updatePostbackConversion = function (conversionValue) { return cordova(this, "updatePostbackConversion", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.waitForATTUserAuthorization = function (timeoutInterval) { return cordova(this, "waitForATTUserAuthorization", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.setDeferredDeeplinkCallbackListener = function () { return cordova(this, "setDeferredDeeplinkCallbackListener", { "observable": true }, arguments); };
    TrackierCordovaPluginOriginal.prototype.storeRetargetting = function (dob) { return cordova(this, "storeRetargetting", {}, arguments); };
    TrackierCordovaPluginOriginal.pluginName = "TrackierCordovaPlugin";
    TrackierCordovaPluginOriginal.plugin = "com.trackier.cordova_sdk";
    TrackierCordovaPluginOriginal.pluginRef = "cordova.plugins.TrackierCordovaPlugin";
    TrackierCordovaPluginOriginal.repo = "https://github.com/trackier/cordova_sdk";
    TrackierCordovaPluginOriginal.platforms = ["Android"];
    return TrackierCordovaPluginOriginal;
}(AwesomeCordovaNativePlugin));
var TrackierCordovaPlugin = new TrackierCordovaPluginOriginal();
export { TrackierCordovaPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdHJhY2tpZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLHVDQUE4QixNQUFNLCtCQUErQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHbEMsTUFBTSxDQUFOLElBQVksbUJBSVg7QUFKRCxXQUFZLG1CQUFtQjtJQUM5QixrREFBMkIsQ0FBQTtJQUMzQixnREFBeUIsQ0FBQTtJQUN6QiwwQ0FBbUIsQ0FBQTtBQUNwQixDQUFDLEVBSlcsbUJBQW1CLEtBQW5CLG1CQUFtQixRQUk5QjtBQUVELE1BQU0sQ0FBTixJQUFZLGNBSVg7QUFKRCxXQUFZLGNBQWM7SUFDekIsMkJBQVMsQ0FBQTtJQUNULG1DQUFpQixDQUFBO0lBQ2pCLCtCQUFhLENBQUE7QUFDZCxDQUFDLEVBSlcsY0FBYyxLQUFkLGNBQWMsUUFJekI7QUFFRCxNQUFNLENBQU4sSUFBWSxzQkFFWDtBQUZELFdBQVksc0JBQXNCO0lBQ2pDLDZDQUFtQixDQUFBO0FBQ3BCLENBQUMsRUFGVyxzQkFBc0IsS0FBdEIsc0JBQXNCLFFBRWpDOztJQWNBLHdCQUFZLFFBQWdCLEVBQUUsV0FBZ0M7UUFUdEQsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixzQkFBaUIsR0FBOEIsRUFBRSxDQUFDO1FBQ2xELFdBQU0sR0FBVyxFQUFFLENBQUM7UUFHM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDekMsQ0FBQztJQUVNLHFDQUFZLEdBQW5CLFVBQW9CLEdBQVcsRUFBRSxLQUFhO1FBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxzQ0FBYSxHQUFwQixVQUFxQixLQUFjO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFBO0lBQ3hCLENBQUM7SUFFTSwrQ0FBc0IsR0FBN0IsVUFBOEIsS0FBYztRQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQTtJQUM1QixDQUFDO0lBRU0sNkNBQW9CLEdBQTNCLFVBQTRCLE1BQWlDO1FBQzVELElBQUksQ0FBQyxpQkFBaUIseUJBQVEsSUFBSSxDQUFDLGlCQUFpQixHQUFLLE1BQU0sQ0FBRSxDQUFDO0lBQ25FLENBQUM7SUFFTSx5Q0FBZ0IsR0FBdkIsVUFBd0IsS0FBYTtRQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRU0scUNBQVksR0FBbkIsVUFBb0IsS0FBYTtRQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRU0sa0NBQVMsR0FBaEIsVUFBaUIsTUFBc0I7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUVNLGlDQUFRLEdBQWYsVUFBZ0IsS0FBYTtRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRU0seUNBQWdCLEdBQXZCLFVBQXdCLEtBQWE7UUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVNLDBDQUFpQixHQUF4QixVQUF5QixLQUFzQztRQUM5RCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO3lCQW5GRjs7OztJQTJHQyx1QkFBWSxPQUFlO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxrQ0FBVSxHQUFqQixVQUFrQixPQUFlO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFDTSxvQ0FBWSxHQUFuQixVQUFvQixTQUFpQjtRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBQ00sbUNBQVcsR0FBbEIsVUFBbUIsUUFBZ0I7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQztJQUNNLHFDQUFhLEdBQXBCLFVBQXFCLFVBQWtCO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQzlCLENBQUM7SUFDTSxtQ0FBVyxHQUFsQixVQUFtQixRQUFnQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00sa0NBQVUsR0FBakIsVUFBa0IsT0FBZTtRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQ00sa0NBQVUsR0FBakIsVUFBa0IsT0FBZTtRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO3dCQTlKRjs7OztJQThLMkMseUNBQTBCOzs7O0lBR3BFLDZDQUFhLGFBQUMsTUFBc0I7SUFNcEMsMENBQVUsYUFBQyxLQUFvQjtJQUsvQix5Q0FBUyxhQUFDLE1BQWM7SUFLeEIsNENBQVksYUFBQyxTQUFjO0lBSzNCLDJDQUFXLGFBQUMsUUFBYTtJQUt6Qiw0Q0FBWSxhQUFDLFNBQWM7SUFLM0Isc0NBQU0sYUFBQyxHQUFRO0lBS2YseUNBQVMsYUFBQyxNQUFXO0lBS3JCLDZDQUFhLGFBQUMsR0FBUTtJQUt0QiwyQ0FBVztJQUtYLDZDQUFhO0lBS2IscUNBQUs7SUFLTCx1Q0FBTztJQUtQLDJDQUFXO0lBS1gsNkNBQWE7SUFLYix3Q0FBUTtJQUtSLDBDQUFVO0lBS1YsMENBQVU7SUFLVixxQ0FBSztJQUtMLHFDQUFLO0lBS0wscUNBQUs7SUFLTCxxQ0FBSztJQUtMLHFDQUFLO0lBS0wsMENBQVU7SUFLVixzQ0FBTTtJQUtOLHNDQUFNO0lBS04sZ0RBQWdCO0lBS2hCLG1EQUFtQixhQUFDLEtBQVU7SUFLOUIsaURBQWlCLGFBQUMsS0FBVTtJQUs1Qiw2Q0FBYSxhQUFDLEtBQVU7SUFLeEIsdUNBQU8sYUFBQyxLQUFVO0lBS2xCLGtEQUFrQixhQUFDLEdBQVc7SUFTOUIsNENBQVksYUFBQyxLQUFhO0lBSzFCLHdEQUF3QjtJQUt4Qix3REFBd0IsYUFBQyxlQUF1QjtJQUtoRCwyREFBMkIsYUFBQyxlQUF1QjtJQU9qRCxtRUFBbUM7SUFrQnJDLGlEQUFpQixhQUFDLEdBQVE7Ozs7OztnQ0E5WDNCO0VBOEsyQywwQkFBMEI7U0FBeEQscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGVudW0gVHJhY2tpZXJFbnZpcm9ubWVudCB7XG5cdERldmVsb3BtZW50ID0gJ2RldmVsb3BtZW50Jyxcblx0UHJvZHVjdGlvbiA9ICdwcm9kdWN0aW9uJyxcblx0VGVzdGluZyA9ICd0ZXN0aW5nJyxcbn1cblxuZXhwb3J0IGVudW0gVHJhY2tpZXJSZWdpb24ge1xuXHRJTiA9ICdJTicsXG5cdEdMT0JBTCA9ICdHTE9CQUwnLFxuXHROT05FID0gJ05PTkUnXG59XG5cbmV4cG9ydCBlbnVtIFRyYWNraWVyRW5jcnlwdGlvblR5cGUge1xuXHRBRVNfR0NNID0gJ0FFU19HQ00nXG59XG5cbmV4cG9ydCBjbGFzcyBUcmFja2llckNvbmZpZyB7XG5cdHByaXZhdGUgYXBwVG9rZW46IHN0cmluZztcblx0cHJpdmF0ZSBlbnZpcm9ubWVudDogVHJhY2tpZXJFbnZpcm9ubWVudDtcblx0cHJpdmF0ZSBzZWNyZXRJZDogc3RyaW5nID0gJyc7XG5cdHByaXZhdGUgc2VjcmV0S2V5OiBzdHJpbmcgPSAnJztcblx0cHJpdmF0ZSBtYW51YWxNb2RlOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgZGlzYWJsZU9yZ2FuaWM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBmYWNlYm9va0FwcElkOiBzdHJpbmcgPSAnJztcblx0cHJpdmF0ZSBhbmRyb2lkSWQ6IHN0cmluZyA9ICcnO1xuXHRwcml2YXRlIGF0dHJpYnV0aW9uUGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cdHByaXZhdGUgcmVnaW9uOiBzdHJpbmcgPSAnJztcblx0XG5cdGNvbnN0cnVjdG9yKGFwcFRva2VuOiBzdHJpbmcsIGVudmlyb25tZW50OiBUcmFja2llckVudmlyb25tZW50KSB7XG5cdFx0dGhpcy5hcHBUb2tlbiA9IGFwcFRva2VuO1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0XHR0aGlzLnNlY3JldElkID0gdGhpcy5zZWNyZXRJZDtcblx0XHR0aGlzLnNlY3JldEtleSA9IHRoaXMuc2VjcmV0S2V5O1xuXHRcdHRoaXMubWFudWFsTW9kZSA9IHRoaXMubWFudWFsTW9kZTtcblx0XHR0aGlzLmRpc2FibGVPcmdhbmljID0gdGhpcy5kaXNhYmxlT3JnYW5pYztcblx0XHR0aGlzLmFuZHJvaWRJZCA9IHRoaXMuYW5kcm9pZElkO1xuXHRcdHRoaXMuZmFjZWJvb2tBcHBJZCA9IHRoaXMuZmFjZWJvb2tBcHBJZDtcblx0fVxuXG5cdHB1YmxpYyBzZXRBcHBTZWNyZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnNlY3JldElkID0ga2V5O1xuXHRcdHRoaXMuc2VjcmV0S2V5ID0gdmFsdWU7XG5cdH1cblxuXHRwdWJsaWMgc2V0TWFudWFsTW9kZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMubWFudWFsTW9kZSA9IHZhbHVlXG5cdH1cblxuXHRwdWJsaWMgZGlzYWJsZU9yZ2FuaWNUcmFja2luZyh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZGlzYWJsZU9yZ2FuaWMgPSB2YWx1ZVxuXHR9XG5cblx0cHVibGljIHNldEF0dHJpYnV0aW9uUGFyYW1zKHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQge1xuXHRcdHRoaXMuYXR0cmlidXRpb25QYXJhbXMgPSB7IC4uLnRoaXMuYXR0cmlidXRpb25QYXJhbXMsIC4uLnBhcmFtcyB9O1xuXHR9IFxuXG5cdHB1YmxpYyBzZXRGYWNlYm9va0FwcElkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmZhY2Vib29rQXBwSWQgPSB2YWx1ZTtcblx0fVxuXG5cdHB1YmxpYyBzZXRBbmRyb2lkSWQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuYW5kcm9pZElkID0gdmFsdWU7XG5cdH1cblxuXHRwdWJsaWMgc2V0UmVnaW9uKHJlZ2lvbjogVHJhY2tpZXJSZWdpb24pOiB2b2lkIHtcblx0XHR0aGlzLnJlZ2lvbiA9IHJlZ2lvbjtcblx0fVxuXG5cdHB1YmxpYyBzZXRBcHBJRCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5hcHBJZCA9IHZhbHVlO1xuXHR9XG5cblx0cHVibGljIHNldEVuY3J5cHRpb25LZXkodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuZW5jcnlwdGlvbktleSA9IHZhbHVlO1xuXHR9XG5cblx0cHVibGljIHNldEVuY3J5cHRpb25UeXBlKHZhbHVlOiBUcmFja2llckVuY3J5cHRpb25UeXBlIHwgc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5lbmNyeXB0aW9uVHlwZSA9IHZhbHVlO1xuXHR9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFRyYWNraWVyRXZlbnQge1xuXG5cdHByaXZhdGUgZXZlbnRJZDogc3RyaW5nO1xuXHRwcml2YXRlIG9yZGVySWQ6IHN0cmluZztcblx0cHJpdmF0ZSBwcm9kdWN0SWQ6IHN0cmluZztcblx0cHJpdmF0ZSBjdXJyZW5jeTogc3RyaW5nO1xuXHRwcml2YXRlIGNvdXBvbkNvZGU6IHN0cmluZztcblx0cHJpdmF0ZSBkaXNjb3VudDogbnVtYmVyXG5cdHByaXZhdGUgcGFyYW0xOiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW0yOiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW0zOiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW00OiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW01OiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW02OiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW03OiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW04OiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW05OiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW0xMDogc3RyaW5nO1xuXHRwcml2YXRlIHJldmVudWU6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3RvcihldmVudElkOiBzdHJpbmcpIHtcblx0XHR0aGlzLmV2ZW50SWQgPSBldmVudElkO1xuXHR9XG5cblx0cHVibGljIHNldE9yZGVySWQob3JkZXJJZDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5vcmRlcklkID0gb3JkZXJJZDtcblx0fVxuXHRwdWJsaWMgc2V0UHJvZHVjdElkKHByb2R1Y3RJZDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wcm9kdWN0SWQgPSBwcm9kdWN0SWQ7XG5cdH1cblx0cHVibGljIHNldEN1cnJlbmN5KGN1cnJlbmN5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmN1cnJlbmN5ID0gY3VycmVuY3k7XG5cdH1cblx0cHVibGljIHNldENvdXBvbkNvZGUoY291cG9uQ29kZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jb3Vwb25Db2RlID0gY291cG9uQ29kZTtcblx0fVxuXHRwdWJsaWMgc2V0RGlzY291bnQoZGlzY291bnQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuZGlzY291bnQgPSBkaXNjb3VudDtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW0xKHBhcmFtMTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTEgPSBwYXJhbTE7XG5cdH1cblx0cHVibGljIHNldFBhcmFtMihwYXJhbTI6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW0yID0gcGFyYW0yO1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTMocGFyYW0zOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtMyA9IHBhcmFtMztcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW00KHBhcmFtNDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTQgPSBwYXJhbTQ7XG5cdH1cblx0cHVibGljIHNldFBhcmFtNShwYXJhbTU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW01ID0gcGFyYW01O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTYocGFyYW02OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtNiA9IHBhcmFtNjtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW03KHBhcmFtNzogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTcgPSBwYXJhbTc7XG5cdH1cblx0cHVibGljIHNldFBhcmFtOChwYXJhbTg6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW04ID0gcGFyYW04O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTkocGFyYW05OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtOSA9IHBhcmFtOTtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW0xMChwYXJhbTEwOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtMTAgPSBwYXJhbTEwO1xuXHR9XG5cdHB1YmxpYyBzZXRSZXZlbnVlKHJldmVudWU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucmV2ZW51ZSA9IHJldmVudWU7XG5cdH1cblxuXHRzZXRFdmVudFZhbHVlOiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbn1cblxuXG5AUGx1Z2luKHtcblx0cGx1Z2luTmFtZTogJ1RyYWNraWVyQ29yZG92YVBsdWdpbicsXG5cdHBsdWdpbjogJ2NvbS50cmFja2llci5jb3Jkb3ZhX3NkaycsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuXHRwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuVHJhY2tpZXJDb3Jkb3ZhUGx1Z2luJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuXHRyZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3RyYWNraWVyL2NvcmRvdmFfc2RrJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuXHQvL2luc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcblx0Ly9pbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcblx0cGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhY2tpZXJDb3Jkb3ZhUGx1Z2luIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuXG5cdEBDb3Jkb3ZhKClcblx0aW5pdGlhbGl6ZVNESyhjb25maWc6IFRyYWNraWVyQ29uZmlnKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG4gXG5cdCBcblx0QENvcmRvdmEoKVxuXHR0cmFja0V2ZW50KGV2ZW50OiBUcmFja2llckV2ZW50KTogUHJvbWlzZTxhbnk+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNldFVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRVc2VyRW1haWwodXNlckVtYWlsOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0VXNlck5hbWUodXNlck5hbWU6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRVc2VyUGhvbmUodXNlclBob25lOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0RE9CKGRvYjogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNldEdlbmRlcihnZW5kZXI6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRwYXJzZURlZXBMaW5rKHVyaTogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGZpcmVJbnN0YWxsKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRUcmFja2llcklkKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRBZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0QWRJRCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0Q2FtcGFpZ24oKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldENhbXBhaWduSUQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldEFkU2V0KCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRBZFNldElEKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRDaGFubmVsKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRQMSgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0UDIoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldFAzKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRQNCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0UDUoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldENsaWNrSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldERsdigpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0UGlkKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRJc1JldGFyZ2V0aW5nKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHR1cGRhdGVBcHBsZUFkc1Rva2VuKHRva2VuOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Y3JlYXRlRHluYW1pY0xpbmsodmFsdWU6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRNYWNBZGRyZXNzKHZhbHVlOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0SU1FSSh2YWx1ZTogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHJlc29sdmVEZWVwbGlua1VybCh1cmw6IHN0cmluZyk6IFByb21pc2U8e1xuXHRcdHVybDogc3RyaW5nO1xuXHRcdGRsdjogc3RyaW5nO1xuXHRcdHNka1BhcmFtczogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcblx0fT4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2VuZEZjbVRva2VuKHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c3Vic2NyaWJlQXR0cmlidXRpb25saW5rKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHR1cGRhdGVQb3N0YmFja0NvbnZlcnNpb24oY29udmVyc2lvblZhbHVlOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0d2FpdEZvckFUVFVzZXJBdXRob3JpemF0aW9uKHRpbWVvdXRJbnRlcnZhbDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSh7XG5cdFx0b2JzZXJ2YWJsZTogdHJ1ZSAvLyBUaGlzIGFsbG93cyBjYWxsYmFjay1iYXNlZCBldmVudHNcblx0ICB9KVxuXHQgIHNldERlZmVycmVkRGVlcGxpbmtDYWxsYmFja0xpc3RlbmVyKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuXHRcdCAgY29yZG92YS5leGVjKFxuXHRcdFx0KGRlZXBMaW5rVXJsOiBzdHJpbmcpID0+IHtcblx0XHRcdG9ic2VydmVyLm5leHQoZGVlcExpbmtVcmwpO1xuXHRcdFx0b2JzZXJ2ZXIuY29tcGxldGUoKTtcblx0XHRcdH0sXG5cdFx0XHQoZXJyb3I6IGFueSkgPT4ge1xuXHRcdFx0b2JzZXJ2ZXIuZXJyb3IoZXJyb3IpO1xuXHRcdFx0fSxcblx0XHRcdFwiVHJhY2tpZXJDb3Jkb3ZhUGx1Z2luXCIsXG5cdFx0XHRcInRyYWNraWVyX2RlZmVycmVkRGVlcGxpbmtcIixcblx0XHRcdFtdXG5cdFx0ICApO1xuXHRcdH0pO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzdG9yZVJldGFyZ2V0dGluZyhkb2I6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG59Il19