package com.trackier.cordova_sdk;

import android.util.Log;
import org.json.JSONException;
import org.json.JSONObject;

public class TrackierCordovaUtil {

    public static String getStringVal(String key, JSONObject jsonObject) {
        try {
            return jsonObject.getString(key);
        } catch (JSONException e) {
            
        }
        
        return "";
    }

    public static Double getDoubleVal(String key, JSONObject jsonObject) {
        try {
            return jsonObject.getDouble(key);
        } catch (JSONException e) {

        }
        
        return 0.0;
    }
}
