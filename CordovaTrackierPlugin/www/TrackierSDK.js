function callCordova(action) {
    var args = Array.prototype.slice.call(arguments, 1);

    cordova.exec(
        function callback(data) { },
        function errorHandler(err) { },
        'TrackierSDK',
        action,
        args
    );
}

function callCordovaStringify(action) {
    var args = Array.prototype.slice.call(arguments, 1);

    cordova.exec(
        function callback(data) { },
        function errorHandler(err) { },
        'TrackierSDK',
        action,
        [JSON.stringify(args)]
    );
}