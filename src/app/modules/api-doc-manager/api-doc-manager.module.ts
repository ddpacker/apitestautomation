import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiDocManagerRoutingModule } from './api-doc-manager-routing.module';

import { ApiDocGridComponent } from './components/api-doc-grid/api-doc-grid.component';
import { ApiDocManagerComponent } from './page/api-doc-manager/api-doc-manager.component';
import { ApiDocComponent } from './components/api-doc/api-doc.component';
import { DetailWrapperComponent } from './components/detail-wrapper/detail-wrapper.component';


@NgModule({
  declarations: [ApiDocGridComponent, ApiDocManagerComponent, ApiDocComponent, DetailWrapperComponent],
  imports: [
    CommonModule,
    ApiDocManagerRoutingModule
  ],
  exports: [
    ApiDocManagerComponent
  ]
})
export class ApiDocManagerModule { }
