import { InMemoryDbService, ResponseOptions } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import companies from './company-data';
import groups from './group-data';
import members from './member-data';
import users from './user-data';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      companies,
      groups,
      members,
      users
    };
  }

  genId(collection: any[], collectionName: string): number {
    return 1 <= collection.length
      ? Math.max(...collection.map(v => v.id)) + 1
      : 1;
  }
}
