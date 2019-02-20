import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Article } from '@app/articles/models/article.model';

export interface ArticlesState extends EntityState<Article> {

}

export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>({
  selectId: (instance: Article) => {
    return instance._id;
  }
});

export const initialState: ArticlesState = adapter.getInitialState();
