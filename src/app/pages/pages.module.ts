import { NgModule } from '@angular/core';

import { PagesRouting } from './pages.routing';
import { HomeComponent } from './home.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    PagesRouting,
    SharedModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class PagesModule { }