import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWordsComponent } from './update-words.component';

describe('UpdateWordsComponent', () => {
  let component: UpdateWordsComponent;
  let fixture: ComponentFixture<UpdateWordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateWordsComponent]
    });
    fixture = TestBed.createComponent(UpdateWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
