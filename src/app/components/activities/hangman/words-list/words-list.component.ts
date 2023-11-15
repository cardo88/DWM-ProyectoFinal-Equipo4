import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Words } from 'src/app/models/hangman-game';
import { HangmanGameService } from 'src/app/services/hangman-game.service';

// Import timer and Subscription
import { timer, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-words-list',
    templateUrl: './words-list.component.html',
    styleUrls: ['./words-list.component.css']
})
export class WordsListComponent implements OnInit, OnDestroy {

    wordsList: Words[] = [];
    myTimerSub!: Subscription;// Declare myTimerSub here
    isLoading = true;
    noWordsFound = false;

    constructor(
        private _hangmanService: HangmanGameService,
        private toastr: ToastrService,
        private router: Router
    ) { }

    ngOnInit() {
        // Create a timer that emits values every second
        const ti = timer(1000, 1000);

        // Complete the timer after 3 seconds (3000 ms)
        this.myTimerSub = ti.pipe(
            takeUntil(timer(2000))
        ).subscribe(t => {
            console.log("Tick");
            this.getWords();
        });
    }

    ngOnDestroy() {
        this.myTimerSub.unsubscribe();
    }

    getWords() {
        this.isLoading = true;
        this._hangmanService.getWords().subscribe(data => {
            this.wordsList = data;
            this.isLoading = false;

            if (this.wordsList.length === 0) {
                this.noWordsFound = true;
            }
        });
    }

    deleteWord(id: any) {
        this._hangmanService.deleteWord(id).subscribe(data => {
            this.toastr.error('El producto fue eliminado con éxito', 'Producto Eliminado');
            this.getWords();
        });
    }

    redirectToTriviaConfig() {
        this.router.navigate(['/trivia-game']);
    }
}

