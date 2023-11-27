import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Questions } from 'src/app/models/trivia-game';
import { CreateQuestionService } from 'src/app/services/create-question.service';


@Component({
    selector: 'app-questions-for-game',
    templateUrl: './questions-for-game.component.html',
    styleUrls: ['./questions-for-game.component.css']
})
export class QuestionsForGameComponent implements OnChanges {

    @Input() question = new Questions("0", ["0", "0"], "0");

    selectedOptionIndex: number | undefined;
    optionSelected: number | undefined;

    constructor(private _createQuestionService: CreateQuestionService) { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['question'] && changes['question'].currentValue) {
            this.clearSelection();
        }
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

    clearSelection() {
        this.optionSelected = undefined;
        this.selectedOptionIndex = undefined;
    }
}
