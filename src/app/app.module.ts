import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import {AppRoutingModule} from './app-routing.module';
import {FilesModule} from "./components/files/files.module";
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {ImagesModule} from "./components/images/images.module";
import {HomeComponent} from './components/home/home.component';
import {ErrorComponent} from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    FilesModule,
    ImagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
