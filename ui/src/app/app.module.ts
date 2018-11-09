import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { UnauthenticatedComponent } from './unauthenticated/unauthenticated.component';
import { HomeComponent } from './unauthenticated/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UnauthenticatedComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
