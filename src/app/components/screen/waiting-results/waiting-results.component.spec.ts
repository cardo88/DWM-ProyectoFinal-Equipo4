import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingResultsComponent } from './waiting-results.component';

describe('WaitingResultsComponent', () => {
  let component: WaitingResultsComponent;
  let fixture: ComponentFixture<WaitingResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaitingResultsComponent]
    });
    fixture = TestBed.createComponent(WaitingResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
