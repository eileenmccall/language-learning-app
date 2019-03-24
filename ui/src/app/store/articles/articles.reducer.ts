import { ArticlesState, adapter, initialState } from './articles.state';
import { ArticlesActions, ArticlesActionTypes } from './articles.actions';
import { Article } from '@app/articles/models/article.model';

export function articlesReducer(
  state: ArticlesState = initialState,
  action: ArticlesActions
): ArticlesState {
  switch (action.type) {

    case ArticlesActionTypes.ArticleLoaded:
      return adapter.addOne(action.payload.article, state);

    case ArticlesActionTypes.ArticlesListLoaded:
      adapter.removeAll({...state, loaded: false});
      return adapter.addAll(action.payload.data.data, {
        ...state,
        collectionSize: action.payload.data.collectionSize,
        loaded: true
      });

    case ArticlesActionTypes.ArticleCreateSuccess:
      return adapter.addOne(action.payload.article, state);

    case ArticlesActionTypes.ArticleUpdateSuccess:
      return adapter.updateOne(action.payload.article, state);

    default:
      return state;
  }
}
