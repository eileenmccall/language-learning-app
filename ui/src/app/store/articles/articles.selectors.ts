import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticlesState, selectAll } from './articles.state';

export const selectArticlesState = createFeatureSelector<ArticlesState>('articles');

export const selectArticleById = (articleId: string) => {
  return createSelector(
    selectArticlesState,
    (articlesState: ArticlesState) => {
      return articlesState.entities[articleId];
    }
  );
};

export const selectCollectionSize = createSelector(
  selectArticlesState,
  state => state.collectionSize
);

export const selectPageOptions = createSelector(
  selectArticlesState,
  state => ({pageSize: state.pageSize, pageIndex: state.pageIndex})
);

export const selectArticlesList = createSelector(
  selectArticlesState,
  selectAll
);

export const articlesListLoaded = createSelector(
  selectArticlesState,
  state => state.loaded
);

export const selectError = createSelector(
  selectArticlesState,
  state => state.error
);

export const selectArticlesLoaded = createSelector(
  selectArticlesState,
  state => state.loaded
);
