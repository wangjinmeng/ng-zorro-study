import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
const provinces = [{
  value: 'zhejiang',
  label: 'Zhejiang'
}, {
  value: 'jiangsu',
  label: 'Jiangsu'
}];
const cities = {
  zhejiang: [{
    value: 'hangzhou',
    label: 'Hangzhou',
  }, {
    value: 'ningbo',
    label: 'Ningbo',
    isLeaf: true
  }],
  jiangsu: [{
    value: 'nanjing',
    label: 'Nanjing'
  }]
};
const scenicspots = {
  hangzhou: [{
    value: 'xihu',
    label: 'West Lake',
    isLeaf: true
  }],
  nanjing: [{
    value: 'zhonghuamen',
    label: 'Zhong Hua Men',
    isLeaf: true
  }]
};

@Component({
  templateUrl: './cascade.component.html'
})
export class CascadeComponent implements OnInit{
  options=[
    {
      value:'上海',
      label:'上海',
      children:[
        {
          value:'浦东',
          label:'浦东',
          isLeaf:true
        },
        {
          value:'徐汇',
          label:'徐汇',
          isLeaf:true
        },
        {
          label:'闵行',
          value:'闵行',
          isLeaf:true
        },
        {
          value:'杨浦',
          label:'杨浦',
          isLeaf:true
        }
      ]
    },
    {
      label:'江西',
      value:'江西',
      children:[
        {
          value:'景德镇',
          label:'景德镇',
          isLeaf:true
        },
        {
          value:'南昌',
          label:'南昌',
          isLeaf:true
        },
        {
          value:'抚州',
          label:'抚州',
          isLeaf:true
        }
      ]
    }
  ];
  options2=[
    {
      value:'上海',
      label:'上海',
      children:[
        {
          value:'浦东',
          label:'浦东',
          isLeaf:true
        },
        {
          value:'徐汇',
          label:'徐汇',
          isLeaf:true
        },
        {
          label:'闵行',
          value:'闵行',
          isLeaf:true
        },
        {
          value:'杨浦',
          label:'杨浦',
          isLeaf:true
        }
      ]
    },
    {
      label:'江西',
      value:'江西',
      disabled: true,
      children:[
        {
          value:'景德镇',
          label:'景德镇',
          isLeaf:true
        },
        {
          value:'南昌',
          label:'南昌',
          isLeaf:true
        },
        {
          value:'抚州',
          label:'抚州',
          isLeaf:true
        }
      ]
    }
  ];
  options3=[{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
      value: 'hangzhou',
      label: 'Hangzhou',
      children: [{
        value: 'xihu',
        label: 'West Lake',
        code: 752100,
        isLeaf: true
      }],
    }, {
      value: 'ningbo',
      label: 'Ningbo',
      isLeaf: true
    }],
  }, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
      value: 'nanjing',
      label: 'Nanjing',
      children: [{
        value: 'zhonghuamen',
        label: 'Zhong Hua Men',
        code: 453400,
        isLeaf: true
      }],
    }],
  }];
  _value;
  _console($event){
    console.log($event)
  }
  @ViewChild('rendTpl') tpl:TemplateRef<any>;
  get _displayRender(): Function {
    return this.displayRender.bind(this);
  }
  displayRender(labels: string[], selectedOptions: any[]): any {
    return this.tpl;
  }
  loadData(e:{index:number,option:any,resolve:Function,reject:Function}):void{
    console.log(e)
    if(e.index==-1){
      e.resolve(provinces);
      return;
    }
    const option=e.option;
    option.loading=true;
    if(e.index===0){
      setTimeout(()=>{
        option.loading=false;
        e.resolve(cities[option.value])
      },1000)
    }
    if(e.index===1){
      setTimeout(()=>{
        option.loading=false;
        e.resolve(scenicspots[option.value])
      },1000)
    }
  }
  _form:FormGroup;
  ngOnInit(): void {
    this._form=new FormGroup({
      name:new FormControl()
    })
  }
  _reset(){
    this._form.reset();
  }
}
