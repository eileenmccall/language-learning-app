import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { articlesReducer } from './articles.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ArticlesEffects } from './articles.effects';
import { ArticlesService } from '@app/articles/services/articles.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('articles', articlesReducer),
    EffectsModule.forFeature([ArticlesEffects])
  ],
  providers: [
    ArticlesEffects,
    ArticlesService
  ]
})
export class ArticlesStoreModule { }
