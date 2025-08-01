import { Component } from '@angular/core';
import { TrackierCordovaPlugin, TrackierConfig, TrackierEnvironment, TrackierEvent } from '@awesome-cordova-plugins/trackier/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(private trackierCordovaPlugin: TrackierCordovaPlugin) {}

  async ngOnInit() {
    /* While Initializing the Sdk, You need to pass the three parameter in the TrackierSDKConfig.
     * In first argument, you need to pass the Trackier SDK api key
     * In second argument, you need to pass the environment which can be either "development", "production" or "testing". */
    var key = "ee9f21fb-5848-4ed9-8d9c-e4093e6d220c"; // Please pass your Development key here
    var trackierConfig = new TrackierConfig(key, TrackierEnvironment.Development);
    this.trackierCordovaPlugin.initializeSDK(trackierConfig);
  }

  setUserData() {
    // Set user data following README pattern
    this.trackierCordovaPlugin.setUserId("TestUserId");
    this.trackierCordovaPlugin.setUserName("testName");
    this.trackierCordovaPlugin.setUserPhone("XXXXXXX");
    this.trackierCordovaPlugin.setUserEmail("sanu@gmail.com");
    this.trackierCordovaPlugin.setDOB("12/1/2022");
    this.trackierCordovaPlugin.setGender("Male");
  }

}
