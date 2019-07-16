import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface Company {
  id: number;
  name: string;
  address: string;
  tel: string;
  applicationDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private api: ApiService) {}

  getCompanies(): Observable<Company[]> {
    return this.api.get<Company[]>('companies');
  }

  getCompany(id: number): Observable<Company> {
    const url = `companies/${id}`;
    return this.api.get<Company>(url);
  }

  addCompany(company: Company): Observable<Company> {
    return this.api.post<Company>('companies', company);
  }
}
