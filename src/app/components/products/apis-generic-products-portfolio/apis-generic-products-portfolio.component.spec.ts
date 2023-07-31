import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApisGenericProductsPortfolioComponent } from './apis-generic-products-portfolio.component';

describe('ApisGenericProductsPortfolioComponent', () => {
  let component: ApisGenericProductsPortfolioComponent;
  let fixture: ComponentFixture<ApisGenericProductsPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApisGenericProductsPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApisGenericProductsPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
