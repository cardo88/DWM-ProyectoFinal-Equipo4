import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketWebService } from 'src/app/services/socket-web.service';

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.css']
})
export class WaitingRoomComponent implements OnInit {
  
  roomCode: string = '';
  connectedUsersCount: number = 0;
  connectedUsers: string[] = [];

  constructor(private route: ActivatedRoute,
    private webSocketService: SocketWebService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.roomCode = params['codeNumber'];
      this.initWebSocket();
    });
  }


  /////////////ESTA MAL
  initWebSocket() {
    const socket = this.webSocketService.getSocket();

    socket.on('joinRoom', ({ nickname }: { nickname: string }) => {
      //Escucha el evento de que alguien ingreso
      this.connectedUsers.push(nickname);
      this.connectedUsersCount++;
      this.changeDetectorRef.detectChanges();
    });

    // Escucha cuando alguien sale pero eso es posible???? No deverian salir todos al finalizar?
    socket.on('disconnect', () => {
      this.connectedUsersCount--;
      this.changeDetectorRef.detectChanges();
    });
  }

}
