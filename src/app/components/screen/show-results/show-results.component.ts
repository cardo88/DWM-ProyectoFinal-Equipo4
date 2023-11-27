import { Component, OnInit } from '@angular/core';
import { WaitingResultsComponent } from '../waiting-results/waiting-results.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.css']
})
export class ShowResultsComponent implements OnInit {

  roomCode: string = '';
  questions: any[] = [];

  constructor(
    private waitingResults: WaitingResultsComponent,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.roomCode = params['roomCode'];
      this.questions = JSON.parse(params['questions']);
    });
  }

}
