package com.trackier.cordova_sdk;

import android.util.Log;
import org.json.JSONException;
import org.json.JSONObject;

public class TrackierCordovaUtil {

    public static String checkStringKey(String key, JSONObject jsonObject){
        try {
            return jsonObject.getString(key);
        } catch (JSONException e) {
            Log.d("trackier_cordova_sdk", "No value found for the key: "+ key);
        }
        
        return "";
    }

    public static Double checkDoubleKey(String key, JSONObject jsonObject){
        try {
            return jsonObject.getDouble(key);
        } catch (JSONException e) {
            Log.d("trackier_cordova_sdk", "No value found for the key: "+ key);
        }
        return 0.0;
    }
}
