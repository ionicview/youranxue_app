import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AuthProvider} from "../providers/auth/auth";
import {HomePage} from '../pages/home/home';
//import { TabsPage } from '../pages/tabs/tabs';
//import { Start } from '../pages/start/start';
import { Login } from '../pages/login/login';
import { ExaminePage } from '../pages/examine/examine';
import { TabsPage } from '../pages/tabs/tabs';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = null;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              authProvider: AuthProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    authProvider.authUser.subscribe(jwt => {
      if (jwt) {
        this.rootPage = TabsPage;
      }
      else {
        this.rootPage = Login;
      }
    });
    this.rootPage = TabsPage;
    //authProvider.checkLogin();
  }
}
