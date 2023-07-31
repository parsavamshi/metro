import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResearchAndDevelopmentRoutingModule } from './research-and-development-routing.module';
import { OurExpertiseComponent } from './our-expertise/our-expertise.component';
import { OurInfrastructureComponent } from './our-infrastructure/our-infrastructure.component';
import { OurRAndDComponent } from './our-r-and-d/our-r-and-d.component';
import { RAndDNavbarComponent } from './r-and-d-navbar/r-and-d-navbar.component';


@NgModule({
  declarations: [
    OurExpertiseComponent,
    OurInfrastructureComponent,
    OurRAndDComponent,
    RAndDNavbarComponent
  ],
  imports: [
    CommonModule,
    ResearchAndDevelopmentRoutingModule
  ]
})
export class ResearchAndDevelopmentModule { }
