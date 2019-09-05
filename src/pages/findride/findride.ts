import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-findride',
  templateUrl: 'findride.html'
})
export class FindridePage {

  constructor(public navCtrl: NavController) {

  }
  
 listride(){
    this.navCtrl.push('ListridePage');
 }
 

}
