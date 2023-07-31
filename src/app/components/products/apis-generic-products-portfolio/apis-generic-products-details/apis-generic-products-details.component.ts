import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { DeptService } from '../../dept.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-apis-generic-products-details',
  templateUrl: './apis-generic-products-details.component.html',
  styleUrls: ['./apis-generic-products-details.component.scss']
})
export class ApisGenericProductsDetailsComponent implements OnInit {

  constructor(private service:DeptService, private activedRoute: ActivatedRoute, private meta: Meta, private title:Title) { }
  productId: string | number | any;
  product: { id: number; productName: string; DMF: string; USDMF: string; CEP: string; therapeuticCategory: string; casNumber: string; details: string; } | any;
  ngOnInit(): void {
    // this.productId = this.activedRoute.snapshot.paramMap.get('id')
    // this.service.underValidation.find
    this.productId = this.activedRoute.snapshot.paramMap.get('id')
    this.product = this.service.APIsGenericproductPortfolioDetails.find(x => x.id == this.productId)

    this.meta.addTag(
      { name: 'description',
      content: 'Metrochem API Pvt Ltd - Active Pharmaceutical Ingredients Manufacturer In India - We manufacture APIs, Intermediates &amp; Pellets. We also do our own R&amp;D. Metrochem is one of the fastest growing manufacturers of Active Pharmaceutical' }
      );

      this.title.setTitle(`${this.productId}`);
  }
  // set = this.service.APIsGenericproductPortfolioDetails.map(function (sets_reps){
  //     return sets_reps.sets
  //   })

  // set = this.APIsGenericProductPortfolio.map(function (sets_reps){
  //   return sets_reps.sets
  // })
//  txt = "#div-name-1234-characteristic:561613213213";
//
  // var numb = txt.match(/\d/g);
  // numb = numb.join("");
  // alert (numb);​

  // formula = document.getElementsByClassName('formula')
  // numb = formula.match()

//    justNumbers(string:any){
//    var numsStr = string.replace(/[^0-9]/g,'');
//    console.log(parseInt(numsStr))
//    numsStr.style="{'color': red}"
// }
// public x = this.justNumbers('abcdefg12hijklmnop');

// // int id = 1 ; // id is declared variable
// // console.log ("id ", this.id );

// formula(){
//   let x = document.getElementsByClassName('formula')
//   // console.log(x.test(/\d+/))
//   let y = x.item()
// }
// usersSession: any
// usersSession = [
//   {
//     "exercise": "chest press", sets: [12, 45, 32, 14]
//   },
//   {
//     "exercise": "cable crossover", sets: [12, 5, 6, 31, 1]
//   },
//   {
//     "exercise": "incline chest press", sets: [12, 45, 32, 14]
//    },
//   {
//     "exercise": "decline chest press", sets: [12, 88, 2, 1, 10 , 5 , 20]
//   },
//   {
//     "exercise": "push up ", sets: [12, 45, 32, 14]
//   }
// ]

// exercise = this.usersSession.map(function (exercise_names) {
// return exercise_names.exercise
// });
// console.log(exercise)


// set = this.usersSession.map(function (sets_reps) {
// return sets_reps.sets
// });


}
