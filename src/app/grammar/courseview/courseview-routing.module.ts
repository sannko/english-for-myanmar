import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseviewPage } from './courseview.page';

const routes: Routes = [
  {
    path: '',
    component: CourseviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseviewPageRoutingModule {}
