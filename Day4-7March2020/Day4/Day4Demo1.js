// class Employee{
//     id:number=1;
//     name:string="Tejaswini"
//     display(){
//         console.log(this.id+" " +this.name); 
//     }
// }
// var empObj=new Employee();
// empObj.display();
// class Person{
//     id:number;
//     name:string;
//     public setId(myid){
//         this.id=myid;
//     }
//     public getId():number{
//         return (this.id);
//     }
//     public setName(myname){
//         this.name=myname;
//     }
//     public getName():string{
//         return (this.name);
//     }
// }
// var personObj=new Person();
// personObj.setId(1);
// personObj.setName("lmn");
// console.log(personObj.id+" " +personObj.name);
var Student = /** @class */ (function () {
    function Student(myid, myname) {
        this.id = myid;
        this.name = myname;
    }
    Student.prototype.show = function () {
        console.log(this.id + " " + this.name);
    };
    return Student;
}());
var studentObj = new Student(1, "Yash");
studentObj.show();
