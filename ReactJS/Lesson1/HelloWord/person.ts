
export class person{
    private frisst_name: string;
    private last_name :  string;

    constructor(frisst_name: string,last_name :  string){
        this.frisst_name = frisst_name;
        this.last_name = last_name; 
    }

    /**
     * Getter $frisst_name
     * @return {string}
     */
	public get $frisst_name(): string {
		return this.frisst_name;
	}

    /**
     * Getter $last_name
     * @return { string}
     */
	public get $last_name():  string {
		return this.last_name;
	}

    /**
     * Setter $frisst_name
     * @param {string} value
     */
	public set $frisst_name(value: string) {
		this.frisst_name = value;
	}

    /**
     * Setter $last_name
     * @param { string} value
     */
	public set $last_name(value:  string) {
		this.last_name = value;
	}


   public print(){
    console.log(this.frisst_name + " " + this.last_name);
   }
}