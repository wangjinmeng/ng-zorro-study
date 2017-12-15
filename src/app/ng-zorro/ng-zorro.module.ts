import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {IndexComponent} from "./index/index.component";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {PageBarComponent} from "./pagebar/pagebar.component";
import { BtnComponent } from './btn/btn.component';
import {GridComponent} from "./grid/grid.component";

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule.forChild([
      {
        path:'',
        component:IndexComponent,
        children:[
          {path:'pageBar',component:PageBarComponent},
          {path:'btn',component:BtnComponent},
          {path:'grid',component:GridComponent},
          {path:'',redirectTo:'btn',pathMatch:'full'}
        ],
      }
    ])
  ],
  declarations: [
    IndexComponent,
    PageBarComponent,
    BtnComponent,
    GridComponent
  ]
})
export class NgZorroModule { }
