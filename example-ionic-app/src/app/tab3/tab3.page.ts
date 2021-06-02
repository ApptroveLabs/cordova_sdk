import { Component } from '@angular/core';
import { TrackierCordovaPlugin, TrackierConfig, TrackierEnvironment, TrackierEvent} from '@ionic-native/trackier-cordova-plugin/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private trackierCordovaPlugin:TrackierCordovaPlugin) {}

  async ngOnInit() {
    var trackierEvent = new TrackierEvent("sEQWVHGThl");
    trackierEvent.setParam1("Param 1");
    this.trackierCordovaPlugin.trackEvent(trackierEvent);
  }

}
