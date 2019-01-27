import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { Observable } from 'rxjs';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  constructor (private articlesService: ArticlesService) { }

  public articles: Observable<Array<Article>>;

  ngOnInit () {
    this.getArticles();
  }

  private getArticles (): void {
    this.articles = this.articlesService.getArticles$();
  }
}
