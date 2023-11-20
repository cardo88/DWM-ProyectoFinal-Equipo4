import { Component, Input } from '@angular/core';
import { Questions } from 'src/app/models/trivia-game';
import { CreateQuestionService } from 'src/app/services/create-question.service';

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
  question = new Questions("pepe", ["pepe", "pepe"], "pepe");
  current_question_id: string = "655b308365ba681bcaa1c849"; // <<<<<<<<<<<<<<<< debe tomarse desde THIS.QUESTION
  @Input() room_id = "";
  
  timer_time_for_activity = 10;

  myTimerSub!: Subscription; //timer para descargar las consultas.


  constructor(
    private _createQuestionService: CreateQuestionService,
    // private toastr: ToastrService,
    // private router: Router
  ) { }

  ngOnInit() {
    // Create a timer that emits values every second
    const ti = timer(1000, 1000);

    //this.current_question_id = this.question._id; //<<<<<<<<<<<<<<<<<<<<<<< debe tomarse desde THIS.QUESTION
    //this.timer_time_for_activity = this.question.time;  //<<<<<<<<<<<<<<<<<<<<<<< debe tomarse desde THIS.QUESTION

    // Complete the timer after 3 seconds (3000 ms)
    this.myTimerSub = ti.pipe(
      takeUntil(timer(2000))
    ).subscribe(t => {
      console.log("Tick");
      this.getQuestions();
    });
  }

  getQuestions() {
    this.isLoading = true;
    this._createQuestionService.getQuestion(this.current_question_id).subscribe(data => { //pregunta hardcodeada...
      this.question = data;
      this.isLoading = false;

      if (data.Length === 0) {
        this.noProductsFound = true;
      }
    });
  }

  timer_running = true;
  timeoff(timeoff:boolean) {
    this.timer_running = timeoff;
    //console.log(this.platformIdSelected);
  }
}
