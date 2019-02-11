import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthenticationService } from '@app/core/services/authentication.service';
// import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    public router: Router,
    private authenticationService: AuthenticationService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isAuthenticated = this.authenticationService.isAuthenticated;
    if (!isAuthenticated) {
      this.router.navigate(['/account/login']);
    }
    return isAuthenticated;
  }
}
