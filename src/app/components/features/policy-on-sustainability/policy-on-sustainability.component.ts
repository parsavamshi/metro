import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-policy-on-sustainability',
  templateUrl: './policy-on-sustainability.component.html',
  styleUrls: ['./policy-on-sustainability.component.scss']
})
export class PolicyOnSustainabilityComponent implements OnInit {

  constructor(private serivce : ServiceService, private activatedRoute : ActivatedRoute ) { }
esgDetails : {id:string, pdf:string} | any
esgId: string | any
  ngOnInit(): void {
    this.esgId = this.activatedRoute.snapshot.paramMap.get('id')
    this.serivce.esg.find(x => x.id == this.esgId)
  }

}
