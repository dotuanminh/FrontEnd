"use strict";
exports.__esModule = true;
var Department_1 = require("./Department");
var Position_1 = require("./Position");
var Account_1 = require("./Account");
var PositionName_1 = require("./PositionName");
//Department
var Department1 = new Department_1.Department("Sale");
Department1.printInfo();
var Department2 = new Department_1.Department("bảo vệ");
Department2.printInfo();
var Department3 = new Department_1.Department("Marketing");
Department3.printInfo();
console.log("-------------------------------------");
//Position
var Position1 = new Position_1.Position(PositionName_1.PositionName.DEV);
Position1.printInfoPosition();
var Position2 = new Position_1.Position(PositionName_1.PositionName.TEST);
Position2.printInfoPosition();
var Position3 = new Position_1.Position(PositionName_1.PositionName.SCRUM_MASTER);
Position3.printInfoPosition();
console.log("-------------------------------------");
//Account
var Account1 = new Account_1.Account("qwer@gmail.com", "abc123", "Nguyễn Anh Quân", Department_1., { PositionName: PositionName_1.PositionName.DEV }, new Date());
Account1.printInfoAccount();
