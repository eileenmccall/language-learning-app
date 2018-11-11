// App Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles.component';
import { LayoutModule } from '../layout/layout.module';

// Routes
import { ArticlesRoutes } from './articles.routing';

@NgModule({
  declarations: [
    ArticleComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ArticlesRoutes
  ]
})
export class ArticlesModule { }
