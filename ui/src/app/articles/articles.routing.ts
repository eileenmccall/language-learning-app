// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticlesResolver } from './resolvers/articles.resolver';

const articlesRoutes: Routes = [
  {
    path: '',
    component: ArticleListComponent,
    resolve: {
      articles: ArticlesResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(articlesRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class ArticlesRoutes { }
