import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.css']
})
export class Day2Component implements OnInit {
  // string interpolation
  name:string="String Interpolation works!";
  testData:boolean=true;

  // property binding
  name1:string="Property Binding Works!";

  // for hidden attribute
  ishidden:boolean=true;

  // Event Binding
  displayMsg:string=" ";
  showMsg:string=" "; 

  // style Binding
  mycolor:string="yellow";
  isError:boolean=false;
  myStyle={
    color:"rgb(82, 132, 218)",
    fontStyle:"italic",
    fontSize:"100px",
    textDecoration:"underline"
  }
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    console.log("Event Binding Works!!!");
    this.displayMsg="Event Binding Works!!!";
  }
  // for $event
  onShow(value){
    console.log(value);
    this.showMsg=value.type;
  }
}
