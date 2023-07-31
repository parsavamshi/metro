import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('scroll', [
      state('on', style({right: '100px'})),
      transition('* => *', [
        style({right: '100px'}),
        animate(50000, style({right: '100%'}))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  state = 0;

  scrollDone() {
    this.state++;
  }
}
