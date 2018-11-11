// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ArticlesComponent } from './articles.component';

const articlesRoutes: Routes = [
    { path: '', component: ArticlesComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(articlesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ArticlesRoutes { }
