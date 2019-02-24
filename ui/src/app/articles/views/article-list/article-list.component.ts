import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { Observable } from 'rxjs';
import { ArticlesService } from '../../services/articles.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EditArticleModalComponent } from '../../components/edit-article-modal/edit-article-modal.component';
import { ModalResult } from '@app/articles/models/modal-result.model';
import { FileUploadService } from '@app/shared/services/file-upload.service';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState, ArticlesActions, ArticlesSelectors } from '@app/store';

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
    private route: ActivatedRoute,
    private store: Store<AppState.State>
  ) {}

  // ignoring pagination stuff for now

  // public articles: Array<Article>;
  // pageSize = 2;
  // currentPage = 1;
  // collectionSize = 3;

  articles: Observable<Array<Article>>;

  ngOnInit() {
    this.store.dispatch(new ArticlesActions.ArticlesListRequested());

    this.articles = this.store
      .pipe(select(ArticlesSelectors.selectArticlesList));
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

  openModal(article: Article | null): void {
    const modalRef: NgbModalRef = this.modalService.open(
      EditArticleModalComponent,
      { centered: true }
    );

    modalRef.componentInstance.article = article;

    modalRef.result.then(
      (result: ModalResult | null) => {
        if (!result) { return; }

        const newArticle = {
          ...result.article
        } as Article;

        if (result.imageUpdated) {
          this.fileUploadService.uploadFile$(result.article.title, result.article.file)
            .subscribe((imageUrl: string) => {
              newArticle.imageUrl = imageUrl;
              this.editArticle(newArticle);
            });
        } else {
          this.editArticle(newArticle);
        }
      },
      (result: any) => {
        console.log(result);
      }
    );
  }

  editArticle(article: Article): void {
    if (article._id) {
      this.store.dispatch(new ArticlesActions.ArticleUpdateRequested({
        article: article
      }));
    } else {
      this.store.dispatch(new ArticlesActions.ArticleCreateRequested({
        article: article
      }));
    }
  }

  onDelete(event: Article) {
    this.articlesService.deleteArticle$(event._id).subscribe(() => {
      this.getArticles();
    });
  }
}
