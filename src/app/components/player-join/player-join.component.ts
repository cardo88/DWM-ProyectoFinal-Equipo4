import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { empty } from 'rxjs';
import { Room } from '../../models/room';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-player-join',
  templateUrl: './player-join.component.html',
  styleUrls: ['./player-join.component.css']
})
export class PlayerJoinComponent {

  titulo = 'Unirse a una partida';

  joinForm: FormGroup;
  constructor(private fb: FormBuilder,
     private router: Router,
    // private toastr: ToastrService,
     private _roomservice: RoomService,
    // private aRouter: ActivatedRoute
  ) {
    this.joinForm = this.fb.group({
      nickname: ['', Validators.required],
      code: ['', [Validators.required, this.codeLengthValidate]],
    })
  }
  //permite en CODE solo ingresar un codigo de hasta 4 digitos.
  codeLengthValidate(control: any) {
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

  addRoom() {
    const Room: Room = {
      codeNumber: this.player_nickname,
      propousalId: "65441fe0a3351d48e0c073cf",
    }

    console.log(Room);
    this._roomservice.createRoom(Room).subscribe(data => {
      this.toastr.success('La pregunta fue registrado con exito!', 'La pregunta fue Registrado!');
      this.router.navigate(['/player-join']);
    })
  }


}
