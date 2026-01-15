import { Component, OnInit } from '@angular/core';
import { CommonModule  } from '@angular/common'; // Import CommonModule
import { IonicModule ,ToastController} from '@ionic/angular'; // Import IonicModule
import { AppTroveCordovaPlugin, AppTroveConfig, AppTroveEnvironment, AppTroveEvent } from 'com.apptrove.cordova_sdk/ionic-native/apptrove/ngx';
import { Router } from '@angular/router';
import { Location } from '@angular/common'; // Import Location


@Component({
  selector: 'app-add-to-cart-screen',
  templateUrl: './add-to-cart-screen.page.html',
  standalone:true,
  styleUrls: ['./add-to-cart-screen.page.scss'],
  imports: [CommonModule, IonicModule], // Import necessary modulesa
})
export class AddToCartScreenPage implements OnInit {

  constructor(private apptroveCordovaPlugin:AppTroveCordovaPlugin,private router: Router,private location: Location, private toastController: ToastController) {}

  ngOnInit() {
    var apptroveEvent = new AppTroveEvent("jKw8qPF50u");
    apptroveEvent.setParam1("Ionic Product Viewed");
    this.apptroveCordovaPlugin.trackEvent(apptroveEvent);
  }

  async purchase() {
    const apptroveEvent = new AppTroveEvent('Q4YsqBKnzZ');
    apptroveEvent.setParam1('Ionic Product Added to cart');
    apptroveEvent.setParam2('Param 2');
    apptroveEvent.setParam3('Param 3');
    apptroveEvent.setParam4('Param 4');
    apptroveEvent.setCouponCode('*SDJ(#JKKSH');
    apptroveEvent.setRevenue(30.00);  // Product price
    apptroveEvent.setCurrency('USD');
    this.apptroveCordovaPlugin.setUserId('Satya7893@');
    this.apptroveCordovaPlugin.setUserName('SatyamKr');
    this.apptroveCordovaPlugin.setUserPhone('3i23u4ueuwruew');
    this.apptroveCordovaPlugin.setUserEmail('Satyam@AppTrove.com');
    this.apptroveCordovaPlugin.trackEvent(apptroveEvent);

    // Show a toast message instead of alert
    const toast = await this.toastController.create({
      message: 'Product Purchase Sucessfully',
      duration: 2000, // Duration in ms
      position: 'bottom', // Position of the toast
      color: 'success', // Success color
    });
    await toast.present();

    // Navigate to Add to Cart screen
    this.router.navigate(['/add-to-cart-screen']);
  }

  // Function to navigate back to the previous page
  navigateBack() {
    this.location.back();  // Use location.back() to navigate back
  }

}
