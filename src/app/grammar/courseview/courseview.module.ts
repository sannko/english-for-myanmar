import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseviewPageRoutingModule } from './courseview-routing.module';

import { CourseviewPage } from './courseview.page';
 import {AdsenseModule} from "ng2-adsense";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseviewPageRoutingModule,
    AdsenseModule.forRoot({
      adClient: 'client=ca-pub-7535648491950970',
      adSlot: 7102308169,
    })
  ],
  declarations: [CourseviewPage]
})
export class CourseviewPageModule {}
