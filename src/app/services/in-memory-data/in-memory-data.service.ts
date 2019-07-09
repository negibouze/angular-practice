import { InMemoryDbService, ResponseOptions } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import userData from './user-data';
import { LoginContext } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const authenticated = [{ id: 1, name: '', password: '' }];
    return {
      authenticated,
      users: userData
    };
  }

  genId(authenticated: LoginContext[]): number {
    return authenticated.length > 0 ? authenticated.length + 1 : 1;
  }
}
