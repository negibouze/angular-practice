import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';

export interface Member {
  id: number;
  name: string;
  age: number;
  height: number;
  weight: number;
}

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor(private api: ApiService) {}

  getMembers(): Observable<Member[]> {
    return this.api.get<Member[]>('members');
  }

  getMember(id: number): Observable<Member> {
    const url = `members/${id}`;
    return this.api.get<Member>(url);
  }

  addMember(member: Member): Observable<Member> {
    return of(member);
  }
}
