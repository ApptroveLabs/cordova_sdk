var exec = require('cordova/exec');

exports.initializeSDK = function (arg0, success, error) {
    exec(success, error, 'TrackierCordovaPlugin', 'initializeSDK', [JSON.stringify(arg0)]);
};

exports.trackEvent = function (arg0, success, error){
    exec(success, error, 'TrackierCordovaPlugin', 'trackEvent', [JSON.stringify(arg0)]);
};

exports.setUserId = function (arg0, success, error){
    exec(success, error, 'TrackierCordovaPlugin', 'setUserId', [(arg0)]);
};

exports.setUserEmail = function (arg0, success, error){
    exec(success, error, 'TrackierCordovaPlugin', 'setUserEmail', [(arg0)]);
};

exports.setUserName = function (arg0, success, error){
    exec(success, error, 'TrackierCordovaPlugin', 'setUserName', [(arg0)]);
};

exports.setUserPhone = function (arg0, success, error){
    exec(success, error, 'TrackierCordovaPlugin', 'setUserPhone', [(arg0)]);
};
