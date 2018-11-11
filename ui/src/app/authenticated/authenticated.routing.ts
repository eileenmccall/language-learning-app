// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedComponent } from './authenticated.component';
import { ArticlesModule } from './articles/articles.module';

const authenticatedRoutes: Routes = [
    {
        path: '',
        component: AuthenticatedComponent,
        children: [
            {
                path: '',
                redirectTo: 'articles',
                pathMatch: 'full'
            }, {
                path: 'articles',
                loadChildren: () => ArticlesModule
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(authenticatedRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthenticatedRoutes { }
