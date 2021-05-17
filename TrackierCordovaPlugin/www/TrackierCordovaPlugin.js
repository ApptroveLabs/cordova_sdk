var exec = require('cordova/exec');

// function callCordovaStringify(action) {
//     var args = Array.prototype.slice.call(arguments, 1);

//     exec(
//         function callback(data) { },
//         function errorHandler(err) { },
//         'TrackierCordovaPlugin',
//         action,
//         [JSON.stringify(args)]
//     );
// }

//

//var TrackierSDK = {};

// TrackierSDK.initialize = function (trackierConfig) {
//     callCordovaStringify('initializeSDK', trackierConfig);
// };

// TrackierConfig.EnvironmentDevelopment = "development";
// TrackierConfig.EnvironmentProduction = "production";

// module.exports = {
//     TrackierConfig,
//     TrackierSDK
// }

exports.initializeSDK = function (arg0, success, error) {
    exec(success, error, 'TrackierCordovaPlugin', 'initializeSDK', [JSON.stringify(arg0)]);
};

exports.trackEvent = function (arg0, success, error){
    exec(success, error, 'TrackierCordovaPlugin', 'trackEvent', [JSON.stringify(arg0)]);
}