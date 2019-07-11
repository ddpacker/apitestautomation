import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiDocManagerComponent } from './page/api-doc-manager/api-doc-manager.component';


const routes: Routes = [
  { path: 'api-doc-manager', component: ApiDocManagerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiDocManagerRoutingModule { }
