import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';




import { AppComponent } from './app.component';

// Routing Module
import { AppRoutingModule } from './app.routing';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
