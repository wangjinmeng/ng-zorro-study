import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
  _console(s,e){
    console.log(s);
    console.log(e);
  }
  basicInput:string;
}
