import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurRAndDComponent } from './our-r-and-d.component';

describe('OurRAndDComponent', () => {
  let component: OurRAndDComponent;
  let fixture: ComponentFixture<OurRAndDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurRAndDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurRAndDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
