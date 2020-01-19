import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastPredictionsComponent } from './past-predictions.component';

describe('PastPredictionsComponent', () => {
  let component: PastPredictionsComponent;
  let fixture: ComponentFixture<PastPredictionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastPredictionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastPredictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
