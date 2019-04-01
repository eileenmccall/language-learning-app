import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, AuthSelectors } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (private store: Store<AppState.State>) { }

  title = 'app';

  ngOnInit() {
    this.store
      .pipe(select(AuthSelectors.selectIsAuthenticated))
      .subscribe(val => console.log(val));
  }
}
