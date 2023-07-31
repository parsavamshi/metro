import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { OurStoryComponent } from './our-story/our-story.component';
import { OurLeadershipComponent } from './our-leadership/our-leadership.component';
import { OurPhilosophyComponent } from './our-philosophy/our-philosophy.component';
import { OurMilestonesComponent } from './our-milestones/our-milestones.component';
import { AccreditationsComponent } from './accreditations/accreditations.component';
import { GlobalPresenceComponent } from './global-presence/global-presence.component';
import { OurFacilitiesComponent } from './our-facilities/our-facilities.component';
import { AboutNavComponent } from './about-nav/about-nav.component';

@NgModule({
  declarations: [
    OurStoryComponent,
    OurLeadershipComponent,
    OurPhilosophyComponent,
    OurMilestonesComponent,
    AccreditationsComponent,
    GlobalPresenceComponent,
    OurFacilitiesComponent,
    AboutNavComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
