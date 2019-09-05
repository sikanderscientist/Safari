import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html'
})
export class ChatsPage {

  constructor(public navCtrl: NavController) {

  }
  
  chatting(){
    this.navCtrl.push('ChattingPage');
  }

}
