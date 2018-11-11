import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';

import { UnauthenticatedRoutes } from './unauthenticated.routing';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { UnauthenticatedComponent } from './unauthenticated.component';

@NgModule({
    declarations: [
        HomeComponent,
        LoginComponent,
        ForgotComponent,
        UnauthenticatedComponent
    ],
    imports: [
        UnauthenticatedRoutes
    ],
    providers: []
})
export class UnauthenticatedModule { }
