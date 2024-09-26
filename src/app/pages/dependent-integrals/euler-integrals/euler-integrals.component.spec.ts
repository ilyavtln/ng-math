import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EulerIntegralsComponent } from './euler-integrals.component';

describe('EulerIntegralsComponent', () => {
  let component: EulerIntegralsComponent;
  let fixture: ComponentFixture<EulerIntegralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EulerIntegralsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EulerIntegralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
