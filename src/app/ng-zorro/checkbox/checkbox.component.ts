import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
  _console(e:any){
    console.log(e)
  }
  _check:boolean=true;
  checkOptionsOne=[
    {label:'香蕉',value:'banana',checked:true},
    {label:'苹果',value:'apple',checked:true},
    {label:'梨',value:'pear',checked:true}
  ]
  indeterminate:boolean=false;
  get allCheck(){
    return this.checkOptionsOne.every(item=>item.checked==true)?true:false;
  }
  updateAllChecked(flag){
    this.indeterminate=false;
    this.checkOptionsOne.forEach((data)=>{
      data.checked=flag
    })
  }
  updateSingleChecked(){
    if(this.checkOptionsOne.every(item=>item.checked==false)){
      this.indeterminate=false;
    }else if(this.checkOptionsOne.every(item=>item.checked==true)){
      this.indeterminate=false;
    }else{
      this.indeterminate=true;
    }
  }
}
