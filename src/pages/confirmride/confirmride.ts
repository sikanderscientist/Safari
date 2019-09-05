import { Component } from '@angular/core';
import { NavController, ModalController,IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-confirmride',
  templateUrl: 'confirmride.html'
})
export class ConfirmridePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  
 confirmpopup(){
    let modal = this.modalCtrl.create('ConfirmpopupPage');
    modal.present();
 }

}