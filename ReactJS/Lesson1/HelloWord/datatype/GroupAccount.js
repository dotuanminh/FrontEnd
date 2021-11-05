"use strict";
exports.__esModule = true;
exports.GroupAccount = void 0;
var GroupAccount = /** @class */ (function () {
    function GroupAccount(JoinDate) {
        this.JoinDate = JoinDate;
    }
    GroupAccount.prototype.getGroupID = function () {
        return this.GroupID;
    };
    GroupAccount.prototype.setGroupID = function (value) {
        this.GroupID = value;
    };
    GroupAccount.prototype.getAccountID = function () {
        return this.AccountID;
    };
    GroupAccount.prototype.getJoinDate = function () {
        return this.JoinDate;
    };
    GroupAccount.prototype.setAccountID = function (value) {
        this.AccountID = value;
    };
    GroupAccount.prototype.setJoinDate = function (value) {
        this.JoinDate = value;
    };
    GroupAccount.prototype.printInfo = function () {
        console.log("GroupID: " + this.GroupID);
        console.log("AccountID: " + this.AccountID);
        console.log("JoinDate: " + this.JoinDate);
    };
    GroupAccount.counter = 0;
    return GroupAccount;
}());
exports.GroupAccount = GroupAccount;
