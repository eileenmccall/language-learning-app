import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UnauthenticatedComponent } from './unauthenticated.component';
import { HomeComponent } from './home/home.component';

import { UnauthenticatedRoutes } from './unauthenticated.routing';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';

@NgModule({
    declarations: [
        UnauthenticatedComponent,
        HomeComponent,
        LoginComponent,
        ForgotComponent
    ],
    imports: [
        BrowserModule,
        UnauthenticatedRoutes
    ],
    providers: []
})
export class UnauthenticatedModule { }
