import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocketWebService } from 'src/app/services/socket-web.service';
import { CreateQuestionService } from 'src/app/services/create-question.service';

@Component({
  selector: 'app-waiting-results',
  templateUrl: './waiting-results.component.html',
  styleUrls: ['./waiting-results.component.css']
})
export class WaitingResultsComponent implements OnInit {

  roomCode: string = '';
  connectedUsers: number = 0;
  questions: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private webSocketService: SocketWebService,
    private questionService: CreateQuestionService,
    private router: Router
  ) {}
  
  ngOnInit(): void {

    const socket = this.webSocketService.getSocket();

    this.route.params.subscribe(params => {
      this.roomCode = params['codeNumber'];
      this.connectedUsers = params['connectedUsers'];
    });

    let playersFinishedCount = 0;

    socket.on('playerFinished', (data) => {
      console.log("Finish");

        playersFinishedCount++;
        console.log(this.connectedUsers);
        console.log(playersFinishedCount);
        if (playersFinishedCount == this.connectedUsers) {
          console.log('Todos los jugadores han terminado.');
          this.triviaData();
        }
    });

  }

  triviaData() {
    this.questionService.getQuestions().subscribe((data: any[]) => {
      
      this.questions = data.filter(question => {
        return question.votes.some((vote: { room: string; }) => vote.room === this.roomCode);
      });

    });
  }
}
