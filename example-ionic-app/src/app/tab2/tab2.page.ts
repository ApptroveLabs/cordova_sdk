import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Photo, PhotoService } from '../services/photo.service';
import { TrackierCordovaPlugin, TrackierConfig, TrackierEnvironment, TrackierEvent } from '@awesome-cordova-plugins/trackier/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController, private trackierCordovaPlugin:TrackierCordovaPlugin) {}

  async ngOnInit() {
    await this.photoService.loadSaved();
   /* While Initializing the Sdk, You need to pass the three parameter in the TrackierSDKConfig.
    * In first argument, you need to pass the Trackier SDK api key
    * In second argument, you need to pass the environment which can be either "development", "production" or "testing". */

   var key = "0455721b-XXXXX-596d818d910a";//Please pass your Development key here.
   var trackierConfig = new TrackierConfig(key,TrackierEnvironment.Development);
   this.trackierCordovaPlugin.initializeSDK(trackierConfig);

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
