import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-r-and-d-navbar',
  templateUrl: './r-and-d-navbar.component.html',
  styleUrls: ['./r-and-d-navbar.component.scss']
})
export class RAndDNavbarComponent implements OnInit {


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

classApplied = false;
toggleClass() {
    this.classApplied = !this.classApplied;
}



closeNavbar() {
  this.classApplied = false;
  window.scroll(0,0);
  (function smoothscroll() {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      //   window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 0));
    }
})();

}

statusClass = 'not-active';

setActiveClass(){
  // this.statusClass = 'active';
  if(this.statusClass == 'not-active'){
    this.statusClass = 'active'
  }else{
    this.statusClass = 'not-active'
  }
}
}
