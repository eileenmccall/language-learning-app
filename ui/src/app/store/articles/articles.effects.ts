import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {
  LoadArticleRequested,
  ArticlesActionTypes,
  LoadArticleSuccess,
  LoadArticlesListRequested,
  LoadArticlesListSuccess,
  ArticleCreateRequested,
  ArticleCreateSuccess,
  ArticleUpdateRequested,
  ArticleUpdateSuccess,
  UpdateArticlesListPageOptions,
  LoadArticlesListFailure,
  ArticleCreateFailure,
  ArticleUpdateFailure,
  LoadArticleFailure
} from './articles.actions';
import { mergeMap, map, withLatestFrom, filter, merge, catchError } from 'rxjs/operators';
import { ArticlesService } from '@app/articles/services/articles.service';
import { Article } from '@app/articles/models/article.model';
import { Store } from '@ngrx/store';
import { State } from '../app-store.state';
import { selectPageOptions } from './articles.selectors';
import { GridData } from '@app/shared/models/grid-data.model';
import { PageOptions } from '@app/shared/models/pageOptions.interface';
import { of } from 'rxjs';

@Injectable()
export class ArticlesEffects {

  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService,
    private store: Store<State>
  ) {}

  @Effect()
  loadArticle$ = this.actions$.pipe(
    ofType<LoadArticleRequested>(ArticlesActionTypes.LoadArticleRequested)
  ).pipe(
    mergeMap((action: LoadArticleRequested) => {
      return this.articlesService.getArticleById$(action.payload.articleId).pipe(
        map(article => new LoadArticleSuccess({article: article}))
      ).pipe(
        catchError((err: any) => {
          this.store.dispatch(new LoadArticleFailure({ error: err }));
          return of({});
        })
      );
    })
  );

  @Effect()
  loadArticlesList$ = this.actions$.pipe(
    ofType<LoadArticlesListRequested>(ArticlesActionTypes.LoadArticlesListRequested)
  ).pipe(
    withLatestFrom(this.store.select(selectPageOptions))
  ).pipe(
    mergeMap(([action, pageOptions]: [LoadArticlesListRequested, PageOptions]) => {
      return this.articlesService.getArticles$(
        pageOptions.pageSize,
        pageOptions.pageIndex
      ).pipe(
        map((gridData: GridData<Article>) => {
          return new LoadArticlesListSuccess({data: gridData});
        })
      ).pipe(
        catchError((err: any) => {
          return of(new LoadArticlesListFailure({ error: err }));
        }
      ));
    })
  );

  @Effect()
  updatePageOptions$ = this.actions$.pipe(
    ofType<UpdateArticlesListPageOptions>(ArticlesActionTypes.UpdateArticlesListPageOptions)
  ).pipe(
    map(() => {
      return new LoadArticlesListRequested();
    })
  );

  @Effect()
  createArticle$ = this.actions$.pipe(
    ofType<ArticleCreateRequested>(ArticlesActionTypes.ArticleCreateRequested)
  ).pipe(
    mergeMap((action: ArticleCreateRequested) => {
      return this.articlesService.addArticle$(action.payload.article).pipe(
        map(article => new ArticleCreateSuccess({
          article: article
        }))
      ).pipe(
        catchError((err: any) => {
          return of(new ArticleCreateFailure({error: err}));
        })
      );
    })
  );

  @Effect()
  updateArticle$ = this.actions$.pipe(
    ofType<ArticleUpdateRequested>(ArticlesActionTypes.ArticleUpdateRequested)
  ).pipe(
    mergeMap((action: ArticleUpdateRequested) => {
      return this.articlesService.editArticle$(action.payload.article).pipe(
        map((article) => {
          return new ArticleUpdateSuccess({
            article: {
              id: article._id,
              changes: article
            }
          });
        })
      ).pipe(
        catchError((err: any) => {
          return of(new ArticleUpdateFailure({ error: err }));
        })
      );
    })
  );
}
