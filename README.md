# cordova-sdk

## Table of Content

### Integration

- [Quick start guide](#qs-add-trackier-sdk)
  - [Add Cordova SDK to your app ](#qs-add-sdk)
- [Integrate and Initialize the Trackier SDK](#qs-implement-trackier-sdk)
  - [Retrieve your sdk key](#qs-retrieve-sdk-key)
  - [Initialize the SDK into your app](#qs-initialize-trackier-sdk)
- [Events Tracking](#qs-track-event)
  - [Retrieve Event Id from dashboard](#qs-retrieve-event-id)
  - [Built-in Events](#qs-built-in)
  - [Customs Events](#qs-customs-events)
  - [Revenue Event Tracking](#qs-track-event-with-currencey)
- [Proguard Settings](#qs-progaurd-trackier-sdk)

## <a id="qs-add-trackier-sdk"></a>Quick start guide

We have created a example app for the cordova sdk integration. 

Please check the [Example](https://github.com/trackier/cordova_sdk/tree/main/example-ionic-app) directory for know to how the `Trackier SDK` can be integrated.

### <a id="qs-add-sdk"></a>Add Cordova SDK to your app

Basic integration First, download the library from npm:

    $ npm install trackier/cordova_sdk

In case you are using Ionic Native, you can add our SDK from ionic-native repo:

### <a id="qs-implement-trackier-sdk"></a>Integrate and Initialize the Trackier SDK

### <a id="qs-retrieve-sdk-key"></a>Retrieve your sdk key

For initialising the Trackier SDk. First, We need to generate the Sdk key from the Trackier MMP panel.

Following below are the steps to retrieve the development key:-

- Login your Trackier Panel
- Select your application and click on Action button and login as
- In the Dashboard, Click on the` SDK Integration` option on the left side of panel. 
- under on the SDK Integration, You will be get the SDK Key.

After follow all steps, Your SDK key look like the below screenshot

Screenshot[1]

<img width="1000" alt="Screenshot 2022-06-10 at 3 46 48 PM" src="https://user-images.githubusercontent.com/16884982/173044860-a540706c-ad10-4174-aaf0-7cf9290fc949.png">

#### <a id="qs-initialize-trackier-sdk"></a>Integrate the Trackier SDK in the Cordova Application.

#### Initialize the SDK into your app:

The Trackier SDK automatically registers with the Cordova events deviceready, resume and pause.

Depending on whether you build your app for testing or for production, you must set environment with one of these values:

    TrackierEnvironment.Development
    TrackierEnvironment.Production
    TrackierEnvironment.Testing

In your index.js file after you have received the deviceready event, add the following code to initialize the Trackier SDK:

```js 
export class Tab2Page {

constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController, private trackierCordovaPlugin:TrackierCordovaPlugin) {}

  async ngOnInit() {
    await this.photoService.loadSaved();

    /*While Initializing the Sdk, You need to pass the three parameter in the TrackierSDKConfig.
         * In first argument, you need to pass the Trackier SDK api key
         * In second argument, you need to pass the environment which can be either "development", "production" or "testing". */

    var key = "xxxx-xx-4505-bc8b-xx";//Please pass your Development key here.
    var trackierConfig = new TrackierConfig(key,TrackierEnvironment.Development);
    this.trackierCordovaPlugin.initializeSDK(trackierConfig);

  }
}

```

Also, you can the screenshot of example below:-

Screenshot[2]

<img width="1000" alt="Screenshot 2022-07-20 at 5 26 17 PM" src="https://user-images.githubusercontent.com/16884982/179975981-7528b5b0-759f-4f0b-96d2-2c93953baef8.png">

In case you are using ionic native application:

1)Register the provider at app.module.ts:

 You need to import the plugin and add the provider into app.module.ts, so add the import line and the provider in @NgModule:

```js   
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackierCordovaPlugin} from '@ionic-native/trackier-cordova-plugin/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [TrackierCordovaPlugin,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}

```

## <a id="qs-track-event"></a>Events Tracking

<a id="qs-retrieve-event-id"></a>Trackier events trackings enable to provides the insights into how to user interacts with your app. 
Trackier sdk easily get that insights data from the app. Just follow with the simple events integration process

Trackier provides the `Built-in events` and `Customs events` on the Trackier panel.

####  <a id="qs-built-in"></a> **Built-in Events** - 

Predefined events are the list of constants events which already been created on the dashboard. 

You can use directly to track those events. Just need to implements events in the app projects.

Screenshot[3]

<img width="1000" alt="Screenshot 2022-06-10 at 1 23 01 PM" src="https://user-images.githubusercontent.com/16884982/173018185-3356c117-8b9f-46d1-bfd5-c41653f9ac9e.png">

### Example code for calling Built-in events

```js
  export class Tab3Page {

  constructor(private trackierCordovaPlugin:TrackierCordovaPlugin) {}

/*
 * Event Tracking
  <------------->
 * The below code is the example to pass a event to the Trackier SDK.
 * This event requires only 1 Parameter which is the Event ID.
 * Below are the example of built-in events function calling
 * The arguments - "sEQWVHGThl" passed in the Trackier event class is Events id
 */
  async ngOnInit() {
    var trackierEvent = new TrackierEvent("sEQWVHGThl");

  /*Below are the function for the adding the extra data,
    You can add the extra data like login details of user or anything you need.
    We have 10 params to add data, Below 5 are mentioned*/
    trackierEvent.setParam1("Param 1");
    trackierEvent.setParam2("Param 2");
    trackierEvent.setParam3("Param 3");
    trackierEvent.setParam4("Param 4");
    trackierEvent.setParam5("Param 5");
    this.trackierCordovaPlugin.trackEvent(trackierEvent);
  }
  
}

```
Note:- Argument in Trackier event class is event Id.

You can integrate inbuilt params with the event. In-built param list are mentioned below:-

orderId, revenue, currency, param1, param2, param3 ,param4, param5, param6, param7, param8, param9, param10.

Below are the screenshot of following example

Screenshot[4]

<img width="1000" alt="Screenshot 2022-07-20 at 5 27 54 PM" src="https://user-images.githubusercontent.com/16884982/179976242-949d1535-4fdd-4037-9ff8-780e5b2f6bf8.png">

#### <a id="qs-customs-events"></a> **Customs Events** - 

Customs events are created by user as per their required business logic. 

You can create the events in the Trackier dashboard and integrate those events in the app project.

Screenshot[5]

<img width="1000" alt="Screenshot 2022-06-29 at 4 09 37 PM" src="https://user-images.githubusercontent.com/16884982/176417552-a8c80137-aa1d-480a-81a3-ea1e03172868.png">

#### Example code for calling Customs Events.

```js

export class Tab3Page {

  constructor(private trackierCordovaPlugin:TrackierCordovaPlugin) {}

/*
 * Event Tracking
  <------------->
 * The below code is the example to pass a event to the Trackier SDK.
 * This event requires only 1 Parameter which is the Event ID.
 * Below are the example of built-in events function calling
 * The arguments - "sEMWSCTXeu" passed in the Trackier event class is Events id
 */
  async ngOnInit() {
    var trackierEvent = new TrackierEvent("sEMWSCTXeu"); //Pass your eventid here

  /*Below are the function for the adding the extra data,
    You can add the extra data like login details of user or anything you need.
    We have 10 params to add data, Below 5 are mentioned*/
    trackierEvent.setParam1("Param 1");
    trackierEvent.setParam2("Param 2");
    trackierEvent.setParam3("Param 3");
    trackierEvent.setParam4("Param 4");
    trackierEvent.setParam5("Param 5");
    this.trackierCordovaPlugin.trackEvent(trackierEvent);
  }
  
}

```
Below are the screenshot of customs events calling 

Screenshot[6]

<img width="1000" alt="Screenshot 2022-07-20 at 5 46 44 PM" src="https://user-images.githubusercontent.com/16884982/179979818-68bf10ea-d216-4fea-bd4e-93ab2fbe18e7.png">


### <a id="qs-track-event-with-currencey"></a>Revenue Event Tracking

Trackier allow user to pass the revenue data which is generated from the app through Revenue events. It is mainly used to keeping record of generating revenue from the app and also you can pass currency as well.

```js

export class Tab3Page {

  constructor(private trackierCordovaPlugin:TrackierCordovaPlugin) {}

/*
 * Event Tracking
  <------------->
 * The below code is the example to pass a event to the Trackier SDK.
 * This event requires only 1 Parameter which is the Event ID.
 * Below are the example of built-in events function calling
 * The arguments - "sEQWVHGThl" passed in the Trackier event class is Events id
 */
  async ngOnInit() {
    var trackierEvent = new TrackierEvent("sEQWVHGThl"); //Pass your eventid here

  /*Below are the function for the adding the extra data,
    You can add the extra data like login details of user or anything you need.
    We have 10 params to add data, Below 5 are mentioned*/
    trackierEvent.setParam1("XXXXXX");
    trackierEvent.setParam2("kkkkkkk");
    trackierEvent.setRevenue(2.5);//Pass your generated revenue here.
    trackierEvent.setCurrency("USD");//Pass your currency here.
    TrackierSDK.trackEvent(trackierEvent);
  }
  
}

```

Below are the screenshot of example of revenue events 

Screenshot[7]

<img width="1000" alt="Screenshot 2022-07-20 at 5 44 15 PM" src="https://user-images.githubusercontent.com/16884982/179979416-bafcfbe6-80f1-48e9-910e-1d64ecbf8607.png">

    
    
## <a id="qs-progaurd-trackier-sdk"></a>Proguard Settings 

If your app is using proguard then add these lines to the proguard config file 

``` 
  -keep class com.trackier.sdk.** { *; }
  -keep class com.google.android.gms.common.ConnectionResult {
      int SUCCESS;
  }
  -keep class com.google.android.gms.ads.identifier.AdvertisingIdClient {
      com.google.android.gms.ads.identifier.AdvertisingIdClient$Info getAdvertisingIdInfo(android.content.Context);
  }
  -keep class com.google.android.gms.ads.identifier.AdvertisingIdClient$Info {
      java.lang.String getId();
      boolean isLimitAdTrackingEnabled();
  }
  -keep public class com.android.installreferrer.** { *; }
```

    
