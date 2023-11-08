import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Questions } from 'src/app/models/trivia-game';
import { CreateQuestionService } from 'src/app/services/create-question.service';

// Import timer and Subscription
import { timer, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-list-trivia',
    templateUrl: './list-trivia.component.html',
    styleUrls: ['./list-trivia.component.css']
})
export class ListTriviaComponent implements OnInit, OnDestroy {

    listQuestions: Questions[] = [];
    myTimerSub!: Subscription;// Declare myTimerSub here
    isLoading = true;
    noProductsFound = false;

    constructor(
        private _createQuestionService: CreateQuestionService,
        private toastr: ToastrService,
        private router: Router
    ) {}

    ngOnInit() {
        // Create a timer that emits values every second
        const ti = timer(1000, 1000);

        // Complete the timer after 3 seconds (3000 ms)
        this.myTimerSub = ti.pipe(
            takeUntil(timer(2000))
        ).subscribe(t => {
            console.log("Tick");
            this.getQuestions();
        });
    }

    ngOnDestroy() {
        this.myTimerSub.unsubscribe();
    }

    getQuestions() {
        this.isLoading = true;
        this._createQuestionService.getQuestions().subscribe(data => {
            this.listQuestions = data;
            this.isLoading = false;

            if (this.listQuestions.length === 0) {
                this.noProductsFound = true;
            }
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
