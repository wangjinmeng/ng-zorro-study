import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-box',
  templateUrl: './transfer-box.component.html'
})
export class TransferBoxComponent implements OnInit {
  list:any[]=[];
  constructor() { }
  ngOnInit() {
    for (let i=0;i<20;i++){
      this.list.push({
        key:i.toString(),
        title:`content${i+1}`,
        disabled:i%3<1
      })
    }
  }
}
