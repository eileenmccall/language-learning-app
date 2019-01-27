import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Article } from '../models/article';

@Injectable()
export class ArticlesService {
  constructor(private httpClient: HttpClient) { }

  getArticles$ (): Observable<Array<Article>> {
    return this.httpClient.get<Array<Article>>('http://localhost:3000/articles');
  }

  deleteArticle$ (articleId: any): Observable<Article> {
    return this.httpClient.delete<Article>('http://localhost:3000/articles/' + articleId);
  }
}
