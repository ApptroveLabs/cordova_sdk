import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AppTroveCordovaPlugin, AppTroveConfig, AppTroveEnvironment, AppTroveEncryptionType } from 'com.apptrove.cordova_sdk/ionic-native/apptrove/ngx';
import { Platform, NavController, AlertController } from '@ionic/angular';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { Plugins } from '@capacitor/core';
import { environment } from '../environments/environment';
import { AdvertisingId } from '@capacitor-community/advertising-id';
import { DeferredDeeplinkService } from './services/deferred-deeplink.service';
import { FcmService } from './services/fcm.service';
import { ApnService } from './services/apn.service';
import { App as CapacitorApp } from '@capacitor/app';

const { App } = Plugins;

interface AppUrlOpenData {
  url: string;
}

interface DeepLinkData {
  productId: string;
  quantity: number;
  actionData?: any;
  dlv?: string;
}

interface DeepLinkMatchData {
  productId: string;
  quantity: string; // URL parameters are strings
  [key: string]: any; // Allow additional properties
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isSplashVisible: boolean = true;
  isDeepLinkOpen: boolean = false; // Track if the app is opened via deep link

  constructor(
    private splashScreen: SplashScreen,
    private apptroveCordovaPlugin: AppTroveCordovaPlugin,
    private router: Router,
    private platform: Platform,
    private deeplinks: Deeplinks,
    private deferredDeeplinkService: DeferredDeeplinkService,
    private fcmService: FcmService,
    private apnService: ApnService,
    private navController: NavController,
    private ngZone: NgZone,
    private alertController: AlertController
  ) {
    this.platform.ready().then(() => {
      this.initializeApp();
      this.setupBackButtonHandler();
    });
  }

  // Handle Android back button/gesture properly - centralized handler
  private setupBackButtonHandler() {
    if (this.platform.is('android')) {
      this.platform.backButton.subscribeWithPriority(10, () => {
        this.ngZone.run(async () => {
          const currentUrl = this.router.url;
          
          // If on home page, show exit confirmation
          if (currentUrl === '/home' || currentUrl === '/') {
            await this.showExitConfirmation();
          } else {
            // Navigate back for all other pages
            this.navController.back();
          }
        });
      });
    }
  }

  // Show exit confirmation dialog
  private async showExitConfirmation() {
    const alert = await this.alertController.create({
      header: 'Exit App',
      message: 'Are you sure you want to exit?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Exit',
          handler: () => {
            CapacitorApp.exitApp();
          }
        }
      ]
    });
    await alert.present();
  }

  private initializeApp() {
    // Initialize AppTrove SDK first
    this.initializeAppTroveSDK();
    
    // Initialize deep links
    this.initializeDeepLinks();
    
    // Listen for deep links
    App['addListener']('appUrlOpen', (data: AppUrlOpenData) => {
      console.log('App URL Opened:', data);
      this.isDeepLinkOpen = true; // Mark as deep link opened
      this.handleDeepLinkFromUrl(data.url);
    });
  }

  private handleDeepLinkFromUrl(url: string) {
    try {
      const urlParams = new URL(url);
      const productId = urlParams.searchParams.get('product_id') || '';
      const quantity = parseInt(urlParams.searchParams.get('quantity') || '0', 10);

      if (productId && quantity > 0) {
        // Skip splash screen and navigate directly to the 'cake-screen'
        this.router.navigate(['/cake-screen'], {
          queryParams: { productId, quantity },
        });
        this.isSplashVisible = false;  // Hide splash screen immediately
      } else {
        // If no valid product/quantity found, navigate to home screen
        this.router.navigate(['/home']);
      }
    } catch (error) {
      console.error('Error parsing deep link URL:', error);
      this.router.navigate(['/home']);
    }
  }

  private initializeAppTroveSDK() {
    // Select SDK key based on platform
    const key = this.platform.is('ios') 
      ? environment.apptroveSdkKey.ios 
      : environment.apptroveSdkKey.android;
    
    const apptroveConfig = new AppTroveConfig(key, AppTroveEnvironment.Testing);
    
    console.log('Initializing AppTrove SDK with key:', key);

    // Android-specific configuration for encrypt your logs and header request 
    if (this.platform.is('android')) {
      // apptroveConfig.setAppID("XXXXXXXX");
      // apptroveConfig.setEncryptionKey("xxxxxxxxxxxxxx");
      // apptroveConfig.setEncryptionType(AppTroveEncryptionType.AES_GCM);
    }

            // iOS: Update conversion value
            if (this.platform.is('ios')) {
              this.apptroveCordovaPlugin.updatePostbackConversion(10);
            }
    

    // iOS: Configure ATT timeout (should be called before initialization)
    if (this.platform.is('ios')) {
      this.apptroveCordovaPlugin.waitForATTUserAuthorization(20);
    }

    console.log('AppTrove SDK Config:', JSON.stringify({
      key: key,
      environment: 'Testing'
    }));
    
    this.apptroveCordovaPlugin.initializeSDK(apptroveConfig)
      .then(() => {
        console.log('AppTrove SDK initialized successfully!');
        
        // Get AppTrove ID to verify SDK is working
        this.apptroveCordovaPlugin.getAppTroveId()
          .then((id: string) => console.log('AppTrove ID:', id))
          .catch((err: any) => console.log('getAppTroveId error:', err));

        // Android: Initialize FCM and handle token refresh automatically
        // Only sends token when it changes 
        // NOTE: FCM requires google-services.json to be configured in android/app/
        // Uncomment the line below once Firebase is configured:
        // if (this.platform.is('android')) {
        //   this.fcmService.initializeFCM();
        // }

        // iOS: Initialize APN and handle token refresh for uninstall tracking
        // Only sends token when it changes (similar to FCM on Android)
        if (this.platform.is('ios')) {
          this.apnService.initializeAPN();
        }

        // iOS: Subscribe to attribution
        if (this.platform.is('ios')) {
          this.apptroveCordovaPlugin.subscribeAttributionlink();
        }

        // Get Apple Ads Token and send to SDK (iOS only)
        if (this.platform.is('ios')) {
          this.getAppleAdsToken();
        }

        // Set up deferred deep link callback
        this.setupDeferredDeeplinkCallback();

        // Parse deep link for testing (optional)
        setTimeout(() => {
          // Pass user clicked url here for testing - add short url from AppTrove panel
          this.apptroveCordovaPlugin.parseDeepLink("https://trackier58.u9ilnk.me/d/8X7iwyXsyA")
            .then((result: any) => {
              console.log("parseDeepLink result:", result);
            })
            .catch((error: any) => {
              console.error("Error parsing deep link:", error);
            });
        }, 1000);
      })
      .catch((error: any) => console.error('Error initializing AppTrove SDK:', error))
      .finally(() => {
        // Only show splash screen if the app is NOT opened via deep link
        if (!this.isDeepLinkOpen) {
          setTimeout(() => {
            this.isSplashVisible = false;
            this.splashScreen.hide();
            this.router.navigate(['/home']); // Navigate to home screen if not a deep link
          }, 2000); // 2 seconds delay
        }
      });
  }

  private initializeDeepLinks() {
    this.deeplinks.route({
      '/cake/:productId/:quantity': (data: DeepLinkMatchData) => {
        this.handleDeepLink({
          productId: data.productId,
          quantity: parseInt(data.quantity, 10),
          actionData: data['actionData'], // Access with bracket notation
          dlv: data['dlv'], // Access with bracket notation
        });
      },
    }).subscribe(
      (match) => {
        console.log('Deep Link Matched:', match);
      },
      (nomatch) => {
        console.warn('No matching deep link:', nomatch);
        this.router.navigate(['/home']);
      }
    );
  }

  private handleDeepLink(data: DeepLinkData) {
    const { productId, quantity, actionData, dlv } = data;

    // Directly navigate to cake-screen with deep link parameters
    this.router.navigate(['/cake-screen'], {
      queryParams: { productId, quantity, actionData, dlv },
    });
  }

  // Get Apple Ads Token and send to AppTrove SDK
  private async getAppleAdsToken() {
    try {
      // Only run on iOS
      if (!this.platform.is('ios')) {
        console.log("Apple Ads Token only available on iOS");
        return;
      }

      console.log("Getting Apple Ads Token...");

      // First request tracking authorization
      const trackingResult = await AdvertisingId.requestTracking();

      if (trackingResult.value === 'Authorized') {
        // Permission granted, get the advertising ID
        const advertisingResult = await AdvertisingId.getAdvertisingId();
        const token = advertisingResult.id;

        console.log("Apple Ads Token received:", token);

        if (token) {
          this.apptroveCordovaPlugin.updateAppleAdsToken(token);
          console.log("Apple Ads Token sent to AppTrove SDK successfully");
        } else {
          console.log("No Apple Ads Token available");
        }
      } else {
        console.log("Tracking permission denied or restricted");
      }
    } catch (error) {
      console.error("Error getting Apple Ads Token:", error);
    }
  }

  // Set up deferred deep link callback
  private setupDeferredDeeplinkCallback() {
    try {
      console.log("Setting up deferred deep link callback...");

      this.apptroveCordovaPlugin.setDeferredDeeplinkCallbackListener().subscribe({
        next: (url: string) => {
          console.log("DEFERRED DEEP LINK RECEIVED:", url);
          this.deferredDeeplinkService.setDeferredDeeplink(url);
        },
        error: (error: any) => {
          console.error("Error in deferred deeplink callback:", error);
        }
      });

      console.log("Deferred deep link callback set up successfully");
    } catch (error) {
      console.error("Error setting up deferred deeplink callback:", error);
    }
  }
}
