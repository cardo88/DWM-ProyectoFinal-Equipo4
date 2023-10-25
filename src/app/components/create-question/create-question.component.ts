import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Questions } from '../../models/trivia-game';
import { CreateQuestionService } from '../../services/create-question.service';

@Component({
    selector: 'app-create-question',
    templateUrl: './create-question.component.html',
    styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

    triviaForm: FormGroup;
    titulo = 'Crear Pregunta';
    id: string | null;
    constructor(private fb: FormBuilder,
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
    }

    ngOnInit(): void {
        //this.addQuestion();
    }

    addQuestion() {

        const QUESTION: Questions = {
            question: this.triviaForm.get('question')?.value,
            options: this.triviaForm.get('options')?.value,
            correctAnswer: this.triviaForm.get('correctAnswer')?.value,
        }

        console.log(QUESTION);
        this._createQuestionService.saveQuestion(QUESTION).subscribe(data => {
            this.toastr.success('La pregunta fue registrado con exito!', 'La pregunta fue Registrado!');
            this.router.navigate(['/']);
        })
    }
}
