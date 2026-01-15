import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PushNotifications, Token } from '@capacitor/push-notifications';
import { AppTroveCordovaPlugin } from 'com.apptrove.cordova_sdk/ionic-native/apptrove/ngx';

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  private readonly FCM_TOKEN_KEY = 'fcm_token';

  constructor(
    private platform: Platform,
    private appTroveCordovaPlugin: AppTroveCordovaPlugin
  ) {}

  /**
   * Initialize FCM and handle token refresh
   * Similar to Flutter: FirebaseMessaging.instance.onTokenRefresh.listen()
   * 
   * NOTE: Requires google-services.json to be configured in the Android project.
   * Without it, FCM will be skipped gracefully.
   */
  async initializeFCM(): Promise<void> {
    try {
      // Only initialize on Android (iOS uses APNS)
      if (!this.platform.is('android')) {
        console.log('FCM is only initialized on Android platform');
        return;
      }

      console.log('Initializing FCM...');

      // First, add the registration error listener to catch Firebase initialization errors
      PushNotifications.addListener('registrationError', (error: any) => {
        console.warn('FCM registration error:', error);
        if (error?.error?.includes('FirebaseApp is not initialized') || 
            error?.message?.includes('FirebaseApp is not initialized')) {
          console.warn('Firebase not configured. Please add google-services.json to enable push notifications.');
        }
      });

      // Request permission to receive push notifications
      const permStatus = await PushNotifications.requestPermissions();

      if (permStatus.receive === 'granted') {
        // Listen for token registration before calling register
        PushNotifications.addListener('registration', (token: Token) => {
          console.log('FCM Token received:', token.value);
          this.handleTokenRefresh(token.value);
        });

        // Register with FCM - this may fail if Firebase is not initialized
        // We wrap this in a try-catch to handle the case gracefully
        try {
          await PushNotifications.register();
          console.log('FCM registration initiated');
        } catch (registerError: any) {
          // Check if it's a Firebase initialization error
          const errorMessage = registerError?.message || registerError?.toString() || '';
          if (errorMessage.includes('FirebaseApp is not initialized') || 
              errorMessage.includes('Default FirebaseApp')) {
            console.warn('⚠️ Firebase not configured. Push notifications are disabled.');
            console.warn('To enable push notifications, add google-services.json to android/app/');
          } else {
            console.error('Error registering for push notifications:', registerError);
          }
          return; // Exit gracefully
        }

        console.log('FCM initialized successfully');
      } else {
        console.warn('Push notification permission not granted');
      }
    } catch (error: any) {
      // Handle any Firebase-related errors gracefully
      const errorMessage = error?.message || error?.toString() || '';
      if (errorMessage.includes('FirebaseApp is not initialized') || 
          errorMessage.includes('Default FirebaseApp')) {
        console.warn('⚠️ Firebase not configured. Push notifications are disabled.');
        console.warn('To enable push notifications, add google-services.json to android/app/');
      } else {
        console.error('Error initializing FCM:', error);
      }
    }
  }

  /**
   * Handle token refresh - only send to AppTrove if token has changed
   * Similar to Android: override fun onNewToken(token: String)
   */
  private handleTokenRefresh(newToken: string): void {
    try {
      // Get the previously stored token
      const storedToken = localStorage.getItem(this.FCM_TOKEN_KEY);

      // Check if token has changed
      if (storedToken !== newToken) {
        console.log('FCM Token changed or first time:', newToken);
        
        // Send the new token to AppTrove SDK
        this.appTroveCordovaPlugin.sendFcmToken(newToken);
        console.log('FCM Token sent to AppTrove SDK successfully');

        // Store the new token
        localStorage.setItem(this.FCM_TOKEN_KEY, newToken);
      } else {
        console.log('FCM Token unchanged, not sending to AppTrove SDK');
      }
    } catch (error) {
      console.error('Error handling FCM token refresh:', error);
    }
  }

  /**
   * Manually get current FCM token
   */
  async getCurrentToken(): Promise<string | null> {
    try {
      const storedToken = localStorage.getItem(this.FCM_TOKEN_KEY);
      return storedToken;
    } catch (error) {
      console.error('Error getting current FCM token:', error);
      return null;
    }
  }

  /**
   * Clear stored token (useful for testing or logout)
   */
  clearToken(): void {
    localStorage.removeItem(this.FCM_TOKEN_KEY);
    console.log('FCM token cleared from storage');
  }
}
