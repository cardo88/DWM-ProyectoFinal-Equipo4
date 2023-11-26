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

  constructor(
    private route: ActivatedRoute,
    private webSocketService: SocketWebService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.roomCode = params['codeNumber'];
    });
    this.getConnectedUsers();
    this.getConnectedUsersCount();
  }


  getConnectedUsersCount(): number {
    return this.webSocketService.getConnectedUsersCount();
  }

  getConnectedUsers(): string[] {
    return this.webSocketService.getConnectedUsers();
  }

}
