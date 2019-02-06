// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ArticleListComponent } from '../views/article-list/article-list.component';
import { ArticlesResolver } from './resolvers/articles.resolver';

const articlesRoutes: Routes = [
  {
    path: '',
    component: ArticleListComponent,
    resolve: {
      data: ArticlesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(articlesRoutes)],
  exports: [RouterModule]
})
export class ArticlesRoutes {}
