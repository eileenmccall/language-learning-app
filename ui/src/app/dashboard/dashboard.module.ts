import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { DashboardRoutingModule } from './routing/dashboard.routing';
import { DashboardService } from './services/dashboard.service';
import { LayoutModule } from '@app/layout/layout.module';

@NgModule({
  declarations: [DashboardComponent, CollectionsComponent],
  imports: [CommonModule, DashboardRoutingModule, LayoutModule],
  providers: [DashboardService]
})
export class DashboardModule {}
