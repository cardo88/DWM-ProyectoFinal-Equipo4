import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Words } from '../../../../models/hangman-game';
import { HangmanGameService } from '../../../../services/hangman-game.service';
@Component({
    selector: 'app-create-word',
    templateUrl: './create-word.component.html',
    styleUrls: ['./create-word.component.css']
})
export class CreateWordComponent implements OnInit {

    @Output() myEvent = new EventEmitter<string>();

    isFormValid: boolean = false;
    hangmanForm: FormGroup;
    titulo = 'Create Word';
    id: string | null;
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private toastr: ToastrService,
        private _hangmanService: HangmanGameService,
        private aRouter: ActivatedRoute) {
        this.hangmanForm = this.fb.group({
            word: ['', Validators.required],
            correctAnswer: ['', Validators.required],
        })
        this.id = this.aRouter.snapshot.paramMap.get('id');

        this.hangmanForm.valueChanges.subscribe(() => {
            this.isFormValid = this.hangmanForm.valid;
            console.log('isFormValid:', this.isFormValid);
        });
    }

    ngOnInit(): void {
    }


    addWord() {
        const WORD: Words = {
            word: this.hangmanForm.get('word')?.value,
            correctAnswer: this.hangmanForm.get('correctAnswer')?.value,
        }

        console.log(WORD);
        this._hangmanService.saveWord(WORD).subscribe(data => {
            this.toastr.success('La palabra fue registrado con exito!', 'La palabra fue Registrado!');
            this.router.navigate(['/words-list']);
        })
    }
}
