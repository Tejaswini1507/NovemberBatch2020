"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee() {
        this.id = 1;
        this.name = "Rahul";
    }
    Employee.prototype.show = function () {
        console.log(this.id + " " + this.name);
    };
    return Employee;
}());
exports.Employee = Employee;
// var empObj=new Employee();
// empObj.show();
