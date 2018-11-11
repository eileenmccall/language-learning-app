<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article';
>>>>>>> added articles

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }

<<<<<<< HEAD
=======
  @Input() article: Article;

>>>>>>> added articles
  ngOnInit() {
  }

}
