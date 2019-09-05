import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-myride',
  templateUrl: 'myride.html'
})
export class MyridePage {

ride: string = "Upconing";

  constructor(public navCtrl: NavController) {

  }
  raterider(){
    this.navCtrl.push('RateriderPage');
  }

  chatting(){
    this.navCtrl.push('ChattingPage');
  }

}
