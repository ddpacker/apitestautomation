import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiDocManagerModule } from './modules/api-doc-manager/api-doc-manager.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiDocManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
