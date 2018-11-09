import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './shared/routing/routing.module';

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
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
