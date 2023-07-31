import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RAndDNavbarComponent } from './r-and-d-navbar.component';

describe('RAndDNavbarComponent', () => {
  let component: RAndDNavbarComponent;
  let fixture: ComponentFixture<RAndDNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RAndDNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RAndDNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
