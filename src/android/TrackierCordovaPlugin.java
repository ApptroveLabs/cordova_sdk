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

    private void initializeSDK(String message, CallbackContext callbackContext){
        if (message == null && message.length() == 0) {
            callbackContext.error("Expected one non-empty string argument.");
            return;
        }
        callbackContext.success(message);
        try {
            JSONObject trackiersdkConfigJson = new JSONObject(message);
            com.trackier.sdk.TrackierSDKConfig sdkConfig = new com.trackier.sdk.TrackierSDKConfig(webView.getContext(), TrackierCordovaUtil.checkStringKey("appToken",trackiersdkConfigJson), TrackierCordovaUtil.checkStringKey("environment",trackiersdkConfigJson));
            com.trackier.sdk.TrackierSDK.initialize(sdkConfig);
        } catch (Exception exception){

        }

    }

    private void trackEvent(String message, CallbackContext callbackContext){
        if (message == null && message.length() == 0) {
            callbackContext.error("Expected one non-empty string argument.");
            return ;
        }
        callbackContext.success(message);
        try {
            JSONObject trackierEventJson = new JSONObject(message);
            
            com.trackier.sdk.TrackierEvent trackierEvent = new com.trackier.sdk.TrackierEvent(TrackierCordovaUtil.checkStringKey("eventId",trackierEventJson));
            trackierEvent.orderId = TrackierCordovaUtil.checkStringKey("orderId",trackierEventJson);
            trackierEvent.currency = TrackierCordovaUtil.checkStringKey("currency",trackierEventJson);;
            trackierEvent.param1 = TrackierCordovaUtil.checkStringKey("param1",trackierEventJson);;
            trackierEvent.param2 = TrackierCordovaUtil.checkStringKey("param2",trackierEventJson);;
            trackierEvent.param3 = TrackierCordovaUtil.checkStringKey("param3",trackierEventJson);;
            trackierEvent.param4 = TrackierCordovaUtil.checkStringKey("param4",trackierEventJson);;
            trackierEvent.param5 = TrackierCordovaUtil.checkStringKey("param5",trackierEventJson);;
            trackierEvent.param6 = TrackierCordovaUtil.checkStringKey("param6",trackierEventJson);;
            trackierEvent.param7 = TrackierCordovaUtil.checkStringKey("param7",trackierEventJson);;
            trackierEvent.param8 = TrackierCordovaUtil.checkStringKey("param8",trackierEventJson);;
            trackierEvent.param9 = TrackierCordovaUtil.checkStringKey("param9",trackierEventJson);;
            trackierEvent.param10 = TrackierCordovaUtil.checkStringKey("param10",trackierEventJson);;
            trackierEvent.revenue = TrackierCordovaUtil.checkDoubleKey("revenue",trackierEventJson);

            // Map<String, Object> eventValues = TrackierUtil.toMap(trackierEventMap.getMap("ev"));
            // Map<String, Object> ev = new LinkedHashMap<String, Object>();
            // if (eventValues != null) {
            //     for (Map.Entry<String, Object> entry : eventValues.entrySet()) {
            //         ev.put(entry.getKey(), entry.getValue().toString());
            //     }
            // }
            // trackierEvent.ev = ev;
            com.trackier.sdk.TrackierSDK.trackEvent(trackierEvent);
        } catch (Exception exception){

        }

    }
}
