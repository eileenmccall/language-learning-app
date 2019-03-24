import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {
  ArticleRequested,
  ArticlesActionTypes,
  ArticleLoaded,
  ArticlesListRequested,
  ArticlesListLoaded,
  ArticleCreateRequested,
  ArticleCreateSuccess,
  ArticleUpdateRequested,
  ArticleUpdateSuccess
} from './articles.actions';
import { mergeMap, map, withLatestFrom, filter, merge } from 'rxjs/operators';
import { ArticlesService } from '@app/articles/services/articles.service';
import { Article } from '@app/articles/models/article.model';
import { Store, select } from '@ngrx/store';
import { State } from '../app-store.state';
import { articlesListLoaded } from './articles.selectors';
import { GridData } from '@app/shared/models/grid-data.model';

@Injectable()
export class ArticlesEffects {

  @Effect()
  loadArticle$ = this.actions$.pipe(
    ofType<ArticleRequested>(ArticlesActionTypes.ArticleRequested)
  ).pipe(
    mergeMap((action: ArticleRequested) => {
      return this.articlesService.getArticleById$(action.payload.articleId);
    })
  ).pipe(
    map(article => new ArticleLoaded({article: article}))
  );

  @Effect()
  loadArticlesList$ = this.actions$.pipe(
    ofType<ArticlesListRequested>(ArticlesActionTypes.ArticlesListRequested)
  ).pipe(mergeMap((action: ArticlesListRequested) => {
      return this.articlesService.getArticles$(action.payload.pageOptions);
    })
  ).pipe(
    map((gridData: GridData<Article>) => {
      return new ArticlesListLoaded({data: gridData});
    })
  );

  @Effect()
  createArticle$ = this.actions$.pipe(
    ofType<ArticleCreateRequested>(ArticlesActionTypes.ArticleCreateRequested)
  ).pipe(
    mergeMap((action: ArticleCreateRequested) => {
      return this.articlesService.addArticle$(action.payload.article);
    })
  ).pipe(
    map(article => new ArticleCreateSuccess({
      article: article
    }))
  );

  @Effect()
  updateArticle$ = this.actions$.pipe(
    ofType<ArticleUpdateRequested>(ArticlesActionTypes.ArticleUpdateRequested)
  ).pipe(
    mergeMap((action: ArticleUpdateRequested) => {
      return this.articlesService.editArticle$(action.payload.article);
    })
  ).pipe(
    map((article) => {
      return new ArticleUpdateSuccess({
        article: {
          id: article._id,
          changes: article
        }
      });
    })
  );

  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService,
    private store: Store<State>
  ) {}
}
