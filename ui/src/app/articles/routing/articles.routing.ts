// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ArticleListComponent } from '../views/article-list/article-list.component';
import { ArticlesResolver } from './resolvers/articles.resolver';
import { ArticleDetailsResolver } from './resolvers/article-details.resolver';
import { ArticleDetailsComponent } from '../views/article-details/article-details.component';
import { ArticlesComponent } from '../views/articles/articles.component';

const articlesRoutes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ArticleListComponent,
        resolve: {
          articlesLoaded: ArticlesResolver
        }
      }, {
        path: ':id',
        component: ArticleDetailsComponent,
        resolve: {
          article: ArticleDetailsResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(articlesRoutes)],
  exports: [RouterModule]
})
export class ArticlesRoutes {}
