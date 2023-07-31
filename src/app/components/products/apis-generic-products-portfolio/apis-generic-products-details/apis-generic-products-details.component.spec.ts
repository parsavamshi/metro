import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApisGenericProductsDetailsComponent } from './apis-generic-products-details.component';

describe('ApisGenericProductsDetailsComponent', () => {
  let component: ApisGenericProductsDetailsComponent;
  let fixture: ComponentFixture<ApisGenericProductsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApisGenericProductsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApisGenericProductsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
