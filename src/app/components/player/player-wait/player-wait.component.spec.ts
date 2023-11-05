import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerWaitComponent } from './player-wait.component';

describe('PlayerWaitComponent', () => {
  let component: PlayerWaitComponent;
  let fixture: ComponentFixture<PlayerWaitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerWaitComponent]
    });
    fixture = TestBed.createComponent(PlayerWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
