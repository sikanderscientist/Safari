import { Component } from '@angular/core';
import { NavController, ViewController,IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-code',
  templateUrl: 'code.html'
})
export class CodePage {
  rootPage:any = 'TabsPage';

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }
   
  rootpage(){
    this.navCtrl.push('TabsPage');
  }
    
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
