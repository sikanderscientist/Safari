import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-listride',
  templateUrl: 'listride.html'
})
export class ListridePage {

  constructor(public navCtrl: NavController) {

  }

 filter(){
    this.navCtrl.push('FilterPage');
 }
 
 riderprofile(){
this.navCtrl.push('RiderprofilePage');
}

}
