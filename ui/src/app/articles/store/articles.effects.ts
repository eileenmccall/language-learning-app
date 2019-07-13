import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as ArticlesActions from './articles.actions';
import { mergeMap, map, withLatestFrom, catchError } from 'rxjs/operators';
import { ArticlesService } from '@app/articles/services/articles.service';
import { Article } from '@app/articles/models/article.model';
import { Store } from '@ngrx/store';
import { State } from '@app/core/store/app-store.state';
import { selectPageOptions } from './articles.selectors';
import { GridData } from '@app/shared/models/grid-data.model';
import { PageOptions } from '@app/shared/models/pageOptions.interface';
import { of } from 'rxjs';

@Injectable()
export class ArticlesEffects {
  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService,
    private store: Store<State>
  ) {}

  loadArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesActions.loadArticleRequested),
      mergeMap(({ articleId }) => {
        return this.articlesService.getArticleById$(articleId).pipe(
          map((article: Article) =>
            ArticlesActions.loadArticleSuccess({ article: article })
          ),
          catchError((err: any) => {
            return of(ArticlesActions.loadArticleFailure({ error: err }));
          })
        );
      })
    )
  );

  loadArticlesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        ArticlesActions.loadArticlesListRequested,
        ArticlesActions.articleCreateSuccess,
        ArticlesActions.articleUpdateSuccess,
        ArticlesActions.articleDeleteSuccess
      ),
      withLatestFrom(this.store.select(selectPageOptions)),
      mergeMap(([action, pageOptions]: [any, PageOptions]) => {
        return this.articlesService
          .getArticles$(pageOptions.pageSize, pageOptions.pageIndex)
          .pipe(
            map((gridData: GridData<Article>) => {
              return ArticlesActions.loadArticlesListSuccess({
                data: gridData
              });
            }),
            catchError((err: any) => {
              return of(
                ArticlesActions.loadArticlesListFailure({ error: err })
              );
            })
          );
      })
    )
  );

  updatePageOptions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesActions.updateArticlesListPageOptions),
      map(() => {
        return ArticlesActions.loadArticlesListRequested();
      })
    )
  );

  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesActions.articleCreateRequested),
      mergeMap(({ article }) => {
        return this.articlesService.addArticle$(article).pipe(
          map((createdArticle: Article) => {
            return ArticlesActions.articleCreateSuccess({
              article: createdArticle
            });
          }),
          catchError((err: any) => {
            return of(ArticlesActions.articleCreateFailure({ error: err }));
          })
        );
      })
    )
  );

  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesActions.articleUpdateRequested),
      mergeMap(({ article }) => {
        return this.articlesService.editArticle$(article).pipe(
          map((updatedArticle: Article) => {
            return ArticlesActions.articleUpdateSuccess({
              article: {
                id: updatedArticle._id,
                changes: updatedArticle
              }
            });
          }),
          catchError((err: any) => {
            return of(ArticlesActions.articleUpdateFailure({ error: err }));
          })
        );
      })
    )
  );

  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesActions.articleDeleteRequested),
      mergeMap(({ articleId }) => {
        return this.articlesService.deleteArticle$(articleId).pipe(
          map((article: Article) => {
            return ArticlesActions.articleDeleteSuccess({ article: article });
          }),
          catchError((err: any) => {
            return of(ArticlesActions.articleDeleteFailure({ error: err }));
          })
        );
      })
    )
  );
}
