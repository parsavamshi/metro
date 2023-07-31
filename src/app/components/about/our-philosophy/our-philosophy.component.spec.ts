import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPhilosophyComponent } from './our-philosophy.component';

describe('OurPhilosophyComponent', () => {
  let component: OurPhilosophyComponent;
  let fixture: ComponentFixture<OurPhilosophyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurPhilosophyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurPhilosophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
