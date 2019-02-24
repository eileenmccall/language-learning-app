import { Action } from '@ngrx/store';
import { Article } from '@app/articles/models/article.model';
import { Update } from '@ngrx/entity';

export enum ArticlesActionTypes {
  ArticleRequested = '[Article List] ARTICLE_REQUESTED',
  ArticleLoaded = '[Articles Service] ARTICLE_LOADED',
  ArticlesListRequested = '[Articles List] ARTICLES_LIST_REQUESTED',
  ArticlesListLoaded = '[Articles Service] ARTICLES_LIST_LOADED',

  ArticleCreateRequested = '[Articles List] ARTICLE_CREATE_REQUESTED',
  ArticleCreateSuccess = '[Articles Service] ARTICLE_CREATE_SUCCESS',

  ArticleUpdateRequested = '[Articles List] ARTICLE_UPDATE_REQUESTED',
  ArticleUpdateSuccess = '[Articles Service] ARTICLE_UPDATE_SUCCESS'
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

export class ArticleCreateRequested implements Action {
  readonly type = ArticlesActionTypes.ArticleCreateRequested;

  constructor (public payload: { article: Article }) {}
}

export class ArticleCreateSuccess implements Action {
  readonly type = ArticlesActionTypes.ArticleCreateSuccess;

  constructor (public payload: { article: Article}) {}
}

export class ArticleUpdateRequested implements Action {
  readonly type = ArticlesActionTypes.ArticleUpdateRequested;

  constructor (public payload: { article: Article }) {}
}

export class ArticleUpdateSuccess implements Action {
  readonly type = ArticlesActionTypes.ArticleUpdateSuccess;

  constructor (public payload: { article: Update<Article> }) {}
}

export type ArticlesActions =
  ArticleRequested |
  ArticleLoaded |
  ArticlesListRequested |
  ArticlesListLoaded |
  ArticleCreateRequested |
  ArticleCreateSuccess |
  ArticleUpdateRequested |
  ArticleUpdateSuccess;
