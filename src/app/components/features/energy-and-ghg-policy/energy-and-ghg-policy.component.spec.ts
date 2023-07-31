import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyAndGhgPolicyComponent } from './energy-and-ghg-policy.component';

describe('EnergyAndGhgPolicyComponent', () => {
  let component: EnergyAndGhgPolicyComponent;
  let fixture: ComponentFixture<EnergyAndGhgPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyAndGhgPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyAndGhgPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
