import {Shape} from './Shape';

export class Circle extends Shape{

    radius:number;
    pi:number;

    constructor(myradius:number, pi:number){
        super();
        this.radius=myradius;
        this.pi=pi;
    }
    area(){
        super.area();
        console.log("area of circle is" +
        this.pi*this.radius*this.radius);
    }
}