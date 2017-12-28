import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styles:[`
  .box{
    margin-bottom: 20px;
  }
  .gray,.green{
    text-align: center;
    padding: 10px;
  }
  .gray{
    background: gray;
  }
  .green{
    background: yellowgreen;
  }
  .gutter-box{
    padding: 5px 0;
  }
  `
  ]
})
export class GridComponent implements OnInit{
  constructor() { }
  ngOnInit() {}
}
