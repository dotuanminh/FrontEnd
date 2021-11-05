"use strict";
exports.__esModule = true;
exports.printDepartment = exports.Department = void 0;
var Department = /** @class */ (function () {
    function Department(name) {
        this.id = ++Department.counter;
        this.name = name;
    }
    Department.prototype.getName = function () {
        return this.name;
    };
    Department.prototype.setName = function (value) {
        this.name = value;
    };
    Department.counter = 0;
    return Department;
}());
exports.Department = Department;
var department1 = new Department("A");
function printDepartment(department) {
    console.log(department);
}
exports.printDepartment = printDepartment;
printDepartment(department1);
