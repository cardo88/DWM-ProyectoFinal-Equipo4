import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_SERVER: string = 'http://localhost:4000/';
  authSubject = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient, public jwtHelper: JwtHelperService) { }

  signin(user: any): Observable<any> {
    return this.httpClient.post(`${this.AUTH_SERVER}api/user/signup`, user).pipe(
      tap((res: any) => {
        if (res.user) {
          localStorage.setItem("ACCESS_TOKEN", res.user.access_token);
          this.authSubject.next(true);
        }
      })
    )
  } // Enviar la solicitud al servidor de registro

  login(user: any): Observable<any> {
    return this.httpClient.post(`${this.AUTH_SERVER}api/user/login`, user).pipe(
      tap((res: any) => {
        if (res.user) {
          localStorage.setItem("ACCESS_TOKEN", res.user.access_token);
          this.authSubject.next(true);
        }
      })
    )
  }; // Enviar la solicitud al servidor de inicio de sesión

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }


  logout() {
    localStorage.removeItem('token'); // Elimina el token al cerrar sesión
  }
}
