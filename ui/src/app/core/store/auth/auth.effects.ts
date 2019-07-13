import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { defer, of, Observable } from 'rxjs';
import { Login, Logout, AuthActionTypes } from './auth.actions';

@Injectable ()
export class AuthEffects {
  constructor (
    private actions$: Actions,
    private router: Router
  ) {}

  @Effect()
  init$ = defer((): Observable<Login | Logout> => {
    const user = localStorage.getItem('user');
    if (user) {
      return of(new Login(JSON.parse(user)));
    } else {
      return of(new Logout());
    }
  });

  @Effect({dispatch: false})
  login$ = this.actions$
    .pipe(ofType<Login>(AuthActionTypes.Login))
    .pipe(tap((action: Login) => {
      console.log('action is working');
      localStorage.setItem('user', JSON.stringify(action.payload));
    }));

  @Effect({dispatch: false})
  logout$ = this.actions$
    .pipe(ofType<Logout>(AuthActionTypes.Logout))
    .pipe(tap(() => {
      localStorage.removeItem('user');
    }))
    .pipe(tap(() => this.router.navigate(['/account/login'])));
}
