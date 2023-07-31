import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeptService } from '../dept.service';
import * as _ from 'lodash';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-apis-generic-products-portfolio',
  templateUrl: './apis-generic-products-portfolio.component.html',
  styleUrls: ['./apis-generic-products-portfolio.component.scss']
})
export class ApisGenericProductsPortfolioComponent implements OnInit {

  //    constructor() { }

  // ngOnInit(): void {
  // }

  displayedColumns = ['id','name', 'DMF', 'USDMF','CEP','therapeuticCategory','casNumber','details',];
  dataSource!:MatTableDataSource<any>;
  apiResponse:any = [];

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;


  constructor(private service: DeptService,) {}

  ngOnInit() {
    this.service.APIsGenericProductPortfolio().subscribe((response:any) =>{
      this.apiResponse = response;
      this.dataSource = new MatTableDataSource(response);
      // this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    })



    // ngOnInit(): void {

    // }
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }
  productName($event:any){
    let filteredData = _.filter(this.apiResponse,(item) =>{
      return item.productName.toLowerCase() ==  $event.value.toLowerCase();
    })
    this.dataSource = new MatTableDataSource(filteredData);
  }
  therapeuticCategory($event:any){
    let filteredData = _.filter(this.apiResponse,(item) =>{
      return item.therapeuticCategory.toLowerCase() ==  $event.value.toLowerCase();
    })
    this.dataSource = new MatTableDataSource(filteredData);
  }
  onChange($event:any){
    let filteredData = _.filter(this.apiResponse,(item) =>{
      return item.casNumber.toLowerCase() ==  $event.value.toLowerCase();
    })
    this.dataSource = new MatTableDataSource(filteredData);
  }
  scrollToTop(){
  ( function smoothscroll(){
    const currentscroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentscroll > 0){
      window.scrollTo(0,currentscroll - (currentscroll / 0) )
    }
  })();
  }
  // term: string | any;
  // displayedColumns = ['id','name', 'DMF', 'USDMF','CEP','therapeuticCategory','casNumber','details'];
  // dataSource!:MatTableDataSource<any>;
  // apiResponse:any = [];

  // @ViewChild('paginator') paginator! : MatPaginator;
  // @ViewChild(MatSort) matSort! : MatSort;

  // constructor(private service: DeptService) {}

  // ngOnInit() {
  //   this.service.APIsGenericProductPortfolio().subscribe((response:any) =>{
  //     this.apiResponse = response;
  //     this.dataSource = new MatTableDataSource(response);
  //     this.dataSource.paginator = this.paginator;
  //     this.dataSource.sort = this.matSort;
  //   })
  // }

  // filterData($event : any){
  //   this.dataSource.filter = $event.target.value;
  // }
  // productName($event:any){
  //   let filteredData = _.filter(this.apiResponse,(item) =>{
  //     return item.productName.toLowerCase() ==  $event.value.toLowerCase();
  //   })
  //   this.dataSource = new MatTableDataSource(filteredData);
  // }
  // therapeuticCategory($event:any){
  //   let filteredData = _.filter(this.apiResponse,(item) =>{
  //     return item.therapeuticCategory.toLowerCase() ==  $event.value.toLowerCase();
  //   })
  //   this.dataSource = new MatTableDataSource(filteredData);
  // }
  // onChange($event:any){
  //   let filteredData = _.filter(this.apiResponse,(item) =>{
  //     return item.casNumber.toLowerCase() ==  $event.value.toLowerCase();
  //   })
  //   this.dataSource = new MatTableDataSource(filteredData);
  // }

}
