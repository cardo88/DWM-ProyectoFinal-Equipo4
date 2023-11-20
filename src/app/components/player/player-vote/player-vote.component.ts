import { Component, Input } from '@angular/core';
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

  constructor(
    private toastr: ToastrService,
    private _createQuestionService: CreateQuestionService) {

  }

  votePositive() {
    this._createQuestionService.addVotePositive(this.question_id,this.room_id).subscribe(data => {
      this.toastr.success('Voto +1 :)', 'Votación');
    })
  }

  voteNeutral() {
    this._createQuestionService.addVoteNeutral(this.question_id,this.room_id).subscribe(data => {
      this.toastr.success('Voto 0 :| ', 'Votación');
    })
  }

  voteNegative() {
    this._createQuestionService.addVoteNegative(this.question_id,this.room_id).subscribe(data => {
      this.toastr.success('Votado -1 :(', 'Votación');
    })
  }

}





/*

SE AGREGA A LA TRIVIA-GAME EL ATRIBUTO VOTES DE LA FORMA:

{
  "question": "TEST VOTE ¿Cuál es el río más largo del mundo?",
  "options": [
    "Amazonas",
    "Nilo",
    "Mississippi"
  ],
  "correctAnswer": "Amazonas",
  "fechaCreacion": {
    "$date": "2023-11-03T01:01:56.560Z"
  },
  "__v": 0,
  "isChecked": true,
  "votes": [
    {
      "0001": {
        "0": 0,
        "+1": 1,
        "-1": 1
      }
    },
    {
      "0002": {
        "0": 1,
        "+1": 15,
        "-1": 3
      }
    },
    {
      "0003": {
        "0": 9,
        "+1": 9,
        "-1": 9
      }
    }
  ]
}

*/