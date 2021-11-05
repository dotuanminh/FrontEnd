import { Department } from "./Department";
import{Position} from "./Position"
export class Account {
    private static counter: number =0;
    private AccountID : number;
    private Email : string;
    private Username : string;
    private FullName : string;
    private Department : Department;
    private Position : Position;
    private CreateDate : Date ;

    

	constructor( Email: string, Username: string, FullName: string, Department: Department, Position: Position,CreateDate : Date ) {
		this.AccountID = ++Account.counter;
		this.Email = Email;
		this.Username = Username;
		this.FullName = FullName;
		this.Department = Department;
		this.Position = Position;
       this.CreateDate = CreateDate;
	}
   
	public getEmail(): string {
		return this.Email;
	}
    
	public setEmail(value: string) {
		this.Email = value;
	}

	public getUsername(): string {
		return this.Username;
	}

	public setUsername(value: string) {
		this.Username = value;
	}

	public getFullName(): string {
		return this.FullName;
	}

	

 
	public getPosition(): Position {
		return this.Position;
	}

	public setFullName(value: string) {
		this.FullName = value;
	}


 
	public getDepartment(): Department {
		return this.Department;
	}

   
	public setDepartment(value: Department) {
		this.Department = value;
	}
	
	public setPosition(value: Position) {
		this.Position = value;
	}
    


	public getCreateDate(): Date {
		return this.CreateDate;
	}

	public setCreateDate(value: Date) {
		this.CreateDate = value;
	}

    public printInfoAccount(){
        console.log("ID: " + this.AccountID);
        console.log("Email: " + this.Email);
        console.log("UserName: " + this.Username);
        console.log("Fullname: " + this.FullName);
        console.log("Deparmnet: " + this.Department);
        console.log("Position: " + this.Position);
        console.log("CreateDate: " + this.CreateDate);
    }
}