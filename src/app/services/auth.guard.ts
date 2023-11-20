import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const token = localStorage.getItem('token');

    if (token) {
      // Si el usuario tiene un token válido, permite el acceso a la ruta
      return true;
    } else {
      // Si el usuario no tiene un token válido, redirige al inicio de sesión
      return this.router.parseUrl('/login');
    }
  }
}
