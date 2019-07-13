import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';
import { PageNotFoundComponent } from '@app/shared/components/page-not-found/page-not-found.component';
import { SharedModule } from '@app/shared/shared.module';
import { PublicModule } from '@app/public/public.module';
import { RoleGuardService } from './guards/role-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => PublicModule
  },
  {
    path: 'articles',
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      role: 'admin'
    },
    loadChildren: () =>
      import('@app/articles/articles.module').then(m => m.ArticlesModule)
  },
  {
    path: 'account',
    loadChildren: () =>
      import('@app/account/account.module').then(m => m.AccountModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes)],
  providers: [AuthGuardService, RoleGuardService],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule {}
