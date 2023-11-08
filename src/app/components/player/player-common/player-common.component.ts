import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-player-common',
  templateUrl: './player-common.component.html',
  styleUrls: ['./player-common.component.css']
})
export class PlayerCommonComponent implements OnInit {

  room: any;
  constructor(
    private route: ActivatedRoute,
    private cookieService: CookieService,

  ) { }

  ngOnInit(): void {
    this.room = this.route.snapshot.paramMap.get('room');
    this.cookieService.set('room', this.room)
  }
}
