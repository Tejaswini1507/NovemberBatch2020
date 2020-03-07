"use strict";
exports.__esModule = true;
var EmpDetails = /** @class */ (function () {
    function EmpDetails(myname, company) {
        this.name = myname;
        this.company = company;
    }
    EmpDetails.prototype.display = function () {
        console.log(this.name + " " + this.company);
    };
    return EmpDetails;
}());
exports.EmpDetails = EmpDetails;
