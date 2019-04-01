import { Action } from '@ngrx/store';
import { Article } from '@app/articles/models/article.model';
import { Update } from '@ngrx/entity';
import { GridData } from '@app/shared/models/grid-data.model';

export enum ArticlesActionTypes {
  LoadArticleRequested = '[Article List] LOAD_ARTICLE_REQUESTED',
  LoadArticleSuccess = '[Articles Service] LOAD_ARTICLE_SUCCESS',
  LoadArticleFailure = '[Articles Service] LOAD_ARTICLE_FAILURE',

  LoadArticlesListRequested = '[Articles List] LOAD_ARTICLES_LIST_REQUESTED',
  LoadArticlesListSuccess = '[Articles Service] LOAD_ARTICLES_LIST_SUCCESS',
  LoadArticlesListFailure = '[Articles Service] LOAD_ARTICLES_LIST_FAILURE',

  UpdateArticlesListPageOptions = '[Articles List] UPDATE_ARTICLES_LIST_PAGE_OPTIONS',

  ArticleCreateRequested = '[Articles List] ARTICLE_CREATE_REQUESTED',
  ArticleCreateSuccess = '[Articles Service] ARTICLE_CREATE_SUCCESS',
  ArticleCreateFailure = '[Articles Service] ARTICLE_CREATE_FAILURE',

  ArticleUpdateRequested = '[Articles List] ARTICLE_UPDATE_REQUESTED',
  ArticleUpdateSuccess = '[Articles Service] ARTICLE_UPDATE_SUCCESS',
  ArticleUpdateFailure = '[Articles Service] ARTICLE_UPDATE_FAILURE',

  ArticleDeleteRequested = '[Articles List] ARTICLE_DELETE_REQUESTED',
  ArticleDeleteSuccess = '[Articles Service] ARTICLE_DELETE_SUCCESS',
  ArticleDeleteFailure = '[Articles Service] ARTICLE_DELETE_FAILURE'
}

export class LoadArticleRequested implements Action {
  readonly type = ArticlesActionTypes.LoadArticleRequested;

  constructor (public payload: { articleId: string }) {}
}

export class LoadArticleSuccess implements Action {
  readonly type = ArticlesActionTypes.LoadArticleSuccess;

  constructor (public payload: { article: Article }) {}
}

export class LoadArticleFailure implements Action {
  readonly type = ArticlesActionTypes.LoadArticleFailure;

  constructor (public payload: { error: any }) {}
}

export class LoadArticlesListRequested implements Action {
  readonly type = ArticlesActionTypes.LoadArticlesListRequested;
}

export class LoadArticlesListSuccess implements Action {
  readonly type = ArticlesActionTypes.LoadArticlesListSuccess;

  constructor (public payload: { data: GridData<Article> }) {}
}

export class LoadArticlesListFailure implements Action {
  readonly type = ArticlesActionTypes.LoadArticlesListFailure;

  constructor (public payload: { error: any }) {}
}

export class UpdateArticlesListPageOptions implements Action {
  readonly type = ArticlesActionTypes.UpdateArticlesListPageOptions;

  constructor (public payload: { size?: number, index?: number }) {}
}

export class ArticleCreateRequested implements Action {
  readonly type = ArticlesActionTypes.ArticleCreateRequested;

  constructor (public payload: { article: Article }) {}
}

export class ArticleCreateSuccess implements Action {
  readonly type = ArticlesActionTypes.ArticleCreateSuccess;

  constructor (public payload: { article: Article}) {}
}

export class ArticleCreateFailure implements Action {
  readonly type = ArticlesActionTypes.ArticleCreateFailure;

  constructor (public payload: { error: any }) {}
}

export class ArticleUpdateRequested implements Action {
  readonly type = ArticlesActionTypes.ArticleUpdateRequested;

  constructor (public payload: { article: Article }) {}
}

export class ArticleUpdateSuccess implements Action {
  readonly type = ArticlesActionTypes.ArticleUpdateSuccess;

  constructor (public payload: { article: Update<Article> }) {}
}

export class ArticleUpdateFailure implements Action {
  readonly type = ArticlesActionTypes.ArticleUpdateFailure;

  constructor (public payload: { error: any }) {}
}

export class ArticleDeleteRequested implements Action {
  readonly type = ArticlesActionTypes.ArticleDeleteRequested;

  constructor (public payload: { articleId: string }) {}
}

export class ArticleDeleteSuccess implements Action {
  readonly type = ArticlesActionTypes.ArticleDeleteSuccess;

  constructor (public payload: { article: Article }) {}
}

export class ArticleDeleteFailure implements Action {
  readonly type = ArticlesActionTypes.ArticleDeleteFailure;

  constructor (public payload: { error: any }) {}
}

export type ArticlesActions =
  LoadArticleRequested |
  LoadArticleSuccess |
  LoadArticleFailure |
  LoadArticlesListRequested |
  LoadArticlesListSuccess |
  LoadArticlesListFailure |
  UpdateArticlesListPageOptions |
  ArticleCreateRequested |
  ArticleCreateSuccess |
  ArticleCreateFailure |
  ArticleUpdateRequested |
  ArticleUpdateSuccess |
  ArticleUpdateFailure |
  ArticleDeleteRequested |
  ArticleDeleteSuccess |
  ArticleDeleteFailure;
