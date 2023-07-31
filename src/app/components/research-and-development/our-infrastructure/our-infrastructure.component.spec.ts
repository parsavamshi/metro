import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurInfrastructureComponent } from './our-infrastructure.component';

describe('OurInfrastructureComponent', () => {
  let component: OurInfrastructureComponent;
  let fixture: ComponentFixture<OurInfrastructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurInfrastructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurInfrastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
