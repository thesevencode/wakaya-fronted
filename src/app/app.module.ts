import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { Approutes } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { ClientComponent } from './client/client.component';





@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(Approutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
