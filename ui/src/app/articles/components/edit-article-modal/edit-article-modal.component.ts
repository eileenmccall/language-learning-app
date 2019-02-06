import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Article } from '@app/articles/models/article.model';
import { mimeType } from '@app/shared/validators/mime-type.validator';
import { ModalResult } from '@app/articles/models/modal-result.model';

@Component({
  selector: 'app-edit-article-modal',
  templateUrl: './edit-article-modal.component.html',
  styleUrls: ['./edit-article-modal.component.scss']
})
export class EditArticleModalComponent implements OnInit, OnChanges {
  constructor(public modal: NgbActiveModal, private formBuilder: FormBuilder) {}

  @Input() article: Article;

  form: FormGroup;
  filePreview: string;

  ngOnInit() {
    this.createFormGroup();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.filePreview = this.article ? this.article.imageUrl : null;
  }

  createFormGroup() {
    this.form = this.formBuilder.group({
      image: this.formBuilder.control(null, null, [mimeType]),
      title: this.formBuilder.control(
        this.article ? this.article.title : null,
        [Validators.required]
      ),
      excerpt: this.formBuilder.control(
        this.article ? this.article.excerpt : null
      ),
      body: this.formBuilder.control(
        this.article ? this.article.body : null
      )
    });
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.filePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  close (): void {
    this.modal.close(null);
  }

  save(): void {
    const result = new ModalResult();
    result._id = this.article ? this.article._id : null;
    result.title = this.form.value.title;
    result.excerpt = this.form.value.excerpt;
    result.body = this.form.value.body;
    result.file = this.form.value.image;

    this.modal.close(result);
  }
}
