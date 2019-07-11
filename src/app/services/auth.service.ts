import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { User } from './user.service';

// for development
import { LocalStorageService } from './development';

export class LoginContext {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private api: ApiService,
    private localStorageService: LocalStorageService
  ) {}

  isAuthenticated(): Observable<boolean> {
    const items = this.localStorageService.fetchItems('authenticated');
    return of(items && 1 <= items.length ? true : false);
  }

  login(loginContext: LoginContext): Observable<boolean> {
    return this.api.get<User[]>('users').pipe(
      map(users => {
        const exists = users.some(
          v =>
            v.email === loginContext.username &&
            v.password === loginContext.password
        );
        if (exists) {
          this.localStorageService.storeItem('authenticated', {
            ...{ id: Math.floor(Math.random() * Math.floor(2)) },
            ...loginContext
          });
          return true;
        }
        throw new Error('Invalid User');
      })
    );
  }

  logout(): Observable<boolean> {
    this.localStorageService.deleteItems('authenticated');
    return of(true);
  }
}
