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

export class TrackierEvent {
    private eventId: string;
    constructor(eventId:string) {
        this.eventId = eventId;
    }
    setEventValue: (key:string,value:string) => void
}

@Plugin({
  pluginName: 'TrackierCordovaSDK',
  plugin: 'trackier-cordova-sdk',
  pluginRef: 'TrackierCordovaSDK',
  repo: 'https://github.com/trackier/cordova_sdk.git',
  platforms: ['Android']
})
@Injectable()
export class TrackierCordovaSDK extends IonicNativePlugin {

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