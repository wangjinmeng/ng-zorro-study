import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-box',
  templateUrl: './switch-box.component.html'
})
export class SwitchBoxComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
  switchValue=true;
  switchDisabledValue=true;
}
