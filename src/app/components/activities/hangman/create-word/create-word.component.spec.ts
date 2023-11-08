import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWordComponent } from './create-word.component';

describe('CreateWordComponent', () => {
  let component: CreateWordComponent;
  let fixture: ComponentFixture<CreateWordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateWordComponent]
    });
    fixture = TestBed.createComponent(CreateWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
