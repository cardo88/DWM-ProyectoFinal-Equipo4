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

  constructor(private socketService: SocketWebService) {}

  ngOnInit() {
    const socket = this.socketService.getSocket();

    socket.on('evento', (data) => {
      console.log('Mensaje recibido:', data);
      this.mensaje = data.mensaje;
    });
  }

  enviarMensaje() {
    const socket = this.socketService.getSocket();
    socket.emit('evento', { mensaje: 'Hola desde Angular' });
  }
}

