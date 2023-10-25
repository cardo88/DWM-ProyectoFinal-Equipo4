import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questions } from '../models/trivia-game';

import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CreateQuestionService {

    private url = 'http://localhost:4000/api/question';

    constructor(private http: HttpClient) { }

    getQuestions(): Observable<any> {
        return this.http.get(this.url);
    }

    deleteQuestion(id: string): Observable<any> {
        return this.http.delete(this.url + id);
    }

    saveQuestion(question: Questions): Observable<any> {
        return this.http.post(this.url, question);
    }

    getQuestion(id: string): Observable<any> {
        return this.http.get(this.url + id);
    }

    updateQuestion(id: string, question: Questions): Observable<any> {
        return this.http.put(this.url + id, question);
    }
}
