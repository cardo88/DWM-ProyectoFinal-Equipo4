import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../../../models/room';
import { RoomService } from '../../../services/room.service';
import { ToastrService } from 'ngx-toastr';
import { SocketWebService } from '../../../services/socket-web.service';

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
    private socketService: SocketWebService,
    private route: ActivatedRoute,
  ) {
    this.joinForm = this.fb.group({
      nickname: ['', Validators.required],
      code: ['', [Validators.required, this.codeLengthValidate]],
    })
    //=start============================= Codigo Temporal===================================
    // this.addRoomForm = this.fb.group({
    //   propousalId: ['', Validators.required],
    //   codeNumber: ['', Validators.required],
    // })
    //=end============================== Codigo Temporal===================================
  }

  //permite en CODE solo ingresar un codigo de hasta 4 digitos.
  codeLengthValidate(control: any) {
    if (control.value && control.value.length !== 4) {
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
    this._roomservice.getCodeNumber(this.player_code).subscribe(
      data => {
        if (data.length === 0) {
          this.toastr.error('No existe sala con ese código', 'Error');
        } else {
          const socket = this.socketService.getSocket();
          const room = this.player_code;
          const nickname = this.player_nickname;
          socket.emit('joinRoom', { room,nickname });
          this.toastr.success('Ingreso a la sala exitoso!', '¡Éxito!');
          this.router.navigate(['player-room', room]);
        }
      }
    );
  }




  //=start============================= Codigo Temporal===================================
  // titulo2 = "TEMPORAL | crear una room | TEMPORAL"
  // addRoomForm: FormGroup;
  // propousalId: string = "";
  // codeNumber: string = "";
  // addRoom() {
  //   const newRoom: Room = {
  //     codeNumber: this.codeNumber,
  //     propousalId: this.propousalId,
  //   }

  //   console.log(newRoom);
  //   this._roomservice.createRoom(newRoom).subscribe(data => {
  //     this.toastr.success('Room registrada con exito!', 'Successful!');
  //     this.router.navigate(['/player-join']);
  //   })
  // }
  //=end============================== Codigo Temporal===================================

}
