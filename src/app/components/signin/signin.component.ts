import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  user = { email: '', password: '' };

  constructor(private authService: AuthService) {}

  onSignup() {
    this.authService.signin(this.user).subscribe(
      (response) => {
        // Procesar la respuesta del servidor después de registrarse
      },
      (error) => {
        // Manejar errores de registro
      }
    );
  }
}
