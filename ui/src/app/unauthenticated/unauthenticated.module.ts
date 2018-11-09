import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UnauthenticatedComponent } from './unauthenticated.component';
import { HomeComponent } from './home/home.component';

import { routes } from './unauthenticated.routing';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        UnauthenticatedComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild(routes)
    ],
    providers: []
})
export class AppModule { }
