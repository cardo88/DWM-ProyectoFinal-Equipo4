import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router
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
      if (data.nickname != 'SalaAdmin'){
        this.nicknames.push(data.nickname);
      }
      this.roomCode = data.room;
    });
   
  }

  enviarPlay() {
    console.log("enviarPlay | room: "+ this.roomCode);
    const socket = this.webSocketService.getSocket();
    let room = this.roomCode
    //socket.emit('mensaje', { room, mensaje: 'Hola desde Angular'});
    socket.emit('roomStartPlay', { room, play: true });

    this.router.navigate(['/waiting-results', this.roomCode, this.nicknames.length]);
  }

}
