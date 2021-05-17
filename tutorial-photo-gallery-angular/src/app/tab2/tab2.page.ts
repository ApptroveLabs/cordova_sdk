import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Photo, PhotoService } from '../services/photo.service';
import { TrackierCordovaPlugin, TrackierConfig, TrackierEnvironment} from '@ionic-native/trackier-cordova-plugin/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController, private trackierCordovaPlugin:TrackierCordovaPlugin) {}

  async ngOnInit() {
    await this.photoService.loadSaved();
    console.log("trackiersdk initialize sdk start............................");
    var trackierConfig = new TrackierConfig("xxxx-xx-4505-bc8b-xx",TrackierEnvironment.Development);
    this.trackierCordovaPlugin.initializeSDK(trackierConfig);
    console.log("trackiersdk initialize sdk end............................");
  }

  public async showActionSheet(photo: Photo, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
         }
      }]
    });
    await actionSheet.present();
  }
}
