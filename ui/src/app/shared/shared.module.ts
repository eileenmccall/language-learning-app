import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadService } from './services/file-upload.service';

@NgModule({
  imports: [
    RouterModule,
    HttpClientModule
  ],
  exports: [
    PageNotFoundComponent
  ],
  declarations: [
    PageNotFoundComponent
  ],
  providers: [
    FileUploadService
  ],
})
export class SharedModule { }
