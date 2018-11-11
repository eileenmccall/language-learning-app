
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { UnauthenticatedComponent } from './unauthenticated.component';

const unauthenticatedRoutes: Routes = [
    {
        path: '',
        component: UnauthenticatedComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full'},
            { path: 'home', component: HomeComponent },
            { path: 'login', component: LoginComponent },
            { path: 'forgot', component: ForgotComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(unauthenticatedRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UnauthenticatedRoutes { }
