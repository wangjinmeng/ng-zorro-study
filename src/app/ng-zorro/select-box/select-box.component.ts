import { Component, OnInit } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html'
})
export class SelectBoxComponent implements OnInit {
  constructor(private jsonp:Jsonp) { }

  options = [
    { value: 'Jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'Daisy', label: 'Daisy' },
    { value: 'Lily', label: 'Lily' },
    { value: 'disabled', label: 'Disabled', disabled: true }
  ];
  selectValue:string=this.options[0].value;
  selectMultipleValue=[
    this.options[0].value,
    this.options[1].value,
    this.options[2].value,
    this.options[3].value,
    this.options[4].value
  ];
  searchOptions;
  searchChange(searchText){
    const query=encodeURI(searchText);
    this.jsonp.get(`https://suggest.taobao.com/sug?code=utf-8&q=${query}&callback=JSONP_CALLBACK`)
      .map(res=>res.json())
      .subscribe((data)=>{
        this.searchOptions = data.result;
      })
  }
  index=0;
  loadOptions=[];
  loading=false;
  generateFakeData() {
    for (let i = 0; i < 5; i++) {
      this.loadOptions.push({ value: this.index, label: `option${this.index}` });
      this.index++;
    }
  }
  ngOnInit() {
    this.generateFakeData();
  }
  scrollToBottom(){
    this.loading=true;
    setTimeout(()=>{
      this.loading=false;
      this.generateFakeData()
    },3000)
  }
}
