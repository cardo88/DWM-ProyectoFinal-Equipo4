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

  getProposalId(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  getLastProposalId(): Observable<any> {
    return this.http.get(`${this.url}last-id`);
  }

  deleteProposal(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveProposal(proposalData: any): Observable<any> {
    return this.http.post(this.url, proposalData);
  }

}
