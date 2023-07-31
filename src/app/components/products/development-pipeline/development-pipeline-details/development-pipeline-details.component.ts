import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeptService } from '../../dept.service';

@Component({
  selector: 'app-development-pipeline-details',
  templateUrl: './development-pipeline-details.component.html',
  styleUrls: ['./development-pipeline-details.component.scss']
})
export class DevelopmentPipelineDetailsComponent implements OnInit {

  constructor(private service:DeptService, private activedRoute: ActivatedRoute) { }
  productId: string | number | any;
  product: { id: number; productName: string; DMF: string; USDMF: string; CEP: string; therapeuticCategory: string; casNumber: string; details: string; } | any;
  ngOnInit(): void {
    // this.productId = this.activedRoute.snapshot.paramMap.get('id')
    // this.service.underValidation.find
    this.productId = this.activedRoute.snapshot.paramMap.get('id')
    this.product = this.service.development.find(x => x.id == this.productId)
  }


}
