import { Component, Input } from '@angular/core';
import { Questions } from 'src/app/models/trivia-game';
import { CreateQuestionService } from 'src/app/services/create-question.service';
import { RoomService } from 'src/app/services/room.service';

//timer_2
import { OnInit } from '@angular/core';
import { interval } from 'rxjs';

// Import timer and Subscription
import { timer, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SocketWebService } from 'src/app/services/socket-web.service';

@Component({
  selector: 'app-player-activity',
  templateUrl: './player-activity.component.html',
  styleUrls: ['./player-activity.component.css']
})
export class PlayerActivityComponent {


  //timer_2
  minutes: number = 0;
  seconds: number = 0;
  milliseconds: number = 0;
  totalMilliseconds: number = 0;

  //variables para cargar Questions
  isLoading = true;
  noQuestionFound = false;
  counter: number = 0;

  //variables menejo de Questions
  question = new Questions("0", ["0", "0"], "0");
  question_id: string = "";
  listQuestions: Questions[] = [];
  nextQuestion: boolean = true;


  //variable para botton 
  bottonSiguiente = true;
  bottonText = "Siguiente pregunta";
  votedQuestion = false;

  //variable para room
  @Input() room_id = "";
  @Input() nickname = "";

  //variable para timer
  time = 20000; // Por ejemplo, 1 minuto (60000 milisegundos)

  constructor(
    private _createQuestionService: CreateQuestionService,
    private _roomService: RoomService,
    private socketService: SocketWebService
  ) {
  }

  ngOnInit() {

    this.getQuestions();

    //timer_2
    this.minutes = 0;
    this.seconds = 0;
    this.milliseconds = 0;
    this.totalMilliseconds = this.time; // Por ejemplo, 1 minuto (60000 milisegundos)
    this.startStopwatch();

  }

  //timer_2
  startStopwatch() {
    interval(10).subscribe(() => {
      this.totalMilliseconds -= 10;

      if (this.totalMilliseconds >= 0) {
        this.minutes = Math.floor(this.totalMilliseconds / 60000);
        this.seconds = Math.floor((this.totalMilliseconds % 60000) / 1000);
        this.milliseconds = Math.floor((this.totalMilliseconds % 1000) / 10);
      } else {
        this.timeoff(false);
      }
    });
  }


  getQuestions() {
    this.isLoading = true;
    this._roomService.getQuestions(this.room_id).subscribe(data => {
      this.listQuestions = data;
      this.updateQuestion();
      if (data.length === 0) {
        this.noQuestionFound = true;
      }
    });
  }

  updateQuestion() {
    if (this.listQuestions.length >= this.counter + 1) {
      this.question = this.listQuestions[this.counter];
      this.question_id = this.question._id!.toString();
      this.counter++;
      this.isLoading = false;
      this.totalMilliseconds = this.time;
      this.nextQuestion = true;
    } else {
      this.bottonSiguiente = false;
      this.bottonText = "No hay más preguntas";

      const socket = this.socketService.getSocket();
      socket.emit('playerFinished', { room : this.room_id, nickname : this.nickname});
    }
  };



  timer_running = true;
  timeoff(timeoff: boolean) {
    this.timer_running = timeoff;
  }


}
