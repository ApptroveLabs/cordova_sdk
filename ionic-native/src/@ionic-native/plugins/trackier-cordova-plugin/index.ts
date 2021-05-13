import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

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

  @Cordova()
  // functionName(arg1: string, arg2: number): Promise<any> {
  //   return; // We add return; here to avoid any IDE / Compiler errors
  // }
  initializeSDK(): Promise<any>{
    return;
  }

}
