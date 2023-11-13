import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SocketWebService } from '../../../services/socket-web.service';
import { io } from 'socket.io-client';
import { ElementRef, ViewChild } from '@angular/core';



@Component({
  selector: 'app-player-common',
  templateUrl: './player-common.component.html',
  styleUrls: ['./player-common.component.css']
})
export class PlayerCommonComponent implements OnInit {
  mensaje: string = '';
  room: string = "";
  nickname: string = "";

  constructor(private socketService: SocketWebService) {}

  ngOnInit() {
    const socket = this.socketService.getSocket();

    socket.on('joinRoom', (data) => {
      // "data" esta rellenado en backend-> index.js
      this.mensaje = 'Socket.id ' + data.socketid + ' | Nickname: ' + data.nickname + ' | Sala: ' + data.room;
      console.log(this.mensaje);
      this.nickname = data.nickname;
      this.room = data.room;
    });
    
    socket.on('mensaje', (data) => {
      console.log('mensaje:', data);
      this.mensaje = data.mensaje;
    });
  }

  enviarMensaje() {
    const socket = this.socketService.getSocket();
    socket.emit('mensaje', { mensaje: 'Hola desde Angular' });
  }
}

