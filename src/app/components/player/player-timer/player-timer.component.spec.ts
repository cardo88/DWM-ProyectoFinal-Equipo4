import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTimerComponent } from './player-timer.component';

describe('PlayerTimerComponent', () => {
  let component: PlayerTimerComponent;
  let fixture: ComponentFixture<PlayerTimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerTimerComponent]
    });
    fixture = TestBed.createComponent(PlayerTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
