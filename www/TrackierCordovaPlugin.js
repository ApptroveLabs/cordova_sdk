var exec = require('cordova/exec');

exports.initializeSDK = function (arg0, success, error) {
    exec(success, error, 'TrackierCordovaPlugin', 'initializeSDK', [JSON.stringify(arg0)]);
};

exports.trackEvent = function (arg0, success, error){
    exec(success, error, 'TrackierCordovaPlugin', 'trackEvent', [JSON.stringify(arg0)]);
};

