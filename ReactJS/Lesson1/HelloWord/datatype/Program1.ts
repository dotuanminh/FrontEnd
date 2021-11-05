import { Department } from "./Department";
import { Position } from "./Position";
import { Account } from "./Account";
import { Group } from "./Group";
import { GroupAccount } from "./GroupAccount";
import { PositionName } from "./PositionName";

//Department
var Department1 = new Department("Sale");
Department1.printInfo();
var Department2 = new Department("bảo vệ");
Department2.printInfo();
var Department3 = new Department("Marketing");
Department3.printInfo();

console.log("-------------------------------------");
//Position
var Position1 = new Position(PositionName.DEV);
Position1.printInfoPosition();
var Position2 = new Position(PositionName.TEST);
Position2.printInfoPosition();
var Position3 = new Position(PositionName.SCRUM_MASTER);
Position3.printInfoPosition();

console.log("-------------------------------------");
//Account
var Account1 = new Account("qwer@gmail.com","abc123","Nguyễn Anh Quân",{DepartmentName : "Sale"},{PositionName : PositionName.DEV}, new Date());
Account1.printInfoAccount();
