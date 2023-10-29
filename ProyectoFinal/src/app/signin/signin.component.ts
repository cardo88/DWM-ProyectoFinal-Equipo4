import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(){}

  signin(){
    console.log(this.email);
    console.log(this.password);
  }

}
