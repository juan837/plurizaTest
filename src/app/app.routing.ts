import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullLayoutComponent } from './layouts/full-layout.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule'
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
