import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsForGameComponent } from './questions-for-game.component';

describe('QuestionsForGameComponent', () => {
  let component: QuestionsForGameComponent;
  let fixture: ComponentFixture<QuestionsForGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsForGameComponent]
    });
    fixture = TestBed.createComponent(QuestionsForGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
