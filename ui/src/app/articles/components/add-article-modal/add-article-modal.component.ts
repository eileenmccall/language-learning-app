import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Article } from '@app/articles/models/article';

@Component({
  selector: 'app-add-article-modal',
  templateUrl: './add-article-modal.component.html',
  styleUrls: ['./add-article-modal.component.scss']
})
export class AddArticleModalComponent implements OnInit {
  form: FormGroup;

  constructor(
    public modal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createFormGroup();
  }

  createFormGroup() {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control(''),
      imageUrl: this.formBuilder.control(''),
      excerpt: this.formBuilder.control(''),
      body: this.formBuilder.control('')
    });
  }

  close (): void {
    this.modal.close(null);
  }

  save(): void {
    this.modal.close(this.form.value as Article);
  }
}
