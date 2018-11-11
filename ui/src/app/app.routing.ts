import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { AuthenticatedModule } from './authenticated/authenticated.module';
import { UnauthenticatedModule } from './unauthenticated/unauthenticated.module';

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: () => UnauthenticatedModule
    }, {
        path: '',
        canActivate: [AuthGuardService],
        loadChildren: () => AuthenticatedModule
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
