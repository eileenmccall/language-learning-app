import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Article } from '@app/articles/models/article';

@Component({
  selector: 'app-edit-article-modal',
  templateUrl: './edit-article-modal.component.html',
  styleUrls: ['./edit-article-modal.component.scss']
})
export class EditArticleModalComponent implements OnInit {
  constructor(public modal: NgbActiveModal, private formBuilder: FormBuilder) {}

  @Input() article: Article;

  form: FormGroup;

  ngOnInit() {
    this.createFormGroup();
  }

  createFormGroup() {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control(this.article.title),
      imageUrl: this.formBuilder.control(this.article.imageUrl),
      excerpt: this.formBuilder.control(this.article.excerpt),
      body: this.formBuilder.control(this.article.body)
    });
  }

  close (): void {
    this.modal.close(null);
  }

  save(): void {
    this.modal.close(this.form.value as Article);
  }
}
