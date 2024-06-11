import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class LoginService {
  private apiUrl = 'https://api.exemplo.com';

  constructor(private http: HttpClient) {}

  authenticate(): Observable<any> {
    console.log('here');
    return this.http.get<any>(`${this.apiUrl}/dados`);
  }
}
