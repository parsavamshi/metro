import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediatesComponent } from './intermediates.component';

describe('IntermediatesComponent', () => {
  let component: IntermediatesComponent;
  let fixture: ComponentFixture<IntermediatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntermediatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntermediatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
