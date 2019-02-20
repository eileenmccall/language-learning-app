import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {
  ArticleRequested,
  ArticlesActionTypes,
  ArticleLoaded,
  ArticlesListRequested,
  ArticlesListLoaded
} from './articles.actions';
import { mergeMap, map, withLatestFrom, filter } from 'rxjs/operators';
import { ArticlesService } from '@app/articles/services/articles.service';
import { Article } from '@app/articles/models/article.model';
import { Store, select } from '@ngrx/store';
import { State } from '../app-store.state';
import { articlesListLoaded } from './articles.selectors';

@Injectable()
export class ArticlesEffects {

  @Effect()
  loadArticle$ = this.actions$
    .pipe(ofType<ArticleRequested>(ArticlesActionTypes.ArticleRequested))
    .pipe(mergeMap((action: ArticleRequested) => {
      return this.articlesService.getArticleById$(action.payload.articleId);
    }))
    .pipe(map(article => new ArticleLoaded({article: article})));

  @Effect()
  loadArticlesList$ = this.actions$
    .pipe(ofType<ArticlesListRequested>(ArticlesActionTypes.ArticlesListRequested))
    .pipe(withLatestFrom(this.store.pipe(select(articlesListLoaded))))
    .pipe(filter(([action, requested]: [ArticlesListRequested, boolean]) => !requested))
    .pipe(mergeMap(([action, requested]) => {
      return this.articlesService.getArticles$();
    }))
    .pipe(map((articles: Array<Article>) => new ArticlesListLoaded({articles: articles})));

  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService,
    private store: Store<State>
  ) {}
}
