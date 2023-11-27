import { Component, Input, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { CreateQuestionService } from '../../../services/create-question.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-player-vote',
  templateUrl: './player-vote.component.html',
  styleUrls: ['./player-vote.component.css']
})
export class PlayerVoteComponent {

  @Input() question_id = "";
  @Input() room_id = "";
  @Input() nextQuestion = true;

  @Output() votado = new EventEmitter<boolean>();


  constructor(
    private toastr: ToastrService,
    private _createQuestionService: CreateQuestionService) {

  }


  // En el componente hijo (PlayerVoteComponent)
  ngOnChanges(changes: SimpleChanges) {
    if (changes['question_id'] && changes['question_id'].currentValue !== changes['question_id'].previousValue) {
      // Cambiar 'nextQuestion' a true cuando 'question_id' cambia
      this.nextQuestion = true;
    }
  }


  votePositive() {
    if (!this.nextQuestion) {
      this.toastr.warning('Esperar a la siguiente pregunta', 'Votación');
      return;
    } else {
      this._createQuestionService.addVotePositive(this.question_id, this.room_id).subscribe(data => {
        this.toastr.success('Voto +1 :)', 'Votación');
        this.nextQuestion = false;
        this.votadoEvent(true);
      })
    }
  }

  voteNeutral() {
    if (!this.nextQuestion) {
      this.toastr.warning('Esperar a la siguiente pregunta', 'Votación');
      return;
    } else {
      this._createQuestionService.addVoteNeutral(this.question_id, this.room_id).subscribe(data => {
        this.toastr.success('Voto 0 :| ', 'Votación');
        this.nextQuestion = false;
        this.votadoEvent(true);
      })
    }
  }

  voteNegative() {
    if (!this.nextQuestion) {
      this.toastr.warning('Esperar a la siguiente pregunta', 'Votación');
      return;
    } else {
      this._createQuestionService.addVoteNegative(this.question_id, this.room_id).subscribe(data => {
        this.toastr.success('Votado -1 :(', 'Votación');
        this.nextQuestion = false;
        this.votadoEvent(true);
      })
    }
  }

  votadoEvent(value: boolean) {
    this.votado.emit(value);
  }

}