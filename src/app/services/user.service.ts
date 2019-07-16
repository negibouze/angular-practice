import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface User {
  id: number;
  name?: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private api: ApiService) {}

  getUsers(): Observable<User[]> {
    return this.api.get<User[]>('users');
  }

  getUser(id: number): Observable<User> {
    const url = `users/${id}`;
    return this.api.get<User>(url);
  }

  addUser(user: User): Observable<User> {
    return this.api.post<User>('users', user);
  }
}
