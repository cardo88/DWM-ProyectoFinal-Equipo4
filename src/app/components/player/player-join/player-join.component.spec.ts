import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerJoinComponent } from './player-join.component';

describe('PlayerJoinComponent', () => {
  let component: PlayerJoinComponent;
  let fixture: ComponentFixture<PlayerJoinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerJoinComponent]
    });
    fixture = TestBed.createComponent(PlayerJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
