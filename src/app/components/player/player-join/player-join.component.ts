import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { empty } from 'rxjs';
import { Room } from '../../../models/room';
import { RoomService } from '../../../services/room.service';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService,
    private _roomservice: RoomService,
    // private aRouter: ActivatedRoute
  ) {
    this.joinForm = this.fb.group({
      nickname: ['', Validators.required],
      code: ['', [Validators.required, this.codeLengthValidate]],
    })
    //=start============================= Codigo Temporal===================================
    this.addRoomForm = this.fb.group({
      propousalId: ['', Validators.required],
      codeNumber: ['', Validators.required],
    })
    //=end============================== Codigo Temporal===================================
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

  //permite en CODE solo ingresar un codigo de hasta 4 digitos
  onlyNumbers(event: KeyboardEvent) {
    const pattern = /^[0-9]*$/;
    const inputChar = event.key;

    if (!pattern.test(inputChar) || this.player_code.length >= 4) {
      event.preventDefault();
    }
  }


  joinPlayer() {
    const newRoom: Room = {
      codeNumber: this.codeNumber,
      propousalId: this.propousalId,
    }

    console.log(newRoom);
    this._roomservice.createRoom(newRoom).subscribe(data => {
      this.toastr.success('Room registrada con exito!', 'Successful!');
      this.router.navigate(['/player-join']);
    })


  }




  //=start============================= Codigo Temporal===================================
  titulo2 = "TEMPORAL | crear una room | TEMPORAL"
  addRoomForm: FormGroup;
  propousalId: string = "";
  codeNumber: string = "";
  addRoom() {
    const newRoom: Room = {
      codeNumber: this.codeNumber,
      propousalId: this.propousalId,
    }

    console.log(newRoom);
    this._roomservice.createRoom(newRoom).subscribe(data => {
      this.toastr.success('Room registrada con exito!', 'Successful!');
      this.router.navigate(['/player-join']);
    })
  }
  //=end============================== Codigo Temporal===================================

}
