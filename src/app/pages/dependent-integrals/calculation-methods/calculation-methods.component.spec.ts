import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationMethodsComponent } from './calculation-methods.component';

describe('CalculationMethodsComponent', () => {
  let component: CalculationMethodsComponent;
  let fixture: ComponentFixture<CalculationMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculationMethodsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculationMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
