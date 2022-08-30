import { Component } from '@angular/core';
import { TrackierCordovaPlugin, TrackierConfig, TrackierEnvironment, TrackierEvent } from '@awesome-cordova-plugins/trackier/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private trackierCordovaPlugin:TrackierCordovaPlugin) {}

  async ngOnInit() {
    var trackierEvent = new TrackierEvent("1CFfUn3xEY");
    trackierEvent.setParam1("Param 1");
    trackierEvent.setParam2("Param 2");
    trackierEvent.setParam3("Param 3");
    trackierEvent.setParam4("Param 4");
    trackierEvent.setParam5("Param 5");
    trackierEvent.setCouponCode("TestCode");
    this.trackierCordovaPlugin.setUserId("TesUserId");
    this.trackierCordovaPlugin.setUserName("Sanu");
    this.trackierCordovaPlugin.setUserPhone("8130300721");
    this.trackierCordovaPlugin.setUserEmail("sanu@gmail.com");
    this.trackierCordovaPlugin.trackEvent(trackierEvent);
  }

}
