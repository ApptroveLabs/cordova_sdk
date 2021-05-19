package com.trackier.cordova_sdk;

import android.util.Log;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONObject;
import com.trackier.cordova_sdk.TrackierCordovaUtil;

/**
 * This class echoes a string called from JavaScript.
 */
public class TrackierCordovaPlugin extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) {
        try {
            if (action.equals("initializeSDK")) {
                String message = args.getString(0);
                this.initializeSDK(message, callbackContext);
                return true;
            } else if (action.equals("trackEvent")) {
                String message = args.getString(0);
                this.trackEvent(message, callbackContext);
                return true;
            }
        } catch (Exception e){

        }
        return false;
    }

    private void initializeSDK(String message, CallbackContext callbackContext) {
        if (message == null && message.length() == 0) {
            callbackContext.error("Expected one non-empty string argument.");
            return;
        }
        try {
            JSONObject trackiersdkConfigJson = new JSONObject(message);
            com.trackier.sdk.TrackierSDKConfig sdkConfig = new com.trackier.sdk.TrackierSDKConfig(webView.getContext(), TrackierCordovaUtil.getStringVal("appToken",trackiersdkConfigJson), TrackierCordovaUtil.getStringVal("environment",trackiersdkConfigJson));
            com.trackier.sdk.TrackierSDK.initialize(sdkConfig);
        } catch (Exception exception){

        }

        callbackContext.success(message);
    }

    private void trackEvent(String message, CallbackContext callbackContext) {
        if (message == null || message.length() == 0) {
            callbackContext.error("Expected one non-empty string argument.");
            return;
        }
        try {
            JSONObject trackierEventJson = new JSONObject(message);
            
            com.trackier.sdk.TrackierEvent trackierEvent = new com.trackier.sdk.TrackierEvent(TrackierCordovaUtil.getStringVal("eventId",trackierEventJson));
            trackierEvent.orderId = TrackierCordovaUtil.getStringVal("orderId",trackierEventJson);
            trackierEvent.currency = TrackierCordovaUtil.getStringVal("currency",trackierEventJson);
            trackierEvent.param1 = TrackierCordovaUtil.getStringVal("param1",trackierEventJson);
            trackierEvent.param2 = TrackierCordovaUtil.getStringVal("param2",trackierEventJson);
            trackierEvent.param3 = TrackierCordovaUtil.getStringVal("param3",trackierEventJson);
            trackierEvent.param4 = TrackierCordovaUtil.getStringVal("param4",trackierEventJson);
            trackierEvent.param5 = TrackierCordovaUtil.getStringVal("param5",trackierEventJson);
            trackierEvent.param6 = TrackierCordovaUtil.getStringVal("param6",trackierEventJson);
            trackierEvent.param7 = TrackierCordovaUtil.getStringVal("param7",trackierEventJson);
            trackierEvent.param8 = TrackierCordovaUtil.getStringVal("param8",trackierEventJson);
            trackierEvent.param9 = TrackierCordovaUtil.getStringVal("param9",trackierEventJson);
            trackierEvent.param10 = TrackierCordovaUtil.getStringVal("param10",trackierEventJson);
            trackierEvent.revenue = TrackierCordovaUtil.getDoubleVal("revenue",trackierEventJson);

            com.trackier.sdk.TrackierSDK.trackEvent(trackierEvent);
        } catch (Exception exception){

        }

        callbackContext.success(message);
    }
}
