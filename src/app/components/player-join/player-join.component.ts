import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { empty } from 'rxjs';

@Component({
  selector: 'app-player-join',
  templateUrl: './player-join.component.html',
  styleUrls: ['./player-join.component.css']
})
export class PlayerJoinComponent {

  titulo = 'Unirse a una partida';

  joinForm: FormGroup;
  constructor(private fb: FormBuilder,
    // private router: Router,
    // private toastr: ToastrService,
    // private _productService: ProductService,
    // private aRouter: ActivatedRoute
  ) {
    this.joinForm = this.fb.group({
      nickname: ['', Validators.required],
      code: ['', [Validators.required,this.codeLengthValidate]],
    })
  }
  //permite en CODE solo ingresar un codigo de hasta 4 digitos.
  codeLengthValidate(control:any) {
    if (control.value && control.value.length !== 4) {
      console.log(control.value);
      return { 'rightLenght': true };
    }
    return null;
  }



  player_nickname: string = "";
  player_code: string = "";
  room_code: string = "4444"; //codigo ejemplo para aceptar la conexión

  //permite en CODE solo ingresar un codigo de hasta 4 digitos
  onlyNumbers(event: KeyboardEvent) {
    const pattern = /^[0-9]*$/;
    const inputChar = event.key;

    if (!pattern.test(inputChar) || this.player_code.length >= 4) {
      event.preventDefault();
    }
  }


  joinPlayer() {

  }


}
