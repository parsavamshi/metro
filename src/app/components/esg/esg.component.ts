import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
// import {TestPDF} from './data'
@Component({
  selector: 'app-esg',
  templateUrl: './esg.component.html',
  styleUrls: ['./esg.component.scss']
})
export class ESGComponent implements OnInit {

  constructor(private service:ServiceService) { }

  esglist: ({ id: number; pdf: string; p: string; p1: string; p2: string; p3: string; p4: string; p5: string; } )| any ;

  ngOnInit(): void {
 this.esglist =  this.service.esg
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
esgList = [
  {
    id:'Policy on Sustainble procurement',
  },
{
  id:'Supplier Code of Conduct'
}

]

// getPDF() {
//   var file = new Blob(['Hello World!'], { type: '../../../assets/Supplier-Code-of-Conduct-1.pdf' });
//   var fileURL = URL.createObjectURL(file);

//   // if you want to open PDF in new tab
//   window.open(fileURL);
//   var a = document.createElement('a');
//   a.href = fileURL;
//   a.download = 'bill.pdf';
//   document.body.appendChild(a);
//   a.click();
// }


}


// $(document).ready(function(){

//   $('.offerItemTitle').click(function(){

//     $(this).parents('.offerslide').children('.offerItem').removeClass('active');
//     $(this).parents('.offerslide').children('.offerItem').children('.offerItemTitle').removeClass('hide');
//     $(this).parent('.offerItem').addClass('active');
//     $(this).addClass('hide');

//   });



// });
