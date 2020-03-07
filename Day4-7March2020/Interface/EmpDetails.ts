
import {IEmployee} from './Employee';

export class EmpDetails implements IEmployee{
    
    name: string;   
    company: string;

    constructor(myname:string, company:string){
        this.name=myname;
        this.company=company;
    }
    display() {
        console.log(this.name+" " +this.company);
    }

   
}