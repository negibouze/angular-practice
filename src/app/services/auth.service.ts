import { Injectable } from '@angular/core';
import { throwError, Observable, of, observable } from 'rxjs';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

export class LoginContext {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private api: ApiService) {}

  isAuthenticated(): Observable<boolean> {
    return this.api.get<LoginContext[]>('authenticated').pipe(
      map(v => {
        return v && 1 <= v.length ? true : false;
      })
    );
  }

  login(loginContext: LoginContext): Observable<boolean> {
    return this.api.post<LoginContext>('authenticated', loginContext).pipe(
      map(v => {
        return v ? true : false;
      })
    );
  }

  logout(): Observable<boolean> {
    return this.api.delete<boolean>('authenticated');
  }
}
