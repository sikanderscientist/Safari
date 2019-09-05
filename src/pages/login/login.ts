import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }
  
    signup(){
        this.navCtrl.push('SignupPage');
    }
    
    tabs(){
        this.navCtrl.push('TabsPage');
    }

}
