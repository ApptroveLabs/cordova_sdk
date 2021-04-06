package com.trackier.cordova_sdk;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * This class echoes a string called from JavaScript.
 */
public class TrackierCordova extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("initialize")) {
            initialize(args);
            return true;
        } else if (action.equals("trackEvent")) {
            return true;
        }
        return false;
    }

    public void initialize(JSONArray args) {
        String params = args.getString(0);
        JSONArray jsonArrayParams = new JSONArray(params);
        JSONObject jsonParameters = jsonArrayParams.optJSONObject(0);
        Map<String, Object> parameters = jsonObjectToMap(jsonParameters);

        String appToken = null;
        String environment = null;
        if (parameters.containsKey(KEY_APP_TOKEN)) {
            appToken = parameters.get(KEY_APP_TOKEN).toString();
        }
        if (parameters.containsKey(KEY_ENVIRONMENT)) {
            appToken = parameters.get(KEY_ENVIRONMENT).toString();
        }
		com.trackier.sdk.TrackierSDKConfig sdkConfig = new com.trackier.sdk.TrackierSDKConfig(this.cordova.getActivity().getApplicationContext(), appToken, environment);
		com.trackier.sdk.TrackierSDK.initialize(sdkConfig);
	}

    public void trackEvent(JSONArray args) {
        String params = args.getString(0);
        JSONArray jsonArrayParams = new JSONArray(params);
        JSONObject jsonParameters = jsonArrayParams.optJSONObject(0);
        Map<String, Object> parameters = jsonObjectToMap(jsonParameters);

        String eventId = "";
        if (parameters.containsKey(KEY_EVENT_ID)) {
            eventId = parameters.get(KEY_EVENT_ID).toString();
        }
        com.trackier.sdk.TrackierEvent evtObj = new com.trackier.sdk.TrackEvent(eventId);
        com.trackier.sdk.TrackierSDK.trackEvent(evtObj);
    }

}
