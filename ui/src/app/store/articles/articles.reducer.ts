import { ArticlesState, adapter, initialState } from './articles.state';
import { ArticlesActions, ArticlesActionTypes } from './articles.actions';
import { Article } from '@app/articles/models/article.model';

export function articlesReducer(
  state: ArticlesState = initialState,
  action: ArticlesActions
): ArticlesState {
  switch (action.type) {

    case ArticlesActionTypes.LoadArticleSuccess:
      return adapter.addOne(action.payload.article, state);

    case ArticlesActionTypes.UpdateArticlesListPageOptions:
      return {
        ...state,
        pageIndex: action.payload.index ? action.payload.index : state.pageIndex,
        pageSize: action.payload.size ? action.payload.size : state.pageSize
      };

    case ArticlesActionTypes.LoadArticlesListSuccess:
      adapter.removeAll({...state, loaded: false});
      return adapter.addAll(action.payload.data.data, {
        ...state,
        collectionSize: action.payload.data.collectionSize,
        loaded: true
      });

    case ArticlesActionTypes.LoadArticlesListFailure:
      return adapter.removeAll({
        ...state,
        loaded: true,
        error: action.payload.error
      });

    case ArticlesActionTypes.ArticleCreateSuccess:
      return adapter.addOne(action.payload.article, state);

    case ArticlesActionTypes.ArticleUpdateSuccess:
      return adapter.updateOne(action.payload.article, state);

    default:
      return state;
  }
}
