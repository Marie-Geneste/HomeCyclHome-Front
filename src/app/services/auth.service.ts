import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) {}

  login(mail: string, password: string): Observable<any> {
    const body = { mail, password };
    return this.http.post(`${this.baseUrl}/user/login`, body);
  }
}
