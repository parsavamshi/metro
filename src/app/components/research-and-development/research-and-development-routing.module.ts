import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurExpertiseComponent } from './our-expertise/our-expertise.component';
import { OurInfrastructureComponent } from './our-infrastructure/our-infrastructure.component';
import { OurRAndDComponent } from './our-r-and-d/our-r-and-d.component';

const routes: Routes = [
  { path: '', redirectTo: '/our-R&D', pathMatch: 'full' },
  { path: 'our-R&D', component: OurRAndDComponent },
  { path: 'our-expertise', component: OurExpertiseComponent },
  { path: 'our-infrastructure', component: OurInfrastructureComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearchAndDevelopmentRoutingModule { }
