package com.apptrove.cordova_sdk;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class AppTroveCordovaUtil {

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

    public static Float getFloatVal(String key, JSONObject jsonObject) {
        try {
          return Float.parseFloat(jsonObject.getString(key));
        } catch (JSONException e) {
    
        }
    
        return 0f;
    }

    public static String optString(final JSONArray array, final int index) {
        if (array == null || index >= array.length() || array.isNull(index)) {
            return null;
        }

        return array.optString(index, null);
    }
    
    public static Boolean getBooleanVal(String key, JSONObject jsonObject) {
        try {
            return jsonObject.getBoolean(key);
        } catch (JSONException e) {

        }

        return false;
    }
}
