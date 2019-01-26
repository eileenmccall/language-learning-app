import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { AuthenticatedModule } from './authenticated/authenticated.module';
import { UnauthenticatedModule } from './unauthenticated/unauthenticated.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: 'app',
        canActivate: [AuthGuardService],
        loadChildren: () => AuthenticatedModule
        // loadChildren: './authenticated/authenticated.module#AuthenticatedModule'
    }, {
        path: '',
        // loadChildren: './unauthenticated/unauthenticated.module#UnauthenticatedModule'
        loadChildren: () => UnauthenticatedModule
    }, {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            // { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutes { }
