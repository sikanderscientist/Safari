import { Component, ViewChild,Inject } from '@angular/core';
import { Nav, Platform, AlertController, Events, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Globalization } from '@ionic-native/globalization';
import { TranslateService } from '../../node_modules/@ngx-translate/core';
import { AppConfig, APP_CONFIG } from './app.config';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = 'LoginPage';
  rtlSide:string="left";

  constructor(@Inject(APP_CONFIG) private config: AppConfig,public platform: Platform, 
  public statusBar: StatusBar, public splashScreen: SplashScreen,
  private globalization: Globalization,public translate: TranslateService) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      setTimeout(() => {
        // this._SplashScreen.hide();
        this.splashScreen.hide();
      }, 100);
      // firebase.initializeApp({
      //   apiKey: this.config.firebaseConfig.apiKey,
      //   authDomain: this.config.firebaseConfig.authDomain,
      //   databaseURL: this.config.firebaseConfig.databaseURL,
      //   projectId: this.config.firebaseConfig.projectId,
      //   storageBucket: this.config.firebaseConfig.storageBucket,
      //   messagingSenderId: this.config.firebaseConfig.messagingSenderId
      // });
      // if (this.platform.is('cordova')) {
      //   this.initOneSignal();
      // }
      this.globalize();
    });
  }

  globalize(){
    console.log("globalaizing...");
    if (this.platform.is('cordova')) {
      // this.initOneSignal();
      console.log("cordova detected");
      this.globalization.getPreferredLanguage()
      .then(result => {
        console.log("language detected:----"+JSON.stringify(result));
        let suitableLang = this.getSuitableLanguage(result.value);
        console.log(suitableLang);
        this.translate.use(suitableLang);
        this.setDirectionAccordingly(suitableLang);
      }).catch(e => {
        console.log(e);
        this.translate.use('en');
        this.platform.setDir('ltr', true);
      });
    } else {
      console.log("cordova not detected");
      this.translate.use('en');
      this.setDirectionAccordingly('en');
      // this.translate.use('ar');
      // this.setDirectionAccordingly('ar');
    }
  }

  setDirectionAccordingly(lang: string) {
    switch (lang) {
      case 'ar': {
        this.platform.setDir('ltr', false);
        this.platform.setDir('rtl', true);
        this.rtlSide="right";
        break;
      }
      default: {
        this.platform.setDir('rtl', false);
        this.platform.setDir('ltr', true);
        this.rtlSide="left";
        break;
      }
    }
    // this.translate.use('ar');
    // this.platform.setDir('ltr', false);
    // this.platform.setDir('rtl', true);
  }

  getSideOfCurLang() {
    this.rtlSide=this.platform.dir() === 'rtl' ? "right" : "left";
    return this.rtlSide;
  }

  getSuitableLanguage(language) {
    language = language.substring(0, 2).toLowerCase();
    console.log('check for: ' + language);
    return this.config.availableLanguages.some(x => x.code == language) ? language : 'en';
  }
}
