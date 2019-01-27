import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';
import { ArticlesModule } from '../articles/articles.module';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { PublicModule } from '../public/public.module';
import { AccountModule } from '../account/account.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => PublicModule
  }, {
    path: '',
    canActivate: [AuthGuardService],
    loadChildren: () => ArticlesModule
  }, {
    path: 'account',
    loadChildren: () => AccountModule
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuardService
  ],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }
