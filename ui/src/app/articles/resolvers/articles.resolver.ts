import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { ArticlesService } from '../services/articles.service';


@Injectable()
export class ArticlesResolver implements Resolve<Array<Article>> {

  constructor(private articlesService: ArticlesService) { }

  resolve(): Observable<Array<Article>> {
    return this.articlesService.getArticles$();
  }
}
