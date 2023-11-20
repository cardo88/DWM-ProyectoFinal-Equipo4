import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
  user = { email: '', password: '' };

  constructor(
    private authService: AuthService,
    private router: Router,) {}

 /*   
    ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
*/

  onLogin() {
    const { email, password } = this.user;

    this.authService.login(this.user).subscribe(
      (res) => {
        // Procesar la respuesta del servidor después de iniciar sesión
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/new-room']);
        
      },
      (err) => {
        console.log(err)
      }
    );
  }
}
