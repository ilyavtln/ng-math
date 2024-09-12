import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathMasterpageComponent } from './math-masterpage.component';

describe('MathMasterpageComponent', () => {
  let component: MathMasterpageComponent;
  let fixture: ComponentFixture<MathMasterpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MathMasterpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathMasterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
