import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CoreValuesComponent } from '../more/core-values/core-values.component';
// import { ESGComponent } from '../esg/esg.component';
// import { MediaComponent } from '../more/media/media.component';
import { SustainabilityNavComponent } from './sustainability-nav/sustainability-nav.component';
import { BioDiversityPolicyComponent } from './bio-diversity-policy/bio-diversity-policy.component';
import { PolicyOnSustainabilityComponent } from './policy-on-sustainability/policy-on-sustainability.component';
import { SupplierCodeOfConductComponent } from './supplier-code-of-conduct/supplier-code-of-conduct.component';
import { EnergyAndGhgPolicyComponent } from './energy-and-ghg-policy/energy-and-ghg-policy.component';
import { WaterManagementPolicyComponent } from './water-management-policy/water-management-policy.component';
import { PieComponent } from './pie/pie.component';

const routes: Routes = [
  // {path:'',redirectTo:'/core-values',pathMatch:'full'},
  {path:'',redirectTo:'/sustainbility',pathMatch:'full'},
  {path:'sustainbility', component:SustainabilityNavComponent},
  // {path:'core-values', component:CoreValuesComponent},
  // {path:'media', component:MediaComponent},
  {path:'policy-on-sustainbility', component:PolicyOnSustainabilityComponent},
  {path:'supplier-code-of-conduct', component:SupplierCodeOfConductComponent},
  {path:'bio-biversity-policy', component:BioDiversityPolicyComponent},
  {path:'enegry-&-GHG-policy', component:EnergyAndGhgPolicyComponent},
  {path:'water-management-policy', component:WaterManagementPolicyComponent},
  {path:'pharmaceutical-in-enviroment-policy', component:PieComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
