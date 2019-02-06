// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from '../views/account/account.component';
import { LoginComponent } from '../views/login/login.component';
import { ForgotComponent } from '../views/forgot/forgot.component';
import { RegisterComponent } from '../views/register/register.component';

// Components

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }, {
        path: 'forgot',
        component: ForgotComponent
      }, {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutes {}
