import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-box',
  templateUrl: './slider-box.component.html',
  styles:[`
    .icon-wrapper{
      position: relative;
      padding: 0 30px;
    }
    .icon-wrapper .anticon {
       position: absolute; 
       top: -3px; 
       width: 16px; 
       height: 16px; 
       line-height: 1; 
       font-size: 16px; 
       color: rgba(0,0,0,.25); 
    }
    .icon-wrapper .anticon.anticon-highlight{
      color: #666;
    }
    .icon-wrapper .anticon:first-child {
      left: 0;
    }
    .icon-wrapper .anticon:last-child {
      right: 0;
    }
  `]
})
export class SliderBoxComponent implements OnInit {
  disabledState=false;
  constructor() { }
  ngOnInit() {}
  value1=10;
  value2=0.1;
  iconSliderValue:number=10;
  iconMaxNum=20;
  iconLeftClass={
    'anticon':true,
    'anticon-frown-o':true,
    'anticon-highlight':true
  };
  iconRightClass={
    'anticon':true,
    'anticon-smile-o':true,
    'anticon-highlight':false
  };
  iconSliderChange(num){
    if(num>=this.iconMaxNum/2){
      this.iconLeftClass['anticon-highlight']=false;
      this.iconRightClass['anticon-highlight']=true;
    }else {
      this.iconLeftClass['anticon-highlight']=true;
      this.iconRightClass['anticon-highlight']=false;
    }
  }
  formatter(value){
    return `${value}%`
  }
  _console(e){
    console.log(e)
  }
  marks:any={
    0:'0°',
    10:'10°',
    20:'20°',
    37:'37°',
    100:{
      style: {
        color: '#f50',
      },
      label: '<strong>100°C</strong>'
    }
  }
}
