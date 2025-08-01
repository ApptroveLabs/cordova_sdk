import { Component } from '@angular/core';
import { TrackierCordovaPlugin, TrackierConfig, TrackierEnvironment, TrackierEvent, TrackierRegion } from '@awesome-cordova-plugins/trackier/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  constructor(private trackierCordovaPlugin: TrackierCordovaPlugin) {}

  async ngOnInit() {
    /* While Initializing the Sdk, You need to pass the three parameter in the TrackierSDKConfig.
     * In first argument, you need to pass the Trackier SDK api key
     * In second argument, you need to pass the environment which can be either "development", "production" or "testing". */
    var key = "simulator key"; // Please pass your Development key here
    var trackierConfig = new TrackierConfig(key, TrackierEnvironment.Development);
    trackierConfig.setRegion(TrackierRegion.IN);
    this.trackierCordovaPlugin.setUserAdditionalDetails(JSON.stringify({
      "customKey1": "customValue1",
      "customKey2": "customValue2",
      "userType": "premium",
      "subscription": "monthly"
    }))
    this.trackierCordovaPlugin.initializeSDK(trackierConfig);
  }

  trackCustomEvent() {
    // Below are the example of built-in events function calling
    // The arguments - "1CFfUn3xEY" passed in the Trackier event class is Events id
    var trackierEvent = new TrackierEvent("1CFfUn3xEY");

    /* Below are the function for the adding the extra data,
       You can add the extra data like login details of user or anything you need.
       We have 10 params to add data, Below 5 are mentioned */
    trackierEvent.setParam1("Param 1");
    trackierEvent.setParam2("Param 2");
    trackierEvent.setParam3("Param 3");
    trackierEvent.setParam4("Param 4");
    trackierEvent.setParam5("Param 5");
    trackierEvent.setCouponCode("TestCode");
    this.trackierCordovaPlugin.setUserId("TesUserId");
    this.trackierCordovaPlugin.setUserName("Test");
    this.trackierCordovaPlugin.setUserPhone("8130XXX721");
    this.trackierCordovaPlugin.setUserEmail("abc@gmail.com");
    this.trackierCordovaPlugin.trackEvent(trackierEvent);
  }

  getCampaignData() {
    // Campaign Data Methods following README pattern
    this.trackierCordovaPlugin.getTrackierId().then(val => console.log('===trackierid-: ', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getAd().then(val => console.log('getAd', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getAdID().then(val => console.log('getAdID', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getCampaign().then(val => console.log('getCampaign', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getCampaignID().then(val => console.log('getCampaignID', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getAdSet().then(val => console.log('getAdSet', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getAdSetID().then(val => console.log('getAdSetID', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getChannel().then(val => console.log('getChannel', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getP1().then(val => console.log('getP1', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getP2().then(val => console.log('getP2', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getP3().then(val => console.log('getP3', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getP4().then(val => console.log('getP4', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getP5().then(val => console.log('getP5', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getClickId().then(val => console.log('getClickId', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getDlv().then(val => console.log('getDlv', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getPid().then(val => console.log('getPid', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getIsRetargeting().then(val => console.log('getIsRetargeting', val)).catch(e => console.log('error: ', e));
  }

}
