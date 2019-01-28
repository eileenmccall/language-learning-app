import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule
  ],
  exports: [
    PageNotFoundComponent
  ],
  declarations: [
    PageNotFoundComponent
  ],
  providers: [],
})
export class SharedModule { }
