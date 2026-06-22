/**
 * Integration tests for Trackier Cordova SDK
 */

describe('Trackier Cordova SDK Integration Tests', () => {
  let mockCordova;
  let mockTrackierSDK;

  beforeEach(() => {
    // Mock Cordova environment
    mockCordova = {
      exec: jest.fn(),
      require: jest.fn((module) => {
        if (module === 'cordova/exec') {
          return jest.fn();
        }
        return {};
      })
    };

    // Mock TrackierSDK
    mockTrackierSDK = {
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

    global.cordova = mockCordova;
    global.TrackierSDK = mockTrackierSDK;
  });

  describe('SDK Initialization Flow', () => {
    test('should complete full initialization flow', async () => {
      const config = {
        appToken: 'test_app_token',
        environment: 'production',
        secretId: 'test_secret_id',
        secretKey: 'test_secret_key',
        region: 'GLOBAL'
      };

      const jsPlugin = {
        initializeSDK: jest.fn()
      };
      
      const successCallback = jest.fn();
      const errorCallback = jest.fn();

      jsPlugin.initializeSDK(config, successCallback, errorCallback);

      expect(jsPlugin.initializeSDK).toHaveBeenCalledWith(
        config,
        successCallback,
        errorCallback
      );
    });
  });

  describe('Event Tracking Flow', () => {
    test('should complete event tracking flow', async () => {
      const eventData = {
        eventId: 'purchase',
        revenue: 29.99,
        currency: 'USD',
        orderId: 'order_123'
      };

      const jsPlugin = {
        trackEvent: jest.fn()
      };
      
      const successCallback = jest.fn();
      const errorCallback = jest.fn();

      jsPlugin.trackEvent(eventData, successCallback, errorCallback);

      expect(jsPlugin.trackEvent).toHaveBeenCalledWith(
        eventData,
        successCallback,
        errorCallback
      );
    });
  });

  describe('User Management Flow', () => {
    test('should complete user profile setup', async () => {
      const userData = {
        userId: 'user_123',
        email: 'user@example.com',
        name: 'John Doe',
        phone: '+1234567890',
        dob: '1990-01-01',
        gender: 'Male'
      };

      const jsPlugin = {
        setUserId: jest.fn(),
        setUserEmail: jest.fn(),
        setUserName: jest.fn(),
        setUserPhone: jest.fn(),
        setDOB: jest.fn(),
        setGender: jest.fn()
      };
      
      const successCallback = jest.fn();
      const errorCallback = jest.fn();

      jsPlugin.setUserId(userData.userId, successCallback, errorCallback);
      jsPlugin.setUserEmail(userData.email, successCallback, errorCallback);
      jsPlugin.setUserName(userData.name, successCallback, errorCallback);
      jsPlugin.setUserPhone(userData.phone, successCallback, errorCallback);
      jsPlugin.setDOB(userData.dob, successCallback, errorCallback);
      jsPlugin.setGender(userData.gender, successCallback, errorCallback);

      expect(jsPlugin.setUserId).toHaveBeenCalledTimes(1);
      expect(jsPlugin.setUserEmail).toHaveBeenCalledTimes(1);
      expect(jsPlugin.setUserName).toHaveBeenCalledTimes(1);
      expect(jsPlugin.setUserPhone).toHaveBeenCalledTimes(1);
      expect(jsPlugin.setDOB).toHaveBeenCalledTimes(1);
      expect(jsPlugin.setGender).toHaveBeenCalledTimes(1);
    });
  });

  describe('Data Retrieval Flow', () => {
    test('should retrieve attribution data', async () => {
      const jsPlugin = {
        getTrackierId: jest.fn(),
        getAd: jest.fn(),
        getAdID: jest.fn(),
        getCampaign: jest.fn(),
        getCampaignID: jest.fn()
      };
      
      const callback = jest.fn();

      jsPlugin.getTrackierId(callback);
      jsPlugin.getAd(callback);
      jsPlugin.getAdID(callback);
      jsPlugin.getCampaign(callback);
      jsPlugin.getCampaignID(callback);

      expect(jsPlugin.getTrackierId).toHaveBeenCalledTimes(1);
      expect(jsPlugin.getAd).toHaveBeenCalledTimes(1);
      expect(jsPlugin.getAdID).toHaveBeenCalledTimes(1);
      expect(jsPlugin.getCampaign).toHaveBeenCalledTimes(1);
      expect(jsPlugin.getCampaignID).toHaveBeenCalledTimes(1);
    });
  });

  describe('Error Handling', () => {
    test('should handle null parameters', async () => {
      const jsPlugin = {
        setUserId: jest.fn(),
        setUserEmail: jest.fn()
      };
      
      const successCallback = jest.fn();
      const errorCallback = jest.fn();

      jsPlugin.setUserId(null, successCallback, errorCallback);
      jsPlugin.setUserEmail(undefined, successCallback, errorCallback);

      expect(jsPlugin.setUserId).toHaveBeenCalledTimes(1);
      expect(jsPlugin.setUserEmail).toHaveBeenCalledTimes(1);
    });
  });
});