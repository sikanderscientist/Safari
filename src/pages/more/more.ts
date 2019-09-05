import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class MorePage {

  constructor(public navCtrl: NavController) {

  }
  
  profile(){
    this.navCtrl.push('ProfilePage');
  }
  reviews(){
    this.navCtrl.push('ReviewsPage');
  }
  notification(){
    this.navCtrl.push('NotificationPage');
  }
  terms(){
    this.navCtrl.push('TermsPage');
  }
  earn(){
    this.navCtrl.push('EarnPage');
  }
  ratevroom(){
    this.navCtrl.push('RatevroomPage');
  }
  help(){
    this.navCtrl.push('HelpPage');
  }
  login(){
    this.navCtrl.push('LoginPage');
  }

}
