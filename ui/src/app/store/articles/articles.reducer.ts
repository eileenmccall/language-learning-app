import { ArticlesState, adapter, initialState } from './articles.state';
import { ArticlesActions, ArticlesActionTypes } from './articles.actions';

export function articlesReducer(
  state: ArticlesState = initialState,
  action: ArticlesActions
): ArticlesState {
  switch (action.type) {

    case ArticlesActionTypes.ArticleLoaded:
      return adapter.addOne(action.payload.article, state);

    default:
      return state;
  }
}
