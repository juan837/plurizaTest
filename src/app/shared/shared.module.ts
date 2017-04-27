import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectModule } from 'ng2-select-compat';

import { CollapseModule } from 'ngx-bootstrap';
//import { TabsModule, ButtonsModule } from 'ng2-bootstrap';

//import { TranslateModule } from 'ng2-translate/ng2-translate';

//import { ProductsListComponent } from './products-list/products-list.component'
//
//import { ModalModule } from 'ng2-bootstrap/modal';
import { FindComponent } from './find/find.component';
import { TagsComponent } from './tags/tags.component';
import { PeopleListComponent } from './people-list/people-list.component';

// Services
import { FindService } from './services/find.service';
import { TagsService } from './services/tags.service';

@NgModule({
  imports: [
    CommonModule,
    SelectModule,
    CollapseModule.forRoot()
    //TabsModule.forRoot(),
    //ButtonsModule.forRoot(),
    //TranslateModule,
    //ModalModule.forRoot()
  ],
  declarations: [
    FindComponent,
    TagsComponent,
    PeopleListComponent
    //ProductsListComponent
  ],
  exports: [
    FindComponent,
    TagsComponent,
    PeopleListComponent
    //ProductsListComponent
  ],
  providers: [
    FindService,
    TagsService
  ]
})

export class SharedModule { }