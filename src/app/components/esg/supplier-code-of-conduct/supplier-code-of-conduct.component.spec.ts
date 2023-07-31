import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierCodeOfConductComponent } from './supplier-code-of-conduct.component';

describe('SupplierCodeOfConductComponent', () => {
  let component: SupplierCodeOfConductComponent;
  let fixture: ComponentFixture<SupplierCodeOfConductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierCodeOfConductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierCodeOfConductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
