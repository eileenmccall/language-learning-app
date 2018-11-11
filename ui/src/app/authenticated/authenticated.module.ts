// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App Modules
import { LayoutModule } from './layout/layout.module';

// Routes
import { AuthenticatedRoutes } from './authenticated.routing';
import { AuthenticatedComponent } from './authenticated.component';

@NgModule({
  declarations: [AuthenticatedComponent],
  imports: [
    CommonModule,
    LayoutModule,
    AuthenticatedRoutes
  ]
})
export class AuthenticatedModule { }
