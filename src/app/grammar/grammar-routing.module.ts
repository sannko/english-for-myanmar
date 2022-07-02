import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrammarPage } from './grammar.page';

const routes: Routes = [
  {
    path: '',
    component: GrammarPage,
  },  {
    path: 'courseview',
    loadChildren: () => import('./courseview/courseview.module').then( m => m.CourseviewPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
