import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProposalService } from '../../../services/proposal.service';

@Component({
  selector: 'app-proposal-details',
  templateUrl: './proposal-details.component.html',
  styleUrls: ['./proposal-details.component.css']
})
export class ProposalDetailsComponent implements OnInit {
  
  proposal: any;

  constructor( private proposalService: ProposalService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.proposalService.getProposalDetails(id).subscribe((data: any) => {
        this.proposal = data;
      });
    });
  }

}
