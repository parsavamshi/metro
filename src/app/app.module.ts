import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { CareersComponent } from './components/careers/careers.component';
import { MediaComponent } from './components/more/media/media.component';
import { BlogComponent } from './components/more/blog/blog.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AboutModule } from './components/about/about.module';
import { ResearchAndDevelopmentModule } from './components/research-and-development/research-and-development.module';
import { ProductsModule } from './components/products/products.module';
import { MaterialModule } from './material/material.module';
// import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { useForm, ValidationError } from '@formspree/core';

import { BlogDetailsComponent } from './components/more/blog/blog-details/blog-details.component';
import { IntermediatesComponent } from './components/more/blog/intermediates/intermediates.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PcbComplianceComponent } from './components/pcb-compliance/pcb-compliance.component';
import { FeaturesModule } from './components/features/features.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SupplierCodeOfConductComponent } from './components/esg/supplier-code-of-conduct/supplier-code-of-conduct.component'
import {  ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';

import { SustainabilityComponent } from './components/sustainability/sustainability.component';
import { DocumentsComponent } from './components/sustainability/documents/documents.component';
import { MoreModule } from './components/more/more.module';

// export function createTranslateLoader(http:HttpClient){
// return new TranslateHttpLoader(http, './../assets/i18n/', '.json');
// }

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CareersComponent,
    MediaComponent,
    BlogComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    BlogDetailsComponent,
    IntermediatesComponent,
    PageNotFoundComponent,
    PcbComplianceComponent,
    SupplierCodeOfConductComponent,
    ContactComponent,
    SustainabilityComponent,
    DocumentsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AboutModule,
    ResearchAndDevelopmentModule,
    ProductsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    FeaturesModule,
    MoreModule,

    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     // useFactory: httpTranslateLoader,
    //     // deps: [HttpClient]
    //     useFactory: (createTranslateLoader),
    //     deps:[HttpClient]
    //   },
    //   defaultLanguage: ''
    // })

  ],
  providers: [ Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
// export function httpTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http);


// }
