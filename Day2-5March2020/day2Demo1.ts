

var num1: number = 10;

// if
if (num1 < 1) {
    console.log("is less than 1");
}
else {
    console.log("is greater than 1");
}

// nested if else
var a: number = 10;
var b: number = 20;
var c: number = 30;


if (a > b && a > c) {
    console.log(a + "a is highest number");
} else if (b > a && b > c) {
    console.log(b + "b is highest number");
} else {
    console.log(c + "c is highest number");
}



var num2: number = 2;

switch (num2) {
    case 1:
    console.log("Choice is one");
    break;
    case 2:
    console.log("Choice is two");
    break;
    case 3:
    console.log("Choice is three");
    break;
    default:
    console.log("bad choice");
}


// LOOP
// for loop
for(var i:number=1; i<10; i++){
    console.log("using for loop " +i);
}
// console.log(i)

var num:number=1;

// do-while
do{
    console.log(num);
    num++;
} while(num<5);

// while
var num3:number=1;

while(num3<10){
    console.log(num3);
    num3++;
}