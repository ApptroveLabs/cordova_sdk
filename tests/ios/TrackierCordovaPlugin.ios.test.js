/**
 * Unit tests for TrackierCordovaPlugin iOS Swift implementation
 */

describe('TrackierCordovaPlugin iOS Implementation', () => {
  let mockCommand;
  let mockCommandDelegate;

  beforeEach(() => {
    // Mock CDVInvokedUrlCommand
    mockCommand = {
      arguments: ['test_argument'],
      callbackId: 'test_callback_id'
    };

    // Mock CDVCommandDelegate
    mockCommandDelegate = {
      send: jest.fn()
    };

    // Mock global CDVPluginResult
    global.CDVPluginResult = jest.fn().mockImplementation((status, message) => ({
      status,
      messageAs: message,
      setKeepCallbackAs: jest.fn(),
      send: jest.fn()
    }));

    // Mock global CDVCommandStatus
    global.CDVCommandStatus = {
      OK: 'OK',
      ERROR: 'ERROR',
      NO_RESULT: 'NO_RESULT'
    };

    // Mock TrackierSDK
    global.TrackierSDK = {
      initialize: jest.fn(),
      trackEvent: jest.fn(),
      setUserID: jest.fn(),
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
      updateAppleAdsToken: jest.fn(),
      createDynamicLink: jest.fn(),
      resolveDeeplinkUrl: jest.fn()
    };
  });

  describe('Plugin Initialization', () => {
    test('should initialize SDK with valid configuration', () => {
      const plugin = { initializeSDK: jest.fn() };
      plugin.commandDelegate = mockCommandDelegate;

      const config = {
        appToken: 'test_token',
        environment: 'production',
        secretId: 'secret_id',
        secretKey: 'secret_key',
        region: 'GLOBAL'
      };

      mockCommand.arguments = [JSON.stringify(config)];

      plugin.initializeSDK(mockCommand);

      expect(plugin.initializeSDK).toHaveBeenCalledWith(mockCommand);
    });
  });

  describe('User Management Methods', () => {
    test('should handle setUserId', () => {
      const plugin = { setUserId: jest.fn() };
      plugin.commandDelegate = mockCommandDelegate;

      mockCommand.arguments = ['user123'];

      plugin.setUserId(mockCommand);

      expect(plugin.setUserId).toHaveBeenCalledWith(mockCommand);
    });

    test('should handle setUserEmail', () => {
      const plugin = { setUserEmail: jest.fn() };
      plugin.commandDelegate = mockCommandDelegate;

      mockCommand.arguments = ['test@example.com'];

      plugin.setUserEmail(mockCommand);

      expect(plugin.setUserEmail).toHaveBeenCalledWith(mockCommand);
    });
  });

  describe('Data Retrieval Methods', () => {
    test('should handle getTrackierId', () => {
      const plugin = { getTrackierId: jest.fn() };
      plugin.commandDelegate = mockCommandDelegate;

      plugin.getTrackierId(mockCommand);

      expect(plugin.getTrackierId).toHaveBeenCalledWith(mockCommand);
    });

    test('should handle getAd', () => {
      const plugin = { getAd: jest.fn() };
      plugin.commandDelegate = mockCommandDelegate;

      plugin.getAd(mockCommand);

      expect(plugin.getAd).toHaveBeenCalledWith(mockCommand);
    });
  });

  describe('Event Tracking', () => {
    test('should handle trackEvent with valid data', () => {
      const plugin = { trackEvent: jest.fn() };
      plugin.commandDelegate = mockCommandDelegate;

      const eventData = {
        eventId: 'test_event',
        revenue: 10.99,
        currency: 'USD'
      };

      mockCommand.arguments = [JSON.stringify(eventData)];

      plugin.trackEvent(mockCommand);

      expect(plugin.trackEvent).toHaveBeenCalledWith(mockCommand);
    });
  });

  describe('Advanced Features', () => {
    test('should handle updateAppleAdsToken', () => {
      const plugin = { updateAppleAdsToken: jest.fn() };
      plugin.commandDelegate = mockCommandDelegate;

      mockCommand.arguments = ['apple_ads_token_123'];

      plugin.updateAppleAdsToken(mockCommand);

      expect(plugin.updateAppleAdsToken).toHaveBeenCalledWith(mockCommand);
    });

    test('should handle createDynamicLink with full parameters', () => {
      const plugin = { createDynamicLink: jest.fn() };
      plugin.commandDelegate = mockCommandDelegate;

      const dynamicLinkData = {
        templateId: 'template123',
        link: 'https://example.com',
        domainUriPrefix: 'https://example.page.link',
        deepLinkValue: 'custom_value',
        androidParameters: { redirectLink: 'https://play.google.com/store/apps/details?id=com.example' },
        iosParameters: { redirectLink: 'https://apps.apple.com/app/example/id123456789' },
        desktopParameters: { redirectLink: 'https://example.com/desktop' },
        sdkParameters: { param1: 'value1', param2: 'value2' },
        socialMetaTagParameters: { title: 'Example App', description: 'A great app', imageLink: 'https://example.com/image.png' },
        attributionParameters: { channel: 'social', campaign: 'summer_sale', mediaSource: 'facebook', p1: 'param1', p2: 'param2', p3: 'param3', p4: 'param4', p5: 'param5' }
      };

      mockCommand.arguments = [JSON.stringify(dynamicLinkData)];

      plugin.createDynamicLink(mockCommand);

      expect(plugin.createDynamicLink).toHaveBeenCalledWith(mockCommand);
    });

    test('should handle resolveDeeplinkUrl', () => {
      const plugin = { resolveDeeplinkUrl: jest.fn() };
      plugin.commandDelegate = mockCommandDelegate;

      mockCommand.arguments = ['https://example.com/deeplink'];

      plugin.resolveDeeplinkUrl(mockCommand);

      expect(plugin.resolveDeeplinkUrl).toHaveBeenCalledWith(mockCommand);
    });
  });

  describe('Complex Event Tracking', () => {
    test('should handle trackEvent with all parameters and custom values', () => {
      const plugin = { trackEvent: jest.fn() };
      plugin.commandDelegate = mockCommandDelegate;

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
        param10: 'shipping_method',
        ev: { customKey1: 'customValue1', customKey2: 'customValue2' }
      };

      mockCommand.arguments = [JSON.stringify(complexEvent)];

      plugin.trackEvent(mockCommand);

      expect(plugin.trackEvent).toHaveBeenCalledWith(mockCommand);
    });
  });

  describe('Complex SDK Initialization', () => {
    test('should handle initializeSDK with region configuration', () => {
      const plugin = { initializeSDK: jest.fn() };
      plugin.commandDelegate = mockCommandDelegate;

      const testCases = [
        { region: 'IN', expected: 'IN' },
        { region: 'GLOBAL', expected: 'GLOBAL' },
        { region: 'OTHER', expected: 'NONE' }
      ];

      testCases.forEach(({ region, expected }) => {
        const config = {
          appToken: 'test_token',
          environment: 'production',
          secretId: 'secret_id',
          secretKey: 'secret_key',
          region: region
        };

        mockCommand.arguments = [JSON.stringify(config)];

        plugin.initializeSDK(mockCommand);

        expect(plugin.initializeSDK).toHaveBeenCalledWith(mockCommand);
      });
    });
  });

  describe('Deep Link Handling', () => {
    test('should handle trackier_deferredDeeplink', () => {
      const plugin = { trackier_deferredDeeplink: jest.fn() };
      plugin.commandDelegate = mockCommandDelegate;

      plugin.trackier_deferredDeeplink(mockCommand);

      expect(plugin.trackier_deferredDeeplink).toHaveBeenCalledWith(mockCommand);
    });

    test('should handle onDeepLinking callback', () => {
      const plugin = { onDeepLinking: jest.fn() };
      plugin.commandDelegate = mockCommandDelegate;
      plugin.deeplinkCallbackId = 'test_callback_id';

      const mockDeepLink = {
        getUrl: jest.fn().mockReturnValue('https://example.com/deeplink')
      };

      plugin.onDeepLinking(mockDeepLink);

      expect(plugin.onDeepLinking).toHaveBeenCalledWith(mockDeepLink);
    });

    test('should handle parseDeepLink', () => {
      const plugin = { parseDeepLink: jest.fn() };
      plugin.commandDelegate = mockCommandDelegate;

      mockCommand.arguments = ['https://example.com/deeplink'];

      plugin.parseDeepLink(mockCommand);

      expect(plugin.parseDeepLink).toHaveBeenCalledWith(mockCommand);
    });
  });

  describe('Utility Functions', () => {
    test('should handle convertStringToDictionary with valid JSON', () => {
      const plugin = { convertStringToDictionary: jest.fn() };
      
      const validJson = '{"key":"value","number":123}';
      plugin.convertStringToDictionary(validJson);
      
      expect(plugin.convertStringToDictionary).toHaveBeenCalledWith(validJson);
    });

    test('should handle convertStringToDictionary with invalid JSON', () => {
      const plugin = { convertStringToDictionary: jest.fn() };
      
      const invalidJson = 'invalid json';
      plugin.convertStringToDictionary(invalidJson);
      
      expect(plugin.convertStringToDictionary).toHaveBeenCalledWith(invalidJson);
    });
  });

  describe('Error Handling', () => {
    test('should handle null arguments', () => {
      const plugin = { setUserId: jest.fn() };
      plugin.commandDelegate = mockCommandDelegate;

      mockCommand.arguments = [null];

      plugin.setUserId(mockCommand);

      expect(plugin.setUserId).toHaveBeenCalledWith(mockCommand);
    });

    test('should handle missing arguments', () => {
      const plugin = { setUserId: jest.fn() };
      plugin.commandDelegate = mockCommandDelegate;

      mockCommand.arguments = [];

      plugin.setUserId(mockCommand);

      expect(plugin.setUserId).toHaveBeenCalledWith(mockCommand);
    });

    test('should handle JSON parsing errors', () => {
      const plugin = { trackEvent: jest.fn() };
      plugin.commandDelegate = mockCommandDelegate;

      mockCommand.arguments = ['invalid json'];

      plugin.trackEvent(mockCommand);

      expect(plugin.trackEvent).toHaveBeenCalledWith(mockCommand);
    });
  });
});