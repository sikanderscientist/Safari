import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'MyridePage';
  tab2Root = 'ChatsPage';
  tab3Root = 'FindridePage';
  tab4Root = 'WalletPage';
  tab5Root = 'MorePage';

  constructor() {

  }
}
