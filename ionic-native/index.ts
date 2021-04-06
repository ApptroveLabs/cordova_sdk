import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export enum TrackierEnvironment {
  Development = 'development',
  Production = 'production'
}

export class TrackierConfig {
    private appToken: string;
    private environment: TrackierEnvironment;
    constructor(appToken: string, environment: TrackierEnvironment) {
        this.appToken = appToken;
        this.environment = environment;
    }
}

export class TrackierSDK {
    initialize: (trackierConfig: TrackierConfig) => void
    trackEvent: (trackierEvent:TrackierEvent) => void
}

export class TrackierEvent {
    constructor(eventId:string)
    setEventValue: (key:string,value:string) => void
}

@Plugin({
  pluginName: 'TrackierSDK',
  plugin: 'com.trackier.sdk',
  pluginRef: 'TrackierSDK',
  repo: 'https://github.com/trackier/cordova_sdk',
  platforms: ['Android']
})
@Injectable()
export class TrackierSDK extends IonicNativePlugin {

  /**
   * This method initializes Trackier SDK
   * @param {TrackierConfig} config Trackier config object used as starting options
   */
  @Cordova({ sync: true })
  initialize(config: TrackierConfig): void {}

  /**
   * This method tracks an event
   * @param {TrackierEvent} event Trackier event object to be tracked
   */
  @Cordova({ sync: true })
  trackEvent(event: TrackierEvent): void {}
}
