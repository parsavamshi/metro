import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/service/service.service';
import { DeptService } from '../../dept.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-apis-under-validation-details',
  templateUrl: './apis-under-validation-details.component.html',
  styleUrls: ['./apis-under-validation-details.component.scss']
})
export class ApisUnderValidationDetailsComponent implements OnInit {

// product: object | any;
// // pfind(x => x.id == this.productId)
// productId: string  | any;
// product: { id: number; productName: string; DMF: string; USDMF: string; CEP: string; therapeuticCategory: string; casNumber: string; details: string; } | undefined;
// productsId:number | any ;
//   ngOnInit(): void {
//     this.productsId = this.activatedRoute.snapshot.paramMap.get('id')
//     this.product = this.service.underValidationProducts.find(x => x.id == this.productsId)
    // this.productId = this.activatedRoute.snapshot.paramMap.get('id')
  //  this.product =  this.service.underValidationProducts.find(x => x. == this.productId)
  // }
  constructor(private service:DeptService, private activedRoute: ActivatedRoute, private meta: Meta, private title:Title) { }
  productId: string | number | any;
  product: { id: number; productName: string; DMF: string; USDMF: string; CEP: string; therapeuticCategory: string; casNumber: string; details: string; } | any;
  ngOnInit(): void {
    // this.productId = this.activedRoute.snapshot.paramMap.get('id')
    // this.service.underValidation.find
    this.productId = this.activedRoute.snapshot.paramMap.get('id')
    this.product = this.service.underValidationProducts.find(x => x.id == this.productId)

    this.meta.addTag(
      { name: 'description',
      content: 'Metrochem API Pvt Ltd - Active Pharmaceutical Ingredients Manufacturer In India - We manufacture APIs, Intermediates &amp; Pellets. We also do our own R&amp;D. Metrochem is one of the fastest growing manufacturers of Active Pharmaceutical' }
      );

      this.title.setTitle(`${this.productId}`);
  }




}
// find(x => x.id == this.productId)
