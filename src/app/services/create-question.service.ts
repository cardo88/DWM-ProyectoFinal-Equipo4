import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questions } from '../models/trivia-game';

@Injectable({
    providedIn: 'root'
})
export class CreateQuestionService {

    private url = 'http://localhost:4000/api/questions/';

    constructor(private http: HttpClient) { }

    getQuestions(): Observable<any> {
        console.log('entramo');
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

    checkbox(id: number, isChecked: boolean): Observable<any> {
        const url = `${this.url}${id}`;
        const body = { isChecked };

        return this.http.put(url, body);
    }

    addVotePositive(id: string, room: string): Observable<any> {
        const body = { room };
        return this.http.put(`${this.url}${id}/vote/positive`, body);
    }
    
    addVoteNeutral(id: string, room: string): Observable<any> {
        const body = { room };
        return this.http.put(`${this.url}${id}/vote/neutral`, body);
    }

    addVoteNegative(id: string, room: string): Observable<any> {
        const body = { room };
        return this.http.put(`${this.url}${id}/vote/negative`, body);
    }
}
