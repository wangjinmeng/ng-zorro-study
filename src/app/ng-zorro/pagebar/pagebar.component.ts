import { Component, OnInit } from '@angular/core';
import {ComponentType} from "../common/ComponentType";

@Component({
  selector: 'app-pagebar',
  templateUrl: './pagebar.component.html'
})
export class PageBarComponent implements ComponentType {
  pageData: {
    name: string;
    path: string;
  }={
    name:'分页',
    path:'pageBar'
  };
  constructor() { }
}
