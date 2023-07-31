import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentPipelineDetailsComponent } from './development-pipeline-details.component';

describe('DevelopmentPipelineDetailsComponent', () => {
  let component: DevelopmentPipelineDetailsComponent;
  let fixture: ComponentFixture<DevelopmentPipelineDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopmentPipelineDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopmentPipelineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
