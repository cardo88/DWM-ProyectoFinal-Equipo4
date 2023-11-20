import { Component, OnInit } from '@angular/core';
import { Questions } from 'src/app/models/trivia-game';
import { CreateQuestionService } from 'src/app/services/create-question.service';



@Component({
    selector: 'app-questions-for-game',
    templateUrl: './questions-for-game.component.html',
    styleUrls: ['./questions-for-game.component.css']
})
export class QuestionsForGameComponent implements OnInit {

    listQuestions: Questions[] = [];
    question: Questions | undefined;
    selectedOptionIndex: number | undefined;
    optionSelected: number | undefined;

    constructor(private _createQuestionService: CreateQuestionService) { }

    ngOnInit() {
        this.getQuestions();
    }

    getQuestions() {
        this._createQuestionService.getQuestions().subscribe(data => {
            this.listQuestions = data;
            if (this.listQuestions.length > 0) {
                this.question = this.listQuestions[0];
            }
        });
    }

    isOptionCorrect(index: number): boolean {
        if (this.question && this.question.correctAnswer && this.question.options && this.question.options[index]) {
            return this.question.correctAnswer === this.question.options[index];
        }
        return false; // Otra opción es retornar undefined si así se requiere
    }

    selectOption(index: number) {
        // Verificar si ya hay una opción seleccionada
        if (this.optionSelected === undefined) {
            this.optionSelected = index;
        }
    }

    onHover(index: number) {
        this.selectedOptionIndex = index;
    }

    onMouseLeave() {
        this.selectedOptionIndex = undefined;
    }
}
