import { Action } from '@ngrx/store';
import { Article } from '@app/articles/models/article.model';

export enum ArticlesActionTypes {
  ArticleRequested = '[Article List] ARTICLE_REQUESTED',
  ArticleLoaded = '[Articles Service] ARTICLE_LOADED'
}

export class ArticleRequested implements Action {
  readonly type = ArticlesActionTypes.ArticleRequested;

  constructor (public payload: {articleId: string}) {}
}

export class ArticleLoaded implements Action {
  readonly type = ArticlesActionTypes.ArticleLoaded;

  constructor (public payload: { article: Article }) {}
}

export type ArticlesActions = ArticleRequested | ArticleLoaded;
