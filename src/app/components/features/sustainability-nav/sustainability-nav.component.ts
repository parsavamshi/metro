import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sustainability-nav',
  templateUrl: './sustainability-nav.component.html',
  styleUrls: ['./sustainability-nav.component.scss']
})
export class SustainabilityNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToTop() {
    (function smoothscroll() {
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          //   window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 0));
        }
    })();
}


  list =[
    {name:'Policy On Sustainable Procurement'},
    {name:'Supplier Code of Conduct'},
    {name:'BIO Diversity Policy'},
    {name:'Energy & GHG Policy'},
    {name:'Water Management Policy'},
    {name:'PiE'},

  ]
}
