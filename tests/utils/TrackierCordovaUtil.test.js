/**
 * Unit tests for TrackierCordovaUtil utility functions
 */

describe('TrackierCordovaUtil', () => {
  let mockJSONObject;
  let mockJSONArray;

  beforeEach(() => {
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

    // Mock JSONArray
    mockJSONArray = {
      getString: jest.fn(),
      length: jest.fn(),
      isNull: jest.fn(),
      optString: jest.fn()
    };

    // Mock TrackierCordovaUtil
    global.TrackierCordovaUtil = {
      getStringVal: jest.fn(),
      getDoubleVal: jest.fn(),
      getFloatVal: jest.fn(),
      getBooleanVal: jest.fn(),
      optString: jest.fn()
    };
  });

  describe('getStringVal', () => {
    test('should return string value when key exists', () => {
      const key = 'testKey';
      const expectedValue = 'testValue';
      
      mockJSONObject.getString.mockReturnValue(expectedValue);
      global.TrackierCordovaUtil.getStringVal.mockImplementation((key, jsonObj) => {
        try {
          return jsonObj.getString(key);
        } catch (e) {
          return '';
        }
      });

      const result = global.TrackierCordovaUtil.getStringVal(key, mockJSONObject);

      expect(result).toBe(expectedValue);
      expect(mockJSONObject.getString).toHaveBeenCalledWith(key);
    });

    test('should return empty string when key does not exist', () => {
      const key = 'nonExistentKey';
      
      mockJSONObject.getString.mockImplementation(() => {
        throw new Error('Key not found');
      });
      
      global.TrackierCordovaUtil.getStringVal.mockImplementation((key, jsonObj) => {
        try {
          return jsonObj.getString(key);
        } catch (e) {
          return '';
        }
      });

      const result = global.TrackierCordovaUtil.getStringVal(key, mockJSONObject);

      expect(result).toBe('');
    });
  });

  describe('getDoubleVal', () => {
    test('should return double value when key exists', () => {
      const key = 'testKey';
      const expectedValue = 123.45;
      
      mockJSONObject.getDouble.mockReturnValue(expectedValue);
      global.TrackierCordovaUtil.getDoubleVal.mockImplementation((key, jsonObj) => {
        try {
          return jsonObj.getDouble(key);
        } catch (e) {
          return 0.0;
        }
      });

      const result = global.TrackierCordovaUtil.getDoubleVal(key, mockJSONObject);

      expect(result).toBe(expectedValue);
      expect(mockJSONObject.getDouble).toHaveBeenCalledWith(key);
    });

    test('should return 0.0 when key does not exist', () => {
      const key = 'nonExistentKey';
      
      mockJSONObject.getDouble.mockImplementation(() => {
        throw new Error('Key not found');
      });
      
      global.TrackierCordovaUtil.getDoubleVal.mockImplementation((key, jsonObj) => {
        try {
          return jsonObj.getDouble(key);
        } catch (e) {
          return 0.0;
        }
      });

      const result = global.TrackierCordovaUtil.getDoubleVal(key, mockJSONObject);

      expect(result).toBe(0.0);
    });
  });

  describe('getBooleanVal', () => {
    test('should return boolean value when key exists', () => {
      const key = 'testKey';
      const expectedValue = true;
      
      mockJSONObject.getBoolean.mockReturnValue(expectedValue);
      global.TrackierCordovaUtil.getBooleanVal.mockImplementation((key, jsonObj) => {
        try {
          return jsonObj.getBoolean(key);
        } catch (e) {
          return false;
        }
      });

      const result = global.TrackierCordovaUtil.getBooleanVal(key, mockJSONObject);

      expect(result).toBe(expectedValue);
      expect(mockJSONObject.getBoolean).toHaveBeenCalledWith(key);
    });

    test('should return false when key does not exist', () => {
      const key = 'nonExistentKey';
      
      mockJSONObject.getBoolean.mockImplementation(() => {
        throw new Error('Key not found');
      });
      
      global.TrackierCordovaUtil.getBooleanVal.mockImplementation((key, jsonObj) => {
        try {
          return jsonObj.getBoolean(key);
        } catch (e) {
          return false;
        }
      });

      const result = global.TrackierCordovaUtil.getBooleanVal(key, mockJSONObject);

      expect(result).toBe(false);
    });
  });

  describe('optString', () => {
    test('should return string value when index exists and not null', () => {
      const index = 0;
      const expectedValue = 'testValue';
      
      mockJSONArray.length.mockReturnValue(2);
      mockJSONArray.isNull.mockReturnValue(false);
      mockJSONArray.optString.mockReturnValue(expectedValue);
      
      global.TrackierCordovaUtil.optString.mockImplementation((array, idx) => {
        if (array === null || idx >= array.length || array.isNull(idx)) {
          return null;
        }
        return array.optString(idx, null);
      });

      const result = global.TrackierCordovaUtil.optString(mockJSONArray, index);

      expect(result).toBe(expectedValue);
      expect(mockJSONArray.optString).toHaveBeenCalledWith(index, null);
    });

    test('should return null when array is null', () => {
      global.TrackierCordovaUtil.optString.mockImplementation((array, idx) => {
        if (array === null || idx >= array.length || array.isNull(idx)) {
          return null;
        }
        return array.optString(idx, null);
      });

      const result = global.TrackierCordovaUtil.optString(null, 0);

      expect(result).toBeNull();
    });
  });
});