import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ArticleRequested, ArticlesActionTypes, ArticlesActions, ArticleLoaded } from './articles.actions';
import { mergeMap, map } from 'rxjs/operators';
import { ArticlesService } from '@app/articles/services/articles.service';

@Injectable()
export class ArticlesEffects {

  @Effect()
  loadArticle$ = this.actions$
    .pipe(ofType<ArticleRequested>(ArticlesActionTypes.ArticleRequested))
    .pipe(mergeMap((action: ArticleRequested) => {
      return this.articlesService.getArticleById$(action.payload.articleId);
    }))
    .pipe(map(article => new ArticleLoaded({article: article})));

  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService
  ) {}
}
