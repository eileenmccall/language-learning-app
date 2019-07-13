import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../../models/article.model';
import { Store, select } from '@ngrx/store';
import { tap, filter, first, map, take } from 'rxjs/operators';
import { GridData } from '@app/shared/models/grid-data.model';
import { ArticlesSelectors, ArticlesActions } from '@app/articles/store';
import { AppState } from '@app/core/store';

interface Result {
  articles: Array<Article>;
  collectionSize: number;
}

@Injectable()
export class ArticlesResolver implements Resolve<boolean> {
  constructor(private store: Store<AppState.State>) {}

  resolve(): Observable<boolean> {
    this.initRequest();

    return this.store
      .pipe(select(ArticlesSelectors.selectArticlesLoaded))
      .pipe(filter((bool: boolean) => bool))
      .pipe(first());
  }

  initRequest() {
    this.store.dispatch(ArticlesActions.loadArticlesListRequested());
  }
}
