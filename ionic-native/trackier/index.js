var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
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
    TrackierCordovaPluginOriginal.pluginName = "TrackierCordovaPlugin";
    TrackierCordovaPluginOriginal.plugin = "com.trackier.cordova_sdk";
    TrackierCordovaPluginOriginal.pluginRef = "cordova.plugins.TrackierCordovaPlugin";
    TrackierCordovaPluginOriginal.repo = "https://github.com/trackier/cordova_sdk";
    TrackierCordovaPluginOriginal.platforms = ["Android"];
    return TrackierCordovaPluginOriginal;
}(AwesomeCordovaNativePlugin));
var TrackierCordovaPlugin = new TrackierCordovaPluginOriginal();
export { TrackierCordovaPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdHJhY2tpZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sdUNBQThCLE1BQU0sK0JBQStCLENBQUM7QUFHM0UsTUFBTSxDQUFOLElBQVksbUJBSVg7QUFKRCxXQUFZLG1CQUFtQjtJQUM5QixrREFBMkIsQ0FBQTtJQUMzQixnREFBeUIsQ0FBQTtJQUN6QiwwQ0FBbUIsQ0FBQTtBQUNwQixDQUFDLEVBSlcsbUJBQW1CLEtBQW5CLG1CQUFtQixRQUk5Qjs7SUFLQSx3QkFBWSxRQUFnQixFQUFFLFdBQWdDO1FBQzdELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2hDLENBQUM7eUJBZkY7Ozs7SUFxQ0MsdUJBQVksT0FBZTtRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRU0sa0NBQVUsR0FBakIsVUFBa0IsT0FBZTtRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQ00sbUNBQVcsR0FBbEIsVUFBbUIsUUFBZ0I7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQztJQUNTLHFDQUFhLEdBQXBCLFVBQXFCLFVBQWtCO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQzlCLENBQUM7SUFDTSxtQ0FBVyxHQUFsQixVQUFtQixRQUFnQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ00sa0NBQVUsR0FBakIsVUFBa0IsT0FBZTtRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQ00sa0NBQVUsR0FBakIsVUFBa0IsT0FBZTtRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO3dCQXJGRjs7OztJQXFHMkMseUNBQTBCOzs7O0lBR3BFLDZDQUFhLGFBQUMsTUFBc0I7SUFLcEMsMENBQVUsYUFBQyxLQUFvQjtJQUsvQix5Q0FBUyxhQUFDLE1BQWM7SUFLeEIsNENBQVksYUFBRSxTQUFjO0lBSzVCLDJDQUFXLGFBQUMsUUFBYTtJQUt6Qiw0Q0FBWSxhQUFDLFNBQWM7Ozs7OztnQ0FqSTVCO0VBcUcyQywwQkFBMEI7U0FBeEQscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBlbnVtIFRyYWNraWVyRW52aXJvbm1lbnQge1xuXHREZXZlbG9wbWVudCA9ICdkZXZlbG9wbWVudCcsXG5cdFByb2R1Y3Rpb24gPSAncHJvZHVjdGlvbidcblx0VGVzdGluZyA9ICd0ZXN0aW5nJ1xufVxuXG5leHBvcnQgY2xhc3MgVHJhY2tpZXJDb25maWcge1xuXHRwcml2YXRlIGFwcFRva2VuOiBzdHJpbmc7XG5cdHByaXZhdGUgZW52aXJvbm1lbnQ6IFRyYWNraWVyRW52aXJvbm1lbnQ7XG5cdGNvbnN0cnVjdG9yKGFwcFRva2VuOiBzdHJpbmcsIGVudmlyb25tZW50OiBUcmFja2llckVudmlyb25tZW50KSB7XG5cdFx0dGhpcy5hcHBUb2tlbiA9IGFwcFRva2VuO1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHJhY2tpZXJFdmVudCB7XG5cblx0cHJpdmF0ZSBldmVudElkOiBzdHJpbmc7XG5cdHByaXZhdGUgb3JkZXJJZDogc3RyaW5nO1xuXHRwcml2YXRlIGN1cnJlbmN5OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjb3Vwb25Db2RlOiBzdHJpbmc7XG5cdHByaXZhdGUgZGlzY291bnQ6IG51bWJlclxuXHRwcml2YXRlIHBhcmFtMTogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtMjogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtMzogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtNDogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtNTogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtNjogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtNzogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtODogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtOTogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtMTA6IHN0cmluZztcblx0cHJpdmF0ZSByZXZlbnVlOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoZXZlbnRJZDogc3RyaW5nKSB7XG5cdFx0dGhpcy5ldmVudElkID0gZXZlbnRJZDtcblx0fVxuXHRcblx0cHVibGljIHNldE9yZGVySWQob3JkZXJJZDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5vcmRlcklkID0gb3JkZXJJZDtcblx0fVxuXHRwdWJsaWMgc2V0Q3VycmVuY3koY3VycmVuY3k6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuY3VycmVuY3kgPSBjdXJyZW5jeTtcblx0fVxuICAgIHB1YmxpYyBzZXRDb3Vwb25Db2RlKGNvdXBvbkNvZGU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuY291cG9uQ29kZSA9IGNvdXBvbkNvZGU7XG5cdH1cblx0cHVibGljIHNldERpc2NvdW50KGRpc2NvdW50OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmRpc2NvdW50ID0gZGlzY291bnQ7XG5cdH1cblx0cHVibGljIHNldFBhcmFtMShwYXJhbTE6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW0xID0gcGFyYW0xO1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTIocGFyYW0yOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtMiA9IHBhcmFtMjtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW0zKHBhcmFtMzogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTMgPSBwYXJhbTM7XG5cdH1cblx0cHVibGljIHNldFBhcmFtNChwYXJhbTQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW00ID0gcGFyYW00O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTUocGFyYW01OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtNSA9IHBhcmFtNTtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW02KHBhcmFtNjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTYgPSBwYXJhbTY7XG5cdH1cblx0cHVibGljIHNldFBhcmFtNyhwYXJhbTc6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW03ID0gcGFyYW03O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTgocGFyYW04OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtOCA9IHBhcmFtODtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW05KHBhcmFtOTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTkgPSBwYXJhbTk7XG5cdH1cblx0cHVibGljIHNldFBhcmFtMTAocGFyYW0xMDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTEwID0gcGFyYW0xMDtcblx0fVxuXHRwdWJsaWMgc2V0UmV2ZW51ZShyZXZlbnVlOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnJldmVudWUgPSByZXZlbnVlO1xuXHR9XG5cdFxuXHRzZXRFdmVudFZhbHVlOiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbn1cblxuXG5AUGx1Z2luKHtcblx0cGx1Z2luTmFtZTogJ1RyYWNraWVyQ29yZG92YVBsdWdpbicsXG5cdHBsdWdpbjogJ2NvbS50cmFja2llci5jb3Jkb3ZhX3NkaycsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuXHRwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuVHJhY2tpZXJDb3Jkb3ZhUGx1Z2luJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuXHRyZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3RyYWNraWVyL2NvcmRvdmFfc2RrJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuXHQvL2luc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcblx0Ly9pbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcblx0cGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhY2tpZXJDb3Jkb3ZhUGx1Z2luIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuXG5cdEBDb3Jkb3ZhKClcblx0aW5pdGlhbGl6ZVNESyhjb25maWc6IFRyYWNraWVyQ29uZmlnKTogUHJvbWlzZTxhbnk+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHRyYWNrRXZlbnQoZXZlbnQ6IFRyYWNraWVyRXZlbnQpOiBQcm9taXNlPGFueT4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0VXNlcklkKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNldFVzZXJFbWFpbCAodXNlckVtYWlsOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0VXNlck5hbWUodXNlck5hbWU6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRVc2VyUGhvbmUodXNlclBob25lOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG59Il19