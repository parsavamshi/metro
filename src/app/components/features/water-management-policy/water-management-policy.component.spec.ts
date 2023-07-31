import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterManagementPolicyComponent } from './water-management-policy.component';

describe('WaterManagementPolicyComponent', () => {
  let component: WaterManagementPolicyComponent;
  let fixture: ComponentFixture<WaterManagementPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterManagementPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterManagementPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
