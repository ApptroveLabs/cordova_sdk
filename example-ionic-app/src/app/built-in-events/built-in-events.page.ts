import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';

import {
  AppTroveCordovaPlugin,
  AppTroveEvent,
} from 'com.apptrove.cordova_sdk/ionic-native/apptrove/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-built-in-events',
  templateUrl: './built-in-events.page.html',
  styleUrls: ['./built-in-events.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule],
  standalone: true,
})
export class BuiltInEventsPage {
  eventsList = [
    'ADD_TO_CART',
    'LEVEL_ACHIEVED',
    'ADD_TO_WISHLIST',
    'COMPLETE_REGISTRATION',
    'TUTORIAL_COMPLETION',
    'PURCHASE',
    'SUBSCRIBE',
    'START_TRIAL',
    'ACHIEVEMENT_UNLOCKED',
    'CONTENT_VIEW',
    'TRAVEL_BOOKING',
    'SHARE',
    'INVITE',
    'LOGIN',
    'UPDATE',
  ];
  currencyList = [
    'USD',
    'EUR',
    'GBP',
    'INR',
    'AUD',
    'CAD',
    'SGD',
    'CHF',
    'MYR',
    'JPY',
  ];

  selectedEvent: string | null = null;
  selectedCurrency: string | null = null;
  revenue: number = 0;
  params: { key: string; value: string }[] = [];

  constructor(
    private apptroveCordovaPlugin: AppTroveCordovaPlugin,
    private alertController: AlertController,
    private location: Location,
    private toastController: ToastController
  ) { }

  async addParam() {
    if (this.params.length < 10) {
      this.params.push({ key: `Param ${this.params.length + 1}`, value: '' });
    } else {
      const toast = await this.toastController.create({
        message: 'You can only add up to 10 parameters.',
        duration: 1000,
        position: 'bottom',
        color: 'danger',
      });
      await toast.present();
    }
  }

  removeParam(index: number) {
    this.params.splice(index, 1);
  }

  async submitEvent() {
    if (!this.selectedEvent || !this.selectedCurrency || this.revenue <= 0) {
      const toast = await this.toastController.create({
        message: 'Please fill in all required fields.',
        duration: 1000,
        position: 'bottom',
        color: 'danger',
      });
      await toast.present();
      return;
    }

    let apptroveEvent: AppTroveEvent | null = null;

    switch (this.selectedEvent) {
      case 'ADD_TO_CART':
        apptroveEvent = new AppTroveEvent('Fy4uC1_FlN');
        break;
      case 'LEVEL_ACHIEVED':
        apptroveEvent = new AppTroveEvent('1CFfUn3xEY');
        break;
      case 'ADD_TO_WISHLIST':
        apptroveEvent = new AppTroveEvent('AOisVC76YG');
        break;
      case 'COMPLETE_REGISTRATION':
        apptroveEvent = new AppTroveEvent('mEqP4aD8dU');
        break;
      case 'TUTORIAL_COMPLETION':
        apptroveEvent = new AppTroveEvent('99VEGvXjN7');
        break;
      case 'PURCHASE':
        apptroveEvent = new AppTroveEvent('Q4YsqBKnzZ');
        break;
      case 'SUBSCRIBE':
        apptroveEvent = new AppTroveEvent('B4N_In4cIP');
        break;
      case 'START_TRIAL':
        apptroveEvent = new AppTroveEvent('jYHcuyxWUW');
        break;
      case 'ACHIEVEMENT_UNLOCKED':
        apptroveEvent = new AppTroveEvent('xTPvxWuNqm');
        break;
      case 'CONTENT_VIEW':
        apptroveEvent = new AppTroveEvent('Jwzois1ays');
        break;
      case 'TRAVEL_BOOKING':
        apptroveEvent = new AppTroveEvent('yP1-ipVtHV');
        break;
      case 'SHARE':
        apptroveEvent = new AppTroveEvent('dxZXGG1qqL');
        break;
      case 'INVITE':
        apptroveEvent = new AppTroveEvent('7lnE3OclNT');
        break;
      case 'LOGIN':
        apptroveEvent = new AppTroveEvent('o91gt1Q0PK');
        break;
      case 'UPDATE':
        apptroveEvent = new AppTroveEvent('sEQWVHGThl');
        break;
      default:
        const toast = await this.toastController.create({
          message: 'Invalid event selected.',
          duration: 1000,
          position: 'bottom',
          color: 'danger',
        });
        await toast.present();
        return;
    }

    apptroveEvent.setRevenue(this.revenue);
    apptroveEvent.setCurrency(this.selectedCurrency);


    apptroveEvent.setCouponCode("SatyamTest10233");
    this.apptroveCordovaPlugin.setUserId("Satyan!232");
    this.apptroveCordovaPlugin.setUserName("Satyam");
    this.apptroveCordovaPlugin.setUserPhone("82528978393");
    this.apptroveCordovaPlugin.setUserEmail("Satyam@gmail.com");
    this.apptroveCordovaPlugin.setDOB("12/1/2022");
    this.apptroveCordovaPlugin.setGender("Male");
    // Dynamically assign parameters using a switch case for param1, param2, ..., param10
    const paramValues = this.params.map((param) => param.value);
    console.log('Parameter Values:', paramValues);

    for (let i = 0; i < paramValues.length; i++) {
      switch (i) {
        case 0:
          apptroveEvent.setParam1(paramValues[i]);
          break;
        case 1:
          apptroveEvent.setParam2(paramValues[i]);
          break;
        case 2:
          apptroveEvent.setParam3(paramValues[i]);
          break;
        case 3:
          apptroveEvent.setParam4(paramValues[i]);
          break;
        case 4:
          apptroveEvent.setParam5(paramValues[i]);
          break;
        case 5:
          apptroveEvent.setParam6(paramValues[i]);
          break;
        case 6:
          apptroveEvent.setParam7(paramValues[i]);
          break;
        case 7:
          apptroveEvent.setParam8(paramValues[i]);
          break;
        case 8:
          apptroveEvent.setParam9(paramValues[i]);
          break;
        case 9:
          apptroveEvent.setParam10(paramValues[i]);
          break;
        default:
          console.error('Too many parameters!');
          break;
      }
    }

    try {
      await this.apptroveCordovaPlugin.trackEvent(apptroveEvent);
      const toast = await this.toastController.create({
        message: 'Event submitted successfully!',
        duration: 2000,
        position: 'bottom',
        color: 'success',
      });
      await toast.present();
    } catch (error) {
      const toast = await this.toastController.create({
        message: `Failed to submit event: ${error instanceof Error ? error.message : 'Unknown error'}`,
        duration: 2000,
        position: 'bottom',
        color: 'danger',
      });
      await toast.present();
    }
  }

  navigateBack() {
    this.location.back();
  }
}
