console.log('Hello World');



// Identifiers
var stackoverflow;
// var 7stack@overflow

// variable declaration
// var let const


// Data Type

var num:number=7;
console.log(num);

var strMsg:string="Typescript Tutorial";
console.log(strMsg);

var boolvalue:boolean;
console.log(boolvalue);

// any
var strData:any="Heshine Softwares";
 strData=7;
 strData=false;


 console.log(strData);

// Operators
// 1 Conditional Operators

var num1:number=10;
var result=num1>5 ?"is greater than 5" :"not greater than 5";
console.log(result);

// Miscellaneous Operator
var data="32";
var result1=+data;

console.log("type of data: " +typeof(data));
console.log("type of result1 : " +typeof(result1));

// Type Assertion

var testData:any="Hello";
// testData.to

// using as keyword
// var resultdata=(testData as string);
// console.log(resultdata.toLowerCase());

// angel bracket
var resultData=<string> testData;
console.log(resultData.toUpperCase());

