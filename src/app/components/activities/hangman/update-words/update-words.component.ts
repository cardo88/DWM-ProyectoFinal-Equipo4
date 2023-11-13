import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Words } from '../../../../models/hangman-game';
import { HangmanGameService } from '../../../../services/hangman-game.service';


@Component({
  selector: 'app-update-words',
  templateUrl: './update-words.component.html',
  styleUrls: ['./update-words.component.css']
})
export class UpdateWordsComponent implements OnInit {

    @Output() myEvent = new EventEmitter<string>();
    word: Words | null = null;
    isFormValid: boolean = false;
    hangmanForm: FormGroup;
    titulo = 'Update Word';
    id: string | null;
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private toastr: ToastrService,
        private _hangmanService: HangmanGameService,
        private aRouter: ActivatedRoute) {
        this.hangmanForm = this.fb.group({
            word: ['', Validators.required],
            correctWord: ['', Validators.required],
        })
        this.id = this.aRouter.snapshot.paramMap.get('id');

        this.hangmanForm.valueChanges.subscribe(() => {
            this.isFormValid = this.hangmanForm.valid;
            console.log('isFormValid:', this.isFormValid);
        });
    }

    ngOnInit(): void {
        this.updateWord();
    }

    getWord(id: string) {
        this._hangmanService.getWord(id).subscribe(data => {
            this.word = data;
        });
    }

    updateWord() {
        if (this.id !== null) {
            this._hangmanService.getWord(this.id).subscribe(data => {
                this.hangmanForm.setValue({
                    word: data.word,
                    correctWord: data.correctWord,
                });
            });
        }
    }

    saveWord() {
        if (this.id !== null) {
            const updatedData = {
                word: this.hangmanForm.get('word')?.value,
                correctWord: this.hangmanForm.get('correctWord')?.value,
            };

            this._hangmanService.updateWord(this.id, updatedData).subscribe(response => {
                this.toastr.success('Word updated successfully');
                this.router.navigate(['/words-list']);
            });
        }
    }
}








