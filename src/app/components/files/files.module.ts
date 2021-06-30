import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilesComponent} from './files.component';
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    FilesComponent
  ],
  exports: [
    FilesComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule
  ]
})

export class FilesModule {
}
