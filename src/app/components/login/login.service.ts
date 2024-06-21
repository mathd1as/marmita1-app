import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../../constants';

@Injectable({
  providedIn: 'any',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  authenticate(body: any): Observable<any> {
    return this.http.post<any>(`${env.API_URL}/auth/login`, body);
  }
}
