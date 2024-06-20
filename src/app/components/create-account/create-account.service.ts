import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../../constants';

@Injectable({
  providedIn: 'any',
})
export class CreateAccountService {
  constructor(private http: HttpClient) {}

  register(body: any): Observable<any> {
    return this.http.post<any>(`${env.API_URL}/users`, body);
  }
}
