import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { MaterialModule } from 'src/app/material/material.module';

import { SustainabilityNavComponent } from './sustainability-nav/sustainability-nav.component';
import { PolicyOnSustainabilityComponent } from './policy-on-sustainability/policy-on-sustainability.component';
import { BioDiversityPolicyComponent } from './bio-diversity-policy/bio-diversity-policy.component';
import { EnergyAndGhgPolicyComponent } from './energy-and-ghg-policy/energy-and-ghg-policy.component';
import { WaterManagementPolicyComponent } from './water-management-policy/water-management-policy.component';
import { PieComponent } from './pie/pie.component';
@NgModule({
  declarations: [
    SustainabilityNavComponent,
    PolicyOnSustainabilityComponent,
    BioDiversityPolicyComponent,
    EnergyAndGhgPolicyComponent,
    WaterManagementPolicyComponent,
    PieComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MaterialModule
  ]
})
export class FeaturesModule { }
