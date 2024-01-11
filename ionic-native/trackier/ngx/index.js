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
        this.appToken = appToken;
        this.environment = environment;
        this.secretId = this.secretId;
        this.secretKey = this.secretKey;
    }
    TrackierConfig.prototype.setAppSecret = function (key, value) {
        this.secretId = key;
        this.secretKey = value;
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
        }], propDecorators: { initializeSDK: [], trackEvent: [], setUserId: [], setUserEmail: [], setUserName: [], setUserPhone: [], getTrackierId: [], getAd: [], getAdID: [], getCampaign: [], getCampaignID: [], getAdSet: [], getAdSetID: [], getChannel: [], getP1: [], getP2: [], getP3: [], getP4: [], getP5: [], getClickId: [], getDlv: [], getPid: [], getIsRetargeting: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdHJhY2tpZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLHVDQUE4QixNQUFNLCtCQUErQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLE1BQU0sQ0FBTixJQUFZLG1CQUlYO0FBSkQsV0FBWSxtQkFBbUI7SUFDOUIsa0RBQTJCLENBQUE7SUFDM0IsZ0RBQXlCLENBQUE7SUFDekIsMENBQW1CLENBQUE7QUFDcEIsQ0FBQyxFQUpXLG1CQUFtQixLQUFuQixtQkFBbUIsUUFJOUI7O0lBT0Esd0JBQVksUUFBZ0IsRUFBRSxXQUFnQztRQUZ0RCxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFFOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQTtJQUNoQyxDQUFDO0lBRU0scUNBQVksR0FBbkIsVUFBb0IsR0FBVyxFQUFFLEtBQWE7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzt5QkF4QkY7Ozs7SUE4Q0MsdUJBQVksT0FBZTtRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRU0sa0NBQVUsR0FBakIsVUFBa0IsT0FBZTtRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFD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YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGVudW0gVHJhY2tpZXJFbnZpcm9ubWVudCB7XG5cdERldmVsb3BtZW50ID0gJ2RldmVsb3BtZW50Jyxcblx0UHJvZHVjdGlvbiA9ICdwcm9kdWN0aW9uJ1xuXHRUZXN0aW5nID0gJ3Rlc3RpbmcnXG59XG5cbmV4cG9ydCBjbGFzcyBUcmFja2llckNvbmZpZyB7XG5cdHByaXZhdGUgYXBwVG9rZW46IHN0cmluZztcblx0cHJpdmF0ZSBlbnZpcm9ubWVudDogVHJhY2tpZXJFbnZpcm9ubWVudDtcblx0cHJpdmF0ZSBzZWNyZXRJZDogc3RyaW5nID0gJyc7XG5cdHByaXZhdGUgc2VjcmV0S2V5OiBzdHJpbmcgPSAnJztcblx0Y29uc3RydWN0b3IoYXBwVG9rZW46IHN0cmluZywgZW52aXJvbm1lbnQ6IFRyYWNraWVyRW52aXJvbm1lbnQpIHtcblx0XHR0aGlzLmFwcFRva2VuID0gYXBwVG9rZW47XG5cdFx0dGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHRcdHRoaXMuc2VjcmV0SWQgPSB0aGlzLnNlY3JldElkO1xuXHRcdHRoaXMuc2VjcmV0S2V5ID0gdGhpcy5zZWNyZXRLZXlcblx0fVxuXG5cdHB1YmxpYyBzZXRBcHBTZWNyZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnNlY3JldElkID0ga2V5O1xuXHRcdHRoaXMuc2VjcmV0S2V5ID0gdmFsdWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyYWNraWVyRXZlbnQge1xuXG5cdHByaXZhdGUgZXZlbnRJZDogc3RyaW5nO1xuXHRwcml2YXRlIG9yZGVySWQ6IHN0cmluZztcblx0cHJpdmF0ZSBjdXJyZW5jeTogc3RyaW5nO1xuXHRwcml2YXRlIGNvdXBvbkNvZGU6IHN0cmluZztcblx0cHJpdmF0ZSBkaXNjb3VudDogbnVtYmVyXG5cdHByaXZhdGUgcGFyYW0xOiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW0yOiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW0zOiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW00OiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW01OiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW02OiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW03OiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW04OiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW05OiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW0xMDogc3RyaW5nO1xuXHRwcml2YXRlIHJldmVudWU6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3RvcihldmVudElkOiBzdHJpbmcpIHtcblx0XHR0aGlzLmV2ZW50SWQgPSBldmVudElkO1xuXHR9XG5cblx0cHVibGljIHNldE9yZGVySWQob3JkZXJJZDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5vcmRlcklkID0gb3JkZXJJZDtcblx0fVxuXHRwdWJsaWMgc2V0Q3VycmVuY3koY3VycmVuY3k6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuY3VycmVuY3kgPSBjdXJyZW5jeTtcblx0fVxuXHRwdWJsaWMgc2V0Q291cG9uQ29kZShjb3Vwb25Db2RlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmNvdXBvbkNvZGUgPSBjb3Vwb25Db2RlO1xuXHR9XG5cdHB1YmxpYyBzZXREaXNjb3VudChkaXNjb3VudDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5kaXNjb3VudCA9IGRpc2NvdW50O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTEocGFyYW0xOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtMSA9IHBhcmFtMTtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW0yKHBhcmFtMjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTIgPSBwYXJhbTI7XG5cdH1cblx0cHVibGljIHNldFBhcmFtMyhwYXJhbTM6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW0zID0gcGFyYW0zO1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTQocGFyYW00OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtNCA9IHBhcmFtNDtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW01KHBhcmFtNTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTUgPSBwYXJhbTU7XG5cdH1cblx0cHVibGljIHNldFBhcmFtNihwYXJhbTY6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW02ID0gcGFyYW02O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTcocGFyYW03OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtNyA9IHBhcmFtNztcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW04KHBhcmFtODogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTggPSBwYXJhbTg7XG5cdH1cblx0cHVibGljIHNldFBhcmFtOShwYXJhbTk6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW05ID0gcGFyYW05O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTEwKHBhcmFtMTA6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW0xMCA9IHBhcmFtMTA7XG5cdH1cblx0cHVibGljIHNldFJldmVudWUocmV2ZW51ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5yZXZlbnVlID0gcmV2ZW51ZTtcblx0fVxuXG5cdHNldEV2ZW50VmFsdWU6IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gdm9pZFxufVxuXG5cbkBQbHVnaW4oe1xuXHRwbHVnaW5OYW1lOiAnVHJhY2tpZXJDb3Jkb3ZhUGx1Z2luJyxcblx0cGx1Z2luOiAnY29tLnRyYWNraWVyLmNvcmRvdmFfc2RrJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG5cdHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5UcmFja2llckNvcmRvdmFQbHVnaW4nLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG5cdHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdHJhY2tpZXIvY29yZG92YV9zZGsnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG5cdC8vaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuXHQvL2luc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuXHRwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmFja2llckNvcmRvdmFQbHVnaW4gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG5cblx0QENvcmRvdmEoKVxuXHRpbml0aWFsaXplU0RLKGNvbmZpZzogVHJhY2tpZXJDb25maWcpOiBQcm9taXNlPGFueT4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0dHJhY2tFdmVudChldmVudDogVHJhY2tpZXJFdmVudCk6IFByb21pc2U8YW55PiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRVc2VySWQodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0VXNlckVtYWlsKHVzZXJFbWFpbDogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNldFVzZXJOYW1lKHVzZXJOYW1lOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0VXNlclBob25lKHVzZXJQaG9uZTogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldFRyYWNraWVySWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldEFkKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRBZElEKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRDYW1wYWlnbigpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0Q2FtcGFpZ25JRCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0QWRTZXQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldEFkU2V0SUQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldENoYW5uZWwoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldFAxKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRQMigpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0UDMoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldFA0KCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRQNSgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0Q2xpY2tJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0RGx2KCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRQaWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldElzUmV0YXJnZXRpbmcoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cbn0iXX0=