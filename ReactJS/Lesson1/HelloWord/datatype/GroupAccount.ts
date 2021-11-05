import { Account } from "./Account";
import { Group } from "./Group";
export class GroupAccount {
    private static counter: number =0;
    private GroupID : Group;
    private AccountID : Account;
    private JoinDate : Date;


	constructor(  JoinDate: Date) {
		this.JoinDate = JoinDate;
	}


	public getGroupID(): Group {
		return this.GroupID;
	}

   
	public setGroupID(value: Group) {
		this.GroupID = value;
	}

 
	public getAccountID(): Account {
		return this.AccountID;
	}

	public getJoinDate(): Date {
		return this.JoinDate;
	}

    
	public setAccountID(value: Account) {
		this.AccountID = value;
	}

  
	public setJoinDate(value: Date) {
		this.JoinDate = value;
	}

    public printInfo(){
        console.log("GroupID: " + this.GroupID);
        console.log("AccountID: " + this.AccountID);
        console.log("JoinDate: " + this.JoinDate);
    }
}