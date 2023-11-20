import { Component, OnInit } from '@angular/core';
import { ProposalService } from '../../../services/proposal.service';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'app-create-proposal',
    templateUrl: './create-proposal.component.html',
    styleUrls: ['./create-proposal.component.css']
})
export class CreateProposalComponent implements OnInit {

    proposalName: string = '';
    selectedActivities: any[] = [];
    latestProposalId: number = 0;

    constructor(private proposalService: ProposalService, private router: Router) { }

    ngOnInit(): void {
        this.proposalService.getLastProposalId().subscribe((data: any) => {
            this.latestProposalId = data.latestId;
        });
    }

    updateActivity() {
        this.router.navigate(['/list-trivia']);
    }

    saveProposal() {

        const newProposalId = this.latestProposalId + 1;

        const proposalData = {
            _id: newProposalId,
            name: this.proposalName,
            activities: this.selectedActivities
        };

        this.proposalService.saveProposal(proposalData).subscribe((response) => {
            // Manejar la respuesta si es necesario
            console.log('Proposal saved successfully:', response);
        });

        this.router.navigate(['/new-room']);

    }

    handleSelectedActivities(activities: any[]) {
        this.selectedActivities = activities;
    }

}
