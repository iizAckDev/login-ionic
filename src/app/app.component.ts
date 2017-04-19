import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login';

@Component({
  templateUrl: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor( platform: Platform , statusBar: StatusBar ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
    });
  }
}

