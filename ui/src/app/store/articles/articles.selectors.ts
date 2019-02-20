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

export const selectArticlesList = createSelector(
  selectArticlesState,
  selectAll
);

export const articlesListLoaded = createSelector(
  selectArticlesState,
  state => state.loaded
);
