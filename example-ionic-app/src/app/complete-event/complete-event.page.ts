import { Component, OnInit } from '@angular/core';
import { AppTroveCordovaPlugin, AppTroveEvent } from 'com.apptrove.cordova_sdk/ionic-native/apptrove/ngx';

@Component({
  selector: 'app-complete-event',
  templateUrl: './complete-event.page.html',
  styleUrls: ['./complete-event.page.scss']
})
export class CompleteEventPage implements OnInit {

  // Event details - now editable by user
  eventDetails = {
    eventId: 'B4N_In4cIP',
    orderId: 'REG_001',
    productId: 'FREE_PLAN',
    currency: 'USD',
    couponCode: '343434234',
    discount: 3.1415,
    revenue: 34234234.32423,
    params: {
      param1: 'Test1',
      param2: 'Test2',
      param3: 'Test3',
      param4: 'Test4',
      param5: 'Test5',
      param6: 'Test6',
      param7: 'Test7',
      param8: 'Test8',
      param9: 'Test9',
      param10: 'Test10'
    } as { [key: string]: string },
    customValues: {
      signup_time: '1631234567890',
      device: 'Cordova',
      Plan: 'FREE_PLAN',
      SignupMethod: 'Email',
      AppVersion: '1.0.0'
    } as { [key: string]: string },
    userDetails: {
      userId: 'USER123',
      email: 'user@example.com',
      name: 'Jane Doe',
      phone: '+1234567890',
      dob: '1990-01-01',
      gender: 'Male'
    }
  };

  isEventSent = false;
  isLoading = false;

  constructor(private appTroveCordovaPlugin: AppTroveCordovaPlugin) { }

  ngOnInit() {
  }

  // Reset all values to their defaults
  resetToDefaults() {
    this.eventDetails = {
      eventId: 'B4N_In4cIP',
      orderId: 'REG_001',
      productId: 'FREE_PLAN',
      currency: 'USD',
      couponCode: '343434234',
      discount: 3.1415,
      revenue: 34234234.32423,
      params: {
        param1: 'Test1',
        param2: 'Test2',
        param3: 'Test3',
        param4: 'Test4',
        param5: 'Test5',
        param6: 'Test6',
        param7: 'Test7',
        param8: 'Test8',
        param9: 'Test9',
        param10: 'Test10'
      } as { [key: string]: string },
      customValues: {
        signup_time: '1631234567890',
        device: 'Cordova',
        Plan: 'FREE_PLAN',
        SignupMethod: 'Email',
        AppVersion: '1.0.0'
      } as { [key: string]: string },
      userDetails: {
        userId: 'USER123',
        email: 'user@example.com',
        name: 'Jane Doe',
        phone: '+1234567890',
        dob: '1990-01-01',
        gender: 'Male'
      }
    };
    this.isEventSent = false;
  }

  // Helper method to get parameter entries for display
  getParamEntries() {
    return Object.keys(this.eventDetails.params).map(key => ({
      key: key.charAt(0).toUpperCase() + key.slice(1),
      value: this.eventDetails.params[key as keyof typeof this.eventDetails.params]
    }));
  }

  // Helper method to get custom value entries for display
  getCustomValueEntries() {
    return Object.keys(this.eventDetails.customValues).map(key => ({
      key: key,
      value: this.eventDetails.customValues[key as keyof typeof this.eventDetails.customValues]
    }));
  }

  // Demo function to showcase all AppTrove SDK event tracking capabilities
  async sendCompleteEvent() {
    try {
      this.isLoading = true;
      this.isEventSent = false;
      
      // Create event with COMPLETE_REGISTRATION ID or Custom Event ID
      var event = new AppTroveEvent(this.eventDetails.eventId);

      // Built-in fields for event tracking
      event.setOrderId(this.eventDetails.orderId);
      event.setProductId(this.eventDetails.productId);
      event.setCurrency(this.eventDetails.currency);
      event.setCouponCode(this.eventDetails.couponCode);
      event.setDiscount(this.eventDetails.discount);
      event.setRevenue(this.eventDetails.revenue);

      // Custom parameters for structured data
      event.setParam1(this.eventDetails.params['param1']);
      event.setParam2(this.eventDetails.params['param2']);
      event.setParam3(this.eventDetails.params['param3']);
      event.setParam4(this.eventDetails.params['param4']);
      event.setParam5(this.eventDetails.params['param5']);
      event.setParam6(this.eventDetails.params['param6']);
      event.setParam7(this.eventDetails.params['param7']);
      event.setParam8(this.eventDetails.params['param8']);
      event.setParam9(this.eventDetails.params['param9']);
      event.setParam10(this.eventDetails.params['param10']);

      // Note: setEventValue is not yet implemented in the SDK
      // Custom values can be passed using param1-param10 instead
      // TODO: Enable when SDK supports setEventValue
      // Object.keys(this.eventDetails.customValues).forEach(key => {
      //   event.setEventValue(key, this.eventDetails.customValues[key]);
      // });

      // Set user details in AppTrove SDK (fire and forget - don't await)
      this.appTroveCordovaPlugin.setUserId(this.eventDetails.userDetails.userId)
        .catch(err => console.log('setUserId error:', err));
      this.appTroveCordovaPlugin.setUserEmail(this.eventDetails.userDetails.email)
        .catch(err => console.log('setUserEmail error:', err));
      this.appTroveCordovaPlugin.setUserName(this.eventDetails.userDetails.name)
        .catch(err => console.log('setUserName error:', err));
      this.appTroveCordovaPlugin.setUserPhone(this.eventDetails.userDetails.phone)
        .catch(err => console.log('setUserPhone error:', err));
      this.appTroveCordovaPlugin.setDOB(this.eventDetails.userDetails.dob)
        .catch(err => console.log('setDOB error:', err));
      this.appTroveCordovaPlugin.setGender(this.eventDetails.userDetails.gender)
        .catch(err => console.log('setGender error:', err));

      // Send the event to AppTrove
      this.appTroveCordovaPlugin.trackEvent(event)
        .then(() => {
          console.log("Complete event tracked successfully!");
        })
        .catch(err => {
          console.log('trackEvent error:', err);
        });
      
      // Small delay to allow native calls to process
      setTimeout(() => {
        this.isEventSent = true;
        this.isLoading = false;
      }, 500);
      
      return; // Exit early since we're using setTimeout
      
    } catch (error) {
      console.error("Error running complete event:", error);
      this.isLoading = false;
    }
  }

}
