import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-todays-review',
  templateUrl: './todays-review.component.html',
  styleUrls: ['./todays-review.component.css']
})
export class TodaysReviewComponent implements OnInit {
  todayString;
  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
  
     const today: number = Date.now();
     this.todayString = this.datePipe.transform(today,"MM/dd/yyyy")
     console.log(this.todayString); 
   }

}