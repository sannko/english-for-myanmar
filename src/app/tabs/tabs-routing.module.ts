import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'Meaning',
        loadChildren: () => import('../meaning/meaning.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'Grammar',
        loadChildren: () => import('../grammar/grammar.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'Vocabulary',
        loadChildren: () => import('../vocabulary/vocabulary.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/Grammar',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/Grammar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
