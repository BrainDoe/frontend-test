import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOverviewSectionComponent } from './project-overview-section.component';

describe('ProjectOverviewSectionComponent', () => {
  let component: ProjectOverviewSectionComponent;
  let fixture: ComponentFixture<ProjectOverviewSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectOverviewSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOverviewSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
