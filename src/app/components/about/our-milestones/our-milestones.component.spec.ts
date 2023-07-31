import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMilestonesComponent } from './our-milestones.component';

describe('OurMilestonesComponent', () => {
  let component: OurMilestonesComponent;
  let fixture: ComponentFixture<OurMilestonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurMilestonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurMilestonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
