import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collection } from '../models/collection.model';

@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) {}

  ep = {
    collections: 'collections/'
  };

  getCollections(): Observable<Array<Collection>> {
    return this.http.get<Array<Collection>>(
      'https://my.api.mockaroo.com/' +
        this.ep.collections +
        123 +
        '?key=cb1137e0'
    );
  }
}
