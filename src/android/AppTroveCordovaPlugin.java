package com.apptrove.cordova_sdk;

import android.net.Uri;
import android.util.Log;
import org.apache.cordova.CordovaPlugin;

import androidx.annotation.NonNull;


import com.apptrove.sdk.dynamic_link.AndroidParameters;
import com.apptrove.sdk.dynamic_link.DesktopParameters;
import com.apptrove.sdk.dynamic_link.DynamicLink;
import com.apptrove.sdk.dynamic_link.IosParameters;
import com.apptrove.sdk.dynamic_link.SocialMetaTagParameters;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONObject;
import com.apptrove.cordova_sdk.AppTroveCordovaUtil;

import com.apptrove.sdk.AttributionParams;
import com.apptrove.sdk.DeepLink;
import com.apptrove.sdk.DeepLinkListener;
import com.apptrove.sdk.AppTroveSDK;


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
        String appTroveId = com.apptrove.sdk.AppTroveSDK.getAppTroveId();
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
      //   this.trackSession();
      //   return true;
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
        String data = com.apptrove.sdk.AppTroveSDK.getAd();
        callbackContext.success(data);
      } else if (action.equals("getAdID")) {
        String data = com.apptrove.sdk.AppTroveSDK.getAdID();
        callbackContext.success(data);
      } else if (action.equals("getCampaign")) {
        String data = com.apptrove.sdk.AppTroveSDK.getCampaign();
        callbackContext.success(data);
      } else if (action.equals("getCampaignID")) {
        String data = com.apptrove.sdk.AppTroveSDK.getCampaignID();
        callbackContext.success(data);
      } else if (action.equals("getAdSet")) {
        String data = com.apptrove.sdk.AppTroveSDK.getAdSet();
        callbackContext.success(data);
      } else if (action.equals("getAdSetID")) {
        String data = com.apptrove.sdk.AppTroveSDK.getAdSetID();
        callbackContext.success(data);
      } else if (action.equals("getChannel")) {
        String data = com.apptrove.sdk.AppTroveSDK.getChannel();
        callbackContext.success(data);
      } else if (action.equals("getP1")) {
        String data = com.apptrove.sdk.AppTroveSDK.getP1();
        callbackContext.success(data);
      } else if (action.equals("getP2")) {
        String data = com.apptrove.sdk.AppTroveSDK.getP2();
        callbackContext.success(data);
      } else if (action.equals("getP3")) {
        String data = com.apptrove.sdk.AppTroveSDK.getP3();
        callbackContext.success(data);
      } else if (action.equals("getP4")) {
        String data = com.apptrove.sdk.AppTroveSDK.getP4();
        callbackContext.success(data);
      } else if (action.equals("getP5")) {
        String data = com.apptrove.sdk.AppTroveSDK.getP5();
        callbackContext.success(data);
      } else if (action.equals("getClickId")) {
        String data = com.apptrove.sdk.AppTroveSDK.getClickId();
        callbackContext.success(data);
      } else if (action.equals("getDlv")) {
        String data = com.apptrove.sdk.AppTroveSDK.getDlv();
        callbackContext.success(data);
      } else if (action.equals("getPid")) {
        String data = com.apptrove.sdk.AppTroveSDK.getPid();
        callbackContext.success(data);
      } else if (action.equals("getIsRetargeting")) {
        String data = com.apptrove.sdk.AppTroveSDK.getIsRetargeting();
        callbackContext.success(data);
      } else if (action.equals("parseDeepLink")) {
        String url = com.apptrove.cordova_sdk.AppTroveCordovaUtil.optString(args, 0);
        parseDeepLink(url);
      } else if (action.equals("apptrove_deferredDeeplink")) {
        AppTroveCordovaPlugin.dplkContext = callbackContext;
        return true;
      } else if (action.equals("storeRetargetting")) {
        String url = com.apptrove.cordova_sdk.AppTroveCordovaUtil.optString(args, 0);
        storeRetargetting(url);
        return true;
      } else if (action.equals("fireInstall")) {
        fireInstall();
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
      JSONObject appTroveSDKConfigJson = new JSONObject(message);
      com.apptrove.sdk.AppTroveSDKConfig sdkConfig = new com.apptrove.sdk.AppTroveSDKConfig(webView.getContext(),
        com.apptrove.cordova_sdk.AppTroveCordovaUtil.getStringVal("appToken", appTroveSDKConfigJson),
        com.apptrove.cordova_sdk.AppTroveCordovaUtil.getStringVal("environment", appTroveSDKConfigJson));
      sdkConfig.setAppSecret(com.apptrove.cordova_sdk.AppTroveCordovaUtil.getStringVal("secretId", appTroveSDKConfigJson), com.apptrove.cordova_sdk.AppTroveCordovaUtil.getStringVal("secretKey", appTroveSDKConfigJson));
      sdkConfig.setManualMode(com.apptrove.cordova_sdk.AppTroveCordovaUtil.getBooleanVal("manualMode", appTroveSDKConfigJson));
      sdkConfig.disableOrganicTracking(com.apptrove.cordova_sdk.AppTroveCordovaUtil.getBooleanVal("disableorganic", appTroveSDKConfigJson));
      sdkConfig.setSDKType("cordova_sdk");
      sdkConfig.setSDKVersion("2.0.0");

      sdkConfig.setFacebookAppId(com.apptrove.cordova_sdk.AppTroveCordovaUtil.getStringVal("facebookAppId", appTroveSDKConfigJson));
      sdkConfig.setAndroidId(com.apptrove.cordova_sdk.AppTroveCordovaUtil.getStringVal("androidId", appTroveSDKConfigJson));

      String appId = com.apptrove.cordova_sdk.AppTroveCordovaUtil.getStringVal("appId", appTroveSDKConfigJson);
      if (appId != null && !appId.isEmpty()) {
        sdkConfig.setAppID(appId);
      }

      String encryptionKey = com.apptrove.cordova_sdk.AppTroveCordovaUtil.getStringVal("encryptionKey", appTroveSDKConfigJson);
      if (encryptionKey != null && !encryptionKey.isEmpty()) {
        sdkConfig.setEncryptionKey(encryptionKey);
      }

      String encryptionType = com.apptrove.cordova_sdk.AppTroveCordovaUtil.getStringVal("encryptionType", appTroveSDKConfigJson);
      if (encryptionType != null && !encryptionType.isEmpty()) {
        if (encryptionType.equalsIgnoreCase("AES_GCM")) {
          sdkConfig.setEncryptionType(com.apptrove.sdk.AppTroveSDKConfig.EncryptionType.AES_GCM);
        }
      }

      String regionStr = com.apptrove.cordova_sdk.AppTroveCordovaUtil.getStringVal("region", appTroveSDKConfigJson);
      if (regionStr != null && !regionStr.isEmpty()) {
        if (regionStr.equalsIgnoreCase("IN")) {
          sdkConfig.setRegion(com.apptrove.sdk.AppTroveSDKConfig.Region.IN);
        } else if (regionStr.equalsIgnoreCase("GLOBAL")) {
          sdkConfig.setRegion(com.apptrove.sdk.AppTroveSDKConfig.Region.GLOBAL);
        }
      }

      JSONObject attributionParamsJson = appTroveSDKConfigJson.optJSONObject("attributionParams");
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
      com.apptrove.sdk.AppTroveSDK.initialize(sdkConfig);
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
      JSONObject appTroveEventJson = new JSONObject(message);
      com.apptrove.sdk.AppTroveEvent appTroveEvent = new com.apptrove.sdk.AppTroveEvent(AppTroveCordovaUtil.getStringVal("eventId", appTroveEventJson));
      appTroveEvent.orderId = AppTroveCordovaUtil.getStringVal("orderId", appTroveEventJson);
      appTroveEvent.currency = AppTroveCordovaUtil.getStringVal("currency", appTroveEventJson);
      appTroveEvent.discount = AppTroveCordovaUtil.getFloatVal("discount", appTroveEventJson);
      appTroveEvent.couponCode = AppTroveCordovaUtil.getStringVal("couponCode", appTroveEventJson);
      appTroveEvent.param1 = AppTroveCordovaUtil.getStringVal("param1", appTroveEventJson);
      appTroveEvent.param2 = AppTroveCordovaUtil.getStringVal("param2", appTroveEventJson);
      appTroveEvent.param3 = AppTroveCordovaUtil.getStringVal("param3", appTroveEventJson);
      appTroveEvent.param4 = AppTroveCordovaUtil.getStringVal("param4", appTroveEventJson);
      appTroveEvent.param5 = AppTroveCordovaUtil.getStringVal("param5", appTroveEventJson);
      appTroveEvent.param6 = AppTroveCordovaUtil.getStringVal("param6", appTroveEventJson);
      appTroveEvent.param7 = AppTroveCordovaUtil.getStringVal("param7", appTroveEventJson);
      appTroveEvent.param8 = AppTroveCordovaUtil.getStringVal("param8", appTroveEventJson);
      appTroveEvent.param9 = AppTroveCordovaUtil.getStringVal("param9", appTroveEventJson);
      appTroveEvent.param10 = AppTroveCordovaUtil.getStringVal("param10", appTroveEventJson);
      appTroveEvent.revenue = AppTroveCordovaUtil.getDoubleVal("revenue", appTroveEventJson);
      com.apptrove.sdk.AppTroveSDK.trackEvent(appTroveEvent);

    } catch (Exception exception) {

    }

    callbackContext.success(message);
  }

  private boolean setUserId(String optString) {
    com.apptrove.sdk.AppTroveSDK.setUserId(optString);
    return true;
  }

  private boolean setUserEmail(String optString) {
    com.apptrove.sdk.AppTroveSDK.setUserEmail(optString);
    return true;
  }

  private boolean setUserName(String optString) {
    com.apptrove.sdk.AppTroveSDK.setUserName(optString);
    return true;
  }

  private boolean setUserPhone(String optString) {
    com.apptrove.sdk.AppTroveSDK.setUserPhone(optString);
    return true;
  }

  private boolean setDOB(String optString) {
    com.apptrove.sdk.AppTroveSDK.setDOB(optString);
    return true;
  }

  private boolean setGender(String optString) {
    switch (optString) {
      case "Male":
        com.apptrove.sdk.AppTroveSDK.setGender(AppTroveSDK.Gender.Male);
        break;
      case "Female":
        com.apptrove.sdk.AppTroveSDK.setGender(AppTroveSDK.Gender.Female);
        break;
      case "Others":
        com.apptrove.sdk.AppTroveSDK.setGender(AppTroveSDK.Gender.Others);
        break;
      default:
        Log.d("AppTroveSDK", "No Genders Found");
        break;
    }
    return true;
  }

  private void parseDeepLink(String optString) {
    Uri uri = Uri.parse(optString);
    com.apptrove.sdk.AppTroveSDK.parseDeepLink(uri);
  }

  private void fireInstall() {
    com.apptrove.sdk.AppTroveSDK.fireInstall();
  }

  private void storeRetargetting(String uri) {
    com.apptrove.sdk.AppTroveSDK.storeRetargetting(cordova.getContext(), uri);
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
      com.apptrove.sdk.AppTroveSDK.setUserAdditionalDetails(userAdditionalDetails);
      return true;
    } catch (Exception e) {
      Log.e("AppTroveSDK", "Error setting user additional details: " + e.getMessage());
      return false;
    }
  }

  private boolean setIMEI(String imei1, String imei2) {
    try {
      com.apptrove.sdk.AppTroveSDK.setIMEI(imei1, imei2);
      return true;
    } catch (Exception e) {
      Log.e("AppTroveSDK", "Error setting IMEI: " + e.getMessage());
      return false;
    }
  }

  private boolean setMacAddress(String macAddress) {
    try {
      com.apptrove.sdk.AppTroveSDK.setMacAddress(macAddress);
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
      com.apptrove.sdk.dynamic_link.DynamicLink.Builder builder = new com.apptrove.sdk.dynamic_link.DynamicLink.Builder();
      
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
          com.apptrove.sdk.dynamic_link.AndroidParameters androidParameters = 
            new com.apptrove.sdk.dynamic_link.AndroidParameters.Builder()
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
          com.apptrove.sdk.dynamic_link.IosParameters iosParameters = 
            new com.apptrove.sdk.dynamic_link.IosParameters.Builder()
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
          com.apptrove.sdk.dynamic_link.DesktopParameters desktopParameters = 
            new com.apptrove.sdk.dynamic_link.DesktopParameters.Builder()
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
        
        com.apptrove.sdk.dynamic_link.SocialMetaTagParameters socialMetaTagParameters = 
          new com.apptrove.sdk.dynamic_link.SocialMetaTagParameters.Builder()
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
      com.apptrove.sdk.dynamic_link.DynamicLink dynamicLink = builder.build();

      // Create dynamic link 
      com.apptrove.sdk.AppTroveSDK.createDynamicLink(
        dynamicLink,
        (String result) -> {
          callbackContext.success(result);
          return null;
        },
        (String error) -> {
          callbackContext.error(error);
          return null;
        }
      );
    } catch (Exception e) {
      Log.e("AppTroveSDK", "Error creating dynamic link: " + e.getMessage());
      callbackContext.error("Error creating dynamic link: " + e.getMessage());
    }
  }

  private boolean sendFcmToken(String token) {
    try {
      com.apptrove.sdk.AppTroveSDK.sendFcmToken(token);
      return true;
    } catch (Exception e) {
      Log.e("AppTroveSDK", "Error sending FCM token: " + e.getMessage());
      return false;
    }
  }

  private void resolveDeeplinkUrl(String url, CallbackContext callbackContext) {
    try {
      com.apptrove.sdk.AppTroveSDK.resolveDeeplinkUrl(
        url,
        (com.apptrove.sdk.DlData result) -> {
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
        }
      );
    } catch (Exception e) {
      Log.e("AppTroveSDK", "Error resolving deeplink URL: " + e.getMessage());
      callbackContext.error("Error resolving deeplink URL: " + e.getMessage());
    }
  }

  private static void sendDeeplinkToJS(String uri) {
    if (dplkContext != null) {
      try {
        PluginResult result = new PluginResult(PluginResult.Status.OK, uri);
        result.setKeepCallback(true);  // Keep callback open for multiple events
        dplkContext.sendPluginResult(result);
      } catch (Exception e) {
        e.printStackTrace();
      }
    }
  }
}
