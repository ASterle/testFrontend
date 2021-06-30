import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {ImagesComponent} from "./images.component";

@NgModule({
  declarations: [
    ImagesComponent
  ],
  exports: [
    ImagesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})

export class ImagesModule {
}
