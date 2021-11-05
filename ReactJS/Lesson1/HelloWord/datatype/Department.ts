export class Department {
    private static counter: number =0;

    private DepartmentID : number;
    private DepartmentName: string;


	constructor( DepartmentName: string) {
		this.DepartmentID = ++Department.counter;
		this.DepartmentName = DepartmentName;
	}


    
	// public getDepartmentID(): number {
	// 	return this.DepartmentID;
	// }


	// public setDepartmentID(value: number) {
	// 	this.DepartmentID = value;
	// }

	public getDepartmentName(): string {
		return this.DepartmentName;
	}

    
	public setDepartmentName(value: string) {
		this.DepartmentName = value;
	}

    public printInfo(){
        console.log("ID: " + this.DepartmentID);
        console.log("Name: " + this.DepartmentName);
    }

}