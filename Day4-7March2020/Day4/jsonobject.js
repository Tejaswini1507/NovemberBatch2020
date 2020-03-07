// // simple object
// var studentobj={
//     id:1,
//     name:"Pqr"
// }
// console.log(studentobj.id+" " +studentobj.name);
// // Array of object
// var arrObj=[
//     {
//         id:1,
//         name:'bjhvsw'
//     },
//     {
//         id:2,
//         name:'nkshwkjd'
//     },
//     {
//         id:3,
//         name:"mdlnkwejk"
//     }
// ]
// for(let i:number=0; i<arrObj.length ; i++ ){
//     console.log(arrObj[i].id +" " +arrObj[i].name);
// }
var jsonObj = {
    status: "suceess",
    data: [
        {
            id: 1,
            name: 'MSD'
        },
        {
            id: 2,
            name: 'Rohit Sharma'
        },
        {
            id: 3,
            name: "Virat Kohli"
        }
    ],
    error: "Data is not available"
};
var temp = jsonObj.status;
console.log(temp);
if (temp.match("suceess")) {
    // for(let i:number=0; i<jsonObj.data.length; i++){
    //     console.log(jsonObj.data[i].id+ " " +jsonObj.data[i].name)
    // }
    jsonObj.data.forEach(function (element) {
        console.log(element.id + " " + element.name);
    });
}
else {
    console.log(jsonObj.error);
}
