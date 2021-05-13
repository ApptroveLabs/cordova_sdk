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
        }
        return false;
    }

    private void initializeSDK(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            callbackContext.success(message);
            Log.d("trackier_cordova_sdk","initialize method called of cordova java class"); 
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }
}
