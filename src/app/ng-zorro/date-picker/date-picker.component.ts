import { Component, OnInit } from '@angular/core';
import *as moment from 'moment';
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html'
})
export class DatePickerComponent {
  date=new Date();
  date2=new Date('2017-10-13')
  _disableDay(current){
    return current.getTime()>new Date().getTime()
  }
  _disabledMonth(current){
    return current&&moment(current).day(0).valueOf()>moment().valueOf();
  }

  startDate=null;
  endDate=null;
  displayStartDate(sDate){
    if(!this.startDate||!this.endDate){
      return false;
    }
    console.log(this.startDate);
    console.log(this.endDate);
    return false
  }
  displayEndDate(eDate){
    if(!this.startDate||!this.endDate){
      return false;
    }
    console.log(this.startDate);
    console.log(this.endDate);
    return false
  }
}
