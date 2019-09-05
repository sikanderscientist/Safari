import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewsPage } from './reviews';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    ReviewsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewsPage),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    ReviewsPage
  ]
})
export class ReviewsPageModule {}
