import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Questions } from 'src/app/models/trivia-game';
import { CreateQuestionService } from 'src/app/services/create-question.service';

@Component({
    selector: 'app-list-trivia',
    templateUrl: './list-trivia.component.html',
    styleUrls: ['./list-trivia.component.css']
})
export class ListTriviaComponent implements OnInit {

    listQuestions: Questions[] = [];

    constructor(
        private _createQuestionService: CreateQuestionService, 
        private toastr: ToastrService,
        private router: Router
        ) { }

    ngOnInit(): void {
        this.getQuestions();
    }

    getQuestions() {
        this._createQuestionService.getQuestions().subscribe(data => {
            this.listQuestions = data;
        });
    }

    deleteProduct(id: any) {        
        this._createQuestionService.deleteQuestion(id).subscribe(data => {
        this.toastr.error('El producto fue eliminado con éxito', 'Producto Eliminado');
        this.getQuestions();
        });
    }

    redirectToTriviaConfig() {
        this.router.navigate(['/trivia-game']);
    }
}
