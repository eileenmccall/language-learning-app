import { Action } from '@ngrx/store';
import { Article } from '@app/articles/models/article.model';

export enum ArticlesActionTypes {
  ArticleRequested = '[Article List] ARTICLE_REQUESTED',
  ArticleLoaded = '[Articles Service] ARTICLE_LOADED',
  ArticlesListRequested = '[Articles List] ARTICLES_LIST_REQUESTED',
  ArticlesListLoaded = '[Articles Service] ARTICLES_LIST_LOADED'
}

export class ArticleRequested implements Action {
  readonly type = ArticlesActionTypes.ArticleRequested;

  constructor (public payload: {articleId: string}) {}
}

export class ArticleLoaded implements Action {
  readonly type = ArticlesActionTypes.ArticleLoaded;

  constructor (public payload: { article: Article }) {}
}

export class ArticlesListRequested implements Action {
  readonly type = ArticlesActionTypes.ArticlesListRequested;
}

export class ArticlesListLoaded implements Action {
  readonly type = ArticlesActionTypes.ArticlesListLoaded;

  constructor (public payload: { articles: Array<Article> }) {}
}

export type ArticlesActions =
  ArticleRequested |
  ArticleLoaded |
  ArticlesListRequested |
  ArticlesListLoaded;
