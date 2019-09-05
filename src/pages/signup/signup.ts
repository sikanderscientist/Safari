import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController) {

  }
  
  login(){
      this.navCtrl.push('LoginPage');
  }
   
  verification(){
      this.navCtrl.push('VerificationPage');
  }

}
