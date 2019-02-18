import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';

interface Result {
  articles: Array<Article>;
  collectionSize: number;
}

@Injectable()
export class ArticlesService {
  constructor(private httpClient: HttpClient) {}

  getArticles$(): Observable<Array<Article>> {
    // const queryParams = `?pageSize=${pageSize}&currentPage=${currentPage}`;
    return this.httpClient.get<Array<Article>>(
      'http://localhost:3000/articles/'
    );
  }

  getArticleById$(id: string): Observable<Article> {
    return this.httpClient.get<Article>(
      'http://localhost:3000/articles/' + id
    );
  }

  addArticle$(article: Article): Observable<Article> {
    return this.httpClient.post<Article>(
      'http://localhost:3000/articles',
      article
    );
  }

  editArticle$(article: Article): Observable<Article> {
    return this.httpClient.put<Article>(
      'http://localhost:3000/articles/' + article._id,
      article
    );
  }

  deleteArticle$(articleId: any): Observable<Article> {
    return this.httpClient.delete<Article>(
      'http://localhost:3000/articles/' + articleId
    );
  }
}
