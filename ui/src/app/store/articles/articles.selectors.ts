import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticlesState } from './articles.state';

export const selectArticlesState = createFeatureSelector<ArticlesState>('articles');

export const selectArticleById = (articleId: string) => {
  return createSelector(
    selectArticlesState,
    (articlesState: ArticlesState) => {
      return articlesState.entities[articleId];
    }
  );
};
