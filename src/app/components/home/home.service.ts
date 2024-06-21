import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../../constants';

@Injectable({
  providedIn: 'any',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getUser(id: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set(
      'authorization',
      'Bearer ' + localStorage.getItem('token')
    );
    console.log(headers);
    return this.http.get<any>(`${env.API_URL}/users/${id}`, { headers });
  }
}
