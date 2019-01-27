import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { Observable } from 'rxjs';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor (private articlesService: ArticlesService) { }

  public articles: Observable<Article>;

  ngOnInit () {
    this.getArticles();
  }

  private getArticles (): Observable<Array<Article>> {
    return this.articlesService.getArticles$();
  }
}
