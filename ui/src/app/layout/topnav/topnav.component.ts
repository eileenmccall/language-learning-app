import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store';
import { AuthActions } from '@app/store';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private store: Store<AppState.State>
  ) { }

  ngOnInit() {
  }

  signOut() {
    this.authenticationService.logout$()
    .pipe(tap(() => {
      this.store.dispatch(new AuthActions.Logout());
    }))
    .subscribe();
  }
}
