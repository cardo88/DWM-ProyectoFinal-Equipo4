import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-player-wait',
  templateUrl: './player-wait.component.html',
  styleUrls: ['./player-wait.component.css']
})
export class PlayerWaitComponent {
  @Input() mensaje = '';
}