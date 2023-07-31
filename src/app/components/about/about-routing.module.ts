import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccreditationsComponent } from './accreditations/accreditations.component';
import { GlobalPresenceComponent } from './global-presence/global-presence.component';
import { OurFacilitiesComponent } from './our-facilities/our-facilities.component';
import { OurLeadershipComponent } from './our-leadership/our-leadership.component';
import { OurMilestonesComponent } from './our-milestones/our-milestones.component';
import { OurPhilosophyComponent } from './our-philosophy/our-philosophy.component';
import { OurStoryComponent } from './our-story/our-story.component';

const routes: Routes = [
  { path: '', redirectTo: '/our-story', pathMatch: 'full' },
  { path: 'our-story', component: OurStoryComponent },
  { path: 'our-leadership', component: OurLeadershipComponent },
  { path: 'our-philosophy', component: OurPhilosophyComponent },
  { path: 'our-milestones', component: OurMilestonesComponent },
  { path: 'accreditations', component: AccreditationsComponent },
  { path: 'global-presence', component: GlobalPresenceComponent },
  { path: 'our-facilities', component: OurFacilitiesComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
