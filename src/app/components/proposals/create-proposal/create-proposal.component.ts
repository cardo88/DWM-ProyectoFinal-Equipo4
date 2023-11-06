import { Component, OnInit } from '@angular/core';
import { ProposalService } from '../../../services/proposal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-proposal',
  templateUrl: './create-proposal.component.html',
  styleUrls: ['./create-proposal.component.css']
})
export class CreateProposalComponent implements OnInit {

  proposalName: string = '';
  selectedActivities: string[] = []; // ids

  activities?: any[];

  constructor(private proposalService: ProposalService, private router: Router) {}

  ngOnInit(): void {
    //Tengo que traerme todas las actividades no propuestas como hago???????????????????
    this.proposalService.getProposals().subscribe((data: any) => {
      this.activities = data;
    });
  }

  saveProposal() {
    const proposalData = {
      name: this.proposalName,
      activities: this.selectedActivities
    };

    this.proposalService.saveProposal(proposalData).subscribe((response: any) => {
      this.router.navigate(['/new-room']);
    });
  }

}
