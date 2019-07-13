import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState, AuthSelectors } from '@app/core/store';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public router: Router, private store: Store<AppState.State>) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(select(AuthSelectors.selectIsAuthenticated)).pipe(
      tap((isAuthenticated: boolean) => {
        if (!isAuthenticated) {
          this.router.navigate(['/account/login']);
        }
      })
    );
  }
}
