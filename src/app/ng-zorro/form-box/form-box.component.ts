import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-box',
  templateUrl: './form-box.component.html',
  styles:[
    `
      .dynamic-delete-button {
        cursor: pointer;
        position: relative;
        top: 4px;
        font-size: 24px;
        color: #999;
        transition: all .3s;
      }
    `
  ]
})
export class FormBoxComponent implements OnInit {
  validateForm: FormGroup;
  validateForm2: FormGroup;
  validateForm3: FormGroup;
  controlArray:any[]=[];
  isCollapse=true;
  //  动态增减表单项
  validateForm4:FormGroup;
  validateForm5:FormGroup;
  validateForm6:FormGroup;
  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
  }
  constructor(private fb: FormBuilder) {}

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls[ 'password' ].value) {
      return { confirm: true, error: true };
    }
  };
  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ false]
    });

    this.validateForm2 = this.fb.group({
      email            : [ null, [ Validators.email ] ],
      password         : [ null, [ Validators.required ] ],
      checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ],
      nickname         : [ null, [ Validators.required ] ],
      phoneNumberPrefix: [ '+86' ],
      phoneNumber      : [ null, [ Validators.required ] ],
      website          : [ null, [ Validators.required ] ],
      captcha          : [ null, [ Validators.required ] ],
      agree            : [ false ]
    });
    this.validateForm3=this.fb.group({});
    for(let i=0;i<10;i++){
      this.controlArray.push({index:i,show:i<6});
      this.validateForm3.addControl(`field${i}`,new FormControl())
    }
    this.validateForm4=this.fb.group({
      passengers:this.fb.array([])
    })
    this.validateForm5=this.fb.group({
      name:new FormControl(),
      email:new FormControl(),
      phone:new FormControl()
    })
    this.validateForm6=this.fb.group({
      name:new FormControl(),
      email:new FormControl(),
      address:new FormControl(),
      phone:new FormControl()
    })
  }
  get passengers(){
    return this.validateForm4.get('passengers') as FormArray;
  }
  layoutType:string='inline';
  resetForm(formG:FormGroup){
    formG.reset();
  }
  toggle(){
    this.isCollapse=!this.isCollapse;
    for(let i=0;i<this.controlArray.length;i++){
      this.controlArray[i].show=this.isCollapse?i<6:true;
    }
  }
  addItem(){
    this.passengers.push(new FormControl());
  }
  delItem(index){
    let oldPassengers=this.passengers.controls;
    if(oldPassengers.length>1){
      let newPassenger=this.passengers.removeAt(index);
    }
    return
  }
  get isHorizontal(){
    return this.layoutType=='horizontal'?true:false
  }
}
