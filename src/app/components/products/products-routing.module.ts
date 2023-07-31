import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApisGenericProductsDetailsComponent } from './apis-generic-products-portfolio/apis-generic-products-details/apis-generic-products-details.component';
import { ApisGenericProductsPortfolioComponent } from './apis-generic-products-portfolio/apis-generic-products-portfolio.component';
import { ApisUnderValidationDetailsComponent } from './apis-under-validation/apis-under-validation-details/apis-under-validation-details.component';
import { ApisUnderValidationComponent } from './apis-under-validation/apis-under-validation.component';
import { DevelopmentPipelineComponent } from './development-pipeline/development-pipeline.component';
import { IntermediatesComponent } from './intermediates/intermediates.component';
import { PelletsComponent } from './pellets/pellets.component';

const routes: Routes = [
  {path:'',redirectTo:'/apis-generic-products-portfolio',pathMatch:'full'},
  {path:'apis-generic-products-portfolio', component:ApisGenericProductsPortfolioComponent},
  {
    path:'apis-generic-products-portfolio/:id', component:ApisGenericProductsDetailsComponent,
    data : {
      title: 'apis-generic-products-portfolio/:id'
    }
  },
  {path:'apis-under-validation', component:ApisUnderValidationComponent},
  {path:'apis-under-validation/:id', component:ApisUnderValidationDetailsComponent,
  data : {
    title: 'apis-generic-products-portfolio/:id'
  }
  },
  {path:'development-pipeline', component:DevelopmentPipelineComponent},
  {path:'pellets', component:PelletsComponent},
  {path:'intermediates', component:IntermediatesComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
