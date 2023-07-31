import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ApisGenericProductsPortfolioComponent } from './apis-generic-products-portfolio/apis-generic-products-portfolio.component';
import { ApisUnderValidationComponent } from './apis-under-validation/apis-under-validation.component';
import { DevelopmentPipelineComponent } from './development-pipeline/development-pipeline.component';
import { PelletsComponent } from './pellets/pellets.component';
import { IntermediatesComponent } from './intermediates/intermediates.component';
import { ProductsNavbarComponent } from './products-navbar/products-navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ApisGenericProductsDetailsComponent } from './apis-generic-products-portfolio/apis-generic-products-details/apis-generic-products-details.component';
import { ApisUnderValidationDetailsComponent } from './apis-under-validation/apis-under-validation-details/apis-under-validation-details.component';


@NgModule({
  declarations: [
    ApisGenericProductsPortfolioComponent,
    ApisUnderValidationComponent,
    DevelopmentPipelineComponent,
    PelletsComponent,
    IntermediatesComponent,
    ProductsNavbarComponent,
    ApisGenericProductsDetailsComponent,
    ApisUnderValidationDetailsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class ProductsModule { }
