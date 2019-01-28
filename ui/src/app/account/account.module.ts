import { NgModule } from '@angular/core';

import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { AccountRoutes } from './account.routing';

@NgModule({
  imports: [
    AccountRoutes
  ],
  exports: [],
  declarations: [
    AccountComponent,
    LoginComponent,
    ForgotComponent
  ],
  providers: [],
})
export class AccountModule { }
