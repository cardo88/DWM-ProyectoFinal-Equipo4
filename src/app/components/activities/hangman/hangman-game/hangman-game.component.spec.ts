import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanGameComponent } from './hangman-game.component';

describe('HangmanGameComponent', () => {
  let component: HangmanGameComponent;
  let fixture: ComponentFixture<HangmanGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HangmanGameComponent]
    });
    fixture = TestBed.createComponent(HangmanGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
