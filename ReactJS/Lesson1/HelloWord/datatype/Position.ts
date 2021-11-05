import { PositionName } from "./PositionName";
export class Position {
    private static counter: number =0;

    private PositionID : number;
    private PositionName: PositionName;


	constructor( PositionName: PositionName) {
		this.PositionID = ++Position.counter;
		this.PositionName = PositionName;
	}


	public getPositionName(): PositionName {
		return this.PositionName;
	}

    
	public setPositionName(value: PositionName) {
		this.PositionName = value;
	}

    public printInfoPosition(){
        console.log("ID: " + this.PositionID);
        console.log("Name: " + this.PositionName);
    }

}