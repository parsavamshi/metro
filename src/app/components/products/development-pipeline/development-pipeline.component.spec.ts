import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentPipelineComponent } from './development-pipeline.component';

describe('DevelopmentPipelineComponent', () => {
  let component: DevelopmentPipelineComponent;
  let fixture: ComponentFixture<DevelopmentPipelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopmentPipelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopmentPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
