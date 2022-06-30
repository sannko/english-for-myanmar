import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeaningPage } from './meaning.page';

const routes: Routes = [
  {
    path: '',
    component: MeaningPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
