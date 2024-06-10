import { __decorate, __extends } from "tslib";
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export var TrackierEnvironment;
(function (TrackierEnvironment) {
    TrackierEnvironment["Development"] = "development";
    TrackierEnvironment["Production"] = "production";
    TrackierEnvironment["Testing"] = "testing";
})(TrackierEnvironment || (TrackierEnvironment = {}));
var TrackierConfig = /** @class */ (function () {
    function TrackierConfig(appToken, environment) {
        this.secretId = '';
        this.secretKey = '';
        this.manualMode = false;
        this.boolean = false;
        this.appToken = appToken;
        this.environment = environment;
        this.secretId = this.secretId;
        this.secretKey = this.secretKey;
        this.manualMode = this.manualMode;
        this.disableOrganic = this.disableOrganic;
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
        }], propDecorators: { initializeSDK: [], trackEvent: [], setUserId: [], setUserEmail: [], setUserName: [], setUserPhone: [], setDOB: [], setGender: [], parseDeepLink: [], fireInstall: [], getTrackierId: [], getAd: [], getAdID: [], getCampaign: [], getCampaignID: [], getAdSet: [], getAdSetID: [], getChannel: [], getP1: [], getP2: [], getP3: [], getP4: [], getP5: [], getClickId: [], getDlv: [], getPid: [], getIsRetargeting: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdHJhY2tpZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLHVDQUE4QixNQUFNLCtCQUErQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLE1BQU0sQ0FBTixJQUFZLG1CQUlYO0FBSkQsV0FBWSxtQkFBbUI7SUFDOUIsa0RBQTJCLENBQUE7SUFDM0IsZ0RBQXlCLENBQUE7SUFDekIsMENBQW1CLENBQUE7QUFDcEIsQ0FBQyxFQUpXLG1CQUFtQixLQUFuQixtQkFBbUIsUUFJOUI7O0lBU0Esd0JBQVksUUFBZ0IsRUFBRSxXQUFnQztRQUp0RCxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUNiLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUE7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFBO0lBQzFDLENBQUM7SUFFTSxxQ0FBWSxHQUFuQixVQUFvQixHQUFXLEVBQUUsS0FBYTtRQUM3QyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRU0s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Q0FBSztJQUtMLDBDQUFVO0lBS1Ysc0NBQU07SUFLTixzQ0FBTTtJQUtOLGdEQUFnQjt1SEFySUoscUJBQXFCOzJIQUFyQixxQkFBcUI7Ozs7OztJQUFyQixxQkFBcUIsa0JBQXJCLHFCQUFxQjtnQ0EvSGxDO0VBK0gyQywwQkFBMEI7U0FBeEQscUJBQXFCOzRGQUFyQixxQkFBcUI7a0JBRGpDLFVBQVU7OEJBSVYsYUFBYSxNQUtiLFVBQVUsTUFLVixTQUFTLE1BS1QsWUFBWSxNQUtaLFdBQVcsTUFLWCxZQUFZLE1BS1osTUFBTSxNQUtOLFNBQVMsTUFLVCxhQUFhLE1BS2IsV0FBVyxNQUtYLGFBQWEsTUFLYixLQUFLLE1BS0wsT0FBTyxNQUtQLFdBQVcsTUFLWCxhQUFhLE1BS2IsUUFBUSxNQUtSLFVBQVUsTUFLVixVQUFVLE1BS1YsS0FBSyxNQUtMLEtBQUssTUFLTCxLQUFLLE1BS0wsS0FBSyxNQUtMLEtBQUssTUFLTCxVQUFVLE1BS1YsTUFBTSxNQUtOLE1BQU0sTUFLTixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGVudW0gVHJhY2tpZXJFbnZpcm9ubWVudCB7XG5cdERldmVsb3BtZW50ID0gJ2RldmVsb3BtZW50Jyxcblx0UHJvZHVjdGlvbiA9ICdwcm9kdWN0aW9uJ1xuXHRUZXN0aW5nID0gJ3Rlc3RpbmcnXG59XG5cbmV4cG9ydCBjbGFzcyBUcmFja2llckNvbmZpZyB7XG5cdHByaXZhdGUgYXBwVG9rZW46IHN0cmluZztcblx0cHJpdmF0ZSBlbnZpcm9ubWVudDogVHJhY2tpZXJFbnZpcm9ubWVudDtcblx0cHJpdmF0ZSBzZWNyZXRJZDogc3RyaW5nID0gJyc7XG5cdHByaXZhdGUgc2VjcmV0S2V5OiBzdHJpbmcgPSAnJztcblx0cHJpdmF0ZSBtYW51YWxNb2RlOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgZGlzYWJsZU9yZ2FuaWMgYm9vbGVhbiA9IGZhbHNlO1xuXHRjb25zdHJ1Y3RvcihhcHBUb2tlbjogc3RyaW5nLCBlbnZpcm9ubWVudDogVHJhY2tpZXJFbnZpcm9ubWVudCkge1xuXHRcdHRoaXMuYXBwVG9rZW4gPSBhcHBUb2tlbjtcblx0XHR0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG5cdFx0dGhpcy5zZWNyZXRJZCA9IHRoaXMuc2VjcmV0SWQ7XG5cdFx0dGhpcy5zZWNyZXRLZXkgPSB0aGlzLnNlY3JldEtleVxuXHRcdHRoaXMubWFudWFsTW9kZSA9IHRoaXMubWFudWFsTW9kZVxuXHRcdHRoaXMuZGlzYWJsZU9yZ2FuaWMgPSB0aGlzLmRpc2FibGVPcmdhbmljXG5cdH1cblxuXHRwdWJsaWMgc2V0QXBwU2VjcmV0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zZWNyZXRJZCA9IGtleTtcblx0XHR0aGlzLnNlY3JldEtleSA9IHZhbHVlO1xuXHR9XG5cblx0cHVibGljIHNldE1hbnVhbE1vZGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLm1hbnVhbE1vZGUgPSB2YWx1ZVxuXHR9XG5cblx0cHVibGljIGRpc2FibGVPcmdhbmljVHJhY2tpbmcodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmRpc2FibGVPcmdhbmljID0gdmFsdWVcblx0fVxuXG59XG5cbmV4cG9ydCBjbGFzcyBUcmFja2llckV2ZW50IHtcblxuXHRwcml2YXRlIGV2ZW50SWQ6IHN0cmluZztcblx0cHJpdmF0ZSBvcmRlcklkOiBzdHJpbmc7XG5cdHByaXZhdGUgcHJvZHVjdElkOiBzdHJpbmc7XG5cdHByaXZhdGUgY3VycmVuY3k6IHN0cmluZztcblx0cHJpdmF0ZSBjb3Vwb25Db2RlOiBzdHJpbmc7XG5cdHByaXZhdGUgZGlzY291bnQ6IG51bWJlclxuXHRwcml2YXRlIHBhcmFtMTogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtMjogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtMzogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtNDogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtNTogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtNjogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtNzogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtODogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtOTogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtMTA6IHN0cmluZztcblx0cHJpdmF0ZSByZXZlbnVlOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoZXZlbnRJZDogc3RyaW5nKSB7XG5cdFx0dGhpcy5ldmVudElkID0gZXZlbnRJZDtcblx0fVxuXG5cdHB1YmxpYyBzZXRPcmRlcklkKG9yZGVySWQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMub3JkZXJJZCA9IG9yZGVySWQ7XG5cdH1cblx0cHVibGljIHNldFByb2R1Y3RJZChwcm9kdWN0SWQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucHJvZHVjdElkID0gcHJvZHVjdElkO1xuXHR9XG5cdHB1YmxpYyBzZXRDdXJyZW5jeShjdXJyZW5jeTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuXHR9XG5cdHB1YmxpYyBzZXRDb3Vwb25Db2RlKGNvdXBvbkNvZGU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuY291cG9uQ29kZSA9IGNvdXBvbkNvZGU7XG5cdH1cblx0cHVibGljIHNldERpc2NvdW50KGRpc2NvdW50OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmRpc2NvdW50ID0gZGlzY291bnQ7XG5cdH1cblx0cHVibGljIHNldFBhcmFtMShwYXJhbTE6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW0xID0gcGFyYW0xO1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTIocGFyYW0yOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtMiA9IHBhcmFtMjtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW0zKHBhcmFtMzogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTMgPSBwYXJhbTM7XG5cdH1cblx0cHVibGljIHNldFBhcmFtNChwYXJhbTQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW00ID0gcGFyYW00O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTUocGFyYW01OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtNSA9IHBhcmFtNTtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW02KHBhcmFtNjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTYgPSBwYXJhbTY7XG5cdH1cblx0cHVibGljIHNldFBhcmFtNyhwYXJhbTc6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW03ID0gcGFyYW03O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTgocGFyYW04OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtOCA9IHBhcmFtODtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW05KHBhcmFtOTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTkgPSBwYXJhbTk7XG5cdH1cblx0cHVibGljIHNldFBhcmFtMTAocGFyYW0xMDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTEwID0gcGFyYW0xMDtcblx0fVxuXHRwdWJsaWMgc2V0UmV2ZW51ZShyZXZlbnVlOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnJldmVudWUgPSByZXZlbnVlO1xuXHR9XG5cblx0c2V0RXZlbnRWYWx1ZTogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG59XG5cblxuQFBsdWdpbih7XG5cdHBsdWdpbk5hbWU6ICdUcmFja2llckNvcmRvdmFQbHVnaW4nLFxuXHRwbHVnaW46ICdjb20udHJhY2tpZXIuY29yZG92YV9zZGsnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcblx0cGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLlRyYWNraWVyQ29yZG92YVBsdWdpbicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cblx0cmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90cmFja2llci9jb3Jkb3ZhX3NkaycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cblx0Ly9pbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG5cdC8vaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG5cdHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYWNraWVyQ29yZG92YVBsdWdpbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcblxuXHRAQ29yZG92YSgpXG5cdGluaXRpYWxpemVTREsoY29uZmlnOiBUcmFja2llckNvbmZpZyk6IFByb21pc2U8YW55PiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHR0cmFja0V2ZW50KGV2ZW50OiBUcmFja2llckV2ZW50KTogUHJvbWlzZTxhbnk+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNldFVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRVc2VyRW1haWwodXNlckVtYWlsOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0VXNlck5hbWUodXNlck5hbWU6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRVc2VyUGhvbmUodXNlclBob25lOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0RE9CKGRvYjogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNldEdlbmRlcihnZW5kZXI6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRwYXJzZURlZXBMaW5rKHVyaTogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGZpcmVJbnN0YWxsKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRUcmFja2llcklkKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRBZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0QWRJRCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0Q2FtcGFpZ24oKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldENhbXBhaWduSUQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldEFkU2V0KCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRBZFNldElEKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRDaGFubmVsKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRQMSgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0UDIoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldFAzKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRQNCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0UDUoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldENsaWNrSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldERsdigpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0UGlkKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRJc1JldGFyZ2V0aW5nKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG59Il19