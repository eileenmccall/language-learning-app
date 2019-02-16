import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { Observable } from 'rxjs';
import { ArticlesService } from '../../services/articles.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EditArticleModalComponent } from '../../components/edit-article-modal/edit-article-modal.component';
import { ModalResult } from '@app/articles/models/modal-result.model';
import { FileUploadService } from '@app/shared/services/file-upload.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  constructor(
    private articlesService: ArticlesService,
    private modalService: NgbModal,
    private fileUploadService: FileUploadService,
    private route: ActivatedRoute
  ) {}

  // ignoring pagination stuff for now

  // public articles: Array<Article>;
  // pageSize = 2;
  // currentPage = 1;
  // collectionSize = 3;

  articles: Observable<Array<Article>>;

  ngOnInit() {
    this.getArticles();
    // this.articles = this.route.snapshot.data['data'].articles;
    // this.collectionSize = this.route.snapshot.data['data'].collectionSize;
  }

  // paginate (page: number) {
  //   this.currentPage = page;
  //   this.getArticles();
  // }

  private getArticles(): void {
    this.articles = this.articlesService
      .getArticles$();
      // .subscribe(result => {
      //   this.articles = result.articles;
      //   this.collectionSize = result.collectionSize;
      // });
  }

  addArticle(article: Article): void {
    this.articlesService.addArticle$(article).subscribe(() => {
      this.getArticles();
    });
  }

  openModal(article: Article | null): void {
    const modalRef: NgbModalRef = this.modalService.open(
      EditArticleModalComponent,
      { centered: true }
    );

    modalRef.componentInstance.article = article;

    modalRef.result.then(
      (result: ModalResult | null) => {
        if (result && result.file) {
          this.fileUploadService
            .uploadFile$(result.title, result.file)
            .subscribe(fileUrl => {
              if (fileUrl && article) {
                this.editArticle({
                  ...result,
                  imageUrl: fileUrl
                } as Article);
              } else if (fileUrl) {
                this.addArticle({
                  ...result,
                  imageUrl: fileUrl
                } as Article);
              }
            });
        } else if (result) {
          if (article) {
            this.editArticle(result as Article);
          } else {
            this.addArticle(result as Article);
          }
        }
      },
      (result: any) => {
        console.log(result);
      }
    );
  }

  editArticle(article: Article): void {
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
