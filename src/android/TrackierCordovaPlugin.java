package com.trackier.cordova_sdk;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import android.util.Log;

/**
 * This class echoes a string called from JavaScript.
 */
public class TrackierCordovaPlugin extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("initializeSDK")) {
            String message = args.getString(0);
            this.initializeSDK(message, callbackContext);
            return true;
        } else if (action.equals("trackEvent")) {
            String message = args.getString(0);
            this.trackEvent(message, callbackContext);
            return true;
        }
        return false;
    }

    private void initializeSDK(String message, CallbackContext callbackContext){
        if (message != null && message.length() > 0) {
            callbackContext.success(message);
            try {
                JSONObject trackiersdkConfigJson = new JSONObject(message);
                String appToken = trackiersdkConfigJson.getString("appToken");
                String environment = trackiersdkConfigJson.getString("environment");

                if (appToken != null && environment != null) {
                    com.trackier.sdk.TrackierSDKConfig sdkConfig = new com.trackier.sdk.TrackierSDKConfig(webView.getContext(), appToken, environment);
                    com.trackier.sdk.TrackierSDK.initialize(sdkConfig);
                }

            } catch (Exception exception){

            }

        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }

    private void trackEvent(String message, CallbackContext callbackContext){
        if (message != null && message.length() > 0) {
            callbackContext.success(message);
            try {
                JSONObject trackierEventJson = new JSONObject(message);

                String eventId = trackierEventJson.getString("eventId");
                String orderId = trackierEventJson.getString("orderId");
                String currency = trackierEventJson.getString("currency");
                String param1 = trackierEventJson.getString("param1");
                String param2 = trackierEventJson.getString("param2");
                String param3 = trackierEventJson.getString("param3");
                String param4 = trackierEventJson.getString("param4");
                String param5 = trackierEventJson.getString("param5");
                String param6 = trackierEventJson.getString("param6");
                String param7 = trackierEventJson.getString("param7");
                String param8 = trackierEventJson.getString("param8");
                String param9 = trackierEventJson.getString("param9");
                String param10 = trackierEventJson.getString("param10");
                Double revenue = trackierEventJson.getDouble("revenue");

                if (eventId != null) {

                    com.trackier.sdk.TrackierEvent trackierEvent = new com.trackier.sdk.TrackierEvent(eventId);

                    if (orderId != null) {
                        trackierEvent.orderId = orderId;
                    }
                    if (currency != null) {
                        trackierEvent.currency = currency;
                    }
                    if (param1 != null) {
                        trackierEvent.param1 = param1;
                    }
                    if (param2 != null) {
                        trackierEvent.param2 = param2;
                    }
                    if (param3!= null) {
                        trackierEvent.param3 = param3;
                    }
                    if (param4 != null) {
                        trackierEvent.param4 = param4;
                    }
                    if (param5 != null) {
                        trackierEvent.param5 = param5;
                    }
                    if (param6 != null) {
                        trackierEvent.param6 = param6;
                    }
                    if (param7 != null) {
                        trackierEvent.param7 = param7;
                    }
                    if (param8 != null) {
                        trackierEvent.param8 = param8;
                    }
                    if (param9 != null) {
                        trackierEvent.param9 = param9;
                    }
                    if (param10 != null) {
                        trackierEvent.param10 = param10;
                    }
                    if (revenue != 0.0) {
                        trackierEvent.revenue = revenue;
                    }

                    // Map<String, Object> eventValues = TrackierUtil.toMap(trackierEventMap.getMap("ev"));
                    // Map<String, Object> ev = new LinkedHashMap<String, Object>();
                    // if (eventValues != null) {
                    //     for (Map.Entry<String, Object> entry : eventValues.entrySet()) {
                    //         ev.put(entry.getKey(), entry.getValue().toString());
                    //     }
                    // }
                    // trackierEvent.ev = ev;
                    com.trackier.sdk.TrackierSDK.trackEvent(trackierEvent);
                }
            } catch (Exception exception){

            }
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }
}
