"use strict";
exports.__esModule = true;
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(Email, Username, FullName, Department, Position, CreateDate) {
        this.AccountID = ++Account.counter;
        this.Email = Email;
        this.Username = Username;
        this.FullName = FullName;
        this.Department = Department;
        this.Position = Position;
        this.CreateDate = CreateDate;
    }
    Account.prototype.getEmail = function () {
        return this.Email;
    };
    Account.prototype.setEmail = function (value) {
        this.Email = value;
    };
    Account.prototype.getUsername = function () {
        return this.Username;
    };
    Account.prototype.setUsername = function (value) {
        this.Username = value;
    };
    Account.prototype.getFullName = function () {
        return this.FullName;
    };
    Account.prototype.getPosition = function () {
        return this.Position;
    };
    Account.prototype.setFullName = function (value) {
        this.FullName = value;
    };
    Account.prototype.getDepartment = function () {
        return this.Department;
    };
    Account.prototype.setDepartment = function (value) {
        this.Department = value;
    };
    Account.prototype.setPosition = function (value) {
        this.Position = value;
    };
    Account.prototype.getCreateDate = function () {
        return this.CreateDate;
    };
    Account.prototype.setCreateDate = function (value) {
        this.CreateDate = value;
    };
    Account.prototype.printInfoAccount = function () {
        console.log("ID: " + this.AccountID);
        console.log("Email: " + this.Email);
        console.log("UserName: " + this.Username);
        console.log("Fullname: " + this.FullName);
        console.log("Deparmnet: " + this.Department);
        console.log("Position: " + this.Position);
        console.log("CreateDate: " + this.CreateDate);
    };
    Account.counter = 0;
    return Account;
}());
exports.Account = Account;
