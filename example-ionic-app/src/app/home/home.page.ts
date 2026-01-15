import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class HomePage implements OnInit {

  constructor(
    private splashScreen: SplashScreen,
    private router: Router
  ) {
    // Hide the splash screen after 2 seconds
    setTimeout(() => {
      this.splashScreen.hide();
    }, 2000);
  }

  ngOnInit() {
    // Back button handling is done centrally in app.component.ts
  }

  // Method to handle button click and navigation
  onButtonClick(buttonName: string) {
    console.log(`${buttonName} clicked!`);

    // Navigation logic based on button clicked
    if (buttonName === 'Built-in events') {
      this.router.navigate(['/built-in-events']);
    } else if (buttonName === 'Customs Events') {
      this.router.navigate(['/customs-events']);
    } else if (buttonName === 'Deep linking Page') {
      this.router.navigate(['/deep-linking']);
    } else if (buttonName === 'Product Page') {
      this.router.navigate(['/product-page']);
    } else if (buttonName === 'Dynamic Links') {
      this.router.navigate(['/dynamic-link']);
    } else if (buttonName === 'Complete Event') {
      console.log('Complete Event button clicked - attempting navigation...');
      this.router.navigate(['/complete-event']).then(success => {
        console.log('Complete Event navigation success:', success);
      }).catch(error => {
        console.error('Complete Event navigation error:', error);
      });
    } else if (buttonName === 'Campaign Data') {
      console.log('Campaign Data button clicked - attempting navigation...');
      this.router.navigate(['/campaign-data']).then(success => {
        console.log('Campaign Data navigation success:', success);
      }).catch(error => {
        console.error('Campaign Data navigation error:', error);
      });
    }
  }
}
