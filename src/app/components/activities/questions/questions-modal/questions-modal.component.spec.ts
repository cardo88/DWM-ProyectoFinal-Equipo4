import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsModalComponent } from './questions-modal.component';

describe('QuestionsModalComponent', () => {
  let component: QuestionsModalComponent;
  let fixture: ComponentFixture<QuestionsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsModalComponent]
    });
    fixture = TestBed.createComponent(QuestionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
