import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(
    private authService: AuthService,
    private router: Router,) {

    }
  onLogout() {
    this.authService.logout(); // Llama al método logout del servicio AuthService
    this.router.navigate(['/login']); // Redirige al usuario a la página de inicio de sesión
  }

}
