import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { PublicRoutingModule } from './public.routing';
import { PublicComponent } from './components/public/public.component';

@NgModule({
  imports: [
    PublicRoutingModule
  ],
  exports: [],
  declarations: [
    PublicComponent,
    HomeComponent
  ],
  providers: [],
})
export class PublicModule { }
