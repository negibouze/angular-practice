import { Injectable } from '@angular/core';
import { throwError, Observable, of, observable } from 'rxjs';

export class ILoginContext {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  isAuthenticated(): boolean {
    return true;
  }

  login(loginContext: ILoginContext): Observable<boolean> {
    if (loginContext.username === '') {
      return of(true);
    }
    return throwError('Invalid username or password');
  }

  logout(): Observable<boolean> {
    return of(false);
  }
}
