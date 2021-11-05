export class Department{
    private static counter: number =0;

    private id : number;
    private name: string;

    constructor(name : string){
        this.id = ++Department.counter;
        this.name =  name;
    }

    public getName() : string{
        return this.name;
    }

    public setName(value : string){
        this.name = value;
    }
    

   
    
}
var department1 = new Department("A");

export function printDepartment(department : Department) {
    console.log(department);
}

printDepartment(department1);