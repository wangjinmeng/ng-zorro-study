import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-box',
  templateUrl: './rate-box.component.html'
})
export class RateBoxComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
  rateNum:number=5;
  halfRateNum:number=4.5
}
