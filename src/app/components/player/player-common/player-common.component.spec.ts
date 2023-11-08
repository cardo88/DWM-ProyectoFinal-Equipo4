import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCommonComponent } from './player-common.component';

describe('PlayerCommonComponent', () => {
  let component: PlayerCommonComponent;
  let fixture: ComponentFixture<PlayerCommonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerCommonComponent]
    });
    fixture = TestBed.createComponent(PlayerCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
