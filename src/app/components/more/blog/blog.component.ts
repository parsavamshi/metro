import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  // blog: any
  // blogDetails: { id: number; blogImage: string; blogHeading: string; blogText1: string; } | any
  // blogdetailing: ({ id: string; name: string; author: string; duration: number; type: string; price: number; ratings: number; image: string; description: string; } | any);
blogs:({id:number; blogImage:string;blogHeading:string;blogText1:string;MDimage:string; mdName:string;mdStudy:string;companyName:string;blogDetail1:{blogContent:string;},blogDetail2:{}} | any);

activePharmaceutical: ({ id: number; blogImage: string; blogHeading: string; blogText1: string; postTime: string; ActivedPharmaceutical: string; Intermediates: string; Pellets: string; spanDash1: string; spanDash2: string; } | any);

  constructor(private Service : ServiceService) { }

  ngOnInit() {
    // this.settings = Object.assign({}, this.mySetttings);
    // this.blogdetailing = this.Service.blog
    this.blogs = this.Service.blog
    this.activePharmaceutical = this.Service.activePharmaceuticalIngredient
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
  about =[
    {
      name:'Our Story'
    },
    {
     name:'Our Leadership'
    },
    {
      name:'Our Philosophy'
    },
    {
      name:'Our Milestones'
    },
    {
      name:'Accreditationss'
    },
    {
      name:'Global Presence'
    }

  ]

  blogCategories =[
    {
      name:'COVID-19 Updates'
    },
    {
     name:'Intermediates'
    },
    {
      name:'Pellets'
    },
    {
      name:'Active Pharmaceutical Ingredient'
    },
    {
      name:'CPhI Events'
    },

  ]


  RecentPost =[
    {
      name:'Strategies to Reduce Costs and Improve the Efficiency of Pharmaceutical R&D'
    },
    {
     name:'Active Pharmaceutical Manufacturing In India'
    },
    {
      name:'How to stay Sane during Lockdown (COVID-19)'
    },


  ]
  researchAndDevelopment =[
    {name:'Research & Development'},
    {name:'Our Expertise'},
    {name:'Our Infrastructure'}
  ]
}
