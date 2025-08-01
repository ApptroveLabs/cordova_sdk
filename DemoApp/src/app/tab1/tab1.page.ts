import { Component } from '@angular/core';
import { TrackierCordovaPlugin, TrackierConfig, TrackierEnvironment } from '@awesome-cordova-plugins/trackier/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(private trackierCordovaPlugin: TrackierCordovaPlugin) {}

  async ngOnInit() {
    /* While Initializing the Sdk, You need to pass the three parameter in the TrackierSDKConfig.
     * In first argument, you need to pass the Trackier SDK api key
     * In second argument, you need to pass the environment which can be either "development", "production" or "testing". */
    var key = "simulator key"; // Please pass your Development key here
    var trackierConfig = new TrackierConfig(key, TrackierEnvironment.Development);
    this.trackierCordovaPlugin.initializeSDK(trackierConfig);
  }

}
