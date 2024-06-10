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
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
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
    TrackierCordovaPluginOriginal.pluginName = "TrackierCordovaPlugin";
    TrackierCordovaPluginOriginal.plugin = "com.trackier.cordova_sdk";
    TrackierCordovaPluginOriginal.pluginRef = "cordova.plugins.TrackierCordovaPlugin";
    TrackierCordovaPluginOriginal.repo = "https://github.com/trackier/cordova_sdk";
    TrackierCordovaPluginOriginal.platforms = ["Android"];
    return TrackierCordovaPluginOriginal;
}(AwesomeCordovaNativePlugin));
var TrackierCordovaPlugin = new TrackierCordovaPluginOriginal();
export { TrackierCordovaPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdHJhY2tpZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyx1Q0FBOEIsTUFBTSwrQkFBK0IsQ0FBQztBQUczRSxNQUFNLENBQU4sSUFBWSxtQkFJWDtBQUpELFdBQVksbUJBQW1CO0lBQzlCLGtEQUEyQixDQUFBO0lBQzNCLGdEQUF5QixDQUFBO0lBQ3pCLDBDQUFtQixDQUFBO0FBQ3BCLENBQUMsRUFKVyxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBSTlCOztJQVNBLHdCQUFZLFFBQWdCLEVBQUUsV0FBZ0M7UUFKdEQsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDYixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXRDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUE7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQTtJQUMxQyxDQUFDO0lBRU0scUNBQVksR0FBbkIsVUFBb0IsR0FBVyxFQUFFLEtBQWE7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVNLHNDQUFhLEdBQXBCLFVBQXFCLEtBQWM7UUFDbEMsSUFBSSxD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QU07SUFLTixnREFBZ0I7Ozs7OztnQ0FwUWpCO0VBK0gyQywwQkFBMEI7U0FBeEQscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBlbnVtIFRyYWNraWVyRW52aXJvbm1lbnQge1xuXHREZXZlbG9wbWVudCA9ICdkZXZlbG9wbWVudCcsXG5cdFByb2R1Y3Rpb24gPSAncHJvZHVjdGlvbidcblx0VGVzdGluZyA9ICd0ZXN0aW5nJ1xufVxuXG5leHBvcnQgY2xhc3MgVHJhY2tpZXJDb25maWcge1xuXHRwcml2YXRlIGFwcFRva2VuOiBzdHJpbmc7XG5cdHByaXZhdGUgZW52aXJvbm1lbnQ6IFRyYWNraWVyRW52aXJvbm1lbnQ7XG5cdHByaXZhdGUgc2VjcmV0SWQ6IHN0cmluZyA9ICcnO1xuXHRwcml2YXRlIHNlY3JldEtleTogc3RyaW5nID0gJyc7XG5cdHByaXZhdGUgbWFudWFsTW9kZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIGRpc2FibGVPcmdhbmljIGJvb2xlYW4gPSBmYWxzZTtcblx0Y29uc3RydWN0b3IoYXBwVG9rZW46IHN0cmluZywgZW52aXJvbm1lbnQ6IFRyYWNraWVyRW52aXJvbm1lbnQpIHtcblx0XHR0aGlzLmFwcFRva2VuID0gYXBwVG9rZW47XG5cdFx0dGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHRcdHRoaXMuc2VjcmV0SWQgPSB0aGlzLnNlY3JldElkO1xuXHRcdHRoaXMuc2VjcmV0S2V5ID0gdGhpcy5zZWNyZXRLZXlcblx0XHR0aGlzLm1hbnVhbE1vZGUgPSB0aGlzLm1hbnVhbE1vZGVcblx0XHR0aGlzLmRpc2FibGVPcmdhbmljID0gdGhpcy5kaXNhYmxlT3JnYW5pY1xuXHR9XG5cblx0cHVibGljIHNldEFwcFNlY3JldChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc2VjcmV0SWQgPSBrZXk7XG5cdFx0dGhpcy5zZWNyZXRLZXkgPSB2YWx1ZTtcblx0fVxuXG5cdHB1YmxpYyBzZXRNYW51YWxNb2RlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5tYW51YWxNb2RlID0gdmFsdWVcblx0fVxuXG5cdHB1YmxpYyBkaXNhYmxlT3JnYW5pY1RyYWNraW5nKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5kaXNhYmxlT3JnYW5pYyA9IHZhbHVlXG5cdH1cblxufVxuXG5leHBvcnQgY2xhc3MgVHJhY2tpZXJFdmVudCB7XG5cblx0cHJpdmF0ZSBldmVudElkOiBzdHJpbmc7XG5cdHByaXZhdGUgb3JkZXJJZDogc3RyaW5nO1xuXHRwcml2YXRlIHByb2R1Y3RJZDogc3RyaW5nO1xuXHRwcml2YXRlIGN1cnJlbmN5OiBzdHJpbmc7XG5cdHByaXZhdGUgY291cG9uQ29kZTogc3RyaW5nO1xuXHRwcml2YXRlIGRpc2NvdW50OiBudW1iZXJcblx0cHJpdmF0ZSBwYXJhbTE6IHN0cmluZztcblx0cHJpdmF0ZSBwYXJhbTI6IHN0cmluZztcblx0cHJpdmF0ZSBwYXJhbTM6IHN0cmluZztcblx0cHJpdmF0ZSBwYXJhbTQ6IHN0cmluZztcblx0cHJpdmF0ZSBwYXJhbTU6IHN0cmluZztcblx0cHJpdmF0ZSBwYXJhbTY6IHN0cmluZztcblx0cHJpdmF0ZSBwYXJhbTc6IHN0cmluZztcblx0cHJpdmF0ZSBwYXJhbTg6IHN0cmluZztcblx0cHJpdmF0ZSBwYXJhbTk6IHN0cmluZztcblx0cHJpdmF0ZSBwYXJhbTEwOiBzdHJpbmc7XG5cdHByaXZhdGUgcmV2ZW51ZTogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKGV2ZW50SWQ6IHN0cmluZykge1xuXHRcdHRoaXMuZXZlbnRJZCA9IGV2ZW50SWQ7XG5cdH1cblxuXHRwdWJsaWMgc2V0T3JkZXJJZChvcmRlcklkOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLm9yZGVySWQgPSBvcmRlcklkO1xuXHR9XG5cdHB1YmxpYyBzZXRQcm9kdWN0SWQocHJvZHVjdElkOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnByb2R1Y3RJZCA9IHByb2R1Y3RJZDtcblx0fVxuXHRwdWJsaWMgc2V0Q3VycmVuY3koY3VycmVuY3k6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuY3VycmVuY3kgPSBjdXJyZW5jeTtcblx0fVxuXHRwdWJsaWMgc2V0Q291cG9uQ29kZShjb3Vwb25Db2RlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmNvdXBvbkNvZGUgPSBjb3Vwb25Db2RlO1xuXHR9XG5cdHB1YmxpYyBzZXREaXNjb3VudChkaXNjb3VudDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5kaXNjb3VudCA9IGRpc2NvdW50O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTEocGFyYW0xOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtMSA9IHBhcmFtMTtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW0yKHBhcmFtMjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTIgPSBwYXJhbTI7XG5cdH1cblx0cHVibGljIHNldFBhcmFtMyhwYXJhbTM6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW0zID0gcGFyYW0zO1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTQocGFyYW00OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtNCA9IHBhcmFtNDtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW01KHBhcmFtNTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTUgPSBwYXJhbTU7XG5cdH1cblx0cHVibGljIHNldFBhcmFtNihwYXJhbTY6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW02ID0gcGFyYW02O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTcocGFyYW03OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtNyA9IHBhcmFtNztcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW04KHBhcmFtODogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTggPSBwYXJhbTg7XG5cdH1cblx0cHVibGljIHNldFBhcmFtOShwYXJhbTk6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW05ID0gcGFyYW05O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTEwKHBhcmFtMTA6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW0xMCA9IHBhcmFtMTA7XG5cdH1cblx0cHVibGljIHNldFJldmVudWUocmV2ZW51ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5yZXZlbnVlID0gcmV2ZW51ZTtcblx0fVxuXG5cdHNldEV2ZW50VmFsdWU6IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gdm9pZFxufVxuXG5cbkBQbHVnaW4oe1xuXHRwbHVnaW5OYW1lOiAnVHJhY2tpZXJDb3Jkb3ZhUGx1Z2luJyxcblx0cGx1Z2luOiAnY29tLnRyYWNraWVyLmNvcmRvdmFfc2RrJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG5cdHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5UcmFja2llckNvcmRvdmFQbHVnaW4nLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG5cdHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdHJhY2tpZXIvY29yZG92YV9zZGsnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG5cdC8vaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuXHQvL2luc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuXHRwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmFja2llckNvcmRvdmFQbHVnaW4gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG5cblx0QENvcmRvdmEoKVxuXHRpbml0aWFsaXplU0RLKGNvbmZpZzogVHJhY2tpZXJDb25maWcpOiBQcm9taXNlPGFueT4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0dHJhY2tFdmVudChldmVudDogVHJhY2tpZXJFdmVudCk6IFByb21pc2U8YW55PiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRVc2VySWQodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0VXNlckVtYWlsKHVzZXJFbWFpbDogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNldFVzZXJOYW1lKHVzZXJOYW1lOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0VXNlclBob25lKHVzZXJQaG9uZTogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNldERPQihkb2I6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRHZW5kZXIoZ2VuZGVyOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0cGFyc2VEZWVwTGluayh1cmk6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRmaXJlSW5zdGFsbCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0VHJhY2tpZXJJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0QWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldEFkSUQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldENhbXBhaWduKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRDYW1wYWlnbklEKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRBZFNldCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0QWRTZXRJRCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0Q2hhbm5lbCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0UDEoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldFAyKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRQMygpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0UDQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldFA1KCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRDbGlja0lkKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXREbHYoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldFBpZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0SXNSZXRhcmdldGluZygpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxufSJdfQ==