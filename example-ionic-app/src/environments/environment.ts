// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export interface Environment {
  production: boolean;
  apptroveSdkKey: {
    android: string;
    ios: string;
  };
}

export const environment: Environment = {
  production: false,
  apptroveSdkKey: {
    android: 'YOUR_ANDROID_SDK_KEY', // Your Android SDK key
    ios: 'YOUR_IOS_SDK_KEY', // Your iOS SDK key
  },
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
