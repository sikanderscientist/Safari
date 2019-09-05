import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-riderprofile',
  templateUrl: 'riderprofile.html'
})
export class RiderprofilePage {
  rideprofile: string = "about";

  constructor(public navCtrl: NavController) {

  }
  
  confirmride(){
    this.navCtrl.push('ConfirmridePage');
  }
 
  chatting(){
    this.navCtrl.push('ChattingPage');
  }

}