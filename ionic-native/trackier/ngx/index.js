import { __extends } from "tslib";
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';
export var TrackierEnvironment;
(function (TrackierEnvironment) {
    TrackierEnvironment["Development"] = "development";
    TrackierEnvironment["Production"] = "production";
    TrackierEnvironment["Testing"] = "testing";
})(TrackierEnvironment || (TrackierEnvironment = {}));
var TrackierConfig = /** @class */ (function () {
    function TrackierConfig(appToken, environment) {
        this.appToken = appToken;
        this.environment = environment;
    }
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
    TrackierCordovaPlugin.pluginName = "TrackierCordovaPlugin";
    TrackierCordovaPlugin.plugin = "com.trackier.cordova_sdk";
    TrackierCordovaPlugin.pluginRef = "cordova.plugins.TrackierCordovaPlugin";
    TrackierCordovaPlugin.repo = "https://github.com/trackier/cordova_sdk";
    TrackierCordovaPlugin.platforms = ["Android"];
    TrackierCordovaPlugin.decorators = [
        { type: Injectable }
    ];
    return TrackierCordovaPlugin;
}(AwesomeCordovaNativePlugin));
export { TrackierCordovaPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdHJhY2tpZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLHVDQUE4QixNQUFNLCtCQUErQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsTUFBTSxDQUFOLElBQVksbUJBSVg7QUFKRCxXQUFZLG1CQUFtQjtJQUM5QixrREFBMkIsQ0FBQTtJQUMzQixnREFBeUIsQ0FBQTtJQUN6QiwwQ0FBbUIsQ0FBQTtBQUNwQixDQUFDLEVBSlcsbUJBQW1CLEtBQW5CLG1CQUFtQixRQUk5Qjs7SUFLQSx3QkFBWSxRQUFnQixFQUFFLFdBQWdDO1FBQzdELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2hDLENBQUM7eUJBZkY7Ozs7SUFxQ0MsdUJBQVksT0FBZTtRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRU0sa0NBQVUsR0FBakIsVUFBa0IsT0FBZTtRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQ00sbUNBQVcsR0FBbEIsVUFBbUIsUUFBZ0I7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQztJQUNTLHFDQUFhLEdBQXBCLFVBQXFCLFVBQWtCO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQzlCLENBQUM7SUFDTSxtQ0FBVyxHQUFsQixVQUFtQixRQUFnQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00sa0NBQVUsR0FBakIsVUFBa0IsT0FBZTtRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQ00sa0NBQVUsR0FBakIsVUFBa0IsT0FBZTtRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO3dCQXJGRjs7OztJQXFHMkMseUNBQTBCOzs7O0lBR3BFLDZDQUFhLGFBQUMsTUFBc0I7SUFLcEMsMENBQVUsYUFBQyxLQUFvQjtJQUsvQix5Q0FBUyxhQUFDLE1BQWM7SUFLeEIsNENBQVksYUFBRSxTQUFjO0lBSzVCLDJDQUFXLGFBQUMsUUFBYTtJQUt6Qiw0Q0FBWSxhQUFDLFNBQWM7Ozs7Ozs7Z0JBN0IzQixVQUFVOztnQ0FwR1g7RUFxRzJDLDBCQUEwQjtTQUF4RCxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGVudW0gVHJhY2tpZXJFbnZpcm9ubWVudCB7XG5cdERldmVsb3BtZW50ID0gJ2RldmVsb3BtZW50Jyxcblx0UHJvZHVjdGlvbiA9ICdwcm9kdWN0aW9uJ1xuXHRUZXN0aW5nID0gJ3Rlc3RpbmcnXG59XG5cbmV4cG9ydCBjbGFzcyBUcmFja2llckNvbmZpZyB7XG5cdHByaXZhdGUgYXBwVG9rZW46IHN0cmluZztcblx0cHJpdmF0ZSBlbnZpcm9ubWVudDogVHJhY2tpZXJFbnZpcm9ubWVudDtcblx0Y29uc3RydWN0b3IoYXBwVG9rZW46IHN0cmluZywgZW52aXJvbm1lbnQ6IFRyYWNraWVyRW52aXJvbm1lbnQpIHtcblx0XHR0aGlzLmFwcFRva2VuID0gYXBwVG9rZW47XG5cdFx0dGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmFja2llckV2ZW50IHtcblxuXHRwcml2YXRlIGV2ZW50SWQ6IHN0cmluZztcblx0cHJpdmF0ZSBvcmRlcklkOiBzdHJpbmc7XG5cdHByaXZhdGUgY3VycmVuY3k6IHN0cmluZztcbiAgICBwcml2YXRlIGNvdXBvbkNvZGU6IHN0cmluZztcblx0cHJpdmF0ZSBkaXNjb3VudDogbnVtYmVyXG5cdHByaXZhdGUgcGFyYW0xOiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW0yOiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW0zOiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW00OiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW01OiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW02OiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW03OiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW04OiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW05OiBzdHJpbmc7XG5cdHByaXZhdGUgcGFyYW0xMDogc3RyaW5nO1xuXHRwcml2YXRlIHJldmVudWU6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3RvcihldmVudElkOiBzdHJpbmcpIHtcblx0XHR0aGlzLmV2ZW50SWQgPSBldmVudElkO1xuXHR9XG5cdFxuXHRwdWJsaWMgc2V0T3JkZXJJZChvcmRlcklkOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLm9yZGVySWQgPSBvcmRlcklkO1xuXHR9XG5cdHB1YmxpYyBzZXRDdXJyZW5jeShjdXJyZW5jeTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuXHR9XG4gICAgcHVibGljIHNldENvdXBvbkNvZGUoY291cG9uQ29kZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jb3Vwb25Db2RlID0gY291cG9uQ29kZTtcblx0fVxuXHRwdWJsaWMgc2V0RGlzY291bnQoZGlzY291bnQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuZGlzY291bnQgPSBkaXNjb3VudDtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW0xKHBhcmFtMTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTEgPSBwYXJhbTE7XG5cdH1cblx0cHVibGljIHNldFBhcmFtMihwYXJhbTI6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW0yID0gcGFyYW0yO1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTMocGFyYW0zOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtMyA9IHBhcmFtMztcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW00KHBhcmFtNDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTQgPSBwYXJhbTQ7XG5cdH1cblx0cHVibGljIHNldFBhcmFtNShwYXJhbTU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW01ID0gcGFyYW01O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTYocGFyYW02OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtNiA9IHBhcmFtNjtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW03KHBhcmFtNzogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTcgPSBwYXJhbTc7XG5cdH1cblx0cHVibGljIHNldFBhcmFtOChwYXJhbTg6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW04ID0gcGFyYW04O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTkocGFyYW05OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtOSA9IHBhcmFtOTtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW0xMChwYXJhbTEwOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtMTAgPSBwYXJhbTEwO1xuXHR9XG5cdHB1YmxpYyBzZXRSZXZlbnVlKHJldmVudWU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucmV2ZW51ZSA9IHJldmVudWU7XG5cdH1cblx0XG5cdHNldEV2ZW50VmFsdWU6IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gdm9pZFxufVxuXG5cbkBQbHVnaW4oe1xuXHRwbHVnaW5OYW1lOiAnVHJhY2tpZXJDb3Jkb3ZhUGx1Z2luJyxcblx0cGx1Z2luOiAnY29tLnRyYWNraWVyLmNvcmRvdmFfc2RrJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG5cdHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5UcmFja2llckNvcmRvdmFQbHVnaW4nLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG5cdHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdHJhY2tpZXIvY29yZG92YV9zZGsnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG5cdC8vaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuXHQvL2luc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuXHRwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmFja2llckNvcmRvdmFQbHVnaW4gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG5cblx0QENvcmRvdmEoKVxuXHRpbml0aWFsaXplU0RLKGNvbmZpZzogVHJhY2tpZXJDb25maWcpOiBQcm9taXNlPGFueT4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0dHJhY2tFdmVudChldmVudDogVHJhY2tpZXJFdmVudCk6IFByb21pc2U8YW55PiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRVc2VySWQodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0VXNlckVtYWlsICh1c2VyRW1haWw6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRVc2VyTmFtZSh1c2VyTmFtZTogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNldFVzZXJQaG9uZSh1c2VyUGhvbmU6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cbn0iXX0=