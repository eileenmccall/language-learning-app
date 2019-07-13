import { ArticlesState, adapter, initialState } from './articles.state';
import * as ArticlesActions from './articles.actions';

import { Article } from '@app/articles/models/article.model';
import { createReducer, on } from '@ngrx/store';

export const articlesReducer = createReducer(
  initialState,

  on(ArticlesActions.loadArticleSuccess, (state, { article }) => {
    return adapter.addOne(article, state);
  }),

  on(ArticlesActions.loadArticleFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error
  })),

  on(
    ArticlesActions.updateArticlesListPageOptions,
    (state, { size, index }) => ({
      ...state,
      pageIndex: index ? index : state.pageIndex,
      pageSize: size ? size : state.pageSize
    })
  ),

  on(ArticlesActions.loadArticlesListSuccess, (state, { data }) => {
    adapter.removeAll({
      ...state,
      loaded: false
    });
    return adapter.addAll(data.data, {
      ...state,
      collectionSize: data.collectionSize,
      loaded: true
    });
  }),

  on(
    ArticlesActions.loadArticleFailure,
    ArticlesActions.articleCreateFailure,
    ArticlesActions.articleUpdateFailure,
    ArticlesActions.articleDeleteFailure,
    (state, { error }) => ({
      ...state,
      loaded: true,
      error
    })
  )
);
