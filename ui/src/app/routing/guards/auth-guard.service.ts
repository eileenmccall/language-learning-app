import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(
        public router: Router
    ) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // if (!this.auth.isAuthenticated()) {
        //     this.router.navigate(['login']);
        //     return false;
        // }
        const isAuthenticated = false;
        if (!isAuthenticated) {
            this.router.navigate(['/account/login']);
        }
        return isAuthenticated ? true : false;
    }
}
