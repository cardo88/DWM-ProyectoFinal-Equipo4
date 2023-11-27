import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketWebService } from 'src/app/services/socket-web.service';

@Component({
  selector: 'app-waiting-results',
  templateUrl: './waiting-results.component.html',
  styleUrls: ['./waiting-results.component.css']
})
export class WaitingResultsComponent implements OnInit {

  roomCode: string = '';

  constructor(
    private route: ActivatedRoute,
    private webSocketService: SocketWebService
  ) { }
  
  ngOnInit(): void {

    const socket = this.webSocketService.getSocket();

    this.route.params.subscribe(params => {
      this.roomCode = params['codeNumber'];
    });

  }
  
}
