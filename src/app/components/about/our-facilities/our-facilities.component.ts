import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-facilities',
  templateUrl: './our-facilities.component.html',
  styleUrls: ['./our-facilities.component.scss']
})
export class OurFacilitiesComponent implements OnInit {
  hello = '';

  constructor() { }

  ngOnInit(): void {
  }
units = [
  {
    id:'unit 1-Api',
    unitImg: '../../../../assets/images/unit-1.jpg',
  }
]

// select(val:any){
// this.hello =val
// }

select(val:any){
this.hello = val
}
}
