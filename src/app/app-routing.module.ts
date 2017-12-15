import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
@NgModule({
  imports:[
    RouterModule.forRoot([
      {
        path:'ng-zorro',
        loadChildren:'app/ng-zorro/ng-zorro.module#NgZorroModule'
      },
      {
        path:"",
        redirectTo:"ng-zorro",
        pathMatch:'full'
      }
    ])
  ],
  exports:[RouterModule]
})
export class AppRoutingModule{}
