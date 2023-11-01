import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Questions } from '../../models/trivia-game';
import { CreateQuestionService } from '../../services/create-question.service';


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
        const id: any = this.aRouter.snapshot.params['id'];
        this.getQuestion(id);
    }

    getQuestion(id: string) {
        this._createQuestionService.getQuestion(id).subscribe(data => {
            console.log('data: ', data);
            this.question = data;
        });
    }

    updateQuestion() {
        const id: any = this.aRouter.snapshot.params['id'];
        this._createQuestionService.getQuestion(id).subscribe(data => {
            console.log('data: ', data);
            this.question = data;
    
            // Set the form values when the data is available
            this.triviaForm.setValue({
                question: data.question,
                options: data.options,
                correctAnswer: data.correctAnswer,
            });
        });
    }    
}
