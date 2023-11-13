import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER: string = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) { }

  signin(user:any): Observable<any> {
    return this.httpClient.post(`${this.AUTH_SERVER}/signin`, user).pipe(
      tap((res: any) => {
        if (res.user) {
          localStorage.setItem("ACCESS_TOKEN", res.user.access_token);
          this.authSubject.next(true);
        }
      })
    )
  } // Enviar la solicitud al servidor de registro
  

  login(user: any): Observable<any> {
    return this.httpClient.post(`${this.AUTH_SERVER}/login`, user).pipe(
      tap((res: any) => {
        if (res.user) {
          localStorage.setItem("ACCESS_TOKEN", res.user.access_token);
          this.authSubject.next(true);
        }
      })
    )
  }; // Enviar la solicitud al servidor de inicio de sesión
  
}
