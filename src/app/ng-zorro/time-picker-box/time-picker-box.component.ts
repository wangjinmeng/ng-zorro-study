import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-picker-box',
  templateUrl: './time-picker-box.component.html'
})
export class TimePickerBoxComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
  _data=null;
  _console(e){
    console.log(e)
  }
  newArray=(start, end)=>{
    let  result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };
  disabledHours=()=>{
    let hours= this.newArray(0,24);
    hours.splice(22,4);
    return hours
  }
  disabledMinutes=(h)=>{
    if(h==22){
      return this.newArray(0,30)
    }else if(h==23){
      return this.newArray(30,60)
    }
    return this.newArray(1,60)
  }
}
