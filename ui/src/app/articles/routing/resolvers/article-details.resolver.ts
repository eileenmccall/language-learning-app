import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../../models/article.model';
import { ArticlesService } from '../../services/articles.service';

@Injectable()
export class ArticleDetailsResolver implements Resolve<Article> {

  constructor(
    private articlesService: ArticlesService,
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Article> {
    return this.articlesService.getArticleById$(route.paramMap.get('id'));
  }
}
