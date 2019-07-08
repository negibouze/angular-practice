import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';

export interface User {
  id: number;
  name: string;
  age: number;
  height: number;
  weight: number;
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
}
