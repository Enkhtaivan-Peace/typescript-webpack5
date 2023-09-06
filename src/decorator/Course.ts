import { Clickable, Component } from "./decorator";

@Component('myApp', '<h1>Би бол decorator. Над дээр дарна уу</h1>')
@Clickable('myApp', 'decorator бичих гоё юмаа')
class Course {
    constructor(public name:string){
        console.log('анхдагч байгуулагч функц')

    }
}
export { Course }
