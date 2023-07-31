import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-intermediates',
  templateUrl: './intermediates.component.html',
  styleUrls: ['./intermediates.component.scss']
})
export class IntermediatesComponent implements OnInit {

  blogs:({id:number; blogImage:string;blogHeading:string;blogText1:string;MDimage:string; mdName:string;mdStudy:string;companyName:string;blogDetail1:{blogContent:string;},blogDetail2:{}} | any);

  activePharmaceutical: ({ id: number; blogImage: string; blogHeading: string; blogText1: string; postTime: string; ActivedPharmaceutical: string; Intermediates: string; Pellets: string; spanDash1: string; spanDash2: string; } | any);

    constructor(private service : ServiceService, private activatedRoute: ActivatedRoute) { }

    blogDetails: { id: number; blogImage: string; blogHeading: string; blogText1: string; blogDetail: ({ blogcontent1: string; blogContent2: string; blogContent3: string; blogContent4: string; })} | any;
blogId: string  | any;
    ngOnInit() {
      // this.settings = Object.assign({}, this.mySetttings);
      // this.blogdetailing = this.Service.blog
      // this.blogs = this.Service.blog
      // this.activePharmaceutical = this.Service.Intermediates
      this.blogId = this.activatedRoute.snapshot.paramMap.get('id')
      this.blogDetails = this.service.blog.find(x => x.id == this.blogId)
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

}
