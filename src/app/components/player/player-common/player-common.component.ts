import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-player-common',
  templateUrl: './player-common.component.html',
  styleUrls: ['./player-common.component.css']
})
export class PlayerCommonComponent implements OnInit {

  room: any;
  constructor(
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
  }
}
