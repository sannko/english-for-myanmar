import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseviewPageRoutingModule } from './courseview-routing.module';

import { CourseviewPage } from './courseview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseviewPageRoutingModule
  ],
  declarations: [CourseviewPage]
})
export class CourseviewPageModule {}
