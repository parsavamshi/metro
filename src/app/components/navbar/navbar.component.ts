import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
  scrollToTop() {
      (function smoothscroll() {
          const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
            //   window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - (currentScroll / 0));
          }
      })();
  }

    // tslint:disable-next-line:member-ordering
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }





}
