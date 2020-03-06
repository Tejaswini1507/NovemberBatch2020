// function display(){
//     console.log("Function without return without para");
// }

// display();

// function add(){
//     return 10*4;
// }
// console.log(add());

// function mul(a:number,b:number){
//     console.log(a*b);
// }
// mul(10,3);

// function div(l:number, m:number){
//     return (l/m);
// }
// console.log(div(10,2));


// Optional Parameter Function
function add1(a:number,b:number,c?:number){
    return a+b+c;
}
console.log(add1(10,3));

// Default Parameter Function

function mul1(a:number,b:number=10){
    return a*b;
}
console.log(mul1(2));

//...
function show(a:string,...b:any[]){
    console.log(a+b);
}

show("Tejaswini","Trainer","Hefshine","Softwares", 7, true);


function add3(l:any,...m:any[]){
    return (l+m);
}
console.log(add3(3,4,5,6,7));


// function add4(...l:any[],m:any){
//     return (l+m);
// }
// console.log(add3(3,4,5,6,7));

// Anonymous Function

var showMsg = function(){
    console.log("Anonymous function working!!");
}

showMsg();

// Fat arrow function
var dispMsg= (a:number, b:number)=>{
    console.log("Fat Arrow Function Works!!!"  +a+b);
}
dispMsg(10,20);

var showData=()=>"Hello World";
console.log(showData());
