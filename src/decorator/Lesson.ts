import { Enumarable, Input, Output, ReadOnlyFunction, Required } from "./decorator";
export class Lesson {
    @Output
    category:string;
    @Input
    name: string
    constructor(name:string, public price:number){
        this.category = 'dev';
        this.name = name
    }

    //class accessor / getters setters /
    get superSalePrice():number {
        return this.price * 0.7;
    }

    // class methods
    // функцэд decorator тавьж болно
    @ReadOnlyFunction
    @Enumarable
    sell(@Required sale :number) :void {
        console.log(`${this.name} - ${this.price * sale} үнээр зарагдлаа`)
    }
}