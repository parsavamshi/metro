import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
blogDetails: { id: number; blogImage: string; blogHeading: string; blogText1: string; blogDetail: ({ blogcontent1: string; blogContent2: string; blogContent3: string; blogContent4: string; })} | any;
blogId: string  | any;
  constructor(private service : ServiceService, private activatedRoute: ActivatedRoute, private meta: Meta, private title:Title) { }
  blogs: ({ id: number; blogImage: string; blogHeading: string; blogText1: string; postTime: string; ActivedPharmaceutical: string; Intermediates: string; Pellets: string; spanDash1: string; spanDash2: string; })| any;

  ngOnInit(): void {
  this.blogId = this.activatedRoute.snapshot.paramMap.get('id')
  this.blogDetails = this.service.blog.find(x => x.id == this.blogId)

  this.blogs = this.service.blog


  this.meta.addTag(
    { name: 'description',
    content: 'Metrochem API Pvt Ltd - Active Pharmaceutical Ingredients Manufacturer In India - We manufacture APIs, Intermediates &amp; Pellets. We also do our own R&amp;D. Metrochem is one of the fastest growing manufacturers of Active Pharmaceutical' }
    );

    this.title.setTitle(`${this.blogId}`);
  }
  // redirectTo(blog: string, blogDetails: any){
  //   this.service.blog = blogDetails;
  // }
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
