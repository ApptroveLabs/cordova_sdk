package com.trackier.sdk;

public class TrackierCordovaUtil {
    public static final String KEY_APP_TOKEN = "appToken";
    public static final String KEY_ENVIRONMENT = "environment";
    public static final String KEY_EVENT_ID = "eventId";

    public static Map<String, Object> jsonObjectToMap(JSONObject jsonObject) throws JSONException {
        Map<String, Object> map = new HashMap<String, Object>(jsonObject.length());
        @SuppressWarnings("unchecked")
        Iterator<String> jsonObjectIterator = jsonObject.keys();

        while (jsonObjectIterator.hasNext()) {
            String key = jsonObjectIterator.next();
            map.put(key, jsonObject.get(key));
        }

        return map;
    }
}
