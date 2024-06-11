import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'https://api.exemplo.com';

  //   constructor(private http: HttpClient) {}

  // Método GET
  authenticate() {
    console.log('here');
    // return this.http.get<any>(`${this.apiUrl}/dados`);
  }

  // // Método POST
  // postData(data: any): Observable<any> {
  //     return this.http.post<any>(`${this.apiUrl}/dados`, data);
  // }

  // // Método PUT
  // updateData(id: number, data: any): Observable<any> {
  //     return this.http.put<any>(`${this.apiUrl}/dados/${id}`, data);
  // }

  // // Método DELETE
  // deleteData(id: number): Observable<any> {
  //     return this.http.delete<any>(`${this.apiUrl}/dados/${id}`);
  // }
}
