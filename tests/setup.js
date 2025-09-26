// Jest setup file for Trackier Cordova SDK tests

// Mock Cordova environment
global.cordova = {
  exec: jest.fn(),
  require: jest.fn((module) => {
    if (module === 'cordova/exec') {
      return jest.fn();
    }
    return {};
  })
};

// Mock window object
global.window = {
  cordova: global.cordova
};
