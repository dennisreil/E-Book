import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter3Page } from './chapter3.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter3Page
  },
  {
    path: 'page1',
    loadChildren: () => import('../Chapter3/page1/page1.module').then( m => m.Page1PageModule)
  },
  {
    path: 'page2',
    loadChildren: () => import('../Chapter3/page2/page2.module').then( m => m.Page2PageModule)
  },
  {
    path: 'page3',
    loadChildren: () => import('../Chapter3/page3/page3.module').then( m => m.Page3PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter3PageRoutingModule {}
