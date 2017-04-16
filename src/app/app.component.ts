import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook, NativeStorage } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { UserPage } from '../pages/user-page/user-page';
import {LoginPage} from '../pages/login-page/login-page';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  @ViewChild(Nav) nav: Nav;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Here we will check if the user is already logged in
      // because we don't want to ask users to log in each time they open the app
      NativeStorage.getItem('user')
      .then( function (data) {
        // user is previously logged and we have his data
        // we will let him access the app
      //  this.Nav.push(UserPage);
//        this.nav.push(UserPage);
        console.log(data);
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    }, function (error) {
        //we don't have the user data so we will ask him to log in
       alert("Please login");
       //this.Nav.push(LoginPage);
        splashScreen.hide();
      });
  });
};
}

