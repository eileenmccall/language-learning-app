import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnauthenticatedComponent } from 'src/app/unauthenticated/unauthenticated.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // { path: '', redirectTo: '/', pathMatch: 'full' },
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
