import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

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


@Plugin({
  pluginName: 'TrackierCordovaPlugin',
  plugin: 'com.trackier.cordova_sdk', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.TrackierCordovaPlugin', // the variable reference to call the plugin, example: navigator.geolocation
  //repo: '', // the github repository URL for the plugin
  //install: '', // OPTIONAL install command, in case the plugin requires variables
  //installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class TrackierCordovaPlugin extends IonicNativePlugin {

  
  // @Cordova()
  // initializeSDK(arg1: string, arg2: number): Promise<any> {
  //   return; // We add return; here to avoid any IDE / Compiler errors
  // }

  @Cordova()
  initializeSDK(config: TrackierConfig): Promise<any> {
    return;
  }

}
