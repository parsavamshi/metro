import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeptService } from '../dept.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-intermediates',
  templateUrl: './intermediates.component.html',
  styleUrls: ['./intermediates.component.scss']
})
export class IntermediatesComponent implements OnInit {
  // displayedColumns = ['id','name', 'casName'];
  displayedColumns = ['id','name', 'casNumber'];
  dataSource!:MatTableDataSource<any>;
  apiResponse:any = [];

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;


  constructor(private service: DeptService) {}

  ngOnInit() {
    this.service.intermediateDetailes().subscribe((response:any) =>{
      this.apiResponse = response;
      this.dataSource = new MatTableDataSource(response);
      // this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    })

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

}
