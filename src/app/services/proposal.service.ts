import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  private url = 'http://localhost:4000/api/proposals/';

  constructor(private http: HttpClient) {}

  getProposals() {
    return this.http.get(`${this.url}`);
  }

  getProposalDetails(id: string): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  deleteProposal(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

}
