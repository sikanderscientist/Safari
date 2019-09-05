import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html'
})
export class FilterPage {

  structure: any = { lower: 33, upper: 60 };

  constructor(public navCtrl: NavController) {

  }

}