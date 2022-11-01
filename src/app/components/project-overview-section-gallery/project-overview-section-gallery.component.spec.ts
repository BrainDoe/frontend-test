import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOverviewSectionGalleryComponent } from './project-overview-section-gallery.component';

describe('ProjectOverviewSectionGalleryComponent', () => {
  let component: ProjectOverviewSectionGalleryComponent;
  let fixture: ComponentFixture<ProjectOverviewSectionGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectOverviewSectionGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOverviewSectionGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
