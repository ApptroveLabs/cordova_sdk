var exec = require('cordova/exec');

function cordovaExecCommandCallback(command, callback) {
    var args = Array.prototype.slice.call(arguments, 2);
    cordova.exec(
        callback,
        function errorHandler(err) { },
        'TrackierCordovaPlugin',
        command,
        args
    );
}

exports.initializeSDK = function (arg0, success, error) {
    exec(success, error, 'TrackierCordovaPlugin', 'initializeSDK', [JSON.stringify(arg0)]);
};

exports.trackEvent = function (arg0, success, error) {
    exec(success, error, 'TrackierCordovaPlugin', 'trackEvent', [JSON.stringify(arg0)]);
};

exports.setUserId = function (arg0, success, error) {
    exec(success, error, 'TrackierCordovaPlugin', 'setUserId', [(arg0)]);
};

exports.setUserEmail = function (arg0, success, error) {
    exec(success, error, 'TrackierCordovaPlugin', 'setUserEmail', [(arg0)]);
};

exports.setUserName = function (arg0, success, error) {
    exec(success, error, 'TrackierCordovaPlugin', 'setUserName', [(arg0)]);
};

exports.setUserPhone = function (arg0, success, error) {
    exec(success, error, 'TrackierCordovaPlugin', 'setUserPhone', [(arg0)]);
};

exports.setDOB = function (arg0, success, error) {
    exec(success, error, 'TrackierCordovaPlugin', 'setDOB', [(arg0)]);
};

exports.setGender = function (arg0, success, error) {
    exec(success, error, 'TrackierCordovaPlugin', 'setGender', [(arg0)]);
};

exports.fireInstall = function (success, error) {
    exec(success, error, 'TrackierCordovaPlugin', 'fireInstall');
};

exports.parseDeepLink = function (arg0, success, error) {
    exec(success, error, 'TrackierCordovaPlugin', 'parseDeepLink', [(arg0)]);
};

exports.getTrackierId = function (callback) {
    cordovaExecCommandCallback('getTrackierId', callback);
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
    exec(callback, null, "TrackierCordovaPlugin", "trackier_deferredDeeplink", []);
}

exports.storeRetargetting = function (arg0, success, error) {
    exec(success, error, 'TrackierCordovaPlugin', 'storeRetargetting', [(arg0)]);
};

exports.updateAppleAdsToken = function (arg0, success, error) {
    exec(success, error, 'TrackierCordovaPlugin', 'updateAppleAdsToken', [(arg0)]);
};

exports.setUserAdditionalDetails = function (arg0, success, error) {
    exec(success, error, 'TrackierCordovaPlugin', 'setUserAdditionalDetails', [JSON.stringify(arg0)]);
};

// Device Information
exports.setIMEI = function (arg0, arg1, success, error) {
    exec(success, error, 'TrackierCordovaPlugin', 'setIMEI', [(arg0), (arg1)]);
};

exports.setMacAddress = function (arg0, success, error) {
    exec(success, error, 'TrackierCordovaPlugin', 'setMacAddress', [(arg0)]);
};

// Dynamic Link Creation
exports.createDynamicLink = function (arg0, success, error) {
    exec(success, error, 'TrackierCordovaPlugin', 'createDynamicLink', [JSON.stringify(arg0)]);
};

exports.resolveDeeplinkUrl = function (arg0, success, error) {
    exec(success, error, 'TrackierCordovaPlugin', 'resolveDeeplinkUrl', [(arg0)]);
};

// Deeplink URL Resolution
exports.resolveDeeplinkUrl = function (arg0, success, error) {
    exec(success, error, 'TrackierCordovaPlugin', 'resolveDeeplinkUrl', [(arg0)]);
};