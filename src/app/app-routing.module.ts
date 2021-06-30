import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FilesComponent} from "./components/files/files.component";
import {ImagesComponent} from "./components/images/images.component";
import {ErrorComponent} from "./components/error/error.component";
import {HomeComponent} from "./components/home/home.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'files', component: FilesComponent},
  {path: 'images', component: ImagesComponent},
  {path: '**', component: ErrorComponent}
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
