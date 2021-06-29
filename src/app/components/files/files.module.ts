import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilesComponent} from './files.component';
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";


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
  ]
})

export class FilesModule {
}
