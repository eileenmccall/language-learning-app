import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthStoreModule } from './auth/auth.module';
import { ArticlesStoreModule } from './articles';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthStoreModule,
    ArticlesStoreModule
  ]
})
export class AppStoreModule { }
