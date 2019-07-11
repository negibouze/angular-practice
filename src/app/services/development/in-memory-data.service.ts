import { InMemoryDbService, ResponseOptions } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import userData from './user-data';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      users: userData
    };
  }

  genId(collection: any[], collectionName: string): number {
    return 1 <= collection.length
      ? Math.max(...collection.map(v => v.id)) + 1
      : 1;
  }
}
