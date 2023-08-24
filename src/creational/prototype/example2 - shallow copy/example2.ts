// SHALLOW COPY
export interface Prototype{
    clone(): Prototype
}

export class Person implements Prototype{
    constructor(public name: string, public age: number){
        
    }
    clone(): this {
        const newObject = Object.create(this)
        return newObject
    }
}

const person1 = new Person('wil', 38)
const person2 = person1.clone()

console.log(person2) // {}
console.log(person2.name) // wil

person2.name = 'wagner' // shadowing
console.log(person2) // {name: 'wagner'}
console.log(person2.name) // wagner

