import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrammerPage } from './grammer.page';

const routes: Routes = [
  {
    path: '',
    component: GrammerPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
