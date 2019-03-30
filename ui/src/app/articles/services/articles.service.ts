import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';
import { PageOptions } from '@app/shared/models/pageOptions.model';
import { GridData } from '@app/shared/models/grid-data.model';

interface Result {
  articles: Array<Article>;
  collectionSize: number;
}

@Injectable()
export class ArticlesService {
  constructor(private httpClient: HttpClient) {}

  getArticles$(pageSize: number, pageIndex: number): Observable<GridData<Article>> {
    const queryParams = `?pageSize=${pageSize}&currentPage=${pageIndex}`;
    return this.httpClient.get<GridData<Article>>(
      'http://localhost:3000/articles' + queryParams
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
