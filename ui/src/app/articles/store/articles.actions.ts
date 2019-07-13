import { createAction, props } from '@ngrx/store';
import { Article } from '@app/articles/models/article.model';
import { Update } from '@ngrx/entity';
import { GridData } from '@app/shared/models/grid-data.model';

export const loadArticleRequested = createAction(
  '[Article List] LOAD_ARTICLE_REQUESTED',
  props<{ articleId: string }>()
);

export const loadArticleSuccess = createAction(
  '[Articles Service] LOAD_ARTICLE_SUCCESS',
  props<{ article: Article }>()
);

export const loadArticleFailure = createAction(
  '[Articles Service] LOAD_ARTICLE_FAILURE',
  props<{ error: any }>()
);

export const loadArticlesListRequested = createAction(
  '[Articles List] LOAD_ARTICLES_LIST_REQUESTED'
);

export const loadArticlesListSuccess = createAction(
  '[Articles Service] LOAD_ARTICLES_LIST_SUCCESS',
  props<{ data: GridData<Article> }>()
);

export const loadArticlesListFailure = createAction(
  '[Articles Service] LOAD_ARTICLES_LIST_FAILURE',
  props<{ error: any }>()
);

export const updateArticlesListPageOptions = createAction(
  '[Articles Service] UPDATE_ARTICLES_LIST_PAGE_OPTIONS',
  props<{ size?: number; index?: number }>()
);

export const articleCreateRequested = createAction(
  '[Articles List] ARTICLE_CREATE_REQUESTED',
  props<{ article: Article }>()
);

export const articleCreateSuccess = createAction(
  '[Articles Service] ARTICLE_CREATE_SUCCESS',
  props<{ article: Article }>()
);

export const articleCreateFailure = createAction(
  '[Articles Service] ARTICLE_CREATE_FAILURE',
  props<{ error: any }>()
);

export const articleUpdateRequested = createAction(
  '[Articles List] ARTICLE_UPDATE_REQUESTED',
  props<{ article: Article }>()
);

export const articleUpdateSuccess = createAction(
  '[Articles Service] ARTICLE_UPDATE_SUCCESS',
  props<{ article: Update<Article> }>()
);

export const articleUpdateFailure = createAction(
  '[Articles Service] ARTICLE_UPDATE_FAILURE',
  props<{ error: any }>()
);

export const articleDeleteRequested = createAction(
  '[Articles List] ARTICLE_DELETE_REQUESTED',
  props<{ articleId: string }>()
);

export const articleDeleteSuccess = createAction(
  '[Articles Service] ARTICLE_DELETE_SUCCESS',
  props<{ article: Article }>()
);

export const articleDeleteFailure = createAction(
  '[Articles Service] ARTICLE_DELETE_FAILURE',
  props<{ error: any }>()
);
