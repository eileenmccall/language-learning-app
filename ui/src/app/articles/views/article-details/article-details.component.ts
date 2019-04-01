import { Component, OnInit } from '@angular/core';
import { Article } from '@app/articles/models/article.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  article: Article;

  ngOnInit() {
    console.log('hey ho');
    this.article = this.route.snapshot.data['article'];
  }

}
