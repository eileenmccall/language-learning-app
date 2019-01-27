import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable()
export class ArticlesService {
  constructor(private httpClient: HttpClient) { }

  getArticles$ (): Observable<Array<Article>> {
    return this.httpClient.get<Array<Article>>('http://localhost:3000/articles');
  }
}
