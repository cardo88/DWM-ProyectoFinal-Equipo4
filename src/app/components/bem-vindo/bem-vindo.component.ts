import { Component } from '@angular/core';
import { SocketWebService } from '../../services/socket-web.service';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.component.html',
  styleUrls: ['./bem-vindo.component.css']
})
export class BemVindoComponent {

  room: string = "";

  constructor(private socketService: SocketWebService) { }

  enviarPlay() {
    console.log("enviarPlay | room: "+ this.room);
    const socket = this.socketService.getSocket();
    let room = this.room
    //socket.emit('mensaje', { room, mensaje: 'Hola desde Angular'});
    socket.emit('roomStartPlay', { room, play: true });

  }
}
