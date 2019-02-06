import { NgModule } from '@angular/core';

import { AccountComponent } from './views/account/account.component';
import { LoginComponent } from './views/login/login.component';
import { ForgotComponent } from './views/forgot/forgot.component';
import { AccountRoutes } from './routing/account.routing';
import { RegisterComponent } from './views/register/register.component';

@NgModule({
  imports: [
    AccountRoutes
  ],
  exports: [],
  declarations: [
    AccountComponent,
    LoginComponent,
    ForgotComponent,
    RegisterComponent
  ],
  providers: [],
})
export class AccountModule { }
