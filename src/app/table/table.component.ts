import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { User } from "../model/user";
import { UsersActions } from "../actions/users.actions";
import { select } from "@angular-redux/store";
import { Observable, of } from "rxjs";

import {delay} from 'rxjs/operators'


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent  {
  @select("users") public users$: Observable<User>;
  displayColumns = ['ID','Name', 'Email','Phone Number','Product Name','Rating', 'Last Used'];
 
}


