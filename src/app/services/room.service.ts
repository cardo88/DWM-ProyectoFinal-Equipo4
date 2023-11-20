import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})

export class RoomService {

  private url = 'http://localhost:4000/api/rooms/';

  constructor(private http: HttpClient) { }

  createRoom(room: Room): Observable<any> {
    return this.http.post(this.url, room);
  }

  getCodeNumber(codeNumber: string): Observable<any> {
    return this.http.get(this.url + codeNumber);
  }

  deleteRoom(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  getRooms(): Observable<any> {
    console.log('entramo');
    return this.http.get(this.url);
  }

  getQuestions(codeNumber: string): Observable<any> {
    return this.http.get(this.url + "questions/" + codeNumber);
  }

}
