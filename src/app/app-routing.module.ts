import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './components/more/blog/blog-details/blog-details.component';
import { BlogComponent } from './components/more/blog/blog.component';
import { IntermediatesComponent } from './components/more/blog/intermediates/intermediates.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';
import { ESGComponent } from './components/esg/esg.component';
import { SupplierCodeOfConductComponent } from './components/esg/supplier-code-of-conduct/supplier-code-of-conduct.component';
import { PolicyOnSustainabilityComponent } from './components/features/policy-on-sustainability/policy-on-sustainability.component';
import { SustainabilityNavComponent } from './components/features/sustainability-nav/sustainability-nav.component';
import { PcbComplianceComponent } from './components/pcb-compliance/pcb-compliance.component';
import { DocumentsComponent } from './components/sustainability/documents/documents.component';
import { SustainabilityComponent } from './components/sustainability/sustainability.component';


import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},

  {
    path: 'about',
    loadChildren: () =>
      import('./components/about/about.module').then((m) => m.AboutModule),
  },

  {
    path: 'research-and-development',
    loadChildren: () =>
      import('./components/research-and-development/research-and-development.module').then((m) => m.ResearchAndDevelopmentModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./components/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path:'sustainbility',
    loadChildren:() =>
    import('./components/features/features.module').then((m) => m.FeaturesModule)
  },

  {path:'careers', component:CareersComponent},
  {path:'blog', component:BlogComponent},
  {path:'blog/:id',component:BlogDetailsComponent,
  data : {
    title: 'blog/:id'
  }
},

  {path:'blog/product/:id', component:IntermediatesComponent},

  {path:'contact-us',component:ContactComponent},
  {path:'pcb-compliance', component:PcbComplianceComponent},

  {path:'sustainability', component:SustainabilityNavComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
