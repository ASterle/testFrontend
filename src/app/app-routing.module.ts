import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FilesComponent} from "./components/files/files.component";
import {ImagesComponent} from "./components/images/images.component";


const routes: Routes = [
  {path: 'files', component: FilesComponent},
  {path: 'images', component: ImagesComponent},
  {path: '**', component: FilesComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
