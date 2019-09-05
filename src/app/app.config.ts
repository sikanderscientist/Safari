import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken<AppConfig>("app.config");

export interface FirebaseConfig {
  apiKey: string,
  authDomain: string,
  databaseURL: string,
  projectId: string,
  storageBucket: string,
  messagingSenderId: string,
  webApplicationId: string
}

export interface AppConfig {
  appName: string;
  apiBase: string;
  perPage: string;
  consumerKey: string;
  consumerSecret: string;
  adminUsername: string;
  adminPassword: string;
  oneSignalAppId: string;
  oneSignalGPSenderId: string;
  paypalSandbox: string;
  paypalProduction: string;
  payuSalt: string;
  payuKey: string;
  availableLanguages: Array<any>;
  firebaseConfig: FirebaseConfig;
}

export const BaseAppConfig: AppConfig = {
  appName: "MOBIMALL",
  apiBase: "http://opuslabs.in:9067/wp-json/",
  perPage: "5",
  consumerKey: "ck_bd34fc373c15b8092269895d9f24fdafd75901bc",
  consumerSecret: "cs_a3424b5ca1754293e4c8668b614f1768c0e859ab",
  adminUsername: "prashant",
  adminPassword: "prashant243",
  oneSignalAppId: "d2b289e7-46c5-47c1-a00c-561ab60ae5ad",
  oneSignalGPSenderId: "637446709495",
  paypalSandbox: "AUx_T_he4iqyGZ7hZCV3-gf0VxRztinSucZzc5106QemvpE1DWHueH8_2I8ZAAYt5mkdzBU91xLsdtpm",
  paypalProduction: "",
  payuSalt: "eCwWELxi",
  payuKey: "gtKFFx",
  availableLanguages: [{
    code: 'en',
    name: 'English'
  }, {
    code: 'ar',
    name: 'Arabic'
  }, {
    code: 'es',
    name: 'Spanish'
  }, {
    code: 'pt',
    name: 'Portuguese'
  }, {
    code: 'ru',
    name: 'Russian'
  }, {
    code: 'fr',
    name: 'French'
  }],
  firebaseConfig: {
    webApplicationId: "511052243603-tti40jbrr3ukb2t3abebcesl510ql099.apps.googleusercontent.com",
    apiKey: "AIzaSyBg3aFpqNbi0kp3maAanCXeWXXF_PGEXuI",
    authDomain: "mobimall-f924b.firebaseapp.com",
    databaseURL: "https://mobimall-f924b.firebaseio.com",
    projectId: "mobimall-f924b",
    storageBucket: "mobimall-f924b.appspot.com",
    messagingSenderId: "511052243603"
  }
};