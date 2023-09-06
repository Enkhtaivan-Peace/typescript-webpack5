interface Car{
    brand: string;
    year: number
}
const myCar: Car = {
    brand: 'Lexus',
    year: 2023
}

const theYear = Object.getOwnPropertyDescriptor(myCar, 'year' )
console.log(theYear)
myCar.year = 2020;

Object.defineProperty(myCar, 'year', { writable: false })  // тухайн обьектын тухайн property - ийг өөрчлөх боломжийг хааж өгч бна

myCar.year = 2030

console.log(myCar)