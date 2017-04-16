import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook, NativeStorage } from 'ionic-native';
import { LoginPage } from '../login-page/login-page';

@Component({
  selector: 'page-user-page',
  templateUrl: 'user-page.html',
})
export class UserPage {

 user: any;
  userReady: boolean = false;

  constructor(public navCtrl: NavController) {}

  ionViewCanEnter(){
    let env = this;
    NativeStorage.getItem('user')
    .then(function (data){
      env.user = {
        name: data.name,
        gender: data.gender,
        picture: data.picture
      };
        env.userReady = true;
    }, function(error){
      console.log(error);
    });
  }

  doFbLogout(){
    var nav = this.navCtrl;
    Facebook.logout()
    .then(function(response) {
      //user logged out so we will remove him from the NativeStorage
      NativeStorage.remove('user');
      nav.push(LoginPage);
    }, function(error){
      console.log(error);
    });
  }

}
