/**
 * Unit tests for TrackierCordovaPlugin Android implementation
 */

describe('TrackierCordovaPlugin Android Implementation', () => {
  let mockCallbackContext;
  let mockJSONArray;
  let mockJSONObject;

  beforeEach(() => {
    // Mock CallbackContext
    mockCallbackContext = {
      success: jest.fn(),
      error: jest.fn(),
      sendPluginResult: jest.fn()
    };

    // Mock JSONArray
    mockJSONArray = {
      getString: jest.fn(),
      length: jest.fn(() => 1),
      isNull: jest.fn(() => false)
    };

    // Mock JSONObject
    mockJSONObject = {
      getString: jest.fn(),
      getDouble: jest.fn(),
      getBoolean: jest.fn(),
      has: jest.fn(),
      optString: jest.fn(),
      optJSONObject: jest.fn(),
      keys: jest.fn(),
      get: jest.fn()
    };

    // Mock TrackierCordovaUtil
    global.TrackierCordovaUtil = {
      optString: jest.fn(),
      getStringVal: jest.fn(),
      getDoubleVal: jest.fn(),
      getBooleanVal: jest.fn()
    };

    // Mock TrackierSDK
    global.TrackierSDK = {
      initialize: jest.fn(),
      trackEvent: jest.fn(),
      setUserId: jest.fn(),
      setUserEmail: jest.fn(),
      setUserName: jest.fn(),
      setUserPhone: jest.fn(),
      setDOB: jest.fn(),
      setGender: jest.fn(),
      fireInstall: jest.fn(),
      parseDeepLink: jest.fn(),
      getTrackierId: jest.fn().mockReturnValue('trackier_id_123'),
      getAd: jest.fn().mockReturnValue('ad_data'),
      getAdID: jest.fn().mockReturnValue('ad_id_123'),
      getCampaign: jest.fn().mockReturnValue('campaign_data'),
      getCampaignID: jest.fn().mockReturnValue('campaign_id_123'),
      getAdSet: jest.fn().mockReturnValue('adset_data'),
      getAdSetID: jest.fn().mockReturnValue('adset_id_123'),
      getChannel: jest.fn().mockReturnValue('channel_data'),
      getP1: jest.fn().mockReturnValue('p1_data'),
      getP2: jest.fn().mockReturnValue('p2_data'),
      getP3: jest.fn().mockReturnValue('p3_data'),
      getP4: jest.fn().mockReturnValue('p4_data'),
      getP5: jest.fn().mockReturnValue('p5_data'),
      getClickId: jest.fn().mockReturnValue('click_id_123'),
      getDlv: jest.fn().mockReturnValue('dlv_data'),
      getPid: jest.fn().mockReturnValue('pid_data'),
      getIsRetargeting: jest.fn().mockReturnValue('true'),
      setUserAdditionalDetails: jest.fn(),
      setIMEI: jest.fn(),
      setMacAddress: jest.fn(),
      createDynamicLink: jest.fn(),
      resolveDeeplinkUrl: jest.fn()
    };
  });

  describe('Plugin Action Execution', () => {
    test('should handle initializeSDK action', () => {
      const plugin = { execute: jest.fn() };
      mockJSONArray.getString.mockReturnValue('{"appToken":"test_token","environment":"production"}');
      
      const result = plugin.execute('initializeSDK', mockJSONArray, mockCallbackContext);
      
      expect(plugin.execute).toHaveBeenCalledWith('initializeSDK', mockJSONArray, mockCallbackContext);
    });

    test('should handle trackEvent action', () => {
      const plugin = { execute: jest.fn() };
      mockJSONArray.getString.mockReturnValue('{"eventId":"test_event","revenue":10.99}');
      
      const result = plugin.execute('trackEvent', mockJSONArray, mockCallbackContext);
      
      expect(plugin.execute).toHaveBeenCalledWith('trackEvent', mockJSONArray, mockCallbackContext);
    });

    test('should handle setUserId action', () => {
      const plugin = { execute: jest.fn() };
      global.TrackierCordovaUtil.optString.mockReturnValue('user123');
      
      const result = plugin.execute('setUserId', mockJSONArray, mockCallbackContext);
      
      expect(plugin.execute).toHaveBeenCalledWith('setUserId', mockJSONArray, mockCallbackContext);
    });
  });

  describe('Data Retrieval Actions', () => {
    test('should handle getTrackierId action', () => {
      const plugin = { execute: jest.fn() };
      
      const result = plugin.execute('getTrackierId', mockJSONArray, mockCallbackContext);
      
      expect(plugin.execute).toHaveBeenCalledWith('getTrackierId', mockJSONArray, mockCallbackContext);
    });

    test('should handle getAd action', () => {
      const plugin = { execute: jest.fn() };
      
      const result = plugin.execute('getAd', mockJSONArray, mockCallbackContext);
      
      expect(plugin.execute).toHaveBeenCalledWith('getAd', mockJSONArray, mockCallbackContext);
    });
  });

  describe('Advanced Features', () => {
    test('should handle setUserAdditionalDetails action', () => {
      const plugin = { execute: jest.fn() };
      plugin.webView = { getContext: jest.fn() };
      
      mockJSONArray.getString.mockReturnValue('{"key1":"value1","key2":"value2"}');
      
      const result = plugin.execute('setUserAdditionalDetails', mockJSONArray, mockCallbackContext);
      
      expect(plugin.execute).toHaveBeenCalledWith('setUserAdditionalDetails', mockJSONArray, mockCallbackContext);
    });

    test('should handle setIMEI action', () => {
      const plugin = { execute: jest.fn() };
      
      global.TrackierCordovaUtil.optString
        .mockReturnValueOnce('123456789012345')
        .mockReturnValueOnce('123456789012346');
      
      const result = plugin.execute('setIMEI', mockJSONArray, mockCallbackContext);
      
      expect(plugin.execute).toHaveBeenCalledWith('setIMEI', mockJSONArray, mockCallbackContext);
    });

    test('should handle setMacAddress action', () => {
      const plugin = { execute: jest.fn() };
      
      global.TrackierCordovaUtil.optString.mockReturnValue('00:11:22:33:44:55');
      
      const result = plugin.execute('setMacAddress', mockJSONArray, mockCallbackContext);
      
      expect(plugin.execute).toHaveBeenCalledWith('setMacAddress', mockJSONArray, mockCallbackContext);
    });

    test('should handle createDynamicLink action', () => {
      const plugin = { execute: jest.fn() };
      plugin.webView = { getContext: jest.fn() };
      
      const dynamicLinkData = {
        templateId: 'template123',
        link: 'https://example.com',
        domainUriPrefix: 'https://example.page.link',
        androidParameters: { redirectLink: 'https://play.google.com/store/apps/details?id=com.example' },
        iosParameters: { redirectLink: 'https://apps.apple.com/app/example/id123456789' },
        desktopParameters: { redirectLink: 'https://example.com/desktop' },
        sdkParameters: { param1: 'value1' },
        socialMetaTagParameters: { title: 'Example App', description: 'A great app', imageLink: 'https://example.com/image.png' },
        attributionParameters: { channel: 'social', campaign: 'summer_sale', mediaSource: 'facebook', p1: 'param1', p2: 'param2', p3: 'param3', p4: 'param4', p5: 'param5' }
      };
      
      mockJSONArray.getString.mockReturnValue(JSON.stringify(dynamicLinkData));
      
      const result = plugin.execute('createDynamicLink', mockJSONArray, mockCallbackContext);
      
      expect(plugin.execute).toHaveBeenCalledWith('createDynamicLink', mockJSONArray, mockCallbackContext);
    });

    test('should handle resolveDeeplinkUrl action', () => {
      const plugin = { execute: jest.fn() };
      
      global.TrackierCordovaUtil.optString.mockReturnValue('https://example.com/deeplink');
      
      const result = plugin.execute('resolveDeeplinkUrl', mockJSONArray, mockCallbackContext);
      
      expect(plugin.execute).toHaveBeenCalledWith('resolveDeeplinkUrl', mockJSONArray, mockCallbackContext);
    });
  });

  describe('Deep Link Handling', () => {
    test('should handle trackier_deferredDeeplink action', () => {
      const plugin = { execute: jest.fn() };
      
      const result = plugin.execute('trackier_deferredDeeplink', mockJSONArray, mockCallbackContext);
      
      expect(plugin.execute).toHaveBeenCalledWith('trackier_deferredDeeplink', mockJSONArray, mockCallbackContext);
    });

    test('should handle parseDeepLink action', () => {
      const plugin = { execute: jest.fn() };
      
      global.TrackierCordovaUtil.optString.mockReturnValue('https://example.com/deeplink');
      
      const result = plugin.execute('parseDeepLink', mockJSONArray, mockCallbackContext);
      
      expect(plugin.execute).toHaveBeenCalledWith('parseDeepLink', mockJSONArray, mockCallbackContext);
    });
  });

  describe('Complex SDK Initialization', () => {
    test('should handle initializeSDK with full configuration', () => {
      const plugin = { execute: jest.fn() };
      plugin.webView = { getContext: jest.fn() };
      
      const fullConfig = {
        appToken: 'test_token',
        environment: 'production',
        secretId: 'secret_id',
        secretKey: 'secret_key',
        region: 'GLOBAL',
        manualMode: false,
        disableorganic: false,
        facebookAppId: 'facebook_app_id',
        androidId: 'android_id',
        attributionParams: {
          partnerId: 'partner_123',
          siteid: 'site_123',
          channel: 'organic',
          adId: 'ad_123',
          ad: 'ad_name',
          subSiteId: 'subsite_123'
        }
      };
      
      mockJSONArray.getString.mockReturnValue(JSON.stringify(fullConfig));
      
      const result = plugin.execute('initializeSDK', mockJSONArray, mockCallbackContext);
      
      expect(plugin.execute).toHaveBeenCalledWith('initializeSDK', mockJSONArray, mockCallbackContext);
    });
  });

  describe('Complex Event Tracking', () => {
    test('should handle trackEvent with all parameters', () => {
      const plugin = { execute: jest.fn() };
      
      const complexEvent = {
        eventId: 'purchase',
        revenue: 29.99,
        currency: 'USD',
        orderId: 'order_123',
        discount: 5.00,
        couponCode: 'SAVE5',
        param1: 'category',
        param2: 'subcategory',
        param3: 'brand',
        param4: 'color',
        param5: 'size',
        param6: 'material',
        param7: 'season',
        param8: 'discount_type',
        param9: 'payment_method',
        param10: 'shipping_method'
      };
      
      mockJSONArray.getString.mockReturnValue(JSON.stringify(complexEvent));
      
      const result = plugin.execute('trackEvent', mockJSONArray, mockCallbackContext);
      
      expect(plugin.execute).toHaveBeenCalledWith('trackEvent', mockJSONArray, mockCallbackContext);
    });
  });

  describe('Error Handling', () => {
    test('should handle invalid action gracefully', () => {
      const plugin = { execute: jest.fn().mockReturnValue(false) };
      
      const result = plugin.execute('invalidAction', mockJSONArray, mockCallbackContext);
      
      expect(result).toBe(false);
    });

    test('should handle JSON parsing errors', () => {
      const plugin = { execute: jest.fn() };
      plugin.webView = { getContext: jest.fn() };
      
      mockJSONArray.getString.mockReturnValue('invalid json');
      
      const result = plugin.execute('initializeSDK', mockJSONArray, mockCallbackContext);
      
      expect(plugin.execute).toHaveBeenCalledWith('initializeSDK', mockJSONArray, mockCallbackContext);
    });

    test('should handle null arguments', () => {
      const plugin = { execute: jest.fn() };
      
      mockJSONArray.getString.mockReturnValue(null);
      
      const result = plugin.execute('initializeSDK', mockJSONArray, mockCallbackContext);
      
      expect(plugin.execute).toHaveBeenCalledWith('initializeSDK', mockJSONArray, mockCallbackContext);
    });
  });
});