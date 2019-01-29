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
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditArticleModalComponent } from './components/edit-article-modal/edit-article-modal.component';
import { SharedModule } from '@app/shared/shared.module';
import { ArticlesResolver } from './resolvers/articles.resolver';

@NgModule({
  declarations: [
    ArticleComponent,
    ArticleListComponent,
    EditArticleModalComponent
  ],
  entryComponents: [
    EditArticleModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    LayoutModule,
    SharedModule,
    ArticlesRoutes
  ],
  providers: [
    ArticlesService,
    ArticlesResolver
  ]
})
export class ArticlesModule { }
