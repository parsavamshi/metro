import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApisUnderValidationComponent } from './apis-under-validation.component';

describe('ApisUnderValidationComponent', () => {
  let component: ApisUnderValidationComponent;
  let fixture: ComponentFixture<ApisUnderValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApisUnderValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApisUnderValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
