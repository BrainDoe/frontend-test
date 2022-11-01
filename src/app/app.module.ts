import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ProjectOverviewSectionComponent } from './components/project-overview-section/project-overview-section.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HeroSectionComponent,
    ProjectOverviewSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
