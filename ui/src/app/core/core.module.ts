import { NgModule } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AuthenticationService,
    CookieService
  ],
})
export class CoreModule { }
