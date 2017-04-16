import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Facebook, NativeStorage } from 'ionic-native'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {UserPage} from '../pages/user-page/user-page';
import {LoginPage} from '../pages/login-page/login-page';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook, NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
