import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyOnSustainabilityComponent } from './policy-on-sustainability.component';

describe('PolicyOnSustainabilityComponent', () => {
  let component: PolicyOnSustainabilityComponent;
  let fixture: ComponentFixture<PolicyOnSustainabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyOnSustainabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyOnSustainabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
