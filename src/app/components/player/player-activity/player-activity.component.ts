import { Component, Input } from '@angular/core';
import { Questions } from 'src/app/models/trivia-game';
import { CreateQuestionService } from 'src/app/services/create-question.service';
import { RoomService } from 'src/app/services/room.service';

// Import timer and Subscription
import { timer, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-player-activity',
  templateUrl: './player-activity.component.html',
  styleUrls: ['./player-activity.component.css']
})
export class PlayerActivityComponent {

  isLoading = true;
  noProductsFound = false;
  question = new Questions("0", ["0", "0"], "0");
  question_id: string = "";
  listQuestions: Questions[] = [];
  counter: number = 0;
  bottonSiguiente = true;
  //current_question_id: string = "655b308365ba681bcaa1c849"; // <<<<<<<<<<<<<<<< debe tomarse desde THIS.QUESTION
  @Input() room_id = "";

  timer_time_for_activity = 10;

  myTimerSub!: Subscription; //timer para descargar las consultas.


  constructor(
    private _createQuestionService: CreateQuestionService,
    private _roomService: RoomService,
    // private toastr: ToastrService,
    // private router: Router
  ) { }

  ngOnInit() {
    //this.current_question_id = this.question._id; //<<<<<<<<<<<<<<<<<<<<<<< debe tomarse desde THIS.QUESTION
    //this.timer_time_for_activity = this.question.time;  //<<<<<<<<<<<<<<<<<<<<<<< debe tomarse desde THIS.QUESTION
    // const ti = timer(1000, 1000);


    // // Complete the timer after 3 seconds (3000 ms)
    // this.myTimerSub = ti.pipe(
    //   takeUntil(timer(2000))
    // ).subscribe(t => {
    //   console.log("Tick");
    // });
    this.getQuestions();
    this.updateQuestion();   

  }

  getQuestions() {
    this.isLoading = true;

    this._roomService.getQuestions(this.room_id).subscribe(data => {
      this.listQuestions = data;
      this.isLoading = false;
      console.log("lista question 0: " + this.listQuestions[0].options);

      if (data.Length === 0) {
        this.noProductsFound = true;
      }
    });
    // this._createQuestionService.getQuestion(this.current_question_id).subscribe(data => { //pregunta hardcodeada...
    //   this.question = data;
    //   this.isLoading = false;

    //   if (data.Length === 0) {
    //     this.noProductsFound = true;
    //   }
    // });
  }

  updateQuestion() {
    console.log("llegue!");
    console.log(this.counter);
    this.question = this.listQuestions[this.counter];
    console.log("question: " + this.question.question);
    this.question_id = this.question._id!.toString();
    if (this.listQuestions.length > this.counter) {
      this.counter++;
    } else {
      this.bottonSiguiente = false;
    }
  }


  timer_running = true;
  timeoff(timeoff: boolean) {
    this.timer_running = timeoff;
    //console.log(this.platformIdSelected);
  }



}
