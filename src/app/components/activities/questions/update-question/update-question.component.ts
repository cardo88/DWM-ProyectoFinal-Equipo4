import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Questions } from '../../../../models/trivia-game';
import { CreateQuestionService } from '../../../../services/create-question.service';


@Component({
    selector: 'app-update-question',
    templateUrl: './update-question.component.html',
    styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

    @Output() myEvent = new EventEmitter<string>();
    question: Questions | null = null;
    isFormValid: boolean = false;
    triviaForm: FormGroup;
    titulo = 'Update Question';
    id: string | null;
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private toastr: ToastrService,
        private _createQuestionService: CreateQuestionService,
        private aRouter: ActivatedRoute) {
        this.triviaForm = this.fb.group({
            question: ['', Validators.required],
            options: ['', Validators.required],
            correctAnswer: ['', Validators.required],
        })
        this.id = this.aRouter.snapshot.paramMap.get('id');

        this.triviaForm.valueChanges.subscribe(() => {
            this.isFormValid = this.triviaForm.valid;
            console.log('isFormValid:', this.isFormValid);
        });
    }

    ngOnInit(): void {
        this.updateQuestion();
    }

    getQuestion(id: string) {
        this._createQuestionService.getQuestion(id).subscribe(data => {
            this.question = data;
        });
    }

    updateQuestion() {
        if (this.id !== null) {
            this._createQuestionService.getQuestion(this.id).subscribe(data => {
                this.triviaForm.setValue({
                    question: data.question,
                    options: data.options,
                    correctAnswer: data.correctAnswer,
                });
            });
        }
    }

    saveQuestion() {
        if (this.id !== null) {
            const updatedData = {
                question: this.triviaForm.get('question')?.value,
                options: this.triviaForm.get('options')?.value,
                correctAnswer: this.triviaForm.get('correctAnswer')?.value,
            };

            this._createQuestionService.updateQuestion(this.id, updatedData).subscribe(response => {
                this.toastr.success('Question updated successfully');
                this.router.navigate(['/list-trivia']);
            });
        }
    }
}








