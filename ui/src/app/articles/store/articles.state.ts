import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Article } from '@app/articles/models/article.model';
import { PageOptions } from '@app/shared/models/pageOptions.interface';

export interface ArticlesState extends EntityState<Article> {
  collectionSize: number;
  loaded: boolean;
  pageSize: number;
  pageIndex: number;
  error: any;
}

export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>({
  selectId: (instance: Article) => {
    return instance._id;
  }
});

export const initialState: ArticlesState = adapter.getInitialState({
  collectionSize: 0,
  pageIndex: 1,
  pageSize: 2,
  loaded: false,
  error: null
});

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();
