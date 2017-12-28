import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {IndexComponent} from "./index/index.component";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {PageBarComponent} from "./pagebar/pagebar.component";
import { BtnComponent } from './btn/btn.component';
import {GridComponent} from "./grid/grid.component";
import { LayoutComponent } from './layout/layout.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { StepsComponent } from './steps/steps.component';
import {CascadeComponent} from "./cascade/cascade.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import {DatePickerStartEndComponent} from './date-picker/datepicker-start-end/datepicker-start-end.component';
import { InputComponent } from './input/input.component';
import { RateBoxComponent } from './rate-box/rate-box.component';
import { RadioBoxComponent } from './radio-box/radio-box.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import { SliderBoxComponent } from './slider-box/slider-box.component';
import { SwitchBoxComponent } from './switch-box/switch-box.component';
import { TimePickerBoxComponent } from './time-picker-box/time-picker-box.component';
import { TransferBoxComponent } from './transfer-box/transfer-box.component';
import { FormBoxComponent } from './form-box/form-box.component';
import { ValidateDynamicComponent } from './form-box/validate-dynamic/validate-dynamic.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path:'',
        component:IndexComponent,
        children:[
          {path:'pageBar',component:PageBarComponent},
          {path:'btn',component:BtnComponent},
          {path:'grid',component:GridComponent},
          {path:'layout',component:LayoutComponent},
          {path:'dropdown',component:DropdownComponent},
          {path:'steps',component:StepsComponent},
          {path:'cascade',component:CascadeComponent},
          {path:'checkbox',component:CheckboxComponent},
          {path:'date-picker',component:DatePickerComponent},
          {path:'input',component:InputComponent},
          {path:'rate-box',component:RateBoxComponent},
          {path:'radio-box',component:RadioBoxComponent},
          {path:'select-box',component:SelectBoxComponent},
          {path:'slider-box',component:SliderBoxComponent},
          {path:'switch-box',component:SwitchBoxComponent},
          {path:'time-picker',component:TimePickerBoxComponent},
          {path:'transfer-box',component:TransferBoxComponent},
          {path:'form-box',component:FormBoxComponent},
          {path:'',redirectTo:'btn',pathMatch:'full'}
        ]
      }
    ])
  ],
  declarations: [
    IndexComponent,
    PageBarComponent,
    BtnComponent,
    GridComponent,
    LayoutComponent,
    DropdownComponent,
    StepsComponent,
    CascadeComponent,
    CheckboxComponent,
    DatePickerComponent,
    DatePickerStartEndComponent,
    InputComponent,
    RateBoxComponent,
    RadioBoxComponent,
    SelectBoxComponent,
    SliderBoxComponent,
    SwitchBoxComponent,
    TimePickerBoxComponent,
    TransferBoxComponent,
    FormBoxComponent,
    ValidateDynamicComponent
  ]
})
export class NgZorroModule { }
