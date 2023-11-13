import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = { email: '', password: '' };

  constructor(private authService: AuthService) {}
    ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onLogin() {
    const { email, password } = this.user;

    this.authService.login(this.user).subscribe(
      (response) => {
        // Procesar la respuesta del servidor después de iniciar sesión
      },
      (error) => {
        // Manejar errores de inicio de sesión
      }
    );
  }
  
}
