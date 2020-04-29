import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapterPage } from './chapter.page';

const routes: Routes = [
  {
    path: '',
    component: ChapterPage
  },
  {
    path: 'page1',
    loadChildren: () => import('../Chapter/page1/page1.module').then( m => m.Page1PageModule)
  },
  {
    path: 'page2',
    loadChildren: () => import('../Chapter/page2/page2.module').then( m => m.Page2PageModule)
  },
  {
    path: 'page3',
    loadChildren: () => import('../Chapter/page3/page3.module').then( m => m.Page3PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChapterPageRoutingModule {}
