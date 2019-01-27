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
import { AddArticleModalComponent } from './components/add-article-modal/add-article-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditArticleModalComponent } from './components/edit-article-modal/edit-article-modal.component';

@NgModule({
  declarations: [
    ArticleComponent,
    ArticleListComponent,
    AddArticleModalComponent,
    EditArticleModalComponent
  ],
  entryComponents: [
    AddArticleModalComponent,
    EditArticleModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    LayoutModule,
    ArticlesRoutes
  ],
  providers: [
    ArticlesService
  ]
})
export class ArticlesModule { }
