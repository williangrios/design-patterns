
const personPrototype = {
    firstName: 'willian',
    lastName: 'rios',
    age: 38,

    fullName(): string{
        return `${this.firstName} ${this.lastName}` 
    }
}

const anotherPerson = Object.create(personPrototype)
anotherPerson.firstName = 'Wagner' // shadowing
console.log(anotherPerson.firstName) // Wagner 
console.log(anotherPerson.fullName()) // Wagner Rios

