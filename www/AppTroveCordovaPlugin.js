var exec = require('cordova/exec');

function cordovaExecCommandCallback(command, callback) {
    var args = Array.prototype.slice.call(arguments, 2);
    cordova.exec(
        callback,
        function errorHandler(err) { },
        'AppTroveCordovaPlugin',
        command,
        args
    );
}

exports.initializeSDK = function (arg0, success, error) {
    exec(success, error, 'AppTroveCordovaPlugin', 'initializeSDK', [JSON.stringify(arg0)]);
};

exports.trackEvent = function (arg0, success, error) {
    exec(success, error, 'AppTroveCordovaPlugin', 'trackEvent', [JSON.stringify(arg0)]);
};

exports.setUserId = function (arg0, success, error) {
    exec(success, error, 'AppTroveCordovaPlugin', 'setUserId', [(arg0)]);
};

exports.setUserEmail = function (arg0, success, error) {
    exec(success, error, 'AppTroveCordovaPlugin', 'setUserEmail', [(arg0)]);
};

exports.setUserName = function (arg0, success, error) {
    exec(success, error, 'AppTroveCordovaPlugin', 'setUserName', [(arg0)]);
};

exports.setUserPhone = function (arg0, success, error) {
    exec(success, error, 'AppTroveCordovaPlugin', 'setUserPhone', [(arg0)]);
};

exports.setDOB = function (arg0, success, error) {
    exec(success, error, 'AppTroveCordovaPlugin', 'setDOB', [(arg0)]);
};

exports.setGender = function (arg0, success, error) {
    exec(success, error, 'AppTroveCordovaPlugin', 'setGender', [(arg0)]);
};

exports.fireInstall = function (success, error) {
    exec(success, error, 'AppTroveCordovaPlugin', 'fireInstall');
};

exports.parseDeepLink = function (arg0, success, error) {
    exec(success, error, 'AppTroveCordovaPlugin', 'parseDeepLink', [(arg0)]);
};

exports.getAppTroveId = function (callback) {
    cordovaExecCommandCallback('getAppTroveId', callback);
};

exports.getAd = function (callback) {
    cordovaExecCommandCallback('getAd', callback);
};

exports.getAdID = function (callback) {
    cordovaExecCommandCallback('getAdID', callback);
};

exports.getCampaign = function (callback) {
    cordovaExecCommandCallback('getCampaign', callback);
};

exports.getCampaignID = function (callback) {
    cordovaExecCommandCallback('getCampaignID', callback);
};

exports.getAdSet = function (callback) {
    cordovaExecCommandCallback('getAdSet', callback);
};

exports.getAdSetID = function (callback) {
    cordovaExecCommandCallback('getAdSetID', callback);
};

exports.getChannel = function (callback) {
    cordovaExecCommandCallback('getChannel', callback);
};

exports.getP1 = function (callback) {
    cordovaExecCommandCallback('getP1', callback);
};

exports.getP2 = function (callback) {
    cordovaExecCommandCallback('getP2', callback);
};

exports.getP3 = function (callback) {
    cordovaExecCommandCallback('getP3', callback);
};

exports.getP4 = function (callback) {
    cordovaExecCommandCallback('getP4', callback);
};

exports.getP5 = function (callback) {
    cordovaExecCommandCallback('getP5', callback);
};

exports.getClickId = function (callback) {
    cordovaExecCommandCallback('getClickId', callback);
};

exports.getDlv = function (callback) {
    cordovaExecCommandCallback('getDlv', callback);
};

exports.getPid = function (callback) {
    cordovaExecCommandCallback('getPid', callback);
};

exports.getIsRetargeting = function (callback) {
    cordovaExecCommandCallback('getIsRetargeting', callback);
};

exports.setDeferredDeeplinkCallbackListener = function (callback) {
    exec(callback, null, "AppTroveCordovaPlugin", "apptrove_deferredDeeplink", []);
}

exports.storeRetargetting = function (arg0, success, error) {
    exec(success, error, 'AppTroveCordovaPlugin', 'storeRetargetting', [(arg0)]);
};

exports.updateAppleAdsToken = function (arg0, success, error) {
    exec(success, error, 'AppTroveCordovaPlugin', 'updateAppleAdsToken', [(arg0)]);
};

exports.setUserAdditionalDetails = function (arg0, success, error) {
    exec(success, error, 'AppTroveCordovaPlugin', 'setUserAdditionalDetails', [JSON.stringify(arg0)]);
};

// Device Information
exports.setIMEI = function (arg0, arg1, success, error) {
    exec(success, error, 'AppTroveCordovaPlugin', 'setIMEI', [(arg0), (arg1)]);
};

exports.setMacAddress = function (arg0, success, error) {
    exec(success, error, 'AppTroveCordovaPlugin', 'setMacAddress', [(arg0)]);
};

// Dynamic Link Creation
exports.createDynamicLink = function (arg0, success, error) {
    exec(success, error, 'AppTroveCordovaPlugin', 'createDynamicLink', [JSON.stringify(arg0)]);
};
// Deeplink URL Resolution
exports.resolveDeeplinkUrl = function (arg0, success, error) {
    exec(success, error, 'AppTroveCordovaPlugin', 'resolveDeeplinkUrl', [(arg0)]);
};

exports.sendFcmToken = function (arg0, success, error) {
    exec(success, error, 'AppTroveCordovaPlugin', 'sendFcmToken', [(arg0)]);
};

exports.sendAPNToken = function (arg0, success, error) {
    exec(success, error, 'AppTroveCordovaPlugin', 'sendAPNToken', [(arg0)]);
};

exports.subscribeAttributionlink = function (success, error) {
    exec(success, error, 'AppTroveCordovaPlugin', 'subscribeAttributionlink', []);
};

exports.updatePostbackConversion = function (arg0, success, error) {
    exec(success, error, 'AppTroveCordovaPlugin', 'updatePostbackConversion', [(arg0)]);
};

exports.waitForATTUserAuthorization = function (arg0, success, error) {
    exec(success, error, 'AppTroveCordovaPlugin', 'waitForATTUserAuthorization', [(arg0)]);
};
