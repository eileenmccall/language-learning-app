import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Article } from '@app/articles/models/article';
import { mimeType } from '@app/shared/validators/mime-type.validator';

@Component({
  selector: 'app-edit-article-modal',
  templateUrl: './edit-article-modal.component.html',
  styleUrls: ['./edit-article-modal.component.scss']
})
export class EditArticleModalComponent implements OnInit {
  constructor(public modal: NgbActiveModal, private formBuilder: FormBuilder) {}

  @Input() article: Article;

  form: FormGroup;
  filePreview: string;

  ngOnInit() {
    this.createFormGroup();
  }

  createFormGroup() {
    this.form = this.formBuilder.group({
      image: this.formBuilder.control(null, null, [mimeType]),
      title: this.formBuilder.control(this.article.title, [Validators.required]),
      excerpt: this.formBuilder.control(this.article.excerpt),
      body: this.formBuilder.control(this.article.body)
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
    const article = this.form.value;
    article._id = this.article._id;
    this.modal.close(article);
  }
}
