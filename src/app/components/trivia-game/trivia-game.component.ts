import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-trivia-game',
    templateUrl: './trivia-game.component.html',
    styleUrls: ['./trivia-game.component.css']
})
export class TriviaGameComponent {
    constructor(private router: Router) { }

    startGame() {
        // Redirigir al componente del juego o a la ruta correspondiente
        this.router.navigate(['/game']);
    }
}
