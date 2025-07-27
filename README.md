# cordova-sdk

## Table of Content

### Integration

- [Quick start guide](#qs-add-trackier-sdk)
  - [Add Cordova SDK to your app ](#qs-add-sdk)
- [Integrate and Initialize the Trackier SDK](#qs-implement-trackier-sdk)
  - [Retrieve your sdk key](#qs-retrieve-sdk-key)
  - [Adding Android install referrer to your app](#qs-add-install-referrer)
  - [Getting Google Advertising ID](#qs-getting-gaid)
  - [Initialize the SDK into your app](#qs-initialize-trackier-sdk)
  - [Getting Google Advertising ID](#qs-getting-gaid)
- [Events Tracking](#qs-track-event)
  - [Retrieve Event Id from dashboard](#qs-retrieve-event-id)
  - [Built-in Events](#qs-built-in)
  - [Customs Events](#qs-customs-events)
  - [Revenue Event Tracking](#qs-track-event-with-currencey)
  - [Passing User Data to SDK](#qs-passing-user-data)
- [SDK Signing](#qs-sdk-signing)
- [Uninstall Tracking](#qs-track-uninstall)
- [Getting Campaign Data](#qs-campaign-data)
- [Deep linking](#qs-deeplinking)
- [Proguard Settings](#qs-progaurd-trackier-sdk)

## <a id="qs-add-trackier-sdk"></a>Quick start guide

We have created a example app for the cordova sdk integration. 

Please check the [Example](https://github.com/trackier/cordova_sdk/tree/main/example-ionic-app) directory for know to how the `Trackier SDK` can be integrated.

### <a id="qs-add-sdk"></a>Add Cordova SDK to your app

Basic integration First, download the library from npm:

    $ npm install trackier/cordova_sdk

In case you are using Ionic Native, Please follow the below steps for integration:-

1. Install the the trackier cordova sdk by run the below commands in Terminal/Cmd.

```
$ npm install trackier/cordova_sdk
```

2. You need to add the awesome cordova plugins by run the below commands in Terminal/Cmd.

```
$ npm install @awesome-cordova-plugins/core --save
```

3. Run the below commands in Terminal/Cmd.
```
$ ionic cap sync
```

After following all the above steps, Please add the trackier folder in the the `@awesome-cordova-plugins` which is located in the `node_modules`. 

You can download the trackier folder by the click on below link.

Link - https://github.com/trackier/cordova_sdk/releases/tag/1.6.64

Please check the below screenshots for the reference.

<img width="345" alt="Screenshot 2022-08-31 at 1 05 01 AM" src="https://user-images.githubusercontent.com/16884982/187527379-177beea0-b5ab-4dcb-a4fe-8e6ff1e77a7d.png">

Your node_modules looks similar like above screenshots.
 

### <a id="qs-implement-trackier-sdk"></a>Integrate and Initialize the Trackier SDK

### <a id="qs-retrieve-sdk-key"></a>Retrieve your SDK key

For initialising the Trackier SDk. First, We need to generate the Sdk key from the Trackier MMP panel.

Following below are the steps to retrieve your SDK key:-

- Login to your Trackier MMP account.
- Select the application from dashboard which you want to get the app token for.
- Go to SDK Integration via the left side navigation menu.
- Copy the SDK Key there to be used as the "app_token".

After following all the steps, Your SDK key should look like the below screenshot

Screenshot[1]

<img width="1000" alt="Screenshot 2022-06-10 at 3 46 48 PM" src="https://user-images.githubusercontent.com/16884982/173044860-a540706c-ad10-4174-aaf0-7cf9290fc949.png">

### <a id="qs-add-install-referrer"></a>Adding Android install referrer to your app

Add the Android Install Referrer as a dependency in your app **`build.gradle`** . You can find the latest version [here](https://developer.android.com/google/play/installreferrer/library)

```gradle
dependencies {
  // make sure to use the latest SDK version:
  implementation 'com.android.installreferrer:installreferrer:2.2'
}
```

### <a id="qs-add-request-permissions"></a>Add required permissions

Trackier SDK need the following below permission in the AndroidManifest.xml

Please add the below permission in your app project AndroidManifest.xml. if they are not added.

```xml
  <uses-permission android:name="android.permission.INTERNET" />
  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
  <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />

  <!-- Optional : -->
  <uses-permission android:name="android.permission.READ_PHONE_STATE" />
```

### <a id="qs-getting-gaid"></a> Getting Google Advertising ID

Trackier SDK need the advertising id from the application.

For achieving this, you need to add some line of code in the build.gradle and also in AndroidManifest.xml for read the Advertising id from the application which is mentioned below:-

- Add the google advertising id dependency in your **android/app/build.gradle**


```gradle
dependencies {
  // This can be added where the SDK dependency has been added
  implementation 'com.google.android.gms:play-services-ads-identifier:18.0.1'
}
```
- Update your Android Manifest file by adding the following permission. This is required if your app is targeting devices with android version 12+

```xml
<uses-permission android:name="com.google.android.gms.permission.AD_ID"/>
```

- Add meta data inside the application tag (If not already added)
```xml
<meta-data
            android:name="com.google.android.gms.version"
            android:value="@integer/google_play_services_version" /> //Add this meta-data in the manifest.xml under Application tag.
```


#### <a id="qs-initialize-trackier-sdk"></a>Integrate the Trackier SDK in the Cordova Application.

#### Initialize the SDK into your app:

The Trackier SDK automatically registers with the Cordova events deviceready, resume and pause.

Depending on whether you build your app for testing or for production, you must set environment with one of these values:

    TrackierEnvironment.Development
    TrackierEnvironment.Production
    TrackierEnvironment.Testing

In your index.js file after you have received the deviceready event, add the following code to initialize the Trackier SDK:

```js
 
import { Component } from '@angular/core';
import { TrackierCordovaPlugin, TrackierConfig, TrackierEnvironment, TrackierEvent } from '@awesome-cordova-plugins/trackier/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  constructor(private trackierCordovaPlugin:TrackierCordovaPlugin) {}

  async ngOnInit() {

    /* While Initializing the Sdk, You need to pass the three parameter in the TrackierSDKConfig.
     * In first argument, you need to pass the Trackier SDK api key
     * In second argument, you need to pass the environment which can be either "development", "production" or "testing". */

    var key = "0455721b-XXXX-XXXXX-596d818d910a";//Please pass your Development key here.
    var trackierConfig = new TrackierConfig(key,TrackierEnvironment.Development);
    this.trackierCordovaPlugin.initializeSDK(trackierConfig);
  }
}

```

Also, you can the screenshot of example below:-

Screenshot[2]

<img width="1000" alt="Screenshot 2022-08-31 at 1 01 45 AM" src="https://user-images.githubusercontent.com/16884982/187526812-7eadaee0-8610-4e88-8f66-621d7adc8c34.png">

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

    // Below are the example of built-in events function calling
    // The arguments - "1CFfUn3xEY" passed in the Trackier event class is Events id
    var trackierEvent = new TrackierEvent("1CFfUn3xEY");

  /* Below are the function for the adding the extra data,
     You can add the extra data like login details of user or anything you need.
     We have 10 params to add data, Below 5 are mentioned */
    trackierEvent.setParam1("Param 1");
    trackierEvent.setParam2("Param 2");
    trackierEvent.setParam3("Param 3");
    trackierEvent.setParam4("Param 4");
    trackierEvent.setParam5("Param 5");
    trackierEvent.setCouponCode("TestCode");
    this.trackierCordovaPlugin.setUserId("TesUserId");
    this.trackierCordovaPlugin.setUserName("Test");
    this.trackierCordovaPlugin.setUserPhone("8130XXX721");
    this.trackierCordovaPlugin.setUserEmail("abc@gmail.com");
    this.trackierCordovaPlugin.trackEvent(trackierEvent);
  }

}

```
Note:- Argument in Trackier event class is event Id.

You can integrate inbuilt params with the event. In-built param list are mentioned below:-

orderId, revenue, currency, param1, param2, param3 ,param4, param5, param6, param7, param8, param9, param10.

Below are the screenshot of following example

Screenshot[4]

<img width="1000" alt="Screenshot 2022-08-30 at 5 00 07 PM" src="https://user-images.githubusercontent.com/16884982/187426023-a16af54c-8790-49d8-a2d9-9cc8fa939b45.png">

#### <a id="qs-customs-events"></a> **Customs Events** - 

Customs events are created by user as per their required business logic. 

You can create the events in the Trackier dashboard and integrate those events in the app project.

Screenshot[5]

<img width="1000" alt="Screenshot 2022-06-29 at 4 09 37 PM" src="https://user-images.githubusercontent.com/16884982/176417552-a8c80137-aa1d-480a-81a3-ea1e03172868.png">

#### Example code for calling Customs Events.

```js
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
    // Below are the example of customs events function calling
    // The arguments - "1CFfUn3xEY" passed in the Trackier event class is Events id
    var trackierEvent = new TrackierEvent("1CFfUn3xEY");

 /* Below are the function for the adding the extra data,
    You can add the extra data like login details of user or anything you need.
    We have 10 params to add data, Below 5 are mentioned */
    trackierEvent.setParam1("Param 1");
    trackierEvent.setParam2("Param 2");
    trackierEvent.setParam3("Param 3");
    trackierEvent.setParam4("Param 4");
    trackierEvent.setParam5("Param 5");
    trackierEvent.setCouponCode("TestCode");
    this.trackierCordovaPlugin.setUserId("TesUserId");
    this.trackierCordovaPlugin.setUserName("Test");
    this.trackierCordovaPlugin.setUserPhone("8130XXX721");
    this.trackierCordovaPlugin.setUserEmail("abc@gmail.com");
    this.trackierCordovaPlugin.trackEvent(trackierEvent);
  }

}

```
Below are the screenshot of customs events calling 

Screenshot[6]

<img width="1000" alt="Screenshot 2022-08-30 at 5 19 44 PM" src="https://user-images.githubusercontent.com/16884982/187429282-a1225ecd-dda9-4dcb-89e0-0fb6a7800457.png">

### <a id="qs-track-event-with-currencey"></a>Revenue Event Tracking

Trackier allow user to pass the revenue data which is generated from the app through Revenue events. It is mainly used to keeping record of generating revenue from the app and also you can pass currency as well.

```js

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
    // Below are the example of customs events function calling
    // The arguments - "1CFfUn3xEY" passed in the Trackier event class is Events id
    var trackierEvent = new TrackierEvent("1CFfUn3xEY");

 /* Below are the function for the adding the extra data,
    You can add the extra data like login details of user or anything you need.
    We have 10 params to add data, Below 5 are mentioned */
    trackierEvent.setParam1("Param 1");
    trackierEvent.setParam2("Param 2");
    trackierEvent.setParam3("Param 3");
    trackierEvent.setParam4("Param 4");
    trackierEvent.setParam5("Param 5");
    trackierEvent.setCouponCode("TestCode");
    trackierEvent.revenue(10.0);
    trackierEvent.currency("INR");
    this.trackierCordovaPlugin.trackEvent(trackierEvent);
  }

}

```

Below are the screenshot of example of revenue events 

Screenshot[7]

<img width="1000" alt="Screenshot 2022-07-20 at 5 44 15 PM" src="https://user-images.githubusercontent.com/16884982/179979416-bafcfbe6-80f1-48e9-910e-1d64ecbf8607.png">

## <a id="qs-passing-user-data"></a>Passing User Data to SDK

Trackier allows to pass additional data like Userid, Email to SDK so that same can be correlated to the Trackier Data and logs.

Just need to pass the data of User Id, Email Id and other additional data to Trackier SDK function which is mentioned below:-

```js
import { Component } from '@angular/core';
import { TrackierCordovaPlugin, TrackierConfig, TrackierEvent, TrackierEnvironment } from '@awesome-cordova-plugins/trackier/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private trackierCordovaPlugin: TrackierCordovaPlugin) { }

  async ngOnInit() {
    var trackierEvent = new TrackierEvent("1CFfUn3xEY");
    trackierEvent.setCouponCode("TestCode");
    this.trackierCordovaPlugin.setUserId("TestUserId");
    this.trackierCordovaPlugin.setUserName("testName");
    this.trackierCordovaPlugin.setUserPhone("XXXXXXX");
    this.trackierCordovaPlugin.setUserEmail("sanu@gmail.com");
    this.trackierCordovaPlugin.setDOB("12/1/2022");
    this.trackierCordovaPlugin.setGender("Male");
    this.trackierCordovaPlugin.trackEvent(trackierEvent);
  }
}

```

## <a id="qs-sdk-signing"></a>SDK Signing

Following below are the steps to retrieve the secretId and secretKey :-

- Login your Trackier Panel and select your application.
- In the Dashboard, click on the `SDK Integration` option on the left side of panel. 
- Under on the SDK Integration, click on the Advanced tab. 
- Under the Advanced tab, you will get the secretId and secretKey.

Please check on the below screenshot

Screenshot[8]

<img width="1000" alt="Screenshot 8" src="https://user-images.githubusercontent.com/16884982/185338826-bcf802d0-c493-4a67-adb3-a9b52bae289e.png">


Check below the example code for passing the secretId and secretKey to the SDK

```ts

import { Component, OnInit } from '@angular/core';
import { TrackierCordovaPlugin, TrackierConfig, TrackierEnvironment } from '@awesome-cordova-plugins/trackier/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private trackierCordovaPlugin: TrackierCordovaPlugin) {

  }
  async ngOnInit() {

    // await this.photoService.loadSaved();

    /*While Initializing the Sdk, You need to pass the three parameter in the TrackierSDKConfig.
         * In first argument, you need to pass the Trackier SDK api key
         * In second argument, you need to pass the environment which can be either "development", "production" or "testing". */

    var key = "abcf2270-xxxx-xxxx-a2ae-34903c6e1d53";//Please pass your Development key here.//abcf2270-d94a-xxxx-xxxx-34903c6e1d53 //6eb549a7-d17c-42fa-b694-1487607e39d0
    var trackierConfig = new TrackierConfig(key, TrackierEnvironment.Development);
    trackierConfig.setAppSecret("659fb6f1xxxxxxxa29d46c9", "9258fcdb-a7a7-xxxxx-xxxx-65835ed38407");
    this.trackierCordovaPlugin.initializeSDK(trackierConfig);
  }
}

```
## <a id="qs-track-uninstall"></a>Uninstall Tracking 

Trackier uninstall functionality is used to track the uninstall of the application from the devices. It is very useful for tracking the quality of the user.

```ts
 this.trackierCordovaPlugin.getTrackierId().then(val =>
      FirebaseAnalytics.setUserProperty({ name: "ct_objectId", value: val, }))
      .catch(e => console.log('error: ', e)); // Replace this with your actual method to get ct_objectId
``` 
* Add the above code to your app to set up a common identifier. 
* Set the `app_remove` event as a conversion event in Firebase. 
* Use the Firebase cloud function to send uninstall information to Trackier MMP. 
* You can find the support article [here](https://help-mmp.trackier.com/en/articles/8165821-android-uninstall-tracking).

## <a id="qs-campaign-data"></a>Getting Campaign Data 

For getting the campaign data, We have a function that return the campaign data. Please check below the example code.

```js
async ngOnInit() {
    var trackierEvent = new TrackierEvent("1CFfUn3xEY");

    //Campaign Data Methods
    this.trackierCordovaPlugin.getTrackierId().then(val => console.log('===trackierid-: ', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getAd().then(val => console.log('getAd', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getAdID().then(val => console.log('getAdID', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getCampaign().then(val => console.log('getCampaign', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getCampaignID().then(val => console.log('getCampaignID', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getAdSet().then(val => console.log('getAdSet', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getAdSetID().then(val => console.log('getAdSetID', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getChannel().then(val => console.log('getChannel', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getP1().then(val => console.log('getP1', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getP2().then(val => console.log('getP2', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getP3().then(val => console.log('getP3', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getP4().then(val => console.log('getP4', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getP5().then(val => console.log('getP5', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getClickId().then(val => console.log('getClickId', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getDlv().then(val => console.log('getDlv', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getPid().then(val => console.log('getPid', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.getIsRetargeting().then(val => console.log('getIsRetargeting', val)).catch(e => console.log('error: ', e));
    this.trackierCordovaPlugin.trackEvent(trackierEvent);
  }

```

## <a id="qs-deeplinking"></a>Deeplinking

Deep linking is a techniques in which the user directly redirect to the specific pages of the application by click on the deeplink url.

There are two types deeplinking

* ***Normal deeplinking*** - Direct deep linking occurs when a user already has your app installed on their device. When this is the case, the deep link will redirect the user to the screen specified in the link.

* ***Deferred deeplinking*** - Deferred deep linking occurs when a user does not have your app installed on their device. When this is the case, the deep link will first send the user to the device app store to install the app. Once the user has installed and opened the app, the SDK will redirect them to the screen specified in the link.

Please check below the Deeplinking scenario 

<img width="705" alt="Screenshot 2022-06-22 at 10 48 20 PM" src="https://user-images.githubusercontent.com/16884982/175099075-349910ce-ce7b-4a71-868c-11c34c4331cd.png">


### Normal Deep linking

If a user already has your app on their device, it will open when they interact with a tracker containing a deep link. You can then parse the deep link information for further use. To do this, you need to choose a desired unique scheme name.

You can set up a specific activity to launch when a user interacts with a deep link. To do this:

* Assign the unique scheme name to the activity in your AndroidManifest.xml file.
* Add the intent-filter section to the activity definition.
* Assign an android:scheme property value with your preferred scheme name.

For example, you could set up an activity called FirstActivity to open like this:
#### AndroidManifest.xml 

```

        <activity
            android:name=".Activity.FirstProduct"
            android:exported="true">
        <intent-filter>
            <action android:name="android.intent.action.VIEW" />
            <category android:name="android.intent.category.DEFAULT" />
            <category android:name="android.intent.category.BROWSABLE" />
            <data
                android:host="trackier.u9ilnk.me"
                android:pathPrefix="/product"
                android:scheme="https" />
        </intent-filter>
        </activity>

```

```
https://trackier.u9ilnk.me/product?dlv=FirstProduct&quantity=10&pid=sms
```

### Normal Deep linking Setup for iOS
    
There is a Universal Links iOS app opening method which needs to be implemented for deeplink to work. This method directly opens the mobile app at default activity. Universal links take the format of normal web links for example. https://yourbrand.com or https://yourbrand.u9ilnk.me

Follow the steps for configuring Universal Links

**a. Getting the app bundle ID and prefix ID**

1. Log into your Apple Developer Account.
2. On the left-hand menu, select Certificates, IDs & Profiles.
3. Under Identifiers, select App IDs.
4. Click the relevant app.
5. Copy the prefix ID and app bundle ID and insert in app settings page in Trackier MMP.

Screenshot[9]

<img width="1000" alt="Screenshot apple" src="https://user-images.githubusercontent.com/16884982/190552695-060b22bc-e269-4a53-b397-09b6162b2faf.png">

**b. Adding the prefix ID and app bundle ID in the Trackier MMP.**

- Login your Trackier Panel
- Select your application and click on Action button and login as
- In the Dashboard, Click on the `UniLink` option on the left side of panel.
- On the Unilink page, create template by click on Action button which is located on the right side header of the page.
- After creating template, Edit that template by click on the edit button.
- On the edit template page, Add the prefix ID and app bundle ID in the **Link Behaviour (When application is installed)**

Please check the screenshot for the reference

Screenshot[10]

<img width="1000" alt="Screenshot dashboard" src="https://user-images.githubusercontent.com/16884982/190556533-c05419b8-ea6c-4850-9ea3-11ce5545b764.png">

**c. Configure mobile apps to register associated domains**

Configuring mobile apps to register approved domains takes place inside Xcode. It requires the unilink subdomain that you can get from app setting page in Trackier MMP.

1. Follow this [iOS instructions](https://developer.apple.com/documentation/xcode/supporting-associated-domains)
2. Get the unilink subdomain from app settings page in Trackier MMP.
3. In Xcode, click on your project. Click on the project target.
4. Switch to Capabilities tab.
5. Turn on Associated Domain.
6. Add the unilink subdomain that you got from Trackier MMP.
7. The format is applinks:subdomain.unilink.me. Add **applinks:** before the domain as like `applinks:subdomain.unilink.me`

Screenshot[11]

<img width="1000" alt="Screenshotxcode" src="https://user-images.githubusercontent.com/16884982/190557503-a13cbf23-8485-491b-a9d7-dcd86e44c912.png">

To associate a domain with your app, you need to have the associated domain file on your domain and the appropriate entitlement in your app. Once the unilink is created, Trackier hosts the apple-app-site-association file. When a user installs your app, the system attempts to download the associated domain file and verify the domains in your Associated Domains Entitlement.

        
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
