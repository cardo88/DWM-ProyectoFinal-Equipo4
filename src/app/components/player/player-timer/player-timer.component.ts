import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-player-timer',
  templateUrl: './player-timer.component.html',
  styleUrls: ['./player-timer.component.css']
})
export class PlayerTimerComponent implements OnInit {

  radio: number = 20;
  FULL_DASH_ARRAY = 2 * Math.PI * this.radio; //Length = 2πr = 2 * π * radio
  WARNING_THRESHOLD = 10;
  ALERT_THRESHOLD = 5;

  
  @Input() timer_time_for_activity = 0;

  COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: this.WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: this.ALERT_THRESHOLD
    }
  };

  //TIME_LIMIT = 0;
  timePassed = 0;
  timeLeft = this.timer_time_for_activity;
  timerInterval: any = null;
  remainingPathColor = this.COLOR_CODES.info.color;

  @Output() timer_running = new EventEmitter<boolean>();
  timeoff(timeoff:boolean) {
    this.timer_running.emit(timeoff);
    console.log(timeoff);
  }

  ngOnInit() {
    this.timer_time_for_activity = this.timer_time_for_activity;
    this.startTimer();
  }

  onTimesUp() {
    clearInterval(this.timerInterval);
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timePassed = this.timePassed += 1;
      this.timeLeft = this.timer_time_for_activity - this.timePassed;
      this.setCircleDasharray();
      this.setRemainingPathColor(this.timeLeft);
      
      if (this.timeLeft === 0) {
        this.timeoff(false);
        this.onTimesUp();
      }
    }, 1000);
  }

  setRemainingPathColor(timeLeft: number) {
    const { alert, warning, info } = this.COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      this.remainingPathColor = alert.color;
    } else if (timeLeft <= warning.threshold) {
      this.remainingPathColor = warning.color;
    }
    //console.log("remainingPathColor:"+this.remainingPathColor);
  }

  calculateTimeFraction() {
    const rawTimeFraction = this.timeLeft / this.timer_time_for_activity;
    return rawTimeFraction - (1 / this.timer_time_for_activity) * (1 - rawTimeFraction);
  }

  setCircleDasharray() {
    const circleDasharray = (this.calculateTimeFraction() * this.FULL_DASH_ARRAY).toFixed(0) + ' ' + '125'; //FULL_DASH_ARRAY= 125.6 si el radio es de 20
    // console.log(circleDasharray);
    return circleDasharray;
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    let minute_s: string;
    let second_s: string;

    switch (minutes) {
      case 9:
      case 8:
      case 7:
      case 6:
      case 5:
      case 4:
      case 3:
      case 2:
      case 1:
      case 0:
        minute_s = "0" + minutes;
        break;
      default:
        minute_s = String(minutes);
    }
    switch (seconds) {
      case 9:
      case 8:
      case 7:
      case 6:
      case 5:
      case 4:
      case 3:
      case 2:
      case 1:
      case 0:
        second_s = "0" + seconds;
        break;
      default:
        second_s = String(seconds);
    }

    return minute_s + ':' + second_s;
  }



}
