import { Component } from '@angular/core';
import { ActionSheetController, Platform } from '@ionic/angular';
import { Photo, PhotoService } from '../services/photo.service';
import { TrackierCordovaPlugin, TrackierConfig, TrackierEnvironment, TrackierEvent, TrackierEncryptionType } from '@awesome-cordova-plugins/trackier/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController, private trackierCordovaPlugin:TrackierCordovaPlugin, private platform: Platform) {}

  async ngOnInit() {
    await this.photoService.loadSaved();
   /* While Initializing the Sdk, You need to pass the three parameter in the TrackierSDKConfig.
    * In first argument, you need to pass the Trackier SDK api key
    * In second argument, you need to pass the environment which can be either "development", "production" or "testing". */

   var key = "0455721b-XXXXX-596d818d910a";//Please pass your Development key here.
   var trackierConfig = new TrackierConfig(key,TrackierEnvironment.Development);

   // Android-specific configuration
   if (this.platform.is('android')) {
     trackierConfig.setAppID("your-app-id");
     trackierConfig.setEncryptionKey("your-encryption-key");
     trackierConfig.setEncryptionType(TrackierEncryptionType.AES_GCM);
   }

   // iOS: Configure ATT timeout (should be called before initialization)
   if (this.platform.is('ios')) {
     this.trackierCordovaPlugin.waitForATTUserAuthorization(20);
   }

   this.trackierCordovaPlugin.initializeSDK(trackierConfig);

   // Android: Send FCM token
   if (this.platform.is('android')) {
     // Replace with actual FCM token from Firebase
     var fcmToken = "your-fcm-token";
     this.trackierCordovaPlugin.sendFcmToken(fcmToken);
   }

   // iOS: Update conversion value
   if (this.platform.is('ios')) {
     this.trackierCordovaPlugin.updatePostbackConversion(10);
   }

   // iOS: Subscribe to attribution
   if (this.platform.is('ios')) {
     this.trackierCordovaPlugin.subscribeAttributionlink();
   }

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
