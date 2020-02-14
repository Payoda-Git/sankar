import { Injectable } from "@angular/core";
import { IAppState } from "../store/index";
import { NgRedux } from "@angular-redux/store";
import { User } from "../model/user";
import {DatePipe} from '@angular/common';

@Injectable()
export class UsersActions {
  static USER_ADD = "USER_ADD";
  static USER_DELETE = "USER_DELETE";

  constructor(private ngRedux: NgRedux<IAppState>,private datePipe: DatePipe) {}

  add(obj: any): void {
    console.log("obj=====>", obj);
  //    const today: number = Date.now();
  //    const todayString = this.datePipe.transform(today,"MM/dd/yyyy")
  //  console.log(todayString); 
  

    // console.log(obj)
    this.ngRedux.dispatch({
      type: UsersActions.USER_ADD,
      payload: {
        ID: Math.floor(Math.random()*1000), // random id
        Name: obj.name,
        Email: obj.email,
        "Phone Number": obj.phoneNumber,
        "Product Name": obj.productName,
        "Rating": obj.performance,
        "Last Used": obj.used,       
      }
    });
  }

  delete(id): void {
    this.ngRedux.dispatch({
      type: UsersActions.USER_DELETE,
      payload: id
    });
  }
}

