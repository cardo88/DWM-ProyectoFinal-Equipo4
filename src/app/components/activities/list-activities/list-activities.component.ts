import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreateQuestionService } from '../../../services/create-question.service'
import { Questions } from 'src/app/models/trivia-game';

@Component({
    selector: 'app-list-activities',
    templateUrl: './list-activities.component.html',
    styleUrls: ['./list-activities.component.css']
})
export class ListActivitiesComponent implements OnInit {

    constructor(
        private toastr: ToastrService,
        private router: Router,
        private _createQuestionService: CreateQuestionService,
    ) { }

    ngOnInit(): void {

    }

    redirectToTriviaConfig() {
        this.router.navigate(['/trivia-game']);
    }
}