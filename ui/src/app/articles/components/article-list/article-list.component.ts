import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { Observable } from 'rxjs';
import { ArticlesService } from '../../services/articles.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AddArticleModalComponent } from '../add-article-modal/add-article-modal.component';
import { EditArticleModalComponent } from '../edit-article-modal/edit-article-modal.component';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  constructor (
    private articlesService: ArticlesService,
    private modalService: NgbModal
  ) { }

  public articles: Observable<Array<Article>>;

  ngOnInit () {
    this.getArticles();
  }

  private getArticles (): void {
    this.articles = this.articlesService.getArticles$();
  }

  openAddArticleModal(): void {
    const modalRef: NgbModalRef = this.modalService.open(
      AddArticleModalComponent,
      { centered: true }
    );

    modalRef.result.then((result: Article | null) => {
      if (result) {
        this.getArticles();
        this.addArticle(result);
      }
    }, (result: any) => {
      console.log(result);
    });
  }

  addArticle(article: Article): void {
    this.articlesService.addArticle$(article).subscribe(() => {
      this.getArticles();
    });
  }

  onEdit(article: Article): void {
    const modalRef: NgbModalRef = this.modalService.open(
      EditArticleModalComponent,
      { centered: true }
    );

    modalRef.componentInstance.article = article;

    modalRef.result.then((result: Article | null) => {
      if (result) {
        this.editArticle(result);
        this.getArticles();
      }
    }, (result: any) => {
      console.log(result);
    });
  }

  editArticle (article: Article): void {
    this.articlesService.editArticle$(article).subscribe(() => {
      this.getArticles();
    });
  }

  onDelete(event: Article) {
    this.articlesService.deleteArticle$(event._id).subscribe(() => {
      this.getArticles();
    });
  }
}
