import { Component } from '@angular/core';
import { ModalController, NavController,IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-verification',
  templateUrl: 'verification.html'
})
export class VerificationPage {


  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
      
  code() {
    let modal = this.modalCtrl.create('CodePage');
    modal.present();
  }

}
