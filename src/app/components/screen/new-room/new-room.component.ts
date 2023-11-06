import { Component, OnInit } from '@angular/core';
import { ProposalService } from '../../../services/proposal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.component.html',
  styleUrls: ['./new-room.component.css']
})
export class NewRoomComponent implements OnInit {

  proposals?: any[];

  constructor( private proposalService: ProposalService, private router: Router ) {}

  ngOnInit(): void {
    this.loadProposals();
  }

  loadProposals() {
    this.proposalService.getProposals().subscribe((data: any) => {
      this.proposals = data;
    });
  }

  createProposal() {
    this.router.navigate(['/create-proposal']);
  }

  createActivity() {

  }

}
