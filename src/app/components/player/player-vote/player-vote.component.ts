import { Component } from '@angular/core';

@Component({
  selector: 'app-player-vote',
  templateUrl: './player-vote.component.html',
  styleUrls: ['./player-vote.component.css']
})
export class PlayerVoteComponent {

  totalVotos = 100;
  votos = {
    meGusta: 0,
    meDaIgual: 0,
    noMeGusta: 0
  };

  votar(opcion: string) {
    // this.votos[opcion]++;
  }

  // porcentajeVotos() {
  //   const total = this.votos.meGusta + this.votos.meDaIgual + this.votos.noMeGusta;
  //   return (total / this.totalVotos) * 100;
  // }
}
