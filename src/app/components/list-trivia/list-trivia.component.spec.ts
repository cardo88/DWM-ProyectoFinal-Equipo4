import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTriviaComponent } from './list-trivia.component';

describe('ListTriviaComponent', () => {
  let component: ListTriviaComponent;
  let fixture: ComponentFixture<ListTriviaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTriviaComponent]
    });
    fixture = TestBed.createComponent(ListTriviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
