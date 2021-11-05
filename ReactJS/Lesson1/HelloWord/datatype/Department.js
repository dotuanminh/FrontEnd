"use strict";
exports.__esModule = true;
exports.Department = void 0;
var Department = /** @class */ (function () {
    function Department(DepartmentName) {
        this.DepartmentID = ++Department.counter;
        this.DepartmentName = DepartmentName;
    }
    // public getDepartmentID(): number {
    // 	return this.DepartmentID;
    // }
    // public setDepartmentID(value: number) {
    // 	this.DepartmentID = value;
    // }
    Department.prototype.getDepartmentName = function () {
        return this.DepartmentName;
    };
    Department.prototype.setDepartmentName = function (value) {
        this.DepartmentName = value;
    };
    Department.prototype.printInfo = function () {
        console.log("ID: " + this.DepartmentID);
        console.log("Name: " + this.DepartmentName);
    };
    Department.counter = 0;
    return Department;
}());
exports.Department = Department;
