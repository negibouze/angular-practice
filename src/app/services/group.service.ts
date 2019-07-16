import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface Group {
  id: number;
  name: string;
  companyName: string;
  representativeName: string;
}

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  constructor(private api: ApiService) {}

  getGroups(): Observable<Group[]> {
    return this.api.get<Group[]>('groups');
  }

  getGroup(id: number): Observable<Group> {
    const url = `groups/${id}`;
    return this.api.get<Group>(url);
  }

  addGroup(company: Group): Observable<Group> {
    return this.api.post<Group>('groups', company);
  }
}
