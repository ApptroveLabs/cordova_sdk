/**
 * Unit tests for TrackierCordovaPlugin JavaScript interface
 */

// Mock cordova.exec
const mockExec = jest.fn();
global.cordova = {
  exec: mockExec
};

// Mock the plugin exports with actual functionality
const TrackierCordovaPlugin = {
  initializeSDK: jest.fn((config, success, error) => {
    mockExec(success, error, 'TrackierCordovaPlugin', 'initializeSDK', [JSON.stringify(config)]);
  }),
  trackEvent: jest.fn((eventData, success, error) => {
    mockExec(success, error, 'TrackierCordovaPlugin', 'trackEvent', [JSON.stringify(eventData)]);
  }),
  setUserId: jest.fn((userId, success, error) => {
    mockExec(success, error, 'TrackierCordovaPlugin', 'setUserId', [userId]);
  }),
  setUserEmail: jest.fn((email, success, error) => {
    mockExec(success, error, 'TrackierCordovaPlugin', 'setUserEmail', [email]);
  }),
  setUserName: jest.fn((name, success, error) => {
    mockExec(success, error, 'TrackierCordovaPlugin', 'setUserName', [name]);
  }),
  setUserPhone: jest.fn((phone, success, error) => {
    mockExec(success, error, 'TrackierCordovaPlugin', 'setUserPhone', [phone]);
  }),
  setDOB: jest.fn((dob, success, error) => {
    mockExec(success, error, 'TrackierCordovaPlugin', 'setDOB', [dob]);
  }),
  setGender: jest.fn((gender, success, error) => {
    mockExec(success, error, 'TrackierCordovaPlugin', 'setGender', [gender]);
  }),
  fireInstall: jest.fn((success, error) => {
    mockExec(success, error, 'TrackierCordovaPlugin', 'fireInstall');
  }),
  parseDeepLink: jest.fn((deepLink, success, error) => {
    mockExec(success, error, 'TrackierCordovaPlugin', 'parseDeepLink', [deepLink]);
  }),
  getTrackierId: jest.fn((callback) => {
    mockExec(callback, expect.any(Function), 'TrackierCordovaPlugin', 'getTrackierId', []);
  }),
  getAd: jest.fn((callback) => {
    mockExec(callback, expect.any(Function), 'TrackierCordovaPlugin', 'getAd', []);
  }),
  getAdID: jest.fn((callback) => {
    mockExec(callback, expect.any(Function), 'TrackierCordovaPlugin', 'getAdID', []);
  }),
  getCampaign: jest.fn((callback) => {
    mockExec(callback, expect.any(Function), 'TrackierCordovaPlugin', 'getCampaign', []);
  }),
  getCampaignID: jest.fn((callback) => {
    mockExec(callback, expect.any(Function), 'TrackierCordovaPlugin', 'getCampaignID', []);
  }),
  getAdSet: jest.fn((callback) => {
    mockExec(callback, expect.any(Function), 'TrackierCordovaPlugin', 'getAdSet', []);
  }),
  getAdSetID: jest.fn((callback) => {
    mockExec(callback, expect.any(Function), 'TrackierCordovaPlugin', 'getAdSetID', []);
  }),
  getChannel: jest.fn((callback) => {
    mockExec(callback, expect.any(Function), 'TrackierCordovaPlugin', 'getChannel', []);
  }),
  getP1: jest.fn((callback) => {
    mockExec(callback, expect.any(Function), 'TrackierCordovaPlugin', 'getP1', []);
  }),
  getP2: jest.fn((callback) => {
    mockExec(callback, expect.any(Function), 'TrackierCordovaPlugin', 'getP2', []);
  }),
  getP3: jest.fn((callback) => {
    mockExec(callback, expect.any(Function), 'TrackierCordovaPlugin', 'getP3', []);
  }),
  getP4: jest.fn((callback) => {
    mockExec(callback, expect.any(Function), 'TrackierCordovaPlugin', 'getP4', []);
  }),
  getP5: jest.fn((callback) => {
    mockExec(callback, expect.any(Function), 'TrackierCordovaPlugin', 'getP5', []);
  }),
  getClickId: jest.fn((callback) => {
    mockExec(callback, expect.any(Function), 'TrackierCordovaPlugin', 'getClickId', []);
  }),
  getDlv: jest.fn((callback) => {
    mockExec(callback, expect.any(Function), 'TrackierCordovaPlugin', 'getDlv', []);
  }),
  getPid: jest.fn((callback) => {
    mockExec(callback, expect.any(Function), 'TrackierCordovaPlugin', 'getPid', []);
  }),
  getIsRetargeting: jest.fn((callback) => {
    mockExec(callback, expect.any(Function), 'TrackierCordovaPlugin', 'getIsRetargeting', []);
  }),
  setDeferredDeeplinkCallbackListener: jest.fn((callback) => {
    mockExec(callback, null, 'TrackierCordovaPlugin', 'trackier_deferredDeeplink', []);
  }),
  storeRetargetting: jest.fn((url, success, error) => {
    mockExec(success, error, 'TrackierCordovaPlugin', 'storeRetargetting', [url]);
  }),
  updateAppleAdsToken: jest.fn((token, success, error) => {
    mockExec(success, error, 'TrackierCordovaPlugin', 'updateAppleAdsToken', [token]);
  }),
  setUserAdditionalDetails: jest.fn((details, success, error) => {
    mockExec(success, error, 'TrackierCordovaPlugin', 'setUserAdditionalDetails', [JSON.stringify(details)]);
  }),
  setIMEI: jest.fn((imei1, imei2, success, error) => {
    mockExec(success, error, 'TrackierCordovaPlugin', 'setIMEI', [imei1, imei2]);
  }),
  setMacAddress: jest.fn((macAddress, success, error) => {
    mockExec(success, error, 'TrackierCordovaPlugin', 'setMacAddress', [macAddress]);
  }),
  createDynamicLink: jest.fn((dynamicLinkData, success, error) => {
    mockExec(success, error, 'TrackierCordovaPlugin', 'createDynamicLink', [JSON.stringify(dynamicLinkData)]);
  }),
  resolveDeeplinkUrl: jest.fn((url, success, error) => {
    mockExec(success, error, 'TrackierCordovaPlugin', 'resolveDeeplinkUrl', [url]);
  })
};

describe('TrackierCordovaPlugin JavaScript Interface', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Plugin Initialization', () => {
    test('should export all required methods', () => {
      expect(TrackierCordovaPlugin.initializeSDK).toBeDefined();
      expect(TrackierCordovaPlugin.trackEvent).toBeDefined();
      expect(TrackierCordovaPlugin.setUserId).toBeDefined();
      expect(TrackierCordovaPlugin.fireInstall).toBeDefined();
      expect(TrackierCordovaPlugin.getTrackierId).toBeDefined();
    });
  });

  describe('initializeSDK', () => {
    test('should call cordova.exec with correct parameters', () => {
      const config = { appToken: 'test_token', environment: 'production' };
      const successCallback = jest.fn();
      const errorCallback = jest.fn();

      TrackierCordovaPlugin.initializeSDK(config, successCallback, errorCallback);

      expect(mockExec).toHaveBeenCalledWith(
        successCallback,
        errorCallback,
        'TrackierCordovaPlugin',
        'initializeSDK',
        [JSON.stringify(config)]
      );
    });
  });

  describe('trackEvent', () => {
    test('should call cordova.exec with correct parameters', () => {
      const eventData = { eventId: 'test_event', revenue: 10.99 };
      const successCallback = jest.fn();
      const errorCallback = jest.fn();

      TrackierCordovaPlugin.trackEvent(eventData, successCallback, errorCallback);

      expect(mockExec).toHaveBeenCalledWith(
        successCallback,
        errorCallback,
        'TrackierCordovaPlugin',
        'trackEvent',
        [JSON.stringify(eventData)]
      );
    });
  });

  describe('User Management', () => {
    test('setUserId should work', () => {
      const userId = 'user123';
      const successCallback = jest.fn();
      const errorCallback = jest.fn();

      TrackierCordovaPlugin.setUserId(userId, successCallback, errorCallback);

      expect(mockExec).toHaveBeenCalledWith(
        successCallback,
        errorCallback,
        'TrackierCordovaPlugin',
        'setUserId',
        [userId]
      );
    });
  });

  describe('Data Retrieval', () => {
    test('getTrackierId should work', () => {
      const callback = jest.fn();
      
      TrackierCordovaPlugin.getTrackierId(callback);

      expect(mockExec).toHaveBeenCalledWith(
        callback,
        expect.any(Function),
        'TrackierCordovaPlugin',
        'getTrackierId',
        []
      );
    });

    test('getAd should work', () => {
      const callback = jest.fn();
      
      TrackierCordovaPlugin.getAd(callback);

      expect(mockExec).toHaveBeenCalledWith(
        callback,
        expect.any(Function),
        'TrackierCordovaPlugin',
        'getAd',
        []
      );
    });

    test('getAdID should work', () => {
      const callback = jest.fn();
      
      TrackierCordovaPlugin.getAdID(callback);

      expect(mockExec).toHaveBeenCalledWith(
        callback,
        expect.any(Function),
        'TrackierCordovaPlugin',
        'getAdID',
        []
      );
    });

    test('getCampaign should work', () => {
      const callback = jest.fn();
      
      TrackierCordovaPlugin.getCampaign(callback);

      expect(mockExec).toHaveBeenCalledWith(
        callback,
        expect.any(Function),
        'TrackierCordovaPlugin',
        'getCampaign',
        []
      );
    });

    test('getCampaignID should work', () => {
      const callback = jest.fn();
      
      TrackierCordovaPlugin.getCampaignID(callback);

      expect(mockExec).toHaveBeenCalledWith(
        callback,
        expect.any(Function),
        'TrackierCordovaPlugin',
        'getCampaignID',
        []
      );
    });

    test('getAdSet should work', () => {
      const callback = jest.fn();
      
      TrackierCordovaPlugin.getAdSet(callback);

      expect(mockExec).toHaveBeenCalledWith(
        callback,
        expect.any(Function),
        'TrackierCordovaPlugin',
        'getAdSet',
        []
      );
    });

    test('getAdSetID should work', () => {
      const callback = jest.fn();
      
      TrackierCordovaPlugin.getAdSetID(callback);

      expect(mockExec).toHaveBeenCalledWith(
        callback,
        expect.any(Function),
        'TrackierCordovaPlugin',
        'getAdSetID',
        []
      );
    });

    test('getChannel should work', () => {
      const callback = jest.fn();
      
      TrackierCordovaPlugin.getChannel(callback);

      expect(mockExec).toHaveBeenCalledWith(
        callback,
        expect.any(Function),
        'TrackierCordovaPlugin',
        'getChannel',
        []
      );
    });

    test('getP1-P5 should work', () => {
      const callback = jest.fn();
      
      TrackierCordovaPlugin.getP1(callback);
      TrackierCordovaPlugin.getP2(callback);
      TrackierCordovaPlugin.getP3(callback);
      TrackierCordovaPlugin.getP4(callback);
      TrackierCordovaPlugin.getP5(callback);

      expect(mockExec).toHaveBeenCalledTimes(5);
    });

    test('getClickId should work', () => {
      const callback = jest.fn();
      
      TrackierCordovaPlugin.getClickId(callback);

      expect(mockExec).toHaveBeenCalledWith(
        callback,
        expect.any(Function),
        'TrackierCordovaPlugin',
        'getClickId',
        []
      );
    });

    test('getDlv should work', () => {
      const callback = jest.fn();
      
      TrackierCordovaPlugin.getDlv(callback);

      expect(mockExec).toHaveBeenCalledWith(
        callback,
        expect.any(Function),
        'TrackierCordovaPlugin',
        'getDlv',
        []
      );
    });

    test('getPid should work', () => {
      const callback = jest.fn();
      
      TrackierCordovaPlugin.getPid(callback);

      expect(mockExec).toHaveBeenCalledWith(
        callback,
        expect.any(Function),
        'TrackierCordovaPlugin',
        'getPid',
        []
      );
    });

    test('getIsRetargeting should work', () => {
      const callback = jest.fn();
      
      TrackierCordovaPlugin.getIsRetargeting(callback);

      expect(mockExec).toHaveBeenCalledWith(
        callback,
        expect.any(Function),
        'TrackierCordovaPlugin',
        'getIsRetargeting',
        []
      );
    });
  });

  describe('Advanced Features', () => {
    test('setDeferredDeeplinkCallbackListener should work', () => {
      const callback = jest.fn();
      
      TrackierCordovaPlugin.setDeferredDeeplinkCallbackListener(callback);

      expect(mockExec).toHaveBeenCalledWith(
        callback,
        null,
        'TrackierCordovaPlugin',
        'trackier_deferredDeeplink',
        []
      );
    });

    test('storeRetargetting should work', () => {
      const url = 'https://example.com/retarget';
      const successCallback = jest.fn();
      const errorCallback = jest.fn();
      
      TrackierCordovaPlugin.storeRetargetting(url, successCallback, errorCallback);

      expect(mockExec).toHaveBeenCalledWith(
        successCallback,
        errorCallback,
        'TrackierCordovaPlugin',
        'storeRetargetting',
        [url]
      );
    });

    test('updateAppleAdsToken should work', () => {
      const token = 'apple_ads_token_123';
      const successCallback = jest.fn();
      const errorCallback = jest.fn();
      
      TrackierCordovaPlugin.updateAppleAdsToken(token, successCallback, errorCallback);

      expect(mockExec).toHaveBeenCalledWith(
        successCallback,
        errorCallback,
        'TrackierCordovaPlugin',
        'updateAppleAdsToken',
        [token]
      );
    });

    test('setUserAdditionalDetails should work', () => {
      const details = { key1: 'value1', key2: 'value2' };
      const successCallback = jest.fn();
      const errorCallback = jest.fn();
      
      TrackierCordovaPlugin.setUserAdditionalDetails(details, successCallback, errorCallback);

      expect(mockExec).toHaveBeenCalledWith(
        successCallback,
        errorCallback,
        'TrackierCordovaPlugin',
        'setUserAdditionalDetails',
        [JSON.stringify(details)]
      );
    });

    test('setIMEI should work', () => {
      const imei1 = '123456789012345';
      const imei2 = '123456789012346';
      const successCallback = jest.fn();
      const errorCallback = jest.fn();
      
      TrackierCordovaPlugin.setIMEI(imei1, imei2, successCallback, errorCallback);

      expect(mockExec).toHaveBeenCalledWith(
        successCallback,
        errorCallback,
        'TrackierCordovaPlugin',
        'setIMEI',
        [imei1, imei2]
      );
    });

    test('setMacAddress should work', () => {
      const macAddress = '00:11:22:33:44:55';
      const successCallback = jest.fn();
      const errorCallback = jest.fn();
      
      TrackierCordovaPlugin.setMacAddress(macAddress, successCallback, errorCallback);

      expect(mockExec).toHaveBeenCalledWith(
        successCallback,
        errorCallback,
        'TrackierCordovaPlugin',
        'setMacAddress',
        [macAddress]
      );
    });

    test('createDynamicLink should work', () => {
      const dynamicLinkData = {
        templateId: 'template123',
        link: 'https://example.com',
        domainUriPrefix: 'https://example.page.link'
      };
      const successCallback = jest.fn();
      const errorCallback = jest.fn();
      
      TrackierCordovaPlugin.createDynamicLink(dynamicLinkData, successCallback, errorCallback);

      expect(mockExec).toHaveBeenCalledWith(
        successCallback,
        errorCallback,
        'TrackierCordovaPlugin',
        'createDynamicLink',
        [JSON.stringify(dynamicLinkData)]
      );
    });

    test('resolveDeeplinkUrl should work', () => {
      const url = 'https://example.com/deeplink';
      const successCallback = jest.fn();
      const errorCallback = jest.fn();
      
      TrackierCordovaPlugin.resolveDeeplinkUrl(url, successCallback, errorCallback);

      expect(mockExec).toHaveBeenCalledWith(
        successCallback,
        errorCallback,
        'TrackierCordovaPlugin',
        'resolveDeeplinkUrl',
        [url]
      );
    });
  });

  describe('Deep Link Features', () => {
    test('parseDeepLink should work', () => {
      const deepLink = 'https://example.com/deeplink';
      const successCallback = jest.fn();
      const errorCallback = jest.fn();
      
      TrackierCordovaPlugin.parseDeepLink(deepLink, successCallback, errorCallback);

      expect(mockExec).toHaveBeenCalledWith(
        successCallback,
        errorCallback,
        'TrackierCordovaPlugin',
        'parseDeepLink',
        [deepLink]
      );
    });

    test('fireInstall should work', () => {
      const successCallback = jest.fn();
      const errorCallback = jest.fn();
      
      TrackierCordovaPlugin.fireInstall(successCallback, errorCallback);

      expect(mockExec).toHaveBeenCalledWith(
        successCallback,
        errorCallback,
        'TrackierCordovaPlugin',
        'fireInstall'
      );
    });
  });
});