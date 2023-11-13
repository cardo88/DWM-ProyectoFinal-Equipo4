import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Questions } from 'src/app/models/trivia-game';
import { CreateQuestionService } from 'src/app/services/create-question.service';
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'app-questions-modal',
    templateUrl: './questions-modal.component.html',
    styleUrls: ['./questions-modal.component.css']
})
export class QuestionsModalComponent implements OnInit {

    listQuestions: Questions[] = [];
    noProductsFound = false;
    isChecked = false;

    constructor(
        private _createQuestionService: CreateQuestionService,
        private http: HttpClient,
        private cdr: ChangeDetectorRef,
    ) { }    

    async ngOnInit() {
        try {
            this.listQuestions = await firstValueFrom(this._createQuestionService.getQuestions());
            this.noProductsFound = this.listQuestions.length === 0;
        } catch (error) {
            console.error('Error al obtener las preguntas:', error);
        }
    }

    handleChange(question: Questions) {
        question.isChecked = !question.isChecked;

        if (question._id) {
            this._createQuestionService.checkbox(question._id, question.isChecked).subscribe(updatedQuestion => {
                // Manejar la respuesta si es necesario
            });
        } else {
            console.error('El _id de la pregunta es undefined');
        }
    }
}