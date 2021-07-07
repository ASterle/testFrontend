import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from "./nav-bar.component";
import {RouterModule} from "@angular/router";
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    NavBarComponent
  ],
  exports: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbNavModule
  ]
})
export class NavBarModule {
}
