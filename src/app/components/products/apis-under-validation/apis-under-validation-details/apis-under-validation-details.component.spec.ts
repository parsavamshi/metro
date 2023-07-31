import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApisUnderValidationDetailsComponent } from './apis-under-validation-details.component';

describe('ApisUnderValidationDetailsComponent', () => {
  let component: ApisUnderValidationDetailsComponent;
  let fixture: ComponentFixture<ApisUnderValidationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApisUnderValidationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApisUnderValidationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
