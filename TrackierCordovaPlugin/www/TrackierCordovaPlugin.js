var exec = require('cordova/exec');

exports.initializeSDK = function (arg0, success, error) {
    exec(success, error, 'TrackierCordovaPlugin', 'initializeSDK', [arg0]);
};
