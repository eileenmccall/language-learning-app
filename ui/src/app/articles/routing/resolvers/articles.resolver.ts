import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../../models/article.model';
import { ArticlesService } from '../../services/articles.service';

interface Result {
  articles: Array<Article>;
  collectionSize: number;
}

@Injectable()
export class ArticlesResolver implements Resolve<Result> {

  constructor(private articlesService: ArticlesService) { }

  resolve(): Observable<Result> {
    return this.articlesService.getArticles$(2, 1);
  }
}
