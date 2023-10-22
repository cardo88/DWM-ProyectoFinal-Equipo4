import { Component } from '@angular/core';

@Component({
    selector: 'app-trivia-game',
    templateUrl: './trivia-game.component.html',
    styleUrls: ['./trivia-game.component.css']
})
export class TriviaGameComponent {

    questions: Question[] = [];
    answers: (string | null)[] = []; // Un arreglo para almacenar las respuestas del usuario
    showResults = false; // Variable para mostrar/ocultar los resultados
    results: any[] = [];

    selectAnswer(questionIndex: number, selectedOption: string) {
        // Almacenar la respuesta del usuario para la pregunta actual
        this.answers[questionIndex] = selectedOption;
    }

    checkAnswers() {
        // Lógica para comprobar las respuestas y calcular los resultados
        // Puedes comparar las respuestas del usuario con las respuestas correctas aquí
        // Llena un arreglo 'results' con objetos que indican qué preguntas son correctas/incorrectas
        this.showResults = true; // Mostrar los resultados
    }

}
