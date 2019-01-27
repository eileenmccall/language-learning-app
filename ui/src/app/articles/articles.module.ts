// App Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { ArticleComponent } from './components/article/article.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { LayoutModule } from '../layout/layout.module';

// Routes
import { ArticlesRoutes } from './articles.routing';
import { ArticlesService } from './services/articles.service';

@NgModule({
  declarations: [
    ArticleComponent,
    ArticleListComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ArticlesRoutes
  ],
  providers: [
    ArticlesService
  ]
})
export class ArticlesModule { }
