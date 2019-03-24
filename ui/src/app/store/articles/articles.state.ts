import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Article } from '@app/articles/models/article.model';

export interface ArticlesState extends EntityState<Article> {
  collectionSize: number;
  loaded: boolean;
}

export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>({
  selectId: (instance: Article) => {
    return instance._id;
  }
});

export const initialState: ArticlesState = adapter.getInitialState({
  collectionSize: 0,
  loaded: false
});

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();
