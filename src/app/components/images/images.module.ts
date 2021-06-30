import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {ImagesComponent} from "./images.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSliderModule} from "@angular/material/slider";


@NgModule({
  declarations: [
    ImagesComponent
  ],
  exports: [
    ImagesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    ReactiveFormsModule,
    FormsModule
  ]
})

export class ImagesModule {
}
