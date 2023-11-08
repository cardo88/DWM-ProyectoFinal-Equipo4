import { Component, OnInit } from '@angular/core';
import { ProposalService } from '../../../services/proposal.service';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.css']
})
export class ProposalsComponent implements OnInit{

  proposals?: any[];

  constructor(private proposalService: ProposalService) {}

  ngOnInit(): void {
    this.proposalService.getProposals().subscribe((data: any) => {
      this.proposals = data;
    });
  }

}
