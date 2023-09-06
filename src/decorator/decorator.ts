// decorator буюу meta programming
//decorator factory
// decorator нь тухайн класс тодорхойлогдох үед дуудагдана
function Component(selector: string, template: string) {
    return (cnFunction: any) => {
        const ele = document.getElementById(selector)
        ele!.innerHTML = template;

        // const p = new cnFunction('Typescript', 522222)
        // console.log(p)

        return class extends cnFunction{
            color: string | undefined;
            constructor(public name:string){
                super()
                this.color = 'red';
                console.log('шинэ байгуулагч функц')
            }
        }
    }
}

function Clickable(selector: string, message: string) {
    return (cnFunction: Function) => {
        const ele = document.getElementById(selector)
        if(ele !== null){
            ele.addEventListener('click', event => {
                alert(message)
            })
        }
    }
}

function ReadOnlyFunction(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(target, key, descriptor)
    descriptor.writable = false; // энэ decorator - ийг хэрэглэх функцийн хувьд утгыг нь гаднаас override хийж дарахгүй гэсэн тохиргоо
}

function Enumarable(target:any, key: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = true
}

function Required(target: any, key: string, index:number) {
    console.log(target, key,  index)
}

function Input(target:any, key:string) {
    console.log(target, key)
}
function Output(target:any, key:string) {
    console.log(target, key)
}

export { Component, Clickable, ReadOnlyFunction , Enumarable, Required, Input, Output }