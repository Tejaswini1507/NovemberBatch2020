var list:number[];
console.log(list);

var list1=["Black","Red"];


var list2=[7,"MSD",true];

// push()
list2.push("csk");
console.log(list2);

// pop()
list2.pop();
console.log(list2);

// join()
console.log(list2.join(" "));
console.log(list2.join("#"));

// splice()  
list2.splice(1,0,"CSK","SRH","MI","RCB",45,false);    //add
console.log(list2);

list2.splice(4,2);                                    //remove
console.log(list2);                  

list2.splice(5,2,"MI",45);                          //add or delete
console.log(list2);

// slice() method
var temp=list2.slice(1,6);
console.log(temp);                             //start and end index            


// map()
var list3:number[]=[1,4,9,16,25];
var temp1=list3.map(Math.sqrt);
console.log(temp1);


