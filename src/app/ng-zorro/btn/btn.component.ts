import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit {
  justifyType:string='start';
  constructor() { }

  ngOnInit() {
  }

}
