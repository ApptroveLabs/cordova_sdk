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

    private void initializeSDK(String message, CallbackContext callbackContext) throws JSONException {
        if (message != null && message.length() > 0) {
            callbackContext.success(message);
            JSONObject trackiersdkConfigJson = new JSONObject(message);
            String appToken = null;
            String environment = null;

            if(trackiersdkConfigJson.getString("appToken") != null){
                appToken = trackiersdkConfigJson.getString("appToken");
            }
            if(trackiersdkConfigJson.getString("environment") != null){
                environment = trackiersdkConfigJson.getString("environment");
            }

            com.trackier.sdk.TrackierSDKConfig sdkConfig = new com.trackier.sdk.TrackierSDKConfig(webView.getContext(), appToken , environment);
		    com.trackier.sdk.TrackierSDK.initialize(sdkConfig);

        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }

        private void trackEvent(String message, CallbackContext callbackContext) throws JSONException {
        if (message != null && message.length() > 0) {
            callbackContext.success(message);
            JSONObject trackierEventJson = new JSONObject(message);

            if(trackierEventJson.getString("eventId") != null){
                com.trackier.sdk.TrackierEvent trackierEvent = new com.trackier.sdk.TrackierEvent(trackierEventJson.getString("eventId"));
                
                trackierEvent.orderId = null;
                trackierEvent.currency = null;
                trackierEvent.param1 = null;
                trackierEvent.param2 = null;
                trackierEvent.param3 = null;
                trackierEvent.param4 = null;
                trackierEvent.param5 = null;
                trackierEvent.param6 = null;
                trackierEvent.param7 = null;
                trackierEvent.param8 = null;
                trackierEvent.param9 = null;
                trackierEvent.param10 = null;
                trackierEvent.revenue = null;

                if (trackierEventJson.getString("orderId") != null) {
			    trackierEvent.orderId = trackierEventJson.getString("orderId");
                }
                if (trackierEventJson.getString("currency") != null) {            
                trackierEvent.currency = trackierEventJson.getString("currency");
                }
                if (trackierEventJson.getString("param1") != null) {            
                    trackierEvent.param1 = trackierEventJson.getString("param1");
                }
                if (trackierEventJson.getString("param2") != null) {            
                    trackierEvent.param2 = trackierEventJson.getString("param2");
                }
                if (trackierEventJson.getString("param3") != null) {            
                    trackierEvent.param3 = trackierEventJson.getString("param3");
                }
                if (trackierEventJson.getString("param4") != null) {            
                    trackierEvent.param4 = trackierEventJson.getString("param4");
                }
                if (trackierEventJson.getString("param5") != null) {            
                    trackierEvent.param5 = trackierEventJson.getString("param5");
                }
                if (trackierEventJson.getString("param6") != null) {            
                    trackierEvent.param6 = trackierEventJson.getString("param6");
                }
                if (trackierEventJson.getString("param7") != null) {            
                    trackierEvent.param7 = trackierEventJson.getString("param7");
                }
                if (trackierEventJson.getString("param8") != null) {            
                    trackierEvent.param8 = trackierEventJson.getString("param8");
                }
                if (trackierEventJson.getString("param9") != null) {            
                    trackierEvent.param9 = trackierEventJson.getString("param9");
                }
                if (trackierEventJson.getString("param10") != null) {            
                    trackierEvent.param10 = trackierEventJson.getString("param10");
                }
                if (trackierEventJson.getDouble("revenue") != null) {            
                    trackierEvent.revenue = trackierEventJson.getDouble("revenue");
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
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }
}
