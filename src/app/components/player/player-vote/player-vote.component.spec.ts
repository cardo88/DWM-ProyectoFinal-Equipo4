import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerVoteComponent } from './player-vote.component';

describe('PlayerVoteComponent', () => {
  let component: PlayerVoteComponent;
  let fixture: ComponentFixture<PlayerVoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerVoteComponent]
    });
    fixture = TestBed.createComponent(PlayerVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
