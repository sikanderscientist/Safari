import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChattingPage } from './chatting';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    ChattingPage,
  ],
  imports: [
    IonicPageModule.forChild(ChattingPage),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    ChattingPage
  ]
})
export class ChattingPageModule {}
