import { Component } from '@angular/core';
import { NavController, ViewController,IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-confirmpopup',
  templateUrl: 'confirmpopup.html'
})
export class ConfirmpopupPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }
  dismiss() {
    this.viewCtrl.dismiss();
  }  
}