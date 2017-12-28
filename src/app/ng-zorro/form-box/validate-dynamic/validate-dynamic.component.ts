import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-validate-dynamic',
  templateUrl: './validate-dynamic.component.html'
})
export class ValidateDynamicComponent implements OnInit {
  validateForm:FormGroup;
  constructor(private fb:FormBuilder) { }
  ngOnInit() {
    this.validateForm=this.fb.group({
      userName:['',[Validators.required]],
      email:['',[Validators.required]],
      birthday:['',[Validators.required]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]],
      comment:['',[Validators.required]]
    })
  }
}
