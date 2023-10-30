import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-timer',
  templateUrl: './player-timer.component.html',
  styleUrls: ['./player-timer.component.css']
})
export class PlayerTimerComponent implements OnInit {

  FULL_DASH_ARRAY = 283; //Length = 2πr = 2 * π * 45 = 282,6
  WARNING_THRESHOLD = 10;
  ALERT_THRESHOLD = 5;

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

  TIME_LIMIT = 60;
  timePassed = 0;
  timeLeft = this.TIME_LIMIT;
  timerInterval: any = null;
  remainingPathColor = this.COLOR_CODES.info.color;

  ngOnInit() {
    this.startTimer();
  }

  onTimesUp() {
    clearInterval(this.timerInterval);
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timePassed = this.timePassed += 1;
      this.timeLeft = this.TIME_LIMIT - this.timePassed;
      this.setCircleDasharray();
      this.setRemainingPathColor(this.timeLeft);

      if (this.timeLeft === 0) {
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
  }

  calculateTimeFraction() {
    const rawTimeFraction = this.timeLeft / this.TIME_LIMIT;
    return rawTimeFraction - (1 / this.TIME_LIMIT) * (1 - rawTimeFraction);
  }

  setCircleDasharray() {
    const circleDasharray = (this.calculateTimeFraction() * this.FULL_DASH_ARRAY).toFixed(0) + ' ' + '283';
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
