import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment as env } from '@env/environment';

const BASE_URL = env.serverUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  public get<T>(
    path: string,
    params: HttpParams = new HttpParams()
  ): Observable<T> {
    return this.httpClient
      .get(`${BASE_URL}${path}`, { headers: this.headers, params })
      .pipe(catchError(this.formatErrors));
  }

  public put<T>(path: string, body: object = {}): Observable<T> {
    return this.httpClient
      .put(`${BASE_URL}${path}`, body, {
        headers: this.headers
      })
      .pipe(catchError(this.formatErrors));
  }

  public post<T>(path: string, body: object = {}): Observable<T> {
    return this.httpClient
      .post(`${BASE_URL}${path}`, body, {
        headers: this.headers
      })
      .pipe(catchError(this.formatErrors));
  }

  public delete<T>(path: string): Observable<T> {
    return this.httpClient
      .delete(`${BASE_URL}${path}`)
      .pipe(catchError(this.formatErrors));
  }

  public formatErrors(error: any): Observable<any> {
    return throwError(error.error);
  }
}
