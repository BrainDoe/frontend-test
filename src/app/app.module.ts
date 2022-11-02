import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ProjectOverviewSectionComponent } from './components/project-overview-section/project-overview-section.component';
import { ProjectOverviewSectionGalleryComponent } from './components/project-overview-section-gallery/project-overview-section-gallery.component';
import { ContactUsSectionComponent } from './components/contact-us-section/contact-us-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HeroSectionComponent,
    ProjectOverviewSectionComponent,
    ProjectOverviewSectionGalleryComponent,
    ContactUsSectionComponent,
    FooterSectionComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
