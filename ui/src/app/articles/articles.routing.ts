// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ArticleListComponent } from './components/article-list/article-list.component';

const articlesRoutes: Routes = [
  { path: '', component: ArticleListComponent }
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
