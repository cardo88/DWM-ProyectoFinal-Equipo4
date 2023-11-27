import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketWebService } from 'src/app/services/socket-web.service';

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.css']
})
export class WaitingRoomComponent implements OnInit {

  roomCode: string = '';
  nicknames: string[] = [];
  mensaje : string ='';

  constructor(
    private route: ActivatedRoute,
    private webSocketService: SocketWebService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.roomCode = params['codeNumber'];
    });

    const socket = this.webSocketService.getSocket();

    socket.on('joinRoom', (data) => {
      // "data" esta rellenado en backend-> index.js
      this.mensaje = 'Socket.id ' + data.socketid + ' | Nickname: ' + data.nickname + ' | Sala: ' + data.room;
      console.log(this.mensaje);
      this.nicknames.push(data.nickname);
      this.roomCode = data.room;
    });
   
  }

  mandarMsj(){
    const socket2 = this.webSocketService.getSocket();
    socket2.on('mensaje', (data) => {
      console.log('mensaje:', data);
      this.mensaje = data.mensaje;
  });
  }


}
