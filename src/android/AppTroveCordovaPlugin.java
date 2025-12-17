package com.apptrove.cordova_sdk;

import android.net.Uri;
import android.util.Log;
import org.apache.cordova.CordovaPlugin;

import androidx.annotation.NonNull;

import com.trackier.sdk.dynamic_link.AndroidParameters;
import com.trackier.sdk.dynamic_link.DesktopParameters;
import com.trackier.sdk.dynamic_link.DynamicLink;
import com.trackier.sdk.dynamic_link.IosParameters;
import com.trackier.sdk.dynamic_link.SocialMetaTagParameters;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONObject;
import com.apptrove.cordova_sdk.AppTroveCordovaUtil;

import com.trackier.sdk.AttributionParams;
import com.trackier.sdk.DeepLink;
import com.trackier.sdk.DeepLinkListener;
import com.trackier.sdk.TrackierSDK;

/**
 * This class echoes a string called from JavaScript.
 */
public class AppTroveCordovaPlugin extends CordovaPlugin {

    private static CallbackContext dplkContext;

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) {
        try {
            if (action.equals("initializeSDK")) {
                String message = args.getString(0);
                this.initializeSDK(message, callbackContext, action);
                return true;
            } else if (action.equals("trackEvent")) {
                String message = args.getString(0);
                this.trackEvent(message, callbackContext);
                return true;
            } else if (action.equals("setUserId")) {
                return setUserId(com.apptrove.cordova_sdk.AppTroveCordovaUtil.optString(args, 0));
            } else if (action.equals("setUserEmail")) {
                return setUserEmail(com.apptrove.cordova_sdk.AppTroveCordovaUtil.optString(args, 0));
            } else if (action.equals("setUserName")) {
                return setUserName(com.apptrove.cordova_sdk.AppTroveCordovaUtil.optString(args, 0));
            } else if (action.equals("setUserPhone")) {
                return setUserPhone(com.apptrove.cordova_sdk.AppTroveCordovaUtil.optString(args, 0));
            } else if (action.equals("setDOB")) {
                return setDOB(com.apptrove.cordova_sdk.AppTroveCordovaUtil.optString(args, 0));
            } else if (action.equals("setGender")) {
                return setGender(com.apptrove.cordova_sdk.AppTroveCordovaUtil.optString(args, 0));
            } else if (action.equals("getAppTroveId")) {
                String appTroveId = com.trackier.sdk.TrackierSDK.getTrackierId();
                callbackContext.success(appTroveId);
            } else if (action.equals("setUserAdditionalDetails")) {
                String message = args.getString(0);
                return setUserAdditionalDetails(message);
            } else if (action.equals("setIMEI")) {
                String imei1 = com.apptrove.cordova_sdk.AppTroveCordovaUtil.optString(args, 0);
                String imei2 = com.apptrove.cordova_sdk.AppTroveCordovaUtil.optString(args, 1);
                return setIMEI(imei1, imei2);
            } else if (action.equals("setMacAddress")) {
                return setMacAddress(com.apptrove.cordova_sdk.AppTroveCordovaUtil.optString(args, 0));
            } else if (action.equals("createDynamicLink")) {
                String message = args.getString(0);
                this.createDynamicLink(message, callbackContext);
                return true;
            } else if (action.equals("resolveDeeplinkUrl")) {
                String url = com.apptrove.cordova_sdk.AppTroveCordovaUtil.optString(args, 0);
                this.resolveDeeplinkUrl(url, callbackContext);
                return true;
                // } else if (action.equals("trackSession")) {
                // this.trackSession();
                // return true;
            } else if (action.equals("fireInstall")) {
                this.fireInstall();
                return true;
            } else if (action.equals("storeRetargetting")) {
                String uri = com.apptrove.cordova_sdk.AppTroveCordovaUtil.optString(args, 0);
                this.storeRetargetting(uri);
                return true;
            } else if (action.equals("sendFcmToken")) {
                String token = com.apptrove.cordova_sdk.AppTroveCordovaUtil.optString(args, 0);
                return sendFcmToken(token);
            } else if (action.equals("getAd")) {
                String data = com.trackier.sdk.TrackierSDK.getAd();
                callbackContext.success(data);
            } else if (action.equals("getAdID")) {
                String data = com.trackier.sdk.TrackierSDK.getAdID();
                callbackContext.success(data);
            } else if (action.equals("getCampaign")) {
                String data = com.trackier.sdk.TrackierSDK.getCampaign();
                callbackContext.success(data);
            } else if (action.equals("getCampaignID")) {
                String data = com.trackier.sdk.TrackierSDK.getCampaignID();
                callbackContext.success(data);
            } else if (action.equals("getAdSet")) {
                String data = com.trackier.sdk.TrackierSDK.getAdSet();
                callbackContext.success(data);
            } else if (action.equals("getAdSetID")) {
                String data = com.trackier.sdk.TrackierSDK.getAdSetID();
                callbackContext.success(data);
            } else if (action.equals("getChannel")) {
                String data = com.trackier.sdk.TrackierSDK.getChannel();
                callbackContext.success(data);
            } else if (action.equals("getP1")) {
                String data = com.trackier.sdk.TrackierSDK.getP1();
                callbackContext.success(data);
            } else if (action.equals("getP2")) {
                String data = com.trackier.sdk.TrackierSDK.getP2();
                callbackContext.success(data);
            } else if (action.equals("getP3")) {
                String data = com.trackier.sdk.TrackierSDK.getP3();
                callbackContext.success(data);
            } else if (action.equals("getP4")) {
                String data = com.trackier.sdk.TrackierSDK.getP4();
                callbackContext.success(data);
            } else if (action.equals("getP5")) {
                String data = com.trackier.sdk.TrackierSDK.getP5();
                callbackContext.success(data);
            } else if (action.equals("getClickId")) {
                String data = com.trackier.sdk.TrackierSDK.getClickId();
                callbackContext.success(data);
            } else if (action.equals("getDlv")) {
                String data = com.trackier.sdk.TrackierSDK.getDlv();
                callbackContext.success(data);
            } else if (action.equals("getPid")) {
                String data = com.trackier.sdk.TrackierSDK.getPid();
                callbackContext.success(data);
            } else if (action.equals("getIsRetargeting")) {
                String data = com.trackier.sdk.TrackierSDK.getIsRetargeting();
                callbackContext.success(data);
            } else if (action.equals("parseDeepLink")) {
                String url = com.apptrove.cordova_sdk.AppTroveCordovaUtil.optString(args, 0);
                parseDeepLink(url);
            } else if (action.equals("apptrove_deferredDeeplink")) {
                AppTroveCordovaPlugin.dplkContext = callbackContext;
                return true;
            }
        } catch (Exception e) {

        }
        return false;
    }

    private void initializeSDK(String message, CallbackContext callbackContext, String action) {
        if (message == null && message.length() == 0) {
            callbackContext.error("Expected one non-empty string argument.");
            return;
        }
        try {
            JSONObject trackiersdkConfigJson = new JSONObject(message);
            com.trackier.sdk.TrackierSDKConfig sdkConfig = new com.trackier.sdk.TrackierSDKConfig(webView.getContext(),
                    com.apptrove.cordova_sdk.AppTroveCordovaUtil.getStringVal("appToken", trackiersdkConfigJson),
                    com.apptrove.cordova_sdk.AppTroveCordovaUtil.getStringVal("environment", trackiersdkConfigJson));
            sdkConfig.setAppSecret(
                    com.apptrove.cordova_sdk.AppTroveCordovaUtil.getStringVal("secretId", trackiersdkConfigJson),
                    com.apptrove.cordova_sdk.AppTroveCordovaUtil.getStringVal("secretKey", trackiersdkConfigJson));
            sdkConfig.setManualMode(
                    com.apptrove.cordova_sdk.AppTroveCordovaUtil.getBooleanVal("manualMode", trackiersdkConfigJson));
            sdkConfig.disableOrganicTracking(com.apptrove.cordova_sdk.AppTroveCordovaUtil
                    .getBooleanVal("disableorganic", trackiersdkConfigJson));
            sdkConfig.setSDKType("cordova_sdk");
            sdkConfig.setSDKVersion("2.0.0");

            sdkConfig.setFacebookAppId(
                    com.apptrove.cordova_sdk.AppTroveCordovaUtil.getStringVal("facebookAppId", trackiersdkConfigJson));
            sdkConfig.setAndroidId(
                    com.apptrove.cordova_sdk.AppTroveCordovaUtil.getStringVal("androidId", trackiersdkConfigJson));

            String appId = com.apptrove.cordova_sdk.AppTroveCordovaUtil.getStringVal("appId", trackiersdkConfigJson);
            if (appId != null && !appId.isEmpty()) {
                sdkConfig.setAppID(appId);
            }

            String encryptionKey = com.apptrove.cordova_sdk.AppTroveCordovaUtil.getStringVal("encryptionKey",
                    trackiersdkConfigJson);
            if (encryptionKey != null && !encryptionKey.isEmpty()) {
                sdkConfig.setEncryptionKey(encryptionKey);
            }

            String encryptionType = com.apptrove.cordova_sdk.AppTroveCordovaUtil.getStringVal("encryptionType",
                    trackiersdkConfigJson);
            if (encryptionType != null && !encryptionType.isEmpty()) {
                if (encryptionType.equalsIgnoreCase("AES_GCM")) {
                    sdkConfig.setEncryptionType(com.trackier.sdk.TrackierSDKConfig.EncryptionType.AES_GCM);
                }
            }

            String regionStr = com.apptrove.cordova_sdk.AppTroveCordovaUtil.getStringVal("region",
                    trackiersdkConfigJson);
            if (regionStr != null && !regionStr.isEmpty()) {
                if (regionStr.equalsIgnoreCase("IN")) {
                    sdkConfig.setRegion(com.trackier.sdk.TrackierSDKConfig.Region.IN);
                } else if (regionStr.equalsIgnoreCase("GLOBAL")) {
                    sdkConfig.setRegion(com.trackier.sdk.TrackierSDKConfig.Region.GLOBAL);
                }
            }

            JSONObject attributionParamsJson = trackiersdkConfigJson.optJSONObject("attributionParams");
            AttributionParams attributionParams = new AttributionParams();
            if (attributionParamsJson != null) {
                String partnerId = attributionParamsJson.optString("partnerId");
                if (partnerId != null && attributionParamsJson.has("partnerId")) {
                    attributionParams.setParterId(partnerId);
                }
                String siteid = attributionParamsJson.optString("siteid");
                if (siteid != null && attributionParamsJson.has("siteid")) {
                    attributionParams.setSiteId(siteid);
                }
                String channel = attributionParamsJson.optString("channel");
                if (channel != null && attributionParamsJson.has("channel")) {
                    attributionParams.setChannel(channel);
                }
                String adId = attributionParamsJson.optString("adId");
                if (adId != null && attributionParamsJson.has("adId")) {
                    attributionParams.setAdId(adId);
                }
                String ad = attributionParamsJson.optString("ad");
                if (ad != null && attributionParamsJson.has("ad")) {
                    attributionParams.setAd(ad);
                }
                String subSiteId = attributionParamsJson.optString("subSiteId");
                if (subSiteId != null && attributionParamsJson.has("subSiteId")) {
                    attributionParams.setSubSiteID(subSiteId);
                }
            }
            sdkConfig.setAttributionParams(attributionParams);
            sdkConfig.setDeepLinkListener(new DeepLinkListener() {
                @Override
                public void onDeepLinking(@NonNull DeepLink deepLink) {
                    String deepLinkUrl = deepLink.getUrl();
                    sendDeeplinkToJS(deepLink.getUrl());
                }
            });
            com.trackier.sdk.TrackierSDK.initialize(sdkConfig);
        } catch (Exception exception) {

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
            com.trackier.sdk.TrackierEvent trackierEvent = new com.trackier.sdk.TrackierEvent(
                    AppTroveCordovaUtil.getStringVal("eventId", trackierEventJson));
            trackierEvent.orderId = AppTroveCordovaUtil.getStringVal("orderId", trackierEventJson);
            trackierEvent.currency = AppTroveCordovaUtil.getStringVal("currency", trackierEventJson);
            trackierEvent.discount = AppTroveCordovaUtil.getFloatVal("discount", trackierEventJson);
            trackierEvent.couponCode = AppTroveCordovaUtil.getStringVal("couponCode", trackierEventJson);
            trackierEvent.param1 = AppTroveCordovaUtil.getStringVal("param1", trackierEventJson);
            trackierEvent.param2 = AppTroveCordovaUtil.getStringVal("param2", trackierEventJson);
            trackierEvent.param3 = AppTroveCordovaUtil.getStringVal("param3", trackierEventJson);
            trackierEvent.param4 = AppTroveCordovaUtil.getStringVal("param4", trackierEventJson);
            trackierEvent.param5 = AppTroveCordovaUtil.getStringVal("param5", trackierEventJson);
            trackierEvent.param6 = AppTroveCordovaUtil.getStringVal("param6", trackierEventJson);
            trackierEvent.param7 = AppTroveCordovaUtil.getStringVal("param7", trackierEventJson);
            trackierEvent.param8 = AppTroveCordovaUtil.getStringVal("param8", trackierEventJson);
            trackierEvent.param9 = AppTroveCordovaUtil.getStringVal("param9", trackierEventJson);
            trackierEvent.param10 = AppTroveCordovaUtil.getStringVal("param10", trackierEventJson);
            trackierEvent.revenue = AppTroveCordovaUtil.getDoubleVal("revenue", trackierEventJson);
            com.trackier.sdk.TrackierSDK.trackEvent(trackierEvent);

        } catch (Exception exception) {

        }

        callbackContext.success(message);
    }

    private boolean setUserId(String optString) {
        com.trackier.sdk.TrackierSDK.setUserId(optString);
        return true;
    }

    private boolean setUserEmail(String optString) {
        com.trackier.sdk.TrackierSDK.setUserEmail(optString);
        return true;
    }

    private boolean setUserName(String optString) {
        com.trackier.sdk.TrackierSDK.setUserName(optString);
        return true;
    }

    private boolean setUserPhone(String optString) {
        com.trackier.sdk.TrackierSDK.setUserPhone(optString);
        return true;
    }

    private boolean setDOB(String optString) {
        com.trackier.sdk.TrackierSDK.setDOB(optString);
        return true;
    }

    private boolean setGender(String optString) {
        switch (optString) {
            case "Male":
                com.trackier.sdk.TrackierSDK.setGender(TrackierSDK.Gender.Male);
                break;
            case "Female":
                com.trackier.sdk.TrackierSDK.setGender(TrackierSDK.Gender.Female);
                break;
            case "Others":
                com.trackier.sdk.TrackierSDK.setGender(TrackierSDK.Gender.Others);
                break;
            default:
                Log.d("AppTroveSDK", "No Genders Found");
                break;
        }
        return true;
    }

    private void parseDeepLink(String optString) {
        Uri uri = Uri.parse(optString);
        com.trackier.sdk.TrackierSDK.parseDeepLink(uri);
    }

    private void fireInstall() {
        com.trackier.sdk.TrackierSDK.fireInstall();
    }

    private void storeRetargetting(String uri) {
        com.trackier.sdk.TrackierSDK.storeRetargetting(cordova.getContext(), uri);
    }

    private boolean setUserAdditionalDetails(String message) {
        try {
            JSONObject userAdditionalDetailsJson = new JSONObject(message);
            java.util.Map<String, Object> userAdditionalDetails = new java.util.HashMap<>();
            java.util.Iterator<String> keys = userAdditionalDetailsJson.keys();
            while (keys.hasNext()) {
                String key = keys.next();
                userAdditionalDetails.put(key, userAdditionalDetailsJson.get(key));
            }
            com.trackier.sdk.TrackierSDK.setUserAdditionalDetails(userAdditionalDetails);
            return true;
        } catch (Exception e) {
            Log.e("AppTroveSDK", "Error setting user additional details: " + e.getMessage());
            return false;
        }
    }

    private boolean setIMEI(String imei1, String imei2) {
        try {
            com.trackier.sdk.TrackierSDK.setIMEI(imei1, imei2);
            return true;
        } catch (Exception e) {
            Log.e("AppTroveSDK", "Error setting IMEI: " + e.getMessage());
            return false;
        }
    }

    private boolean setMacAddress(String macAddress) {
        try {
            com.trackier.sdk.TrackierSDK.setMacAddress(macAddress);
            return true;
        } catch (Exception e) {
            Log.e("AppTroveSDK", "Error setting MAC address: " + e.getMessage());
            return false;
        }
    }

    private void createDynamicLink(String message, CallbackContext callbackContext) {
        try {
            JSONObject dynamicLinkJson = new JSONObject(message);

            // Create DynamicLink
            com.trackier.sdk.dynamic_link.DynamicLink.Builder builder = new com.trackier.sdk.dynamic_link.DynamicLink.Builder();

            // Set basic properties
            if (dynamicLinkJson.has("templateId")) {
                builder.setTemplateId(AppTroveCordovaUtil.getStringVal("templateId", dynamicLinkJson));
            }
            if (dynamicLinkJson.has("link")) {
                String linkStr = AppTroveCordovaUtil.getStringVal("link", dynamicLinkJson);
                if (!linkStr.isEmpty()) {
                    builder.setLink(android.net.Uri.parse(linkStr));
                }
            }
            if (dynamicLinkJson.has("domainUriPrefix")) {
                builder.setDomainUriPrefix(AppTroveCordovaUtil.getStringVal("domainUriPrefix", dynamicLinkJson));
            }
            if (dynamicLinkJson.has("deepLinkValue")) {
                builder.setDeepLinkValue(AppTroveCordovaUtil.getStringVal("deepLinkValue", dynamicLinkJson));
            }

            // Set Android parameters
            if (dynamicLinkJson.has("androidParameters")) {
                JSONObject androidParams = dynamicLinkJson.getJSONObject("androidParameters");
                if (androidParams.has("redirectLink")) {
                    String redirectLink = AppTroveCordovaUtil.getStringVal("redirectLink", androidParams);
                    com.trackier.sdk.dynamic_link.AndroidParameters androidParameters = new com.trackier.sdk.dynamic_link.AndroidParameters.Builder()
                            .setRedirectLink(redirectLink)
                            .build();
                    builder.setAndroidParameters(androidParameters);
                }
            }

            // Set iOS parameters
            if (dynamicLinkJson.has("iosParameters")) {
                JSONObject iosParams = dynamicLinkJson.getJSONObject("iosParameters");
                if (iosParams.has("redirectLink")) {
                    String redirectLink = AppTroveCordovaUtil.getStringVal("redirectLink", iosParams);
                    com.trackier.sdk.dynamic_link.IosParameters iosParameters = new com.trackier.sdk.dynamic_link.IosParameters.Builder()
                            .setRedirectLink(redirectLink)
                            .build();
                    builder.setIosParameters(iosParameters);
                }
            }

            // Set Desktop parameters
            if (dynamicLinkJson.has("desktopParameters")) {
                JSONObject desktopParams = dynamicLinkJson.getJSONObject("desktopParameters");
                if (desktopParams.has("redirectLink")) {
                    String redirectLink = AppTroveCordovaUtil.getStringVal("redirectLink", desktopParams);
                    com.trackier.sdk.dynamic_link.DesktopParameters desktopParameters = new com.trackier.sdk.dynamic_link.DesktopParameters.Builder()
                            .setRedirectLink(redirectLink)
                            .build();
                    builder.setDesktopParameters(desktopParameters);
                }
            }

            // Set SDK parameters
            if (dynamicLinkJson.has("sdkParameters")) {
                JSONObject sdkParams = dynamicLinkJson.getJSONObject("sdkParameters");
                java.util.Map<String, String> sdkParametersMap = new java.util.HashMap<>();
                java.util.Iterator<String> keys = sdkParams.keys();
                while (keys.hasNext()) {
                    String key = keys.next();
                    sdkParametersMap.put(key, sdkParams.getString(key));
                }
                builder.setSDKParameters(sdkParametersMap);
            }

            // Set Social Meta Tag parameters
            if (dynamicLinkJson.has("socialMetaTagParameters")) {
                JSONObject socialParams = dynamicLinkJson.getJSONObject("socialMetaTagParameters");
                String title = AppTroveCordovaUtil.getStringVal("title", socialParams);
                String description = AppTroveCordovaUtil.getStringVal("description", socialParams);
                String imageLink = AppTroveCordovaUtil.getStringVal("imageLink", socialParams);

                com.trackier.sdk.dynamic_link.SocialMetaTagParameters socialMetaTagParameters = new com.trackier.sdk.dynamic_link.SocialMetaTagParameters.Builder()
                        .setTitle(title)
                        .setDescription(description)
                        .setImageLink(imageLink)
                        .build();
                builder.setSocialMetaTagParameters(socialMetaTagParameters);
            }

            // Set Attribution parameters
            if (dynamicLinkJson.has("attributionParameters")) {
                JSONObject attrParams = dynamicLinkJson.getJSONObject("attributionParameters");
                String channel = AppTroveCordovaUtil.getStringVal("channel", attrParams);
                String campaign = AppTroveCordovaUtil.getStringVal("campaign", attrParams);
                String mediaSource = AppTroveCordovaUtil.getStringVal("mediaSource", attrParams);
                String p1 = AppTroveCordovaUtil.getStringVal("p1", attrParams);
                String p2 = AppTroveCordovaUtil.getStringVal("p2", attrParams);
                String p3 = AppTroveCordovaUtil.getStringVal("p3", attrParams);
                String p4 = AppTroveCordovaUtil.getStringVal("p4", attrParams);
                String p5 = AppTroveCordovaUtil.getStringVal("p5", attrParams);

                builder.setAttributionParameters(channel, campaign, mediaSource, p1, p2, p3, p4, p5);
            }

            // Build the DynamicLink
            com.trackier.sdk.dynamic_link.DynamicLink dynamicLink = builder.build();

            // Create dynamic link
            com.trackier.sdk.TrackierSDK.createDynamicLink(
                    dynamicLink,
                    (String result) -> {
                        callbackContext.success(result);
                        return null;
                    },
                    (String error) -> {
                        callbackContext.error(error);
                        return null;
                    });
        } catch (Exception e) {
            Log.e("AppTroveSDK", "Error creating dynamic link: " + e.getMessage());
            callbackContext.error("Error creating dynamic link: " + e.getMessage());
        }
    }

    private boolean sendFcmToken(String token) {
        try {
            com.trackier.sdk.TrackierSDK.sendFcmToken(token);
            return true;
        } catch (Exception e) {
            Log.e("AppTroveSDK", "Error sending FCM token: " + e.getMessage());
            return false;
        }
    }

    private void resolveDeeplinkUrl(String url, CallbackContext callbackContext) {
        try {
            com.trackier.sdk.TrackierSDK.resolveDeeplinkUrl(
                    url,
                    (com.trackier.sdk.DlData result) -> {
                        try {
                            JSONObject resultJson = new JSONObject();
                            resultJson.put("url", result.getUrl() != null ? result.getUrl() : "");
                            resultJson.put("dlv", result.getDlv() != null ? result.getDlv() : "");

                            // Handle sdkParams
                            if (result.getSdkParams() != null) {
                                JSONObject sdkParamsJson = new JSONObject();
                                for (java.util.Map.Entry<String, Object> entry : result.getSdkParams().entrySet()) {
                                    sdkParamsJson.put(entry.getKey(), entry.getValue());
                                }
                                resultJson.put("sdkParams", sdkParamsJson);
                            } else {
                                resultJson.put("sdkParams", new JSONObject());
                            }

                            callbackContext.success(resultJson);
                        } catch (Exception e) {
                            callbackContext.error("Error parsing deeplink result: " + e.getMessage());
                        }
                        return null;
                    },
                    (Throwable error) -> {
                        callbackContext.error("Error resolving deeplink: " + error.getMessage());
                        return null;
                    });
        } catch (Exception e) {
            Log.e("AppTroveSDK", "Error resolving deeplink URL: " + e.getMessage());
            callbackContext.error("Error resolving deeplink URL: " + e.getMessage());
        }
    }

    private static void sendDeeplinkToJS(String uri) {
        if (dplkContext != null) {
            try {
                PluginResult result = new PluginResult(PluginResult.Status.OK, uri);
                result.setKeepCallback(true); // Keep callback open for multiple events
                dplkContext.sendPluginResult(result);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
