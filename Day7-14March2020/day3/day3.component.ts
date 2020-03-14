import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.component.html',
  styleUrls: ['./day3.component.css']
})
export class Day3Component implements OnInit {

  // class binding
  successClass:string="go";
  isdanger:boolean=true;
  isStyle:boolean=true;
  myClass={
    go:this.isdanger,
    myStyle:this.isStyle
  }
  // two way binding
  name:string=" ";
  
  // template reference variable
  msg:string=" "; 
  constructor() { }

  ngOnInit() {
  }
  onClick(value,Value1){
    console.log(value);
    console.log(Value1);
    if(value=='admin'){
      this.msg="Login Sucessfully";
    }else{
      this.msg="Invalid Username!!!!"
    }
  }
}
