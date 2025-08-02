import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { TrackierCordovaPlugin, TrackierConfig, TrackierEnvironment, TrackierEvent } from '@awesome-cordova-plugins/trackier/ngx';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: false,
})
export class Tab4Page implements OnInit {
  createdDynamicLink = '';
  testResult = '';
  isLoading = false;

  constructor(
    private trackierPlugin: TrackierCordovaPlugin,
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.initializePlugin();
  }

  async initializePlugin() {
    try {
      this.isLoading = true;
      const observable = this.trackierPlugin.setDeferredDeeplinkCallbackListener();
      observable.subscribe({
        next: (deepLinkUrl: string) => {
          console.log('Deferred deeplink received:', deepLinkUrl);
          this.showToast('Deferred deeplink received: ' + deepLinkUrl);
        },
        error: (error: any) => {
          console.error('Error in deferred deeplink callback:', error);
        }
      });
      await this.showToast('Dynamic Link features ready!');
    } catch (error) {
      await this.showToast('Error initializing: ' + error);
    } finally {
      this.isLoading = false;
    }
  }

  async createDynamicLink() {
    try {
      this.isLoading = true;
      this.createdDynamicLink = '';
      
      const dynamicLinkConfig = {
        templateId: 'M5Osa2',
        link: 'https://testdeeplink',
        domainUriPrefix: 'https://trackier59.u9ilnk.me',
        deepLinkValue: 'MyMainactivity',
        androidParameters: {
          redirectLink: 'https://play.google.com/store/apps/details?id=com.yourapp'
        },
        iosParameters: {
          redirectLink: 'https://apps.apple.com/app/yourapp/id123456789'
        },
        desktopParameters: {
          redirectLink: 'https://yourapp.com'
        },
        sdkParameters: {
          utm_source: 'demo',
          utm_medium: 'app',
          utm_campaign: 'dynamic_link_test'
        },
        socialMetaTagParameters: {
          title: 'Check out this amazing app!',
          description: 'Download our app and get amazing features',
          imageLink: 'https://yourapp.com/app-icon.png'
        },
        attributionParameters: {
          channel: 'social',
          campaign: 'summer_sale',
          mediaSource: 'facebook',
          p1: 'param1_value',
          p2: 'param2_value',
          p3: 'param3_value',
          p4: 'param4_value',
          p5: 'param5_value'
        }
      };
      
      this.createdDynamicLink = await this.trackierPlugin.createDynamicLink(dynamicLinkConfig);
      await this.showToast('Dynamic link created successfully!');
    } catch (error) {
      await this.showToast('Error creating dynamic link: ' + error);
    } finally {
      this.isLoading = false;
    }
  }

  async testProvidedLink() {
    try {
      this.isLoading = true;
      this.testResult = '';
      
      const providedLink = 'https://trackier58.u9ilnk.me/d/8X7iwyXsyA';
      const result = await this.trackierPlugin.resolveDeeplinkUrl(providedLink);
      
      // Just show the returned URL
      if (result && result.url) {
        this.testResult = result.url;
        await this.showToast('Link resolved successfully!');
      } else {
        this.testResult = 'No URL returned from resolver';
        await this.showToast('No URL returned from resolver');
      }
    } catch (error) {
      this.testResult = 'Error resolving link: ' + error;
      await this.showToast('Error resolving link: ' + error);
    } finally {
      this.isLoading = false;
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    await toast.present();
  }
}
