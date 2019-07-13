import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthenticationService } from '@app/core/services/authentication.service';

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public authenticationService: AuthenticationService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.role;
    const role = this.authenticationService.role;
    // decode the token to get its payload

    if (
      !this.authenticationService.isAuthenticated ||
      role !== expectedRole
    ) {
      this.router.navigate(['/forbidden']);
      return false;
    }
    return true;
  }
}
