import { Component, OnInit } from '@angular/core';
import { Word } from '@app/dashboard/models/word.model';
import { Observable } from 'rxjs';
import { Collection } from '@app/dashboard/models/collection.model';
import { DashboardService } from '@app/dashboard/services/dashboard.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  constructor(private dashboardService: DashboardService) {}

  collections: Observable<Array<Collection>>;

  ngOnInit() {
    this.getCollections();
  }

  getCollections() {
    this.collections = this.dashboardService.getCollections();
  }
}
