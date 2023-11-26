import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent {
  user = { name: '', email: '', password: '', passwordConfirm: '' };

  constructor(
    private authService: AuthService,
    private router: Router,) {}

  onSignup() {
    console.log(this.user)
    this.authService.signin(this.user).subscribe(
      (res) => {
        console.log(res)
        // Procesar la respuesta del servidor después de registrarse
        localStorage.setItem('token', res.token)
        this.router.navigate(['/api/user/signin']);
      },
      (err) => {
        console.log(err)
        // Manejar errores de registro
      }
    );
  }
}
