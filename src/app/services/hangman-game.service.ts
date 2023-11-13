import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Words } from '../models/hangman-game';

@Injectable({
    providedIn: 'root'
})
export class HangmanGameService {

    private url = 'http://localhost:4000/api/hangman/';

    constructor(private http: HttpClient) { }

    getWords(): Observable<any> {
        console.log('entramo');
        return this.http.get(this.url);
    }

    deleteWord(id: string): Observable<any> {
        return this.http.delete(this.url + id);
    }

    saveWord(question: Words): Observable<any> {
        return this.http.post(this.url, question);
    }

    getWord(id: string): Observable<any> {
        return this.http.get(this.url + id);
    }

    updateWord(id: string, question: Words): Observable<any> {
        return this.http.put(this.url + id, question);
    }
}
