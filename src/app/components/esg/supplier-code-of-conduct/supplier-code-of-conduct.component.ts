import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
@Component({
  selector: 'app-supplier-code-of-conduct',
  templateUrl: './supplier-code-of-conduct.component.html',
  styleUrls: ['./supplier-code-of-conduct.component.scss']
})
export class SupplierCodeOfConductComponent implements OnInit {

  constructor( private Service: ServiceService, private activedroute : ActivatedRoute, private meta: Meta, private title:Title) { }
  esgId: string | number | any
  esgDetails: ({ id: number; pdf: string; p: string; p1: string; p2: string; p3: string; p4: string; p5: string; } ) | any ;
  ngOnInit(): void {
   this.esgId= this.activedroute.snapshot.paramMap.get('id')
    this.esgDetails = this.Service.esg.find( x => x.id == this.esgId)
    this.meta.addTag(
      { name: 'description',
      content: 'Metrochem API Pvt Ltd - Active Pharmaceutical Ingredients Manufacturer In India - We manufacture APIs, Intermediates &amp; Pellets. We also do our own R&amp;D. Metrochem is one of the fastest growing manufacturers of Active Pharmaceutical' }
      );

      this.title.setTitle(`${this.esgId}`);
  }


  // productId: string | number | any;
  // product: { id: number; productName: string; DMF: string; USDMF: string; CEP: string; therapeuticCategory: string; casNumber: string; details: string; } | any;
  // ngOnInit(): void {
  //   // this.productId = this.activedRoute.snapshot.paramMap.get('id')
  //   // this.service.underValidation.find
  //   this.productId = this.activedRoute.snapshot.paramMap.get('id')
  //   this.product = this.service.APIsGenericproductPortfolioDetails.find(x => x.id == this.productId)
  // }
}
