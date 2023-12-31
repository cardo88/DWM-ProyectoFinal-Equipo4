import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProposalService } from '../../../services/proposal.service';
import { RoomService } from '../../../services/room.service';
import { Room } from 'src/app/models/room';
import { SocketWebService } from 'src/app/services/socket-web.service';


@Component({
  selector: 'app-proposal-details',
  templateUrl: './proposal-details.component.html',
  styleUrls: ['./proposal-details.component.css']
})
export class ProposalDetailsComponent implements OnInit {

  proposal: any;

  constructor(
    private proposalService: ProposalService,
    private roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router,
    private socketService: SocketWebService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.proposalService.getProposalId(id).subscribe((data: any) => {
        console.log('Datos de la propuesta:', data);
        this.proposal = data;
      });
    });
  }

  createRoom() {
    let codeNumber = Math.floor(1000 + Math.random() * 9000).toString();
    this.checkAndCreateRoom(codeNumber).then((uniqueCodeNumber) => {


      const socket = this.socketService.getSocket();
      const room = codeNumber;
      const nickname = "SalaAdmin";
      socket.emit('joinRoom', { room, nickname });

      this.router.navigate(['/waiting-room', uniqueCodeNumber]);
    });
  }

  async checkAndCreateRoom(codeNumber: string): Promise<string> {
    try {
      const existingRoom = await this.roomService.getCodeNumber(codeNumber).toPromise();

      if (existingRoom.length > 0) {
        // Si el código ya existe, genera uno nuevo
        codeNumber = Math.floor(1000 + Math.random() * 9000).toString();
        this.checkAndCreateRoom(codeNumber);
      } else {
        const newRoom: Room = {
          codeNumber,
          propousalId: this.proposal._id
        };

        await this.roomService.createRoom(newRoom).toPromise();
        return codeNumber;
      }
    } catch (error) {
      console.error('Error al buscar el código de la habitación:', error);
    }

    return codeNumber;
  }

}
