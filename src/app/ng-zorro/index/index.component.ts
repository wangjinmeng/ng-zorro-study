import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Router, NavigationEnd, ActivatedRoute} from "@angular/router";
import 'rxjs/Rx'
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit{
  ngOnInit(): void {
  }
  isCollapsed:boolean=false;
  mode:boolean=false;
  subTitleName:string='管理平台';
  constructor(
    public pageTitle:Title,
    public router:Router,
    public route:ActivatedRoute
  ) {
    // router.events
    //   .filter(event => event instanceof NavigationEnd)
    //   .subscribe((data)=>{
    //     console.log(route.snapshot.data[0]);
    //     console.log(data);
    //   })
  }
  onActivate(component){
    let pageData = component.pageData||{};
    Object.assign(pageData,{name:'管理平台',path:''});
    this.pageTitle.setTitle(pageData.name);
    this.subTitleName=pageData.name
  }
  onDeactivate(component){}
}
